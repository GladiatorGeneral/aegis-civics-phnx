"use client";

import { VotingAnalysis, GovernmentLeader } from "@/lib/types/leadership";
import { NeuralGlassPanel } from "@/components/ui/NeuralGlassPanel";
import { CheckCircle2, XCircle, MinusCircle, AlertCircle } from "lucide-react";

interface CurrentLegislationProps {
  leader: GovernmentLeader;
}

export function CurrentLegislation({ leader }: CurrentLegislationProps) {
  const votingRecord = leader.votingRecord || [];

  if (votingRecord.length === 0) {
    return (
      <NeuralGlassPanel intensity="low" className="p-6">
        <h3 className="text-xl font-bold mb-4">Current Legislation</h3>
        <p className="text-gray-400">No voting record available for this leader.</p>
      </NeuralGlassPanel>
    );
  }

  // Calculate stats
  const totalVotes = votingRecord.length;
  const alignmentScore = Math.round(
    votingRecord.reduce((acc, vote) => acc + vote.americanScore.overall, 0) / totalVotes
  );

  return (
    <NeuralGlassPanel intensity="medium">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Current Legislation & Voting Record
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Analysis of {leader.name}'s recent legislative activity and American Score alignment.
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="text-right p-3 rounded-lg bg-slate-900/50 border border-white/5">
              <div className="text-xs text-gray-400 uppercase tracking-wide">Avg Alignment</div>
              <div className={`text-2xl font-bold ${getScoreColor(alignmentScore)}`}>
                {alignmentScore}/100
              </div>
            </div>
            <div className="text-right p-3 rounded-lg bg-slate-900/50 border border-white/5">
              <div className="text-xs text-gray-400 uppercase tracking-wide">Tracked Votes</div>
              <div className="text-2xl font-bold text-white">
                {totalVotes}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {votingRecord.map((vote) => (
            <div 
              key={vote.billId} 
              className="group p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:bg-slate-800/60 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {vote.billId.toUpperCase()}
                    </span>
                    {vote.impact === "high" && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> High Impact
                      </span>
                    )}
                  </div>
                  <h4 className="font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {vote.billTitle}
                  </h4>
                </div>

                <div className="flex items-center gap-6 w-full md:w-auto mt-2 md:mt-0 justify-between md:justify-end">
                  <div className="flex flex-col items-end min-w-[80px]">
                    <span className="text-xs text-gray-500 mb-1">Position</span>
                    <div className="flex items-center gap-2">
                      {getVoteIcon(vote.vote)}
                      <span className={`capitalize font-bold ${getVoteColor(vote.vote)}`}>
                        {vote.vote}
                      </span>
                    </div>
                  </div>

                  <div className="h-8 w-px bg-slate-700 hidden md:block" />

                  <div className="flex flex-col items-end min-w-[80px]">
                    <span className="text-xs text-gray-500 mb-1">Score</span>
                    <div className={`font-mono font-bold text-lg ${getScoreColor(vote.americanScore.overall)}`}>
                      {vote.americanScore.overall}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Detailed Breakdown - Only visible on hover or if important */}
              <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-3 gap-2 text-center text-xs text-gray-400 opacity-60 group-hover:opacity-100 transition-opacity">
                <div>
                  <span className="block mb-1">Benefit Scope</span>
                  <span className={`font-bold ${getScoreColor(vote.americanScore.breakdown.benefitScope)}`}>
                    {vote.americanScore.breakdown.benefitScope}%
                  </span>
                </div>
                <div>
                  <span className="block mb-1">Domestic Focus</span>
                  <span className={`font-bold ${getScoreColor(vote.americanScore.breakdown.foreignImpact)}`}>
                    {vote.americanScore.breakdown.foreignImpact}%
                  </span>
                </div>
                <div>
                  <span className="block mb-1">Transparency</span>
                  <span className={`font-bold ${getScoreColor(vote.americanScore.breakdown.transparency)}`}>
                    {vote.americanScore.breakdown.transparency}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </NeuralGlassPanel>
  );
}

function getVoteColor(vote: string) {
  switch (vote.toLowerCase()) {
    case "yea": return "text-green-400";
    case "nay": return "text-red-400";
    default: return "text-gray-400";
  }
}

function getVoteIcon(vote: string) {
  switch (vote.toLowerCase()) {
    case "yea": return <CheckCircle2 className="w-5 h-5 text-green-400" />;
    case "nay": return <XCircle className="w-5 h-5 text-red-400" />;
    default: return <MinusCircle className="w-5 h-5 text-gray-400" />;
  }
}

function getScoreColor(score: number) {
  if (score >= 70) return "text-green-400";
  if (score >= 40) return "text-yellow-400";
  return "text-red-400";
}
