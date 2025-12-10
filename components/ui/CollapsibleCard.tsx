"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleCardProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
  badge?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function CollapsibleCard({
  title,
  subtitle,
  icon,
  defaultOpen = false,
  children,
  badge,
  gradientFrom = "blue-500",
  gradientTo = "purple-500",
}: CollapsibleCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-linear-to-br from-gray-900/80 to-gray-800/50 border border-white/10 overflow-hidden"
    >
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-4">
          {icon && (
            <div className={`p-3 rounded-xl bg-linear-to-br from-${gradientFrom} to-${gradientTo}`}>
              {icon}
            </div>
          )}
          <div className="text-left">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              {badge && (
                <span className={`px-3 py-1 text-sm font-semibold rounded-full bg-linear-to-r from-${gradientFrom} to-${gradientTo} text-white`}>
                  {badge}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-gray-400 mt-1">{subtitle}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <ChevronUp className="w-6 h-6 text-gray-400" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-400" />
            )}
          </motion.div>
        </div>
      </button>

      {/* Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-white/5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
