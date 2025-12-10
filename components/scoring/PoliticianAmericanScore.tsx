"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  BarChart3,
  Globe,
  Shield,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import { AmericanScoreIndicator } from "@/components/scoring/AmericanScoreIndicator";
import { GovernmentLeader, VotingAnalysis } from "@/lib/types/leadership";

interface PoliticianAmericanScoreProps {
  leader: GovernmentLeader;
  votingRecord: VotingAnalysis[];
}

type ScoreCategory = "american" | "neutral" | "unamerican";

export function PoliticianAmericanScore({ leader, votingRecord }: PoliticianAmericanScoreProps) {
  const [timeframe, setTimeframe] = useState<"all" | "year" | "term">("all");
  const [categoryFilter] = useState<string>("all");

  const overallScore = useMemo(() => calculateAmericanScore(votingRecord), [votingRecord]);
  const scoreCategory: ScoreCategory = overallScore >= 67 ? "american" : overallScore >= 34 ? "neutral" : "unamerican";

  const categoryScores = useMemo(() => {
    if (votingRecord.length === 0) {
      return { benefitScope: 50, foreignImpact: 50, transparency: 50 };
    }

    return {
      benefitScope: Math.round(
        votingRecord.reduce((acc, v) => acc + v.americanScore.breakdown.benefitScope, 0) / votingRecord.length,
      ),
      foreignImpact: Math.round(
        votingRecord.reduce((acc, v) => acc + v.americanScore.breakdown.foreignImpact, 0) / votingRecord.length,
      ),
      transparency: Math.round(
        votingRecord.reduce((acc, v) => acc + v.americanScore.breakdown.transparency, 0) / votingRecord.length,
      ),
    };
  }, [votingRecord]);

  const topVotes = useMemo(
    () =>
      votingRecord
        .filter((v) => v.impact === "high")
        .sort((a, b) => b.americanScore.overall - a.americanScore.overall)
        .slice(0, 5),
    [votingRecord],
  );

  const trend = useMemo(() => calculateTrend(votingRecord), [votingRecord]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">American Score</h3>
          <p className="text-gray-400">Measures alignment with "For All Americans" principle</p>
        </div>
        <div className="text-right">
          <div className="text-4xl font-bold">
            <span
              className={
                scoreCategory === "american"
                  ? "text-green-400"
                  : scoreCategory === "neutral"
                  ? "text-yellow-400"
                  : "text-red-400"
              }
            >
              {overallScore}
            </span>
            <span className="text-gray-500 text-2xl">/100</span>
          </div>
          <div className="text-gray-500 text-sm">Based on {votingRecord.length} votes</div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10">
        <AmericanScoreIndicator score={scoreCategory} value={overallScore} size="lg" showDetails />

        <div className="flex items-center gap-2 mt-4 text-sm">
          {trend === "improving" ? (
            <>
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-green-400">Score improving recently</span>
            </>
          ) : trend === "declining" ? (
            <>
              <TrendingDown className="w-4 h-4 text-red-400" />
              <span className="text-red-400">Score declining recently</span>
            </>
          ) : (
            <>
              <TrendingUp className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400">Score stable</span>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CategoryCard
          title="Benefit Scope"
          subtitle="Who benefits?"
          icon={<Users className="w-5 h-5 text-blue-400" />}
          value={categoryScores.benefitScope}
          gradient="from-blue-500 to-cyan-500"
        />
        <CategoryCard
          title="Foreign Impact"
          subtitle="Domestic vs Foreign"
          icon={<Globe className="w-5 h-5 text-purple-400" />}
          value={categoryScores.foreignImpact}
          gradient="from-purple-500 to-pink-500"
        />
        <CategoryCard
          title="Transparency"
          subtitle="Open vs Closed Process"
          icon={<Shield className="w-5 h-5 text-yellow-400" />}
          value={categoryScores.transparency}
          gradient="from-yellow-500 to-amber-500"
        />
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-lg">Key Votes Analysis</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <VotesList
            title="Most American Votes"
            icon={<TrendingUp className="w-5 h-5 text-green-400" />}
            votes={topVotes.filter((v) => v.americanScore.overall >= 70).slice(0, 3)}
            accent="text-green-400"
          />
          <VotesList
            title="Concerning Votes"
            icon={<AlertTriangle className="w-5 h-5 text-red-400" />}
            votes={topVotes.filter((v) => v.americanScore.overall <= 30).slice(0, 3)}
            accent="text-red-400"
          />
        </div>
      </div>

      <div className="flex gap-2">
        {["all", "term", "year"].map((time) => (
          <button
            key={time}
            type="button"
            onClick={() => setTimeframe(time as typeof timeframe)}
            className={`px-4 py-2 rounded-lg text-sm ${
              timeframe === time ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {time === "all" ? "All Time" : time === "term" ? "Current Term" : "Past Year"}
          </button>
        ))}
      </div>
    </div>
  );
}

function calculateAmericanScore(votingRecord: VotingAnalysis[]): number {
  if (votingRecord.length === 0) return 50;

  const weightedScore = votingRecord.reduce((acc, vote) => {
    const weight = vote.impact === "high" ? 3 : vote.impact === "medium" ? 2 : 1;
    return acc + vote.americanScore.overall * weight;
  }, 0);

  const totalWeight = votingRecord.reduce((acc, vote) => acc + (vote.impact === "high" ? 3 : vote.impact === "medium" ? 2 : 1), 0);

  return Math.round(weightedScore / totalWeight);
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

function CategoryCard({
  title,
  subtitle,
  icon,
  value,
  gradient,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  value: number;
  gradient: string;
}) {
  return (
    <div className="p-4 rounded-xl bg-gray-900/30">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-gray-800/50">{icon}</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-400">{subtitle}</div>
        </div>
      </div>
      <div className="text-3xl font-bold">
        {value}
        <span className="text-gray-500 text-xl">/100</span>
      </div>
      <div className="h-2 rounded-full bg-gray-800 mt-2">
        <div className={`h-full rounded-full bg-gradient-to-r ${gradient}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function VotesList({
  title,
  icon,
  votes,
  accent,
}: {
  title: string;
  icon: React.ReactNode;
  votes: VotingAnalysis[];
  accent: string;
}) {
  return (
    <div className="p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-transparent border border-white/10">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h5 className="font-semibold">{title}</h5>
      </div>
      <div className="space-y-3">
        {votes.length === 0 && <div className="text-sm text-gray-500">No votes recorded</div>}
        {votes.map((vote) => (
          <div key={vote.billId} className="flex items-center justify-between">
            <span className="text-sm truncate">{vote.billTitle}</span>
            <span className={`${accent} font-bold`}>{vote.americanScore.overall}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
