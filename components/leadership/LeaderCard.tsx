"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AmericanScoreIndicator } from "@/components/scoring/AmericanScoreIndicator";
import { PoliticianAmericanScore } from "@/components/scoring/PoliticianAmericanScore";
import { NeuralGlassPanel } from "@/components/ui/NeuralGlassPanel";
import { GovernmentLeader, VotingAnalysis } from "@/lib/types/leadership";
import {
  ExternalLink,
  FileText,
  MessageSquare,
  Shield,
  Target,
  TrendingUp,
  Vote,
} from "lucide-react";

interface LeaderCardProps {
  leader: GovernmentLeader;
  compact?: boolean;
}

export function LeaderCard({ leader, compact = false }: LeaderCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [showAmericanScore, setShowAmericanScore] = useState(false);

  const americanScore = useMemo(
    () => calculateLeaderAmericanScore(leader.votingRecord ?? []),
    [leader.votingRecord],
  );

  const partyColors: Record<string, string> = {
    Democrat: "from-blue-500 to-blue-700",
    Republican: "from-red-500 to-red-700",
    Independent: "from-gray-500 to-gray-700",
  };

  const priorityColors: Record<string, string> = {
    safe: "text-green-400 bg-green-400/10",
    competitive: "text-yellow-400 bg-yellow-400/10",
    vulnerable: "text-red-400 bg-red-400/10",
  };

  return (
    <NeuralGlassPanel hoverable intensity="medium">
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
              <Image
                src={leader.imageUrl || "https://placehold.co/64x64/png"}
                alt={leader.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-linear-to-br ${partyColors[leader.party]} border-2 border-gray-900`}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-bold text-lg truncate">{leader.name}</h3>
                <p className="text-gray-400 text-sm">{leader.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-800/50">
                    {leader.state} {leader.district ? `- ${leader.district}` : ""}
                  </span>
                  {leader.aiInsights?.prediction ? (
                    <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[leader.aiInsights.prediction]}`}>
                      {leader.aiInsights.prediction.toUpperCase()}
                    </span>
                  ) : null}
                </div>
              </div>

              <button type="button" onClick={() => setShowAmericanScore(true)} className="group relative">
                <AmericanScoreIndicator
                  score={americanScore.category}
                  value={americanScore.score}
                  size="sm"
                  showLabel={false}
                  interactive={false}
                />
              </button>
            </div>
          </div>
        </div>

        {leader.metrics && (
          <div className="grid grid-cols-2 gap-3">
            <Metric icon={<FileText className="w-4 h-4 text-blue-400" />} label="Bills" value={leader.metrics.billsSponsored} />
            <Metric icon={<Vote className="w-4 h-4 text-green-400" />} label="Attendance" value={`${leader.metrics.voteAttendance}%`} />
            <Metric icon={<Target className="w-4 h-4 text-purple-400" />} label="Bipartisan" value={`${leader.metrics.bipartisanshipScore}/10`} />
            <Metric icon={<TrendingUp className="w-4 h-4 text-yellow-400" />} label="Passed" value={leader.metrics.billsPassed} />
          </div>
        )}

        {!compact && leader.aiInsights && (
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 rounded bg-blue-500/20">
                <Shield className="w-3 h-3 text-blue-400" />
              </div>
              <h4 className="text-sm font-semibold">AI Insights</h4>
            </div>
            <p className="text-gray-400 text-sm line-clamp-2">{leader.aiInsights.priorities?.[0]}</p>
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="text-blue-400 text-xs mt-2 hover:text-blue-300 transition-colors"
            >
              {expanded ? "Show less" : "Show more insights"}
            </button>
          </div>
        )}

        {expanded && !compact && leader.aiInsights && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-3 pt-4 border-t border-white/10"
          >
            <div>
              <h5 className="text-xs font-semibold text-gray-500 mb-1">Key Relationships</h5>
              <div className="flex flex-wrap gap-2">
                {leader.aiInsights.keyRelationships?.slice(0, 3).map((rel) => (
                  <span key={rel} className="text-xs px-2 py-1 rounded-full bg-gray-800/50">
                    {rel}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-xs font-semibold text-gray-500 mb-1">Recent Activity</h5>
              <div className="space-y-2">
                {leader.recentActivity?.slice(0, 2).map((activity) => (
                  <div key={`${leader.id}-${activity.title}`} className="flex items-center justify-between text-sm">
                    <span className="truncate">{activity.title}</span>
                    <span className="text-gray-500 text-xs">{activity.date}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              {leader.contact?.email ? (
                <a
                  href={`mailto:${leader.contact.email}`}
                  className="flex-1 text-center px-3 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors text-sm"
                >
                  Contact
                </a>
              ) : null}
              {leader.contact?.website ? (
                <a
                  href={leader.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm flex items-center justify-center gap-1"
                >
                  Website
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : null}
            </div>
          </motion.div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="text-sm">
            <span className="text-gray-500">Next Election:</span>
            <span className="ml-2 font-medium">{leader.nextElection ?? "TBD"}</span>
          </div>
          <button className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors" aria-label="Message leader">
            <MessageSquare className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      {showAmericanScore && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-950 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-800">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500">American Score Analysis</p>
                  <h3 className="text-2xl font-bold">{leader.name}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAmericanScore(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg"
                  aria-label="Close American score dialog"
                >
                  ✕
                </button>
              </div>

              <PoliticianAmericanScore leader={leader} votingRecord={leader.votingRecord ?? []} />
            </div>
          </div>
        </div>
      )}
    </NeuralGlassPanel>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="p-2 rounded-lg bg-gray-800/60">{icon}</div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-xs text-gray-500">{label}</div>
      </div>
    </div>
  );
}

function calculateLeaderAmericanScore(
  votingRecord: VotingAnalysis[],
): { score: number; category: "american" | "neutral" | "unamerican" } {
  if (!votingRecord.length) {
    return { score: 0, category: "neutral" };
  }

  const avgScore = Math.round(
    votingRecord.reduce((acc, vote) => acc + (vote.americanScore?.overall ?? 50), 0) / votingRecord.length,
  );

  return {
    score: avgScore,
    category: avgScore >= 67 ? "american" : avgScore >= 34 ? "neutral" : "unamerican",
  };
}
