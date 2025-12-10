/**
 * Bureau of Labor Statistics (BLS) API Client
 * https://www.bls.gov/developers/
 * 
 * Purpose: Economic & labor context for infrastructure analysis
 * - Producer Price Index (PPI) for construction materials
 * - Consumer Price Index (CPI) for inflation adjustment
 * - Employment data in construction and utility sectors
 */

const BLS_API_KEY = process.env.BLS_API_KEY || '';
const BASE_URL = 'https://api.bls.gov/publicAPI/v2';

interface BLSSeriesData {
  year: string;
  period: string;
  periodName: string;
  value: string;
  footnotes?: Array<{ code: string; text: string }>;
}

interface BLSResponse {
  status: string;
  responseTime: number;
  message: string[];
  Results: {
    series: Array<{
      seriesID: string;
      data: BLSSeriesData[];
    }>;
  };
}

/**
 * Key BLS Series IDs for Infrastructure Analysis
 */
export const BLS_SERIES = {
  // Producer Price Index - Construction Materials
  PPI_CONSTRUCTION_MATERIALS: 'PCU23700023700', // Heavy & civil engineering construction
  PPI_CONCRETE: 'WPU13240101', // Ready-mix concrete
  PPI_STEEL: 'WPU10170301', // Steel mill products
  PPI_ASPHALT: 'WPU05740223', // Asphalt paving mixtures and blocks
  
  // Consumer Price Index
  CPI_ALL_ITEMS: 'CUUR0000SA0', // All items, US city average
  CPI_ENERGY: 'CUUR0000SA0E', // Energy, US city average
  
  // Employment - Construction & Utilities
  EMPLOYMENT_CONSTRUCTION: 'CES2000000001', // Total construction employment
  EMPLOYMENT_HEAVY_CIVIL: 'CES2023700001', // Heavy & civil engineering employment
  EMPLOYMENT_UTILITIES: 'CES4300000001', // Utilities employment
  
  // Average Hourly Earnings
  EARNINGS_CONSTRUCTION: 'CES2000000003', // Construction average hourly earnings
} as const;

