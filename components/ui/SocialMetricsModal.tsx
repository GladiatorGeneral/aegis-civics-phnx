"use client";
import { useState } from "react";

export function SocialMetricsModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="w-full md:w-auto px-6 py-3 bg-cyan-700 hover:bg-cyan-600 text-white text-lg font-semibold rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="social-metrics-modal"
      >
        Social Connection Metrics — View Social Connection Aspects
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div id="social-metrics-modal" className="bg-slate-900 rounded-2xl shadow-2xl p-8 max-w-lg w-full relative animate-fade-in">
            <button
              className="absolute top-3 right-3 text-cyan-300 hover:text-cyan-100 text-2xl font-bold"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >×</button>
            <h4 className="text-2xl font-bold text-cyan-300 mb-6 text-center">Social Metrics Integration</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Collaboration Skills Card */}
              <div className="bg-gradient-to-br from-cyan-800 via-blue-900 to-slate-900 rounded-xl p-4 shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all border border-cyan-700" style={{boxShadow:'0 8px 32px rgba(34,211,238,0.25), 0 1.5px 0 rgba(255,255,255,0.08)'}}>
                <h5 className="text-lg font-bold text-cyan-200 mb-2">Collaboration Skills</h5>
                <ul className="text-cyan-100 text-sm space-y-1">
                  <li><b>Peer Communication:</b> Effectiveness in group problem-solving</li>
                  <li><b>Empathy Development:</b> Understanding diverse perspectives</li>
                  <li><b>Leadership Emergence:</b> Natural facilitation in group settings</li>
                </ul>
              </div>
              {/* Balance Metrics Card */}
              <div className="bg-gradient-to-br from-emerald-800 via-cyan-900 to-slate-900 rounded-xl p-4 shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all border border-emerald-700" style={{boxShadow:'0 8px 32px rgba(16,185,129,0.22), 0 1.5px 0 rgba(255,255,255,0.08)'}}>
                <h5 className="text-lg font-bold text-emerald-200 mb-2">Balance Metrics</h5>
                <ul className="text-emerald-100 text-sm space-y-1">
                  <li><b>Screen/Social Ratio:</b> Optimal 60/40 digital to face-to-face time</li>
                  <li><b>Wellness Indicators:</b> Stress levels, engagement, social satisfaction</li>
                  <li><b>Real World Transfer:</b> Application of digital learning to physical social contexts</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center text-cyan-400 text-xs">3D-style cards for clarity and engagement</div>
          </div>
        </div>
      )}
    </>
  );
}