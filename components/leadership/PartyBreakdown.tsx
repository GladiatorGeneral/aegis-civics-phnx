"use client";

import { motion } from "framer-motion";
import { PieChart } from "lucide-react";

interface PartyBreakdownProps {
  stats: Record<string, number>;
}

export function PartyBreakdown({ stats }: PartyBreakdownProps) {
  const total = Object.values(stats).reduce((a, b) => a + b, 0);
  const percentages = Object.entries(stats).map(([party, count]) => ({
    party,
    count,
    percentage: total > 0 ? (count / total) * 100 : 0,
  }));

  const partyConfig = {
    Democrat: { color: "bg-blue-500", name: "Democrats" },
    Republican: { color: "bg-red-500", name: "Republicans" },
    Independent: { color: "bg-gray-500", name: "Independents" },
  } as const;

  return (
    <div className="p-4 rounded-lg bg-gray-900/20">
      <div className="flex items-center gap-2 mb-4">
        <PieChart className="w-5 h-5 text-blue-400" />
        <h3 className="font-semibold">Party Composition</h3>
      </div>

      <div className="flex h-4 rounded-full overflow-hidden mb-4">
        {percentages.map(({ party, percentage }) => (
          <motion.div
            key={party}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full ${partyConfig[party as keyof typeof partyConfig]?.color || "bg-gray-700"}`}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {percentages.map(({ party, count, percentage }) => (
          <div key={party} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${partyConfig[party as keyof typeof partyConfig]?.color || "bg-gray-700"}`} />
              <span className="text-sm text-gray-300">{partyConfig[party as keyof typeof partyConfig]?.name || party}</span>
            </div>
            <div className="text-right">
              <div className="font-semibold">{count}</div>
              <div className="text-xs text-gray-500">{percentage.toFixed(1)}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
