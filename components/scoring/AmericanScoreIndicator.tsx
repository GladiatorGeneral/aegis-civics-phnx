"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Info, MinusCircle } from "lucide-react";

interface AmericanScoreIndicatorProps {
  score: "american" | "neutral" | "unamerican";
  value: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  showDetails?: boolean;
}

export function AmericanScoreIndicator({
  score,
  value,
  size = "md",
  showLabel = true,
  showDetails = false,
}: AmericanScoreIndicatorProps) {
  const [expanded, setExpanded] = useState(false);

  const config = {
    american: {
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      textColor: "text-green-400",
      bgColor: "bg-green-500/10",
      icon: CheckCircle,
      label: "For All Americans",
    },
    neutral: {
      color: "bg-gradient-to-r from-yellow-500 to-amber-500",
      textColor: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      icon: MinusCircle,
      label: "Mixed Impact",
    },
    unamerican: {
      color: "bg-gradient-to-r from-red-500 to-rose-500",
      textColor: "text-red-400",
      bgColor: "bg-red-500/10",
      icon: AlertTriangle,
      label: "Special Interests",
    },
  };

  const currentConfig = config[score];
  const Icon = currentConfig.icon;

  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className={`flex items-center gap-2 p-2 rounded-lg ${currentConfig.bgColor} hover:opacity-90 transition-opacity`}
      >
        <div className="relative">
          <div className={`w-4 h-4 rounded-full ${currentConfig.color} animate-pulse`} />
          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            {showLabel && (
              <span className={`font-medium ${currentConfig.textColor} ${sizeClasses[size]}`}>
                {currentConfig.label}
              </span>
            )}
            <span className="text-gray-300 font-bold">{Math.round(value)}%</span>
          </div>
          <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.max(0, Math.min(100, value))}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`h-full ${currentConfig.color}`}
            />
          </div>
        </div>

        <Icon className={`w-5 h-5 ${currentConfig.textColor}`} />
      </button>

      {expanded && showDetails && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-50 mt-2 w-80 rounded-xl bg-gray-900 border border-gray-800 shadow-2xl"
        >
          <div className="p-4 space-y-3">
            <h4 className="font-bold flex items-center gap-2">
              <Info className="w-4 h-4" />
              American Scale Analysis
            </h4>

            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center justify-between">
                <span>Benefit Scope</span>
                <span className="font-bold text-green-400">84%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Foreign Impact</span>
                <span className="font-bold text-yellow-400">42%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Transparency</span>
                <span className="font-bold text-red-400">23%</span>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-800 text-sm text-gray-400">
              This bill primarily benefits
              {" "}
              {value > 66 ? "all Americans" : value > 33 ? "mixed interests" : "special interests"}.
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
