"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Minus, TrendingDown, TrendingUp } from "lucide-react";
import { NeuralGlassPanel } from "@/components/ui/NeuralGlassPanel";

interface NeuralMetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: ReactNode;
  description?: string;
  animateValue?: boolean;
  suffix?: string;
}

export function NeuralMetricCard({
  title,
  value,
  change,
  icon,
  description,
  animateValue = true,
  suffix = "",
}: NeuralMetricCardProps) {
  const formatValue = (val: string | number) => {
    if (typeof val === "number") {
      if (val >= 1_000_000) return `${(val / 1_000_000).toFixed(1)}M`;
      if (val >= 1_000) return `${(val / 1_000).toFixed(1)}K`;
      return val.toLocaleString();
    }
    return val;
  };

  const renderChangeIcon = () => {
    if (change === undefined) return null;
    if (change > 0) return <TrendingUp className="w-4 h-4 mr-1" />;
    if (change < 0) return <TrendingDown className="w-4 h-4 mr-1" />;
    return <Minus className="w-4 h-4 mr-1" />;
  };

  return (
    <NeuralGlassPanel intensity="low" className="h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
            {description ? <p className="text-gray-500 text-xs mt-1">{description}</p> : null}
          </div>
          {icon ? <div className="text-blue-400">{icon}</div> : null}
        </div>

        <div className="flex-1">
          <motion.div
            initial={animateValue ? { opacity: 0, scale: 0.9 } : {}}
            animate={animateValue ? { opacity: 1, scale: 1 } : {}}
            className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            {`${formatValue(value)}${suffix}`}
          </motion.div>
        </div>

        {change !== undefined && (
          <div className="flex items-center mt-4 pt-4 border-t border-white/10">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex items-center text-sm font-medium ${
                change > 0 ? "text-green-400" : change < 0 ? "text-red-400" : "text-gray-400"
              }`}
            >
              {renderChangeIcon()}
              <span>{Math.abs(change)}%</span>
            </motion.div>
            <span className="text-gray-500 text-sm ml-auto">vs last month</span>
          </div>
        )}
      </div>
    </NeuralGlassPanel>
  );
}
