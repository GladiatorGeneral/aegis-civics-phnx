/**
 * DeepSeek API Client
 * https://platform.deepseek.com/
 * 
 * Purpose: Low-cost inference for high-volume analysis tasks
 * - Bill text analysis and summarization
 * - Batch processing of legislation
 * - Infrastructure impact assessment
 * - Cost: ~$0.14 per million tokens (vs OpenAI $2.50)
 */

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || '';
const BASE_URL = 'https://api.deepseek.com/v1';

interface DeepSeekMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface DeepSeekResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export class DeepSeekAPI {
  private apiKey: string;
  private model: string;

  constructor(apiKey?: string, model: string = 'deepseek-chat') {
    this.apiKey = apiKey || DEEPSEEK_API_KEY;
    this.model = model;
  }

  /**
   * Generate chat completion
   */
  async chat(
    messages: DeepSeekMessage[],
    options: {
      temperature?: number;
      maxTokens?: number;
      stream?: boolean;
    } = {}
  ): Promise<DeepSeekResponse> {
    const response = await fetch(`${BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        messages,
        temperature: options.temperature ?? 0.7,
        max_tokens: options.maxTokens ?? 4096,
        stream: options.stream ?? false,
      }),
    });

    if (!response.ok) {
      throw new Error(`DeepSeek API error: ${response.status}`);
    }

    return response.json();
  }

  /**
   * Analyze bill text and extract key information
   * Optimized for cost-effective batch processing
   */
  async analyzeBillText(billText: string): Promise<{
    summary: string;
    keyProvisions: string[];
    infrastructureRelevance: number;
    domesticFocus: number;
    estimatedCost: string;
  }> {
    const messages: DeepSeekMessage[] = [
      {
        role: 'system',
        content: 'You are an expert legislative analyst. Extract key information from bills concisely and accurately.',
      },
      {
        role: 'user',
        content: `Analyze this bill and provide:
1. A 2-sentence summary
2. 3-5 key provisions (bullet points)
3. Infrastructure relevance score (0-100)
4. Domestic focus score (0-100, how much benefits US vs foreign)
5. Estimated cost (if mentioned, otherwise "Not specified")

Bill text:
${billText.substring(0, 8000)}

Respond in JSON format:
{
  "summary": "...",
  "keyProvisions": ["...", "..."],
  "infrastructureRelevance": 0-100,
  "domesticFocus": 0-100,
  "estimatedCost": "..."
}`,
      },
    ];

    const response = await this.chat(messages, { temperature: 0.3, maxTokens: 1000 });
    const content = response.choices[0].message.content;

    try {
      const parsed = JSON.parse(content);
      return parsed;
    } catch {
      // Fallback if JSON parsing fails
      return {
        summary: content.substring(0, 200),
        keyProvisions: ['Analysis in progress'],
        infrastructureRelevance: 50,
        domesticFocus: 50,
        estimatedCost: 'Not specified',
      };
    }
  }

  /**
   * Batch analyze multiple bills
   * Process in parallel with rate limiting
   */
  async analyzeBillsBatch(
    bills: Array<{ id: string; text: string }>,
    concurrency: number = 5
  ): Promise<Map<string, ReturnType<DeepSeekAPI['analyzeBillText']>>> {
    const results = new Map();
    const chunks = [];

    // Split into chunks for parallel processing
    for (let i = 0; i < bills.length; i += concurrency) {
      chunks.push(bills.slice(i, i + concurrency));
    }

    for (const chunk of chunks) {
      const promises = chunk.map(async (bill) => {
        try {
          const analysis = await this.analyzeBillText(bill.text);
          return { id: bill.id, analysis };
        } catch (error) {
          console.error(`Error analyzing bill ${bill.id}:`, error);
          return { id: bill.id, analysis: null };
        }
      });

      const chunkResults = await Promise.all(promises);
      chunkResults.forEach(({ id, analysis }) => {
        results.set(id, analysis);
      });

      // Small delay between chunks to respect rate limits
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    return results;
  }

  /**
   * Calculate American Score from bill analysis
   */
  async calculateAmericanScore(billText: string): Promise<{
    benefitScope: number;
    foreignImpact: number;
    transparency: number;
    overall: number;
    reasoning: string;
  }> {
    const messages: DeepSeekMessage[] = [
      {
        role: 'system',
        content: `You are scoring US legislation on the "American Scale" which measures:
1. BENEFIT SCOPE (0-100): How many Americans benefit? Low/middle/high income? Geographic reach?
2. FOREIGN IMPACT (0-100): Does money stay in America? US jobs? Domestic suppliers?
3. TRANSPARENCY (0-100): Clear provisions? Public oversight? Minimal earmarks?

Higher scores = more pro-American. Be objective and data-driven.`,
      },
      {
        role: 'user',
        content: `Score this bill on the American Scale:

${billText.substring(0, 6000)}

Respond in JSON:
{
  "benefitScope": 0-100,
  "foreignImpact": 0-100,
  "transparency": 0-100,
  "reasoning": "2-3 sentences explaining the scores"
}`,
      },
    ];

    const response = await this.chat(messages, { temperature: 0.3, maxTokens: 500 });
    const content = response.choices[0].message.content;

    try {
      const parsed = JSON.parse(content);
      const overall = Math.round(
        (parsed.benefitScope + parsed.foreignImpact + parsed.transparency) / 3
      );

      return {
        ...parsed,
        overall,
      };
    } catch {
      return {
        benefitScope: 0,
        foreignImpact: 0,
        transparency: 0,
        overall: 0,
        reasoning: 'Analysis failed',
      };
    }
  }

  /**
   * Generate bill summary for dashboard display
   */
  async generateBillSummary(billText: string, maxLength: number = 200): Promise<string> {
    const messages: DeepSeekMessage[] = [
      {
        role: 'system',
        content: 'Summarize legislation clearly and concisely for public understanding.',
      },
      {
        role: 'user',
        content: `Summarize this bill in ${maxLength} characters or less. Focus on what it does and who it affects.\n\n${billText.substring(0, 4000)}`,
      },
    ];

    const response = await this.chat(messages, { temperature: 0.5, maxTokens: 150 });
    return response.choices[0].message.content.substring(0, maxLength);
  }

  /**
   * Compare two bills and identify differences
   */
  async compareBills(bill1Text: string, bill2Text: string): Promise<{
    similarities: string[];
    differences: string[];
    recommendation: string;
  }> {
    const messages: DeepSeekMessage[] = [
      {
        role: 'system',
        content: 'You are comparing legislation to identify key similarities and differences.',
      },
      {
        role: 'user',
        content: `Compare these two bills:

BILL 1:
${bill1Text.substring(0, 3000)}

BILL 2:
${bill2Text.substring(0, 3000)}

Respond in JSON:
{
  "similarities": ["...", "..."],
  "differences": ["...", "..."],
  "recommendation": "Which bill better serves American interests and why (1 sentence)"
}`,
      },
    ];

    const response = await this.chat(messages, { temperature: 0.4, maxTokens: 800 });
    const content = response.choices[0].message.content;

    try {
      return JSON.parse(content);
    } catch {
      return {
        similarities: ['Comparison in progress'],
        differences: ['Analysis pending'],
        recommendation: 'Unable to compare at this time',
      };
    }
  }

  /**
   * Extract infrastructure-specific provisions from bill
   */
  async extractInfrastructureProvisions(billText: string): Promise<{
    highways: string[];
    water: string[];
    energy: string[];
    broadband: string[];
    other: string[];
  }> {
    const messages: DeepSeekMessage[] = [
      {
        role: 'system',
        content: 'Extract infrastructure spending provisions from legislation.',
      },
      {
        role: 'user',
        content: `Find all infrastructure provisions in this bill and categorize them:

${billText.substring(0, 8000)}

Respond in JSON with arrays for each category:
{
  "highways": ["provision 1", "provision 2"],
  "water": ["provision 1"],
  "energy": ["provision 1"],
  "broadband": ["provision 1"],
  "other": ["provision 1"]
}`,
      },
    ];

    const response = await this.chat(messages, { temperature: 0.2, maxTokens: 1500 });
    const content = response.choices[0].message.content;

    try {
      return JSON.parse(content);
    } catch {
      return {
        highways: [],
        water: [],
        energy: [],
        broadband: [],
        other: [],
      };
    }
  }
}

// Singleton instance
export const deepseekAPI = new DeepSeekAPI();
