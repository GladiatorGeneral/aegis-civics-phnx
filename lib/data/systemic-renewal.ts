/**
 * Systemic Renewal Directorates (SRD) Data
 * Project Illumio - 12 Integrated Transformation Initiatives
 */

export interface SRDMetric {
  name: string;
  current: number;
  target: number;
  unit: string;
  baseline: number;
  trend: 'improving' | 'declining' | 'stable';
}

export interface SRDPhase {
  name: string;
  timeline: string;
  cost: number;
  description: string;
  status: 'not-started' | 'in-progress' | 'completed';
}

export interface SystemicRenewalDirectorate {
  id: number;
  name: string;
  shortName: string;
  category: 'infrastructure' | 'social' | 'economic' | 'governance';
  status: 'planning' | 'pilot' | 'scaling' | 'operational';
  totalInvestment: number; // in billions
  timeframe: string;
  description: string;
  problemStatement: string;
  phases: SRDPhase[];
  metrics: SRDMetric[];
  legislativeActions: string[];
  webIntegration: {
    platform: string;
    description: string;
  };
  dependencies: number[]; // IDs of other SRDs this depends on
  progress: number; // 0-100
}

export const systemicRenewalDirectorates: SystemicRenewalDirectorate[] = [
  {
    id: 1,
    name: "Universal Digital Equity and Infrastructure",
    shortName: "Digital Equity",
    category: "infrastructure",
    status: "pilot",
    totalInvestment: 65,
    timeframe: "0-7 years",
    description: "Ensure every American has access to high-speed internet and digital literacy",
    problemStatement: "28 million Americans lack broadband access; digital divide creates economic and educational barriers",
    phases: [
      {
        name: "Rural Connectivity Sprint",
        timeline: "0-12 Months",
        cost: 15,
        description: "Deploy satellite and fixed wireless to underserved areas",
        status: "in-progress"
      },
      {
        name: "Municipal Broadband Networks",
        timeline: "1-3 Years",
        cost: 25,
        description: "Build publicly-owned fiber networks in 500 municipalities",
        status: "not-started"
      },
      {
        name: "National Digital Literacy Corps",
        timeline: "3-7 Years",
        cost: 25,
        description: "Train 10 million Americans in digital skills annually",
        status: "not-started"
      }
    ],
    metrics: [
      {
        name: "Broadband Access",
        current: 72,
        target: 100,
        unit: "%",
        baseline: 72,
        trend: "improving"
      },
      {
        name: "Digital Literacy Rate",
        current: 58,
        target: 90,
        unit: "%",
        baseline: 58,
        trend: "stable"
      },
      {
        name: "Average Download Speed",
        current: 115,
        target: 500,
        unit: "Mbps",
        baseline: 115,
        trend: "improving"
      }
    ],
    legislativeActions: [
      "Pass Digital Equity Act with $65B authorization",
      "Reform FCC Universal Service Fund for broadband",
      "State municipal broadband preemption bans"
    ],
    webIntegration: {
      platform: "ConnectivityTracker",
      description: "Real-time map of broadband gaps and deployment progress"
    },
    dependencies: [],
    progress: 15
  },
  {
    id: 2,
    name: "Education System Transformation",
    shortName: "Education",
    category: "social",
    status: "planning",
    totalInvestment: 120,
    timeframe: "0-7 years",
    description: "Modernize K-12 and higher education for 21st century skills",
    problemStatement: "U.S. ranks 38th in math, 24th in science; $1.7T student debt crisis",
    phases: [
      {
        name: "Teacher Pay and Recruitment",
        timeline: "0-12 Months",
        cost: 30,
        description: "Raise starting teacher salaries to $60k minimum",
        status: "not-started"
      },
      {
        name: "Universal Pre-K Access",
        timeline: "1-3 Years",
        cost: 40,
        description: "Provide free pre-K for all 3-4 year olds",
        status: "not-started"
      },
      {
        name: "Debt-Free College Pathways",
        timeline: "3-7 Years",
        cost: 50,
        description: "Free community college and public university for families under $125k",
        status: "not-started"
      }
    ],
    metrics: [
      {
        name: "Student Debt",
        current: 1700,
        target: 500,
        unit: "$B",
        baseline: 1700,
        trend: "declining"
      },
      {
        name: "Math Proficiency",
        current: 34,
        target: 60,
        unit: "%",
        baseline: 34,
        trend: "stable"
      },
      {
        name: "Teacher Starting Salary",
        current: 41,
        target: 60,
        unit: "$k",
        baseline: 41,
        trend: "improving"
      }
    ],
    legislativeActions: [
      "Education Investment and Innovation Act",
      "Student Debt Relief and Reform Act",
      "Teacher Compensation Standards Act"
    ],
    webIntegration: {
      platform: "EducationProgress Hub",
      description: "Track school funding, test scores, and teacher compensation by district"
    },
    dependencies: [1],
    progress: 8
  },
  {
    id: 3,
    name: "Universal Healthcare Access",
    shortName: "Healthcare",
    category: "social",
    status: "planning",
    totalInvestment: 200,
    timeframe: "0-7 years",
    description: "Ensure affordable, quality healthcare for all Americans",
    problemStatement: "28 million uninsured; healthcare costs 18% of GDP vs 12% OECD average",
    phases: [
      {
        name: "Public Option Launch",
        timeline: "0-12 Months",
        cost: 50,
        description: "Create Medicare-like public option in 25 states",
        status: "not-started"
      },
      {
        name: "Rural Health Expansion",
        timeline: "1-3 Years",
        cost: 75,
        description: "Establish 500 community health centers in healthcare deserts",
        status: "not-started"
      },
      {
        name: "Prescription Drug Reform",
        timeline: "3-7 Years",
        cost: 75,
        description: "Allow Medicare negotiation and price caps",
        status: "not-started"
      }
    ],
    metrics: [
      {
        name: "Uninsured Rate",
        current: 8.6,
        target: 0,
        unit: "%",
        baseline: 8.6,
        trend: "stable"
      },
      {
        name: "Healthcare Cost as % GDP",
        current: 18.3,
        target: 12,
        unit: "%",
        baseline: 18.3,
        trend: "declining"
      },
      {
        name: "Life Expectancy",
        current: 76.4,
        target: 81,
        unit: "years",
        baseline: 76.4,
        trend: "improving"
      }
    ],
    legislativeActions: [
      "Affordable Care Expansion Act",
      "Prescription Drug Price Reform Act",
      "Rural Health Investment Act"
    ],
    webIntegration: {
      platform: "HealthAccess Dashboard",
      description: "Real-time insurance coverage and cost tracking"
    },
    dependencies: [1],
    progress: 5
  },
  {
    id: 4,
    name: "Food Security and Nutrition",
    shortName: "Food Security",
    category: "social",
    status: "pilot",
    totalInvestment: 35,
    timeframe: "0-7 years",
    description: "Eliminate food insecurity and improve nutrition access",
    problemStatement: "38 million Americans face food insecurity; childhood hunger affects learning",
    phases: [
      {
        name: "School Meal Expansion",
        timeline: "0-12 Months",
        cost: 10,
        description: "Universal free school meals for all K-12 students",
        status: "in-progress"
      },
      {
        name: "SNAP Enhancement",
        timeline: "1-3 Years",
        cost: 15,
        description: "Increase benefits by 30% and expand eligibility",
        status: "not-started"
      },
      {
        name: "Urban Agriculture Network",
        timeline: "3-7 Years",
        cost: 10,
        description: "1000 community farms in food deserts",
        status: "not-started"
      }
    ],
    metrics: [
      {
        name: "Food Insecurity Rate",
        current: 10.5,
        target: 0,
        unit: "%",
        baseline: 10.5,
        trend: "improving"
      },
      {
        name: "Child Hunger Rate",
        current: 13.9,
        target: 0,
        unit: "%",
        baseline: 13.9,
        trend: "stable"
      },
      {
        name: "SNAP Participation",
        current: 42,
        target: 48,
        unit: "million",
        baseline: 42,
        trend: "improving"
      }
    ],
    legislativeActions: [
      "Universal School Meals Act",
      "SNAP Modernization Act",
      "Urban Agriculture Investment Act"
    ],
    webIntegration: {
      platform: "Nutrition Security Tracker",
      description: "Map food deserts and track program participation"
    },
    dependencies: [],
    progress: 12
  },
  {
    id: 5,
    name: "Universal Childcare and Early Education",
    shortName: "Childcare",
    category: "social",
    status: "planning",
    totalInvestment: 75,
    timeframe: "0-7 years",
    description: "Affordable, quality childcare for all families",
    problemStatement: "Average childcare costs $11k/year; 51% of Americans live in childcare deserts",
    phases: [
      {
        name: "Childcare Worker Wages",
        timeline: "0-12 Months",
        cost: 20,
        description: "Raise childcare worker wages to $20/hour minimum",
        status: "not-started"
      },
      {
        name: "Childcare Center Construction",
        timeline: "1-3 Years",
        cost: 30,
        description: "Build 5,000 new childcare centers in underserved areas",
        status: "not-started"
      },
      {
        name: "Universal Subsidy Program",
        timeline: "3-7 Years",
        cost: 25,
        description: "Cap childcare costs at 7% of family income",
        status: "not-started"
      }
    ],
    metrics: [
      {
        name: "Childcare Affordability",
        current: 18,
        target: 7,
        unit: "% of income",
        baseline: 18,
        trend: "stable"
      },
      {
        name: "Childcare Worker Median Wage",
        current: 13.50,
        target: 20,
        unit: "$/hour",
        baseline: 13.50,
        trend: "stable"
      },
      {
        name: "Access to Quality Childcare",
        current: 49,
        target: 100,
        unit: "%",
        baseline: 49,
        trend: "improving"
      }
    ],
    legislativeActions: [
      "Universal Childcare Act",
      "Childcare Worker Fair Wage Act",
      "Childcare Infrastructure Investment Act"
    ],
    webIntegration: {
      platform: "Childcare Access Portal",
      description: "Find and compare licensed childcare providers by location"
    },
    dependencies: [2],
    progress: 7
  },
  {
    id: 6,
    name: "Adolescent Mental Health and Development",
    shortName: "Youth Development",
    category: "social",
    status: "planning",
    totalInvestment: 40,
    timeframe: "0-7 years",
    description: "Comprehensive mental health support for young Americans",
    problemStatement: "42% of teens report persistent sadness; suicide is 2nd leading cause of death ages 10-14",
    phases: [
      {
        name: "School Counselor Expansion",
        timeline: "0-12 Months",
        cost: 10,
        description: "Hire 50,000 school counselors to achieve 250:1 ratio",
        status: "not-started"
      },
      {
        name: "Youth Mental Health Centers",
        timeline: "1-3 Years",
        cost: 15,
        description: "Establish 2,000 drop-in mental health centers",
        status: "not-started"
      },
      {
        name: "Digital Mental Health Platform",
        timeline: "3-7 Years",
        cost: 15,
        description: "AI-assisted mental health screening and support",
        status: "not-started"
      }
    ],
    metrics: [
      {
        name: "Student-to-Counselor Ratio",
        current: 415,
        target: 250,
        unit: "students",
        baseline: 415,
        trend: "improving"
      },
      {
        name: "Youth Depression Rate",
        current: 20,
        target: 10,
        unit: "%",
        baseline: 20,
        trend: "declining"
      },
      {
        name: "Youth Suicide Rate",
        current: 10.7,
        target: 5,
        unit: "per 100k",
        baseline: 10.7,
        trend: "stable"
      }
    ],
    legislativeActions: [
      "Youth Mental Health Crisis Act",
      "School Counselor Investment Act",
      "Digital Mental Health Innovation Act"
    ],
    webIntegration: {
      platform: "Youth Wellness Tracker",
      description: "Anonymous mental health check-ins and resource finder"
    },
    dependencies: [1, 2],
    progress: 6
  },
  {
    id: 7,
    name: "National Infrastructure Modernization",
    shortName: "Infrastructure",
    category: "infrastructure",
    status: "scaling",
    totalInvestment: 175,
    timeframe: "0-7 years",
    description: "Rebuild and modernize America's physical infrastructure",
    problemStatement: "43% of roads in poor condition; 45,000 bridges structurally deficient",
    phases: [
      {
        name: "Bridge and Road Emergency Repairs",
        timeline: "0-12 Months",
        cost: 50,
        description: "Repair 15,000 structurally deficient bridges",
        status: "in-progress"
      },
      {
        name: "Public Transit Expansion",
        timeline: "1-3 Years",
        cost: 75,
        description: "Build/expand rail and bus rapid transit in 50 cities",
        status: "not-started"
      },
      {
        name: "Smart Infrastructure Network",
        timeline: "3-7 Years",
        cost: 50,
        description: "Deploy IoT sensors and AI traffic management nationwide",
        status: "not-started"
      }
    ],
    metrics: [
      {
        name: "Infrastructure Grade",
        current: 2.3,
        target: 3.5,
        unit: "GPA",
        baseline: 2.3,
        trend: "improving"
      },
      {
        name: "Structurally Deficient Bridges",
        current: 45000,
        target: 5000,
        unit: "bridges",
        baseline: 45000,
        trend: "improving"
      },
      {
        name: "Public Transit Ridership",
        current: 9.9,
        target: 15,
        unit: "billion trips",
        baseline: 9.9,
        trend: "stable"
      }
    ],
    legislativeActions: [
      "Infrastructure Investment and Jobs Act (Enhanced)",
      "Transit Transformation Act",
      "Smart Infrastructure Innovation Act"
    ],
    webIntegration: {
      platform: "Infrastructure Health Monitor",
      description: "Real-time infrastructure conditions and project progress"
    },
    dependencies: [1, 11],
    progress: 22
  },
  {
    id: 8,
    name: "Living Wage and Affordable Housing",
    shortName: "Housing & Wages",
    category: "economic",
    status: "planning",
    totalInvestment: 90,
    timeframe: "0-7 years",
    description: "Ensure fair wages and affordable housing for all Americans",
    problemStatement: "Minimum wage unchanged since 2009; median rent consumes 30% of income",
    phases: [
      {
        name: "Minimum Wage Increase",
        timeline: "0-12 Months",
        cost: 0,
        description: "Raise federal minimum wage to $15/hour",
        status: "not-started"
      },
      {
        name: "Affordable Housing Construction",
        timeline: "1-3 Years",
        cost: 60,
        description: "Build 1 million affordable housing units",
        status: "not-started"
      },
      {
        name: "Housing Voucher Expansion",
        timeline: "3-7 Years",
        cost: 30,
        description: "Universal housing vouchers for families under 30% AMI",
        status: "not-started"
      }
    ],
    metrics: [
      {
        name: "Federal Minimum Wage",
        current: 7.25,
        target: 15,
        unit: "$/hour",
        baseline: 7.25,
        trend: "stable"
      },
      {
        name: "Housing Cost Burden",
        current: 30,
        target: 20,
        unit: "% of income",
        baseline: 30,
        trend: "declining"
      },
      {
        name: "Homelessness Rate",
        current: 18,
        target: 5,
        unit: "per 10k",
        baseline: 18,
        trend: "stable"
      }
    ],
    legislativeActions: [
      "Living Wage Act",
      "Affordable Housing Investment Act",
      "Housing Voucher Universalization Act"
    ],
    webIntegration: {
      platform: "Housing Affordability Tracker",
      description: "Real-time rent and wage data by metro area"
    },
    dependencies: [7],
    progress: 9
  },
  {
    id: 9,
    name: "Fiscal Transparency and Efficiency",
    shortName: "Fiscal Responsibility",
    category: "governance",
    status: "pilot",
    totalInvestment: 5,
    timeframe: "0-7 years",
    description: "Modernize budgeting with outcome-based accountability",
    problemStatement: "$247B in improper payments annually; budgeting by line-item not outcomes",
    phases: [
      {
        name: "Federal Spending Dashboard",
        timeline: "0-12 Months",
        cost: 1,
        description: "Real-time public dashboard of all federal spending",
        status: "in-progress"
      },
      {
        name: "Outcome-Based Budgeting",
        timeline: "1-3 Years",
        cost: 2,
        description: "Shift 25% of budget to outcome-based funding",
        status: "not-started"
      },
      {
        name: "AI Fraud Detection",
        timeline: "3-7 Years",
        cost: 2,
        description: "Deploy AI to reduce improper payments by 80%",
        status: "not-started"
      }
    ],
    metrics: [
      {
        name: "Improper Payments",
        current: 247,
        target: 50,
        unit: "$B",
        baseline: 247,
        trend: "improving"
      },
      {
        name: "Budget Transparency Score",
        current: 45,
        target: 90,
        unit: "points",
        baseline: 45,
        trend: "improving"
      },
      {
        name: "Outcome-Based Funding",
        current: 5,
        target: 50,
        unit: "%",
        baseline: 5,
        trend: "stable"
      }
    ],
    legislativeActions: [
      "Digital Accountability in Government Act",
      "Outcome-Based Budgeting Reform Act",
      "Improper Payment Elimination Act"
    ],
    webIntegration: {
      platform: "FederalSpend Live Dashboard",
      description: "Track every federal dollar in real-time"
    },
    dependencies: [1],
    progress: 18
  },
  {
    id: 10,
    name: "State and Local Empowerment",
    shortName: "State Empowerment",
    category: "governance",
    status: "planning",
    totalInvestment: 0.25,
    timeframe: "0-7 years",
    description: "Empower states and localities with regulatory flexibility",
    problemStatement: "Federal mandates override local innovation; 18-month average grant disbursement",
    phases: [
      {
        name: "Regulatory Innovation Waivers",
        timeline: "0-12 Months",
        cost: 0.05,
        description: "Streamlined process for states to request waivers",
        status: "not-started"
      },
      {
        name: "Interstate Compact Framework",
        timeline: "1-3 Years",
        cost: 0.2,
        description: "Model compacts for shared service delivery",
        status: "not-started"
      },
      {
        name: "Program Devolution",
        timeline: "3-7 Years",
        cost: -15,
        description: "Shift 25% of grant programs to state administration",
        status: "not-started"
      }
    ],
    metrics: [
      {
        name: "Grant Disbursement Time",
        current: 18,
        target: 6,
        unit: "months",
        baseline: 18,
        trend: "stable"
      },
      {
        name: "Active Interstate Compacts",
        current: 200,
        target: 600,
        unit: "compacts",
        baseline: 200,
        trend: "stable"
      },
      {
        name: "State Government Satisfaction",
        current: 42,
        target: 67,
        unit: "%",
        baseline: 42,
        trend: "improving"
      }
    ],
    legislativeActions: [
      "State Innovation and Empowerment Act",
      "Interstate Collaboration Enhancement Act",
      "State constitutional amendments (30 states)"
    ],
    webIntegration: {
      platform: "Laboratory of Democracy Hub",
      description: "Showcase successful state innovations with toolkits"
    },
    dependencies: [9],
    progress: 11
  },
  {
    id: 11,
    name: "Renewable Energy and Grid Independence",
    shortName: "Clean Energy",
    category: "infrastructure",
    status: "scaling",
    totalInvestment: 70.5,
    timeframe: "0-7 years",
    description: "Achieve energy independence through renewable sources",
    problemStatement: "70% of transmission lines over 25 years old; weather outages up 67% since 2000",
    phases: [
      {
        name: "Community Solar Program",
        timeline: "0-12 Months",
        cost: 0.5,
        description: "Install solar gardens in 1,000 low-income neighborhoods",
        status: "in-progress"
      },
      {
        name: "National Grid Modernization",
        timeline: "1-3 Years",
        cost: 45,
        description: "Deploy smart grid and battery storage on 3 interconnections",
        status: "not-started"
      },
      {
        name: "Green Hydrogen Hubs",
        timeline: "3-7 Years",
        cost: 25,
        description: "Establish 5 regional hydrogen production hubs",
        status: "not-started"
      }
    ],
    metrics: [
      {
        name: "Carbon-Free Electricity",
        current: 40,
        target: 100,
        unit: "%",
        baseline: 40,
        trend: "improving"
      },
      {
        name: "Grid Outage Duration",
        current: 8,
        target: 2,
        unit: "hours/year",
        baseline: 8,
        trend: "declining"
      },
      {
        name: "Clean Energy Jobs",
        current: 3.3,
        target: 6.3,
        unit: "million",
        baseline: 3.3,
        trend: "improving"
      }
    ],
    legislativeActions: [
      "FERC Reform for National Transmission Planning",
      "State Clean Energy Standards (100% by 2035)",
      "Green Hydrogen Investment Act"
    ],
    webIntegration: {
      platform: "Energy Resilience Dashboard",
      description: "Real-time grid health and renewable generation map"
    },
    dependencies: [1, 7],
    progress: 19
  },
  {
    id: 12,
    name: "Civic Engagement and Democratic Innovation",
    shortName: "Civic Renewal",
    category: "governance",
    status: "pilot",
    totalInvestment: 2.85,
    timeframe: "0-7 years",
    description: "Restore trust and participation in democratic processes",
    problemStatement: "Only 20% regularly contact representatives; trust in government at 20%",
    phases: [
      {
        name: "Citizens' Assembly Program",
        timeline: "0-12 Months",
        cost: 0.1,
        description: "Convene representative assemblies in 10 states",
        status: "in-progress"
      },
      {
        name: "Civic Education Initiative",
        timeline: "1-3 Years",
        cost: 2,
        description: "Modern civics curriculum for all K-12 schools",
        status: "not-started"
      },
      {
        name: "Digital Public Square",
        timeline: "3-7 Years",
        cost: 0.75,
        description: "Independent platform for civic discourse",
        status: "not-started"
      }
    ],
    metrics: [
      {
        name: "Midterm Voter Turnout",
        current: 47,
        target: 60,
        unit: "%",
        baseline: 47,
        trend: "improving"
      },
      {
        name: "Government Trust",
        current: 20,
        target: 50,
        unit: "%",
        baseline: 20,
        trend: "stable"
      },
      {
        name: "Youth Civic Knowledge",
        current: 23,
        target: 53,
        unit: "score",
        baseline: 23,
        trend: "stable"
      }
    ],
    legislativeActions: [
      "Democracy Restoration Act",
      "Automatic Voter Registration (federal)",
      "Ranked-Choice Voting (state level)"
    ],
    webIntegration: {
      platform: "Civic Health Dashboard",
      description: "Track participation, trust, and polarization metrics"
    },
    dependencies: [1, 2],
    progress: 14
  }
];

