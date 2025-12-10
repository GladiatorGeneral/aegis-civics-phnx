"use client";

import { motion } from "framer-motion";
import { Globe, Shield, Smartphone, TrendingUp, Users, Zap } from "lucide-react";

interface AmericanScoreMobileProps {
  leaderName?: string;
  score?: number;
}

export function AmericanScoreMobile({ leaderName = "Leader", score = 84 }: AmericanScoreMobileProps) {
  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
            <Smartphone className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="font-bold">American Score</h3>
            <p className="text-gray-400 text-sm">{leaderName}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-green-400">{score}</div>
          <div className="text-gray-500 text-xs">/100</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <StatTile label="Benefit" value="92%" icon={<Users className="w-4 h-4 text-blue-400" />} />
        <StatTile label="Foreign" value="78%" icon={<Globe className="w-4 h-4 text-purple-400" />} />
        <StatTile label="Transparency" value="65%" icon={<Shield className="w-4 h-4 text-yellow-400" />} />
        <StatTile
          label="Trend"
          value={
            <span className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              +12%
            </span>
          }
          icon={<Zap className="w-4 h-4 text-green-400" />}
        />
      </div>

      <div className="h-4 rounded-full bg-gray-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1 }}
          className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"
        />
      </div>

      <div className="flex gap-2">
        <button className="flex-1 px-4 py-3 rounded-xl bg-blue-500/20 text-blue-400 font-medium">View Details</button>
        <button className="flex-1 px-4 py-3 rounded-xl bg-gray-800 text-gray-300 font-medium">Compare</button>
      </div>
    </div>
  );
}

function StatTile({ label, value, icon }: { label: string; value: React.ReactNode; icon: React.ReactNode }) {
  return (
    <div className="p-3 rounded-xl bg-gray-900/50">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}
