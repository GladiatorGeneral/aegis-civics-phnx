import React from "react";
import { NeuralGlassPanel } from "@/components/ui/NeuralGlassPanel";

export default function FinancialSecurityPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-900 to-slate-800 p-4 md:p-8">
      <div className="max-w-4xl mx-auto py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent mb-3">Integrated Financial Security Architecture</h1>
          <p className="text-slate-200 max-w-2xl mx-auto">A Citizen's Guide to the 12 SRDs — high-level architecture, core mechanisms, and citizen-facing services.</p>
        </div>

        <NeuralGlassPanel className="mb-6">
          <h2 className="text-2xl font-bold text-cyan-300 mb-3">Core Thesis</h2>
          <p className="text-cyan-100">The 12 Systemic Renewal Directorates (SRDs) form an integrated financial security platform designed to attack the cost side of your budget, guarantee a rising income floor, and provide tools for unlimited earning potential. This system is engineered for personal economic resilience.</p>
        </NeuralGlassPanel>

        <NeuralGlassPanel className="mb-6">
          <h3 className="text-xl font-bold text-emerald-400 mb-2">I. THE INCOME FLOOR: UBI & Beyond</h3>
          <p className="text-cyan-100"><b>Primary SRD Engine:</b> SRD 8 (Dynamic Wage & Housing) + SRD 9 (Fiscal Responsibility)</p>

          <h4 className="font-semibold text-cyan-200 mt-3">The Mechanism</h4>
          <p className="text-cyan-100">The <b>National Earned Income Accelerator</b> is a scalable, politically viable precursor to a full UBI. It functions as an automatic, means-tested, federally-administered wage supplement.</p>

          <ul className="list-disc list-inside text-cyan-100 mt-2">
            <li><b>How it works:</b> Income electronically verified; full-time essential workers (<i>30+ hrs/week</i>) whose wages fall below <b>150% of their county's Living Wage</b> receive automatic top-ups via direct deposit.</li>
            <li><b>Living Wage Calculation:</b> SRD 8's Regional Wage & Housing Calculator uses real-time data on housing (SRD 8), childcare (SRD 5), food (SRD 4), healthcare (SRD 3), and transportation (SRD 7) to compute the local living wage.</li>
          </ul>

          <p className="text-cyan-100 mt-3">This approach is pro-work, pro-dignity, and hyper-local — stabilizing community economies and providing predictable, livable income.</p>
        </NeuralGlassPanel>

        <NeuralGlassPanel className="mb-6">
          <h3 className="text-xl font-bold text-emerald-400 mb-2">II. THE INCOME GROWTH ENGINE: Lifelong Education & the Skills Wallet</h3>
          <p className="text-cyan-100"><b>Primary SRD Engine:</b> SRD 2 (Education/Workforce) + SRD 1 (Digital Equity)</p>

          <h4 className="font-semibold text-cyan-200 mt-3">The Mechanism</h4>
          <p className="text-cyan-100">The <b>National Skills Treasury</b> is a lifelong, citizen-owned ledger of capability built on the Clover Chain — a low-energy public-good ledger. Every verified learning milestone is issued as a verifiable "Skill Coin."</p>

          <ul className="list-disc list-inside text-cyan-100 mt-2">
            <li><b>Your Clover Chain Wallet:</b> a portable, verifiable record of credentials that employers can trust without manual verification.</li>
            <li><b>Rewards for Learning:</b> Completing certified training can trigger upskill bounties, Earned Income Accelerator multipliers, and priority job matching on the Talent Exchange.</li>
          </ul>

          <p className="text-cyan-100 mt-3">This gives citizens ownership of human capital and converts education into an ongoing, rewarded investment with transparent ROI.</p>
        </NeuralGlassPanel>

        <NeuralGlassPanel className="mb-6">
          <h3 className="text-xl font-bold text-emerald-400 mb-2">III. THE COST-SIDE ATTACK: Reducing Major Fixed Expenses</h3>
          <p className="text-cyan-100">Integrated SRD action reduces household costs across health, food, housing, and energy.</p>

          <h4 className="text-lg font-semibold text-cyan-200 mt-4">A. Healthcare Reform (SRD 3)</h4>
          <p className="text-cyan-100">The Community Health Navigator and expanded pharmacy care shift care to low-cost settings and emphasize prevention. The Preventative Health API links verified participation in healthy programs to lower premiums.</p>
          <p className="text-cyan-100 mt-2"><b>Financial Impact:</b> Targeted to bend the cost curve; estimated average household savings of $3,000–$5,000 per year from avoided emergencies and lower routine costs.</p>

          <h4 className="text-lg font-semibold text-cyan-200 mt-4">B. Food Security (SRD 4)</h4>
          <p className="text-cyan-100">Community Food Resilience Hubs and the Food Rail app connect surplus and local producers directly to consumers, reducing intermediaries and offering no-waste discounts.</p>
          <p className="text-cyan-100 mt-2"><b>Financial Impact:</b> 25–40% reduction in fresh food outlays while improving nutrition.</p>

          <h4 className="text-lg font-semibold text-cyan-200 mt-4">C. Dynamic Minimum Wage (SRD 8)</h4>
          <p className="text-cyan-100">County-level Living Wage adjustments ensure wages respond to local cost pressures; SRD 8's calculator uses realtime housing, childcare, food, healthcare, and transport data.</p>
          <p className="text-cyan-100 mt-2">This ties incomes to local shelter costs and forces complementary policy responses when localized inflationary shocks occur.</p>
        </NeuralGlassPanel>

        <NeuralGlassPanel className="mb-6">
          <h3 className="text-xl font-bold text-emerald-400 mb-2">IV. THE COMPOUNDING BENEFITS: System Synergies</h3>
          <ul className="list-disc list-inside text-cyan-100">
            <li><b>Childcare (SRD 5):</b> Affordable, high-quality childcare increases labor participation and combined with the Earned Income Accelerator can substantially boost household take-home pay.</li>
            <li><b>Infrastructure & Energy (SRD 7 & 11):</b> Smart roads, community solar, and grid modernization reduce commute and energy costs and prevent costly service disruptions.</li>
            <li><b>Adolescent Development (SRD 6):</b> Investments in youth reduce future crime and social costs, supporting lower property taxes and insurance over time.</li>
            <li><b>Fiscal Transparency (SRD 9):</b> Blockchain-based treasury tools and a Citizen's Budget increase the return on tax dollars by reducing waste.</li>
          </ul>

          <h4 className="text-lg font-semibold text-cyan-200 mt-4">The Citizen's Financial Dashboard (User Experience)</h4>
          <p className="text-cyan-100">Examples of the dashboard after implementation:</p>
          <ul className="list-disc list-inside text-cyan-100">
            <li>Your Earned Income Accelerator shows a $342 top-up this period.</li>
            <li>Your Clover Chain Wallet shows two new Skill Coins and a $500 upskill bounty.</li>
            <li>Your Health & Food Savings Tracker shows $184 saved this month via pharmacy care and Food Hub savings.</li>
            <li>The Community Investment Map highlights new fiber deployment increasing local connectivity.</li>
          </ul>

          <p className="text-cyan-100 mt-3 font-semibold">Conclusion: From Precariousness to Predictable Prosperity — The 12 SRDs guarantee a livable income floor, cut major fixed costs, and deliver tools for continuous income growth and civic agency.</p>
        </NeuralGlassPanel>
      </div>
    </div>
  );
}
