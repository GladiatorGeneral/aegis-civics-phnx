"use client";

import { federalFinanceData2024, formatCurrency, formatNumber } from "@/lib/data/federal-finance";
import { TrendingUp, TrendingDown, DollarSign, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FederalFinanceDashboard() {
  const data = federalFinanceData2024;
  const deficitPercent = ((data.headline.budgetDeficit / data.headline.totalRevenue) * 100).toFixed(0);

  return (
    <div className="space-y-8">
      {/* Headline Scorecards */}
      <section>
        <h2 className="text-3xl font-bold mb-6">
          <span className="bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            FY 2024 Overview
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Revenue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-linear-to-br from-green-900/30 to-emerald-900/20 border border-green-500/30"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-green-500/20">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-xs text-gray-400">FY 2024</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-2">Total Revenue</h3>
            <p className="text-4xl font-bold text-white mb-2">
              {formatCurrency(data.headline.totalRevenue)}
            </p>
            <p className="text-xs text-gray-400">Federal government income</p>
          </motion.div>

          {/* Total Spending */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-linear-to-br from-red-900/30 to-orange-900/20 border border-red-500/30"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-red-500/20">
                <TrendingDown className="w-6 h-6 text-red-400" />
              </div>
              <span className="text-xs text-gray-400">FY 2024</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-2">Total Spending</h3>
            <p className="text-4xl font-bold text-white mb-2">
              {formatCurrency(data.headline.totalSpending)}
            </p>
            <p className="text-xs text-gray-400">Federal government outlays</p>
          </motion.div>

          {/* Budget Deficit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl bg-linear-to-br from-orange-900/30 to-yellow-900/20 border border-orange-500/30"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-orange-500/20">
                <AlertCircle className="w-6 h-6 text-orange-400" />
              </div>
              <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold">
                +{deficitPercent}%
              </span>
            </div>
            <h3 className="text-gray-400 text-sm mb-2">Budget Deficit</h3>
            <p className="text-4xl font-bold text-white mb-2">
              {formatCurrency(data.headline.budgetDeficit)}
            </p>
            <p className="text-xs text-gray-400">Spending exceeded revenue</p>
          </motion.div>

          {/* Total Federal Debt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-2xl bg-linear-to-br from-purple-900/30 to-pink-900/20 border border-purple-500/30"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-purple-500/20">
                <DollarSign className="w-6 h-6 text-purple-400" />
              </div>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold">
                {data.headline.debtAsPercentGDP}% GDP
              </span>
            </div>
            <h3 className="text-gray-400 text-sm mb-2">Total Federal Debt</h3>
            <p className="text-4xl font-bold text-white mb-2">
              {formatCurrency(data.headline.totalFederalDebt)}
            </p>
            <p className="text-xs text-gray-400">
              {formatCurrency(data.context.debtPerPerson, "dollars")} per person
            </p>
          </motion.div>

          {/* Interest on Debt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-6 rounded-2xl bg-linear-to-br from-blue-900/30 to-cyan-900/20 border border-blue-500/30"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-blue-500/20">
                <DollarSign className="w-6 h-6 text-blue-400" />
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold">
                {data.headline.interestAsPercentSpending}% of spending
              </span>
            </div>
            <h3 className="text-gray-400 text-sm mb-2">Interest on Debt</h3>
            <p className="text-4xl font-bold text-white mb-2">
              {formatCurrency(data.headline.interestOnDebt)}
            </p>
            <p className="text-xs text-gray-400">Annual debt service cost</p>
          </motion.div>

          {/* Historical Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-6 rounded-2xl bg-linear-to-br from-gray-900/50 to-gray-800/30 border border-gray-500/30"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gray-500/20">
                <AlertCircle className="w-6 h-6 text-gray-400" />
              </div>
              <span className="text-xs text-gray-400">Since 1980</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-2">Historical Growth</h3>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-400">Revenue: <span className="text-white font-semibold">{data.context.revenueGrowthSince1980}x</span></p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Spending: <span className="text-white font-semibold">{data.context.spendingGrowthSince1980}x</span></p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Population: <span className="text-white font-semibold">{data.context.populationGrowthSince1980}x</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revenue Breakdown */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/10">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-green-400">↑</span> Revenue Sources
          </h3>
          <p className="text-sm text-gray-400 mb-6">
            Total: {formatCurrency(data.headline.totalRevenue)} | 
            Growth since 1980: {data.context.revenueGrowthSince1980}x
          </p>
          <div className="space-y-6">
            {Object.entries(data.revenue).map(([key, value], index) => {
              const colors = [
                { bg: "from-green-500 to-emerald-500", text: "text-green-400" },
                { bg: "from-blue-500 to-cyan-500", text: "text-blue-400" },
                { bg: "from-purple-500 to-pink-500", text: "text-purple-400" },
                { bg: "from-orange-500 to-yellow-500", text: "text-orange-400" },
              ];
              const color = colors[index % colors.length];
              
              return (
                <div key={key} className="relative">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className={`font-semibold ${color.text}`}>
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatCurrency(value.amount)} per year
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${color.text}`}>
                        {value.percentage}%
                      </div>
                      <div className="text-xs text-gray-500">of total</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div
                      className={`bg-linear-to-r ${color.bg} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${value.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Spending Breakdown */}
        <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/10">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-red-400">↓</span> Spending Categories
          </h3>
          <p className="text-sm text-gray-400 mb-6">
            Total: {formatCurrency(data.headline.totalSpending)} | 
            Growth since 1980: {data.context.spendingGrowthSince1980}x
          </p>
          <div className="space-y-6">
            {Object.entries(data.spending).map(([key, value], index) => {
              const colors = [
                { bg: "from-red-500 to-rose-500", text: "text-red-400" },
                { bg: "from-orange-500 to-amber-500", text: "text-orange-400" },
                { bg: "from-yellow-500 to-orange-500", text: "text-yellow-400" },
                { bg: "from-pink-500 to-rose-500", text: "text-pink-400" },
                { bg: "from-purple-500 to-fuchsia-500", text: "text-purple-400" },
                { bg: "from-indigo-500 to-blue-500", text: "text-indigo-400" },
              ];
              const color = colors[index % colors.length];
              
              return (
                <div key={key} className="relative">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className={`font-semibold ${color.text}`}>
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatCurrency(value.amount)} per year
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${color.text}`}>
                        {value.percentage}%
                      </div>
                      <div className="text-xs text-gray-500">of total</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div
                      className={`bg-linear-to-r ${color.bg} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${value.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Major Programs Detail */}
      <section>
        <h2 className="text-3xl font-bold mb-6">
          <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Major Programs
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Social Security */}
          <div className="p-6 rounded-2xl bg-linear-to-br from-blue-900/30 to-indigo-900/20 border border-blue-500/30">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Social Security</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Total Spending</p>
                <p className="text-2xl font-bold text-white">
                  {formatCurrency(data.majorPrograms.socialSecurity.spending)}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Recipients</p>
                <p className="text-xl font-semibold text-white">
                  {formatNumber(data.majorPrograms.socialSecurity.recipients)}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Avg. Monthly Benefit</p>
                <p className="text-xl font-semibold text-white">
                  ${data.majorPrograms.socialSecurity.averageMonthlyBenefit.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Medicare */}
          <div className="p-6 rounded-2xl bg-linear-to-br from-purple-900/30 to-pink-900/20 border border-purple-500/30">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Medicare</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Total Spending</p>
                <p className="text-2xl font-bold text-white">
                  {formatCurrency(data.majorPrograms.medicare.spending)}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Enrollees</p>
                <p className="text-xl font-semibold text-white">
                  {formatNumber(data.majorPrograms.medicare.enrollees)}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Avg. Cost per Person</p>
                <p className="text-xl font-semibold text-white">
                  ${data.majorPrograms.medicare.avgCostPerPerson.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Medicaid */}
          <div className="p-6 rounded-2xl bg-linear-to-br from-emerald-900/30 to-teal-900/20 border border-emerald-500/30">
            <h3 className="text-xl font-bold mb-4 text-emerald-400">Medicaid & CHIP</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Federal Spending</p>
                <p className="text-2xl font-bold text-white">
                  {formatCurrency(data.majorPrograms.medicaid.federalSpending)}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Enrollees</p>
                <p className="text-xl font-semibold text-white">
                  {formatNumber(data.majorPrograms.medicaid.enrollees)}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Program Type</p>
                <p className="text-sm text-gray-400">Combined federal-state</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Trend Chart */}
      <section className="p-6 rounded-2xl bg-gray-900/50 border border-white/10">
        <h3 className="text-2xl font-bold mb-6">Revenue vs. Spending Trend (1980-2024)</h3>
        <p className="text-gray-400 mb-6 text-sm">
          Adjusted for inflation. Last budget surplus: {data.context.lastSurplusYear}. 
          Mandatory spending now represents {data.context.mandatorySpendingPercent}% of the budget, up from 45% in 1980.
        </p>
        
        {/* Chart with better visual representation */}
        <div className="relative">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-xs text-gray-500">
            <span>$9T</span>
            <span>$7T</span>
            <span>$5T</span>
            <span>$3T</span>
            <span>$1T</span>
          </div>
          
          {/* Chart area */}
          <div className="ml-14 relative h-80">
            <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
              {/* Grid lines */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => (
                <line
                  key={val}
                  x1="0"
                  y1={300 - (val * 300) / 9}
                  x2="1000"
                  y2={300 - (val * 300) / 9}
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                />
              ))}
              
              {/* Deficit area (between spending and revenue) */}
              <defs>
                <linearGradient id="deficitGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(239, 68, 68, 0.3)" />
                  <stop offset="100%" stopColor="rgba(239, 68, 68, 0.05)" />
                </linearGradient>
              </defs>
              <polygon
                fill="url(#deficitGradient)"
                points={[
                  ...data.historicalTrends.map((d, i) => 
                    `${(i * 1000) / 9},${300 - (d.spending * 300) / 9}`
                  ),
                  ...data.historicalTrends.map((d, i) => 
                    `${((9 - i) * 1000) / 9},${300 - (data.historicalTrends[9 - i].revenue * 300) / 9}`
                  ).reverse()
                ].join(" ")}
              />
              
              {/* Revenue line (green) */}
              <polyline
                fill="none"
                stroke="#10b981"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={data.historicalTrends
                  .map((d, i) => `${(i * 1000) / 9},${300 - (d.revenue * 300) / 9}`)
                  .join(" ")}
              />
              
              {/* Spending line (red) */}
              <polyline
                fill="none"
                stroke="#ef4444"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={data.historicalTrends
                  .map((d, i) => `${(i * 1000) / 9},${300 - (d.spending * 300) / 9}`)
                  .join(" ")}
              />
              
              {/* Data points */}
              {data.historicalTrends.map((d, i) => (
                <g key={d.year}>
                  {/* Revenue point */}
                  <circle
                    cx={(i * 1000) / 9}
                    cy={300 - (d.revenue * 300) / 9}
                    r="5"
                    fill="#10b981"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  {/* Spending point */}
                  <circle
                    cx={(i * 1000) / 9}
                    cy={300 - (d.spending * 300) / 9}
                    r="5"
                    fill="#ef4444"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                </g>
              ))}
            </svg>
            
            {/* X-axis labels */}
            <div className="flex justify-between mt-2 text-xs text-gray-500 font-semibold">
              {data.historicalTrends.map((d) => (
                <span key={d.year}>{d.year}</span>
              ))}
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex gap-8 mt-6 justify-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-green-500 rounded-full" />
              <span className="text-sm text-gray-300 font-medium">Revenue</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-red-500 rounded-full" />
              <span className="text-sm text-gray-300 font-medium">Spending</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-red-500/30 rounded-full" />
              <span className="text-sm text-gray-300 font-medium">Deficit Area</span>
            </div>
          </div>
        </div>
        
        {/* Key insights */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
            <p className="text-xs text-gray-400 mb-1">Peak Revenue Year</p>
            <p className="text-2xl font-bold text-green-400">2024</p>
            <p className="text-sm text-gray-400">{formatCurrency(data.headline.totalRevenue)}</p>
          </div>
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
            <p className="text-xs text-gray-400 mb-1">Peak Spending Year</p>
            <p className="text-2xl font-bold text-red-400">2020</p>
            <p className="text-sm text-gray-400">$8.3T (COVID-19)</p>
          </div>
          <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
            <p className="text-xs text-gray-400 mb-1">Current Deficit</p>
            <p className="text-2xl font-bold text-orange-400">{formatCurrency(data.headline.budgetDeficit)}</p>
            <p className="text-sm text-gray-400">Down from $3T in 2020-21</p>
          </div>
        </div>
      </section>
    </div>
  );
}
