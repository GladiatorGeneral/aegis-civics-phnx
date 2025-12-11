import { SystemicRenewalDashboard } from "@/components/renewal/SystemicRenewalDashboard";
import { systemicRenewalDirectorates, aggregateStats } from "@/lib/data/systemic-renewal";

export default function RenewalPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-16 px-4">
        <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 via-blue-500/5 to-purple-500/10" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }} />
        
        <div className="container mx-auto relative">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold mb-4">
              <span className="bg-linear-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Project Illumio
              </span>
            </h1>
            <h2 className="text-3xl font-semibold mb-6 text-gray-200">
              Systemic Renewal Dashboard
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Twelve integrated transformation initiatives designed to rebuild America&apos;s foundation.
              Track real-time progress, historical trends, and cross-directorate dependencies as we
              systematically address the nation&apos;s most critical challenges.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-lg p-4">
                <div className="text-emerald-400 text-sm font-medium mb-1">Total Investment</div>
                <div className="text-2xl font-bold">${aggregateStats.totalInvestment.toFixed(0)}B</div>
                <div className="text-xs text-gray-400 mt-1">Over 10 years</div>
              </div>
              
              <div className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4">
                <div className="text-blue-400 text-sm font-medium mb-1">Avg Progress</div>
                <div className="text-2xl font-bold">{aggregateStats.averageProgress.toFixed(1)}%</div>
                <div className="text-xs text-gray-400 mt-1">Across all SRDs</div>
              </div>
              
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <div className="text-purple-400 text-sm font-medium mb-1">Active SRDs</div>
                <div className="text-2xl font-bold">{aggregateStats.inProgressCount}</div>
                <div className="text-xs text-gray-400 mt-1">In pilot or scaling</div>
              </div>
              
              <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4">
                <div className="text-cyan-400 text-sm font-medium mb-1">Phase Progress</div>
                <div className="text-2xl font-bold">{aggregateStats.completedPhases}/{aggregateStats.totalPhases}</div>
                <div className="text-xs text-gray-400 mt-1">Phases complete</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <main className="container mx-auto px-4 pb-16">
        <SystemicRenewalDashboard directorates={systemicRenewalDirectorates} />
      </main>

      {/* Footer Context */}
      <div className="border-t border-gray-800 bg-slate-950">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">
              <span className="text-emerald-400 font-semibold">The Interconnected Whole:</span> Each directorate reinforces the others—
              Digital Equity enables all platforms, Education creates the skilled workforce, 
              Fiscal Responsibility ensures transparency, and Civic Engagement closes the feedback loop.
            </p>
            <p className="text-xs text-gray-500">
              This investment represents approximately 1.5% of annual GDP—yielding returns many times over 
              in economic growth, social stability, and national resilience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
