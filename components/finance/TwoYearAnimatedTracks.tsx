"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Track = {
  year: number;
  revenue: number;
  spending: number;
  breakdown: Record<string, number>;
};

const baseline2027: Track = {
  year: 2027,
  revenue: 5.53,
  spending: 7.67,
  breakdown: {
    individualIncomeTaxes: 2.72,
    payrollTaxes: 1.91,
    corporateIncomeTaxes: 0.59,
    otherSources: 0.31,
  },
};

const baseline2028: Track = {
  year: 2028,
  revenue: 5.74,
  spending: 7.99,
  breakdown: {
    individualIncomeTaxes: 2.82,
    payrollTaxes: 1.99,
    corporateIncomeTaxes: 0.61,
    otherSources: 0.32,
  },
};

const srd2027: Track = {
  year: 2027,
  revenue: 5.87,
  spending: 7.28,
  breakdown: {
    individualIncomeTaxes: 2.9,
    payrollTaxes: 2.08,
    corporateIncomeTaxes: 0.66,
    otherSources: 0.34,
  },
};

const srd2028: Track = {
  year: 2028,
  revenue: 6.16,
  spending: 7.15,
  breakdown: {
    individualIncomeTaxes: 3.05,
    payrollTaxes: 2.2,
    corporateIncomeTaxes: 0.7,
    otherSources: 0.36,
  },
};

function formatT(n: number) {
  return `$${n.toFixed(2)}T`;
}

export default function TwoYearAnimatedTracks() {
  const [play, setPlay] = useState(false);
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    if (!play) return;
    let p = 0;
    const id = setInterval(() => {
      p += 1;
      setPhase(p);
      if (p >= 4) {
        clearInterval(id);
        setPlay(false);
      }
    }, 1400);
    return () => clearInterval(id);
  }, [play]);

  const showBaseline27 = phase >= 0;
  const showSRD27 = phase >= 1;
  const showBaseline28 = phase >= 2;
  const showSRD28 = phase >= 3;

  const maxRevenue = Math.max(baseline2028.revenue, srd2028.revenue) * 1.05;
  const maxSpending = Math.max(baseline2028.spending, srd2028.spending) * 1.05;

  const barWidthPct = (v: number, max: number) => Math.max(2, (v / max) * 100);

  return (
    <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-slate-900/60 to-black border border-white/6 text-white">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">FY 2027–2028: Baseline vs SRD (Animated)</h3>
        <div className="flex items-center gap-3">
          <button
            className="px-4 py-2 bg-emerald-600/20 border border-emerald-600 rounded hover:bg-emerald-600/30"
            onClick={() => { setPhase(0); setPlay(true); }}
          >
            Play
          </button>
          <button
            className="px-3 py-2 bg-gray-800 border rounded"
            onClick={() => { setPhase(4); setPlay(false); }}
          >
            Pause
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Revenue track */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Revenue (Track A: Baseline vs Track B: SRD)</h4>
          <div className="space-y-6">
            {/* FY27 */}
            <div>
              <div className="flex justify-between mb-2">
                <div className="font-medium">FY 2027</div>
                <div className="text-sm text-gray-300">Baseline {formatT(baseline2027.revenue)} · SRD {formatT(srd2027.revenue)}</div>
              </div>
              <div className="h-12 bg-gray-800 rounded-full relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${showBaseline27 ? barWidthPct(baseline2027.revenue, maxRevenue) : 0}%` }}
                  className="absolute left-0 top-0 bottom-0 bg-green-500 rounded-full"
                  transition={{ duration: 0.9 }}
                />
                <AnimatePresence>
                  {showSRD27 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${barWidthPct(srd2027.revenue, maxRevenue)}%` }}
                      className="absolute top-0 bottom-0 bg-emerald-300 rounded-full opacity-80"
                      style={{ left: `${barWidthPct(baseline2027.revenue, maxRevenue)}%` }}
                      transition={{ duration: 0.9 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* FY28 */}
            <div>
              <div className="flex justify-between mb-2">
                <div className="font-medium">FY 2028</div>
                <div className="text-sm text-gray-300">Baseline {formatT(baseline2028.revenue)} · SRD {formatT(srd2028.revenue)}</div>
              </div>
              <div className="h-12 bg-gray-800 rounded-full relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${showBaseline28 ? barWidthPct(baseline2028.revenue, maxRevenue) : 0}%` }}
                  className="absolute left-0 top-0 bottom-0 bg-green-500 rounded-full"
                  transition={{ duration: 0.9 }}
                />
                <AnimatePresence>
                  {showSRD28 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${barWidthPct(srd2028.revenue, maxRevenue)}%` }}
                      className="absolute top-0 bottom-0 bg-emerald-300 rounded-full opacity-80"
                      style={{ left: `${barWidthPct(baseline2028.revenue, maxRevenue)}%` }}
                      transition={{ duration: 0.9 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>

        {/* Spending track */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Spending (Track A: Baseline vs Track B: SRD)</h4>
          <div className="space-y-6">
            {/* FY27 */}
            <div>
              <div className="flex justify-between mb-2">
                <div className="font-medium">FY 2027</div>
                <div className="text-sm text-gray-300">Baseline {formatT(baseline2027.spending)} · SRD {formatT(srd2027.spending)}</div>
              </div>
              <div className="h-12 bg-gray-800 rounded-full relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${showBaseline27 ? barWidthPct(baseline2027.spending, maxSpending) : 0}%` }}
                  className="absolute left-0 top-0 bottom-0 bg-red-500 rounded-full"
                  transition={{ duration: 0.9 }}
                />
                <AnimatePresence>
                  {showSRD27 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${barWidthPct(srd2027.spending, maxSpending)}%` }}
                      className="absolute top-0 bottom-0 bg-red-300 rounded-full opacity-80"
                      style={{ left: `${barWidthPct(baseline2027.spending, maxSpending)}%` }}
                      transition={{ duration: 0.9 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* FY28 */}
            <div>
              <div className="flex justify-between mb-2">
                <div className="font-medium">FY 2028</div>
                <div className="text-sm text-gray-300">Baseline {formatT(baseline2028.spending)} · SRD {formatT(srd2028.spending)}</div>
              </div>
              <div className="h-12 bg-gray-800 rounded-full relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${showBaseline28 ? barWidthPct(baseline2028.spending, maxSpending) : 0}%` }}
                  className="absolute left-0 top-0 bottom-0 bg-red-500 rounded-full"
                  transition={{ duration: 0.9 }}
                />
                <AnimatePresence>
                  {showSRD28 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${barWidthPct(srd2028.spending, maxSpending)}%` }}
                      className="absolute top-0 bottom-0 bg-red-300 rounded-full opacity-80"
                      style={{ left: `${barWidthPct(baseline2028.spending, maxSpending)}%` }}
                      transition={{ duration: 0.9 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-300">
        <p>Deficit animation: FY26 2.09 → FY27 baseline 2.14 / SRD 1.41 → FY28 baseline 2.25 / SRD 0.99</p>
        <p className="mt-2">Toggle Play to see the animated progression; colors: green = revenue baseline, light green = SRD lift; red = spending baseline, light red = SRD moderation.</p>
      </div>
    </div>
  );
}
