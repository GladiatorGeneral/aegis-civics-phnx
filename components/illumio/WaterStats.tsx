import React from "react";

export function WaterStats() {
  const stats = [
    { label: "People using contaminated sources (2022)", value: "1.7B" },
    { label: "Share of diseases linked to water", value: "~80%" },
    { label: "Child deaths linked to poor water", value: "~50%" },
    { label: "Max reported pharma conc.", value: "143,000 ng/L" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
      {stats.map((s) => (
        <div key={s.label} className="bg-slate-900/60 p-4 rounded-lg shadow border border-cyan-800">
          <div className="text-sm text-slate-300">{s.label}</div>
          <div className="text-2xl font-bold text-cyan-300 mt-2">{s.value}</div>
        </div>
      ))}
    </div>
  );
}
