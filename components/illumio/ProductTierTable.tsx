import React from "react";

export function ProductTierTable() {
  const tiers = [
    {
      tier: "Personal (Portable Purifier)",
      target: "Travelers, emergency preparedness",
      tech: "Multi-stage: pre-filter + carbon + hollow-fiber (0.01µm) + optional electrochemical",
      benefit: "Safe rinsing of produce; emergency drinking water",
    },
    {
      tier: "Home (Point-of-Entry)",
      target: "Households with contaminated tap water",
      tech: "Sediment + catalytic carbon + ion-exchange + UV-C LED; smart monitoring",
      benefit: "Whole-house protection for cooking and irrigation",
    },
    {
      tier: "Municipal (Advanced Module)",
      target: "Treatment plants & ag co-ops",
      tech: "Ultrafiltration + fixed-film bioreactor + AI monitoring",
      benefit: "Polished reclaimed water safe for irrigation",
    },
  ];

  return (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full text-sm text-cyan-100 border border-cyan-800 rounded-lg">
        <thead className="bg-cyan-900/80">
          <tr>
            <th className="px-3 py-2 text-left">Product Tier</th>
            <th className="px-3 py-2 text-left">Target User</th>
            <th className="px-3 py-2 text-left">Proposed Technology</th>
            <th className="px-3 py-2 text-left">Added Benefit</th>
          </tr>
        </thead>
        <tbody className="bg-slate-900/60">
          {tiers.map((t) => (
            <tr key={t.tier} className="border-b border-cyan-800">
              <td className="px-3 py-2 align-top font-semibold">{t.tier}</td>
              <td className="px-3 py-2">{t.target}</td>
              <td className="px-3 py-2">{t.tech}</td>
              <td className="px-3 py-2">{t.benefit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
