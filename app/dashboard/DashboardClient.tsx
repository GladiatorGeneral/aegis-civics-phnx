"use client";

import { useState } from "react";
import { GovernmentLeader } from "@/lib/types";
import { LeaderCard } from "@/components/leadership/LeaderCard";
import { PoliticianAmericanScore } from "@/components/scoring/PoliticianAmericanScore";
import { LeaderCategoryDashboard } from "@/components/dashboard/LeaderCategoryDashboard";
import { InfrastructureCard } from "@/components/infrastructure/InfrastructureCard";
import { BillSpendingCorrelationChart } from "@/components/infrastructure/BillSpendingCorrelationChart";
import { CurrentLegislation } from "@/components/leadership/CurrentLegislation";

interface DashboardClientProps {
  initialFeaturedLeader: GovernmentLeader;
  allLeaders: GovernmentLeader[];
}

export function DashboardClient({ initialFeaturedLeader, allLeaders }: DashboardClientProps) {
  const [selectedLeader, setSelectedLeader] = useState<GovernmentLeader | null>(initialFeaturedLeader);

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-950 to-black text-white">
      <div className="relative overflow-hidden py-10 px-4">
        <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/5 to-cyan-500/10" />
        <div className="container mx-auto relative">
          <h1 className="text-5xl font-bold mb-3">
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              PhnxAI
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
        <section id="featured-leader" className="grid grid-cols-1 lg:grid-cols-2 gap-6 scroll-mt-24">
          <div>
            {selectedLeader ? <LeaderCard leader={selectedLeader} /> : null}
          </div>
          <div>
            {selectedLeader ? (
              <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/10 h-full">
                <PoliticianAmericanScore leader={selectedLeader} votingRecord={selectedLeader.votingRecord ?? []} />
              </div>
            ) : null}
          </div>
        </section>

        {/* Current Legislation Section */}
        {selectedLeader && (
          <section>
            <CurrentLegislation leader={selectedLeader} />
          </section>
        )}

        {/* Leaders by Category - Collapsible Cards */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Leaders by Category
            </span>
          </h2>
          <p className="text-gray-400 mb-6">
            Browse senators, representatives, governors, and mayors organized by role. Click a leader to view detailed scoring.
          </p>
          <LeaderCategoryDashboard 
            leaders={allLeaders} 
            onSelectLeader={(leader) => {
              setSelectedLeader(leader);
              // Scroll to top to see details
              document.getElementById("featured-leader")?.scrollIntoView({ behavior: "smooth" });
            }}
          />
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
