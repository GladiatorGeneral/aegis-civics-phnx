'use client';

import React from 'react';
import RevenueProfitGrowthChart from '@/components/charts/RevenueProfitGrowthChart';
import RevenueStreamEvolutionChart from '@/components/charts/RevenueStreamEvolutionChart';
import CashFlowVsDebtChart from '@/components/charts/CashFlowVsDebtChart';
import CashFlowProjectionChart from '@/components/charts/CashFlowProjectionChart';
import KPIBarChart from '@/components/charts/KPIBarChart';
import CapexBreakdownChart from '@/components/charts/CapexBreakdownChart';
import RiskRadarChart from '@/components/charts/RiskRadarChart';

export default function FoodSecurityPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 p-0 md:p-8">
      <div className="max-w-4xl mx-auto py-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 drop-shadow-lg">
            Food Security: Nexus Agritech Innovations
          </h1>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4" />
          <p className="text-lg text-cyan-200 font-medium">Business Plan & Loan Application</p>
        </div>
        <div className="prose prose-invert prose-lg max-w-none text-cyan-100">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">BUSINESS PLAN: NEXUS AGRITECH INNOVATIONS</h2>
          <p className="mb-2"><b>Loan Application:</b> $6,000,000 &nbsp;|&nbsp; <b>Term:</b> 7 Years &nbsp;|&nbsp; <b>Interest:</b> 6.5%</p>

          <h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">EXECUTIVE SUMMARY</h3>
          <p>Nexus Agritech Innovations presents a diversified 130-acre agricultural operation integrating conventional farming, multi-species aquaculture, and advanced greenhouse production. Seeking $6,000,000 financing to establish operations with strong projected returns and multiple revenue streams.</p>

          <h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">FINANCIAL HIGHLIGHTS</h3>
          <div className="bg-cyan-900/40 rounded-lg p-4 mb-4">
            <RevenueProfitGrowthChart />
            <div className="text-xs text-cyan-200 mt-2 text-center">REVENUE & PROFIT GROWTH PROJECTION</div>
          </div>

          <h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">PROPERTY LAYOUT & ASSET ALLOCATION</h3>
          <pre className="bg-cyan-900/40 rounded-lg p-4 text-cyan-100 overflow-x-auto text-sm mb-4">
