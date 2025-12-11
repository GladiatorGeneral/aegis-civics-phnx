"use client";

import { useState } from "react";
import type { SystemicRenewalDirectorate } from "@/lib/data/systemic-renewal";
import { 
  TrendingUp, TrendingDown, Minus, 
  CheckCircle2, Clock, PlayCircle, Target,
  DollarSign, Calendar, Network, BarChart3
} from "lucide-react";

interface Props {
  directorates: SystemicRenewalDirectorate[];
}

export function SystemicRenewalDashboard({ directorates }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSRD, setSelectedSRD] = useState<SystemicRenewalDirectorate | null>(null);

  const categories = [
    { value: "all", label: "All Directorates", color: "gray" },
    { value: "infrastructure", label: "Infrastructure", color: "blue" },
    { value: "social", label: "Social", color: "emerald" },
    { value: "economic", label: "Economic", color: "purple" },
    { value: "governance", label: "Governance", color: "cyan" }
  ];

  const filteredDirectorates = selectedCategory === "all" 
    ? directorates 
    : directorates.filter(d => d.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational": return "text-emerald-400 bg-emerald-500/10 border-emerald-500/30";
      case "scaling": return "text-blue-400 bg-blue-500/10 border-blue-500/30";
      case "pilot": return "text-purple-400 bg-purple-500/10 border-purple-500/30";
      default: return "text-gray-400 bg-gray-500/10 border-gray-500/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational": return <CheckCircle2 className="w-4 h-4" />;
      case "scaling": return <TrendingUp className="w-4 h-4" />;
      case "pilot": return <PlayCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "improving": return <TrendingUp className="w-4 h-4 text-emerald-400" />;
      case "declining": return <TrendingDown className="w-4 h-4 text-red-400" />;
      default: return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "infrastructure": return "from-blue-500/20 to-blue-600/10 border-blue-500/30";
      case "social": return "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30";
      case "economic": return "from-purple-500/20 to-purple-600/10 border-purple-500/30";
      case "governance": return "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30";
      default: return "from-gray-500/20 to-gray-600/10 border-gray-500/30";
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-4 py-2 rounded-lg border transition-all ${
              selectedCategory === cat.value
                ? `border-${cat.color}-500 bg-${cat.color}-500/10 text-${cat.color}-400`
                : "border-gray-700 bg-slate-900/50 text-gray-400 hover:border-gray-600"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* SRD Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredDirectorates.map((srd) => (
          <div
            key={srd.id}
            onClick={() => setSelectedSRD(srd)}
            className={`relative bg-linear-to-br ${getCategoryColor(srd.category)} border rounded-xl p-6 cursor-pointer transition-all hover:scale-[1.02] hover:shadow-xl`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-gray-400">SRD {srd.id}</span>
                  <span className={`px-2 py-1 rounded-full text-xs border flex items-center gap-1 ${getStatusColor(srd.status)}`}>
                    {getStatusIcon(srd.status)}
                    {srd.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{srd.shortName}</h3>
                <p className="text-sm text-gray-300">{srd.description}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Progress</span>
                <span className="font-semibold">{srd.progress}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-linear-to-r from-emerald-500 to-blue-500 transition-all"
                  style={{ width: `${srd.progress}%` }}
                />
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-slate-900/50 rounded-lg p-3">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                  <DollarSign className="w-3 h-3" />
                  Investment
                </div>
                <div className="text-lg font-bold text-white">${srd.totalInvestment}B</div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                  <Calendar className="w-3 h-3" />
                  Timeframe
                </div>
                <div className="text-lg font-bold text-white">{srd.timeframe}</div>
              </div>
            </div>

            {/* Top Metric */}
            {srd.metrics[0] && (
              <div className="bg-slate-900/30 rounded-lg p-3 border border-slate-700/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">{srd.metrics[0].name}</span>
                  {getTrendIcon(srd.metrics[0].trend)}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">
                    {srd.metrics[0].current}{srd.metrics[0].unit}
                  </span>
                  <span className="text-sm text-gray-400">
                    / {srd.metrics[0].target}{srd.metrics[0].unit}
                  </span>
                </div>
                <div className="mt-2 h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500"
                    style={{ 
                      width: `${Math.min(100, (srd.metrics[0].current / srd.metrics[0].target) * 100)}%` 
                    }}
                  />
                </div>
              </div>
            )}

            {/* Dependencies Badge */}
            {srd.dependencies.length > 0 && (
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                <Network className="w-3 h-3" />
                <span>Depends on SRD {srd.dependencies.join(", ")}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Detailed View Modal */}
      {selectedSRD && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSRD(null)}
        >
          <div 
            className="bg-slate-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-linear-to-br ${getCategoryColor(selectedSRD.category)} border-b border-gray-700 p-6`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-mono text-gray-400">SRD {selectedSRD.id}</span>
                    <span className={`px-3 py-1 rounded-full text-sm border flex items-center gap-2 ${getStatusColor(selectedSRD.status)}`}>
                      {getStatusIcon(selectedSRD.status)}
                      {selectedSRD.status}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-gray-700/50 text-gray-300 capitalize">
                      {selectedSRD.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedSRD.name}</h2>
                  <p className="text-gray-300 text-lg">{selectedSRD.description}</p>
                </div>
                <button
                  onClick={() => setSelectedSRD(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Problem Statement */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <div className="text-red-400 font-semibold mb-2">Problem Statement</div>
                <p className="text-gray-300 text-sm">{selectedSRD.problemStatement}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Phases */}
              <section>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  Implementation Phases
                </h3>
                <div className="space-y-3">
                  {selectedSRD.phases.map((phase, idx) => (
                    <div 
                      key={idx}
                      className={`bg-slate-800/50 border rounded-lg p-4 ${
                        phase.status === 'completed' ? 'border-emerald-500/30' :
                        phase.status === 'in-progress' ? 'border-blue-500/30' :
                        'border-gray-700'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-white">{phase.name}</span>
                            {phase.status === 'completed' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                            {phase.status === 'in-progress' && <PlayCircle className="w-4 h-4 text-blue-400" />}
                          </div>
                          <p className="text-sm text-gray-400">{phase.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-white">${phase.cost}B</div>
                          <div className="text-xs text-gray-400">{phase.timeline}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Metrics Grid */}
              <section>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-emerald-400" />
                  Performance Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedSRD.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-slate-800/50 border border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium text-white">{metric.name}</span>
                        {getTrendIcon(metric.trend)}
                      </div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl font-bold text-white">
                          {metric.current}
                        </span>
                        <span className="text-gray-400">{metric.unit}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400 mb-2">
                        <span>Baseline: {metric.baseline}{metric.unit}</span>
                        <span>Target: {metric.target}{metric.unit}</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all ${
                            metric.trend === 'improving' ? 'bg-emerald-500' :
                            metric.trend === 'declining' ? 'bg-red-500' :
                            'bg-gray-500'
                          }`}
                          style={{ 
                            width: `${Math.min(100, Math.abs((metric.current - metric.baseline) / (metric.target - metric.baseline)) * 100)}%` 
                          }}
                        />
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        {Math.abs(metric.current - metric.baseline).toFixed(1)}{metric.unit} change from baseline
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Legislative Actions */}
              <section>
                <h3 className="text-xl font-bold text-white mb-4">Required Legislative Actions</h3>
                <div className="space-y-2">
                  {selectedSRD.legislativeActions.map((action, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-800/30 rounded-lg p-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                      <span className="text-gray-300">{action}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Web Integration */}
              <section>
                <h3 className="text-xl font-bold text-white mb-4">Digital Platform Integration</h3>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="font-semibold text-blue-400 mb-2">{selectedSRD.webIntegration.platform}</div>
                  <p className="text-gray-300 text-sm">{selectedSRD.webIntegration.description}</p>
                </div>
              </section>

              {/* Dependencies */}
              {selectedSRD.dependencies.length > 0 && (
                <section>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Network className="w-5 h-5 text-purple-400" />
                    Cross-Directorate Dependencies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedSRD.dependencies.map((depId) => {
                      const dep = directorates.find(d => d.id === depId);
                      return dep ? (
                        <div key={depId} className="bg-purple-500/10 border border-purple-500/30 rounded-lg px-3 py-2">
                          <span className="text-xs text-gray-400">SRD {dep.id}</span>
                          <div className="text-sm font-medium text-white">{dep.shortName}</div>
                        </div>
                      ) : null;
                    })}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
