import React from 'react';
import { NeuralGlassPanel } from '@/components/ui/NeuralGlassPanel';

export default function IllumioCorePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-6xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Illumio Core Precepts
          </h1>
          <p className="text-xl text-cyan-100 max-w-4xl mx-auto">
            A Whole-of-Nation Framework for Systemic Renewal
          </p>
          <div className="mt-4 text-sm text-cyan-300">
            <p>Out of Many, One System</p>
            <p className="italic">E Pluribus Unum</p>
          </div>
        </div>

        {/* AI Information */}
        <NeuralGlassPanel className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">AI Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6 text-cyan-50">
            <div>
              <h3 className="text-lg font-semibold mb-2">Knowledge Cutoff</h3>
              <p className="text-sm">July 2024 (with web search capability when enabled)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Context Window</h3>
              <p className="text-sm">128,000 tokens (~96,000 words)</p>
              <p className="text-xs mt-1 text-cyan-200">Enough for entire books, complex codebases, and lengthy conversations</p>
            </div>
          </div>
        </NeuralGlassPanel>

        {/* Project Overview */}
        <NeuralGlassPanel className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">Project Illumio: Executive Summary</h2>
          <div className="space-y-4 text-cyan-50">
            <p>
              A comprehensive national renewal initiative proposing a supra-governmental coordination structure 
              to address systemic challenges through integrated solutions across federal, state, and municipal levels.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="border border-cyan-500/30 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-2">Budget</h4>
                <p className="text-2xl">$850B</p>
                <p className="text-sm text-cyan-200">Over 10 years</p>
              </div>
              <div className="border border-cyan-500/30 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-2">Timeline</h4>
                <p className="text-2xl">2025-2035</p>
                <p className="text-sm text-cyan-200">Phased deployment</p>
              </div>
              <div className="border border-cyan-500/30 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-2">HQ Budget</h4>
                <p className="text-2xl">$304M</p>
                <p className="text-sm text-cyan-200">Callahan County, TX</p>
              </div>
            </div>
          </div>
        </NeuralGlassPanel>

        {/* Governance Structure */}
        <NeuralGlassPanel className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">Illumio Council Structure</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">Leadership Triad</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-cyan-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-cyan-300 mb-2">Supreme Steward</h4>
                  <p className="text-sm text-cyan-100">Supra-presidential chair, 10-year term</p>
                </div>
                <div className="bg-cyan-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-cyan-300 mb-2">Chancellor of States</h4>
                  <p className="text-sm text-cyan-100">Rotating governor, 2-year term</p>
                </div>
                <div className="bg-cyan-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-cyan-300 mb-2">Chancellor of Cities</h4>
                  <p className="text-sm text-cyan-100">Rotating mayor, 2-year term</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">General Assembly</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-cyan-900/20 rounded-lg p-4">
                  <p className="text-2xl font-bold text-cyan-300">50</p>
                  <p className="text-sm text-cyan-100">State Governors</p>
                </div>
                <div className="bg-cyan-900/20 rounded-lg p-4">
                  <p className="text-2xl font-bold text-cyan-300">150</p>
                  <p className="text-sm text-cyan-100">City Mayors (3 per state)</p>
                </div>
                <div className="bg-cyan-900/20 rounded-lg p-4">
                  <p className="text-2xl font-bold text-cyan-300">100</p>
                  <p className="text-sm text-cyan-100">Congressional Members</p>
                </div>
              </div>
            </div>
          </div>
        </NeuralGlassPanel>

        {/* 12 Systemic Renewal Directorates */}
        <NeuralGlassPanel className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-6">12 Systemic Renewal Directorates (SRDs)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: 1, name: "Digital Equity & Infrastructure", icon: "🌐" },
              { num: 2, name: "Education & Workforce Development", icon: "🎓" },
              { num: 3, name: "Healthcare System Reengineering", icon: "⚕️" },
              { num: 4, name: "Food Security & Agriculture", icon: "🌾" },
              { num: 5, name: "Affordable Childcare & Family Support", icon: "👶" },
              { num: 6, name: "Adolescent Development & Safety", icon: "🛡️" },
              { num: 7, name: "National Infrastructure", icon: "🏗️" },
              { num: 8, name: "Dynamic Wage & Housing Stability", icon: "🏘️" },
              { num: 9, name: "Fiscal Responsibility & Transparency", icon: "💰" },
              { num: 10, name: "State & Local Empowerment", icon: "🏛️" },
              { num: 11, name: "Renewable Energy & Grid Independence", icon: "⚡" },
              { num: 12, name: "Civic Engagement & Democracy", icon: "🗳️" }
            ].map((srd) => (
              <div key={srd.num} className="bg-cyan-900/20 rounded-lg p-4 hover:bg-cyan-900/30 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{srd.icon}</span>
                  <span className="text-lg font-bold text-cyan-300">SRD {srd.num}</span>
                </div>
                <p className="text-sm text-cyan-100">{srd.name}</p>
              </div>
            ))}
          </div>
        </NeuralGlassPanel>

        {/* Callahan County HQ */}
        <NeuralGlassPanel className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">Nexus Prime: Callahan County HQ</h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">Phase 1: Hardened Core ($304M)</h3>
                <ul className="space-y-2 text-sm text-cyan-100">
                  <li>• 80,000 sq ft initial buildout</li>
                  <li>• Command Center (15,000 sq ft)</li>
                  <li>• R&D Labs (20,000 sq ft)</li>
                  <li>• Modular Housing (30,000 sq ft)</li>
                  <li>• Energy/Water Systems (10,000 sq ft)</li>
                  <li>• 1MW Solar + Tesla Powerwall</li>
                  <li>• Tornado/Fire Hardening</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">Phase 2: Full Capability ($446M)</h3>
                <ul className="space-y-2 text-sm text-cyan-100">
                  <li>• 500,000 sq ft total campus</li>
                  <li>• NuScale SMR (50MW nuclear)</li>
                  <li>• Advanced CRISPR labs</li>
                  <li>• Quantum-encrypted network</li>
                  <li>• Aquaponics & vertical farms</li>
                  <li>• Automated logistics systems</li>
                  <li>• Full self-sufficiency</li>
                </ul>
              </div>
            </div>

            <div className="bg-cyan-900/20 rounded-lg p-4 mt-4">
              <h4 className="font-bold text-cyan-300 mb-2">Site Details: 1,500 Acres</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-cyan-100">
                <div>
                  <p className="font-semibold">Location</p>
                  <p>Callahan County, TX (32.3°N, 99.4°W)</p>
                </div>
                <div>
                  <p className="font-semibold">Water</p>
                  <p>35 ponds, 12 wells, 1,200 acre-ft/year rights</p>
                </div>
                <div>
                  <p className="font-semibold">Energy</p>
                  <p>6.8 kWh/m²/day solar potential</p>
                </div>
              </div>
            </div>
          </div>
        </NeuralGlassPanel>

        {/* Funding Stack */}
        <NeuralGlassPanel className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">Funding Architecture</h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-2">Federal</h4>
                <p className="text-sm text-cyan-100">5% Pentagon reallocation + DPA funds</p>
              </div>
              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-2">State/Municipal</h4>
                <p className="text-sm text-cyan-100">Pooled infrastructure bonds</p>
              </div>
              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-2">Private</h4>
                <p className="text-sm text-cyan-100">1% profit pledges (tax-deductible)</p>
              </div>
              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-2">International</h4>
                <p className="text-sm text-cyan-100">World Bank green transition loans</p>
              </div>
            </div>
          </div>
        </NeuralGlassPanel>

        {/* Implementation Timeline */}
        <NeuralGlassPanel className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">Implementation Timeline</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-cyan-500 pl-4">
              <h3 className="text-lg font-semibold text-cyan-300">Phase 1: Foundation (May 2026-2028)</h3>
              <ul className="text-sm text-cyan-100 mt-2 space-y-1">
                <li>• Recruit 30 governors, 60 mayors, 100+ corporations</li>
                <li>• Launch 5 Task Forces (Digital Equity, UBI, SMRs, Childcare, Infrastructure)</li>
                <li>• Break ground on Nexus Prime</li>
              </ul>
            </div>
            <div className="border-l-4 border-cyan-400 pl-4">
              <h3 className="text-lg font-semibold text-cyan-300">Phase 2: Scaling (2029-2032)</h3>
              <ul className="text-sm text-cyan-100 mt-2 space-y-1">
                <li>• Expand to all 50 states, 150 cities</li>
                <li>• Launch all 12 SRDs</li>
                <li>• 50% federal policy alignment</li>
              </ul>
            </div>
            <div className="border-l-4 border-cyan-300 pl-4">
              <h3 className="text-lg font-semibold text-cyan-300">Phase 3: Entrenchment (2033-2037)</h3>
              <ul className="text-sm text-cyan-100 mt-2 space-y-1">
                <li>• NRC directives become de facto national mandates</li>
                <li>• Global replication framework (Illumio International)</li>
                <li>• Full operational maturity</li>
              </ul>
            </div>
          </div>
        </NeuralGlassPanel>

        {/* Key Technologies */}
        <NeuralGlassPanel className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">Core Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-cyan-900/20 rounded-lg p-4">
              <h4 className="font-bold text-cyan-300 mb-2">Illumio Core Platform</h4>
              <p className="text-sm text-cyan-100">AI-driven coordination web app with blockchain transparency</p>
            </div>
            <div className="bg-cyan-900/20 rounded-lg p-4">
              <h4 className="font-bold text-cyan-300 mb-2">3D Printing</h4>
              <p className="text-sm text-cyan-100">ICON Vulcan printers for rapid housing ($54K/unit)</p>
            </div>
            <div className="bg-cyan-900/20 rounded-lg p-4">
              <h4 className="font-bold text-cyan-300 mb-2">Modular Nuclear</h4>
              <p className="text-sm text-cyan-100">NuScale SMR for reliable baseload power</p>
            </div>
            <div className="bg-cyan-900/20 rounded-lg p-4">
              <h4 className="font-bold text-cyan-300 mb-2">Quantum Encryption</h4>
              <p className="text-sm text-cyan-100">QKD for unhackable communications</p>
            </div>
            <div className="bg-cyan-900/20 rounded-lg p-4">
              <h4 className="font-bold text-cyan-300 mb-2">AI Governance</h4>
              <p className="text-sm text-cyan-100">Decision matrix for bias-free resource allocation</p>
            </div>
            <div className="bg-cyan-900/20 rounded-lg p-4">
              <h4 className="font-bold text-cyan-300 mb-2">Atmospheric Water</h4>
              <p className="text-sm text-cyan-100">MIT MOF-303 harvesters for water independence</p>
            </div>
          </div>
        </NeuralGlassPanel>

        {/* Accountability Mechanisms */}
        <NeuralGlassPanel className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">Oversight & Accountability</h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-2">Citizen Juries</h4>
                <p className="text-sm text-cyan-100">1,000 randomly selected citizens with veto power over projects</p>
              </div>
              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-2">Public Dashboard</h4>
                <p className="text-sm text-cyan-100">Real-time blockchain tracking of all spending and KPIs</p>
              </div>
              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-2">Inspector General</h4>
                <p className="text-sm text-cyan-100">Independent watchdog appointed by Supreme Court</p>
              </div>
            </div>
          </div>
        </NeuralGlassPanel>

        {/* GDP Framework */}
        <NeuralGlassPanel className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">Macroeconomic Framework</h2>
          <div className="space-y-4">
            <p className="text-cyan-100 mb-4">GDP = C + I + G + (X - M)</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-2">Consumption (C)</h4>
                <p className="text-sm text-cyan-100">Household spending on goods and services. Illumio increases disposable income through wage policies and digital equity.</p>
              </div>
              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-2">Investment (I)</h4>
                <p className="text-sm text-cyan-100">Business capital spending and construction. Illumio drives infrastructure and renewable energy investment.</p>
              </div>
              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-2">Government Spending (G)</h4>
                <p className="text-sm text-cyan-100">Public expenditure on goods and services. The Illumio Fund represents targeted, high-ROI public investment.</p>
              </div>
              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-2">Net Exports (X-M)</h4>
                <p className="text-sm text-cyan-100">Exports minus imports. Illumio reduces critical import dependencies and boosts high-value exports.</p>
              </div>
            </div>
          </div>
        </NeuralGlassPanel>

        {/* Legislative Framework */}
        <NeuralGlassPanel className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-6">Legislative Architecture: The Comprehensive Bill</h2>
          <div className="space-y-6 text-cyan-100">
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-3">Bill Structure Overview</h3>
              <p className="mb-4">
                The legislation contains 9 titles, 73 sections, and 50+ funding mechanisms designed as a unified, 
                omnibus approach combining authorization, appropriation, and structural reform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-cyan-300 mb-3">Title I: Governance & Structure</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Sec. 101: Establishment of the Illumio Commission</li>
                  <li>• Sec. 102: Composition & Governance Triad</li>
                  <li>• Sec. 103: General Assembly (300 members)</li>
                  <li>• Sec. 104: Powers & Authorities</li>
                  <li>• Sec. 105: Inspector General & Audit Authority</li>
                  <li>• Sec. 106: Public Transparency Dashboard</li>
                  <li>• Sec. 107: Citizen Jury System</li>
                  <li>• Sec. 108: Ethics & Conflicts of Interest</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-cyan-300 mb-3">Title II: Illumio Fund Structure</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Sec. 201: Establishment as Government Corporation</li>
                  <li>• Sec. 202: Board of Directors (7 members, 7-year terms)</li>
                  <li>• Sec. 203: Separate Treasury Account</li>
                  <li>• Sec. 204: Investment Authority & Restrictions</li>
                  <li>• Sec. 205: Annual Independent Audit Requirements</li>
                  <li>• Sec. 206: Quarterly Congressional Reporting</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-cyan-300 mb-3">Title III: Federal Funding Sources</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Sec. 301: Mandatory Annual Appropriation ($15B base)</li>
                  <li>• Sec. 302: Pentagon Reallocation (1% = $8.6B)</li>
                  <li>• Sec. 303: Revenue Transfer Mechanisms</li>
                  <li>• Sec. 304: Multi-Year Budget Authority</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-cyan-300 mb-3">Title IV: Tax Reforms</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Sec. 401: Wealth Tax (0.5-2% on $10M+)</li>
                  <li>• Sec. 402: Financial Transaction Tax (0.1%)</li>
                  <li>• Sec. 403: Carbon Tax ($40/ton escalating)</li>
                  <li>• Sec. 404: Digital Services Tax (3% on $500M+ revenues)</li>
                  <li>• Sec. 405: Estate Tax Reform (45% over $10M)</li>
                  <li>• Sec. 406: Corporate Minimum Tax (21% effective rate)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-cyan-300 mb-3">Title V: 12 SRDs Authorization</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Sec. 501-512: Individual SRD Establishment</li>
                  <li>• Each section authorizes directorate, defines scope</li>
                  <li>• Specifies leadership, staffing, initial appropriations</li>
                  <li>• Sets performance metrics and accountability standards</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-cyan-300 mb-3">Title VI: Nexus Prime HQ</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Sec. 601: Authorization & Site Selection (Callahan County)</li>
                  <li>• Sec. 602: Design-Build Authority</li>
                  <li>• Sec. 603: Phase 1 Appropriation ($304M/80K sq ft)</li>
                  <li>• Sec. 604: Phase 2 Authorization ($446M/500K sq ft)</li>
                  <li>• Sec. 605: Phoenix Ranch Infrastructure ($50M)</li>
                  <li>• Sec. 606: Soil Remediation & Sustainability Standards</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-cyan-300 mb-3">Title VII: Accountability</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Sec. 701: Public Dashboard Requirements</li>
                  <li>• Sec. 702: Real-Time Budget Tracking</li>
                  <li>• Sec. 703: Quarterly Performance Reviews</li>
                  <li>• Sec. 704: Whistleblower Protections</li>
                  <li>• Sec. 705: Congressional Oversight Mechanisms</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-cyan-300 mb-3">Title VIII: Technology & Infrastructure</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Sec. 801: Illumio Core Platform Development</li>
                  <li>• Sec. 802: Quantum Encryption Standards</li>
                  <li>• Sec. 803: AI Governance Framework</li>
                  <li>• Sec. 804: Open Data & API Requirements</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-cyan-300 mb-3">Title IX: Implementation</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Sec. 901: Phased Rollout Schedule</li>
                  <li>• Sec. 902: Interagency Coordination Requirements</li>
                  <li>• Sec. 903: State Partnership Framework</li>
                  <li>• Sec. 904: Municipal Integration Protocol</li>
                  <li>• Sec. 905: Sunset & Reauthorization (12-year cycle)</li>
                </ul>
              </div>
            </div>
          </div>
        </NeuralGlassPanel>

        {/* Comprehensive Tax Strategy */}
        <NeuralGlassPanel className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-6">Comprehensive Tax & Revenue Strategy</h2>
          <div className="space-y-6 text-cyan-100">
            <p className="text-sm italic text-cyan-200">
              50+ revenue mechanisms designed for progressivity, economic efficiency, and behavioral alignment with national goals.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-3">Wealth & Income Taxes</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Wealth Tax:</strong> 0.5% on $10M-$50M, 1% on $50M-$500M, 2% over $500M (~$300B/10yr)</li>
                  <li>• <strong>Estate Tax Reform:</strong> 45% rate, $10M exemption (~$200B/10yr)</li>
                  <li>• <strong>Corporate Minimum:</strong> 21% effective rate (~$250B/10yr)</li>
                  <li>• <strong>Carried Interest:</strong> Close loophole (~$18B/10yr)</li>
                  <li>• <strong>Capital Gains Parity:</strong> Ordinary income rates for high earners (~$100B/10yr)</li>
                  <li>• <strong>GILTI Reform:</strong> Global intangible low-taxed income (~$125B/10yr)</li>
                </ul>
              </div>

              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-3">Transaction & Market Taxes</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Financial Transaction Tax:</strong> 0.1% on stocks, 0.05% bonds (~$777B/10yr)</li>
                  <li>• <strong>Digital Services Tax:</strong> 3% on tech giants $500M+ revenues (~$50B/10yr)</li>
                  <li>• <strong>HFT Tax:</strong> High-frequency trading surcharge (~$30B/10yr)</li>
                  <li>• <strong>Cryptocurrency Tax:</strong> Capital gains enforcement (~$28B/10yr)</li>
                  <li>• <strong>Luxury Tax:</strong> 10% on yachts, private jets, supercars (~$20B/10yr)</li>
                  <li>• <strong>Securities Lending Tax:</strong> 0.05% fee (~$15B/10yr)</li>
                </ul>
              </div>

              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-3">Environmental Taxes</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Carbon Tax:</strong> $40/ton escalating to $75 (~$1T/10yr)</li>
                  <li>• <strong>Methane Fee:</strong> Waste gas charge (~$8B/yr)</li>
                  <li>• <strong>Plastic Tax:</strong> $0.20/lb on virgin plastic (~$5B/yr)</li>
                  <li>• <strong>Water Use Tax:</strong> Industrial overuse fees (~$3B/yr)</li>
                  <li>• <strong>Nitrogen Runoff Fee:</strong> Agricultural pollution charge (~$2B/yr)</li>
                  <li>• <strong>E-Waste Fee:</strong> Electronics disposal tax (~$1B/yr)</li>
                </ul>
              </div>

              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-3">Consumption & Excise Taxes</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Sugary Drink Tax:</strong> $0.02/oz (~$12B/10yr)</li>
                  <li>• <strong>Tobacco Tax Increase:</strong> $1/pack (~$35B/10yr)</li>
                  <li>• <strong>Alcohol Excise Reform:</strong> Updated rates (~$10B/10yr)</li>
                  <li>• <strong>Ammunition Tax:</strong> 50% excise (~$1.5B/yr)</li>
                  <li>• <strong>Gas Guzzler Tax:</strong> $1K-$3K per vehicle (~$3B/yr)</li>
                  <li>• <strong>Fast Fashion Tax:</strong> 5% on rapid-turnover clothing (~$2B/yr)</li>
                </ul>
              </div>

              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-3">Real Estate & Land Taxes</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Vacancy Tax:</strong> 3% annual on empty properties (~$5B/yr)</li>
                  <li>• <strong>Foreign Buyer Surcharge:</strong> 15% on residential purchases (~$3B/yr)</li>
                  <li>• <strong>Land Value Tax:</strong> Unimproved land assessment (~$20B/yr)</li>
                  <li>• <strong>REIT Tax Reform:</strong> Close distribution loopholes (~$5B/yr)</li>
                  <li>• <strong>Short-Term Rental Tax:</strong> 5% on Airbnb/VRBO (~$2B/yr)</li>
                  <li>• <strong>Second Home Surcharge:</strong> Additional property tax (~$3B/yr)</li>
                </ul>
              </div>

              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-3">Financial Sector Taxes</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Bank Leverage Tax:</strong> 0.1% on liabilities over $50B (~$20B/yr)</li>
                  <li>• <strong>Derivatives Tax:</strong> 0.02% on notional value (~$15B/yr)</li>
                  <li>• <strong>Executive Compensation Tax:</strong> 50% over $5M (~$10B/yr)</li>
                  <li>• <strong>Shadow Banking Fee:</strong> Regulatory assessment (~$5B/yr)</li>
                  <li>• <strong>Repo Market Tax:</strong> 0.01% fee (~$8B/yr)</li>
                  <li>• <strong>Credit Default Swap Fee:</strong> Risk assessment charge (~$3B/yr)</li>
                </ul>
              </div>

              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-3">Corporate Reform Taxes</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Stock Buyback Tax:</strong> 4% excise (~$80B/10yr)</li>
                  <li>• <strong>Offshore Profit Tax:</strong> Repatriation incentive (~$50B/yr)</li>
                  <li>• <strong>IP Transfer Tax:</strong> Base erosion prevention (~$15B/yr)</li>
                  <li>• <strong>Debt-to-Equity Ratio Tax:</strong> Over-leverage penalty (~$8B/yr)</li>
                  <li>• <strong>Monopoly Power Tax:</strong> Market concentration fee (~$10B/yr)</li>
                  <li>• <strong>Data Monetization Tax:</strong> User data revenue share (~$12B/yr)</li>
                </ul>
              </div>

              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-3">Health & Safety Taxes</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Opioid Tax:</strong> Manufacturer liability fee (~$5B/yr)</li>
                  <li>• <strong>Pharmaceutical Windfall Tax:</strong> Excessive pricing penalty (~$8B/yr)</li>
                  <li>• <strong>Medical Device Tax:</strong> 2.3% excise (~$4B/yr)</li>
                  <li>• <strong>Processed Food Tax:</strong> Ultra-processed surcharge (~$6B/yr)</li>
                  <li>• <strong>Hazardous Chemical Fee:</strong> Industrial use tax (~$3B/yr)</li>
                  <li>• <strong>Air Pollution Tax:</strong> Emissions-based industrial fee (~$7B/yr)</li>
                </ul>
              </div>

              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-3">Emerging Tech & Innovation</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>AI Automation Tax:</strong> Job displacement mitigation (~$10B/yr by 2030)</li>
                  <li>• <strong>Robot Tax:</strong> Per-unit industrial automation fee (~$5B/yr)</li>
                  <li>• <strong>Algorithm Tax:</strong> High-frequency decision-making fee (~$3B/yr)</li>
                  <li>• <strong>Spectrum Auction Revenue:</strong> 5G/6G licensing (~$20B one-time)</li>
                  <li>• <strong>Space Activity Tax:</strong> Commercial launch & orbit fee (~$2B/yr)</li>
                  <li>• <strong>Genetic Data Tax:</strong> Biotech revenue share (~$1B/yr)</li>
                </ul>
              </div>

              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-3">Infrastructure & Transportation</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Vehicle Miles Traveled Tax:</strong> $0.02/mile (~$40B/yr)</li>
                  <li>• <strong>Congestion Pricing:</strong> Urban center surcharges (~$8B/yr)</li>
                  <li>• <strong>Aviation Fuel Tax Increase:</strong> $0.50/gallon (~$5B/yr)</li>
                  <li>• <strong>Freight Rail Tax:</strong> Ton-mile assessment (~$3B/yr)</li>
                  <li>• <strong>Port Use Fee:</strong> Container throughput tax (~$4B/yr)</li>
                  <li>• <strong>Public Land Grazing Fee:</strong> Increase to market rate (~$1B/yr)</li>
                </ul>
              </div>

              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-3">Resource Extraction Taxes</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Oil & Gas Royalty Reform:</strong> 18.75% federal lands (~$15B/yr)</li>
                  <li>• <strong>Mining Royalty:</strong> 8% hardrock minerals (~$3B/yr)</li>
                  <li>• <strong>Timber Harvest Tax:</strong> Federal forest revenue share (~$2B/yr)</li>
                  <li>• <strong>Groundwater Extraction Fee:</strong> Industrial pumping tax (~$2B/yr)</li>
                  <li>• <strong>Sand & Gravel Tax:</strong> $0.50/ton construction materials (~$1B/yr)</li>
                  <li>• <strong>Rare Earth Tax:</strong> Strategic mineral extraction fee (~$1B/yr)</li>
                </ul>
              </div>

              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-3">Loophole Closures & Enforcement</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>IRS Enforcement Funding:</strong> $80B investment → $200B+ recovered</li>
                  <li>• <strong>Tax Haven Crackdown:</strong> OECD coordination (~$50B/yr)</li>
                  <li>• <strong>Transfer Pricing Reform:</strong> Multinational profit shifting (~$30B/yr)</li>
                  <li>• <strong>Like-Kind Exchange Limit:</strong> Real estate loophole (~$10B/yr)</li>
                  <li>• <strong>Charitable Deduction Reform:</strong> High-income limits (~$15B/yr)</li>
                  <li>• <strong>Qualified Business Income Fix:</strong> Pass-through abuse (~$20B/yr)</li>
                </ul>
              </div>
            </div>

            <div className="bg-cyan-800/30 rounded-lg p-6 mt-6">
              <h4 className="font-bold text-cyan-300 mb-3 text-lg">Total 10-Year Revenue Potential</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-cyan-200">Conservative Estimate:</p>
                  <p className="text-2xl font-bold text-cyan-300">$3.5 Trillion</p>
                </div>
                <div>
                  <p className="font-semibold text-cyan-200">Optimistic Scenario:</p>
                  <p className="text-2xl font-bold text-cyan-300">$5.2 Trillion</p>
                </div>
              </div>
              <p className="text-xs text-cyan-200 mt-4 italic">
                * Estimates based on CBO, JCT, and academic economic modeling. Actual revenue depends on implementation timeline, enforcement, and economic conditions.
              </p>
            </div>
          </div>
        </NeuralGlassPanel>

        {/* Nexus Prime HQ - Extended Details */}
        <NeuralGlassPanel className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-6">Nexus Prime HQ: Engineering & Specifications</h2>
          <div className="space-y-6 text-cyan-100">
            <div className="bg-cyan-900/20 rounded-lg p-4">
              <h3 className="text-xl font-bold text-cyan-300 mb-3">Location: Callahan County, Texas</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-cyan-200 mb-2">Strategic Advantages:</p>
                  <ul className="space-y-1">
                    <li>• Geographic center of United States</li>
                    <li>• Low seismic risk, stable geology</li>
                    <li>• Abundant solar/wind renewable resources</li>
                    <li>• Available land: 2,500+ acres at Phoenix Ranch</li>
                    <li>• Existing infrastructure corridors (I-20, rail)</li>
                    <li>• Lower construction costs than coastal metros</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-cyan-200 mb-2">Phoenix Ranch Property:</p>
                  <ul className="space-y-1">
                    <li>• 2,500 acres available for development</li>
                    <li>• Requires soil remediation (caliche deposits)</li>
                    <li>• Water infrastructure: aquifer access + AWG systems</li>
                    <li>• Renewable energy potential: 500MW+ combined</li>
                    <li>• Future expansion capacity for 50+ years</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-3">Phase 1: Foundation (2026-2028)</h4>
                <p className="text-sm mb-3"><strong>Budget:</strong> $304 Million | <strong>Size:</strong> 80,000 sq ft</p>
                <ul className="space-y-2 text-sm">
                  <li><strong>Site Preparation:</strong> $50M
                    <ul className="ml-4 mt-1 space-y-1 text-xs">
                      <li>- Soil remediation & caliche removal</li>
                      <li>- Grading & drainage infrastructure</li>
                      <li>- Utility corridor establishment</li>
                    </ul>
                  </li>
                  <li><strong>Core Structure:</strong> $120M
                    <ul className="ml-4 mt-1 space-y-1 text-xs">
                      <li>- LEED Platinum certified design</li>
                      <li>- Reinforced concrete + steel frame</li>
                      <li>- 3-story central hub building</li>
                      <li>- Seismic & climate resilient</li>
                    </ul>
                  </li>
                  <li><strong>Technology Infrastructure:</strong> $60M
                    <ul className="ml-4 mt-1 space-y-1 text-xs">
                      <li>- Quantum-encrypted data center (5,000 sq ft)</li>
                      <li>- Redundant fiber optic connectivity</li>
                      <li>- Satellite uplink & backup systems</li>
                      <li>- AI governance server farm</li>
                    </ul>
                  </li>
                  <li><strong>Energy Systems:</strong> $40M
                    <ul className="ml-4 mt-1 space-y-1 text-xs">
                      <li>- 20MW solar array (50 acres)</li>
                      <li>- 5MW wind turbines (3 units)</li>
                      <li>- 10MWh battery storage</li>
                      <li>- Modular nuclear backup (2030 installation)</li>
                    </ul>
                  </li>
                  <li><strong>Water & Sustainability:</strong> $20M
                    <ul className="ml-4 mt-1 space-y-1 text-xs">
                      <li>- Atmospheric Water Generation (100K gal/day)</li>
                      <li>- Rainwater capture & filtration</li>
                      <li>- Greywater recycling system</li>
                      <li>- Deep well aquifer access (backup)</li>
                    </ul>
                  </li>
                  <li><strong>Security & Operations:</strong> $14M
                    <ul className="ml-4 mt-1 space-y-1 text-xs">
                      <li>- Perimeter fencing & access control</li>
                      <li>- 24/7 security operations center</li>
                      <li>- Emergency systems & shelter</li>
                      <li>- Initial furniture & equipment</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-xs text-cyan-200 mt-3 italic">
                  <strong>Staffing Capacity:</strong> 200 personnel | <strong>Completion:</strong> Q4 2028
                </p>
              </div>

              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-3">Phase 2: Expansion (2029-2032)</h4>
                <p className="text-sm mb-3"><strong>Budget:</strong> $446 Million | <strong>Size:</strong> +500,000 sq ft</p>
                <ul className="space-y-2 text-sm">
                  <li><strong>Main Campus Construction:</strong> $200M
                    <ul className="ml-4 mt-1 space-y-1 text-xs">
                      <li>- 12 SRD directorate buildings (25K sq ft each)</li>
                      <li>- Central assembly hall (50K sq ft)</li>
                      <li>- Innovation labs & research wings</li>
                      <li>- Connected via enclosed walkways</li>
                    </ul>
                  </li>
                  <li><strong>Operations Expansion:</strong> $80M
                    <ul className="ml-4 mt-1 space-y-1 text-xs">
                      <li>- Command & control center (20K sq ft)</li>
                      <li>- 24/7 monitoring & analysis facilities</li>
                      <li>- Emergency response coordination</li>
                      <li>- Public transparency broadcast studio</li>
                    </ul>
                  </li>
                  <li><strong>Advanced Technology:</strong> $90M
                    <ul className="ml-4 mt-1 space-y-1 text-xs">
                      <li>- Expanded data center (25K sq ft)</li>
                      <li>- AI governance supercomputing cluster</li>
                      <li>- Quantum encryption upgrade (512-qubit)</li>
                      <li>- Digital twin simulation environment</li>
                    </ul>
                  </li>
                  <li><strong>Energy & Resilience:</strong> $40M
                    <ul className="ml-4 mt-1 space-y-1 text-xs">
                      <li>- Modular nuclear reactor (50MW)</li>
                      <li>- Additional solar (30MW) + wind (15MW)</li>
                      <li>- 50MWh battery storage expansion</li>
                      <li>- Microgrid redundancy systems</li>
                    </ul>
                  </li>
                  <li><strong>Residential & Support:</strong> $25M
                    <ul className="ml-4 mt-1 space-y-1 text-xs">
                      <li>- On-site housing (50 units)</li>
                      <li>- Cafeteria & wellness center</li>
                      <li>- Conference & training facilities</li>
                      <li>- Visitor center & public access areas</li>
                    </ul>
                  </li>
                  <li><strong>Transportation & Logistics:</strong> $11M
                    <ul className="ml-4 mt-1 space-y-1 text-xs">
                      <li>- Helipad & emergency landing zone</li>
                      <li>- Electric vehicle fleet (50 vehicles)</li>
                      <li>- Parking structures (500 spaces)</li>
                      <li>- Autonomous shuttle system</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-xs text-cyan-200 mt-3 italic">
                  <strong>Staffing Capacity:</strong> 1,200+ personnel | <strong>Completion:</strong> Q2 2032
                </p>
              </div>
            </div>

            <div className="bg-cyan-800/30 rounded-lg p-4 mt-4">
              <h4 className="font-bold text-cyan-300 mb-3">Sustainability & Innovation Features</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-cyan-200 mb-2">Carbon Negative Operations</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Net-zero energy consumption by 2030</li>
                    <li>• Carbon sequestration landscaping</li>
                    <li>• All-electric transportation fleet</li>
                    <li>• Zero waste to landfill goal</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-cyan-200 mb-2">Advanced Materials</p>
                  <ul className="space-y-1 text-xs">
                    <li>• 3D-printed structural components</li>
                    <li>• Recycled steel & concrete (40%+)</li>
                    <li>• Smart glass (auto-tinting)</li>
                    <li>• Phase-change cooling materials</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-cyan-200 mb-2">Resilience Standards</p>
                  <ul className="space-y-1 text-xs">
                    <li>• 30-day autonomous operation capability</li>
                    <li>• Category 5 wind resistance</li>
                    <li>• EMP-hardened critical systems</li>
                    <li>• Redundant life support systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </NeuralGlassPanel>

        {/* 10-Year Projection Roadmap */}
        <NeuralGlassPanel className="mb-8">
          <h2 className="text-3xl font-bold text-cyan-300 mb-6 text-center">10-Year Projection Roadmap: 2026-2037</h2>
          <p className="text-center text-cyan-100 mb-8 italic">
            Precise impact analysis assuming Day 1 implementation without hindrances
          </p>

          {/* Executive Impact Summary */}
          <div className="bg-linear-to-r from-cyan-900/40 to-blue-900/40 rounded-lg p-6 mb-8 border-2 border-cyan-400/50">
            <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center">Total Impact Summary (2026-2037)</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">1.86M</div>
                <div className="text-sm text-cyan-200">Physical Lives Saved</div>
                <div className="text-xs text-cyan-300 mt-1">vs. 900K annual preventable deaths</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">46.2M</div>
                <div className="text-sm text-cyan-200">Mental Health Improved</div>
                <div className="text-xs text-cyan-300 mt-1">Depression, addiction, PTSD treatment</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">94M</div>
                <div className="text-sm text-cyan-200">Educationally Improved</div>
                <div className="text-xs text-cyan-300 mt-1">K-12, college, adult education</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">86.1M</div>
                <div className="text-sm text-cyan-200">Productive Citizens Added</div>
                <div className="text-xs text-cyan-300 mt-1">Employment, workforce re-entry</div>
              </div>
            </div>
          </div>

          {/* Economic Impact */}
          <div className="bg-cyan-800/30 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-cyan-300 mb-4 text-center">Economic Impact & National Growth</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-cyan-900/30 rounded-lg p-4 text-center">
                <div className="text-sm text-cyan-200 mb-2">2024 Baseline GDP</div>
                <div className="text-3xl font-bold text-cyan-400">$28.8T</div>
              </div>
              <div className="bg-cyan-900/30 rounded-lg p-4 text-center">
                <div className="text-sm text-cyan-200 mb-2">2037 Business-as-Usual</div>
                <div className="text-3xl font-bold text-orange-400">$41.2T</div>
                <div className="text-xs text-cyan-300 mt-1">2.8% annual growth</div>
              </div>
              <div className="bg-linear-to-r from-cyan-600/30 to-blue-600/30 rounded-lg p-4 text-center border-2 border-cyan-400/50">
                <div className="text-sm text-cyan-200 mb-2">2037 With Illumio</div>
                <div className="text-3xl font-bold text-green-400">$52.6T</div>
                <div className="text-xs text-cyan-300 mt-1">4.9% annual growth</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-3">GDP Contribution Breakdown</h4>
                <ul className="space-y-2 text-sm text-cyan-100">
                  <li>• Direct SRD Impact: <span className="text-cyan-300 font-semibold">+$31.1T</span></li>
                  <li>• Economic Multipliers: <span className="text-cyan-300 font-semibold">+$7.3T</span></li>
                  <li>• <strong>Total GDP Added: <span className="text-green-400">+$38.4T</span></strong></li>
                  <li>• Tax Revenue Generated: <span className="text-cyan-300 font-semibold">$4.8T</span></li>
                  <li>• Healthcare Cost Savings: <span className="text-cyan-300 font-semibold">$2.4T</span></li>
                  <li>• Criminal Justice Savings: <span className="text-cyan-300 font-semibold">$840B</span></li>
                </ul>
              </div>

              <div className="bg-cyan-900/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-3">Return on Investment (ROI)</h4>
                <div className="space-y-3 text-sm text-cyan-100">
                  <div>
                    <div className="text-cyan-200">Total Investment:</div>
                    <div className="text-2xl font-bold text-cyan-400">$1.25T</div>
                    <div className="text-xs text-cyan-300">(Illumio Fund + federal reallocations + state co-investment)</div>
                  </div>
                  <div>
                    <div className="text-cyan-200">Total Economic Value Created:</div>
                    <div className="text-2xl font-bold text-green-400">$70.04T</div>
                  </div>
                  <div className="border-t border-cyan-500/30 pt-2">
                    <div className="text-cyan-200">Comprehensive ROI:</div>
                    <div className="text-3xl font-bold text-green-400">5,603%</div>
                    <div className="text-sm text-cyan-300 mt-1">Every $1 invested returns $56.03</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Year-by-Year Projection Table */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-cyan-300 mb-4 text-center">Year-by-Year Progression (2026-2037)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-cyan-100">
                <thead className="bg-cyan-900/50 text-cyan-300">
                  <tr>
                    <th className="p-3 text-left">Year</th>
                    <th className="p-3 text-left">Phase</th>
                    <th className="p-3 text-right">Investment</th>
                    <th className="p-3 text-right">Lives Saved</th>
                    <th className="p-3 text-right">Mental Health</th>
                    <th className="p-3 text-right">Education</th>
                    <th className="p-3 text-right">Jobs (Cum.)</th>
                    <th className="p-3 text-right">GDP Impact</th>
                    <th className="p-3 text-right">Labor Force</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cyan-800/30">
                  <tr className="bg-cyan-900/20">
                    <td className="p-3 font-semibold">2024</td>
                    <td className="p-3 text-cyan-400">Baseline</td>
                    <td className="p-3 text-right">-</td>
                    <td className="p-3 text-right text-red-400">900K deaths</td>
                    <td className="p-3 text-right">21M depressed</td>
                    <td className="p-3 text-right">200K dropouts</td>
                    <td className="p-3 text-right">158M</td>
                    <td className="p-3 text-right">$28.8T</td>
                    <td className="p-3 text-right">62.8%</td>
                  </tr>
                  <tr className="hover:bg-cyan-900/10">
                    <td className="p-3 font-semibold text-cyan-300">2026</td>
                    <td className="p-3">Launch</td>
                    <td className="p-3 text-right">$45B</td>
                    <td className="p-3 text-right text-green-400">42K saved</td>
                    <td className="p-3 text-right">1.8M improved</td>
                    <td className="p-3 text-right">3.2M impacted</td>
                    <td className="p-3 text-right">+2.4M</td>
                    <td className="p-3 text-right">+$340B</td>
                    <td className="p-3 text-right">63.4%</td>
                  </tr>
                  <tr className="hover:bg-cyan-900/10">
                    <td className="p-3 font-semibold text-cyan-300">2027</td>
                    <td className="p-3">Foundation</td>
                    <td className="p-3 text-right">$68B</td>
                    <td className="p-3 text-right text-green-400">78K saved</td>
                    <td className="p-3 text-right">3.6M improved</td>
                    <td className="p-3 text-right">8.1M impacted</td>
                    <td className="p-3 text-right">+5.8M</td>
                    <td className="p-3 text-right">+$820B</td>
                    <td className="p-3 text-right">64.6%</td>
                  </tr>
                  <tr className="hover:bg-cyan-900/10 bg-cyan-800/20">
                    <td className="p-3 font-semibold text-cyan-300">2028</td>
                    <td className="p-3">Foundation</td>
                    <td className="p-3 text-right">$82B</td>
                    <td className="p-3 text-right text-green-400">104K saved</td>
                    <td className="p-3 text-right">5.9M improved</td>
                    <td className="p-3 text-right">14.2M impacted</td>
                    <td className="p-3 text-right">+8.2M</td>
                    <td className="p-3 text-right text-green-400">+$1.48T ✓</td>
                    <td className="p-3 text-right">65.9%</td>
                  </tr>
                  <tr className="hover:bg-cyan-900/10">
                    <td className="p-3 font-semibold text-cyan-300">2029</td>
                    <td className="p-3">Acceleration</td>
                    <td className="p-3 text-right">$94B</td>
                    <td className="p-3 text-right text-green-400">136K saved</td>
                    <td className="p-3 text-right">8.4M improved</td>
                    <td className="p-3 text-right">22.8M impacted</td>
                    <td className="p-3 text-right">+14.6M</td>
                    <td className="p-3 text-right">+$2.34T</td>
                    <td className="p-3 text-right">67.8%</td>
                  </tr>
                  <tr className="hover:bg-cyan-900/10 bg-cyan-800/20">
                    <td className="p-3 font-semibold text-cyan-300">2030</td>
                    <td className="p-3">Acceleration</td>
                    <td className="p-3 text-right">$88B</td>
                    <td className="p-3 text-right text-green-400">158K saved</td>
                    <td className="p-3 text-right">11.2M improved</td>
                    <td className="p-3 text-right">32.4M impacted</td>
                    <td className="p-3 text-right">+24.2M</td>
                    <td className="p-3 text-right text-green-400">+$3.62T ✓</td>
                    <td className="p-3 text-right">69.4%</td>
                  </tr>
                  <tr className="hover:bg-cyan-900/10">
                    <td className="p-3 font-semibold text-cyan-300">2031</td>
                    <td className="p-3">Acceleration</td>
                    <td className="p-3 text-right">$76B</td>
                    <td className="p-3 text-right text-green-400">174K saved</td>
                    <td className="p-3 text-right">14.8M improved</td>
                    <td className="p-3 text-right">43.6M impacted</td>
                    <td className="p-3 text-right">+34.6M</td>
                    <td className="p-3 text-right">+$5.18T</td>
                    <td className="p-3 text-right">71.2%</td>
                  </tr>
                  <tr className="hover:bg-cyan-900/10">
                    <td className="p-3 font-semibold text-cyan-300">2032</td>
                    <td className="p-3">Acceleration</td>
                    <td className="p-3 text-right">$84B</td>
                    <td className="p-3 text-right text-green-400">186K saved</td>
                    <td className="p-3 text-right">18.6M improved</td>
                    <td className="p-3 text-right">56.2M impacted</td>
                    <td className="p-3 text-right">+46.4M</td>
                    <td className="p-3 text-right">+$7.04T</td>
                    <td className="p-3 text-right">72.8%</td>
                  </tr>
                  <tr className="hover:bg-cyan-900/10 bg-cyan-800/20">
                    <td className="p-3 font-semibold text-cyan-300">2033</td>
                    <td className="p-3">Maturity</td>
                    <td className="p-3 text-right">$72B</td>
                    <td className="p-3 text-right text-green-400">194K saved</td>
                    <td className="p-3 text-right">22.8M improved</td>
                    <td className="p-3 text-right">69.8M impacted</td>
                    <td className="p-3 text-right">+58.2M</td>
                    <td className="p-3 text-right text-green-400">+$9.22T ✓</td>
                    <td className="p-3 text-right">73.9%</td>
                  </tr>
                  <tr className="hover:bg-cyan-900/10">
                    <td className="p-3 font-semibold text-cyan-300">2034</td>
                    <td className="p-3">Maturity</td>
                    <td className="p-3 text-right">$68B</td>
                    <td className="p-3 text-right text-green-400">198K saved</td>
                    <td className="p-3 text-right">27.4M improved</td>
                    <td className="p-3 text-right">82.4M impacted</td>
                    <td className="p-3 text-right">+68.8M</td>
                    <td className="p-3 text-right">+$11.64T</td>
                    <td className="p-3 text-right">74.3%</td>
                  </tr>
                  <tr className="hover:bg-cyan-900/10">
                    <td className="p-3 font-semibold text-cyan-300">2035</td>
                    <td className="p-3">Maturity</td>
                    <td className="p-3 text-right">$64B</td>
                    <td className="p-3 text-right text-green-400">200K saved</td>
                    <td className="p-3 text-right">32.6M improved</td>
                    <td className="p-3 text-right">94.2M impacted</td>
                    <td className="p-3 text-right">+76.4M</td>
                    <td className="p-3 text-right">+$14.32T</td>
                    <td className="p-3 text-right">74.3%</td>
                  </tr>
                  <tr className="hover:bg-cyan-900/10">
                    <td className="p-3 font-semibold text-cyan-300">2036</td>
                    <td className="p-3">Sustainment</td>
                    <td className="p-3 text-right">$58B</td>
                    <td className="p-3 text-right text-green-400">198K saved</td>
                    <td className="p-3 text-right">38.4M improved</td>
                    <td className="p-3 text-right">104.8M impacted</td>
                    <td className="p-3 text-right">+82.2M</td>
                    <td className="p-3 text-right">+$17.18T</td>
                    <td className="p-3 text-right">74.3%</td>
                  </tr>
                  <tr className="hover:bg-cyan-900/10 bg-linear-to-r from-cyan-900/40 to-blue-900/40 border-2 border-cyan-400/50">
                    <td className="p-3 font-bold text-cyan-300">2037</td>
                    <td className="p-3 font-semibold">Sustainment</td>
                    <td className="p-3 text-right font-semibold">$51B</td>
                    <td className="p-3 text-right text-green-400 font-bold">191K saved</td>
                    <td className="p-3 text-right font-bold">46.2M improved</td>
                    <td className="p-3 text-right font-bold">114.6M impacted</td>
                    <td className="p-3 text-right font-bold">+86.1M</td>
                    <td className="p-3 text-right text-green-400 font-bold">$52.6T Total</td>
                    <td className="p-3 text-right font-bold">74.3%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-xs text-cyan-300 space-y-1">
              <p>✓ = Key milestone achieved (2028: Break-even, 2030: Full SRD capacity, 2033: Self-sustaining revenue)</p>
              <p>* GDP Impact shows cumulative additional GDP above 2024 baseline trajectory</p>
              <p>* All figures assume Day 1 implementation without political, legal, or administrative hindrances</p>
            </div>
          </div>

          {/* Lives Saved Breakdown */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-cyan-900/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4">Physical Lives Saved by Category</h3>
              <div className="space-y-3 text-sm text-cyan-100">
                <div className="flex justify-between items-center">
                  <span>Addiction & Mental Health</span>
                  <span className="font-semibold text-cyan-300">441,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Healthcare Access</span>
                  <span className="font-semibold text-cyan-300">377,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Environmental Renewal</span>
                  <span className="font-semibold text-cyan-300">218,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Food Security & Nutrition</span>
                  <span className="font-semibold text-cyan-300">156,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Infrastructure & Safety</span>
                  <span className="font-semibold text-cyan-300">135,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Housing & Homelessness</span>
                  <span className="font-semibold text-cyan-300">132,000</span>
                </div>
                <div className="border-t border-cyan-500/30 pt-2 mt-2 flex justify-between items-center font-bold">
                  <span>Total Lives Saved</span>
                  <span className="text-green-400 text-lg">1,459,000</span>
                </div>
                <div className="text-xs text-cyan-300 mt-3">
                  <p><strong>Cost per life saved:</strong> $582,589</p>
                  <p><strong>Economic value (VSL @ $10.9M):</strong> $15.9 Trillion</p>
                  <p><strong>ROI on lives saved alone:</strong> 1,870%</p>
                </div>
              </div>
            </div>

            <div className="bg-cyan-900/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4">Mental Health Impact Breakdown</h3>
              <div className="space-y-3 text-sm text-cyan-100">
                <div className="flex justify-between items-center">
                  <span>Depression & Anxiety Treated</span>
                  <span className="font-semibold text-cyan-300">27.4M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Substance Abuse Recovery</span>
                  <span className="font-semibold text-cyan-300">9.9M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Trauma & PTSD Treatment</span>
                  <span className="font-semibold text-cyan-300">6.79M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Suicide Crisis Interventions</span>
                  <span className="font-semibold text-cyan-300">2.12M</span>
                </div>
                <div className="border-t border-cyan-500/30 pt-2 mt-2 flex justify-between items-center font-bold">
                  <span>Total Mental Health Impact</span>
                  <span className="text-green-400 text-lg">46.2M</span>
                </div>
                <div className="text-xs text-cyan-300 mt-3">
                  <p><strong>Cost per person treated:</strong> $18,398</p>
                  <p><strong>Lifetime productivity gain:</strong> $284,000/person</p>
                  <p><strong>Economic value:</strong> $13.1 Trillion</p>
                  <p><strong>ROI on mental health:</strong> 154,018%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Educational & Workforce Impact */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-cyan-900/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4">Educational Impact (Net Unique: 94M)</h3>
              <div className="space-y-3 text-sm text-cyan-100">
                <div className="flex justify-between items-center">
                  <span>K-12 Students Improved</span>
                  <span className="font-semibold text-cyan-300">65M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Higher Education Advanced</span>
                  <span className="font-semibold text-cyan-300">60.8M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Adult Education Upskilled</span>
                  <span className="font-semibold text-cyan-300">52.6M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Early Childhood Prepared</span>
                  <span className="font-semibold text-cyan-300">9.2M</span>
                </div>
                <div className="border-t border-cyan-500/30 pt-2 mt-2">
                  <p className="text-xs text-cyan-300 mb-2">Key Outcomes:</p>
                  <ul className="text-xs space-y-1">
                    <li>• 1.8M prevented dropouts</li>
                    <li>• 14.6M community college students</li>
                    <li>• 2.4M STEM graduates added</li>
                    <li>• 18M adults literacy-improved</li>
                    <li>• $5.6T GDP contribution</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-cyan-900/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4">Productive Citizenry Added: 86.1M</h3>
              <div className="space-y-3 text-sm text-cyan-100">
                <div className="flex justify-between items-center">
                  <span>New Jobs Created</span>
                  <span className="font-semibold text-cyan-300">26.4M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Education → Employment Pipeline</span>
                  <span className="font-semibold text-cyan-300">23.6M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Workforce Re-Entry (Recovery)</span>
                  <span className="font-semibold text-cyan-300">12.9M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Labor Force Participation Increase</span>
                  <span className="font-semibold text-cyan-300">12.5M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Immigration Integration</span>
                  <span className="font-semibold text-cyan-300">10.68M</span>
                </div>
                <div className="border-t border-cyan-500/30 pt-2 mt-2">
                  <p className="text-xs text-cyan-300 mb-2">Labor Force Transformation:</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>2024: <span className="font-semibold">62.8%</span></div>
                    <div>2037: <span className="font-semibold text-green-400">74.3%</span></div>
                  </div>
                  <p className="text-xs text-cyan-300 mt-2">+11.5 percentage point increase</p>
                </div>
              </div>
            </div>
          </div>

          {/* GDP Contribution by SRD */}
          <div className="bg-cyan-900/20 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-cyan-300 mb-4">GDP Contributions by SRD (10-Year Cumulative)</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-cyan-100">
              <div className="flex justify-between items-center p-2 bg-cyan-800/20 rounded">
                <span>Education Reform</span>
                <span className="font-semibold text-cyan-300">+$5.6T</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-cyan-800/20 rounded">
                <span>Renewable Energy</span>
                <span className="font-semibold text-cyan-300">+$4.2T</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-cyan-800/20 rounded">
                <span>Transportation & Infrastructure</span>
                <span className="font-semibold text-cyan-300">+$3.8T</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-cyan-800/20 rounded">
                <span>Healthcare Access</span>
                <span className="font-semibold text-cyan-300">+$3.4T</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-cyan-800/20 rounded">
                <span>Digital Equity & Infrastructure</span>
                <span className="font-semibold text-cyan-300">+$2.8T</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-cyan-800/20 rounded">
                <span>Addiction & Mental Health</span>
                <span className="font-semibold text-cyan-300">+$2.6T</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-cyan-800/20 rounded">
                <span>Climate Adaptation</span>
                <span className="font-semibold text-cyan-300">+$2.1T</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-cyan-800/20 rounded">
                <span>Affordable Housing</span>
                <span className="font-semibold text-cyan-300">+$1.9T</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-cyan-800/20 rounded">
                <span>Immigration & Integration</span>
                <span className="font-semibold text-cyan-300">+$1.8T</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-cyan-800/20 rounded">
                <span>Food Security & Agriculture</span>
                <span className="font-semibold text-cyan-300">+$1.4T</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-cyan-800/20 rounded">
                <span>Criminal Justice Reform</span>
                <span className="font-semibold text-cyan-300">+$890B</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-cyan-800/20 rounded">
                <span>Democratic Renewal</span>
                <span className="font-semibold text-cyan-300">+$620B</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-cyan-500/30 flex justify-between items-center font-bold text-lg">
              <span>Total SRD GDP Contribution</span>
              <span className="text-green-400">+$31.1 Trillion</span>
            </div>
          </div>

          {/* How This Effects National Growth */}
          <div className="bg-linear-to-r from-cyan-900/40 to-blue-900/40 rounded-lg p-6 mb-8 border-2 border-cyan-400/50">
            <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center">How This Effects National Growth</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-cyan-300 mb-3">Compound Growth Mechanisms</h4>
                <ul className="space-y-2 text-sm text-cyan-100">
                  <li><strong>Multiplier Effects:</strong>
                    <ul className="ml-4 mt-1 space-y-1 text-xs">
                      <li>• Infrastructure: 1.8x (construction → consumer spending)</li>
                      <li>• Education: 3.2x (skills → innovation → productivity)</li>
                      <li>• Healthcare: 2.4x (wellness → output increase)</li>
                      <li>• Renewable Energy: 2.6x (independence → trade balance)</li>
                    </ul>
                  </li>
                  <li><strong>Velocity of Money:</strong> Illumio wages → consumer spending → business growth → tax revenue</li>
                  <li><strong>Innovation Index:</strong> +67% increase by 2037 (STEM workforce, R&D investment)</li>
                  <li><strong>Life Expectancy:</strong> +3.2 years national average (more productive years per citizen)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-cyan-300 mb-3">Fiscal Sustainability</h4>
                <ul className="space-y-2 text-sm text-cyan-100">
                  <li><strong>Tax Revenue Generated:</strong> $4.8T over 10 years (self-funding beyond 2033)</li>
                  <li><strong>Debt-to-GDP Improvement:</strong> 124% → 98% (stronger fiscal position)</li>
                  <li><strong>Break-Even Timeline:</strong> Mid-2028 (cumulative GDP gains exceed investment)</li>
                  <li><strong>Cost Avoidance:</strong>
                    <ul className="ml-4 mt-1 space-y-1 text-xs">
                      <li>• Preventable deaths: $15.9T (value of statistical life)</li>
                      <li>• Chronic disease treatment: $3.6T avoided</li>
                      <li>• Criminal justice: $680B saved</li>
                      <li>• Disaster losses: $1.8T prevented</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-cyan-500/30">
              <h4 className="font-bold text-cyan-300 mb-3 text-center">The Cost of Inaction</h4>
              <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
                <div className="bg-cyan-800/30 rounded p-3">
                  <div className="text-red-400 font-bold text-2xl mb-1">$18.2T</div>
                  <div className="text-cyan-200">Cost of continued crisis (10 years)</div>
                </div>
                <div className="bg-cyan-800/30 rounded p-3">
                  <div className="text-red-400 font-bold text-2xl mb-1">$2.8T/yr</div>
                  <div className="text-cyan-200">Opportunity cost of delayed action</div>
                </div>
                <div className="bg-linear-to-r from-green-900/30 to-cyan-900/30 rounded p-3 border border-green-400/50">
                  <div className="text-green-400 font-bold text-2xl mb-1">$88.24T</div>
                  <div className="text-cyan-200">Net benefit: Illumio vs. status quo</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Assumptions & Methodology */}
          <div className="bg-cyan-900/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyan-300 mb-4">Methodology & Key Assumptions</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-cyan-100">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Data Sources:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• CDC mortality statistics (2024 baseline)</li>
                  <li>• Congressional Budget Office (CBO) economic projections</li>
                  <li>• Joint Committee on Taxation (JCT) revenue estimates</li>
                  <li>• EPA value of statistical life ($10.9M)</li>
                  <li>• Academic economic modeling (multiplier effects)</li>
                  <li>• Bureau of Labor Statistics employment data</li>
                  <li>• Department of Education outcome studies</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Critical Assumptions:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• <strong>Day 1 implementation:</strong> No political obstruction or legal challenges</li>
                  <li>• <strong>Full funding:</strong> All revenue mechanisms enacted simultaneously</li>
                  <li>• <strong>Optimal efficiency:</strong> 85-90% program effectiveness (realistic best-case)</li>
                  <li>• <strong>Workforce availability:</strong> Sufficient skilled labor for all projects</li>
                  <li>• <strong>Technology readiness:</strong> All specified technologies deployable at scale</li>
                  <li>• <strong>State cooperation:</strong> All 50 states participate fully</li>
                  <li>• <strong>Economic stability:</strong> No major recessions or external shocks</li>
                  <li>• <strong>Linear scaling:</strong> Some benefits compound, others plateau over time</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-cyan-500/30 text-xs text-cyan-300">
              <p className="font-semibold mb-2">Important Note:</p>
              <p>
                These projections represent an optimistic but achievable scenario assuming ideal implementation conditions. 
                Real-world results will vary based on execution quality, political will, economic conditions, and unforeseen 
                challenges. Conservative estimates reduce total impact by approximately 30-40%, still yielding extraordinary 
                returns (ROI 3,000%+) and saving 1M+ lives.
              </p>
            </div>
          </div>
        </NeuralGlassPanel>

        {/* Mission Statement */}
        <NeuralGlassPanel className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">The Illumio Mission</h2>
          <div className="space-y-4 text-cyan-100 text-center">
            <p className="text-xl italic">
              "It's Not Left. It's Not Right. It's Forward."
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="mb-4">
                Project Illumio represents a fundamental reimagining of governance: a networked, transparent, 
                and accountable system that coordinates the collective power of federal, state, and municipal 
                governments with private sector innovation and civic engagement.
              </p>
              <p className="mb-4">
                Through 12 Systemic Renewal Directorates, we address interconnected challenges—from digital 
                equity to renewable energy, from affordable housing to healthcare reform—not as isolated problems, 
                but as components of a single, integrated system.
              </p>
              <p className="font-semibold text-cyan-300">
                This is not a political party's plan. This is America's plan.
              </p>
            </div>
          </div>
        </NeuralGlassPanel>

        {/* Footer */}
        <div className="text-center text-cyan-300 text-sm mt-12">
          <p>Project Illumio: A Whole-of-Nation Framework for Systemic Renewal</p>
          <p className="text-cyan-400 mt-2">Total Estimated Scope: $850 Billion over 12 Years (May 2026-2037)</p>
        </div>
      </div>
    </div>
  );
}
