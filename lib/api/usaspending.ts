/**
 * USAspending.gov API Client
 * https://api.usaspending.gov/
 * 
 * No API key required - free public access
 */

const BASE_URL = 'https://api.usaspending.gov/api/v2';

interface SpendingByCategory {
  results: Array<{
    aggregated_amount: number;
    category: string;
    code: string;
    name: string;
  }>;
}

interface AwardSearch {
  results: Array<{
    Award: {
      id: number;
      type: string;
      description: string;
      total_obligation: number;
      date_signed: string;
    };
    Recipient: {
      recipient_name: string;
      location: {
        state_code: string;
        city_name: string;
      };
    };
  }>;
  page_metadata: {
    page: number;
    total: number;
  };
}

interface FederalAccount {
  account_title: string;
  account_number: string;
  budgetary_resources: number;
  obligations_incurred: number;
}

export interface InfrastructureSpending {
  fiscal_year: number;
  total_outlays: number;
  total_obligations: number;
  agencies: Array<{
    name: string;
    code: string;
    amount: number;
  }>;
}

export class USASpendingAPI {
  private async post<T>(endpoint: string, body: any): Promise<T> {
    const url = `${BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      next: { revalidate: 86400 }, // Cache for 24 hours
    });
    
    if (!response.ok) {
      throw new Error(`USAspending API error: ${response.status}`);
    }

    return response.json();
  }

  private async get<T>(endpoint: string): Promise<T> {
    const url = `${BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 86400 },
    });
    
    if (!response.ok) {
      throw new Error(`USAspending API error: ${response.status}`);
    }

    return response.json();
  }

  /**
   * Get spending by category for a fiscal year
   */
  async getSpendingByCategory(fiscalYear: number, category: 'budget_function' | 'object_class' = 'budget_function'): Promise<SpendingByCategory> {
    return this.post<SpendingByCategory>('/spending/by_category', {
      fiscal_year: fiscalYear,
      category,
      subawards: false,
    });
  }

  /**
   * Search awards (contracts, grants, loans) with filters
   */
  async searchAwards(params: {
    keywords?: string[];
    award_type_codes?: string[]; // e.g., ['A', 'B', 'C', 'D'] for contracts
    time_period?: Array<{ start_date: string; end_date: string }>;
    place_of_performance_scope?: 'domestic' | 'foreign';
    agencies?: Array<{ type: 'awarding' | 'funding'; tier: 'toptier' | 'subtier'; name: string }>;
    limit?: number;
    page?: number;
  }): Promise<AwardSearch> {
    return this.post<AwardSearch>('/search/spending_by_award', {
      filters: params,
      fields: ['Award', 'Recipient', 'Award Type'],
      limit: params.limit || 100,
      page: params.page || 1,
      sort: 'Award Amount',
      order: 'desc',
    });
  }

  /**
   * Get infrastructure spending by searching for relevant keywords
   */
  async getInfrastructureSpending(fiscalYear: number): Promise<any> {
    const keywords = [
      'infrastructure',
      'transportation',
      'highway',
      'bridge',
      'water',
      'broadband',
      'rail',
      'transit',
      'airport',
      'port',
    ];

    return this.searchAwards({
      keywords,
      time_period: [
        {
          start_date: `${fiscalYear - 1}-10-01`,
          end_date: `${fiscalYear}-09-30`,
        },
      ],
      place_of_performance_scope: 'domestic',
      limit: 1000,
    });
  }

  /**
   * Get spending by agency for a fiscal year
   */
  async getSpendingByAgency(fiscalYear: number, limit: number = 50): Promise<any> {
    return this.post('/spending/by_agency', {
      fiscal_year: fiscalYear,
      limit,
    });
  }

  /**
   * Get federal account details
   */
  async getFederalAccount(accountNumber: string): Promise<FederalAccount> {
    return this.get<FederalAccount>(`/federal_accounts/${accountNumber}`);
  }

  /**
   * Get spending over time for a specific category or agency
   */
  async getSpendingOverTime(params: {
    group: 'fiscal_year' | 'quarter' | 'month';
    filters?: {
      fiscal_year?: number;
      agencies?: Array<{ type: string; tier: string; name: string }>;
      budget_function?: string;
    };
  }): Promise<any> {
    return this.post('/spending_over_time', params);
  }

  /**
   * Get summary of domestic vs foreign spending
   */
  async getDomesticVsForeignSpending(fiscalYear: number): Promise<{ domestic: number; foreign: number }> {
    const domesticPromise = this.searchAwards({
      time_period: [
        {
          start_date: `${fiscalYear - 1}-10-01`,
          end_date: `${fiscalYear}-09-30`,
        },
      ],
      place_of_performance_scope: 'domestic',
      limit: 1,
    });

    const foreignPromise = this.searchAwards({
      time_period: [
        {
          start_date: `${fiscalYear - 1}-10-01`,
          end_date: `${fiscalYear}-09-30`,
        },
      ],
      place_of_performance_scope: 'foreign',
      limit: 1,
    });

    const [domestic, foreign] = await Promise.all([domesticPromise, foreignPromise]);

    return {
      domestic: domestic.page_metadata.total,
      foreign: foreign.page_metadata.total,
    };
  }

  /**
   * Get infrastructure spending breakdown by capital vs operations
   */
  async getInfrastructureBreakdown(fiscalYear: number): Promise<{
    capital: number;
    operations: number;
    maintenance: number;
  }> {
    const spendingData = await this.getSpendingByCategory(fiscalYear, 'object_class');
    
    // Object class codes for capital (310), operations (250), and maintenance (260)
    const capital = spendingData.results
      .filter(r => r.code.startsWith('31'))
      .reduce((sum, r) => sum + r.aggregated_amount, 0);
    
    const operations = spendingData.results
      .filter(r => r.code.startsWith('25'))
      .reduce((sum, r) => sum + r.aggregated_amount, 0);
    
    const maintenance = spendingData.results
      .filter(r => r.code.startsWith('26'))
      .reduce((sum, r) => sum + r.aggregated_amount, 0);

    return { capital, operations, maintenance };
  }
}

export const usaspendingAPI = new USASpendingAPI();
