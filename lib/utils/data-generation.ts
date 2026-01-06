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
    { id: 'hr-8921', title: 'AI Accountability & Safety Act of 2025', weight: 'high' },
    { id: 's-4012', title: 'National Water Infrastructure Renewal Act', weight: 'high' },
    { id: 'hr-7834', title: 'Food Supply Chain Resilience Bill', weight: 'medium' },
    { id: 's-3891', title: 'Digital Equity Access Program', weight: 'medium' },
    { id: 'hr-9102', title: 'Healthcare Modernization & Cost Reduction Act', weight: 'high' },
    { id: 's-4405', title: 'FY2026 Supplemental Appropriations', weight: 'low' },
    { id: 'hr-8550', title: 'Grid Independence & Security Act', weight: 'high' },
    { id: 's-3999', title: 'Veteran Housing Guarantee Act', weight: 'medium' },
    { id: 'hr-9211', title: 'Federal Education Modernization Bill', weight: 'medium' },
    { id: 's-4120', title: 'Sovereign Debt Transparency Act', weight: 'low' },
  ];
  
  const votePattern = party === 'Democrat' ? 0.7 : party === 'Republican' ? 0.3 : 0.5;
  
  return bills.slice(0, 6 + Math.floor(Math.random() * 4)).map((bill) => {
    // Advanced Scoring: Analyze bill title for keywords to determine scores instead of pure random
    const lowerTitle = bill.title.toLowerCase();
    
    let benefitMod = 0;
    let foreignMod = 0;
    let transpMod = 0;

    // Domestic Benefit Signals
    if (lowerTitle.includes('infrastructure') || lowerTitle.includes('water') || lowerTitle.includes('grid')) benefitMod += 15;
    if (lowerTitle.includes('education') || lowerTitle.includes('housing') || lowerTitle.includes('food')) benefitMod += 12;
    if (lowerTitle.includes('healthcare') || lowerTitle.includes('modernization')) benefitMod += 10;
    
    // Foreign/Domestic Split Signals
    if (lowerTitle.includes('foreign') || lowerTitle.includes('sovereign') || lowerTitle.includes('defense')) {
      foreignMod += 25; // High foreign impact (bad for domestic focus)
      benefitMod -= 5; 
    } else {
      foreignMod -= 10; // Mostly domestic
    }

    // Transparency Signals
    if (lowerTitle.includes('accountability') || lowerTitle.includes('transparency')) transpMod += 20;
    if (lowerTitle.includes('supplemental') || lowerTitle.includes('appropriations')) transpMod -= 10; // Often hidden pork
    
    // Calculate base scores with modifiers
    const benefitScore = Math.min(100, Math.max(10, score.breakdown.benefitScope + benefitMod + (Math.random() * 10 - 5)));
    const foreignAvScore = Math.min(100, Math.max(10, (100 - score.breakdown.foreignImpact) + foreignMod)); // Invert: Low foreign impact is "good" for domestic focus score? 
    // Actually, let's keep it simple: "Domestic Focus" metric. 
    // If the bill is Foreign, Domestic Focus is Low.
    const domesticFocusScore = lowerTitle.includes('foreign') || lowerTitle.includes('defense') 
        ? 30 + (Math.random() * 20) 
        : 85 + (Math.random() * 15 - 5);
        
    const transparencyScore = Math.min(100, Math.max(10, score.breakdown.transparency + transpMod + (Math.random() * 10 - 5)));
    
    // Overall is average of three
    const computedOverall = Math.round((benefitScore + domesticFocusScore + transparencyScore) / 3);

    const vote = Math.random() < votePattern ? 'yea' : 'nay';
    
    return {
      billId: bill.id,
      billTitle: bill.title,
      vote: vote as 'yea' | 'nay',
      americanScore: {
        overall: computedOverall,
        breakdown: {
          benefitScope: Math.round(benefitScore),
          foreignImpact: Math.round(domesticFocusScore), // Renamed conceptual logic to "Domestic Focus"
          transparency: Math.round(transparencyScore)
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
    return '2029';
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
