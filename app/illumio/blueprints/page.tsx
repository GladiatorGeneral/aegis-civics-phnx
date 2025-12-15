
import React from 'react';

interface SRDCardProps {
  title: string;
  status: string;
  name: string;
  progress: number;
  investment: string;
  timeframe: string;
  metricLabel: string;
  metricValue: string;
  metricTarget: string;
  dependsOn?: string;
}

interface ProgressBarProps {
  value: number;
  color: string;
}

export default function SystemicRenewalDashboard() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 p-0 md:p-8">
      <div className="max-w-5xl mx-auto py-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 drop-shadow-lg">
            Systemic Renewal Dashboard
          </h1>
          <div className="mx-auto w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mb-4" />
          <p className="text-lg text-cyan-200 font-medium">Twelve integrated transformation initiatives designed to rebuild America&apos;s foundation. Track real-time progress, historical trends, and cross-directorate dependencies as we systematically address the nation&apos;s most critical challenges.</p>
        </div>
        <div className="prose prose-invert prose-lg max-w-none text-cyan-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-bold text-cyan-300 mb-2">Total Investment</h2>
              <p className="text-3xl font-bold text-cyan-200">$879B</p>
              <p className="text-cyan-400">Over 10 years</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-cyan-300 mb-2">Avg Progress</h2>
              <p className="text-3xl font-bold text-cyan-200">12.2%</p>
              <p className="text-cyan-400">Across all SRDs</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-cyan-300 mb-2">Active SRDs</h2>
              <p className="text-3xl font-bold text-cyan-200">6</p>
              <p className="text-cyan-400">In pilot or scaling</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-cyan-300 mb-2">Phase Progress</h2>
              <p className="text-3xl font-bold text-cyan-200">0/36</p>
              <p className="text-cyan-400">Phases complete</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">All Directorates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SRD Cards */}
            <SRDCard title="SRD 1" status="pilot" name="Digital Equity" progress={15} investment="$65B" timeframe="0-7 years" metricLabel="Broadband Access" metricValue="72%" metricTarget="100%" dependsOn={undefined} />
            <SRDCard title="SRD 2" status="planning" name="Education" progress={8} investment="$120B" timeframe="0-7 years" metricLabel="Student Debt" metricValue="$1700B" metricTarget="$500B" dependsOn="SRD 1" />
            <SRDCard title="SRD 3" status="planning" name="Healthcare" progress={5} investment="$200B" timeframe="0-7 years" metricLabel="Uninsured Rate" metricValue="8.6%" metricTarget="0%" dependsOn="SRD 1" />
            <SRDCard title="SRD 4" status="pilot" name="Food Security" progress={12} investment="$35B" timeframe="0-7 years" metricLabel="Food Insecurity Rate" metricValue="10.5%" metricTarget="0%" dependsOn={undefined} />
            <SRDCard title="SRD 5" status="planning" name="Childcare" progress={7} investment="$75B" timeframe="0-7 years" metricLabel="Childcare Affordability" metricValue="18% of income" metricTarget="7% of income" dependsOn="SRD 2" />
            <SRDCard title="SRD 6" status="planning" name="Youth Development" progress={6} investment="$40B" timeframe="0-7 years" metricLabel="Student-to-Counselor Ratio" metricValue="415students" metricTarget="250students" dependsOn="SRD 1, 2" />
            <SRDCard title="SRD 7" status="scaling" name="Infrastructure" progress={22} investment="$175B" timeframe="0-7 years" metricLabel="Infrastructure Grade" metricValue="2.3GPA" metricTarget="3.5GPA" dependsOn="SRD 1, 11" />
            <SRDCard title="SRD 8" status="planning" name="Housing & Wages" progress={9} investment="$90B" timeframe="0-7 years" metricLabel="Federal Minimum Wage" metricValue="$7.25/hour" metricTarget="$15/hour" dependsOn="SRD 7" />
            <SRDCard title="SRD 9" status="pilot" name="Fiscal Responsibility" progress={18} investment="$5B" timeframe="0-7 years" metricLabel="Improper Payments" metricValue="$247B" metricTarget="$50B" dependsOn="SRD 1" />
            <SRDCard title="SRD 10" status="planning" name="State Empowerment" progress={11} investment="$0.25B" timeframe="0-7 years" metricLabel="Grant Disbursement Time" metricValue="18months" metricTarget="6months" dependsOn="SRD 9" />
            <SRDCard title="SRD 11" status="scaling" name="Clean Energy" progress={19} investment="$70.5B" timeframe="0-7 years" metricLabel="Carbon-Free Electricity" metricValue="40%" metricTarget="100%" dependsOn="SRD 1, 7" />
            <SRDCard title="SRD 12" status="pilot" name="Civic Renewal" progress={14} investment="$2.85B" timeframe="0-7 years" metricLabel="Midterm Voter Turnout" metricValue="47%" metricTarget="60%" dependsOn="SRD 1, 2" />
          </div>
          <div className="mt-10 text-cyan-200">
            <b>The Interconnected Whole:</b> Each directorate reinforces the others— Digital Equity enables all platforms, Education creates the skilled workforce, Fiscal Responsibility ensures transparency, and Civic Engagement closes the feedback loop.
          </div>
          <div className="mt-4 text-cyan-400">
            This investment represents approximately 1.5% of annual GDP—yielding returns many times over in economic growth, social stability, and national resilience.
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ value, color }: ProgressBarProps) {
  return (
    <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden mt-1 mb-2">
      <div
        className={`h-full rounded-full transition-all duration-700 ${color}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

function SRDCard({ title, status, name, progress, investment, timeframe, metricLabel, metricValue, metricTarget, dependsOn }: SRDCardProps) {
  const statusColor = status === 'pilot' ? 'bg-yellow-700 text-yellow-200' : status === 'scaling' ? 'bg-green-700 text-green-200' : 'bg-blue-700 text-blue-200';
  const barColor = status === 'pilot' ? 'bg-yellow-400/80' : status === 'scaling' ? 'bg-green-400/80' : 'bg-blue-400/80';
  return (
    <div className="bg-linear-to-br from-slate-800 via-slate-900 to-blue-900 rounded-2xl p-6 shadow-xl border border-cyan-900 hover:scale-[1.025] hover:shadow-2xl transition-transform duration-300">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-cyan-300 text-lg tracking-wide drop-shadow">{title}</span>
        <span className={`px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider ${statusColor}`}>{status}</span>
      </div>
      <div className="font-extrabold text-cyan-100 text-xl mb-1 drop-shadow-lg">{name}</div>
      <div className="mb-1 flex items-center gap-2">
        <b className="text-cyan-400">Progress:</b>
        <span className="text-cyan-200 font-bold">{progress}%</span>
      </div>
      <ProgressBar value={progress} color={barColor} />
      <div className="mb-1"><b className="text-cyan-400">Investment:</b> <span className="text-cyan-200">{investment}</span></div>
      <div className="mb-1"><b className="text-cyan-400">Timeframe:</b> <span className="text-cyan-200">{timeframe}</span></div>
      <div className="mb-1"><b className="text-cyan-400">{metricLabel}:</b> <span className="text-cyan-200">{metricValue}</span> <span className="text-cyan-500">/ {metricTarget}</span></div>
      {dependsOn && <div className="text-xs text-cyan-500 mt-1 italic">Depends on {dependsOn}</div>}
    </div>
  );
}
