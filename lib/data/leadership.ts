/**
 * Leadership Data Module (Legacy Compatibility Layer)
 * 
 * This file provides backward compatibility with the old API
 * New code should use @/lib/services/leadership-service instead
 */

import { cache } from "react";
import { GovernmentLeader, LeaderType } from "@/lib/types";
import "./leadership-init"; // Auto-initialize provider
import {
  fetchAllLeaders as fetchAllLeadersNew,
  fetchLeadersByType as fetchLeadersByTypeNew,
  fetchLeadersSample as fetchLeadersSampleNew,
} from "@/lib/providers/leadership-provider";
import { unwrapResult } from "@/lib/core/data-provider";

/**
 * Fetch all leaders (legacy API)
 * @deprecated Use leadershipService.getAllLeaders() instead
 */
export const fetchAllLeaders = cache(async (): Promise<GovernmentLeader[]> => {
  const result = await fetchAllLeadersNew();
  return unwrapResult(result);
});

/**
 * Fetch leaders by type (legacy API)
 * @deprecated Use leadershipService.getLeadersByType() instead
 */
export const fetchLeadershipData = cache(async (type: LeaderType): Promise<GovernmentLeader[]> => {
  return fetchLeadersByTypeNew(type);
});

/**
 * Fetch a sample of leaders with optional enrichment (legacy API)
 * @deprecated Use leadershipService.getLeaders() with query instead
 */
export const fetchLeadersSample = cache(
  async (limit: number = 50, enrichVoting: boolean = false): Promise<GovernmentLeader[]> => {
    return fetchLeadersSampleNew(limit, {
      includeAPI: enrichVoting,
      apiLimit: 10,
      generateMissing: true,
    });
  }
);
