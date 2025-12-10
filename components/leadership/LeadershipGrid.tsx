"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import { GovernmentLeader, LeaderType } from "@/lib/types";
import { LeaderCard } from "@/components/leadership/LeaderCard";
import { LeadershipFilters } from "@/components/leadership/LeadershipFilters";
import { PartyBreakdown } from "@/components/leadership/PartyBreakdown";

interface LeadershipGridProps {
  leaders: GovernmentLeader[];
  chamber: LeaderType;
  title?: string;
  showFilters?: boolean;
}

export function LeadershipGrid({ leaders, chamber, title, showFilters = true }: LeadershipGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [partyFilter, setPartyFilter] = useState<string>("all");
  const [stateFilter, setStateFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"name" | "activity" | "priority">("activity");

  const partyStats = useMemo(() => {
    const stats: Record<string, number> = {};
    leaders.forEach((leader) => {
      stats[leader.party] = (stats[leader.party] || 0) + 1;
    });
    return stats;
  }, [leaders]);

  const filteredLeaders = useMemo(() => {
    return leaders
      .filter((leader) => {
        const matchesSearch =
          leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          leader.state.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesParty = partyFilter === "all" || leader.party === partyFilter;
        const matchesState = stateFilter === "all" || leader.state === stateFilter;
        return matchesSearch && matchesParty && matchesState;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "name":
            return a.name.localeCompare(b.name);
          case "activity":
            return (
              b.metrics.billsSponsored + b.metrics.voteAttendance - (a.metrics.billsSponsored + a.metrics.voteAttendance)
            );
          case "priority":
            return (b.aiInsights.priority || 0) - (a.aiInsights.priority || 0);
          default:
            return 0;
        }
      });
  }, [leaders, searchQuery, partyFilter, stateFilter, sortBy]);

  const resolvedTitle = title || `The ${chamber.charAt(0).toUpperCase()}${chamber.slice(1)}`;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {resolvedTitle}
          </h2>
          <p className="text-gray-400 mt-2">
            {filteredLeaders.length} of {leaders.length} members
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name or state..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            onClick={() => setSortBy(sortBy === "activity" ? "name" : "activity")}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Sort: {sortBy === "activity" ? "Activity" : "Name"}
          </button>
        </div>
      </div>

      <PartyBreakdown stats={partyStats} />

      {showFilters ? (
        <LeadershipFilters
          onPartyChange={setPartyFilter}
          onStateChange={setStateFilter}
          leaders={leaders}
          currentParty={partyFilter}
          currentState={stateFilter}
        />
      ) : null}

      <AnimatePresence mode="wait">
        {filteredLeaders.length > 0 ? (
          <motion.div
            key="grid-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredLeaders.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <LeaderCard leader={leader} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div key="no-results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <div className="text-gray-500 text-lg">No leaders match your filters</div>
            <button
              onClick={() => {
                setSearchQuery("");
                setPartyFilter("all");
                setStateFilter("all");
              }}
              className="mt-4 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <span>Democrat: {partyStats.Democrat || 0}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full" />
          <span>Republican: {partyStats.Republican || 0}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-gray-500 rounded-full" />
          <span>Independent: {partyStats.Independent || 0}</span>
        </div>
      </div>
    </div>
  );
}
