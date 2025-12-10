export interface InfrastructureSpendingRecord {
  year: number;
  totalSpendingUsdBillions: number;
  capitalInvestment: number;
  maintenanceOperations: number;
  federalSpending: number;
  stateLocalSpending: number;
  inflationAdjustedUsdBillions: number;
  twentySixYearAverage: number;
  deviationAbsolute: number;
  deviationPercent: number;
  majorFederalBillEnacted?: string;
  dataSource: string;
}

export interface InfrastructureDatasetSummary {
  baselineAverage: number;
  currentYear: number;
  currentDeviationPercent: number;
  yearsAboveAverage: number;
  yearsBelowAverage: number;
}
