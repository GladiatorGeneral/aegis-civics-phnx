export type LeaderType =
  | "senator"
  | "representative"
  | "senate"
  | "house"
  | "governor"
  | "mayor";
export type PartyAffiliation = "Democrat" | "Republican" | "Independent";
export type PriorityLevel = "safe" | "competitive" | "vulnerable";

export interface VotingAnalysis {
  billId: string;
  billTitle: string;
  vote: "yea" | "nay" | "abstain";
  americanScore: {
    overall: number;
    breakdown: {
      benefitScope: number;
      foreignImpact: number;
      transparency: number;
    };
  };
  impact: "high" | "medium" | "low";
}

export interface GovernmentLeader {
  id: string;
  type: LeaderType;
  name: string;
  title: string;
  state: string;
  district?: string;
  office?: string;
  party: PartyAffiliation;
  imageUrl?: string;
  contact?: {
    phone?: string;
    email?: string;
    website?: string;
    twitter?: string;
  };
  committees?: string[];
  metrics?: {
    billsSponsored: number;
    billsPassed: number;
    voteAttendance: number;
    bipartisanshipScore: number;
  };
  recentActivity?: {
    title: string;
    type: "vote" | "bill" | "speech" | "hearing";
    date: string;
    impactScore: number;
  }[];
  nextElection?: string;
  aiInsights?: {
    priorities: string[];
    prediction: PriorityLevel;
    keyRelationships: string[];
    priority?: number;
  };
  votingRecord?: VotingAnalysis[];
}