130-ACRE OPERATIONAL MAP
┌─────────────────────────────────────────────────┐
│               ENTRANCE & ADMINISTRATION         │
│  Office │ Maintenance │ Processing │ Cold Storage│
├─────────────────────────────────────────────────┤
│             20,000 SQ FT GREENHOUSE             │
│  Tomatoes │ Berries │ Peppers │ Herbs │ Microgreens│
├─────────────────────────────────────────────────┤
│             100 ACRES CONVENTIONAL FARMING      │
│   40ac Corn  │ 30ac Soybeans │ 20ac Wheat       │
│   5ac Pumpkins │ 5ac Cover Crops (Carbon Credits)│
├─────────────────────────────────────────────────┤
│              30 ACRES WATER FARMING             │
│Freshwater: Tilapia, Barramundi, Prawns          │
│Saltwater: Shrimp, Oysters, Striped Bass         │
│Seaweed: Kelp, Sea Lettuce, Gracilaria           │
└─────────────────────────────────────────────────┘
          </pre>

          <h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">FARMING & PRODUCTION STRATEGY</h3>
          <p className="mb-2">Our approach combines traditional and innovative methods to ensure sustainability and productivity:</p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-1">Utilization of high-yield, disease-resistant crop varieties.</li>
            <li className="mb-1">Implementation of precision agriculture technologies for optimal resource management.</li>
            <li className="mb-1">Integration of aquaponics and hydroponics in greenhouse operations.</li>
            <li className="mb-1">Adoption of regenerative agriculture practices in conventional farming areas.</li>
          </ul>

          <h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">MARKETING & SALES STRATEGY</h3>
          <p className="mb-2">We aim to capture both local and international markets through:</p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-1">Direct-to-consumer sales via online platforms and farm shops.</li>
            <li className="mb-1">Partnerships with grocery chains and restaurants.</li>
            <li className="mb-1">Participation in agricultural fairs and expos to showcase our products.</li>
            <li className="mb-1">Export of premium products to overseas markets.</li>
          </ul>

          <h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">SUSTAINABILITY & COMMUNITY IMPACT</h3>
          <p className="mb-2">Our commitment extends beyond business; we aim to make a positive impact through:</p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-1">Creation of local job opportunities across various skill levels.</li>
            <li className="mb-1">Provision of training and development programs in modern agricultural techniques.</li>
            <li className="mb-1">Engagement in community development projects and partnerships.</li>
            <li className="mb-1">Commitment to environmentally sustainable practices and carbon footprint reduction.</li>
          </ul>

          <h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">FUNDING ALLOCATION</h3>
          <p className="mb-2">The sought funding of $6,000,000 will be allocated as follows:</p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-1">$2,000,000 for land acquisition and development.</li>
            <li className="mb-1">$1,500,000 for greenhouse construction and equipment.</li>
            <li className="mb-1">$1,000,000 for aquaculture facilities and stock.</li>
            <li className="mb-1">$500,000 for initial operating expenses.</li>
            <li className="mb-1">$1,000,000 for marketing, sales, and working capital.</li>
          </ul>

          <h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">CONCLUSION</h3>
          <p className="mb-2">Nexus Agritech Innovations is poised to become a leader in the agritech industry, setting benchmarks in productivity, sustainability, and community engagement. We invite you to be a part of this transformative journey towards a sustainable and food-secure future.</p>

          <h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">REVENUE STREAM EVOLUTION</h3>
          <div className="bg-cyan-900/40 rounded-lg p-4 mb-4">
            <RevenueStreamEvolutionChart />
            <div className="text-xs text-cyan-200 mt-2 text-center">DIVERSIFIED REVENUE BREAKDOWN ($ MILLIONS)</div>
          </div>

          <h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">LOAN REPAYMENT SCHEDULE</h3>
          <div className="bg-cyan-900/40 rounded-lg p-4 mb-4">
            <CashFlowVsDebtChart />
            <div className="text-xs text-cyan-200 mt-2 text-center">CASH FLOW VS DEBT SERVICE ($ MILLIONS)</div>
          </div>

          <h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">KEY PERFORMANCE INDICATORS</h3>
          <div className="bg-cyan-900/40 rounded-lg p-4 mb-4">
            <KPIBarChart />
            <div className="text-xs text-cyan-200 mt-2 text-center">OPERATIONAL EFFICIENCY METRICS</div>
          </div>

          <h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">CAPITAL EXPENDITURE BREAKDOWN</h3>
          <div className="bg-cyan-900/40 rounded-lg p-4 mb-4">
            <CapexBreakdownChart />
            <div className="text-xs text-cyan-200 mt-2 text-center">EQUIPMENT & INFRASTRUCTURE ($ MILLIONS)</div>
          </div>

          <h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">RISK ASSESSMENT & MITIGATION</h3>
          <div className="bg-cyan-900/40 rounded-lg p-4 mb-4">
            <RiskRadarChart />
            <div className="text-xs text-cyan-200 mt-2 text-center">Mitigation Effectiveness by Risk Factor (Radar Chart)</div>
          </div>
          {/* Risk Mitigation Graph */}
          <div className="bg-cyan-900/40 rounded-lg p-4 mb-4">
            <h4 className="text-lg font-bold text-cyan-200 mb-4 text-center">Risk Mitigation Strategies (0-100%)</h4>
            <div className="space-y-6">
              {/* Commodity Prices */}
              <div>
                <div className="flex items-center mb-1">
                  <div className="w-48 font-semibold text-cyan-300">Commodity Prices</div>
                  <span className="ml-2 text-xs text-cyan-200">Mitigated: 70%</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-40 text-xs text-cyan-100">Diversified revenue streams</span>
                    <div className="relative flex-1 h-4 bg-cyan-800/40 rounded-lg">
                      <div className="absolute left-0 top-0 h-4 bg-emerald-400 rounded-lg" style={{ width: '60%' }} />
                      <span className="absolute right-2 top-0 text-xs text-white h-4 flex items-center">60%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-40 text-xs text-cyan-100">Forward contracting</span>
                    <div className="relative flex-1 h-4 bg-cyan-800/40 rounded-lg">
                      <div className="absolute left-0 top-0 h-4 bg-emerald-300 rounded-lg" style={{ width: '40%' }} />
                      <span className="absolute right-2 top-0 text-xs text-white h-4 flex items-center">40%</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Aquaculture Disease */}
              <div>
                <div className="flex items-center mb-1">
                  <div className="w-48 font-semibold text-cyan-300">Aquaculture Disease</div>
                  <span className="ml-2 text-xs text-cyan-200">Mitigated: 85%</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-40 text-xs text-cyan-100">Advanced filtration systems</span>
                    <div className="relative flex-1 h-4 bg-cyan-800/40 rounded-lg">
                      <div className="absolute left-0 top-0 h-4 bg-emerald-400 rounded-lg" style={{ width: '50%' }} />
                      <span className="absolute right-2 top-0 text-xs text-white h-4 flex items-center">50%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-40 text-xs text-cyan-100">Rigorous health monitoring</span>
                    <div className="relative flex-1 h-4 bg-cyan-800/40 rounded-lg">
                      <div className="absolute left-0 top-0 h-4 bg-emerald-300 rounded-lg" style={{ width: '35%' }} />
                      <span className="absolute right-2 top-0 text-xs text-white h-4 flex items-center">35%</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Weather Events */}
              <div>
                <div className="flex items-center mb-1">
                  <div className="w-48 font-semibold text-cyan-300">Weather Events</div>
                  <span className="ml-2 text-xs text-cyan-200">Mitigated: 80%</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-40 text-xs text-cyan-100">Crop insurance</span>
                    <div className="relative flex-1 h-4 bg-cyan-800/40 rounded-lg">
                      <div className="absolute left-0 top-0 h-4 bg-emerald-400 rounded-lg" style={{ width: '45%' }} />
                      <span className="absolute right-2 top-0 text-xs text-white h-4 flex items-center">45%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-40 text-xs text-cyan-100">Protected greenhouse growing</span>
                    <div className="relative flex-1 h-4 bg-cyan-800/40 rounded-lg">
                      <div className="absolute left-0 top-0 h-4 bg-emerald-300 rounded-lg" style={{ width: '35%' }} />
                      <span className="absolute right-2 top-0 text-xs text-white h-4 flex items-center">35%</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Labor Availability */}
              <div>
                <div className="flex items-center mb-1">
                  <div className="w-48 font-semibold text-cyan-300">Labor Availability</div>
                  <span className="ml-2 text-xs text-cyan-200">Mitigated: 60%</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-40 text-xs text-cyan-100">AI automation focus</span>
                    <div className="relative flex-1 h-4 bg-cyan-800/40 rounded-lg">
                      <div className="absolute left-0 top-0 h-4 bg-emerald-400 rounded-lg" style={{ width: '35%' }} />
                      <span className="absolute right-2 top-0 text-xs text-white h-4 flex items-center">35%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-40 text-xs text-cyan-100">Competitive wage packages</span>
                    <div className="relative flex-1 h-4 bg-cyan-800/40 rounded-lg">
                      <div className="absolute left-0 top-0 h-4 bg-emerald-300 rounded-lg" style={{ width: '25%' }} />
                      <span className="absolute right-2 top-0 text-xs text-white h-4 flex items-center">25%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">COLLATERAL POSITION</h3>
          <ul className="mb-4">
            <li>Real Estate: 130-acre agricultural property</li>
            <li>Equipment: $8,650,000 in new agricultural machinery</li>
            <li>Receivables: Projected $2,000,000+ annual accounts receivable</li>
            <li>Inventory: $500,000+ in rotating crop and seafood inventory</li>
          </ul>

          <h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">CASH FLOW ANALYSIS</h3>
          <div className="bg-cyan-900/40 rounded-lg p-4 mb-4">
            <CashFlowProjectionChart />
            <div className="text-xs text-cyan-200 mt-2 text-center">ANNUAL CASH FLOW PROJECTION ($ MILLIONS)</div>
          </div>

          <h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">LOAN STRUCTURE PREFERENCE</h3>
          <ul className="mb-4">
            <li>Loan Amount: $6,000,000 (50% of project cost)</li>
            <li>Term: 7 years (matches equipment lifespan)</li>
            <li>Amortization: 20-year schedule with balloon payment</li>
            <li>Interest Rate: Fixed 6.5% (market competitive)</li>
            <li>Security: First position on all assets</li>
            <li>Personal Guarantees: Available from principals</li>
          </ul>

          <h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">EXIT STRATEGY</h3>
          <ol className="mb-4">
            <li><b>Primary:</b> Operational cash flow covering 250%+ of debt service by Year 3</li>
            <li><b>Secondary:</b> Asset liquidation value exceeding loan balance from Year 1</li>
            <li><b>Tertiary:</b> Refinancing option after 3 years of proven operations</li>
          </ol>

          <h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">BANK BENEFITS</h3>
          <ul className="mb-4">
            <li>Strong debt service coverage (minimum 1.14x in Year 1)</li>
            <li>Multiple revenue streams reducing default risk</li>
            <li>Hard asset collateral coverage exceeding 140%</li>
            <li>Growing agricultural sector with government support programs</li>
            <li>Experienced management team with agricultural expertise</li>
          </ul>

          <p className="text-cyan-200 mt-8">This investment represents a secured position in a technologically advanced agricultural operation with conservative projections and multiple layers of protection for the lending institution.</p>

          {/* Here's How We'll Do It Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">Here's How We'll Do It</h2>
            <div className="bg-slate-900/60 border-l-4 border-emerald-400 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-2">PHNXForge</h3>
              <p className="mb-2 text-cyan-100 font-semibold">Advanced Mathematics Education Platform with Industrial Applications</p>
              <p className="mb-4 text-cyan-200">PHNXForge is a research-backed educational platform that implements multi-perspective reasoning, formal verification, and the Saphier instructional model to revolutionize mathematics education.</p>
              <ul className="list-disc list-inside space-y-2 text-cyan-100">
                <li><b>Multi-Perspective Reasoning:</b> Debate-style mathematical problem solving</li>
                <li><b>Formal Verification:</b> Consistency checking and logical soundness</li>
                <li><b>Saphier Model Integration:</b> Evidence-based instructional framework</li>
                <li><b>Industrial Applications:</b> Real-world manufacturing and career pathways</li>
                <li><b>3D Assessment System:</b> Conceptual, procedural, and applied understanding</li>
                <li><b>FERPA/COPPA Compliant:</b> Built with educational privacy from day 1</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
