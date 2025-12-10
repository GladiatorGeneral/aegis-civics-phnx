/**
 * OpenSecrets API Client
 * https://www.opensecrets.org/open-data/api
 * 
 * Get your API key at: https://www.opensecrets.org/api/admin/index.php?function=signup
 */

const OPENSECRETS_API_KEY = process.env.OPENSECRETS_API_KEY || '';
const BASE_URL = 'https://www.opensecrets.org/api';

export interface LegislatorSummary {
  cid: string;
  name: string;
  cycle: string;
  total: number;
  spent: number;
  cash_on_hand: number;
  debt: number;
  first_elected: string;
  next_election: string;
}

interface ContributorData {
  org_name: string;
  total: number;
  pacs: number;
  indivs: number;
}

interface IndustryContribution {
  industry_code: string;
  industry_name: string;
  total: number;
  indivs: number;
  pacs: number;
}

interface SectorContribution {
  sector_name: string;
  sectorid: string;
  total: number;
  indivs: number;
  pacs: number;
}

export class OpenSecretsAPI {
  private apiKey: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || OPENSECRETS_API_KEY;
  }

  private async get<T>(method: string, params: Record<string, any> = {}): Promise<T> {
    const queryParams = new URLSearchParams({
      apikey: this.apiKey,
      output: 'json',
      method,
      ...Object.entries(params).reduce((acc, [key, value]) => {
        if (value !== undefined && value !== null) {
          acc[key] = String(value);
        }
        return acc;
      }, {} as Record<string, string>),
    });

    const url = `${BASE_URL}/?${queryParams}`;
    const response = await fetch(url, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });
    
    if (!response.ok) {
      throw new Error(`OpenSecrets API error: ${response.status}`);
    }

    return response.json();
  }

  /**
   * Get legislator summary (campaign finance totals)
   * CID format: House: First letter last name + state + district (e.g., 'N00007360')
   */
  async getLegislatorSummary(cid: string, cycle?: string): Promise<any> {
    return this.get('candSummary', {
      cid,
      cycle: cycle || new Date().getFullYear(),
    });
  }

  /**
   * Get top contributors to a legislator
   */
  async getTopContributors(cid: string, cycle?: string): Promise<{ contributors: ContributorData[] }> {
    return this.get('candContrib', {
      cid,
      cycle: cycle || new Date().getFullYear(),
    });
  }

  /**
   * Get top industries contributing to a legislator
   */
  async getIndustryContributions(cid: string, cycle?: string): Promise<{ industries: IndustryContribution[] }> {
    return this.get('candIndustry', {
      cid,
      cycle: cycle || new Date().getFullYear(),
    });
  }

  /**
   * Get sector contributions to a legislator
   */
  async getSectorContributions(cid: string, cycle?: string): Promise<{ sectors: SectorContribution[] }> {
    return this.get('candSector', {
      cid,
      cycle: cycle || new Date().getFullYear(),
    });
  }

  /**
   * Get legislator by name (search)
   */
  async searchLegislators(name: string): Promise<any> {
    return this.get('getLegislators', { id: name });
  }

  /**
   * Get members of a specific committee
   */
  async getCommitteeMembers(cmte: string, congress?: number): Promise<any> {
    return this.get('memPFDprofile', {
      cid: cmte,
      year: congress || 118,
    });
  }

  /**
   * Get independent expenditures for/against a candidate
   */
  async getIndependentExpenditures(cid: string, cycle?: string): Promise<any> {
    return this.get('independentExpend', {
      cid,
      cycle: cycle || new Date().getFullYear(),
    });
  }

  /**
   * Calculate transparency score based on contribution patterns
   * Higher score = more transparent (diverse, small-dollar funding)
   */
  async calculateTransparencyScore(cid: string, cycle?: string): Promise<number> {
    try {
      const [summary, industries, contributors] = await Promise.all([
        this.getLegislatorSummary(cid, cycle),
        this.getIndustryContributions(cid, cycle),
        this.getTopContributors(cid, cycle),
      ]);

      let score = 50; // Base score

      // Factor 1: Diversity of funding sources (0-20 points)
      const topContribPercentage = contributors.contributors?.[0]?.total / summary.total || 0;
      if (topContribPercentage < 0.05) score += 20;
      else if (topContribPercentage < 0.10) score += 15;
      else if (topContribPercentage < 0.15) score += 10;
      else if (topContribPercentage < 0.20) score += 5;

      // Factor 2: Individual vs PAC ratio (0-20 points)
      const individualRatio = summary.indivs / (summary.indivs + summary.pacs) || 0;
      score += Math.round(individualRatio * 20);

      // Factor 3: Industry concentration (0-10 points)
      const topIndustryPercentage = industries.industries?.[0]?.total / summary.total || 0;
      if (topIndustryPercentage < 0.10) score += 10;
      else if (topIndustryPercentage < 0.20) score += 5;

      return Math.min(100, Math.max(0, score));
    } catch (error) {
      console.error('Error calculating transparency score:', error);
      return 50; // Default to neutral if error
    }
  }

  /**
   * Get organization profile
   */
  async getOrganization(orgId: string): Promise<any> {
    return this.get('orgSummary', { id: orgId });
  }

  /**
   * Get top sectors for an organization
   */
  async getOrganizationSectors(orgId: string): Promise<any> {
    return this.get('congCmteIndus', { cmte: orgId });
  }
}

export const opensecretsAPI = new OpenSecretsAPI();
