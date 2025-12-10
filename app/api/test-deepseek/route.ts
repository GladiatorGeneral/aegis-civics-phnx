/**
 * DeepSeek API Test Endpoint
 * Tests low-cost AI inference for bill analysis
 */

import { NextResponse } from 'next/server';
import { deepseekAPI } from '@/lib/api/deepseek';

export async function GET() {
  try {
    const results: Record<string, unknown> = {};

    // Test 1: Simple chat completion
    try {
      const chatResponse = await deepseekAPI.chat([
        {
          role: 'user',
          content: 'What are the three main categories of federal infrastructure spending?'
        }
      ]);
      results.chat = {
        status: 'success',
        response: chatResponse.choices[0].message.content.substring(0, 200) + '...',
        tokens: chatResponse.usage
      };
    } catch (error) {
      results.chat = {
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }

    // Test 2: Bill analysis with sample infrastructure bill text
    try {
      const sampleBillText = `
        H.R. 3684 - Infrastructure Investment and Jobs Act
        
        SEC. 11101. HIGHWAY INFRASTRUCTURE PROGRAM
        (a) AUTHORIZATION OF APPROPRIATIONS.—There is authorized to be appropriated out of the Highway Trust Fund 
        $110,000,000,000 for fiscal years 2022-2026 for highway construction and maintenance projects, including:
        
        (1) $40,000,000,000 for bridge repair and replacement
        (2) $30,000,000,000 for road resurfacing and safety improvements
        (3) $25,000,000,000 for freight corridor improvements
        (4) $15,000,000,000 for rural road upgrades
        
        (b) DOMESTIC CONTENT REQUIREMENTS.—All steel, iron, and manufactured products used in projects funded under 
        this section shall be produced in the United States, except where the Secretary determines that:
        (1) Domestic products are not available in sufficient quantity or quality
        (2) Inclusion of domestic materials would increase project costs by more than 25%
        
        (c) LABOR STANDARDS.—All laborers and mechanics employed on projects funded under this section shall be 
        paid wages at rates not less than those prevailing on similar projects in the locality as determined by the 
        Secretary of Labor in accordance with subchapter IV of chapter 31 of title 40, United States Code.
      `;

      const billAnalysis = await deepseekAPI.analyzeBillText(sampleBillText);
      results.billAnalysis = {
        status: 'success',
        summary: billAnalysis.summary.substring(0, 150) + '...',
        provisions: billAnalysis.keyProvisions.length,
        scores: {
          infrastructureRelevance: billAnalysis.infrastructureRelevance,
          domesticFocus: billAnalysis.domesticFocus
        },
        estimatedCost: billAnalysis.estimatedCost
      };
    } catch (error) {
      results.billAnalysis = {
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }

    // Test 3: Calculate American Score from bill text
    try {
      const scoreAnalysis = await deepseekAPI.calculateAmericanScore(
        'A bill to authorize $50 billion for highway construction with Buy America requirements and prevailing wage standards.'
      );
      results.americanScore = {
        status: 'success',
        scores: {
          benefitScope: scoreAnalysis.benefitScope,
          foreignImpact: scoreAnalysis.foreignImpact,
          transparency: scoreAnalysis.transparency,
          overall: scoreAnalysis.overall
        },
        reasoning: scoreAnalysis.reasoning.substring(0, 200) + '...'
      };
    } catch (error) {
      results.americanScore = {
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }

    // Calculate cost savings vs OpenAI
    const chatTokens = (results.chat as { tokens?: { total_tokens?: number } })?.tokens?.total_tokens || 0;
    const totalTokens = chatTokens;

    const deepseekCost = (totalTokens / 1_000_000) * 0.14; // $0.14 per million tokens
    const openaiCost = (totalTokens / 1_000_000) * 2.50;   // ~$2.50 per million tokens
    const savings = openaiCost > 0 ? ((openaiCost - deepseekCost) / openaiCost) * 100 : 0;

    return NextResponse.json({
      success: true,
      message: 'DeepSeek API tests completed',
      results,
      costAnalysis: {
        totalTokens,
        deepseekCost: `$${deepseekCost.toFixed(4)}`,
        openaiCost: `$${openaiCost.toFixed(4)}`,
        savings: `${savings.toFixed(1)}% cheaper`,
        savingsAmount: `$${(openaiCost - deepseekCost).toFixed(4)}`
      }
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
