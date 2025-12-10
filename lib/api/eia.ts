/**
 * Energy Information Administration (EIA) API Client
 * https://www.eia.gov/opendata/
 * 
 * Purpose: Energy & fuel cost context for infrastructure analysis
 * - State-level energy prices (SEDS)
 * - Petroleum & natural gas prices
 * - Electric power data
 * - Correlate energy costs with construction project timing/costs
 */

const EIA_API_KEY = process.env.EIA_API_KEY || '';
const BASE_URL = 'https://api.eia.gov/v2';

interface EIAResponse<T = unknown> {
  response: {
    data: T[];
    total?: number;
  };
}

export interface EIAEnergyPrice {
  period: string;
  stateId?: string;
  stateName?: string;
  value: number;
  units: string;
}

export interface EIAElectricityData {
  period: string;
  stateId?: string;
  value: number;
  units: string;
}

/**
 * Key EIA Data Series for Infrastructure Analysis
 */
export const EIA_SERIES = {
  // Petroleum prices (impacts asphalt costs, construction equipment fuel)
  CRUDE_OIL_WTI: 'PET.RWTC.W', // West Texas Intermediate crude oil price
  DIESEL_RETAIL: 'PET.EMD_EPD2D_PTE_NUS_DPG.W', // US No. 2 diesel retail price
  GASOLINE_RETAIL: 'PET.EMM_EPMR_PTE_NUS_DPG.W', // US regular gasoline retail price
  
  // Natural gas (impacts heating, electricity generation)
  NATURAL_GAS_CITYGATE: 'NG.N3020US3.M', // US citygate price
  NATURAL_GAS_ELECTRIC: 'NG.N3045US3.M', // US electric power price
  
  // Electricity (impacts construction costs, operational costs)
  ELECTRICITY_RESIDENTIAL: 'ELEC.PRICE.RES-US.M', // US residential electricity price
  ELECTRICITY_COMMERCIAL: 'ELEC.PRICE.COM-US.M', // US commercial electricity price
  ELECTRICITY_INDUSTRIAL: 'ELEC.PRICE.IND-US.M', // US industrial electricity price
} as const;

