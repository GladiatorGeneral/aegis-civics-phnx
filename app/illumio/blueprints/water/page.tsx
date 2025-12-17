import React from "react";
import { NeuralGlassPanel } from "@/components/ui/NeuralGlassPanel";
import { WaterStats } from "@/components/illumio/WaterStats";
import { NanoparticleTable } from "@/components/illumio/NanoparticleTable";
import { DesalinationDiagram } from "@/components/illumio/DesalinationDiagram";
import { ProductTierTable } from "@/components/illumio/ProductTierTable";

export default function WaterSecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-slate-900 p-0 md:p-8">
      <div className="max-w-4xl mx-auto py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 drop-shadow-lg">Water Security: Blueprint</h1>
          <p className="text-cyan-200 text-lg max-w-2xl mx-auto">This page outlines the strategy for water infrastructure, public health, and policy solutions to ensure safe, resilient water systems.</p>
        </div>

        <NeuralGlassPanel className="mb-6">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">Water Infrastructure & Public Health</h2>
          <p className="text-cyan-100">Targeted investments in treatment, pipe replacement, and monitoring reduce contamination risks and protect communities.</p>
        </NeuralGlassPanel>
        <NeuralGlassPanel className="mb-6">
          <h3 className="text-xl font-semibold text-cyan-200 mb-3">Key Metrics</h3>
          <WaterStats />
        </NeuralGlassPanel>

        <NeuralGlassPanel className="mb-6">
          <h3 className="text-xl font-semibold text-cyan-200 mb-3">Desalination & Treatment Flow</h3>
          <DesalinationDiagram />
          <p className="text-cyan-100 mt-3">Diagram showing intake → treatment → distribution; modular RO units with brine management and energy recovery.</p>
        </NeuralGlassPanel>

        <NeuralGlassPanel className="mb-6">
          <h3 className="text-xl font-semibold text-cyan-200 mb-3">Nanoparticle Remediation Options</h3>
          <NanoparticleTable />
        </NeuralGlassPanel>

        <NeuralGlassPanel className="mb-6">
          <h3 className="text-xl font-semibold text-cyan-200 mb-3">Product Tiers</h3>
          <ProductTierTable />
        </NeuralGlassPanel>
      </div>
    </div>
  );
}
