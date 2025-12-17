import React from "react";
import { NeuralGlassPanel } from "@/components/ui/NeuralGlassPanel";

export default function FoodSecurityPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 p-4 md:p-8">
      <div className="max-w-4xl mx-auto py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent mb-3">Food Security: Blueprint</h1>
          <p className="text-slate-200 max-w-2xl mx-auto">A resilient food system ensures affordable, healthy, and locally-sourced food for every community through distributed production, optimized logistics, and demand-side support.</p>
        </div>

        <NeuralGlassPanel className="mb-6">
          <h2 className="text-2xl font-bold text-cyan-300 mb-3">Overview</h2>
          <p className="text-cyan-100">Food security combines production, distribution, affordability, and nutrition. This blueprint focuses on decentralized production, waste reduction, equitable access, and market mechanisms that reward resilience.</p>
        </NeuralGlassPanel>

        <NeuralGlassPanel className="mb-6">
          <h3 className="text-xl font-bold text-emerald-400 mb-2">Core Components</h3>
          <ul className="list-disc list-inside text-cyan-100">
            <li><b>Community Food Resilience Hubs:</b> Aggregation, cold-chain, last-mile distribution, and micro-processing.</li>
            <li><b>Urban & Vertical Agriculture Nodes:</b> Local, high-yield production near demand centers.</li>
            <li><b>Food Rail & Surplus Markets:</b> Real-time redistribution apps to reduce waste and discount surplus goods.</li>
            <li><b>Farm-to-Plate Procurement:</b> Long-term contracts connecting small farmers to institutional buyers.</li>
            <li><b>Nutrition & Access Programs:</b> Subsidies, sliding-scale markets, and targeted vouchers for vulnerable households.</li>
          </ul>
        </NeuralGlassPanel>

        <NeuralGlassPanel className="mb-6">
          <h3 className="text-xl font-bold text-emerald-400 mb-2">Logistics & Technology</h3>
          <p className="text-cyan-100">Modern logistics—route optimization, cold-chain telemetry, and shared micro-fulfillment—reduce costs and loss. Open APIs connect producers, hubs, transit, and retailers for near-real-time visibility.</p>
          <ul className="list-disc list-inside text-cyan-100 mt-2">
            <li><b>Telemetry:</b> Temperature & inventory tracking across hubs.</li>
            <li><b>Route optimization:</b> Lower fuel and time costs using smart routing.</li>
            <li><b>Demand forecasting:</b> Shorten supply chains and match local crop cycles to demand.</li>
          </ul>
        </NeuralGlassPanel>

        <div className="mb-6 flex justify-center">
          <div className="overflow-x-auto w-full max-w-3xl">
            <pre className="whitespace-pre font-mono text-sm bg-gray-900/30 border border-white/6 rounded-lg p-4 text-center">{`
│               ENTRANCE & ADMINISTRATION         │
│  Office │ Maintenance │ Processing │ Cold Storage│
├─────────────────────────────────────────────────┤
│             20,000 SQ FT GREENHOUSE             │
│  Tomatoes │ Berries │ Peppers │ Herbs │ Microgreens│
├─────────────────────────────────────────────────┤
│             100 ACRES CONVENTIONAL FARMING      │
│   40ac Corn  │ 30ac Soybeans │ 20ac Wheat       │
│   5ac Pumpkins │ 5ac Cover Crops (Carbon Credits)│
├─────────────────────────────────────────────────┤
│              30 ACRES WATER FARMING             │
│Freshwater: Tilapia, Barramundi, Prawns          │
│Saltwater: Shrimp, Oysters, Striped Bass         │
│Seaweed: Kelp, Sea Lettuce, Gracilaria           │
└─────────────────────────────────────────────────┘
`}</pre>
          </div>
        </div>

        <NeuralGlassPanel className="mb-6">
          <h3 className="text-xl font-bold text-emerald-400 mb-2">Nutrition, Equity & Community Programs</h3>
          <p className="text-cyan-100">Nutrition education, school meals integrated with local procurement, and mobile markets ensure equitable access.</p>
          <ul className="list-disc list-inside text-cyan-100 mt-2">
            <li>School-to-Farm programs and curriculum-aligned gardens.</li>
            <li>Mobile markets in food deserts with subsidized pricing.</li>
            <li>Nutrition mentoring & community kitchens to build cooking skills and reduce processed-food dependency.</li>
          </ul>
        </NeuralGlassPanel>

        <NeuralGlassPanel className="mb-6">
          <h3 className="text-xl font-bold text-emerald-400 mb-2">Implementation Roadmap</h3>
          <ol className="list-decimal list-inside text-cyan-100">
            <li>Pilot Community Food Hubs in 10 regions (Year 1).</li>
            <li>Scale urban agriculture nodes and establish Food Rail in 3 metro regions (Years 2-3).</li>
            <li>Integrate school procurement and SNAP enhancements (Years 3-5).</li>
          </ol>
        </NeuralGlassPanel>

      </div>
    </div>
  );
}

