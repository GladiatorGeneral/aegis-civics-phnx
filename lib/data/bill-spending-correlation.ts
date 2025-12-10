/**
 * Bill-to-Spending Correlation Analysis
 * Tracks how legislation impacts actual federal spending
 */

import { infrastructureSpending } from './infrastructure';

export interface BillToSpendingCorrelation {
  bill: {
    id: string;
    title: string;
    enacted: string;
    congress: number;
    authorizedAmount?: number;
  };
  spendingImpact: {
    yearEnacted: number;
    baselineSpending: number; // Spending in year before enactment
    year1Spending: number;    // Spending 1 year after
    year2Spending: number;    // Spending 2 years after
    year3Spending: number;    // Spending 3 years after
    totalIncrease: number;
    percentIncrease: number;
  };
  correlation: {
    score: number; // 0-100, how well spending matched authorization
    lag: number;   // Months between enactment and spending increase
    efficiency: number; // Actual vs authorized spending ratio
  };
}

/**
 * Major infrastructure bills to track
 */
const MAJOR_INFRASTRUCTURE_BILLS = [
  {
    id: 'hr-3684-117',
    title: 'Infrastructure Investment and Jobs Act (IIJA)',
    enacted: '2021-11-15',
    congress: 117,
    authorizedAmount: 1200, // $1.2 trillion over 5 years
  },
  {
    id: 's-1-117',
    title: 'CHIPS and Science Act',
    enacted: '2022-08-09',
    congress: 117,
    authorizedAmount: 280, // $280 billion
  },
  {
    id: 'hr-5376-117',
    title: 'Inflation Reduction Act (IRA)',
    enacted: '2022-08-16',
    congress: 117,
    authorizedAmount: 891, // $891 billion (includes infrastructure components)
  },
  {
    id: 'hr-1319-117',
    title: 'American Rescue Plan Act',
    enacted: '2021-03-11',
    congress: 117,
    authorizedAmount: 350, // $350B to state/local infrastructure
  },
  {
    id: 'hr-1-116',
    title: 'FAST Act Extension',
    enacted: '2020-09-30',
    congress: 116,
    authorizedAmount: 13.6, // $13.6B extension
  },
];

/**
 * Calculate correlation between bill enactment and spending changes
 */
export function calculateBillSpendingCorrelation(
  billEnactedYear: number
): BillToSpendingCorrelation['spendingImpact'] {
  // Find spending data for relevant years
  const baselineYear = infrastructureSpending.find(s => s.year === billEnactedYear - 1);
  const year1 = infrastructureSpending.find(s => s.year === billEnactedYear);
  const year2 = infrastructureSpending.find(s => s.year === billEnactedYear + 1);
  const year3 = infrastructureSpending.find(s => s.year === billEnactedYear + 2);

  const baseline = baselineYear?.inflationAdjustedUsdBillions || 0;
  const y1Spending = year1?.inflationAdjustedUsdBillions || baseline;
  const y2Spending = year2?.inflationAdjustedUsdBillions || baseline;
  const y3Spending = year3?.inflationAdjustedUsdBillions || baseline;

  const totalIncrease = y3Spending - baseline;
  const percentIncrease = baseline > 0 ? ((totalIncrease / baseline) * 100) : 0;

  return {
    yearEnacted: billEnactedYear,
    baselineSpending: Math.round(baseline),
    year1Spending: Math.round(y1Spending),
    year2Spending: Math.round(y2Spending),
    year3Spending: Math.round(y3Spending),
    totalIncrease: Math.round(totalIncrease),
    percentIncrease: Math.round(percentIncrease * 10) / 10,
  };
}

/**
 * Calculate correlation score
 */
export function calculateCorrelationScore(
  authorizedAmount: number,
  actualIncrease: number
): BillToSpendingCorrelation['correlation'] {
  // Efficiency: how much of authorized amount was actually spent
  const efficiency = authorizedAmount > 0 ? (actualIncrease / authorizedAmount) * 100 : 0;
  
  // Lag: months between enactment and visible spending increase
  const lag = 12; // Assume 12-month average lag for infrastructure spending
  
  // Score based on efficiency (closer to 100% = higher score)
  let score = 0;
  if (efficiency >= 80 && efficiency <= 120) {
    score = 100; // Excellent match
  } else if (efficiency >= 60 && efficiency < 80) {
    score = 80; // Good match (underspent)
  } else if (efficiency > 120 && efficiency <= 150) {
    score = 75; // Good match (overspent)
  } else if (efficiency >= 40 && efficiency < 60) {
    score = 60; // Fair match (significantly underspent)
  } else if (efficiency > 150) {
    score = 50; // Poor match (excessive spending)
  } else {
    score = 30; // Poor match (minimal impact)
  }

  return {
    score: Math.round(score),
    lag,
    efficiency: Math.round(efficiency * 10) / 10,
  };
}

/**
 * Get all bill-to-spending correlations
 */
export function getAllBillSpendingCorrelations(): BillToSpendingCorrelation[] {
  return MAJOR_INFRASTRUCTURE_BILLS.map(bill => {
    const enactedYear = new Date(bill.enacted).getFullYear();
    const spendingImpact = calculateBillSpendingCorrelation(enactedYear);
    const correlation = calculateCorrelationScore(
      bill.authorizedAmount,
      spendingImpact.totalIncrease
    );

    return {
      bill,
      spendingImpact,
      correlation,
    };
  });
}

/**
 * Get summary statistics
 */
export function getBillSpendingCorrelationSummary() {
  const correlations = getAllBillSpendingCorrelations();
  
  const avgCorrelation = correlations.reduce((sum, c) => sum + c.correlation.score, 0) / correlations.length;
  const avgEfficiency = correlations.reduce((sum, c) => sum + c.correlation.efficiency, 0) / correlations.length;
  const totalAuthorized = correlations.reduce((sum, c) => sum + (c.bill.authorizedAmount || 0), 0);
  const totalActualIncrease = correlations.reduce((sum, c) => sum + c.spendingImpact.totalIncrease, 0);

  return {
    billsTracked: correlations.length,
    avgCorrelationScore: Math.round(avgCorrelation),
    avgEfficiency: Math.round(avgEfficiency * 10) / 10,
    totalAuthorizedBillions: Math.round(totalAuthorized),
    totalActualIncreaseBillions: Math.round(totalActualIncrease),
    overallEfficiency: Math.round((totalActualIncrease / totalAuthorized) * 1000) / 10,
  };
}
