import { cache } from "react";
import { GovernmentLeader, LeaderType, VotingAnalysis } from "@/lib/types";
import { houseRepresentatives } from "./reps";
import { senators } from "./senators";
import { mayors } from "./mayors";
import { governors } from "./governors";
import { fetchMemberVotingRecord } from "@/lib/api/congress-voting";
import { getSenatorBioguideId, getHouseBioguideId } from "./bioguide-mappings";
import {
  generateAmericanScore,
  generateVotingRecord,
  generateMetrics,
  generateNextElection,
  generateCommittees,
  generateRecentActivity,
  generateAIInsights
} from "@/lib/utils/data-generation";

/**
 * Enrich a leader with generated realistic data
 */
function enrichWithGeneratedData(leader: GovernmentLeader): GovernmentLeader {
  // Skip if leader already has voting record (real data from API)
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
    aiInsights
  };
}

const baseVotingRecord: VotingAnalysis[] = [
  {
    billId: "H.R. 1234",
    billTitle: "Infrastructure Investment and Jobs Act",
    vote: "yea",
    impact: "high",
    americanScore: {
      overall: 85,
      breakdown: {
        benefitScope: 92,
        foreignImpact: 90,
        transparency: 78,
      },
    },
  },
  {
    billId: "S. 2024",
    billTitle: "Climate Action Now Act",
    vote: "yea",
    impact: "high",
    americanScore: {
      overall: 78,
      breakdown: {
        benefitScope: 88,
        foreignImpact: 85,
        transparency: 65,
      },
    },
  },
];

const mockLeaders: GovernmentLeader[] = [
  {
    id: "h-012",
    type: "house",
    name: "Marcus Nguyen",
    title: "Representative for CA-12",
    state: "CA",
    district: "12",
    party: "Democrat",
    imageUrl: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80",
    contact: {
      phone: "202-225-5678",
      email: "marcus.nguyen@mail.house.gov",
      website: "https://house.gov/nguyen",
      twitter: "@rep_nguyen",
    },
    metrics: {
      billsSponsored: 18,
      billsPassed: 5,
      voteAttendance: 95,
      bipartisanshipScore: 6.2,
    },
    recentActivity: [
      {
        title: "Hosted AI Workforce Roundtable",
        type: "speech",
        date: "2025-12-03",
        impactScore: 6,
      },
      {
        title: "Co-sponsored Education Modernization Act",
        type: "bill",
        date: "2025-11-18",
        impactScore: 7,
      },
    ],
    nextElection: "2026",
    aiInsights: {
      priorities: ["STEM education", "AI workforce", "Housing affordability"],
      prediction: "safe",
      keyRelationships: ["Rep. Gomez", "Rep. Clark", "Rep. Foster"],
      priority: 7,
    },
    votingRecord: baseVotingRecord.map((record, idx) => ({
      ...record,
      americanScore: { ...record.americanScore, overall: record.americanScore.overall - idx * 4 },
    })),
  },
  {
    id: "g-003",
    type: "governor",
    name: "Priya Patel",
    title: "Governor of Colorado",
    state: "CO",
    party: "Independent",
    imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    contact: {
      phone: "303-866-2471",
      email: "governor@state.co.us",
      website: "https://colorado.gov/governor",
      twitter: "@gov_patel",
    },
    metrics: {
      billsSponsored: 12,
      billsPassed: 9,
      voteAttendance: 0,
      bipartisanshipScore: 9.1,
    },
    recentActivity: [
      {
        title: "Signed Statewide Clean Energy Accord",
        type: "bill",
        date: "2025-11-30",
        impactScore: 9,
      },
      {
        title: "Keynote at Western Governors Summit",
        type: "speech",
        date: "2025-11-16",
        impactScore: 6,
      },
    ],
    nextElection: "2026",
    aiInsights: {
      priorities: ["Grid modernization", "Water security", "Tech sector growth"],
      prediction: "safe",
      keyRelationships: ["Gov. Mills", "Mayor Rivera", "Rep. Cole"],
      priority: 6,
    },
    votingRecord: baseVotingRecord.map((record, idx) => ({
      ...record,
      americanScore: { ...record.americanScore, overall: record.americanScore.overall + idx * 2 },
    })),
  },
  {
    id: "m-021",
    type: "mayor",
    name: "Camila Rivera",
    title: "Mayor of Phoenix",
    state: "AZ",
    party: "Republican",
    imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
    contact: {
      phone: "602-262-6011",
      email: "mayor@phoenix.gov",
      website: "https://www.phoenix.gov/mayor",
      twitter: "@mayor_rivera",
    },
    metrics: {
      billsSponsored: 9,
      billsPassed: 7,
      voteAttendance: 0,
      bipartisanshipScore: 7.4,
    },
    recentActivity: [
      {
        title: "Launched Smart City Mobility Pilot",
        type: "speech",
        date: "2025-12-02",
        impactScore: 7,
      },
      {
        title: "Signed Downtown Housing Expansion",
        type: "bill",
        date: "2025-11-15",
        impactScore: 8,
      },
    ],
    nextElection: "2025",
    aiInsights: {
      priorities: ["Urban mobility", "Housing", "Heat mitigation"],
      prediction: "competitive",
      keyRelationships: ["Gov. Patel", "Rep. Nguyen", "City Council"],
      priority: 7,
    },
    votingRecord: baseVotingRecord.map((record) => ({
      ...record,
      americanScore: { ...record.americanScore, overall: Math.max(30, record.americanScore.overall - 10) },
    })),
  },
];

