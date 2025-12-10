"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  BarChart3,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { NeuralGlassPanel } from "@/components/ui/NeuralGlassPanel";
import { Goal, GoalStatus } from "@/lib/types";

interface GoalTrackerProps {
  goals: Goal[];
  title?: string;
  showFilters?: boolean;
}

export function GoalTracker({ goals, title = "Strategic Goals", showFilters = true }: GoalTrackerProps) {
  const [filter, setFilter] = useState<GoalStatus | "all">("all");
  const [sortedGoals, setSortedGoals] = useState<Goal[]>([]);

  useEffect(() => {
    const filtered = goals
      .filter((goal) => filter === "all" || goal.status === filter)
      .sort((a, b) => {
        if (a.priority !== b.priority) return b.priority - a.priority;
        if (a.deadline !== b.deadline)
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        return a.progress - b.progress;
      });
    setSortedGoals(filtered);
  }, [goals, filter]);

  const overallProgress = goals.length > 0 ? goals.reduce((acc, goal) => acc + goal.progress, 0) / goals.length : 0;

  const statusCounts = {
    "on-track": goals.filter((g) => g.status === "on-track").length,
    "at-risk": goals.filter((g) => g.status === "at-risk").length,
    completed: goals.filter((g) => g.status === "completed").length,
  };

  const statusIcons = {
    "on-track": CheckCircle,
    "at-risk": AlertCircle,
    completed: CheckCircle,
    upcoming: Clock,
  } as const;

  const statusColors = {
    "on-track": "text-green-400",
    "at-risk": "text-yellow-400",
    completed: "text-blue-400",
    upcoming: "text-gray-400",
  } as const;

  const statusBgColors = {
    "on-track": "bg-green-400/10",
    "at-risk": "bg-yellow-400/10",
    completed: "bg-blue-400/10",
    upcoming: "bg-gray-400/10",
  } as const;

  return (
    <NeuralGlassPanel intensity="medium">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-gray-400 text-sm">
                {goals.length} total goals • {statusCounts.completed} completed
              </p>
            </div>
          </div>

          <div className="text-right">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              {Math.round(overallProgress)}%
            </div>
            <div className="text-gray-500 text-sm">Overall Progress</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Tracked Progress</span>
            <span className="font-medium">{Math.round(overallProgress)}%</span>
          </div>
          <div className="h-3 rounded-full bg-gray-800 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${overallProgress}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"
            />
          </div>
        </div>

        {showFilters ? (
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                filter === "all" ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              All Goals ({goals.length})
            </button>
            {Object.entries(statusCounts).map(([status, count]) => {
              const Icon = statusIcons[status as keyof typeof statusIcons];
              return (
                <button
                  key={status}
                  onClick={() => setFilter(status as GoalStatus)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                    filter === status
                      ? status === "on-track"
                        ? "bg-green-500/20 text-green-400 border border-green-500/20"
                        : status === "at-risk"
                        ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/20"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/20"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {status.replace("-", " ")} ({count})
                </button>
              );
            })}
          </div>
        ) : null}

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {sortedGoals.map((goal, index) => {
              const Icon = statusIcons[goal.status];
              return (
                <motion.div
                  key={goal.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors group">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${statusBgColors[goal.status]} ${statusColors[goal.status]}`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-lg truncate">{goal.title}</h3>
                          <div className="flex items-center gap-2">
                            {goal.priority >= 8 ? (
                              <span className="px-2 py-1 rounded-full text-xs bg-red-500/20 text-red-400">High Priority</span>
                            ) : null}
                            <span className="text-sm text-gray-500">
                              Due: {new Date(goal.deadline).toLocaleDateString()}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-400 mb-4">{goal.description}</p>

                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Progress</span>
                            <span className="font-medium">{goal.progress}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${goal.progress}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className={`h-full ${
                                goal.status === "completed"
                                  ? "bg-green-500"
                                  : goal.status === "on-track"
                                  ? "bg-blue-500"
                                  : goal.status === "at-risk"
                                  ? "bg-yellow-500"
                                  : "bg-gray-500"
                              }`}
                            />
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                          <div className="flex flex-wrap gap-2">
                            {goal.tags.map((tag) => (
                              <span key={tag} className="px-2 py-1 rounded-full text-xs bg-gray-800/50 text-gray-300">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-4 ml-auto">
                            <div className="flex items-center gap-1 text-sm">
                              <TrendingUp className="w-4 h-4 text-blue-400" />
                              <span className="text-gray-300">{goal.metrics.impactScore}/10</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                              <BarChart3 className="w-4 h-4 text-purple-400" />
                              <span className="text-gray-300">{goal.metrics.difficulty}/10</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                              <Zap className="w-4 h-4 text-yellow-400" />
                              <span className="text-gray-300">{goal.metrics.urgency}/10</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </NeuralGlassPanel>
  );
}
