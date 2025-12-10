"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Target, AlertCircle } from "lucide-react";
import {
  BillToSpendingCorrelation,
  getAllBillSpendingCorrelations,
  getBillSpendingCorrelationSummary
} from "@/lib/data/bill-spending-correlation";

export function BillSpendingCorrelationChart() {
  const [correlations] = useState<BillToSpendingCorrelation[]>(() => getAllBillSpendingCorrelations());
  const [summary] = useState<ReturnType<typeof getBillSpendingCorrelationSummary> | null>(() => getBillSpendingCorrelationSummary());

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <SummaryCard
          icon={<Target className="w-5 h-5" />}
          label="Avg Correlation"
          value={`${summary?.avgCorrelationScore || 0}/100`}
          color="from-blue-500 to-cyan-500"
        />
        <SummaryCard
          icon={<DollarSign className="w-5 h-5" />}
          label="Total Authorized"
          value={`$${summary?.totalAuthorizedBillions || 0}B`}
          color="from-green-500 to-emerald-500"
        />
        <SummaryCard
          icon={<TrendingUp className="w-5 h-5" />}
          label="Actual Increase"
          value={`$${summary?.totalActualIncreaseBillions || 0}B`}
          color="from-purple-500 to-pink-500"
        />
        <SummaryCard
          icon={<AlertCircle className="w-5 h-5" />}
          label="Efficiency"
          value={`${summary?.overallEfficiency || 0}%`}
          color="from-orange-500 to-red-500"
        />
      </div>

      {/* Bill Cards */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Bill Impact Analysis</h3>
        {correlations.map((correlation, index) => (
          <BillCorrelationCard key={correlation.bill.id} correlation={correlation} index={index} />
        ))}
      </div>
    </div>
  );
}

function SummaryCard({ 
  icon, 
  label, 
  value, 
  color 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  color: string;
}) {
  return (
    <div className={`p-4 rounded-xl bg-linear-to-br ${color} bg-opacity-10 border border-white/10`}>
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-lg bg-linear-to-br ${color}`}>
          {icon}
        </div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
    </div>
  );
}

function BillCorrelationCard({ 
  correlation, 
  index 
}: { 
  correlation: BillToSpendingCorrelation; 
  index: number;
}) {
  const { bill, spendingImpact, correlation: corr } = correlation;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="p-6 rounded-xl bg-linear-to-br from-gray-900/80 to-gray-800/50 border border-white/10"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-bold text-white mb-1">{bill.title}</h4>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Enacted: {new Date(bill.enacted).toLocaleDateString()}</span>
            <span>•</span>
            <span>Congress {bill.congress}</span>
            <span>•</span>
            <span>${bill.authorizedAmount}B authorized</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">{corr.score}/100</div>
          <div className="text-xs text-gray-400">Correlation Score</div>
        </div>
      </div>

      {/* Spending Impact Timeline */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        <SpendingMetric
          label="Baseline"
          value={`$${spendingImpact.baselineSpending}B`}
          sublabel={`Year ${spendingImpact.yearEnacted - 1}`}
        />
        <SpendingMetric
          label="Year 1"
          value={`$${spendingImpact.year1Spending}B`}
          sublabel={`${spendingImpact.yearEnacted}`}
          change={spendingImpact.year1Spending - spendingImpact.baselineSpending}
        />
        <SpendingMetric
          label="Year 2"
          value={`$${spendingImpact.year2Spending}B`}
          sublabel={`${spendingImpact.yearEnacted + 1}`}
          change={spendingImpact.year2Spending - spendingImpact.baselineSpending}
        />
        <SpendingMetric
          label="Year 3"
          value={`$${spendingImpact.year3Spending}B`}
          sublabel={`${spendingImpact.yearEnacted + 2}`}
          change={spendingImpact.year3Spending - spendingImpact.baselineSpending}
        />
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Spending Efficiency</span>
          <span className="text-white font-bold">{corr.efficiency}%</span>
        </div>
        <div className="h-3 rounded-full bg-gray-800 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(corr.efficiency, 100)}%` }}
            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
            className={`h-full rounded-full ${
              corr.efficiency >= 80 && corr.efficiency <= 120
                ? 'bg-linear-to-r from-green-500 to-emerald-500'
                : corr.efficiency >= 60
                ? 'bg-linear-to-r from-yellow-500 to-orange-500'
                : 'bg-linear-to-r from-red-500 to-pink-500'
            }`}
          />
        </div>
      </div>

      {/* Footer Stats */}
      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-sm">
        <div className="text-gray-400">
          Total Increase: <span className="text-white font-bold">${spendingImpact.totalIncrease}B</span>
          {' '}({spendingImpact.percentIncrease}%)
        </div>
        <div className="text-gray-400">
          Implementation Lag: <span className="text-white font-bold">{corr.lag} months</span>
        </div>
      </div>
    </motion.div>
  );
}

function SpendingMetric({ 
  label, 
  value, 
  sublabel, 
  change 
}: { 
  label: string; 
  value: string; 
  sublabel: string;
  change?: number;
}) {
  return (
    <div className="p-3 rounded-lg bg-gray-800/50">
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="text-lg font-bold text-white mb-1">{value}</div>
      <div className="text-xs text-gray-400">{sublabel}</div>
      {change !== undefined && change !== 0 && (
        <div className={`text-xs font-semibold mt-1 ${change > 0 ? 'text-green-400' : 'text-red-400'}`}>
          {change > 0 ? '+' : ''}{change}B
        </div>
      )}
    </div>
  );
}
