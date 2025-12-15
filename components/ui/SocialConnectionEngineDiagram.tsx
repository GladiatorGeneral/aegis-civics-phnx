"use client";
import React from "react";

export function SocialConnectionEngineDiagram() {
  return (
    <div className="w-full flex justify-center">
      <svg width="520" height="360" viewBox="0 0 520 360" className="bg-slate-900/80 rounded-lg p-3" role="img" aria-labelledby="scon-title scon-desc">
        <title id="scon-title">Social Connection Engine Architecture</title>
        <desc id="scon-desc">Central social-connection engine relays signals to collaborative learning, physical integration, emotional intelligence, and balance monitoring modules. Arrows indicate primary data and control flows. Legend below explains colors and markers.</desc>
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="8" refX="10" refY="4" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L10,4 L0,8" fill="#94a3b8" />
          </marker>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g fontFamily="sans-serif" fontSize="13" filter="url(#glow)">
          <rect x="180" y="20" width="160" height="48" rx="12" fill="#0ea5b7" />
          <text x="260" y="52" textAnchor="middle" fill="#052f36" fontWeight="700">Social-Connection-Engine</text>

          <rect x="40" y="110" width="170" height="46" rx="10" fill="#38bdf8" />
          <text x="125" y="140" textAnchor="middle" fill="#023e63">collaborative-learning</text>
          <rect x="310" y="110" width="170" height="46" rx="10" fill="#34d399" />
          <text x="395" y="140" textAnchor="middle" fill="#064e3b">physical-integration</text>
          <rect x="40" y="200" width="170" height="46" rx="10" fill="#f472b6" />
          <text x="125" y="230" textAnchor="middle" fill="#5b1230">emotional-intelligence</text>
          <rect x="310" y="200" width="170" height="46" rx="10" fill="#facc15" />
          <text x="395" y="230" textAnchor="middle" fill="#6b3b08">balance-monitoring</text>

          <rect x="55" y="160" width="60" height="26" rx="6" fill="#bae6fd" />
          <text x="85" y="178" textAnchor="middle" fill="#0369a1" fontSize="11">peer-sync</text>
          <rect x="130" y="160" width="70" height="26" rx="6" fill="#bae6fd" />
          <text x="165" y="178" textAnchor="middle" fill="#0369a1" fontSize="11">social-games</text>

          <rect x="325" y="160" width="60" height="26" rx="6" fill="#bbf7d0" />
          <text x="355" y="178" textAnchor="middle" fill="#065f46" fontSize="11">blended</text>
          <rect x="395" y="160" width="70" height="26" rx="6" fill="#bbf7d0" />
          <text x="430" y="178" textAnchor="middle" fill="#065f46" fontSize="11">class-tools</text>

          <rect x="55" y="260" width="60" height="26" rx="6" fill="#fbcfe8" />
          <text x="85" y="278" textAnchor="middle" fill="#831843" fontSize="11">empathy</text>
          <rect x="130" y="260" width="70" height="26" rx="6" fill="#fbcfe8" />
          <text x="165" y="278" textAnchor="middle" fill="#831843" fontSize="11">conflict-res</text>

          <rect x="325" y="260" width="60" height="26" rx="6" fill="#fef9c3" />
          <text x="355" y="278" textAnchor="middle" fill="#78350f" fontSize="11">screen-opt</text>
          <rect x="395" y="260" width="70" height="26" rx="6" fill="#fef9c3" />
          <text x="430" y="278" textAnchor="middle" fill="#78350f" fontSize="11">wellness</text>

          <line x1="260" y1="68" x2="125" y2="110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="260" y1="68" x2="395" y2="110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="260" y1="68" x2="125" y2="200" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="260" y1="68" x2="395" y2="200" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
        </g>
      </svg>
    </div>
  );
}
