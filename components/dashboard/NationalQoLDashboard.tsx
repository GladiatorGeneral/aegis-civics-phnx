"use client";
import React from "react";
import indicators from "../../data/qol/indicators.json";

export default function NationalQoLDashboard() {
  // Lightweight placeholder: renders top-line and domain tiles
  const domains = Array.from(new Set(indicators.map((i: any) => i.domain)));

  return (
    <div className="p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-slate-100">National QoL Dashboard — (Prototype)</h1>
        <p className="text-slate-300">Top-line QoL composite: <span className="font-semibold">--</span></p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {domains.map((d: any) => (
          <div key={d} className="bg-slate-800/50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-cyan-200">{d}</h2>
            <div className="text-slate-300 text-sm mt-2">Indicators:</div>
            <ul className="mt-2 text-slate-200 text-sm list-disc list-inside">
              {indicators.filter((it: any) => it.domain === d).slice(0,3).map((it: any) => (
                <li key={it.id}>{it.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <footer className="mt-6 text-slate-400 text-sm">Data manifest: <code>data/qol/indicators.json</code></footer>
    </div>
  );
}
