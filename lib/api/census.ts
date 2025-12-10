/**
 * U.S. Census Bureau API Client
 * https://www.census.gov/data/developers/data-sets.html
 * 
 * Purpose: Demographic & construction spending context
 * - Public Construction Spending (VIP) - monthly validation of spending data
 * - Building Permits - gauge regional demand
 * - Annual Capital Expenditures Survey
 * - American Community Survey (ACS) - demographic benefit analysis
 */

const CENSUS_API_KEY = process.env.CENSUS_API_KEY || '';

export interface CensusVIPData {
  year: string;
  month: string;
  category: string;
  value: string;
}

export interface CensusACSData {
  NAME: string;
  [key: string]: string;
}

/**
 * Census API Series and Categories
 */
export const CENSUS_SERIES = {
  // Value in Place (VIP) - Construction Spending
  VIP_TOTAL_PUBLIC: 'TOTAL_PUBLIC',
  VIP_HIGHWAY_STREET: 'HIGHWAY_AND_STREET',
  VIP_WATER_SUPPLY: 'WATER_SUPPLY',
  VIP_SEWAGE_WASTE: 'SEWAGE_AND_WASTE_DISPOSAL',
  VIP_CONSERVATION: 'CONSERVATION_AND_DEVELOPMENT',
  VIP_POWER: 'POWER',
  
  // ACS Variables for Benefit Analysis
  ACS_MEDIAN_INCOME: 'B19013_001E', // Median household income
  ACS_POVERTY_RATE: 'B17001_002E', // Poverty count
  ACS_TOTAL_POPULATION: 'B01003_001E', // Total population
  ACS_INCOME_UNDER_25K: 'B19001_002E', // Households <$25k
  ACS_INCOME_25K_50K: 'B19001_006E', // Households $25k-$50k
  ACS_INCOME_50K_100K: 'B19001_011E', // Households $50k-$100k
  ACS_INCOME_100K_PLUS: 'B19001_014E', // Households $100k+
} as const;

