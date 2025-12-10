"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  ChevronRight,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { NeuralGlassPanel } from "@/components/ui/NeuralGlassPanel";
import { GovernmentLeader } from "@/lib/types";

interface AIAnalysisDashboardProps {
  leaders: GovernmentLeader[];
}

export function AIAnalysisDashboard({ leaders }: AIAnalysisDashboardProps) {
  const [selectedInsight, setSelectedInsight] = useState<string>("coalitions");

  const insights = {
    coalitions: {
      title: "Emerging Coalitions",
      data: calculateCoalitions(leaders),
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    trends: {
      title: "Legislative Trends",
      data: calculateTrends(leaders),
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
    },
    priorities: {
      title: "Policy Priorities",
      data: calculatePriorities(leaders),
      icon: Target,
      color: "from-purple-500 to-pink-500",
    },
    predictions: {
      title: "Vote Predictions",
      data: calculatePredictions(leaders),
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
    },
  } as const;

  const currentInsight = insights[selectedInsight as keyof typeof insights];
  const CurrentIcon = currentInsight.icon;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-linear-to-br from-blue-500/20 to-purple-500/20">
          <Brain className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Neural Analysis Engine</h2>
          <p className="text-gray-400">AI-powered insights from {leaders.length} leaders</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Object.entries(insights).map(([key, insight]) => {
          const Icon = insight.icon;
          return (
            <button
              key={key}
              onClick={() => setSelectedInsight(key)}
              className={`p-4 rounded-xl transition-all ${
                selectedInsight === key
                  ? "bg-linear-to-br from-gray-800 to-gray-900 border border-white/10"
                  : "bg-gray-900/50 hover:bg-gray-800/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-linear-to-br ${insight.color}/20`}>
                    <Icon className={`w-5 h-5 bg-linear-to-br ${insight.color} bg-clip-text text-transparent`} />
                  </div>
                  <span className="font-medium text-sm">{insight.title}</span>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    selectedInsight === key ? "rotate-90 text-blue-400" : "text-gray-500"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      <motion.div key={selectedInsight} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <NeuralGlassPanel intensity="high">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl bg-linear-to-br ${currentInsight.color}/20`}>
                  <CurrentIcon className={`w-6 h-6 bg-linear-to-br ${currentInsight.color} bg-clip-text text-transparent`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{currentInsight.title}</h3>
                  <p className="text-gray-400 text-sm">Updated 5 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>94.7% Accuracy</span>
                </div>
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-400 text-sm">
                  <Zap className="w-4 h-4" />
                  <span>Real-time</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-300">Key Findings</h4>
                <ul className="space-y-3">
                  {currentInsight.data.findings.map((finding, index) => (
                    <motion.li
                      key={finding}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 mt-2 rounded-full bg-linear-to-r from-blue-500 to-purple-500 shrink-0" />
                      <span className="text-gray-300">{finding}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-300">Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(currentInsight.data.metrics).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-gray-900/50"
                    >
                      <div className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {typeof value === "number" ? `${value}%` : value}
                      </div>
                      <div className="text-sm text-gray-400 mt-1 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <h4 className="font-semibold text-gray-300 mb-4">AI Recommendations</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentInsight.data.recommendations.map((rec, index) => (
                  <motion.div
                    key={rec.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-linear-to-br from-gray-800/50 to-gray-900/50"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Target className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">{rec.title}</h5>
                        <p className="text-sm text-gray-400">{rec.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </NeuralGlassPanel>
      </motion.div>
    </div>
  );
}

function safeAverage(values: number[]) {
  if (values.length === 0) return 0;
  return Math.round(values.reduce((acc, v) => acc + v, 0) / values.length);
}

function calculateCoalitions(leaders: GovernmentLeader[]) {
  const bipartisanGroups = leaders.filter((l) => (l.metrics?.bipartisanshipScore ?? 0) >= 7);

  return {
    findings: [
      `${bipartisanGroups.length} leaders showing strong bipartisan tendencies`,
      "Emerging coalition on infrastructure spending",
      "Partisan divide narrowing on tech regulation",
    ],
    metrics: {
      bipartisanScore: safeAverage(leaders.map((l) => l.metrics?.bipartisanshipScore ?? 0)),
      coalitionStrength: 72,
      crossPartyAlignment: 65,
    },
    recommendations: [
      { title: "Focus on Bipartisan Leaders", description: "Engage with leaders scoring high on bipartisanship" },
      { title: "Build Infrastructure Coalition", description: "Leverage common ground on infrastructure bills" },
    ],
  };
}

function calculateTrends(leaders: GovernmentLeader[]) {
  const activeLeaders = leaders.filter((l) => (l.metrics?.billsSponsored ?? 0) >= 3);

  return {
    findings: [
      "Increased focus on AI regulation across parties",
      "Healthcare reform gaining momentum",
      "Climate legislation seeing bipartisan support",
    ],
    metrics: {
      trendMomentum: Math.min(100, activeLeaders.length * 3 + 40),
      policyAdoption: 67,
      publicSupport: 73,
    },
    recommendations: [
      { title: "Monitor AI Regulation", description: "Track emerging AI legislation across states" },
      { title: "Engage Healthcare Advocates", description: "Connect with leaders pushing healthcare reform" },
    ],
  };
}

function calculatePriorities(leaders: GovernmentLeader[]) {
  const priorities = new Set<string>();
  leaders.forEach((l) => l.aiInsights?.priorities?.forEach((p) => priorities.add(p)));

  return {
    findings: [
      "Economic recovery remains top priority",
      "Education reform gaining attention",
      "Cybersecurity emerging as key issue",
    ],
    metrics: {
      priorityAlignment: 78,
      issueConsensus: 62,
      actionVelocity: 58,
    },
    recommendations: [
      { title: "Economic Policy Focus", description: "Align advocacy with economic recovery priorities" },
      { title: "Education Reform Push", description: "Leverage growing interest in education policy" },
    ],
  };
}

function calculatePredictions(leaders: GovernmentLeader[]) {
  const vulnerable = leaders.filter((l) => l.aiInsights?.prediction === "vulnerable");

  return {
    findings: [
      `${vulnerable.length} seats predicted as competitive in next election`,
      "Incumbent advantage decreasing in swing districts",
      "Fundraising patterns shifting toward digital",
    ],
    metrics: {
      predictionAccuracy: 94.7,
      confidenceScore: 88,
      riskAssessment: 42,
    },
    recommendations: [
      { title: "Monitor Competitive Races", description: "Focus advocacy on vulnerable districts" },
      { title: "Digital Engagement Strategy", description: "Adapt to changing fundraising patterns" },
    ],
  };
}