const baseMockLeaders = mockLeaders.filter(
  (leader) => leader.type !== "house" && leader.type !== "senate" && leader.type !== "mayor" && leader.type !== "governor",
);
// Combine all leaders and enrich with generated data
const allLeadersRaw: GovernmentLeader[] = [...senators, ...houseRepresentatives, ...governors, ...mayors];
const allLeaders: GovernmentLeader[] = allLeadersRaw.map(enrichWithGeneratedData);

/**
 * Fetch real voting data for a congressional member
 * Falls back to mock data if API fails or bioguideId not found
 */
async function enrichWithVotingData(leader: GovernmentLeader): Promise<GovernmentLeader> {
  // Only fetch for senators and representatives
  if (leader.type !== 'senate' && leader.type !== 'senator' && leader.type !== 'house' && leader.type !== 'representative') {
    return leader;
  }

  try {
    // Get bioguideId
    let bioguideId: string | null = null;
    
    if (leader.type === 'senate' || leader.type === 'senator') {
      bioguideId = getSenatorBioguideId(leader.state, leader.name);
    } else if (leader.type === 'house' || leader.type === 'representative') {
      bioguideId = getHouseBioguideId(leader.state, leader.district || '', leader.name);
    }

    // If we have a bioguideId, fetch real voting data
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
    console.error(`Error enriching voting data for ${leader.name}:`, error);
  }

  // Fallback to existing or base mock data
  return leader;
}

export const fetchLeadershipData = cache(async (type: LeaderType) => {
  // Placeholder for real API calls (e.g., Congress.gov, GovTrack) with ISR
  if (type === "house" || type === "representative") {
    return houseRepresentatives;
  }

  if (type === "senate" || type === "senator") {
    return senators;
  }

  if (type === "mayor") {
    return mayors;
  }

  if (type === "governor") {
    return governors;
  }

  const filtered = baseMockLeaders.filter((leader) => leader.type === type);
  return filtered;
});

export const fetchAllLeaders = cache(async () => allLeaders);

/**
 * Fetch a sample of leaders with optional real voting data enrichment
 * @param limit Number of leaders to return
 * @param enrichVoting Whether to fetch real voting data from Congress.gov API
 */
export const fetchLeadersSample = cache(async (limit: number = 50, enrichVoting: boolean = false) => {
  const sample = allLeaders.slice(0, limit);
  
  if (!enrichVoting || !process.env.CONGRESS_API_KEY) {
    return sample;
  }

  // Enrich first 10 leaders with real voting data (to avoid rate limits)
  const enrichedSample = await Promise.all(
    sample.map(async (leader, idx) => {
      if (idx < 10) {
        return enrichWithVotingData(leader);
      }
      return leader;
    })
  );

  return enrichedSample;
});
