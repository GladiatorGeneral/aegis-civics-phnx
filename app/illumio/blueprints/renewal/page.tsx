<<<<<<< Updated upstream

import React from 'react';

interface SRDCardProps {
  title: string;
  status: string;
  name: string;
  progress: number;
  investment: string;
  timeframe: string;
  metricLabel: string;
  metricValue: string;
  metricTarget: string;
  dependsOn?: string;
}

export default function SystemicRenewalDashboard() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 p-0 md:p-8">
      <div className="max-w-5xl mx-auto py-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 drop-shadow-lg">
            Systemic Renewal Dashboard
          </h1>
          <div className="mx-auto w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mb-4" />
          <p className="text-lg text-cyan-200 font-medium">Twelve integrated transformation initiatives designed to rebuild America&apos;s foundation. Track real-time progress, historical trends, and cross-directorate dependencies as we systematically address the nation&apos;s most critical challenges.</p>
        </div>
        <div className="prose prose-invert prose-lg max-w-none text-cyan-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-bold text-cyan-300 mb-2">Total Investment</h2>
              <p className="text-3xl font-bold text-cyan-200">$879B</p>
              <p className="text-cyan-400">Over 10 years</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-cyan-300 mb-2">Avg Progress</h2>
              <p className="text-3xl font-bold text-cyan-200">12.2%</p>
              <p className="text-cyan-400">Across all SRDs</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-cyan-300 mb-2">Active SRDs</h2>
              <p className="text-3xl font-bold text-cyan-200">6</p>
              <p className="text-cyan-400">In pilot or scaling</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-cyan-300 mb-2">Phase Progress</h2>
              <p className="text-3xl font-bold text-cyan-200">0/36</p>
              <p className="text-cyan-400">Phases complete</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">All Directorates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SRD Cards */}
            <SRDCard title="SRD 1" status="pilot" name="Digital Equity" progress={15} investment="$65B" timeframe="0-7 years" metricLabel="Broadband Access" metricValue="72%" metricTarget="100%" dependsOn={undefined} />
            <SRDCard title="SRD 2" status="planning" name="Education" progress={8} investment="$120B" timeframe="0-7 years" metricLabel="Student Debt" metricValue="$1700B" metricTarget="$500B" dependsOn="SRD 1" />
            <SRDCard title="SRD 3" status="planning" name="Healthcare" progress={5} investment="$200B" timeframe="0-7 years" metricLabel="Uninsured Rate" metricValue="8.6%" metricTarget="0%" dependsOn="SRD 1" />
            <SRDCard title="SRD 4" status="pilot" name="Food Security" progress={12} investment="$35B" timeframe="0-7 years" metricLabel="Food Insecurity Rate" metricValue="10.5%" metricTarget="0%" dependsOn={undefined} />
            <SRDCard title="SRD 5" status="planning" name="Childcare" progress={7} investment="$75B" timeframe="0-7 years" metricLabel="Childcare Affordability" metricValue="18% of income" metricTarget="7% of income" dependsOn="SRD 2" />
            <SRDCard title="SRD 6" status="planning" name="Youth Development" progress={6} investment="$40B" timeframe="0-7 years" metricLabel="Student-to-Counselor Ratio" metricValue="415students" metricTarget="250students" dependsOn="SRD 1, 2" />
            <SRDCard title="SRD 7" status="scaling" name="Infrastructure" progress={22} investment="$175B" timeframe="0-7 years" metricLabel="Infrastructure Grade" metricValue="2.3GPA" metricTarget="3.5GPA" dependsOn="SRD 1, 11" />
            <SRDCard title="SRD 8" status="planning" name="Housing & Wages" progress={9} investment="$90B" timeframe="0-7 years" metricLabel="Federal Minimum Wage" metricValue="$7.25/hour" metricTarget="$15/hour" dependsOn="SRD 7" />
            <SRDCard title="SRD 9" status="pilot" name="Fiscal Responsibility" progress={18} investment="$5B" timeframe="0-7 years" metricLabel="Improper Payments" metricValue="$247B" metricTarget="$50B" dependsOn="SRD 1" />
            <SRDCard title="SRD 10" status="planning" name="State Empowerment" progress={11} investment="$0.25B" timeframe="0-7 years" metricLabel="Grant Disbursement Time" metricValue="18months" metricTarget="6months" dependsOn="SRD 9" />
            <SRDCard title="SRD 11" status="scaling" name="Clean Energy" progress={19} investment="$70.5B" timeframe="0-7 years" metricLabel="Carbon-Free Electricity" metricValue="40%" metricTarget="100%" dependsOn="SRD 1, 7" />
            <SRDCard title="SRD 12" status="pilot" name="Civic Renewal" progress={14} investment="$2.85B" timeframe="0-7 years" metricLabel="Midterm Voter Turnout" metricValue="47%" metricTarget="60%" dependsOn="SRD 1, 2" />
          </div>
          <div className="mt-10 text-cyan-200">
            <b>The Interconnected Whole:</b> Each directorate reinforces the others— Digital Equity enables all platforms, Education creates the skilled workforce, Fiscal Responsibility ensures transparency, and Civic Engagement closes the feedback loop.
          </div>
          <div className="mt-4 text-cyan-400">
            This investment represents approximately 1.5% of annual GDP—yielding returns many times over in economic growth, social stability, and national resilience.
          </div>
        </div>
      </div>
    </div>
  );
}

