import React from "react";

export function DesalinationDiagram({ className = "w-full h-48" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 800 240" className="w-full h-full">
        <defs>
          <linearGradient id="sea" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="800" height="240" fill="#0f172a" rx="8" />
        <g transform="translate(40,30)">
          <rect x="0" y="40" width="260" height="120" fill="url(#sea)" rx="8" />
          <text x="130" y="30" fill="#c7f9ff" fontSize="14" fontWeight="600" textAnchor="middle">Intake</text>
          <text x="130" y="110" fill="#e0f7ff" fontSize="12" textAnchor="middle">Seawater</text>

          <rect x="300" y="20" width="220" height="160" fill="#061826" stroke="#0ea5e9" rx="8" />
          <text x="410" y="40" fill="#a7f3d0" fontSize="14" fontWeight="600" textAnchor="middle">Reverse Osmosis Unit</text>
          <text x="410" y="120" fill="#c7f9ff" fontSize="12" textAnchor="middle">Membrane + Energy Recovery</text>

          <rect x="560" y="40" width="120" height="120" fill="#064e3b" rx="8" />
          <text x="620" y="30" fill="#bbf7d0" fontSize="14" fontWeight="600" textAnchor="middle">Product</text>
          <text x="620" y="110" fill="#e6fffa" fontSize="12" textAnchor="middle">Fresh Water</text>

          <line x1="260" y1="100" x2="300" y2="100" stroke="#7dd3fc" strokeWidth="3" markerEnd="url(#arrow)" />
          <line x1="520" y1="100" x2="560" y2="100" stroke="#7dd3fc" strokeWidth="3" markerEnd="url(#arrow)" />
        </g>
      </svg>
    </div>
  );
}
