/**
 * Data Generation Utilities
 * Creates realistic-looking data for leaders without real API data
 */

import { GovernmentLeader, VotingAnalysis, PartyAffiliation } from "@/lib/types";

/**
 * Generate realistic American Score based on party, state, and role
 */
export function generateAmericanScore(
  party: PartyAffiliation,
  state: string,
  type: GovernmentLeader['type']
): { overall: number; breakdown: { benefitScope: number; foreignImpact: number; transparency: number } } {
  // Base scores by party (with variation)
  const partyBases = {
    Democrat: { benefit: 72, foreign: 65, transparency: 68 },
    Republican: { benefit: 68, foreign: 78, transparency: 62 },
    Independent: { benefit: 75, foreign: 72, transparency: 75 }
  };

  const base = partyBases[party];
  
  // Add state variation (red vs blue states)
  const blueStates = ['CA', 'NY', 'MA', 'IL', 'WA', 'OR', 'CT', 'VT', 'MD', 'DE', 'NJ', 'RI', 'HI'];
  const redStates = ['TX', 'FL', 'WY', 'AL', 'MS', 'OK', 'AR', 'KY', 'TN', 'SC', 'WV', 'ID', 'UT', 'MT', 'SD', 'ND'];
  
  let stateModifier = 0;
  if (blueStates.includes(state) && party === 'Democrat') stateModifier = 5;
  if (redStates.includes(state) && party === 'Republican') stateModifier = 5;
  if (blueStates.includes(state) && party === 'Republican') stateModifier = -3;
  if (redStates.includes(state) && party === 'Democrat') stateModifier = -3;
  
  // Add role variation
  const roleModifier = type === 'mayor' ? 8 : type === 'governor' ? 5 : 0;
  
  // Add randomness (-5 to +5)
  const random = Math.floor(Math.random() * 11) - 5;
  
  const benefitScope = Math.min(100, Math.max(30, base.benefit + stateModifier + roleModifier + random));
  const foreignImpact = Math.min(100, Math.max(30, base.foreign + stateModifier + random));
  const transparency = Math.min(100, Math.max(30, base.transparency + roleModifier + random));
  const overall = Math.round((benefitScope + foreignImpact + transparency) / 3);
  
  return {
    overall,
    breakdown: { benefitScope, foreignImpact, transparency }
  };
}

/**
 * Generate realistic voting record
 */
export function generateVotingRecord(
  party: PartyAffiliation,
  score: { overall: number; breakdown: { benefitScope: number; foreignImpact: number; transparency: number } }
): VotingAnalysis[] {
  const bills = [
    { id: 'hr-3684', title: 'Infrastructure Investment and Jobs Act', weight: 'high' },
    { id: 'hr-5376', title: 'Build Back Better Act', weight: 'high' },
    { id: 's-1260', title: 'CHIPS and Science Act', weight: 'high' },
    { id: 'hr-1319', title: 'American Rescue Plan', weight: 'high' },
    { id: 'hr-3755', title: 'Women\'s Health Protection Act', weight: 'medium' },
    { id: 's-2938', title: 'Postal Service Reform Act', weight: 'medium' },
    { id: 'hr-4521', title: 'America COMPETES Act', weight: 'medium' },
    { id: 's-1375', title: 'Violence Against Women Act', weight: 'medium' },
    { id: 'hr-8404', title: 'Respect for Marriage Act', weight: 'low' },
    { id: 'hr-7900', title: 'National Defense Authorization Act', weight: 'high' },
  ];
  
  const votePattern = party === 'Democrat' ? 0.7 : party === 'Republican' ? 0.3 : 0.5;
  
  return bills.slice(0, 6 + Math.floor(Math.random() * 4)).map((bill) => {
    const baseScore = score.overall + (Math.random() * 20 - 10);
    const vote = Math.random() < votePattern ? 'yea' : 'nay';
    
    return {
      billId: bill.id,
      billTitle: bill.title,
      vote: vote as 'yea' | 'nay',
      americanScore: {
        overall: Math.min(100, Math.max(20, Math.round(baseScore))),
        breakdown: {
          benefitScope: Math.min(100, Math.max(20, score.breakdown.benefitScope + (Math.random() * 10 - 5))),
          foreignImpact: Math.min(100, Math.max(20, score.breakdown.foreignImpact + (Math.random() * 10 - 5))),
          transparency: Math.min(100, Math.max(20, score.breakdown.transparency + (Math.random() * 10 - 5)))
        }
      },
      impact: (bill.weight as 'high' | 'medium' | 'low')
    };
  });
}

/**
 * Generate realistic metrics
 */
export function generateMetrics(
  type: GovernmentLeader['type']
): GovernmentLeader['metrics'] {
  const baseByType = {
    senate: { sponsored: 35, passed: 8, attendance: 96, bipartisan: 7.2 },
    house: { sponsored: 28, passed: 5, attendance: 94, bipartisan: 6.5 },
    governor: { sponsored: 45, passed: 22, attendance: 98, bipartisan: 8.5 },
    mayor: { sponsored: 52, passed: 28, attendance: 97, bipartisan: 9.2 }
  };
  
  const typeKey = type === 'senator' ? 'senate' : type === 'representative' ? 'house' : type;
  const base = baseByType[typeKey as keyof typeof baseByType] || baseByType.senate;
  
  return {
    billsSponsored: base.sponsored + Math.floor(Math.random() * 20 - 10),
    billsPassed: base.passed + Math.floor(Math.random() * 6 - 3),
    voteAttendance: Math.min(100, base.attendance + Math.floor(Math.random() * 5 - 2)),
    bipartisanshipScore: Math.round((base.bipartisan + Math.random() * 2 - 1) * 10) / 10
  };
}

