"use client";
import React from "react";

export function MedicalSystemDiagram() {
  return (
    <div className="w-full flex justify-center">
      <svg width="620" height="340" viewBox="0 0 620 340" role="img" aria-labelledby="med-title med-desc" className="rounded-lg bg-slate-900/80 p-3">
        <title id="med-title">Medical Security System Diagram</title>
        <desc id="med-desc">Diagram showing medical security components: surveillance, supply chain, care delivery, workforce, and digital health connected to a central coordination hub.</desc>
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="8" refX="10" refY="4" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L10,4 L0,8" fill="#94a3b8" />
          </marker>
        </defs>
        <g fontFamily="sans-serif" fontSize="12">
          {/* Hub */}
          <rect x="240" y="20" width="140" height="56" rx="12" fill="#06b6d4" />
          <text x="310" y="54" textAnchor="middle" fill="#022f33" fontWeight="700">National Health Hub</text>

          {/* Surveillance */}
          <rect x="40" y="110" width="170" height="46" rx="8" fill="#bfdbfe" />
          <text x="125" y="140" textAnchor="middle" fill="#0f3b6a">Surveillance & Analytics</text>

          {/* Supply Chain */}
          <rect x="240" y="110" width="170" height="46" rx="8" fill="#bbf7d0" />
          <text x="325" y="140" textAnchor="middle" fill="#065f46">Supply Chain & Logistics</text>

          {/* Care Delivery */}
          <rect x="440" y="110" width="170" height="46" rx="8" fill="#fbcfe8" />
          <text x="525" y="140" textAnchor="middle" fill="#5b1230">Care Delivery Networks</text>

          {/* Workforce */}
          <rect x="140" y="190" width="170" height="46" rx="8" fill="#fde68a" />
          <text x="225" y="220" textAnchor="middle" fill="#6b3b08">Workforce Capacity</text>

          {/* Digital Health */}
          <rect x="340" y="190" width="170" height="46" rx="8" fill="#c7b3ff" />
          <text x="425" y="220" textAnchor="middle" fill="#3b0764">Digital Health Platforms</text>

          {/* arrows */}
          <line x1="310" y1="76" x2="125" y2="110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="310" y1="76" x2="325" y2="110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="310" y1="76" x2="525" y2="110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="310" y1="76" x2="225" y2="190" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="310" y1="76" x2="425" y2="190" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

          <text x="310" y="300" textAnchor="middle" fill="#93c5fd" fontSize="12">Real-time alerts • Inventory visibility • Telehealth orchestration</text>
        </g>
      </svg>
    </div>
  );
}
