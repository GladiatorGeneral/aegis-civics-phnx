/**
 * Leadership Service Layer
 * 
 * Coordinates data transformation, validation, and business logic
 * Separates concerns between data fetching and data processing
 */

import { GovernmentLeader, LeaderType, PartyAffiliation } from "@/lib/types";
import { 
  enrichmentService, 
  fetchAllLeaders,
  fetchLeaderById,
  EnrichmentOptions,
} from "@/lib/providers/leadership-provider";

/**
 * Statistics about leaders
 */
export interface LeadershipStats {
  total: number;
  byType: Record<LeaderType, number>;
  byParty: Record<PartyAffiliation, number>;
  byState: Record<string, number>;
  averageAmericanScore: number;
  topScorers: GovernmentLeader[];
  recentlyActive: GovernmentLeader[];
}

/**
 * Leader query filters
 */
export interface LeaderQuery {
  type?: LeaderType;
  party?: PartyAffiliation;
  state?: string;
  search?: string;
  minScore?: number;
  maxScore?: number;
  hasVotingRecord?: boolean;
  limit?: number;
  offset?: number;
}

/**
 * Leadership Service
 */
export class LeadershipService {
  /**
   * Get all leaders with optional enrichment
   */
  async getAllLeaders(options?: EnrichmentOptions): Promise<GovernmentLeader[]> {
    const result = await fetchAllLeaders();
    
    if (!result.success) {
      throw result.error;
    }

    let leaders = result.data;

    // Apply enrichment if requested
    if (options) {
      leaders = await enrichmentService.batchEnrich(leaders, options);
    }

    return leaders;
  }

  /**
   * Get leaders with filtering
   */
  async getLeaders(query: LeaderQuery = {}): Promise<GovernmentLeader[]> {
    let leaders = await this.getAllLeaders();

    // Apply filters
    if (query.type) {
      leaders = leaders.filter(l => l.type === query.type);
    }

    if (query.party) {
      leaders = leaders.filter(l => l.party === query.party);
    }

    if (query.state) {
      leaders = leaders.filter(l => l.state === query.state);
    }

    if (query.search) {
      const searchLower = query.search.toLowerCase();
      leaders = leaders.filter(l =>
        l.name.toLowerCase().includes(searchLower) ||
        l.title.toLowerCase().includes(searchLower) ||
        l.state.toLowerCase().includes(searchLower)
      );
    }

    if (query.minScore !== undefined) {
      leaders = leaders.filter(l => {
        const overallScore = this.getOverallScore(l);
        return overallScore >= query.minScore!;
      });
    }

    if (query.maxScore !== undefined) {
      leaders = leaders.filter(l => {
        const overallScore = this.getOverallScore(l);
        return overallScore <= query.maxScore!;
      });
    }

    if (query.hasVotingRecord !== undefined) {
      leaders = leaders.filter(l => {
        const hasRecord = l.votingRecord && l.votingRecord.length > 0;
        return hasRecord === query.hasVotingRecord;
      });
    }

    // Apply pagination
    const offset = query.offset || 0;
    const limit = query.limit || leaders.length;
    leaders = leaders.slice(offset, offset + limit);

    return leaders;
  }

  /**
   * Get a single leader by ID
   */
  async getLeader(id: string): Promise<GovernmentLeader | null> {
    return await fetchLeaderById(id);
  }

  /**
   * Get leadership statistics
   */
  async getStatistics(): Promise<LeadershipStats> {
    const leaders = await this.getAllLeaders();

    // Count by type
    const byType: Record<LeaderType, number> = {
      senate: 0,
      senator: 0,
      house: 0,
      representative: 0,
      governor: 0,
      mayor: 0,
    };

    // Count by party
    const byParty: Record<PartyAffiliation, number> = {
      Democrat: 0,
      Republican: 0,
      Independent: 0,
    };

    // Count by state
    const byState: Record<string, number> = {};

    let totalScore = 0;
    let scoreCount = 0;

    for (const leader of leaders) {
      // Type
      byType[leader.type]++;

      // Party
      byParty[leader.party]++;

      // State
      byState[leader.state] = (byState[leader.state] || 0) + 1;

      // Score
      const score = this.getOverallScore(leader);
      if (score > 0) {
        totalScore += score;
        scoreCount++;
      }
    }

    // Top scorers
    const topScorers = [...leaders]
      .filter(l => this.getOverallScore(l) > 0)
      .sort((a, b) => this.getOverallScore(b) - this.getOverallScore(a))
      .slice(0, 10);

    // Recently active
    const recentlyActive = [...leaders]
      .filter(l => l.recentActivity && l.recentActivity.length > 0)
      .sort((a, b) => {
        const aDate = a.recentActivity?.[0]?.date || '';
        const bDate = b.recentActivity?.[0]?.date || '';
        return bDate.localeCompare(aDate);
      })
      .slice(0, 10);

    return {
      total: leaders.length,
      byType,
      byParty,
      byState,
      averageAmericanScore: scoreCount > 0 ? totalScore / scoreCount : 0,
      topScorers,
      recentlyActive,
    };
  }

