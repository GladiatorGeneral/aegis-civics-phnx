import { cache } from "react";
import { Goal } from "@/lib/types";

const mockGoals: Goal[] = [
  {
    id: "goal-1",
    title: "Modernize National Infrastructure Grid",
    description: "Upgrade critical infrastructure with smart sensors, resilience standards, and clean energy integration across 50 states.",
    status: "on-track",
    category: "legislative",
    priority: 9,
    progress: 64,
    deadline: "2026-06-30",
    tags: ["infrastructure", "energy", "resilience"],
    metrics: {
      impactScore: 9,
      difficulty: 7,
      urgency: 8,
      resourcesNeeded: 5,
    },
    stakeholders: ["Senate Commerce", "Energy Committee", "Governors Coalition"],
    dependencies: ["Federal funding package", "State PUC approvals"],
    milestones: [
      { title: "Pass enabling legislation", deadline: "2025-12-31", completed: false },
      { title: "Pilot smart grid in 5 states", deadline: "2026-03-31", completed: false },
    ],
  },
  {
    id: "goal-2",
    title: "AI Workforce Upskilling",
    description: "Upskill 1.2M workers for AI and automation resilience through public-private programs.",
    status: "at-risk",
    category: "executive",
    priority: 8,
    progress: 42,
    deadline: "2026-03-31",
    tags: ["workforce", "AI", "education"],
    metrics: {
      impactScore: 8,
      difficulty: 6,
      urgency: 7,
      resourcesNeeded: 6,
    },
    stakeholders: ["Labor Dept", "Commerce", "State Universities"],
    dependencies: ["Budget release", "Industry partners"],
    milestones: [
      { title: "Secure funding", deadline: "2025-12-31", completed: false },
      { title: "Launch 10 pilot cohorts", deadline: "2026-02-15", completed: false },
    ],
  },
  {
    id: "goal-3",
    title: "National Cyber Defense Shield",
    description: "Deploy zero-trust and rapid response capabilities for critical infrastructure sectors.",
    status: "completed",
    category: "executive",
    priority: 10,
    progress: 100,
    deadline: "2025-10-15",
    tags: ["cybersecurity", "zero-trust", "critical infrastructure"],
    metrics: {
      impactScore: 10,
      difficulty: 8,
      urgency: 10,
      resourcesNeeded: 7,
    },
    stakeholders: ["CISA", "DoD", "Private ISACs"],
    dependencies: ["Vendor onboarding", "Incident playbooks"],
    milestones: [
      { title: "Deploy zero-trust baseline", deadline: "2025-08-31", completed: true },
      { title: "Simulate joint incident drills", deadline: "2025-10-10", completed: true },
    ],
  },
];

export const fetchGoals = cache(async () => mockGoals);
