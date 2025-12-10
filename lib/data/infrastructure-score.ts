/**
 * Infrastructure American Score Calculator
 * Calculates Benefit Scope, Foreign Impact, and Transparency scores from real data
 */

import { infrastructureSpending, getInfrastructureSummary } from './infrastructure';

export interface InfrastructureAmericanScore {
  benefitScope: number;
  foreignImpact: number;
  transparency: number;
  overall: number;
}

/**
 * Calculate Benefit Scope score based on spending distribution
 * Higher score = more Americans benefit (broader geographic/demographic reach)
 */
function calculateBenefitScope(): number {
  const summary = getInfrastructureSummary();
  const latest = infrastructureSpending[infrastructureSpending.length - 1];
  
  // Factors that increase benefit scope:
  // 1. State/Local spending ratio (more decentralized = broader benefit)
  const stateLocalRatio = latest.stateLocalSpending / latest.totalSpendingUsdBillions;
  
  // 2. Capital investment ratio (infrastructure vs maintenance = future benefit)
  const capitalRatio = latest.capitalInvestment / latest.totalSpendingUsdBillions;
  
  // 3. Consistency (stable funding = predictable benefit)
  const consistencyScore = summary.yearsAboveAverage / infrastructureSpending.length;
  
  // Weighted calculation (0-100)
  const score = 
    (stateLocalRatio * 40) +        // 40% weight: decentralization
    (capitalRatio * 35) +            // 35% weight: capital investment
    (consistencyScore * 25);         // 25% weight: consistency
  
  return Math.round(score * 100);
}

/**
 * Calculate Foreign Impact score based on domestic spending
 * Higher score = more money stays in America
 */
function calculateForeignImpact(): number {
  // Infrastructure spending is inherently domestic (roads, bridges, water systems in US)
  // Score based on:
  // 1. Domestic construction materials preference (assumed 85% for US infrastructure)
  const domesticMaterialsScore = 85;
  
  // 2. Labor force (assumed 95% US workers for infrastructure projects)
  const domesticLaborScore = 95;
  
  // 3. Economic multiplier staying domestic (infrastructure has high domestic multiplier)
  const multiplierScore = 80; // Infrastructure creates 1.5-2x jobs domestically
  
  // Weighted average
  const score = (domesticMaterialsScore * 0.3) + (domesticLaborScore * 0.4) + (multiplierScore * 0.3);
  
  return Math.round(score);
}

/**
 * Calculate Transparency score based on reporting and oversight
 * Higher score = more open and accountable process
 */
function calculateTransparency(): number {
  const latest = infrastructureSpending[infrastructureSpending.length - 1];
  
  // Factors affecting transparency:
  // 1. Federal spending ratio (federal = more reporting requirements)
  const federalRatio = latest.federalSpending / latest.totalSpendingUsdBillions;
  
  // 2. Data availability (we have detailed breakdowns = good transparency)
  const dataQualityScore = 85; // We have year-over-year data with multiple breakdowns
  
  // 3. Recent legislation (post-IIJA = enhanced reporting requirements)
  const hasRecentOversight = latest.year >= 2021 ? 90 : 70;
  
  // Weighted calculation
  const score = 
    (federalRatio * 100 * 0.25) +   // 25% weight: federal oversight
    (dataQualityScore * 0.35) +      // 35% weight: data quality
    (hasRecentOversight * 0.4);      // 40% weight: modern oversight
  
  return Math.round(score);
}

/**
 * Calculate overall infrastructure American Score
 */
export function calculateInfrastructureAmericanScore(): InfrastructureAmericanScore {
  const benefitScope = calculateBenefitScope();
  const foreignImpact = calculateForeignImpact();
  const transparency = calculateTransparency();
  const overall = Math.round((benefitScope + foreignImpact + transparency) / 3);
  
  return {
    benefitScope,
    foreignImpact,
    transparency,
    overall,
  };
}

/**
 * Get infrastructure score with caching (for performance)
 */
let cachedScore: InfrastructureAmericanScore | null = null;

export function getInfrastructureScore(): InfrastructureAmericanScore {
  if (!cachedScore) {
    cachedScore = calculateInfrastructureAmericanScore();
  }
  return cachedScore;
}
