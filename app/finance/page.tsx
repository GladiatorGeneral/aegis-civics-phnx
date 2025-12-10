import { FederalFinanceDashboard } from "@/components/finance/FederalFinanceDashboard";

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-950 to-black text-white">
      <div className="relative overflow-hidden py-10 px-4">
        <div className="absolute inset-0 bg-linear-to-r from-green-500/10 via-blue-500/5 to-purple-500/10" />
        <div className="container mx-auto relative">
          <h1 className="text-5xl font-bold mb-3">
            <span className="bg-linear-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Federal Finance
            </span>
            <span className="text-white ml-3">Dashboard</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Comprehensive overview of US federal government revenue, spending, debt, and major programs for Fiscal Year 2024.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 pb-12">
        <FederalFinanceDashboard />
      </main>
    </div>
  );
}
