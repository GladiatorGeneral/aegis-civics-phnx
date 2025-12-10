export type AmericanScore = "american" | "neutral" | "unamerican";
export type ScoreCategory =
  | "benefit_scope"
  | "foreign_impact"
  | "transparency"
  | "long_term_effects";

export interface BillAnalysis {
  id: string;
  billNumber: string;
  title: string;
  sponsors: string[];
  americanScale: {
    overall: AmericanScore;
    categories: {
      benefit_scope: {
        score: number;
        breakdown: {
          populationAffected: number;
          incomeBrackets: Record<string, number>;
          geographicSpread: number;
        };
      };
      foreign_impact: {
        score: number;
        breakdown: {
          foreignBeneficiaries: string[];
          domesticBenefitRatio: number;
          sovereigntyImpact: number;
        };
      };
      transparency: {
        score: number;
        breakdown: {
          earmarksCount: number;
          closedDoorProvisions: number;
          publicCommentPeriod: number;
        };
      };
      long_term_effects: {
        score: number;
        breakdown: {
          generationalImpact: number;
          sustainability: number;
          adaptability: number;
        };
      };
    };
    evidence: {
      proAmericanPoints: string[];
      concerningPoints: string[];
      aiAnalysis: string;
    };
    confidence: number;
  };
}