function SRDCard({ title, status, name, progress, investment, timeframe, metricLabel, metricValue, metricTarget, dependsOn }: SRDCardProps) {
  const statusColor = status === 'pilot' ? 'bg-yellow-700 text-yellow-200' : status === 'scaling' ? 'bg-green-700 text-green-200' : 'bg-blue-700 text-blue-200';
  return (
    <div className="bg-linear-to-br from-slate-800 via-slate-900 to-blue-900 rounded-2xl p-6 shadow-xl border border-cyan-900 hover:scale-[1.025] hover:shadow-2xl transition-transform duration-300">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-cyan-300 text-lg tracking-wide drop-shadow">{title}</span>
        <span className={`px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider ${statusColor}`}>{status}</span>
      </div>
      <div className="font-extrabold text-cyan-100 text-xl mb-1 drop-shadow-lg">{name}</div>
      <div className="mb-1 flex items-center gap-2">
        <b className="text-cyan-400">Progress:</b>
        <span className="text-cyan-200 font-bold">{progress}%</span>
      </div>
      {/* ProgressBar omitted for brevity, add if needed */}
      <div className="mb-1"><b className="text-cyan-400">Investment:</b> <span className="text-cyan-200">{investment}</span></div>
      <div className="mb-1"><b className="text-cyan-400">Timeframe:</b> <span className="text-cyan-200">{timeframe}</span></div>
      <div className="mb-1"><b className="text-cyan-400">{metricLabel}:</b> <span className="text-cyan-200">{metricValue}</span> <span className="text-cyan-500">/ {metricTarget}</span></div>
      {dependsOn && <div className="text-xs text-cyan-500 mt-1 italic">Depends on {dependsOn}</div>}
    </div>
  );
=======
import React from "react";
import { NeuralGlassPanel } from "@/components/ui/NeuralGlassPanel";

export default function RenewalSecurityPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-900 to-slate-800 p-4 md:p-8">
            <div className="max-w-5xl mx-auto py-8">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent mb-3">Project Illumio: Leadership & Action Plan</h1>
                    <p className="text-slate-200 max-w-3xl mx-auto">Leadership roster, SRD action shards, and an implementation architecture for coordinated, sharded execution.</p>
                </div>

                <NeuralGlassPanel className="mb-6">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-3">I. Leadership Role Filling — The Governing Core</h2>

                    <p className="text-cyan-100 mb-3">Thank you for pointing that out. You are correct that focusing on specific, named individuals for the leadership roles in Project Illumio is premature and based on hypothetical data.</p>

                    <p className="text-cyan-100 mb-3">The critical next step is to define the precise <strong>qualification profiles, selection criteria, and appointment processes</strong> for the four core leadership positions. This will allow us to systematically source the right candidates.</p>

                    <p className="text-cyan-100 mb-3">Based on our previous framework, here are the roles that need to be defined before any contact is made:</p>

                    <h3 className="text-xl font-bold text-emerald-400 mb-3">The Governing Triad &amp; Core Tech Lead</h3>

                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm text-cyan-100">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="py-2 px-3">Position</th>
                                    <th className="py-2 px-3">Core Mandate &amp; Required Profile</th>
                                    <th className="py-2 px-3">Key Qualification Questions to Define</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-800 align-top">
                                    <td className="py-2 px-3 font-semibold">1. Supreme Steward<br/>(Architect-in-Chief)</td>
                                    <td className="py-2 px-3">The ultimate systems architect and non-partisan arbiter. Ensures the entire structure remains mission-aligned.</td>
                                    <td className="py-2 px-3">
                                        <ul className="list-disc list-inside">
                                            <li><strong>Background:</strong> Former head of state, UN agency, or global systems corporation?</li>
                                            <li><strong>Legal/Political Acumen:</strong> Constitutional scholar or master of interstate compacts?</li>
                                            <li><strong>Deal-Making:</strong> Proven record of brokering consensus among fiercely opposed parties?</li>
                                        </ul>
                                    </td>
                                </tr>

                                <tr className="border-b border-slate-800 align-top">
                                    <td className="py-2 px-3 font-semibold">2. Chancellor of State Coordination<br/>(Elected from Governors)</td>
                                    <td className="py-2 px-3">The voice of state sovereignty and feasibility. Translates national vision into executable state-level action.</td>
                                    <td className="py-2 px-3">
                                        <ul className="list-disc list-inside">
                                            <li><strong>Governance Experience:</strong> Minimum years as a sitting governor?</li>
                                            <li><strong>Bipartisan Credentials:</strong> Proven success passing legislation in a split legislature?</li>
                                            <li><strong>Network:</strong> Relationships with a majority of other governors?</li>
                                        </ul>
                                    </td>
                                </tr>

                                <tr className="border-b border-slate-800 align-top">
                                    <td className="py-2 px-3 font-semibold">3. Chancellor of Municipal Integration<br/>(Elected from Mayors)</td>
                                    <td className="py-2 px-3">The voice of on-the-ground implementation. Manages the urban/rural execution pipeline and municipal innovation.</td>
                                    <td className="py-2 px-3">
                                        <ul className="list-disc list-inside">
                                            <li><strong>Scale Experience:</strong> Mayor of a city with a population over 500,000?</li>
                                            <li><strong>Implementation Proof:</strong> Track record of deploying large-scale public infrastructure or social programs?</li>
                                            <li><strong>Coalition Building:</strong> Experience leading a coalition of county and city leaders?</li>
                                        </ul>
                                    </td>
                                </tr>

                                <tr className="align-top">
                                    <td className="py-2 px-3 font-semibold">4. Chief Technology Architect<br/>(CTO of the System)</td>
                                    <td className="py-2 px-3">Builder of the "Illumio Core" digital backbone. Responsible for all tech integration, data sovereignty, and cybersecurity.</td>
                                    <td className="py-2 px-3">
                                        <ul className="list-disc list-inside">
                                            <li><strong>Scale Proven:</strong> Former CTO of a national-scale platform (e.g., cloud provider, payment network)?</li>
                                            <li><strong>Public Sector Experience:</strong> Has built secure, compliant systems for government/military?</li>
                                            <li><strong>Tech Philosophy:</strong> Expert in decentralized/federated systems and algorithmic governance?</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </NeuralGlassPanel>

                <NeuralGlassPanel className="mb-6">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-3">II. The 12 SRD Action Plans — Blockchain-Sharded To-Do Structure</h2>
                    <p className="text-cyan-100 mb-3">Each SRD operates as an independent "chain" with linked action blocks, creating parallel execution paths. Below are per-SRD action items and ownership.</p>

                    <div className="space-y-4">
                        <div>
                            <h4 className="text-lg font-semibold text-emerald-400">SRD 1: Digital Equity &amp; Infrastructure — Cause Shard: Universal Access</h4>
                            <ul className="list-disc list-inside text-cyan-100">
                                <li>Deploy municipal mesh networks in 50 poorest counties (Q1 2027)</li>
                                <li>Standardize public facility broadband (libraries, schools, clinics)</li>
                                <li>Launch "Device Dividend" recycled tech program</li>
                            </ul>
                            <p className="text-xs text-slate-400">Ownership: FCC + State IT Directors</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-emerald-400">SRD 2: Next-Generation Education — Cause Shard: Workforce Pipeline</h4>
                            <ul className="list-disc list-inside text-cyan-100">
                                <li>Create 100 Industry-Certified High Schools by 2028</li>
                                <li>Deploy AI tutoring systems to 5,000 underserved classrooms</li>
                                <li>Establish apprenticeship tax credit for SRD-aligned businesses</li>
                            </ul>
                            <p className="text-xs text-slate-400">Ownership: Dept of Education + Governors' Task Force</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-emerald-400">SRD 3: Healthcare System Reengineering — Cause Shard: Preventive Infrastructure</h4>
                            <ul className="list-disc list-inside text-cyan-100">
                                <li>Build 250 micro-clinics in healthcare deserts</li>
                                <li>Implement blockchain-based medical records interoperability</li>
                                <li>Create cross-state licensure compacts for telehealth</li>
                            </ul>
                            <p className="text-xs text-slate-400">Ownership: HHS + State Health Commissioners</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-emerald-400">SRD 4: Food Security &amp; Agriculture — Cause Shard: Regional Resilience</h4>
                            <ul className="list-disc list-inside text-cyan-100">
                                <li>Establish 12 regional food hubs with cold-chain logistics</li>
                                <li>Convert 1M acres to regenerative agriculture by 2029</li>
                                <li>Launch urban vertical farming initiative in 30 largest cities</li>
                            </ul>
                            <p className="text-xs text-slate-400">Ownership: USDA + Agricultural Extension Network</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-emerald-400">SRD 5: Childcare &amp; Family Support — Cause Shard: Economic Participation</h4>
                            <ul className="list-disc list-inside text-cyan-100">
                                <li>Implement sliding-scale childcare in 15 pilot states</li>
                                <li>Create employer childcare co-op certification program</li>
                                <li>Develop intergenerational care facilities (child/elder combined)</li>
                            </ul>
                            <p className="text-xs text-slate-400">Ownership: DOL + Municipal Family Services</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-emerald-400">SRD 6: Adolescent Development &amp; Safety — Cause Shard: Community Anchors</h4>
                            <ul className="list-disc list-inside text-cyan-100">
                                <li>Convert 500 closed schools to youth/community centers</li>
                                <li>Launch "Guardian Apprenticeship" program with public safety</li>
                                <li>Create trauma-informed school district certification</li>
                            </ul>
                            <p className="text-xs text-slate-400">Ownership: DOJ + Local School Boards</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-emerald-400">SRD 7: Infrastructure Modernization — Cause Shard: Critical Systems</h4>
                            <ul className="list-disc list-inside text-cyan-100">
                                <li>Hardened micro-grid deployment for 100 critical facilities</li>
                                <li>AI-optimized traffic/transit systems in 25 metro areas</li>
                                <li>Bridge/water main replacement prioritization algorithm</li>
                            </ul>
                            <p className="text-xs text-slate-400">Ownership: DOT + State Engineers Association</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-emerald-400">SRD 8: Dynamic Wage &amp; Housing — Cause Shard: Stability Engineering</h4>
                            <ul className="list-disc list-inside text-cyan-100">
                                <li>Implement regional living wage calculators with real-time adjustment</li>
                                <li>Modular housing factories in 8 strategic locations</li>
                                <li>Rent-to-own pathways in public housing</li>
                            </ul>
                            <p className="text-xs text-slate-400">Ownership: HUD + State Labor Departments</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-emerald-400">SRD 9: Fiscal Responsibility — Cause Shard: Transparent Systems</h4>
                            <ul className="list-disc list-inside text-cyan-100">
                                <li>Deploy public blockchain budget tracking in 5 pilot states</li>
                                <li>Create zero-based budgeting mandates for SRD projects</li>
                                <li>Establish "Citizen Fiscal Jury" oversight panels</li>
                            </ul>
                            <p className="text-xs text-slate-400">Ownership: Treasury + State Auditors</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-emerald-400">SRD 10: State &amp; Local Empowerment — Cause Shard: Authority Distribution</h4>
                            <ul className="list-disc list-inside text-cyan-100">
                                <li>Draft model legislation for municipal innovation zones</li>
                                <li>Create cross-jurisdictional emergency response protocols</li>
                                <li>Establish state capacity-building grants with performance metrics</li>
                            </ul>
                            <p className="text-xs text-slate-400">Ownership: NGA + US Conference of Mayors</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-emerald-400">SRD 11: Renewable Energy &amp; Grid — Cause Shard: Independence</h4>
                            <ul className="list-disc list-inside text-cyan-100">
                                <li>Deploy community solar on all public buildings by 2030</li>
                                <li>Create interstate renewable energy credit marketplace</li>
                                <li>Hardened underground transmission for critical corridors</li>
                            </ul>
                            <p className="text-xs text-slate-400">Ownership: DOE + Regional Grid Operators</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-emerald-400">SRD 12: Civic Engagement — Cause Shard: Democratic Innovation</h4>
                            <ul className="list-disc list-inside text-cyan-100">
                                <li>Launch Illumio Citizen Platform (deliberative democracy tool)</li>
                                <li>Implement ranked-choice voting in all member jurisdictions</li>
                                <li>Create "Policy Simulator" for public testing of initiatives</li>
                            </ul>
                            <p className="text-xs text-slate-400">Ownership: Non-Profit Consortium + Election Officials</p>
                        </div>
                    </div>
                </NeuralGlassPanel>

                <NeuralGlassPanel className="mb-6">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-3">III. Implementation Architecture</h2>

                    <h4 className="text-lg font-semibold text-emerald-400 mt-2">Blockchain Sharding Protocol</h4>
                    <ol className="list-decimal list-inside text-cyan-100 mb-3">
                        <li>Each SRD = Independent chain</li>
                        <li>Monthly cross-chain synchronization at Nexus Prime</li>
                        <li>Public ledger for all expenditures &gt; $100K</li>
                        <li>Smart contracts for milestone-based funding release</li>
                    </ol>

                    <h4 className="text-lg font-semibold text-emerald-400 mt-2">Phase 1 (90 Days)</h4>
                    <ul className="list-disc list-inside text-cyan-100 mb-3">
                        <li>Stand up leadership team</li>
                        <li>Activate SRD 1, 7, 11 (infrastructure triad)</li>
                        <li>Deploy Illumio Core platform v1.0</li>
                        <li>Secure first 5 state commitments</li>
                    </ul>

                    <h4 className="text-lg font-semibold text-emerald-400 mt-2">Phase 2 (Year 1)</h4>
                    <ul className="list-disc list-inside text-cyan-100 mb-6">
                        <li>All 12 SRDs operational</li>
                        <li>25 states, 75 cities onboarded</li>
                        <li>$85B in projects initiated</li>
                        <li>Citizen dashboard public launch</li>
                    </ul>

                    <p className="text-cyan-100">This structure creates simultaneous, trackable progress across all fronts—each SRD shard operates autonomously but syncs to the main chain, ensuring cohesion without bottleneck. The leadership roster provides decisive command while the distributed action plan enables massive parallel execution.</p>
                </NeuralGlassPanel>
            </div>
        </div>
    );
>>>>>>> Stashed changes
}