export class CensusAPI {
  private apiKey: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || CENSUS_API_KEY;
  }

  /**
   * Get public construction spending (VIP series)
   * HIGH-FREQUENCY CHECK against aggregated federal/state spending
   */
  async getPublicConstructionSpending(
    year: number,
    month?: number
  ): Promise<Array<{
    year: number;
    month: number;
    category: string;
    value: number;
  }>> {
    const monthParam = month ? `&for=month:${month.toString().padStart(2, '0')}` : '';
    
    const response = await fetch(
      `https://api.census.gov/data/${year}/eits/vip?` +
      `get=GEONAME,CAT_CODE,VAL&for=us:*${monthParam}&key=${this.apiKey}`,
      { next: { revalidate: 2592000 } } // 30 days
    );

    if (!response.ok) {
      throw new Error(`Census VIP API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Parse response (first row is headers)
    return data.slice(1).map((row: string[]) => ({
      year,
      month: parseInt(row[3] || '0'),
      category: row[1],
      value: parseFloat(row[2]),
    }));
  }

  /**
   * Get annual public construction spending by category
   */
  async getAnnualPublicConstructionByCategory(
    year: number
  ): Promise<{
    highway: number;
    waterSupply: number;
    sewage: number;
    conservation: number;
    power: number;
    total: number;
  }> {
    const data = await this.getPublicConstructionSpending(year);
    
    const sumByCategory = (categoryCode: string) => {
      return data
        .filter(d => d.category === categoryCode)
        .reduce((sum, d) => sum + d.value, 0);
    };

    return {
      highway: sumByCategory(CENSUS_SERIES.VIP_HIGHWAY_STREET),
      waterSupply: sumByCategory(CENSUS_SERIES.VIP_WATER_SUPPLY),
      sewage: sumByCategory(CENSUS_SERIES.VIP_SEWAGE_WASTE),
      conservation: sumByCategory(CENSUS_SERIES.VIP_CONSERVATION),
      power: sumByCategory(CENSUS_SERIES.VIP_POWER),
      total: sumByCategory(CENSUS_SERIES.VIP_TOTAL_PUBLIC),
    };
  }

  /**
   * Get income distribution by state for benefit scope analysis
   * WHO BENEFITS from infrastructure spending?
   */
  async getIncomeDistribution(
    year: number = 2022,
    geography: 'state' | 'county' = 'state'
  ): Promise<Array<{
    name: string;
    geoId: string;
    medianIncome: number;
    under25k: number;
    between25kAnd50k: number;
    between50kAnd100k: number;
    over100k: number;
    totalPopulation: number;
  }>> {
    const geoParam = geography === 'state' ? 'state:*' : 'county:*';
    
    const response = await fetch(
      `https://api.census.gov/data/${year}/acs/acs1?` +
      `get=NAME,${CENSUS_SERIES.ACS_MEDIAN_INCOME},${CENSUS_SERIES.ACS_TOTAL_POPULATION},` +
      `${CENSUS_SERIES.ACS_INCOME_UNDER_25K},${CENSUS_SERIES.ACS_INCOME_25K_50K},` +
      `${CENSUS_SERIES.ACS_INCOME_50K_100K},${CENSUS_SERIES.ACS_INCOME_100K_PLUS}&` +
      `for=${geoParam}&key=${this.apiKey}`,
      { next: { revalidate: 31536000 } } // 1 year (annual data)
    );

    if (!response.ok) {
      throw new Error(`Census ACS API error: ${response.status}`);
    }

    const data: string[][] = await response.json();
    
    // Parse response (first row is headers)
    return data.slice(1).map((row) => ({
      name: row[0],
      geoId: row[row.length - 1],
      medianIncome: parseInt(row[1]) || 0,
      totalPopulation: parseInt(row[2]) || 0,
      under25k: parseInt(row[3]) || 0,
      between25kAnd50k: parseInt(row[4]) || 0,
      between50kAnd100k: parseInt(row[5]) || 0,
      over100k: parseInt(row[6]) || 0,
    }));
  }

  /**
   * Get state/local government spending on construction
   * Complements federal spending from USAspending.gov
   */
  async getStateLocalCapitalOutlay(year: number): Promise<Array<{
    state: string;
    capitalOutlay: number;
    constructionSpending: number;
  }>> {
    const response = await fetch(
      `https://api.census.gov/data/${year}/govs?` +
      `get=GEO_ID,NAME,CAPITAL_OUTLAY,CONSTRUCTION&` +
      `for=state:*&key=${this.apiKey}`,
      { next: { revalidate: 31536000 } } // 1 year
    );

    if (!response.ok) {
      throw new Error(`Census Governments API error: ${response.status}`);
    }

    const data: string[][] = await response.json();
    
    return data.slice(1).map((row) => ({
      state: row[1],
      capitalOutlay: parseInt(row[2]) || 0,
      constructionSpending: parseInt(row[3]) || 0,
    }));
  }

  /**
   * Calculate demographic benefit score for infrastructure
   * Returns 0-100 score based on income distribution reach
   */
  calculateBenefitScopeFromDemographics(
    incomeDistribution: Array<{
      under25k: number;
      between25kAnd50k: number;
      between50kAnd100k: number;
      over100k: number;
    }>
  ): number {
    // Sum across all geographies
    const totals = incomeDistribution.reduce(
      (acc, geo) => ({
        under25k: acc.under25k + geo.under25k,
        between25kAnd50k: acc.between25kAnd50k + geo.between25kAnd50k,
        between50kAnd100k: acc.between50kAnd100k + geo.between50kAnd100k,
        over100k: acc.over100k + geo.over100k,
      }),
      { under25k: 0, between25kAnd50k: 0, between50kAnd100k: 0, over100k: 0 }
    );

    const total = totals.under25k + totals.between25kAnd50k + totals.between50kAnd100k + totals.over100k;
    
    if (total === 0) return 0;

    // Weight lower income brackets higher (infrastructure benefits lower/middle class more)
    const weightedScore = (
      (totals.under25k / total) * 100 * 0.4 +           // 40% weight
      (totals.between25kAnd50k / total) * 100 * 0.35 +  // 35% weight
      (totals.between50kAnd100k / total) * 100 * 0.20 + // 20% weight
      (totals.over100k / total) * 100 * 0.05            // 5% weight
    );

    return Math.round(weightedScore);
  }

  /**
   * Get building permits data (gauge regional demand)
   */
  async getBuildingPermits(year: number, state?: string): Promise<Array<{
    state: string;
    permits: number;
    value: number;
  }>> {
    const stateParam = state ? `&for=state:${state}` : '&for=state:*';
    
    const response = await fetch(
      `https://api.census.gov/data/${year}/bps?` +
      `get=GEO_ID,NAME,PERMIT,VALUE${stateParam}&key=${this.apiKey}`,
      { next: { revalidate: 2592000 } } // 30 days
    );

    if (!response.ok) {
      throw new Error(`Census Building Permits API error: ${response.status}`);
    }

    const data: string[][] = await response.json();
    
    return data.slice(1).map((row) => ({
      state: row[1],
      permits: parseInt(row[2]) || 0,
      value: parseInt(row[3]) || 0,
    }));
  }
}

// Singleton instance
export const censusAPI = new CensusAPI();
