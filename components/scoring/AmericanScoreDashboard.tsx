"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AmericanScoreIndicator } from "@/components/scoring/AmericanScoreIndicator";
import { GovernmentLeader, VotingAnalysis } from "@/lib/types/leadership";
import {
  BarChart3,
  Download,
  Filter,
  Target,
  TrendingDown,
  TrendingUp,
  Trophy,
} from "lucide-react";

interface AmericanScoreDashboardProps {
  leaders: GovernmentLeader[];
}

export function AmericanScoreDashboard({ leaders }: AmericanScoreDashboardProps) {
  const [chamberFilter, setChamberFilter] = useState<
    | "all"
    | "senate"
    | "house"
    | "senator"
    | "representative"
    | "governor"
    | "mayor"
  >("all");
  const [partyFilter, setPartyFilter] = useState<"all" | "Democrat" | "Republican" | "Independent">("all");
  const [scoreRange, setScoreRange] = useState<[number, number]>([0, 100]);

  const leadersWithScores = useMemo(() => {
    return leaders
      .map((leader) => ({
        ...leader,
        americanScore: calculateLeaderAmericanScore(leader.votingRecord ?? []),
      }))
      .filter((leader) => {
        if (chamberFilter !== "all" && leader.type !== chamberFilter) return false;
        if (partyFilter !== "all" && leader.party !== partyFilter) return false;
        if (leader.americanScore.score < scoreRange[0] || leader.americanScore.score > scoreRange[1]) return false;
        return true;
      })
      .sort((a, b) => b.americanScore.score - a.americanScore.score);
  }, [leaders, chamberFilter, partyFilter, scoreRange]);

  const stats = useMemo(() => calculateStats(leadersWithScores), [leadersWithScores]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Trophy className="w-8 h-8 text-yellow-400" />
            American Score Rankings
          </h2>
          <p className="text-gray-400">Who truly represents all Americans?</p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
        >
          <Download className="w-4 h-4" />
          Export Data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard label="Average Score" value={stats.average} gradient="from-green-500 to-blue-500" />
        <StatCard label="Top 10% Average" value={stats.top10Average} gradient="from-emerald-500 to-teal-500" />
        <StatCard label="Democrat Average" value={stats.partyAverages.Democrat || 0} gradient="from-blue-500 to-cyan-500" />
        <StatCard label="Republican Average" value={stats.partyAverages.Republican || 0} gradient="from-red-500 to-orange-500" />
      </div>

      <div className="flex flex-wrap gap-4 p-4 rounded-xl bg-gray-900/30">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-400 mb-2">
            <Filter className="w-4 h-4 inline mr-2" />
            Chamber
          </label>
          <select
            value={chamberFilter}
            onChange={(e) => setChamberFilter(e.target.value as typeof chamberFilter)}
            className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Chambers</option>
            <option value="senate">Senate</option>
            <option value="house">House</option>
            <option value="governor">Governors</option>
            <option value="mayor">Mayors</option>
          </select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-400 mb-2">Party</label>
          <select
            value={partyFilter}
            onChange={(e) => setPartyFilter(e.target.value as typeof partyFilter)}
            className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Parties</option>
            <option value="Democrat">Democrat</option>
            <option value="Republican">Republican</option>
            <option value="Independent">Independent</option>
          </select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Score Range: {scoreRange[0]} - {scoreRange[1]}
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="0"
              max="100"
              value={scoreRange[0]}
              onChange={(e) => setScoreRange([parseInt(e.target.value, 10), scoreRange[1]])}
              className="flex-1"
            />
            <input
              type="range"
              min="0"
              max="100"
              value={scoreRange[1]}
              onChange={(e) => setScoreRange([scoreRange[0], parseInt(e.target.value, 10)])}
              className="flex-1"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-800">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-900/50 text-left">
              <th className="p-4">Rank</th>
              <th className="p-4">Leader</th>
              <th className="p-4">Chamber</th>
              <th className="p-4">Party</th>
              <th className="p-4">American Score</th>
              <th className="p-4">Trend</th>
              <th className="p-4">Key Vote</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {leadersWithScores.map((leader, index) => {
              const topVote = leader.votingRecord?.[0];
              const trend = calculateTrend(leader.votingRecord ?? []);

              return (
                <motion.tr
                  key={leader.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-900/30 transition-colors"
                >
                  <td className="p-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        index === 0
                          ? "bg-yellow-500/20 text-yellow-400"
                          : index === 1
                          ? "bg-gray-500/20 text-gray-400"
                          : index === 2
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-gray-800/50 text-gray-400"
                      }`}
                    >
                      {index + 1}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={leader.imageUrl ?? "https://placehold.co/80x80"}
                        alt={leader.name}
                        className="w-10 h-10 rounded-full border border-gray-700 object-cover"
                      />
                      <div>
                        <div className="font-semibold">{leader.name}</div>
                        <div className="text-sm text-gray-400">{leader.state}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full bg-gray-800 text-sm capitalize">{leader.type}</span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        leader.party === "Democrat"
                          ? "bg-blue-500/20 text-blue-400"
                          : leader.party === "Republican"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-gray-500/20 text-gray-400"
                      }`}
                    >
                      {leader.party}
                    </span>
                  </td>
                  <td className="p-4">
                    <AmericanScoreIndicator
                      score={leader.americanScore.category}
                      value={leader.americanScore.score}
                      size="sm"
                      showLabel={false}
                    />
                  </td>
                  <td className="p-4">
                    {trend === "improving" ? (
                      <div className="flex items-center gap-1 text-green-400 text-sm">
                        <TrendingUp className="w-4 h-4" />
                        Improving
                      </div>
                    ) : trend === "declining" ? (
                      <div className="flex items-center gap-1 text-red-400 text-sm">
                        <TrendingDown className="w-4 h-4" />
                        Declining
                      </div>
                    ) : (
                      <div className="text-gray-400 text-sm">Stable</div>
                    )}
                  </td>
                  <td className="p-4">
                    {topVote ? (
                      <div className="text-sm">
                        <div className="truncate max-w-[200px]">{topVote.billTitle}</div>
                        <div
                          className={`text-xs ${
                            topVote.americanScore.overall >= 70
                              ? "text-green-400"
                              : topVote.americanScore.overall <= 30
                              ? "text-red-400"
                              : "text-yellow-400"
                          }`}
                        >
                          {topVote.americanScore.overall}% American
                        </div>
                      </div>
                    ) : (
                      <div className="text-gray-500 text-sm">No votes recorded</div>
                    )}
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50">
          <h4 className="font-bold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-400" />
            Score Distribution
          </h4>
          <div className="space-y-2">
            {[0, 20, 40, 60, 80].map((range) => {
              const count = leadersWithScores.filter(
                (l) => l.americanScore.score >= range && l.americanScore.score < range + 20,
              ).length;
              const percentage = leadersWithScores.length
                ? Math.round((count / leadersWithScores.length) * 100)
                : 0;

              return (
                <div key={range} className="flex items-center">
                  <div className="w-16 text-sm text-gray-400">
                    {range}-{range + 20}
                  </div>
                  <div className="flex-1 h-8 bg-gray-800 rounded-lg overflow-hidden">
                    <div
                      className={`h-full ${
                        range >= 60 ? "bg-green-500/50" : range >= 40 ? "bg-yellow-500/50" : "bg-red-500/50"
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className="w-12 text-right text-sm">{count}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50">
          <h4 className="font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-purple-400" />
            Chamber Comparison
          </h4>
          <div className="space-y-4">
            {Object.entries(stats.chamberAverages).map(([chamber, score]) => (
              <div key={chamber} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm capitalize">{chamber}</span>
                  <span className="font-bold">{score}%</span>
                </div>
                <div className="h-3 rounded-full bg-gray-800 overflow-hidden">
                  <div
                    className={`h-full ${score >= 67 ? "bg-green-500" : score >= 34 ? "bg-yellow-500" : "bg-red-500"}`}
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function calculateLeaderAmericanScore(votingRecord: VotingAnalysis[]) {
  if (!votingRecord.length) {
    return { score: 50, category: "neutral" as const };
  }

  const avgScore = Math.round(
    votingRecord.reduce((acc, vote) => acc + (vote.americanScore?.overall ?? 50), 0) / votingRecord.length,
  );

  const category = avgScore >= 67 ? ("american" as const) : avgScore >= 34 ? ("neutral" as const) : ("unamerican" as const);

  return { score: avgScore, category };
}

function calculateTrend(votingRecord: VotingAnalysis[]): "improving" | "declining" | "stable" {
  if (votingRecord.length < 10) return "stable";

  const recent = votingRecord.slice(-10);
  const earlier = votingRecord.slice(0, 10);

  const recentAvg = recent.reduce((a, v) => a + v.americanScore.overall, 0) / recent.length;
  const earlierAvg = earlier.reduce((a, v) => a + v.americanScore.overall, 0) / earlier.length;

  if (recentAvg > earlierAvg + 5) return "improving";
  if (recentAvg < earlierAvg - 5) return "declining";
  return "stable";
}

function calculateStats(leaders: (GovernmentLeader & { americanScore: { score: number } })[]) {
  const scores = leaders.map((l) => l.americanScore.score);
  const avg = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
  const top10Count = Math.max(1, Math.ceil(scores.length * 0.1));
  const top10Average = scores.length
    ? Math.round(scores.slice(0, top10Count).reduce((a, b) => a + b, 0) / top10Count)
    : 0;

  const partyTotals: Record<string, { sum: number; count: number }> = {};
  const chamberTotals: Record<string, { sum: number; count: number }> = {};

  leaders.forEach((leader) => {
    const { party, type } = leader;
    if (!partyTotals[party]) partyTotals[party] = { sum: 0, count: 0 };
    if (!chamberTotals[type]) chamberTotals[type] = { sum: 0, count: 0 };

    partyTotals[party].sum += leader.americanScore.score;
    partyTotals[party].count += 1;
    chamberTotals[type].sum += leader.americanScore.score;
    chamberTotals[type].count += 1;
  });

  const partyAverages = Object.fromEntries(
    Object.entries(partyTotals).map(([party, totals]) => [party, Math.round(totals.sum / totals.count)]),
  );

  const chamberAverages = Object.fromEntries(
    Object.entries(chamberTotals).map(([chamber, totals]) => [chamber, Math.round(totals.sum / totals.count)]),
  );

  return {
    average: Math.round(avg),
    top10Average,
    partyAverages,
    chamberAverages,
    total: leaders.length,
  };
}

function StatCard({ label, value, gradient }: { label: string; value: number; gradient: string }) {
  return (
    <div className="p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
      <div className="h-2 rounded-full bg-gray-800 mt-2">
        <div className={`h-full rounded-full bg-gradient-to-r ${gradient}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