export class EIAAPI {
  private apiKey: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || EIA_API_KEY;
  }

  private async fetch<T>(
    endpoint: string,
    params: Record<string, string | number> = {}
  ): Promise<EIAResponse<T>> {
    const queryParams = new URLSearchParams({
      api_key: this.apiKey,
      ...Object.fromEntries(
        Object.entries(params).map(([k, v]) => [k, String(v)])
      ),
    });

    const url = `${BASE_URL}${endpoint}?${queryParams}`;
    const response = await fetch(url, {
      next: { revalidate: 2592000 }, // 30 days (monthly data)
    });

    if (!response.ok) {
      throw new Error(`EIA API error: ${response.status}`);
    }

    return response.json();
  }

  /**
   * Get diesel fuel prices (critical for construction equipment)
   * Correlate with project cost overruns
   */
  async getDieselPrices(startDate?: string, endDate?: string): Promise<Array<{ date: string; price: number }>> {
    const params: Record<string, string> = {
      frequency: 'monthly',
      'data[0]': 'value',
      'facets[product][]': 'EPD2D',
      sort: JSON.stringify([{ column: 'period', direction: 'asc' }]),
    };

    if (startDate) params.start = startDate;
    if (endDate) params.end = endDate;

    const response = await this.fetch<{ period: string; value: number }>(
      '/petroleum/pri/spt/data/',
      params
    );

    return response.response.data.map(d => ({
      date: d.period,
      price: d.value,
    }));
  }

  /**
   * Get state-level electricity prices
   * Infrastructure projects have significant electricity needs
   */
  async getStateElectricityPrices(
    state: string,
    startDate?: string,
    endDate?: string
  ): Promise<Array<{ date: string; price: number; sector: string }>> {
    const params: Record<string, string> = {
      frequency: 'monthly',
      'data[0]': 'price',
      'facets[stateid][]': state,
      sort: JSON.stringify([{ column: 'period', direction: 'asc' }]),
    };

    if (startDate) params.start = startDate;
    if (endDate) params.end = endDate;

    const response = await this.fetch<{
      period: string;
      price: number;
      sectorid: string;
    }>('/electricity/retail-sales/data/', params);

    return response.response.data.map(d => ({
      date: d.period,
      price: d.price,
      sector: d.sectorid,
    }));
  }

  /**
   * Get natural gas prices (impacts construction heating, operations)
   */
  async getNaturalGasPrices(startDate?: string, endDate?: string): Promise<Array<{ date: string; price: number }>> {
    const params: Record<string, string> = {
      frequency: 'monthly',
      'data[0]': 'value',
      'facets[process][]': 'PRS',
      sort: JSON.stringify([{ column: 'period', direction: 'asc' }]),
    };

    if (startDate) params.start = startDate;
    if (endDate) params.end = endDate;

    const response = await this.fetch<{ period: string; value: number }>(
      '/natural-gas/pri/sum/data/',
      params
    );

    return response.response.data.map(d => ({
      date: d.period,
      price: d.value,
    }));
  }

  /**
   * Get comprehensive energy cost index for a year
   * Correlate with infrastructure spending/cost overruns
   */
  async getAnnualEnergyCostIndex(year: number): Promise<{
    diesel: number;
    gasoline: number;
    electricity: number;
    naturalGas: number;
  }> {
    const startDate = `${year}-01`;
    const endDate = `${year}-12`;

    const [diesel, electricity, gas] = await Promise.all([
      this.getDieselPrices(startDate, endDate),
      this.getStateElectricityPrices('US', startDate, endDate),
      this.getNaturalGasPrices(startDate, endDate),
    ]);

    // Calculate annual averages
    const avgDiesel = diesel.reduce((sum, d) => sum + d.price, 0) / diesel.length;
    const avgElectricity = electricity
      .filter(e => e.sector === 'IND') // Industrial sector most relevant
      .reduce((sum, e) => sum + e.price, 0) / electricity.filter(e => e.sector === 'IND').length;
    const avgGas = gas.reduce((sum, g) => sum + g.price, 0) / gas.length;

    return {
      diesel: avgDiesel,
      gasoline: avgDiesel * 0.95, // Approximate relationship
      electricity: avgElectricity,
      naturalGas: avgGas,
    };
  }

  /**
   * Calculate energy cost impact on infrastructure projects
   * Returns percentage increase/decrease vs baseline year
   */
  async calculateEnergyCostImpact(
    currentYear: number,
    baselineYear: number = 2015
  ): Promise<{
    diesel: number;
    electricity: number;
    naturalGas: number;
    composite: number;
  }> {
    const [current, baseline] = await Promise.all([
      this.getAnnualEnergyCostIndex(currentYear),
      this.getAnnualEnergyCostIndex(baselineYear),
    ]);

    const dieselChange = ((current.diesel - baseline.diesel) / baseline.diesel) * 100;
    const electricityChange = ((current.electricity - baseline.electricity) / baseline.electricity) * 100;
    const gasChange = ((current.naturalGas - baseline.naturalGas) / baseline.naturalGas) * 100;

    // Weighted composite (diesel 50%, electricity 30%, gas 20% for construction)
    const composite = (dieselChange * 0.5) + (electricityChange * 0.3) + (gasChange * 0.2);

    return {
      diesel: dieselChange,
      electricity: electricityChange,
      naturalGas: gasChange,
      composite,
    };
  }

  /**
   * Get electricity infrastructure investment data
   * T&D (Transmission & Distribution) spending
   */
  async getElectricityInfrastructureInvestment(year?: number): Promise<Array<{
    year: number;
    investment: number;
    category: string;
  }>> {
    const params: Record<string, string> = {
      frequency: 'annual',
      'data[0]': 'value',
    };

    if (year) {
      params.start = `${year}`;
      params.end = `${year}`;
    }

    const response = await this.fetch<{
      period: string;
      value: number;
      category: string;
    }>('/electricity/electric-power-operational-data/data/', params);

    return response.response.data
      .filter(d => d.category.includes('Construction') || d.category.includes('Investment'))
      .map(d => ({
        year: parseInt(d.period),
        investment: d.value,
        category: d.category,
      }));
  }
}

// Singleton instance
export const eiaAPI = new EIAAPI();
