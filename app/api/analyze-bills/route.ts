/**
 * Batch Bill Analysis API Endpoint
 * POST /api/analyze-bills
 * 
 * Analyzes multiple bills using DeepSeek AI for cost-effective processing
 */

import { NextRequest, NextResponse } from 'next/server';
import { deepseekAPI } from '@/lib/api/deepseek';
import { congressAPI } from '@/lib/api/propublica';

export const dynamic = 'force-dynamic';
export const maxDuration = 60; // 60 second timeout for batch processing

interface BillAnalysisRequest {
  billIds?: string[]; // Array of bill IDs like ["hr-3684-117", "s-1-118"]
  congress?: number;  // Congress number (default: 118)
  limit?: number;     // Max bills to analyze (default: 10, max: 50)
  chamber?: 'house' | 'senate' | 'both'; // Which chamber to fetch from
}

interface BillAnalysisResult {
  billId: string;
  title: string;
  summary: string;
  keyProvisions: string[];
  americanScore: {
    benefitScope: number;
    foreignImpact: number;
    transparency: number;
    overall: number;
  };
  infrastructureRelevance: number;
  domesticFocus: number;
  estimatedCost: string;
  sponsor?: string;
  status?: string;
  introducedDate?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: BillAnalysisRequest = await request.json();
    const {
      billIds,
      congress = 118,
      limit = 10,
      chamber = 'both'
    } = body;

    const results: BillAnalysisResult[] = [];
    const errors: Array<{ billId: string; error: string }> = [];

    // If specific bill IDs provided, fetch those
    if (billIds && billIds.length > 0) {
      const billsToAnalyze = billIds.slice(0, Math.min(limit, 50));
      
      for (const billId of billsToAnalyze) {
        try {
          // Parse bill ID format: "hr-3684-117" or "s-1-118"
          const [type, number, billCongress] = billId.split('-');
          const billType = type === 'hr' ? 'hr' : type === 's' ? 's' : type;
          const billNum = parseInt(number);
          const billCongressNum = parseInt(billCongress || congress.toString());

          // Fetch bill details from Congress.gov
          const billResponse = await congressAPI.getBill(billCongressNum, billType, billNum);
          const billDetails = billResponse.bill;
          
          // Use title as text for analysis
          const billText = billDetails.title || 'Bill information not available';

          // Analyze with DeepSeek
          const [analysis, scoring] = await Promise.all([
            deepseekAPI.analyzeBillText(billText),
            deepseekAPI.calculateAmericanScore(billText)
          ]);

          results.push({
            billId,
            title: billDetails.title,
            summary: analysis.summary,
            keyProvisions: analysis.keyProvisions,
            americanScore: {
              benefitScope: scoring.benefitScope,
              foreignImpact: scoring.foreignImpact,
              transparency: scoring.transparency,
              overall: scoring.overall
            },
            infrastructureRelevance: analysis.infrastructureRelevance,
            domesticFocus: analysis.domesticFocus,
            estimatedCost: analysis.estimatedCost,
            sponsor: billDetails.sponsors?.[0]?.fullName,
            status: billDetails.latestAction?.text,
            introducedDate: (billDetails as any).introducedDate || (billDetails as any).updateDate || 'Unknown'
          });

        } catch (error) {
          errors.push({
            billId,
            error: error instanceof Error ? error.message : 'Unknown error'
          });
        }
      }
    } 
    // Otherwise fetch recent bills from Congress
    else {
      const chambers: Array<'house' | 'senate'> = 
        chamber === 'both' ? ['house', 'senate'] : [chamber];
      
      for (const ch of chambers) {
        try {
          // Fetch recent bills from Congress.gov - use a simpler approach
          // Since getRecentBills doesn't exist, we'll skip auto-fetching for now
          // User must provide specific bill IDs
          errors.push({
            billId: `${ch}-auto-fetch`,
            error: 'Auto-fetching not yet implemented. Please provide specific bill IDs.'
          });
        } catch (error) {
          errors.push({
            billId: `${ch}-fetch`,
            error: error instanceof Error ? error.message : 'Failed to fetch bills'
          });
        }
      }
    }

    return NextResponse.json({
      success: true,
      analyzed: results.length,
      failed: errors.length,
      results,
      errors: errors.length > 0 ? errors : undefined,
      metadata: {
        congress,
        chamber,
        timestamp: new Date().toISOString()
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

// GET endpoint for simple status check
export async function GET() {
  return NextResponse.json({
    endpoint: '/api/analyze-bills',
    method: 'POST',
    description: 'Batch analyze bills using DeepSeek AI',
    parameters: {
      billIds: 'Optional array of bill IDs (e.g., ["hr-3684-117", "s-1-118"])',
      congress: 'Congress number (default: 118)',
      limit: 'Max bills to analyze (default: 10, max: 50)',
      chamber: 'Which chamber: "house", "senate", or "both" (default: "both")'
    },
    example: {
      billIds: ['hr-3684-117'],
      congress: 117,
      limit: 10,
      chamber: 'both'
    }
  });
}
