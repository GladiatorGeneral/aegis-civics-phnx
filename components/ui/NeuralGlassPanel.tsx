"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface NeuralGlassPanelProps {
  children: ReactNode;
  intensity?: "low" | "medium" | "high";
  hoverable?: boolean;
  className?: string;
}

export function NeuralGlassPanel({
  children,
  intensity = "medium",
  hoverable = true,
  className = "",
}: NeuralGlassPanelProps) {
  const intensityMap = {
    low: "bg-gray-900/20 backdrop-blur-md",
    medium: "bg-gray-900/30 backdrop-blur-lg",
    high: "bg-gray-900/40 backdrop-blur-xl",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={
        hoverable
          ? {
              scale: 1.02,
              boxShadow:
                "0 20px 60px rgba(0, 243, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }
          : {}
      }
      className={`group relative rounded-2xl border border-white/10 ${intensityMap[intensity]} shadow-[0_8px_32px_rgba(0,0,0,0.3)] ${
        hoverable ? "transition-all duration-300" : ""
      } ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(0,243,255,0.05)_50%,transparent_51%)] bg-size-[50px_50px]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_49%,rgba(185,103,255,0.05)_50%,transparent_51%)] bg-size-[50px_50px]" />
      </div>

      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/5 to-purple-500/5" />

      <div className="relative z-10 p-6">{children}</div>

      <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-blue-500/20 via-transparent to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}