// Calculate aggregate statistics
export const aggregateStats = {
  totalInvestment: systemicRenewalDirectorates.reduce((sum, srd) => sum + srd.totalInvestment, 0),
  averageProgress: systemicRenewalDirectorates.reduce((sum, srd) => sum + srd.progress, 0) / systemicRenewalDirectorates.length,
  inProgressCount: systemicRenewalDirectorates.filter(srd => srd.status === 'pilot' || srd.status === 'scaling').length,
  completedPhases: systemicRenewalDirectorates.reduce((sum, srd) => 
    sum + srd.phases.filter(p => p.status === 'completed').length, 0
  ),
  totalPhases: systemicRenewalDirectorates.reduce((sum, srd) => sum + srd.phases.length, 0),
};

// Historical comparison data (simulated baseline vs current)
export interface HistoricalComparison {
  year: number;
  category: string;
  value: number;
}

export const historicalTrends: HistoricalComparison[] = [
  // Digital Equity
  { year: 2020, category: "Broadband Access", value: 68 },
  { year: 2021, category: "Broadband Access", value: 69 },
  { year: 2022, category: "Broadband Access", value: 70 },
  { year: 2023, category: "Broadband Access", value: 71 },
  { year: 2024, category: "Broadband Access", value: 71.5 },
  { year: 2025, category: "Broadband Access", value: 72 },
  
  // Education
  { year: 2020, category: "Math Proficiency", value: 36 },
  { year: 2021, category: "Math Proficiency", value: 35 },
  { year: 2022, category: "Math Proficiency", value: 34 },
  { year: 2023, category: "Math Proficiency", value: 34 },
  { year: 2024, category: "Math Proficiency", value: 34 },
  { year: 2025, category: "Math Proficiency", value: 34 },
  
  // Healthcare
  { year: 2020, category: "Uninsured Rate", value: 10.2 },
  { year: 2021, category: "Uninsured Rate", value: 9.6 },
  { year: 2022, category: "Uninsured Rate", value: 8.9 },
  { year: 2023, category: "Uninsured Rate", value: 8.6 },
  { year: 2024, category: "Uninsured Rate", value: 8.6 },
  { year: 2025, category: "Uninsured Rate", value: 8.6 },
  
  // Infrastructure
  { year: 2020, category: "Infrastructure Grade", value: 2.0 },
  { year: 2021, category: "Infrastructure Grade", value: 2.05 },
  { year: 2022, category: "Infrastructure Grade", value: 2.1 },
  { year: 2023, category: "Infrastructure Grade", value: 2.2 },
  { year: 2024, category: "Infrastructure Grade", value: 2.25 },
  { year: 2025, category: "Infrastructure Grade", value: 2.3 },
  
  // Clean Energy
  { year: 2020, category: "Carbon-Free Electricity", value: 32 },
  { year: 2021, category: "Carbon-Free Electricity", value: 34 },
  { year: 2022, category: "Carbon-Free Electricity", value: 36 },
  { year: 2023, category: "Carbon-Free Electricity", value: 38 },
  { year: 2024, category: "Carbon-Free Electricity", value: 39 },
  { year: 2025, category: "Carbon-Free Electricity", value: 40 },
  
  // Civic Engagement
  { year: 2020, category: "Government Trust", value: 24 },
  { year: 2021, category: "Government Trust", value: 22 },
  { year: 2022, category: "Government Trust", value: 21 },
  { year: 2023, category: "Government Trust", value: 20 },
  { year: 2024, category: "Government Trust", value: 20 },
  { year: 2025, category: "Government Trust", value: 20 },
];
