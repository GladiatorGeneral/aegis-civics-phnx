/**
 * Congress.gov API Client
 * https://api.congress.gov/
 * 
 * Get your API key from api.data.gov: https://api.data.gov/signup/
 */

const CONGRESS_API_KEY = process.env.CONGRESS_API_KEY || '';
const BASE_URL = 'https://api.congress.gov/v3';

interface CongressMember {
  bioguideId: string;
  name: string;
  party: string;
  state: string;
  district?: number;
  terms: Array<{
    chamber: string;
    startYear: number;
    endYear: number;
  }>;
  sponsoredLegislation?: {
    count: number;
  };
  cosponsoredLegislation?: {
    count: number;
  };
}

interface CongressBill {
  congress: number;
  type: string;
  number: number;
  title: string;
  latestAction: {
    actionDate: string;
    text: string;
  };
  sponsors?: Array<{
    bioguideId: string;
    fullName: string;
    party: string;
    state: string;
  }>;
  cosponsors?: {
    count: number;
  };
}

interface HouseVote {
  congress: number;
  session: number;
  voteNumber: number;
  updateDate: string;
  date: string;
  question: string;
  result: string;
  bill?: {
    congress: number;
    type: string;
    number: number;
  };
}

interface VoteMember {
  bioguideId: string;
  name: string;
  party: string;
  state: string;
  vote: string;
}

export class CongressAPI {
  private headers: HeadersInit;

  constructor(apiKey?: string) {
    this.headers = {
      'X-API-Key': apiKey || CONGRESS_API_KEY,
      'Content-Type': 'application/json',
    };
  }

  private async fetch<T>(endpoint: string, params: Record<string, any> = {}): Promise<T> {
    const queryString = new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        if (value !== undefined && value !== null) {
          acc[key] = String(value);
        }
        return acc;
      }, {} as Record<string, string>)
    ).toString();

    const url = `${BASE_URL}${endpoint}${queryString ? '?' + queryString : ''}`;
    const response = await fetch(url, { 
      headers: this.headers,
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error(`Congress.gov API error: ${response.status}`);
    }

    return response.json();
  }

  /**
   * Get member details by bioguide ID
   */
  async getMember(bioguideId: string): Promise<{ member: CongressMember }> {
    return this.fetch<{ member: CongressMember }>(`/member/${bioguideId}`);
  }

  /**
   * Get members by congress
   */
  async getMembersByCongress(congress: number = 118): Promise<{ members: CongressMember[] }> {
    return this.fetch<{ members: CongressMember[] }>(`/member/congress/${congress}`);
  }

  /**
   * Get members by state
   */
  async getMembersByState(stateCode: string, district?: number): Promise<{ members: CongressMember[] }> {
    const endpoint = district !== undefined 
      ? `/member/${stateCode}/${district}`
      : `/member/${stateCode}`;
    return this.fetch<{ members: CongressMember[] }>(endpoint);
  }

  /**
   * Get legislation sponsored by a member
   */
  async getMemberSponsoredLegislation(bioguideId: string, limit: number = 250): Promise<{ sponsoredLegislation: CongressBill[] }> {
    return this.fetch<{ sponsoredLegislation: CongressBill[] }>(`/member/${bioguideId}/sponsored-legislation`, { limit });
  }

  /**
   * Get legislation cosponsored by a member
   */
  async getMemberCosponsoredLegislation(bioguideId: string, limit: number = 250): Promise<{ cosponsoredLegislation: CongressBill[] }> {
    return this.fetch<{ cosponsoredLegislation: CongressBill[] }>(`/member/${bioguideId}/cosponsored-legislation`, { limit });
  }

  /**
   * Get bill details
   */
  async getBill(congress: number, billType: string, billNumber: number): Promise<{ bill: CongressBill }> {
    return this.fetch<{ bill: CongressBill }>(`/bill/${congress}/${billType}/${billNumber}`);
  }

  /**
   * Get bills by congress and type
   */
  async getBills(congress: number = 118, billType?: string, limit: number = 250): Promise<{ bills: CongressBill[] }> {
    const endpoint = billType 
      ? `/bill/${congress}/${billType}`
      : `/bill/${congress}`;
    return this.fetch<{ bills: CongressBill[] }>(endpoint, { limit });
  }

  /**
   * Get bill cosponsors
   */
  async getBillCosponsors(congress: number, billType: string, billNumber: number, limit: number = 250): Promise<any> {
    return this.fetch(`/bill/${congress}/${billType}/${billNumber}/cosponsors`, { limit });
  }

  /**
   * Get House roll call votes
   */
  async getHouseVotes(congress: number = 118, session: number = 1, limit: number = 250): Promise<{ votes: HouseVote[] }> {
    return this.fetch<{ votes: HouseVote[] }>(`/house-vote/${congress}/${session}`, { limit });
  }

  /**
   * Get detailed House vote information
   */
  async getHouseVoteDetails(congress: number, session: number, voteNumber: number): Promise<{ vote: HouseVote }> {
    return this.fetch<{ vote: HouseVote }>(`/house-vote/${congress}/${session}/${voteNumber}`);
  }

  /**
   * Get member votes on a specific House roll call
   */
  async getHouseVoteMembers(congress: number, session: number, voteNumber: number): Promise<{ members: VoteMember[] }> {
    return this.fetch<{ members: VoteMember[] }>(`/house-vote/${congress}/${session}/${voteNumber}/members`);
  }

  /**
   * Get committee details
   */
  async getCommittee(chamber: 'house' | 'senate', committeeCode: string): Promise<any> {
    return this.fetch(`/committee/${chamber}/${committeeCode}`);
  }

  /**
   * Get committees by chamber
   */
  async getCommittees(chamber: 'house' | 'senate', congress?: number): Promise<any> {
    const endpoint = congress 
      ? `/committee/${congress}/${chamber}`
      : `/committee/${chamber}`;
    return this.fetch(endpoint);
  }

  /**
   * Get current congress information
   */
  async getCurrentCongress(): Promise<any> {
    return this.fetch('/congress/current');
  }
}

export const congressAPI = new CongressAPI();
