"use client";
import React from "react";

interface MetricBadgeProps {
  label: string;
  size?: number;
  fill?: string;
  textFill?: string;
  variant?: "circle" | "rect";
  rectWidth?: number;
  rectHeight?: number;
}

export function MetricBadge({ label, size = 80, fill = "#164e63", textFill = "#67e8f9", variant = "circle", rectWidth = 100, rectHeight = 40 }: MetricBadgeProps) {
  if (variant === "rect") {
    return (
      <svg width={rectWidth} height={rectHeight} aria-label={label} className="mt-2">
        <rect x="0" y="0" width={rectWidth - 0} height={rectHeight} fill={fill} rx="10" />
        <text x="50%" y="55%" textAnchor="middle" fill={textFill} fontSize="16">{label}</text>
      </svg>
    );
  }

  const r = Math.floor(size / 2 - 5);
  return (
    <svg width={size} height={size} aria-label={label} className="mt-2">
      <circle cx={size / 2} cy={size / 2} r={r} fill={fill} />
      <text x="50%" y="55%" textAnchor="middle" fill={textFill} fontSize={Math.floor(size / 5)}>{label}</text>
    </svg>
  );
}
