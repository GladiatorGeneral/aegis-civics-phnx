export * from "./leadership";
export * from "./infrastructure";

// Goal Types
export type GoalStatus = "on-track" | "at-risk" | "completed" | "upcoming";
export type GoalCategory = "legislative" | "executive" | "judicial" | "civic";

export interface Goal {
  id: string;
  title: string;
  description: string;
  status: GoalStatus;
  category: GoalCategory;
  priority: number; // 1-10
  progress: number; // 0-100
  deadline: string;
  tags: string[];
  metrics: {
    impactScore: number; // 1-10
    difficulty: number; // 1-10
    urgency: number; // 1-10
    resourcesNeeded: number;
  };
  stakeholders: string[];
  dependencies: string[];
  milestones: {
    title: string;
    deadline: string;
    completed: boolean;
  }[];
}

// AI Analysis Types
export interface AIAnalysis {
  type: "coalitions" | "trends" | "priorities" | "predictions";
  findings: string[];
  metrics: Record<string, number>;
  recommendations: {
    title: string;
    description: string;
    priority: number;
  }[];
  confidence: number;
  timestamp: string;
}

// Update Types
export interface LiveUpdate {
  id: string;
  type: "vote" | "bill" | "speech" | "hearing" | "announcement";
  title: string;
  description: string;
  timestamp: string;
  chamber?: "senate" | "house" | "both" | "executive";
  impact: "low" | "medium" | "high" | "critical";
  source: string;
  url?: string;
  affectedLeaders?: string[];
}

// Dashboard Metrics
export interface DashboardMetrics {
  activeBills: number;
  aiAccuracy: number;
  citizenReach: number;
  bipartisanship: number;
  engagement: number;
  goalsTracked: number;
  updateLatency: number;
  dataSources: number;
}
