/**
 * Federal Finance Data for Fiscal Year 2024
 * Source: US Government Financial Report
 */

export interface FederalFinanceData {
  fiscalYear: number;
  headline: {
    totalRevenue: number;
    totalSpending: number;
    budgetDeficit: number;
    totalFederalDebt: number;
    debtHeldByPublic: number;
    debtAsPercentGDP: number;
    interestOnDebt: number;
    interestAsPercentSpending: number;
  };
  revenue: {
    individualIncomeTaxes: { amount: number; percentage: number };
    payrollTaxes: { amount: number; percentage: number };
    corporateIncomeTaxes: { amount: number; percentage: number };
    otherSources: { amount: number; percentage: number };
  };
  spending: {
    socialSecurity: { amount: number; percentage: number };
    defenseAndVeterans: { amount: number; percentage: number };
    stateLocalTransfers: { amount: number; percentage: number };
    medicare: { amount: number; percentage: number };
    netInterest: { amount: number; percentage: number };
    otherPrograms: { amount: number; percentage: number };
  };
  majorPrograms: {
    socialSecurity: {
      spending: number;
      recipients: number;
      averageMonthlyBenefit: number;
    };
    medicare: {
      spending: number;
      enrollees: number;
      avgCostPerPerson: number;
    };
    medicaid: {
      federalSpending: number;
      enrollees: number;
    };
  };
  historicalTrends: {
    year: number;
    revenue: number;
    spending: number;
  }[];
  context: {
    debtPerPerson: number;
    lastSurplusYear: number;
    mandatorySpendingPercent: number;
    populationGrowthSince1980: number;
    revenueGrowthSince1980: number;
    spendingGrowthSince1980: number;
  };
}

export const federalFinanceData2024: FederalFinanceData = {
  fiscalYear: 2024,
  headline: {
    totalRevenue: 4.9, // trillion
    totalSpending: 6.8, // trillion
    budgetDeficit: 1.8, // trillion
    totalFederalDebt: 36.2, // trillion
    debtHeldByPublic: 35.1, // trillion
    debtAsPercentGDP: 97, // percent
    interestOnDebt: 0.8799, // trillion
    interestAsPercentSpending: 13, // percent
  },
  revenue: {
    individualIncomeTaxes: { amount: 2.4, percentage: 49 },
    payrollTaxes: { amount: 1.7, percentage: 35 },
    corporateIncomeTaxes: { amount: 0.53, percentage: 11 },
    otherSources: { amount: 0.27, percentage: 5 },
  },
  spending: {
    socialSecurity: { amount: 1.5, percentage: 22 },
    defenseAndVeterans: { amount: 1.2, percentage: 18 },
    stateLocalTransfers: { amount: 1.1, percentage: 17 },
    medicare: { amount: 0.874, percentage: 13 },
    netInterest: { amount: 0.88, percentage: 13 },
    otherPrograms: { amount: 1.3, percentage: 17 },
  },
  majorPrograms: {
    socialSecurity: {
      spending: 1.5, // trillion
      recipients: 68.2, // million
      averageMonthlyBenefit: 1864, // dollars
    },
    medicare: {
      spending: 0.874, // trillion
      enrollees: 67.6, // million
      avgCostPerPerson: 17786, // dollars
    },
    medicaid: {
      federalSpending: 0.638, // trillion
      enrollees: 99, // million
    },
  },
  historicalTrends: [
    { year: 1980, revenue: 2.0, spending: 2.3 },
    { year: 1985, revenue: 2.7, spending: 3.0 },
    { year: 1990, revenue: 3.2, spending: 3.6 },
    { year: 1995, revenue: 3.3, spending: 3.8 },
    { year: 2000, revenue: 4.4, spending: 3.9 },
    { year: 2005, revenue: 4.1, spending: 5.1 },
    { year: 2010, revenue: 4.0, spending: 5.9 },
    { year: 2015, revenue: 4.8, spending: 5.8 },
    { year: 2020, revenue: 4.4, spending: 8.3 },
    { year: 2024, revenue: 4.9, spending: 6.8 },
    { year: 2025, revenue: 5.12, spending: 7.12 },
    { year: 2026, revenue: 5.33, spending: 7.42 },
  ],
  context: {
    debtPerPerson: 84852, // dollars
    lastSurplusYear: 2001,
    mandatorySpendingPercent: 60,
    populationGrowthSince1980: 1.5, // multiplier
    revenueGrowthSince1980: 2.4, // multiplier
    spendingGrowthSince1980: 2.9, // multiplier
  },
};

// Collection for multiple years — prepared to accept 2025/2026 data when provided
export const federalFinanceDataByYear: Record<number, FederalFinanceData> = {
  2024: federalFinanceData2024,
};

export function getFederalFinanceData(year: number = 2024): FederalFinanceData {
  return federalFinanceDataByYear[year] ?? federalFinanceData2024;
}

