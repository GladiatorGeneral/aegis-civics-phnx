import { AmericanScoreDashboard } from "@/components/scoring/AmericanScoreDashboard";
import { PoliticianAmericanScore } from "@/components/scoring/PoliticianAmericanScore";
import { LeaderCard } from "@/components/leadership/LeaderCard";
import { fetchAllLeaders } from "@/lib/data/leadership";

export default async function DashboardPage() {
  const leaders = await fetchAllLeaders();
  const featuredLeader = leaders[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black text-white">
      <div className="relative overflow-hidden py-10 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-cyan-500/10" />
        <div className="container mx-auto relative">
          <h1 className="text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              American Scale
            </span>
            <span className="text-white ml-3">Dashboard</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Patriotic Accountability Matrix scoring legislation and leaders on the "For All Americans" principle.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 pb-12 space-y-10">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AmericanScoreDashboard leaders={leaders} />
          </div>
          <div className="space-y-4">
            {featuredLeader ? <LeaderCard leader={featuredLeader} /> : null}
            {featuredLeader ? (
              <div className="p-4 rounded-2xl bg-gray-900/50 border border-white/10">
                <PoliticianAmericanScore leader={featuredLeader} votingRecord={featuredLeader.votingRecord ?? []} />
              </div>
            ) : null}
          </div>
        </section>
      </main>
    </div>
  );
}
