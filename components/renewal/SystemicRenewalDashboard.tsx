"use client";


export function SystemicRenewalDashboard() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 space-y-10">
      <div className="bg-linear-to-br from-blue-900/60 to-emerald-900/60 rounded-2xl p-8 border border-blue-800/30 shadow-xl">
        <h1 className="text-4xl font-extrabold text-white mb-4">Aegis Civics Platform</h1>
        <p className="text-lg text-gray-200 mb-2">
          <span className="font-semibold text-emerald-400">Aegis Civics</span> is a comprehensive platform designed to analyze, visualize, and track the progress of American governance, infrastructure, finance, and systemic renewal. Our mission is to empower citizens, policymakers, and researchers with transparent, actionable insights into the state and evolution of civic systems in the United States.
        </p>
        <p className="text-md text-gray-400">
          The platform integrates data from federal, state, and local sources, providing dashboards, real-time updates, and AI-driven analysis to foster informed decision-making and civic engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900/80 rounded-xl p-6 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-2">Key Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Interactive dashboards for governance, finance, and infrastructure</li>
            <li>AI-powered bill and policy analysis</li>
            <li>Real-time leadership and legislative updates</li>
            <li>Systemic renewal tracking and metrics</li>
            <li>Transparent data from trusted public sources</li>
          </ul>
        </div>
        <div className="bg-slate-900/80 rounded-xl p-6 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-2">Site Structure</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li><span className="font-semibold text-blue-400">Dashboard:</span> Overview of key civic indicators</li>
            <li><span className="font-semibold text-emerald-400">Finance:</span> Federal and state financial data</li>
            <li><span className="font-semibold text-purple-400">Renewal:</span> Systemic renewal initiatives and progress</li>
            <li><span className="font-semibold text-cyan-400">Leadership:</span> Elected officials and leadership analytics</li>
            <li><span className="font-semibold text-pink-400">Infrastructure:</span> National and local infrastructure metrics</li>
          </ul>
        </div>
      </div>

      <div className="bg-linear-to-r from-emerald-700/60 to-blue-800/60 rounded-2xl p-8 border border-emerald-800/30 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-2">How to Use</h2>
        <ol className="list-decimal list-inside text-gray-200 space-y-1">
          <li>Navigate using the top menu to explore dashboards and data.</li>
          <li>Click on any section for detailed analytics and visualizations.</li>
          <li>Use filters and search to customize your view.</li>
          <li>Access real-time updates and AI-generated insights for deeper understanding.</li>
        </ol>
      </div>

      {/* Footer removed to avoid duplication; now handled globally */}
    </div>
  );
}
