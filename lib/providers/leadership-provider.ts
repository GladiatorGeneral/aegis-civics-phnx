/**
 * Leadership Data Provider
 * 
 * Provides centralized access to government leader data with:
 * - Multiple data sources (static data, Congress API, generated data)
 * - Intelligent fallback mechanisms
 * - Efficient caching and batching
 * - Type-safe interfaces
 */

import { cache } from "react";
import { GovernmentLeader, LeaderType, PartyAffiliation } from "@/lib/types";
import { DataProvider, FetchOptions, DataResult, batchedProvider, createCachedFetcher } from "@/lib/core/data-provider";
import { fetchMemberVotingRecord } from "@/lib/api/congress-voting";
import { getSenatorBioguideId, getHouseBioguideId } from "@/lib/data/bioguide-mappings";
import {
  generateAmericanScore,
  generateVotingRecord,
  generateMetrics,
  generateNextElection,
  generateCommittees,
  generateRecentActivity,
  generateAIInsights,
} from "@/lib/utils/data-generation";

/**
 * Data source priority
 */
export type DataSource = 'api' | 'static' | 'generated';

/**
 * Leader enrichment options
 */
export interface EnrichmentOptions {
  /** Include API data (voting records) */
  includeAPI?: boolean;
  /** Generate missing data */
  generateMissing?: boolean;
  /** Maximum leaders to enrich with API data */
  apiLimit?: number;
  /** Data source priority */
  sourcePriority?: DataSource[];
}

/**
 * Leadership data provider
 */
class LeadershipDataProvider extends DataProvider<GovernmentLeader[]> {
  protected name = "leadership";
  protected defaultCacheTTL = 600; // 10 minutes

  private staticLeaders: GovernmentLeader[] = [];
  
  constructor() {
    super();
  }

  /**
   * Initialize with static data
   */
  initialize(leaders: GovernmentLeader[]): void {
    this.staticLeaders = leaders;
  }

  /**
   * Fetch from source (returns static data)
   */
  protected async fetchFromSource(): Promise<GovernmentLeader[]> {
    return this.staticLeaders;
  }

  /**
   * Get fallback data
   */
  protected async getFallback(): Promise<GovernmentLeader[]> {
    return this.staticLeaders;
  }

  /**
   * Get leaders by type
   */
  async getByType(
    type: LeaderType,
    options: FetchOptions = {}
  ): Promise<DataResult<GovernmentLeader[]>> {
    const result = await this.fetch(options);
    
    if (!result.success) {
      return result;
    }

    const filtered = result.data.filter(leader => leader.type === type);
    return { ...result, data: filtered };
  }

  /**
   * Get leader by ID
   */
  async getById(
    id: string,
    options: FetchOptions = {}
  ): Promise<DataResult<GovernmentLeader | null>> {
    const result = await this.fetch(options);
    
    if (!result.success) {
      return { ...result, fallback: null };
    }

    const leader = result.data.find(l => l.id === id) || null;
    return { ...result, data: leader };
  }

  /**
   * Search leaders
   */
  async search(
    query: string,
    options: FetchOptions = {}
  ): Promise<DataResult<GovernmentLeader[]>> {
    const result = await this.fetch(options);
    
    if (!result.success) {
      return result;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = result.data.filter(leader => 
      leader.name.toLowerCase().includes(lowerQuery) ||
      leader.state.toLowerCase().includes(lowerQuery) ||
      leader.party.toLowerCase().includes(lowerQuery)
    );

    return { ...result, data: filtered };
  }

  /**
   * Get leaders by state
   */
  async getByState(
    state: string,
    options: FetchOptions = {}
  ): Promise<DataResult<GovernmentLeader[]>> {
    const result = await this.fetch(options);
    
    if (!result.success) {
      return result;
    }

    const filtered = result.data.filter(leader => leader.state === state);
    return { ...result, data: filtered };
  }

  /**
   * Get leaders by party
   */
  async getByParty(
    party: PartyAffiliation,
    options: FetchOptions = {}
  ): Promise<DataResult<GovernmentLeader[]>> {
    const result = await this.fetch(options);
    
    if (!result.success) {
      return result;
    }

    const filtered = result.data.filter(leader => leader.party === party);
    return { ...result, data: filtered };
  }

  /**
   * Get cache key with custom parameters
   */
  protected getCacheKey(params?: Record<string, unknown>): string {
    if (!params) return super.getCacheKey();
    const paramStr = JSON.stringify(params);
    return `${this.name}:${paramStr}`;
  }
}

/**
 * Leader enrichment service
 */
export class LeaderEnrichmentService {
  /**
   * Enrich a single leader with generated data
   */
  enrichWithGeneratedData(leader: GovernmentLeader): GovernmentLeader {
    // Skip if leader already has sufficient voting record (real API data)
    if (leader.votingRecord && leader.votingRecord.length > 3) {
      return leader;
    }

    // Generate American Score
    const americanScore = generateAmericanScore(leader.party, leader.state, leader.type);
    
    // Generate voting record
    const votingRecord = generateVotingRecord(leader.party, americanScore);
    
    // Generate or enhance metrics
    const metrics = leader.metrics || generateMetrics(leader.type);
    
    // Generate or use existing next election
    const nextElection = leader.nextElection || generateNextElection(leader.type);
    
    // Generate or use existing committees
    const committees = leader.committees || generateCommittees(leader.type);
    
    // Generate or enhance recent activity
    const recentActivity = leader.recentActivity?.length 
      ? leader.recentActivity 
      : generateRecentActivity();
    
    // Generate or enhance AI insights
    const aiInsights = leader.aiInsights || generateAIInsights(leader.type, leader.party);

    return {
      ...leader,
      votingRecord,
      metrics,
      nextElection,
      committees,
      recentActivity,
      aiInsights,
    };
  }

