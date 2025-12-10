"use client";

import { useMemo } from "react";
import { TrendingDown, TrendingUp } from "lucide-react";
import { infrastructureSpending, getInfrastructureSummary } from "@/lib/data/infrastructure";
import { InfrastructureSpendingRecord } from "@/lib/types";

interface InfrastructureCardProps {
  records?: InfrastructureSpendingRecord[];
}

export function InfrastructureCard({ records = infrastructureSpending }: InfrastructureCardProps) {
  const summary = useMemo(() => getInfrastructureSummary(records), [records]);
  const trendDirection = summary.currentDeviationPercent >= 0 ? "up" : "down";

  const sparklinePoints = useMemo(() => {
    if (!records.length) return "";
    const min = Math.min(...records.map((r) => r.inflationAdjustedUsdBillions));
    const max = Math.max(...records.map((r) => r.inflationAdjustedUsdBillions));
    const normalized = records.map((r, idx) => {
      const x = (idx / Math.max(records.length - 1, 1)) * 100;
      const y = max === min ? 50 : 100 - ((r.inflationAdjustedUsdBillions - min) / (max - min)) * 100;
      return `${x},${y}`;
    });
    return normalized.join(" ");
  }, [records]);

  const latest = records[records.length - 1];

  return (
    <div className="p-6 rounded-2xl bg-gray-900/60 border border-white/10 shadow-lg space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Infrastructure Projects</p>
          <h3 className="text-2xl font-bold">Year-over-Year Spend</h3>
          <p className="text-gray-400 text-sm">1998-2023 in constant 2023 USD</p>
        </div>
        <div className={`flex items-center gap-2 px-3 py-2 rounded-full ${trendDirection === "up" ? "bg-green-500/15 text-green-300" : "bg-red-500/15 text-red-300"}`}>
          {trendDirection === "up" ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          <span className="text-sm font-semibold">{summary.currentDeviationPercent.toFixed(1)}%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stat label="Latest Year" value={latest?.year ?? ""} helper={`Inflation-adjusted: $${latest?.inflationAdjustedUsdBillions.toFixed(1)}B`} />
        <Stat label="Baseline (26-yr avg)" value={`$${summary.baselineAverage.toFixed(1)}B`} helper="Constant 2023 USD" />
        <Stat label="Above / Below Avg" value={`${summary.yearsAboveAverage} / ${summary.yearsBelowAverage}`} helper="Counts since 1998" />
      </div>

      <div>
        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
          <span>Trend (inflation-adjusted)</span>
          <span>Min / Max: ${records[0]?.inflationAdjustedUsdBillions.toFixed(1)}B · ${records[records.length - 1]?.inflationAdjustedUsdBillions.toFixed(1)}B</span>
        </div>
        <div className="h-28 rounded-xl bg-gray-800/70 border border-white/5 relative overflow-hidden">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
            <polyline
              fill="none"
              stroke="url(#infraGradient)"
              strokeWidth="2"
              points={sparklinePoints}
            />
            <defs>
              <linearGradient id="infraGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 text-xs text-gray-400">
        <Pill label="Capital vs Ops" value={`${latest?.capitalInvestment.toFixed(1)}B / ${latest?.maintenanceOperations.toFixed(1)}B`} />
        <Pill label="Federal" value={`$${latest?.federalSpending.toFixed(1)}B`} />
        <Pill label="State & Local" value={`$${latest?.stateLocalSpending.toFixed(1)}B`} />
        {latest?.majorFederalBillEnacted ? <Pill label="Bill" value={latest.majorFederalBillEnacted} /> : null}
        <Pill label="Source" value={latest?.dataSource ?? ""} />
      </div>
    </div>
  );
}

function Stat({ label, value, helper }: { label: string; value: string | number; helper?: string }) {
  return (
    <div className="p-4 rounded-xl bg-gray-800/60 border border-white/5">
      <p className="text-gray-400 text-xs uppercase tracking-wide">{label}</p>
      <div className="text-2xl font-bold">{value}</div>
      {helper ? <p className="text-gray-500 text-xs mt-1">{helper}</p> : null}
    </div>
  );
}

function Pill({ label, value }: { label: string; value: string }) {
  return (
    <span className="px-3 py-1 rounded-full bg-gray-800/70 border border-white/5 text-gray-300">
      <span className="text-gray-500 mr-1">{label}:</span>
      {value}
    </span>
  );
}
