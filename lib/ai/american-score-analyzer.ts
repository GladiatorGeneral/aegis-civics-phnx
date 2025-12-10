import { OpenAI } from "openai";
import { BillAnalysis } from "@/lib/scoring/american-scale";

export interface BillMetadata {
  billNumber: string;
  title: string;
  sponsors: string[];
}

export class AmericanScoreAnalyzer {
  private readonly openai: OpenAI;

  constructor(apiKey = process.env.OPENAI_API_KEY) {
    this.openai = new OpenAI({ apiKey });
  }

  async analyzeBill(billText: string, metadata: BillMetadata): Promise<BillAnalysis> {
    const prompt = this.createAnalysisPrompt(billText, metadata);

    const response = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are a constitutional and economic analysis AI. Evaluate bills based on: " +
            "1. WHO BENEFITS: What percentage of Americans benefit? (0-100%) " +
            "2. INCOME DISTRIBUTION: Does it help all income levels or just top/bottom? " +
            "3. GEOGRAPHIC SPREAD: Does it help all regions or just specific states? " +
            "4. FOREIGN IMPACT: Does it benefit foreign entities more than Americans? " +
            "5. TRANSPARENCY: Was it created openly or with closed-door deals? " +
            "6. LONG-TERM EFFECTS: Benefits current vs future generations? " +
            "Score each category 0-100, then provide overall American Score. " +
            "Use data-driven analysis, not political ideology.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.3,
      max_tokens: 2000,
    });

    return this.parseAIResponse(response.choices[0]?.message?.content ?? "", billText, metadata);
  }

  private createAnalysisPrompt(billText: string, metadata: BillMetadata): string {
    return `Analyze this bill for American interests:

BILL: ${metadata.title}
SPONSORS: ${metadata.sponsors.join(", ")}
LENGTH: ${billText.length} characters

BILL TEXT EXCERPT (first 4000 chars):
${billText.substring(0, 4000)}

ANALYZE:
1. BENEFIT SCOPE (0-100):
   - What percentage of Americans directly benefit?
   - Income distribution of beneficiaries
   - Geographic spread of benefits
   
2. FOREIGN IMPACT (0-100):
   - Foreign government benefits
   - Foreign corporation benefits
   - Sovereignty impacts
   
3. TRANSPARENCY (0-100):
   - Earmarks/pork barrel provisions
   - Closed-door amendments
   - Public comment period
   
4. LONG-TERM EFFECTS (0-100):
   - Generational impact
   - Sustainability
   - Adaptability

OUTPUT FORMAT:
{
  "overall_score": 0-100,
  "benefit_scope": {
    "score": 0-100,
    "breakdown": {
      "populationAffected": 0-100,
      "incomeBrackets": {"low": 0-100, "middle": 0-100, "high": 0-100},
      "geographicSpread": 0-100
    }
  },
  "foreign_impact": {
    "score": 0-100,
    "breakdown": {
      "foreignBeneficiaries": ["list"],
      "domesticBenefitRatio": 0-100,
      "sovereigntyImpact": 0-100
    }
  },
  "transparency": {
    "score": 0-100,
    "breakdown": {
      "earmarksCount": number,
      "closedDoorProvisions": number,
      "publicCommentPeriod": number
    }
  },
  "long_term_effects": {
    "score": 0-100,
    "breakdown": {
      "generationalImpact": 1-5,
      "sustainability": 1-5,
      "adaptability": 1-5
    }
  },
  "evidence": {
    "proAmericanPoints": ["list"],
    "concerningPoints": ["list"],
    "aiAnalysis": "string"
  },
  "confidence": 0-100
}`;
  }

  private parseAIResponse(response: string, billText: string, metadata: BillMetadata): BillAnalysis {
    try {
      const parsed = JSON.parse(response);
      const overallScore = parsed.overall_score ?? 50;
      const overallCategory: BillAnalysis["americanScale"]["overall"] =
        overallScore >= 67 ? "american" : overallScore >= 34 ? "neutral" : "unamerican";

      return {
        id: `analysis-${Date.now()}`,
        billNumber: metadata.billNumber,
        title: metadata.title,
        sponsors: metadata.sponsors,
        americanScale: {
          overall: overallCategory,
          categories: {
            benefit_scope: {
              score: parsed.benefit_scope?.score ?? 50,
              breakdown: parsed.benefit_scope?.breakdown ?? {
                populationAffected: 50,
                incomeBrackets: { low: 50, middle: 50, high: 50 },
                geographicSpread: 50,
              },
            },
            foreign_impact: {
              score: parsed.foreign_impact?.score ?? 50,
              breakdown: parsed.foreign_impact?.breakdown ?? {
                foreignBeneficiaries: [],
                domesticBenefitRatio: 50,
                sovereigntyImpact: 50,
              },
            },
            transparency: {
              score: parsed.transparency?.score ?? 50,
              breakdown: parsed.transparency?.breakdown ?? {
                earmarksCount: 0,
                closedDoorProvisions: 0,
                publicCommentPeriod: 30,
              },
            },
            long_term_effects: {
              score: parsed.long_term_effects?.score ?? 50,
              breakdown: parsed.long_term_effects?.breakdown ?? {
                generationalImpact: 3,
                sustainability: 3,
                adaptability: 3,
              },
            },
          },
          evidence: parsed.evidence ?? {
            proAmericanPoints: [],
            concerningPoints: [],
            aiAnalysis: "No AI analysis returned",
          },
          confidence: parsed.confidence ?? 80,
        },
      };
    } catch (error) {
      return this.fallbackAnalysis(billText, metadata);
    }
  }

  private fallbackAnalysis(billText: string, metadata: BillMetadata): BillAnalysis {
    const keywords = {
      american: ["all americans", "middle class", "working families", "small business", "tax cut"],
      unamerican: ["special interest", "lobby", "earmark", "pork barrel", "foreign aid"],
      transparency: ["closed door", "confidential", "classified", "executive session"],
    };

    const text = billText.toLowerCase();
    let score = 50;

    keywords.american.forEach((word) => {
      if (text.includes(word)) score += 5;
    });

    keywords.unamerican.forEach((word) => {
      if (text.includes(word)) score -= 10;
    });

    keywords.transparency.forEach((word) => {
      if (text.includes(word)) score -= 15;
    });

    score = Math.max(0, Math.min(100, score));

    const overallCategory: BillAnalysis["americanScale"]["overall"] =
      score >= 67 ? "american" : score >= 34 ? "neutral" : "unamerican";

    return {
      id: `fallback-${Date.now()}`,
      billNumber: metadata.billNumber,
      title: metadata.title,
      sponsors: metadata.sponsors,
      americanScale: {
        overall: overallCategory,
        categories: {
          benefit_scope: {
            score: 50,
            breakdown: {
              populationAffected: 50,
              incomeBrackets: { low: 50, middle: 50, high: 50 },
              geographicSpread: 50,
            },
          },
          foreign_impact: {
            score: 50,
            breakdown: {
              foreignBeneficiaries: [],
              domesticBenefitRatio: 50,
              sovereigntyImpact: 50,
            },
          },
          transparency: {
            score: 50,
            breakdown: {
              earmarksCount: 0,
              closedDoorProvisions: 0,
              publicCommentPeriod: 30,
            },
          },
          long_term_effects: {
            score: 50,
            breakdown: {
              generationalImpact: 3,
              sustainability: 3,
              adaptability: 3,
            },
          },
        },
        evidence: {
          proAmericanPoints: ["Keyword analysis performed"],
          concerningPoints: ["Limited AI analysis available"],
          aiAnalysis: "Fallback keyword analysis used",
        },
        confidence: 30,
      },
    };
  }
}
