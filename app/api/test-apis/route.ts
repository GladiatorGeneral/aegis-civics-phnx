/**
 * API Test Endpoint
 * GET /api/test-apis
 * 
 * Test all API connections and return sample data
 */

import { NextResponse } from 'next/server';
import { blsAPI } from '@/lib/api/bls';
import { eiaAPI } from '@/lib/api/eia';
import { censusAPI } from '@/lib/api/census';

export const dynamic = 'force-dynamic';

export async function GET() {
  const results: Record<string, unknown> = {
    timestamp: new Date().toISOString(),
    apis: {},
  };

  // Test BLS API
  try {
    const ppiData = await blsAPI.getAnnualConstructionPPI(2023);
    (results.apis as Record<string, unknown>).bls = {
      status: 'success',
      sample: {
        series: 'Construction PPI',
        dataPoints: ppiData.length,
        latest: ppiData[ppiData.length - 1],
      },
    };
  } catch (error) {
    (results.apis as Record<string, unknown>).bls = {
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }

  // Test EIA API
  try {
    const currentYear = new Date().getFullYear();
    const dieselData = await eiaAPI.getDieselPrices(
      `${currentYear - 1}-01`,
      `${currentYear - 1}-03`
    );
    (results.apis as Record<string, unknown>).eia = {
      status: 'success',
      sample: {
        series: 'Diesel Prices',
        dataPoints: dieselData.length,
        latest: dieselData[dieselData.length - 1],
      },
    };
  } catch (error) {
    (results.apis as Record<string, unknown>).eia = {
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }

  // Test Census API
  try {
    const incomeData = await censusAPI.getIncomeDistribution(2022, 'state');
    (results.apis as Record<string, unknown>).census = {
      status: 'success',
      sample: {
        series: 'State Income Distribution',
        states: incomeData.length,
        sampleState: incomeData[0],
      },
    };
  } catch (error) {
    (results.apis as Record<string, unknown>).census = {
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }

  // Summary
  const apiResults = results.apis as Record<string, { status: string }>;
  const successCount = Object.values(apiResults).filter(
    (api) => api.status === 'success'
  ).length;
  
  results.summary = {
    total: 3,
    successful: successCount,
    failed: 3 - successCount,
    allWorking: successCount === 3,
  };

  return NextResponse.json(results, {
    status: successCount === 3 ? 200 : 207, // 207 = Multi-Status
  });
}
