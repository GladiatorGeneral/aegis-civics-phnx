/**
 * GovTrack API Client
 * https://www.govtrack.us/developers/api
 * 
 * No API key required - free public access with rate limiting
 */

const BASE_URL = 'https://www.govtrack.us/api/v2';

interface GovTrackPerson {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  birthday: string;
  gender: string;
  roles: Array<{
    chamber: string;
    state: string;
    district?: number;
    party: string;
    startdate: string;
    enddate: string;
  }>;
}

interface GovTrackVote {
  id: number;
  created: string;
  vote: string;
  voter: {
    id: number;
    name: string;
  };
  option: {
    key: string;
    value: string;
  };
}

interface GovTrackBill {
  id: number;
  bill_type: string;
  congress: number;
  number: number;
  title: string;
  sponsor: {
    id: number;
    name: string;
  };
  introduced_date: string;
  current_status: string;
  cosponsors: Array<{
    id: number;
    name: string;
  }>;
}

interface GovTrackRollCall {
  id: number;
  created: string;
  category: string;
  chamber: string;
  question: string;
  result: string;
  total_plus: number;
  total_minus: number;
  required: string;
}

export class GovTrackAPI {
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
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error(`GovTrack API error: ${response.status}`);
    }

    return response.json();
  }

  /**
   * Get person (member of Congress) by GovTrack ID
   */
  async getPerson(id: number): Promise<GovTrackPerson> {
    return this.fetch<GovTrackPerson>(`/person/${id}`);
  }

  /**
   * Search for people by name, role, or state
   */
  async searchPeople(params: {
    name?: string;
    role_type?: 'senator' | 'representative';
    current?: boolean;
    state?: string;
    district?: number;
    limit?: number;
    offset?: number;
  }): Promise<{ objects: GovTrackPerson[] }> {
    return this.fetch<{ objects: GovTrackPerson[] }>('/person', params);
  }

  /**
   * Get bill details by GovTrack bill ID
   */
  async getBill(id: number): Promise<GovTrackBill> {
    return this.fetch<GovTrackBill>(`/bill/${id}`);
  }

  /**
   * Search bills by congress, sponsor, status, etc.
   */
  async searchBills(params: {
    congress?: number;
    sponsor?: number;
    current_status?: string;
    title?: string;
    limit?: number;
    offset?: number;
  }): Promise<{ objects: GovTrackBill[] }> {
    return this.fetch<{ objects: GovTrackBill[] }>('/bill', params);
  }

  /**
   * Get votes on a specific roll call
   */
  async getVotesForRollCall(rollCallId: number, limit: number = 100): Promise<{ objects: GovTrackVote[] }> {
    return this.fetch<{ objects: GovTrackVote[] }>('/vote_voter', {
      vote: rollCallId,
      limit,
    });
  }

  /**
   * Get votes cast by a specific person
   */
  async getPersonVotes(personId: number, params?: {
    congress?: number;
    limit?: number;
    offset?: number;
  }): Promise<{ objects: GovTrackVote[] }> {
    return this.fetch<{ objects: GovTrackVote[] }>('/vote_voter', {
      person: personId,
      ...params,
    });
  }

  /**
   * Get roll call votes for a chamber
   */
  async getRollCalls(params: {
    congress?: number;
    chamber?: 'senate' | 'house';
    created__gte?: string; // ISO date string
    limit?: number;
    offset?: number;
  }): Promise<{ objects: GovTrackRollCall[] }> {
    return this.fetch<{ objects: GovTrackRollCall[] }>('/vote', params);
  }

  /**
   * Get cosponsors for a bill
   */
  async getBillCosponsors(billId: number): Promise<{ objects: Array<{ person: GovTrackPerson; joined: string }> }> {
    return this.fetch<{ objects: Array<{ person: GovTrackPerson; joined: string }> }>('/cosponsorship', {
      bill: billId,
      limit: 500,
    });
  }

  /**
   * Get committee membership
   */
  async getCommitteeMembership(personId: number): Promise<any> {
    return this.fetch<any>('/committee_member', {
      person: personId,
    });
  }
}

export const govtrackAPI = new GovTrackAPI();
