"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Clock, ExternalLink, FileText, Radio, Vote } from "lucide-react";
import { NeuralGlassPanel } from "@/components/ui/NeuralGlassPanel";
import { LiveUpdate } from "@/lib/types";

export function LiveUpdatesFeed() {
  const [updates, setUpdates] = useState<LiveUpdate[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const initial: LiveUpdate[] = [
      {
        id: "1",
        type: "vote",
        title: "Infrastructure Investment Act",
        description: "Senate passes with 68-32 vote",
        timestamp: new Date().toISOString(),
        chamber: "senate",
        impact: "high",
        source: "Senate.gov",
      },
      {
        id: "2",
        type: "bill",
        title: "AI Safety Framework introduced",
        description: "Bipartisan bill enters committee review",
        timestamp: new Date().toISOString(),
        chamber: "house",
        impact: "medium",
        source: "GovTrack",
      },
    ];

    setUpdates(initial);

    const es = new EventSource("/api/leadership/updates");

    es.onopen = () => setIsConnected(true);
    es.onerror = () => setIsConnected(false);

    es.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data);
        if (payload.type === "updates" && Array.isArray(payload.data)) {
          setUpdates((prev) => [...payload.data, ...prev].slice(0, 15));
        }
      } catch (err) {
        console.error("SSE parse error", err);
      }
    };

    return () => es.close();
  }, []);

  const filteredUpdates = useMemo(() => {
    return updates.filter((update) => filter === "all" || update.type === filter);
  }, [updates, filter]);

  const typeIcons = {
    vote: Vote,
    bill: FileText,
    speech: AlertCircle,
    hearing: Clock,
    announcement: AlertCircle,
  } as const;

  const typeColors: Record<LiveUpdate["type"], string> = {
    vote: "text-green-400",
    bill: "text-blue-400",
    speech: "text-yellow-400",
    hearing: "text-purple-400",
    announcement: "text-cyan-400",
  };

  const impactColors: Record<LiveUpdate["impact"], string> = {
    low: "bg-gray-500/20",
    medium: "bg-yellow-500/20",
    high: "bg-red-500/20",
    critical: "bg-pink-500/20",
  };

  return (
    <NeuralGlassPanel intensity="medium">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className={`p-2 rounded-lg ${isConnected ? "bg-green-500/20" : "bg-red-500/20"}`}>
                <Radio className={`w-5 h-5 ${isConnected ? "text-green-400" : "text-red-400"}`} />
              </div>
              {isConnected ? (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                />
              ) : null}
            </div>
            <div>
              <h3 className="font-bold">Live Congressional Updates</h3>
              <p className="text-gray-400 text-sm">
                {isConnected ? "Connected to real-time feed" : "Connecting..."}
              </p>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            <Clock className="w-4 h-4 inline mr-1" />
            Updated: Now
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-sm ${
              filter === "all" ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            All Updates
          </button>
          {Object.entries(typeIcons).map(([type, Icon]) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 ${
                filter === type
                  ? "bg-gray-800 text-white border border-gray-700"
                  : "bg-gray-900/50 text-gray-300 hover:bg-gray-800/50"
              }`}
            >
              <Icon className={`w-4 h-4 ${typeColors[type as keyof typeof typeColors]}`} />
              {type.charAt(0).toUpperCase() + type.slice(1)}s
            </button>
          ))}
        </div>

        <div className="space-y-3 max-h-[500px] overflow-y-auto">
          <AnimatePresence>
            {filteredUpdates.map((update, index) => {
              const Icon = typeIcons[update.type];
              return (
                <motion.div
                  key={update.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-gray-900/30 hover:bg-gray-900/50 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${typeColors[update.type]}/20`}>
                      <Icon className={`w-5 h-5 ${typeColors[update.type]}`} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold truncate">{update.title}</h4>
                        <span className="text-xs text-gray-500 whitespace-nowrap">
                          {new Date(update.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </div>

                      <p className="text-gray-400 text-sm mb-3">{update.description}</p>

                      <div className="flex flex-wrap items-center gap-3">
                        {update.chamber ? <span className="text-xs px-2 py-1 rounded-full bg-gray-800">{update.chamber}</span> : null}
                        <span className={`text-xs px-2 py-1 rounded-full ${impactColors[update.impact]}`}>
                          {update.impact} impact
                        </span>
                        <span className="text-xs text-gray-500">{update.source}</span>

                        <a
                          href={update.url || "#"}
                          className="text-xs text-blue-400 hover:text-blue-300 ml-auto flex items-center gap-1"
                        >
                          Details
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredUpdates.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <AlertCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No updates match your filter</p>
            </div>
          ) : null}
        </div>

        <div className="pt-4 border-t border-white/10">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isConnected ? "bg-green-400" : "bg-red-400"}`} />
              <span className={isConnected ? "text-green-400" : "text-red-400"}>
                {isConnected ? "Live Connection" : "Disconnected"}
              </span>
            </div>
            <span className="text-gray-500">{updates.length} updates in feed</span>
          </div>
        </div>
      </div>
    </NeuralGlassPanel>
  );
}
