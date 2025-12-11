/**
 * Leadership Data Initialization
 * 
 * Initializes the leadership provider with static data sources
 * This file bridges the gap between old static data files and the new architecture
 */

import { GovernmentLeader } from "@/lib/types";
import { houseRepresentatives } from "./reps";
import { senators } from "./senators";
import { mayors } from "./mayors";
import { governors } from "./governors";
import { leadershipProvider, enrichmentService } from "@/lib/providers/leadership-provider";

/**
 * Combine all static leader sources
 */
function initializeStaticData(): GovernmentLeader[] {
  return [
    ...senators,
    ...houseRepresentatives,
    ...governors,
    ...mayors,
  ];
}

/**
 * Initialize the leadership provider with static data
 */
export function initializeLeadershipData(): void {
  const staticLeaders = initializeStaticData();
  leadershipProvider.initialize(staticLeaders);
  console.log(`[Leadership] Initialized with ${staticLeaders.length} leaders`);
}

/**
 * Get raw static data (for backward compatibility)
 */
export function getStaticLeaders(): GovernmentLeader[] {
  return initializeStaticData();
}

// Auto-initialize on import
initializeLeadershipData();
