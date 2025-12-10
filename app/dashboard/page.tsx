import { PoliticianAmericanScore } from "@/components/scoring/PoliticianAmericanScore";
import { LeaderCard } from "@/components/leadership/LeaderCard";
import { InfrastructureCard } from "@/components/infrastructure/InfrastructureCard";
import { BillSpendingCorrelationChart } from "@/components/infrastructure/BillSpendingCorrelationChart";
import { LeaderCategoryDashboard } from "@/components/dashboard/LeaderCategoryDashboard";
import { fetchLeadersSample, fetchAllLeaders } from "@/lib/data/leadership";

export default async function DashboardPage() {
  // Fetch 50 leaders with real voting data enrichment for first 10
  const leaders = await fetchLeadersSample(50, true);
  const featuredLeader = leaders[0];
  
  // Fetch all leaders for category dashboard
  const allLeaders = await fetchAllLeaders();

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-950 to-black text-white">
      <div className="relative overflow-hidden py-10 px-4">
        <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/5 to-cyan-500/10" />
        <div className="container mx-auto relative">
          <h1 className="text-5xl font-bold mb-3">
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
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
        {/* Featured Leader Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            {featuredLeader ? <LeaderCard leader={featuredLeader} /> : null}
          </div>
          <div>
            {featuredLeader ? (
              <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/10 h-full">
                <PoliticianAmericanScore leader={featuredLeader} votingRecord={featuredLeader.votingRecord ?? []} />
              </div>
            ) : null}
          </div>
        </section>

        {/* Leaders by Category - Collapsible Cards */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Leaders by Category
            </span>
          </h2>
          <p className="text-gray-400 mb-6">
            Browse senators, representatives, governors, and mayors organized by role. Click each section to expand.
          </p>
          <LeaderCategoryDashboard leaders={allLeaders} />
        </section>

        {/* Infrastructure Section */}
        <section>
          <InfrastructureCard />
        </section>

        {/* Bill Spending Impact Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Bill → Spending Impact
            </span>
          </h2>
          <p className="text-gray-400 mb-6">
            Tracking how major infrastructure legislation translates into actual federal spending increases.
          </p>
          <BillSpendingCorrelationChart />
        </section>
      </main>
    </div>
  );
}
