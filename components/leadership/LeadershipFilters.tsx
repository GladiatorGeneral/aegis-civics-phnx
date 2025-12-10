"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import { GovernmentLeader } from "@/lib/types";

interface LeadershipFiltersProps {
  onPartyChange: (party: string) => void;
  onStateChange: (state: string) => void;
  leaders: GovernmentLeader[];
  currentParty: string;
  currentState: string;
}

export function LeadershipFilters({
  onPartyChange,
  onStateChange,
  leaders,
  currentParty,
  currentState,
}: LeadershipFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  const parties = Array.from(new Set(leaders.map((l) => l.party)));
  const states = Array.from(new Set(leaders.map((l) => l.state))).sort();

  return (
    <div className="space-y-4">
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
      >
        <Filter className="w-4 h-4" />
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      {showFilters ? (
        <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg bg-gray-900/30 backdrop-blur-sm">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-400 mb-2">Political Party</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onPartyChange("all")}
                className={`px-3 py-1.5 rounded-lg text-sm ${
                  currentParty === "all"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                } transition-colors`}
              >
                All Parties
              </button>
              {parties.map((party) => (
                <button
                  key={party}
                  onClick={() => onPartyChange(party)}
                  className={`px-3 py-1.5 rounded-lg text-sm ${
                    currentParty === party
                      ? party === "Democrat"
                        ? "bg-blue-500 text-white"
                        : party === "Republican"
                        ? "bg-red-500 text-white"
                        : "bg-gray-500 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  } transition-colors`}
                >
                  {party}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-400 mb-2">State / Territory</label>
            <select
              value={currentState}
              onChange={(e) => onStateChange(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All States & Territories</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : null}
    </div>
  );
}
