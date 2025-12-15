<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import Link from "next/link";

export default function Home() {
  return (
<<<<<<< Updated upstream
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="bg-black/60 rounded-2xl shadow-xl p-10 flex flex-col gap-8 items-center w-full max-w-md">
        <h1 className="text-4xl font-bold text-cyan-300 mb-4 text-center">Welcome to USAMind</h1>
        <div className="flex flex-col gap-6 w-full">
          <Link href="/dashboard" className="block w-full">
            <button className="w-full py-4 px-6 rounded-lg bg-cyan-700 hover:bg-cyan-600 text-white text-xl font-semibold shadow transition">Current Numbers</button>
          </Link>
          <Link href="/illumio" className="block w-full">
            <button className="w-full py-4 px-6 rounded-lg bg-blue-700 hover:bg-blue-600 text-white text-xl font-semibold shadow transition">Project Phnx</button>
          </Link>
          <Link href="/future-numbers" className="block w-full">
            <button className="w-full py-4 px-6 rounded-lg bg-purple-700 hover:bg-purple-600 text-white text-xl font-semibold shadow transition">Phnx Numbers</button>
          </Link>
        </div>
      </div>
    </div>
=======
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

          <Link href="/illumio/blueprints/ai" className="block p-6 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10">
            <h2 className="text-lg font-bold">AI Security</h2>
            <p className="text-sm mt-1">Project Phnx — AI blueprint</p>
          </Link>

          <Link href="/illumio/blueprints/food" className="block p-6 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10">
            <h2 className="text-lg font-bold">Food Security</h2>
            <p className="text-sm mt-1">Project Phnx — Food blueprint</p>
          </Link>

          <Link href="/illumio/blueprints/water" className="block p-6 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10">
            <h2 className="text-lg font-bold">Water Security</h2>
            <p className="text-sm mt-1">Project Phnx — Water blueprint</p>
          </Link>

          <Link href="/illumio/blueprints/medical" className="block p-6 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10">
            <h2 className="text-lg font-bold">Medical Security</h2>
            <p className="text-sm mt-1">Project Phnx — Medical blueprint</p>
          </Link>

          <Link href="/illumio/blueprints/financial" className="block p-6 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10">
            <h2 className="text-lg font-bold">Financial Security</h2>
            <p className="text-sm mt-1">Project Phnx — Financial blueprint</p>
          </Link>

          <Link href="/illumio/blueprints/education" className="block p-6 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10">
            <h2 className="text-lg font-bold">Education Security</h2>
            <p className="text-sm mt-1">Project Phnx — Education blueprint</p>
          </Link>

          <Link href="/illumio/blueprints/renewal" className="block p-6 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10">
            <h2 className="text-lg font-bold">Systemic Renewal</h2>
            <p className="text-sm mt-1">Project Phnx — Systemic Renewal blueprint</p>
          </Link>
        </section>
      </div>
    </main>
>>>>>>> Stashed changes
  );
}
