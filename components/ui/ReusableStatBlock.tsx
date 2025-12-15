import React from "react";

interface StatBlockProps {
  value: React.ReactNode;
  label: string;
  sublabel?: string;
  className?: string;
}

export const ReusableStatBlock: React.FC<StatBlockProps> = ({ value, label, sublabel, className = "" }) => (
  <div className={`text-center ${className}`}>
    <div className="text-4xl font-bold text-cyan-400 mb-2">{value}</div>
    <div className="text-sm text-cyan-200">{label}</div>
    {sublabel && <div className="text-xs text-cyan-300 mt-1">{sublabel}</div>}
  </div>
);
