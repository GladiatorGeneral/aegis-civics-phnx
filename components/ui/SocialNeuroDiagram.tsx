"use client";
import React from "react";

export function SocialNeuroDiagram() {
  return (
    <div className="w-full flex justify-center">
      <svg width="560" height="320" viewBox="0 0 560 320" role="img" aria-labelledby="snd-title snd-desc" className="rounded-lg bg-slate-900/80 p-2">
        <title id="snd-title">Social Neuro Learning Diagram</title>
        <desc id="snd-desc">Diagram showing SocialNeuroLearning: a central lesson design connecting Individual Cognitive, Social Cognition, and Physical Integration modules with example features.</desc>
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="8" refX="10" refY="4" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L10,4 L0,8" fill="#94a3b8" />
          </marker>
        </defs>
        {/* central card */}
        <g fontFamily="sans-serif" fontSize="13">
          <rect x="200" y="20" width="160" height="52" rx="10" fill="#06b6d4" />
          <text x="280" y="52" textAnchor="middle" fontWeight="700" fill="#042f33">DesignSociallyConnectedLesson()</text>

          {/* boxes */}
          <rect x="30" y="110" width="160" height="120" rx="10" fill="#7dd3fc" />
          <text x="110" y="135" textAnchor="middle" fill="#054a6b" fontWeight="600">Individual Cognitive</text>
          <text x="110" y="155" textAnchor="middle" fill="#053f57" fontSize="12">• neuralActivation</text>
          <text x="110" y="175" textAnchor="middle" fill="#053f57" fontSize="12">• personalizedPractice</text>

          <rect x="210" y="110" width="160" height="120" rx="10" fill="#fca5a5" />
          <text x="290" y="135" textAnchor="middle" fill="#641220" fontWeight="600">Social Cognition</text>
          <text x="290" y="155" textAnchor="middle" fill="#5a1a2a" fontSize="12">• peerTeaching</text>
          <text x="290" y="175" textAnchor="middle" fill="#5a1a2a" fontSize="12">• collaborativeProblemSolving</text>
          <text x="290" y="195" textAnchor="middle" fill="#5a1a2a" fontSize="12">• socialEmotionalLearning</text>

          <rect x="390" y="110" width="160" height="120" rx="10" fill="#bbf7d0" />
          <text x="470" y="135" textAnchor="middle" fill="#064e3b" fontWeight="600">Physical Integration</text>
          <text x="470" y="155" textAnchor="middle" fill="#0b4d3e" fontSize="12">• handsOnActivities</text>
          <text x="470" y="175" textAnchor="middle" fill="#0b4d3e" fontSize="12">• classroomMovement</text>
          <text x="470" y="195" textAnchor="middle" fill="#0b4d3e" fontSize="12">• realWorldApplication</text>

          {/* arrows from central to modules */}
          <line x1="280" y1="72" x2="110" y2="110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="280" y1="72" x2="290" y2="110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="280" y1="72" x2="470" y2="110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* small notes */}
          <text x="280" y="255" textAnchor="middle" fill="#93c5fd" fontSize="12">Human-in-the-loop checkpoints at module boundaries • Real-time analytics feed back to engine</text>
        </g>
      </svg>
    </div>
  );
}