  /**
   * Compare leaders
   */
  async compareLeaders(ids: string[]): Promise<{
    leaders: GovernmentLeader[];
    comparison: {
      scores: number[];
      metrics: Array<{
        name: string;
        values: number[];
      }>;
    };
  }> {
    const leaders = await Promise.all(
      ids.map(id => this.getLeader(id))
    );

    const validLeaders = leaders.filter(l => l !== null) as GovernmentLeader[];

    // Compare scores
    const scores = validLeaders.map(l => this.getOverallScore(l));

    // Compare metrics
    const metrics = [
      {
        name: 'Bills Sponsored',
        values: validLeaders.map(l => l.metrics?.billsSponsored || 0),
      },
      {
        name: 'Bills Passed',
        values: validLeaders.map(l => l.metrics?.billsPassed || 0),
      },
      {
        name: 'Vote Attendance',
        values: validLeaders.map(l => l.metrics?.voteAttendance || 0),
      },
      {
        name: 'Bipartisanship Score',
        values: validLeaders.map(l => l.metrics?.bipartisanshipScore || 0),
      },
    ];

    return {
      leaders: validLeaders,
      comparison: {
        scores,
        metrics,
      },
    };
  }

  /**
   * Get related leaders (same state, similar ideology)
   */
  async getRelatedLeaders(leaderId: string, limit: number = 5): Promise<GovernmentLeader[]> {
    const leader = await this.getLeader(leaderId);
    if (!leader) return [];

    const allLeaders = await this.getAllLeaders();

    // Calculate similarity scores
    const scored = allLeaders
      .filter(l => l.id !== leaderId)
      .map(l => ({
        leader: l,
        similarity: this.calculateSimilarity(leader, l),
      }))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, limit);

    return scored.map(s => s.leader);
  }

  /**
   * Calculate similarity between two leaders
   */
  private calculateSimilarity(a: GovernmentLeader, b: GovernmentLeader): number {
    let score = 0;

    // Same state: +30
    if (a.state === b.state) score += 30;

    // Same party: +25
    if (a.party === b.party) score += 25;

    // Same type: +20
    if (a.type === b.type) score += 20;

    // Similar American Score: +25 (closer scores = higher similarity)
    const scoreDiff = Math.abs(this.getOverallScore(a) - this.getOverallScore(b));
    score += Math.max(0, 25 - scoreDiff / 2);

    return score;
  }

  /**
   * Get overall American Score for a leader
   */
  private getOverallScore(leader: GovernmentLeader): number {
    if (!leader.votingRecord || leader.votingRecord.length === 0) {
      return 0;
    }

    const scores = leader.votingRecord.map(v => v.americanScore.overall);
    return scores.reduce((sum, s) => sum + s, 0) / scores.length;
  }

  /**
   * Validate leader data
   */
  validateLeader(leader: GovernmentLeader): {
    valid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    if (!leader.id) errors.push('Missing ID');
    if (!leader.name) errors.push('Missing name');
    if (!leader.type) errors.push('Missing type');
    if (!leader.state) errors.push('Missing state');
    if (!leader.party) errors.push('Missing party');

    if (leader.type === 'house' && !leader.district) {
      errors.push('House representative missing district');
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }
}

// Global service instance
export const leadershipService = new LeadershipService();

/**
 * Convenience functions for common operations
 */

export async function getAllLeaders(options?: EnrichmentOptions): Promise<GovernmentLeader[]> {
  return leadershipService.getAllLeaders(options);
}

export async function getLeader(id: string): Promise<GovernmentLeader | null> {
  return leadershipService.getLeader(id);
}

export async function getLeadersByType(type: LeaderType): Promise<GovernmentLeader[]> {
  return leadershipService.getLeaders({ type });
}

export async function getLeadersByState(state: string): Promise<GovernmentLeader[]> {
  return leadershipService.getLeaders({ state });
}

export async function getLeadersByParty(party: PartyAffiliation): Promise<GovernmentLeader[]> {
  return leadershipService.getLeaders({ party });
}

export async function getLeadershipStats(): Promise<LeadershipStats> {
  return leadershipService.getStatistics();
}

export async function compareLeaders(ids: string[]) {
  return leadershipService.compareLeaders(ids);
}

export async function getRelatedLeaders(leaderId: string, limit?: number): Promise<GovernmentLeader[]> {
  return leadershipService.getRelatedLeaders(leaderId, limit);
}
