"use client";

import React from "react";
import { qualityOfLifeData } from "@/lib/data/qol";

function formatT(n: number) {
  return `$${n.toFixed(2)}T`;
}

export default function QualityOfLifeDashboard() {
  const baseline = qualityOfLifeData.policy_tracks.baseline_non_srd.fiscal_years;
  const srd = qualityOfLifeData.policy_tracks.srd_driven_policy.fiscal_years;

  const years = ["2025", "2026", "2027", "2028"];

  return (
    <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-slate-900/60 to-black border border-white/6 text-white">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">Quality of Life — Fiscal Overlay (2025–2028)</h3>
        <div className="text-sm text-gray-300">Source: Project Phnx — serialized QoL dataset</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Baseline (Non-SRD)</h4>
          <div className="space-y-4">
            {years.map((y) => {
              const v = baseline[y as keyof typeof baseline];
              return (
                <div key={`b-${y}`} className="p-4 rounded-lg bg-gray-800/40">
                  <div className="flex justify-between">
                    <div className="font-semibold">FY {y}</div>
                    <div className="text-sm text-gray-300">QoL: {v.QoL_index}</div>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-4">
                    <div>Revenue</div>
                    <div className="text-right font-medium">{formatT(v.revenue)}</div>
                    <div>Spending</div>
                    <div className="text-right font-medium">{formatT(v.spending)}</div>
                    <div>Deficit</div>
                    <div className="text-right font-medium">{formatT(v.deficit)}</div>
                    <div>Debt / GDP</div>
                    <div className="text-right font-medium">{v.debt_to_GDP.toFixed(2)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">SRD-Driven Path</h4>
          <div className="space-y-4">
            {years.map((y) => {
              const v = srd[y as keyof typeof srd];
              return (
                <div key={`s-${y}`} className="p-4 rounded-lg bg-gray-800/40">
                  <div className="flex justify-between">
                    <div className="font-semibold">FY {y}</div>
                    <div className="text-sm text-emerald-300">QoL: {v.QoL_index ?? qualityOfLifeData.srd_qol_index.fiscal_years[y]}</div>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-4">
                    <div>Revenue</div>
                    <div className="text-right font-medium">{formatT(v.revenue)}</div>
                    <div>Spending</div>
                    <div className="text-right font-medium">{formatT(v.spending)}</div>
                    <div>Deficit</div>
                    <div className="text-right font-medium">{formatT(v.deficit)}</div>
                    <div>Debt / GDP</div>
                    <div className="text-right font-medium">{v.debt_to_GDP.toFixed(2)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 rounded-lg bg-gray-800/40">
          <div className="text-sm text-gray-300">SRD ROI (per $100B)</div>
          <div className="text-2xl font-bold mt-2">2026: {qualityOfLifeData.srd_roi_per_100B["2026"]}</div>
          <div className="text-2xl font-bold mt-1">2028: {qualityOfLifeData.srd_roi_per_100B["2028"]}</div>
        </div>

        <div className="p-4 rounded-lg bg-gray-800/40">
          <div className="text-sm text-gray-300">QoL Index (SRD path)</div>
          <div className="text-2xl font-bold mt-2">2028: {qualityOfLifeData.srd_qol_index.fiscal_years["2028"]}</div>
          <div className="text-sm text-gray-400 mt-1">Components: {qualityOfLifeData.srd_qol_index.components.join(", ")}</div>
        </div>

        <div className="p-4 rounded-lg bg-gray-800/40">
          <div className="text-sm text-gray-300">Interpretation</div>
          <div className="text-sm text-gray-200 mt-2">{qualityOfLifeData.interpretive_notes.key_insight}</div>
        </div>
      </div>

    </div>
  );
}