/**
 * Generate next election date
 */
export function generateNextElection(type: GovernmentLeader['type']): string {
  // const currentYear = 2025;
  
  if (type === 'senate' || type === 'senator') {
    // Senators: 6-year terms, next elections 2026, 2028, 2030
    const nextElections = [2026, 2028, 2030];
    return nextElections[Math.floor(Math.random() * 3)].toString();
  }
  
  if (type === 'house' || type === 'representative') {
    // House: 2-year terms, always next even year
    return '2026';
  }
  
  if (type === 'governor') {
    // Governors: 4-year terms, most in 2026 or 2027
    const nextElections = [2026, 2027, 2028];
    return nextElections[Math.floor(Math.random() * 3)].toString();
  }
  
  if (type === 'mayor') {
    // Mayors: vary, typically 4 years
    const nextElections = [2025, 2026, 2027, 2028, 2029];
    return nextElections[Math.floor(Math.random() * 5)].toString();
  }
  
  return '2026';
}

/**
 * Generate committees based on party and type
 */
export function generateCommittees(
  type: GovernmentLeader['type']
): string[] {
  const senateCommittees = [
    'Armed Services', 'Foreign Relations', 'Finance', 'Judiciary', 
    'Agriculture', 'Banking', 'Commerce', 'Energy', 'Environment',
    'Health', 'Homeland Security', 'Budget', 'Intelligence', 'Veterans Affairs'
  ];
  
  const houseCommittees = [
    'Ways and Means', 'Appropriations', 'Rules', 'Energy and Commerce',
    'Financial Services', 'Judiciary', 'Oversight', 'Transportation',
    'Agriculture', 'Armed Services', 'Education', 'Foreign Affairs',
    'Homeland Security', 'Natural Resources', 'Science and Technology'
  ];
  
  const localCommittees = [
    'Economic Development', 'Public Safety', 'Education', 'Transportation',
    'Housing', 'Environment', 'Parks and Recreation', 'Budget', 'Health'
  ];
  
  let pool: string[];
  if (type === 'senate' || type === 'senator') pool = senateCommittees;
  else if (type === 'house' || type === 'representative') pool = houseCommittees;
  else pool = localCommittees;
  
  // Shuffle and pick 2-4 committees
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const count = 2 + Math.floor(Math.random() * 3);
  return shuffled.slice(0, count);
}

/**
 * Generate recent activity
 */
export function generateRecentActivity(): GovernmentLeader['recentActivity'] {
  const activities = [
    { title: 'Voted Yea on Infrastructure Bill', type: 'vote' as const, impact: 8 },
    { title: 'Sponsored Climate Resilience Act', type: 'bill' as const, impact: 7 },
    { title: 'Hosted Town Hall on Healthcare', type: 'speech' as const, impact: 6 },
    { title: 'Committee Hearing on Tech Regulation', type: 'hearing' as const, impact: 7 },
    { title: 'Co-sponsored Education Reform Bill', type: 'bill' as const, impact: 6 },
    { title: 'Voted Nay on Budget Cuts', type: 'vote' as const, impact: 5 },
    { title: 'Introduced Veteran Support Act', type: 'bill' as const, impact: 8 },
    { title: 'Speech on Economic Recovery', type: 'speech' as const, impact: 6 }
  ];
  
  const shuffled = [...activities].sort(() => Math.random() - 0.5);
  const count = 3 + Math.floor(Math.random() * 3);
  
  return shuffled.slice(0, count).map((activity, idx) => ({
    title: activity.title,
    type: activity.type,
    date: new Date(2025, 11 - idx, 10 - idx * 3).toISOString().split('T')[0],
    impactScore: activity.impact
  }));
}

/**
 * Generate AI insights
 */
export function generateAIInsights(
  type: GovernmentLeader['type'],
  party: PartyAffiliation
): GovernmentLeader['aiInsights'] {
  const priorities = {
    Democrat: ['Climate action', 'Healthcare access', 'Social equity', 'Infrastructure', 'Education funding'],
    Republican: ['Economic growth', 'Border security', 'Tax reform', 'Energy independence', 'Small business'],
    Independent: ['Government reform', 'Campaign finance', 'Healthcare', 'Environment', 'Economic fairness']
  };
  
  const shuffled = [...priorities[party]].sort(() => Math.random() - 0.5);
  
  const predictions: Array<'safe' | 'competitive' | 'vulnerable'> = ['safe', 'competitive', 'vulnerable'];
  const prediction = type === 'mayor' ? 'safe' : predictions[Math.floor(Math.random() * 3)];
  
  return {
    priorities: shuffled.slice(0, 3),
    prediction,
    keyRelationships: [
      `Sen. ${['Johnson', 'Williams', 'Brown', 'Davis', 'Miller'][Math.floor(Math.random() * 5)]}`,
      `Rep. ${['Smith', 'Garcia', 'Rodriguez', 'Martinez', 'Hernandez'][Math.floor(Math.random() * 5)]}`,
      `Gov. ${['Anderson', 'Taylor', 'Thomas', 'Moore', 'Jackson'][Math.floor(Math.random() * 5)]}`
    ],
    priority: 5 + Math.floor(Math.random() * 5)
  };
}