export const federalFinanceData2025: FederalFinanceData = {
  fiscalYear: 2025,
  headline: {
    totalRevenue: 5.12,
    totalSpending: 7.12,
    budgetDeficit: 2.0,
    totalFederalDebt: 37.6,
    debtHeldByPublic: 36.5,
    debtAsPercentGDP: 98.8,
    interestOnDebt: 0.94,
    interestAsPercentSpending: 13.2,
  },
  revenue: {
    individualIncomeTaxes: { amount: 2.52, percentage: 49 },
    payrollTaxes: { amount: 1.77, percentage: 35 },
    corporateIncomeTaxes: { amount: 0.55, percentage: 11 },
    otherSources: { amount: 0.28, percentage: 5 },
  },
  spending: {
    socialSecurity: { amount: 1.57, percentage: 22.1 },
    defenseAndVeterans: { amount: 1.24, percentage: 17.4 },
    stateLocalTransfers: { amount: 1.14, percentage: 16.0 },
    medicare: { amount: 0.91, percentage: 12.8 },
    netInterest: { amount: 0.94, percentage: 13.2 },
    otherPrograms: { amount: 0.66, percentage: 9.2 },
  },
  majorPrograms: {
    socialSecurity: {
      spending: 1.57,
      recipients: 69.2,
      averageMonthlyBenefit: 1920,
    },
    medicare: {
      spending: 0.91,
      enrollees: 68.4,
      avgCostPerPerson: 17200,
    },
    medicaid: {
      federalSpending: 0.66,
      enrollees: 94,
    },
  },
  historicalTrends: [
    { year: 1980, revenue: 2.0, spending: 2.3 },
    { year: 1985, revenue: 2.7, spending: 3.0 },
    { year: 1990, revenue: 3.2, spending: 3.6 },
    { year: 1995, revenue: 3.3, spending: 3.8 },
    { year: 2000, revenue: 4.4, spending: 3.9 },
    { year: 2005, revenue: 4.1, spending: 5.1 },
    { year: 2010, revenue: 4.0, spending: 5.9 },
    { year: 2015, revenue: 4.8, spending: 5.8 },
    { year: 2020, revenue: 4.4, spending: 8.3 },
    { year: 2024, revenue: 4.9, spending: 6.8 },
    { year: 2025, revenue: 5.12, spending: 7.12 },
  ],
  context: {
    debtPerPerson: 112000,
    lastSurplusYear: 2001,
    mandatorySpendingPercent: 61,
    populationGrowthSince1980: 1.52,
    revenueGrowthSince1980: 2.45,
    spendingGrowthSince1980: 2.95,
  },
};

export const federalFinanceData2026: FederalFinanceData = {
  fiscalYear: 2026,
  headline: {
    totalRevenue: 5.33,
    totalSpending: 7.42,
    budgetDeficit: 2.09,
    totalFederalDebt: 39.2,
    debtHeldByPublic: 38.1,
    debtAsPercentGDP: 100.6,
    interestOnDebt: 1.0,
    interestAsPercentSpending: 13.5,
  },
  revenue: {
    individualIncomeTaxes: { amount: 2.63, percentage: 49 },
    payrollTaxes: { amount: 1.84, percentage: 35 },
    corporateIncomeTaxes: { amount: 0.57, percentage: 11 },
    otherSources: { amount: 0.30, percentage: 6 },
  },
  spending: {
    socialSecurity: { amount: 1.64, percentage: 22.1 },
    defenseAndVeterans: { amount: 1.28, percentage: 17.3 },
    stateLocalTransfers: { amount: 1.18, percentage: 15.9 },
    medicare: { amount: 0.93, percentage: 12.5 },
    netInterest: { amount: 1.0, percentage: 13.5 },
    otherPrograms: { amount: 0.72, percentage: 9.7 },
  },
  majorPrograms: {
    socialSecurity: {
      spending: 1.64,
      recipients: 70.1,
      averageMonthlyBenefit: 1985,
    },
    medicare: {
      spending: 0.93,
      enrollees: 69.1,
      avgCostPerPerson: 17450,
    },
    medicaid: {
      federalSpending: 0.67,
      enrollees: 92,
    },
  },
  historicalTrends: [
    { year: 1980, revenue: 2.0, spending: 2.3 },
    { year: 1985, revenue: 2.7, spending: 3.0 },
    { year: 1990, revenue: 3.2, spending: 3.6 },
    { year: 1995, revenue: 3.3, spending: 3.8 },
    { year: 2000, revenue: 4.4, spending: 3.9 },
    { year: 2005, revenue: 4.1, spending: 5.1 },
    { year: 2010, revenue: 4.0, spending: 5.9 },
    { year: 2015, revenue: 4.8, spending: 5.8 },
    { year: 2020, revenue: 4.4, spending: 8.3 },
    { year: 2024, revenue: 4.9, spending: 6.8 },
    { year: 2025, revenue: 5.12, spending: 7.12 },
    { year: 2026, revenue: 5.33, spending: 7.42 },
  ],
  context: {
    debtPerPerson: 116000,
    lastSurplusYear: 2001,
    mandatorySpendingPercent: 62,
    populationGrowthSince1980: 1.53,
    revenueGrowthSince1980: 2.48,
    spendingGrowthSince1980: 2.98,
  },
};

// register new years
federalFinanceDataByYear[2025] = federalFinanceData2025;
federalFinanceDataByYear[2026] = federalFinanceData2026;

export function formatCurrency(amount: number, unit: "trillion" | "billion" | "million" | "dollars" = "trillion"): string {
  const multipliers = {
    trillion: 1,
    billion: 1000,
    million: 1000000,
    dollars: 1000000000000,
  };
  
  const value = amount * multipliers[unit];
  
  if (value >= 1000000000000) {
    return `$${(value / 1000000000000).toFixed(2)}T`;
  } else if (value >= 1000000000) {
    return `$${(value / 1000000000).toFixed(2)}B`;
  } else if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(2)}M`;
  } else {
    return `$${value.toLocaleString()}`;
  }
}

export function formatNumber(num: number, decimals: number = 1): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(decimals)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(decimals)}K`;
  }
  return num.toFixed(decimals);
}
