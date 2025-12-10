"use client";

import { CollapsibleCard } from "@/components/ui/CollapsibleCard";
import { LeaderCard } from "@/components/leadership/LeaderCard";
import type { GovernmentLeader } from "@/lib/types";
import { Users, Building2, Home, Briefcase } from "lucide-react";

interface LeaderCategoryDashboardProps {
  leaders: GovernmentLeader[];
}

export function LeaderCategoryDashboard({ leaders }: LeaderCategoryDashboardProps) {
  // Filter leaders by type
  const senators = leaders.filter((l: GovernmentLeader) => l.type === "senate");
  const representatives = leaders.filter((l: GovernmentLeader) => l.type === "house");
  const governors = leaders.filter((l: GovernmentLeader) => l.type === "governor");
  const mayors = leaders.filter((l: GovernmentLeader) => l.type === "mayor");

  // Calculate average American Score for each category
  const avgScore = (leaderList: GovernmentLeader[]) => {
    const scores = leaderList.map((l: GovernmentLeader) => {
      const votingRecord = l.votingRecord ?? [];
      if (votingRecord.length === 0) return 50; // Default score
      return votingRecord.reduce((acc, vote) => acc + (vote.americanScore?.overall ?? 50), 0) / votingRecord.length;
    });
    return scores.length > 0
      ? (scores.reduce((a: number, b: number) => a + b, 0) / scores.length).toFixed(0)
      : "N/A";
  };

  return (
    <div className="space-y-6">
      {/* Senators */}
      <CollapsibleCard
        title="U.S. Senators"
        subtitle={`${senators.length} senators tracked across all states`}
        badge={`Avg Score: ${avgScore(senators)}`}
        icon={<Users className="w-6 h-6 text-white" />}
        gradientFrom="blue-500"
        gradientTo="indigo-600"
        defaultOpen={false}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {senators.map((leader: GovernmentLeader) => (
            <LeaderCard key={leader.id} leader={leader} />
          ))}
        </div>
        {senators.length === 0 && (
          <p className="text-gray-400 text-center py-8">No senators data available</p>
        )}
      </CollapsibleCard>

      {/* Representatives */}
      <CollapsibleCard
        title="U.S. Representatives"
        subtitle={`${representatives.length} representatives from across the nation`}
        badge={`Avg Score: ${avgScore(representatives)}`}
        icon={<Briefcase className="w-6 h-6 text-white" />}
        gradientFrom="purple-500"
        gradientTo="pink-600"
        defaultOpen={false}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {representatives.map((leader: GovernmentLeader) => (
            <LeaderCard key={leader.id} leader={leader} />
          ))}
        </div>
        {representatives.length === 0 && (
          <p className="text-gray-400 text-center py-8">No representatives data available</p>
        )}
      </CollapsibleCard>

      {/* Governors */}
      <CollapsibleCard
        title="State Governors"
        subtitle={`${governors.length} governors leading their states`}
        badge={`Avg Score: ${avgScore(governors)}`}
        icon={<Building2 className="w-6 h-6 text-white" />}
        gradientFrom="emerald-500"
        gradientTo="teal-600"
        defaultOpen={false}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {governors.map((leader: GovernmentLeader) => (
            <LeaderCard key={leader.id} leader={leader} />
          ))}
        </div>
        {governors.length === 0 && (
          <p className="text-gray-400 text-center py-8">No governors data available</p>
        )}
      </CollapsibleCard>

      {/* Mayors */}
      <CollapsibleCard
        title="City Mayors"
        subtitle={`${mayors.length} mayors from major cities`}
        badge={`Avg Score: ${avgScore(mayors)}`}
        icon={<Home className="w-6 h-6 text-white" />}
        gradientFrom="orange-500"
        gradientTo="red-600"
        defaultOpen={false}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {mayors.map((leader: GovernmentLeader) => (
            <LeaderCard key={leader.id} leader={leader} />
          ))}
        </div>
        {mayors.length === 0 && (
          <p className="text-gray-400 text-center py-8">No mayors data available</p>
        )}
      </CollapsibleCard>
    </div>
  );
}