export class BLSAPI {
  private apiKey: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || BLS_API_KEY;
  }

  /**
   * Fetch data for one or more series
   * @param seriesIds Array of BLS series IDs (max 50 for v2 API)
   * @param startYear Start year (YYYY)
   * @param endYear End year (YYYY)
   */
  async getSeries(
    seriesIds: string[],
    startYear: number,
    endYear: number
  ): Promise<BLSResponse> {
    const body = {
      seriesid: seriesIds,
      startyear: startYear.toString(),
      endyear: endYear.toString(),
      registrationkey: this.apiKey,
      calculations: true, // Include 12-month percent changes
      annualaverage: true, // Include annual averages
    };

    const response = await fetch(`${BASE_URL}/timeseries/data/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      next: { revalidate: 2592000 }, // 30 days (monthly data)
    });

    if (!response.ok) {
      throw new Error(`BLS API error: ${response.status}`);
    }

    return response.json();
  }

  /**
   * Get Producer Price Index for construction materials
   * Use as deflator for inflation-adjusted spending
   */
  async getConstructionPPI(startYear: number = 2010): Promise<Array<{ year: number; month: number; value: number }>> {
    const endYear = new Date().getFullYear();
    const response = await this.getSeries(
      [BLS_SERIES.PPI_CONSTRUCTION_MATERIALS],
      startYear,
      endYear
    );

    const series = response.Results.series[0];
    if (!series) return [];

    return series.data
      .filter(d => d.period.startsWith('M')) // Monthly data only
      .map(d => ({
        year: parseInt(d.year),
        month: parseInt(d.period.substring(1)),
        value: parseFloat(d.value),
      }))
      .sort((a, b) => a.year - b.year || a.month - b.month);
  }

  /**
   * Get annual average PPI for year-over-year comparison
   */
  async getAnnualConstructionPPI(startYear: number = 1998): Promise<Array<{ year: number; value: number }>> {
    const endYear = new Date().getFullYear();
    const response = await this.getSeries(
      [BLS_SERIES.PPI_CONSTRUCTION_MATERIALS],
      startYear,
      endYear
    );

    const series = response.Results.series[0];
    if (!series) return [];

    return series.data
      .filter(d => d.period === 'M13') // M13 = annual average
      .map(d => ({
        year: parseInt(d.year),
        value: parseFloat(d.value),
      }))
      .sort((a, b) => a.year - b.year);
  }

  /**
   * Get construction employment data
   * Track job creation from infrastructure spending
   */
  async getConstructionEmployment(startYear: number = 2010): Promise<Array<{ year: number; month: number; employees: number }>> {
    const endYear = new Date().getFullYear();
    const response = await this.getSeries(
      [BLS_SERIES.EMPLOYMENT_CONSTRUCTION],
      startYear,
      endYear
    );

    const series = response.Results.series[0];
    if (!series) return [];

    return series.data
      .filter(d => d.period.startsWith('M'))
      .map(d => ({
        year: parseInt(d.year),
        month: parseInt(d.period.substring(1)),
        employees: parseFloat(d.value) * 1000, // BLS reports in thousands
      }))
      .sort((a, b) => a.year - b.year || a.month - b.month);
  }

  /**
   * Get heavy & civil engineering employment specifically
   * Most relevant for infrastructure projects
   */
  async getHeavyCivilEmployment(startYear: number = 2010): Promise<Array<{ year: number; month: number; employees: number }>> {
    const endYear = new Date().getFullYear();
    const response = await this.getSeries(
      [BLS_SERIES.EMPLOYMENT_HEAVY_CIVIL],
      startYear,
      endYear
    );

    const series = response.Results.series[0];
    if (!series) return [];

    return series.data
      .filter(d => d.period.startsWith('M'))
      .map(d => ({
        year: parseInt(d.year),
        month: parseInt(d.period.substring(1)),
        employees: parseFloat(d.value) * 1000,
      }))
      .sort((a, b) => a.year - b.year || a.month - b.month);
  }

  /**
   * Get multiple material prices for cost analysis
   */
  async getConstructionMaterialPrices(startYear: number = 2010): Promise<{
    concrete: Array<{ year: number; month: number; value: number }>;
    steel: Array<{ year: number; month: number; value: number }>;
    asphalt: Array<{ year: number; month: number; value: number }>;
  }> {
    const endYear = new Date().getFullYear();
    const response = await this.getSeries(
      [
        BLS_SERIES.PPI_CONCRETE,
        BLS_SERIES.PPI_STEEL,
        BLS_SERIES.PPI_ASPHALT,
      ],
      startYear,
      endYear
    );

    const parseData = (seriesIndex: number) => {
      const series = response.Results.series[seriesIndex];
      if (!series) return [];
      
      return series.data
        .filter(d => d.period.startsWith('M'))
        .map(d => ({
          year: parseInt(d.year),
          month: parseInt(d.period.substring(1)),
          value: parseFloat(d.value),
        }))
        .sort((a, b) => a.year - b.year || a.month - b.month);
    };

    return {
      concrete: parseData(0),
      steel: parseData(1),
      asphalt: parseData(2),
    };
  }

  /**
   * Calculate inflation adjustment factor using PPI
   * Alternative to FRED CPI for construction-specific adjustment
   */
  async getInflationFactor(baseYear: number, targetYear: number): Promise<number> {
    const ppiData = await this.getAnnualConstructionPPI(
      Math.min(baseYear, targetYear)
    );

    const baseYearPPI = ppiData.find(d => d.year === baseYear)?.value;
    const targetYearPPI = ppiData.find(d => d.year === targetYear)?.value;

    if (!baseYearPPI || !targetYearPPI) {
      throw new Error(`PPI data not available for years ${baseYear} or ${targetYear}`);
    }

    return targetYearPPI / baseYearPPI;
  }

  /**
   * Adjust spending value for construction-specific inflation
   */
  async adjustForConstructionInflation(
    value: number,
    fromYear: number,
    toYear: number = 2023
  ): Promise<number> {
    const factor = await this.getInflationFactor(fromYear, toYear);
    return value * factor;
  }
}

// Singleton instance
export const blsAPI = new BLSAPI();
