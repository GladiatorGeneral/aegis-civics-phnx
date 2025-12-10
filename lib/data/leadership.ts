import { cache } from "react";
import { GovernmentLeader, LeaderType, VotingAnalysis } from "@/lib/types";

const baseVotingRecord: VotingAnalysis[] = [
  {
    billId: "hr-123",
    billTitle: "Infrastructure Investment Act",
    vote: "yea",
    americanScore: { overall: 78, breakdown: { benefitScope: 82, foreignImpact: 65, transparency: 55 } },
    impact: "high",
  },
  {
    billId: "sb-42",
    billTitle: "Cybersecurity Modernization",
    vote: "yea",
    americanScore: { overall: 88, breakdown: { benefitScope: 75, foreignImpact: 92, transparency: 68 } },
    impact: "medium",
  },
  {
    billId: "hr-200",
    billTitle: "Emergency Relief Package",
    vote: "nay",
    americanScore: { overall: 42, breakdown: { benefitScope: 48, foreignImpact: 35, transparency: 28 } },
    impact: "high",
  },
];

const mockLeaders: GovernmentLeader[] = [
  {
    id: "s-001",
    type: "senate",
    name: "Alexandra Cortez",
    title: "Senator for New York",
    state: "NY",
    party: "Democrat",
    imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    contact: {
      phone: "202-224-1234",
      email: "alexandra.cortez@senate.gov",
      website: "https://senate.gov/alexandra-cortez",
      twitter: "@sen_cortez",
    },
    metrics: {
      billsSponsored: 24,
      billsPassed: 6,
      voteAttendance: 97,
      bipartisanshipScore: 8.4,
    },
    recentActivity: [
      {
        title: "Voted Yea on AI Safety Framework",
        type: "vote",
        date: "2025-12-01",
        impactScore: 8,
      },
      {
        title: "Sponsored Climate Resilience Bill",
        type: "bill",
        date: "2025-11-20",
        impactScore: 7,
      },
    ],
    nextElection: "2028",
    aiInsights: {
      priorities: ["AI regulation", "Climate resilience", "Digital privacy"],
      prediction: "competitive",
      keyRelationships: ["Sen. Lee", "Sen. Smith", "Gov. Patel"],
      priority: 8,
    },
    votingRecord: baseVotingRecord,
  },
  {
    id: "h-014",
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
        type: "announcement",
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

export const fetchLeadershipData = cache(async (type: LeaderType) => {
  // Placeholder for real API calls (e.g., ProPublica, GovTrack) with ISR
  const filtered = mockLeaders.filter((leader) => leader.type === type);
  return filtered;
});

export const fetchAllLeaders = cache(async () => mockLeaders);
