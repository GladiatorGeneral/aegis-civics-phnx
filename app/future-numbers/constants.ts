// Constants and types for Future Numbers Page

export interface ExecutiveImpactStat {
  value: string;
  label: string;
  sublabel?: string;
}

export const EXECUTIVE_IMPACT_STATS: ExecutiveImpactStat[] = [
  {
    value: "1.86M",
    label: "Physical Lives Saved",
    sublabel: "vs. 900K annual preventable deaths",
  },
  {
    value: "46.2M",
    label: "Mental Health Improved",
    sublabel: "Depression, addiction, PTSD treatment",
  },
  {
    value: "94M",
    label: "Educationally Improved",
    sublabel: "K-12, college, adult education",
  },
  {
    value: "86.1M",
    label: "Productive Citizens Added",
    sublabel: "Employment, workforce re-entry",
  },
];

// Add more constants for other hardcoded values as needed