  /**
   * Enrich a leader with real API voting data
   */
  async enrichWithAPIData(leader: GovernmentLeader): Promise<GovernmentLeader> {
    // Only fetch for congressional members
    if (leader.type !== 'senate' && leader.type !== 'house') {
      return leader;
    }

    try {
      // Get bioguideId
      let bioguideId: string | null = null;
      
      if (leader.type === 'senate') {
        bioguideId = getSenatorBioguideId(leader.state, leader.name);
      } else if (leader.type === 'house') {
        bioguideId = getHouseBioguideId(leader.state, leader.district || '', leader.name);
      }

      // Fetch voting record if we have a bioguideId
      if (bioguideId && process.env.CONGRESS_API_KEY) {
        const votingRecord = await fetchMemberVotingRecord(bioguideId);
        
        if (votingRecord && votingRecord.length > 0) {
          return {
            ...leader,
            votingRecord,
          };
        }
      }
    } catch (error) {
      console.error(`Error enriching API data for ${leader.name}:`, error);
    }

    return leader;
  }

  /**
   * Batch enrich multiple leaders
   */
  async batchEnrich(
    leaders: GovernmentLeader[],
    options: EnrichmentOptions = {}
  ): Promise<GovernmentLeader[]> {
    const {
      includeAPI = false,
      generateMissing = true,
      apiLimit = 10,
      sourcePriority = ['api', 'static', 'generated'],
    } = options;

    let enriched = [...leaders];

    // Step 1: Enrich with API data (limited to avoid rate limits)
    if (includeAPI && sourcePriority.includes('api')) {
      const congressional = enriched.filter(
        l => l.type === 'senate' || l.type === 'house'
      );
      
      const toEnrich = congressional.slice(0, apiLimit);
      
      if (toEnrich.length > 0) {
        const apiResults = await batchedProvider.fetchBatch(
          toEnrich.map(leader => ({
            key: leader.id,
            fetcher: () => this.enrichWithAPIData(leader),
          }))
        );

        // Apply API enriched data
        enriched = enriched.map(leader => {
          const result = apiResults.get(leader.id);
          if (result?.success) {
            return result.data;
          }
          return leader;
        });
      }
    }

    // Step 2: Generate missing data
    if (generateMissing && sourcePriority.includes('generated')) {
      enriched = enriched.map(leader => this.enrichWithGeneratedData(leader));
    }

    return enriched;
  }
}

// Global instances
export const leadershipProvider = new LeadershipDataProvider();
export const enrichmentService = new LeaderEnrichmentService();

/**
 * Cached fetchers for common operations
 */

export const fetchAllLeaders = createCachedFetcher(
  'all-leaders',
  async () => {
    const result = await leadershipProvider.fetch();
    if (!result.success) {
      throw result.error;
    }
    return result.data;
  },
  { ttl: 600 }
);

export const fetchLeadersByType = cache(async (type: LeaderType): Promise<GovernmentLeader[]> => {
  const result = await leadershipProvider.getByType(type);
  if (!result.success) {
    throw result.error;
  }
  return result.data;
});

export const fetchLeaderById = cache(async (id: string): Promise<GovernmentLeader | null> => {
  const result = await leadershipProvider.getById(id);
  if (!result.success) {
    return null;
  }
  return result.data;
});

export const fetchLeadersByState = cache(async (state: string): Promise<GovernmentLeader[]> => {
  const result = await leadershipProvider.getByState(state);
  if (!result.success) {
    throw result.error;
  }
  return result.data;
});

export const fetchLeadersByParty = cache(async (party: PartyAffiliation): Promise<GovernmentLeader[]> => {
  const result = await leadershipProvider.getByParty(party);
  if (!result.success) {
    throw result.error;
  }
  return result.data;
});

export const searchLeaders = cache(async (query: string): Promise<GovernmentLeader[]> => {
  const result = await leadershipProvider.search(query);
  if (!result.success) {
    throw result.error;
  }
  return result.data;
});

/**
 * Fetch a sample of leaders with optional enrichment
 */
export const fetchLeadersSample = cache(
  async (limit: number = 50, enrichmentOptions: EnrichmentOptions = {}): Promise<GovernmentLeader[]> => {
    const result = await leadershipProvider.fetch();
    
    if (!result.success) {
      throw result.error;
    }

    let leaders = result.data.slice(0, limit);
    
    // Apply enrichment
    leaders = await enrichmentService.batchEnrich(leaders, enrichmentOptions);
    
    return leaders;
  }
);
