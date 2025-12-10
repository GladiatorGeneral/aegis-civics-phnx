/**
 * FRED (Federal Reserve Economic Data) API Client
 * https://fred.stlouisfed.org/docs/api/fred/
 * 
 * Get your API key at: https://fred.stlouisfed.org/docs/api/api_key.html
 */

const FRED_API_KEY = process.env.FRED_API_KEY || '';
const BASE_URL = 'https://api.stlouisfed.org/fred';

interface FREDObservation {
  date: string;
  value: string;
  realtime_start: string;
  realtime_end: string;
}

interface FREDSeries {
  id: string;
  title: string;
  observation_start: string;
  observation_end: string;
  frequency: string;
  units: string;
  seasonal_adjustment: string;
  last_updated: string;
}

interface SeriesObservations {
  observations: FREDObservation[];
  realtime_start: string;
  realtime_end: string;
  observation_start: string;
  observation_end: string;
}

export class FREDAPI {
  private apiKey: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || FRED_API_KEY;
  }

  private async get<T>(endpoint: string, params: Record<string, any> = {}): Promise<T> {
    const queryParams = new URLSearchParams({
      api_key: this.apiKey,
      file_type: 'json',
      ...Object.entries(params).reduce((acc, [key, value]) => {
        if (value !== undefined && value !== null) {
          acc[key] = String(value);
        }
        return acc;
      }, {} as Record<string, string>),
    });

    const url = `${BASE_URL}${endpoint}?${queryParams}`;
    const response = await fetch(url, { 
      next: { revalidate: 86400 } // Cache for 24 hours
    });
    
    if (!response.ok) {
      throw new Error(`FRED API error: ${response.status}`);
    }

    return response.json();
  }

  /**
   * Get series information
   */
  async getSeries(seriesId: string): Promise<{ seriess: FREDSeries[] }> {
    return this.get<{ seriess: FREDSeries[] }>('/series', { series_id: seriesId });
  }

  /**
   * Get observations (data points) for a series
   */
  async getObservations(
    seriesId: string,
    params?: {
      observation_start?: string; // YYYY-MM-DD
      observation_end?: string; // YYYY-MM-DD
      sort_order?: 'asc' | 'desc';
      limit?: number;
      offset?: number;
    }
  ): Promise<SeriesObservations> {
    return this.get<SeriesObservations>('/series/observations', {
      series_id: seriesId,
      ...params,
    });
  }

  /**
   * Get CPI-U (Consumer Price Index for All Urban Consumers) data
   * Series ID: CPIAUCSL
   */
  async getCPIU(startDate?: string, endDate?: string): Promise<SeriesObservations> {
    return this.getObservations('CPIAUCSL', {
      observation_start: startDate,
      observation_end: endDate,
      sort_order: 'desc',
    });
  }

  /**
   * Get GDP Deflator data
   * Series ID: GDPDEF
   */
  async getGDPDeflator(startDate?: string, endDate?: string): Promise<SeriesObservations> {
    return this.getObservations('GDPDEF', {
      observation_start: startDate,
      observation_end: endDate,
      sort_order: 'desc',
    });
  }

  /**
   * Calculate inflation adjustment factor between two years
   */
  async getInflationFactor(baseYear: number, targetYear: number): Promise<number> {
    const cpiData = await this.getCPIU(`${Math.min(baseYear, targetYear)}-01-01`, `${Math.max(baseYear, targetYear)}-12-31`);
    
    const baseYearCPI = cpiData.observations
      .filter(obs => obs.date.startsWith(String(baseYear)))
      .map(obs => parseFloat(obs.value))
      .filter(val => !isNaN(val));
    
    const targetYearCPI = cpiData.observations
      .filter(obs => obs.date.startsWith(String(targetYear)))
      .map(obs => parseFloat(obs.value))
      .filter(val => !isNaN(val));

    if (baseYearCPI.length === 0 || targetYearCPI.length === 0) {
      throw new Error(`Missing CPI data for ${baseYear} or ${targetYear}`);
    }

    const baseAvg = baseYearCPI.reduce((a, b) => a + b, 0) / baseYearCPI.length;
    const targetAvg = targetYearCPI.reduce((a, b) => a + b, 0) / targetYearCPI.length;

    return targetAvg / baseAvg;
  }

  /**
   * Convert nominal dollars to constant dollars (inflation-adjusted)
   */
  async adjustForInflation(
    nominalValue: number,
    nominalYear: number,
    constantYear: number = 2023
  ): Promise<number> {
    const factor = await this.getInflationFactor(nominalYear, constantYear);
    return nominalValue * factor;
  }

  /**
   * Get annual CPI for a range of years
   */
  async getAnnualCPI(startYear: number, endYear: number): Promise<Array<{ year: number; cpi: number }>> {
    const cpiData = await this.getCPIU(`${startYear}-01-01`, `${endYear}-12-31`);
    
    const yearlyAverages: Record<number, number[]> = {};
    
    cpiData.observations.forEach(obs => {
      const year = parseInt(obs.date.substring(0, 4));
      const value = parseFloat(obs.value);
      
      if (!isNaN(value)) {
        if (!yearlyAverages[year]) {
          yearlyAverages[year] = [];
        }
        yearlyAverages[year].push(value);
      }
    });

    return Object.entries(yearlyAverages)
      .map(([year, values]) => ({
        year: parseInt(year),
        cpi: values.reduce((a, b) => a + b, 0) / values.length,
      }))
      .sort((a, b) => a.year - b.year);
  }

  /**
   * Get PCE (Personal Consumption Expenditures) Price Index
   * Series ID: PCEPI (alternative to CPI)
   */
  async getPCE(startDate?: string, endDate?: string): Promise<SeriesObservations> {
    return this.getObservations('PCEPI', {
      observation_start: startDate,
      observation_end: endDate,
      sort_order: 'desc',
    });
  }

  /**
   * Get Core CPI (CPI excluding food and energy)
   * Series ID: CPILFESL
   */
  async getCoreCPI(startDate?: string, endDate?: string): Promise<SeriesObservations> {
    return this.getObservations('CPILFESL', {
      observation_start: startDate,
      observation_end: endDate,
      sort_order: 'desc',
    });
  }
}

export const fredAPI = new FREDAPI();
