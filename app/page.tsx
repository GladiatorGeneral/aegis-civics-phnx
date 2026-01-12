import Link from "next/link";
import TwoYearAnimatedTracks from "@/components/finance/TwoYearAnimatedTracks";
import QualityOfLifeDashboard from "@/components/finance/QualityOfLifeDashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold mb-2">PhnxAI — Home</h1>
          <p className="text-slate-300">Quick access to core dashboards and Project Phnx blueprints.</p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2">
          <Link href="/dashboard" className="block p-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:opacity-95">
            <h2 className="text-lg font-bold">Leaders</h2>
            <p className="text-sm mt-1">Leadership dashboard and profiles</p>
          </Link>

          <Link href="/finance" className="block p-6 rounded-lg bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-md hover:opacity-95">
            <h2 className="text-lg font-bold">Finance</h2>
            <p className="text-sm mt-1">Federal finance indicators and projections</p>
          </Link>

          <Link href="/phnxrise/blueprints/ai" className="block p-6 rounded-lg bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow-md hover:opacity-95">
            <h2 className="text-lg font-bold">AI Security</h2>
            <p className="text-sm mt-1">Project Phnx — AI blueprint</p>
          </Link>

          <Link href="/phnxrise/blueprints/food" className="block p-6 rounded-lg bg-gradient-to-r from-emerald-500 to-lime-400 text-white shadow-md hover:opacity-95">
            <h2 className="text-lg font-bold">Food Security</h2>
            <p className="text-sm mt-1">Project Phnx — Food blueprint</p>
          </Link>

          <Link href="/phnxrise/blueprints/water" className="block p-6 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-400 text-white shadow-md hover:opacity-95">
            <h2 className="text-lg font-bold">Water Security</h2>
            <p className="text-sm mt-1">Project Phnx — Water blueprint</p>
          </Link>

          <Link href="/phnxrise/blueprints/medical" className="block p-6 rounded-lg bg-gradient-to-r from-rose-500 to-pink-400 text-white shadow-md hover:opacity-95">
            <h2 className="text-lg font-bold">Medical Security</h2>
            <p className="text-sm mt-1">Project Phnx — Medical blueprint</p>
          </Link>

          <Link href="/phnxrise/blueprints/financial" className="block p-6 rounded-lg bg-gradient-to-r from-amber-500 to-orange-400 text-white shadow-md hover:opacity-95">
            <h2 className="text-lg font-bold">Financial Security</h2>
            <p className="text-sm mt-1">Project Phnx — Financial blueprint</p>
          </Link>

          <Link href="/phnxrise/blueprints/education" className="block p-6 rounded-lg bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-md hover:opacity-95">
            <h2 className="text-lg font-bold">Education Security</h2>
            <p className="text-sm mt-1">Project Phnx — Education blueprint</p>
          </Link>

          <Link href="/phnxrise/blueprints/renewal" className="block p-6 rounded-lg bg-gradient-to-r from-emerald-700 to-teal-500 text-white shadow-md hover:opacity-95">
            <h2 className="text-lg font-bold">Systemic Renewal</h2>
            <p className="text-sm mt-1">Project Phnx — Systemic Renewal blueprint</p>
          </Link>

          <Link href="/phnxrise/blueprints/yourmission" className="block p-6 rounded-lg bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white shadow-md hover:opacity-95">
            <h2 className="text-lg font-bold">Y/OUR Mission</h2>
            <p className="text-sm mt-1">Project Phnx — Your Mission curriculum</p>
          </Link>
        </section>
      </div>
      {/* 12 SRDs overview (multicolored with icons) */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-6 text-center">
          <h2 className="text-2xl font-bold">12 Systemic Renewal Directorates (SRDs)</h2>
          <p className="text-slate-300 text-sm">High-level overview of the 12 SRDs that make up Project Phnx's renewal architecture.</p>
        </div>

        {(() => {
          const names = [
            'Digital Equity & Infrastructure',
            'Education & Workforce Development',
            'Healthcare System Reengineering',
            'Food Security & Agriculture',
            'Affordable Childcare & Family Support',
            'Adolescent Development & Safety',
            'National Infrastructure',
            'Dynamic Wage & Housing Stability',
            'Fiscal Responsibility & Transparency',
            'State & Local Empowerment',
            'Renewable Energy & Grid Independence',
            'Civic Engagement & Democracy'
          ];

          return (
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {names.map((name) => (
                <div key={name} className="p-4 rounded-lg bg-slate-800/60 border border-white/6 text-sm text-slate-100">
                  <div className="font-semibold">{name}</div>
                </div>
              ))}
            </div>
          );
        })()}
      </section>
      {/* FY27–FY28 animated tracks */}
      <section className="container mx-auto px-4 py-12">
        <TwoYearAnimatedTracks />
      </section>
      {/* Quality of Life dashboard (below trends) */}
      <section className="container mx-auto px-4 py-12">
        <QualityOfLifeDashboard />
      </section>
    </main>
  );
}

