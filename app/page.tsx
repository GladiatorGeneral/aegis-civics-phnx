import Link from "next/link";
import TwoYearAnimatedTracks from "@/components/finance/TwoYearAnimatedTracks";
import QualityOfLifeDashboard from "@/components/finance/QualityOfLifeDashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold mb-2">American Scale — Home</h1>
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

          <Link href="/illumio/blueprints/ai" className="block p-6 rounded-lg bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow-md hover:opacity-95">
            <h2 className="text-lg font-bold">AI Security</h2>
            <p className="text-sm mt-1">Project Phnx — AI blueprint</p>
          </Link>

          <Link href="/illumio/blueprints/food" className="block p-6 rounded-lg bg-gradient-to-r from-emerald-500 to-lime-400 text-white shadow-md hover:opacity-95">
            <h2 className="text-lg font-bold">Food Security</h2>
            <p className="text-sm mt-1">Project Phnx — Food blueprint</p>
          </Link>

          <Link href="/illumio/blueprints/water" className="block p-6 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-400 text-white shadow-md hover:opacity-95">
            <h2 className="text-lg font-bold">Water Security</h2>
            <p className="text-sm mt-1">Project Phnx — Water blueprint</p>
          </Link>

          <Link href="/illumio/blueprints/medical" className="block p-6 rounded-lg bg-gradient-to-r from-rose-500 to-pink-400 text-white shadow-md hover:opacity-95">
            <h2 className="text-lg font-bold">Medical Security</h2>
            <p className="text-sm mt-1">Project Phnx — Medical blueprint</p>
          </Link>

          <Link href="/illumio/blueprints/financial" className="block p-6 rounded-lg bg-gradient-to-r from-amber-500 to-orange-400 text-white shadow-md hover:opacity-95">
            <h2 className="text-lg font-bold">Financial Security</h2>
            <p className="text-sm mt-1">Project Phnx — Financial blueprint</p>
          </Link>

          <Link href="/illumio/blueprints/education" className="block p-6 rounded-lg bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-md hover:opacity-95">
            <h2 className="text-lg font-bold">Education Security</h2>
            <p className="text-sm mt-1">Project Phnx — Education blueprint</p>
          </Link>

          <Link href="/illumio/blueprints/renewal" className="block p-6 rounded-lg bg-gradient-to-r from-emerald-700 to-teal-500 text-white shadow-md hover:opacity-95">
            <h2 className="text-lg font-bold">Systemic Renewal</h2>
            <p className="text-sm mt-1">Project Phnx — Systemic Renewal blueprint</p>
          </Link>

          <Link href="/illumio/blueprints/yourmission" className="block p-6 rounded-lg bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white shadow-md hover:opacity-95">
            <h2 className="text-lg font-bold">Y/OUR Mission</h2>
            <p className="text-sm mt-1">Project Phnx — Your Mission curriculum</p>
          </Link>
        </section>
      </div>
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

