import React from "react";

export default function WaterSecurityPage() {
  // Awaiting user input for display content
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-slate-900 p-0 md:p-8">
      <div className="max-w-4xl mx-auto py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 drop-shadow-lg">
            Water Security: Blueprint
          </h1>
          <p className="text-cyan-200 text-lg max-w-2xl mx-auto">
            This page will outline the strategy and blueprint for achieving water security. Awaiting further input for display content.
          </p>
        </div>

        {/* Water Infrastructure & Public Health Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">The Direct Link: Water Infrastructure Funding & Public Health</h2>
          <p className="text-cyan-100 mb-4">The connection between water infrastructure funding and public health in the U.S. is direct and profound. Underfunding leads to the deterioration of water systems, which creates several pathways for contamination that result in serious health complications, from chronic diseases to acute outbreaks.</p>
          <p className="text-cyan-100 mb-4">To illustrate this cycle, the following flowchart shows how the failure to adequately fund infrastructure creates specific problems that directly affect human health:</p>
          <div className="overflow-x-auto flex justify-center mb-8">
            <div className="bg-slate-900/60 border-l-4 border-cyan-400 rounded-lg p-6 inline-block min-w-[340px]">
              <div className="flex flex-col items-center">
                <div className="rounded-lg bg-blue-800/80 px-4 py-2 text-cyan-100 font-bold mb-2 shadow">Underfunded & Aging Infrastructure</div>
                <div className="flex flex-col items-center">
                  <span className="text-cyan-400 font-semibold mb-2">↓</span>
                  <div className="flex flex-col md:flex-row gap-4 mb-2">
                    <div className="rounded bg-cyan-900/60 px-3 py-2 text-cyan-100 text-xs w-48 shadow">Physical Breaches &<br/>Lead Leaching</div>
                    <div className="rounded bg-cyan-900/60 px-3 py-2 text-cyan-100 text-xs w-48 shadow">Contaminant Intrusion</div>
                    <div className="rounded bg-cyan-900/60 px-3 py-2 text-cyan-100 text-xs w-48 shadow">Corrosion & Biofilm Growth</div>
                  </div>
                  <span className="text-cyan-400 font-semibold mb-2">↓</span>
                  <div className="flex flex-col md:flex-row gap-4 mb-2">
                    <div className="rounded bg-emerald-900/60 px-3 py-2 text-emerald-100 text-xs w-48 shadow">Neurological damage<br/>Cardiovascular issues (Lead)</div>
                    <div className="rounded bg-emerald-900/60 px-3 py-2 text-emerald-100 text-xs w-48 shadow">Gastrointestinal illness<br/>(E. coli, norovirus)</div>
                    <div className="rounded bg-emerald-900/60 px-3 py-2 text-emerald-100 text-xs w-48 shadow">Infections from<br/>opportunistic pathogens<br/>(Legionella)</div>
                  </div>
                  <span className="text-cyan-400 font-semibold mb-2">↓</span>
                  <div className="flex flex-col md:flex-row gap-4 mb-2">
                    <div className="rounded bg-purple-900/60 px-3 py-2 text-purple-100 text-xs w-48 shadow">Drought & Climate Stress</div>
                  </div>
                  <span className="text-cyan-400 font-semibold mb-2">↓</span>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="rounded bg-pink-900/60 px-3 py-2 text-pink-100 text-xs w-48 shadow">Concentrated Pollutants<br/>& Water-borne Diseases</div>
                    <div className="rounded bg-pink-900/60 px-3 py-2 text-pink-100 text-xs w-48 shadow">Saltwater Intrusion<br/>& Hypertension Risk</div>
                    <div className="rounded bg-pink-900/60 px-3 py-2 text-pink-100 text-xs w-48 shadow">Wildfire Smoke<br/>& Respiratory Illness</div>
                  </div>
                </div>
                <div className="mt-4 flex flex-col items-center">
                  <span className="text-green-400 font-semibold mb-2">↑</span>
                  <div className="rounded bg-green-900/60 px-3 py-2 text-green-100 text-xs w-64 shadow">Historic Infrastructure Investment<br/><span className="font-normal">Targets & Prevents Failures</span></div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-400 mt-8 mb-2">🦠 How Failing Infrastructure Makes People Sick</h3>
          <ul className="list-disc list-inside space-y-2 text-cyan-100 mb-6">
            <li><b>Lead Poisoning from Pipes:</b> An estimated <b>9 million lead service lines</b> still deliver water to homes across the U.S.. Lead is a potent neurotoxin, and no amount is considered safe. Exposure causes <b>irreversible long-term organ damage, lowers IQ in children, and increases risks for miscarriage, cardiovascular disease, and elevated blood pressure</b>. A Harvard analysis found the benefit of replacing these pipes outweighs the cost by a <b>35-to-1 ratio</b>, largely due to avoided healthcare expenses and lost productivity.</li>
            <li><b>Pathogen Intrusion and Waterborne Disease:</b> Aging pipes develop leaks and cracks. During pressure changes, contaminated groundwater and soil can be sucked into the drinking water system, introducing harmful bacteria and viruses. This compromises the final barrier of protection and can lead to outbreaks of gastrointestinal diseases.</li>
            <li><b>Growth of Opportunistic Pathogens:</b> Stagnant water in oversized or deteriorating systems allows disinfectant to fade, enabling biofilms to grow inside pipes. These biofilms can harbor dangerous bacteria like <b>Legionella</b> (which causes Legionnaires' disease) and <b>Mycobacterium avium complex</b>.</li>
            <li><b>Exposure to "Forever Chemicals":</b> Aging systems are often ill-equipped to filter out modern industrial contaminants like PFAS. These chemicals are linked to cancer, liver damage, and decreased fertility.</li>
          </ul>

          <h3 className="text-xl font-bold text-emerald-400 mt-8 mb-2">🌵 How Drought and Climate Change Multiply the Health Risks</h3>
          <ul className="list-disc list-inside space-y-2 text-cyan-100 mb-6">
            <li><b>Concentrated Pollutants and Disease:</b> Drought reduces water flow, leading to <b>higher concentrations of pathogens, heavy metals, and pharmaceuticals</b> in water sources. It also forces birds and mosquitoes that carry diseases like West Nile Virus to cluster around remaining water sources, increasing human outbreak risk.</li>
            <li><b>Saltwater Intrusion and Hypertension:</b> In coastal areas, sea-level rise and over-pumping cause saltwater to infiltrate freshwater aquifers. Consuming sodium-rich water is a direct risk factor for <b>hypertension and pre-eclampsia in pregnant women</b>. Salty groundwater also <b>dramatically accelerates the corrosion of pipes</b>, creating a double threat.</li>
            <li><b>Air Quality and Mental Health:</b> Drought increases particulate air pollution and the frequency of wildfires, worsening <b>asthma and other respiratory conditions</b>. The economic stress of drought on farmers and agricultural communities is also linked to <b>anxiety, depression, and suicide</b>.</li>
          </ul>

          <h3 className="text-xl font-bold text-emerald-400 mt-8 mb-2">🛡️ How Policy and Funding Are the Critical Prescription</h3>
          <ul className="list-disc list-inside space-y-2 text-cyan-100 mb-6">
            <li>The <b>Drinking Water State Revolving Fund (DWSRF)</b> provides loans for projects like replacing lead service lines and installing treatment for PFAS and other contaminants. For example, DWSRF loans have funded lead line replacement in Bloomfield, NJ, and PFAS treatment in Merrimack, NH.</li>
            <li>The <b>Clean Water State Revolving Fund (CWSRF)</b> funds projects that protect water at its source, such as upgrading wastewater plants that discharge into drinking water supplies.</li>
          </ul>
          <p className="text-cyan-100 mb-4">Despite the proven benefits, a massive funding gap remains. The U.S. faces a <b>water infrastructure need exceeding $1 trillion</b>, and the historic funding from the 2021 Bipartisan Infrastructure Law is a down payment that risks being rolled back. This directly threatens future public health outcomes.</p>
        </section>

        {/* Here's How We'll Do It Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">Here's How We'll Do It</h2>
          <h3 className="text-xl font-bold text-cyan-300 mb-2">💧 Three-Tiered Filtration Solutions</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-xs md:text-sm text-cyan-100 border border-cyan-700 rounded-lg">
              <thead className="bg-cyan-900/80">
                <tr>
                  <th className="px-3 py-2 font-bold">Solution Tier</th>
                  <th className="px-3 py-2 font-bold">Example System / Approach</th>
                  <th className="px-3 py-2 font-bold">Estimated Cost (Equipment)</th>
                  <th className="px-3 py-2 font-bold">Key Specifications</th>
                  <th className="px-3 py-2 font-bold">Primary Contaminants Targeted</th>
                  <th className="px-3 py-2 font-bold">Connection to Health & Funding</th>
                </tr>
              </thead>
              <tbody className="bg-slate-900/60">
                <tr className="border-b border-cyan-800">
                  <td className="px-3 py-2 font-semibold">Emergency (Portable)</td>
                  <td className="px-3 py-2">Gravity-fed portable system (e.g., Outback Ready)</td>
                  <td className="px-3 py-2">$200 - $400 (initial system)</td>
                  <td className="px-3 py-2">• Flow Rate: ~1 gal/hour<br/>• Capacity: Filters up to 1,800 gallons per filter set<br/>• Cost/Gal: ~$0.07</td>
                  <td className="px-3 py-2">Bacteria (&gt;99.9999%), Viruses (99.9%), Cysts, Sediment</td>
                  <td className="px-3 py-2">Provides a critical last line of defense during <b>infrastructure failures</b> (boil orders, pipe breaks) or disasters when municipal water is compromised.</td>
                </tr>
                <tr className="border-b border-cyan-800">
                  <td className="px-3 py-2 font-semibold">Personal / Household</td>
                  <td className="px-3 py-2">Whole-House Filtration System (e.g., Aquasana, SpringWell)</td>
                  <td className="px-3 py-2">$1,000 - $2,000 (installed)</td>
                  <td className="px-3 py-2">• Flow Rate: 9-20 GPM<br/>• System Life: 1,000,000 gallons or 10 years<br/>• Maintenance: ~$40 every 6-9 months</td>
                  <td className="px-3 py-2">Chlorine (97%), Lead, PFOA/PFOS, Cysts, Sediment</td>
                  <td className="px-3 py-2">Addresses <b>chronic, low-level exposure</b> to contaminants like lead, PFAS, and disinfectant byproducts linked to long-term health issues. Protects at the point of use.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold">Municipal (Treatment Plant)</td>
                  <td className="px-3 py-2">Granular Activated Carbon (GAC) Building Upgrade</td>
                  <td className="px-3 py-2">Multi-million dollar capital project (e.g., multi-year loan)</td>
                  <td className="px-3 py-2">• Scale: Upgrades a plant serving ~100,000 people<br/>• Function: Removes dissolved organic compounds, algal toxins, trihalomethane precursors</td>
                  <td className="px-3 py-2">Total Organic Carbon (TOC), Harmful Algal Bloom (HAB) toxins, Disinfection Byproducts (DBPs)</td>
                  <td className="px-3 py-2">A <b>core infrastructure investment</b> to handle polluted source water. Directly funded by mechanisms like the <b>State Revolving Funds (SRFs)</b> and <b>WIFIA</b> loans.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-cyan-300 mb-2">📊 Cost-Benefit & Health Impact Analysis</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-xs md:text-sm text-cyan-100 border border-cyan-700 rounded-lg">
              <thead className="bg-cyan-900/80">
                <tr>
                  <th className="px-3 py-2 font-bold">Solution Tier</th>
                  <th className="px-3 py-2 font-bold">Cost-Benefit & Health Impact Analysis</th>
                </tr>
              </thead>
              <tbody className="bg-slate-900/60">
                <tr className="border-b border-cyan-800">
                  <td className="px-3 py-2 font-semibold">Emergency</td>
                  <td className="px-3 py-2"><b>Benefit:</b> Prevents waterborne disease outbreaks during crises. The low per-gallon cost ($0.07) is negligible compared to the cost of illness or buying bottled water. <b>Analysis:</b> This is a low-cost insurance policy against acute public health emergencies caused by system failure.</td>
                </tr>
                <tr className="border-b border-cyan-800">
                  <td className="px-3 py-2 font-semibold">Personal / Household</td>
                  <td className="px-3 py-2"><b>Benefit:</b> Reduces long-term health risk from contaminants like lead (neurotoxin) and PFAS (linked to cancer). Removes chlorine, improving indoor air quality. <b>Analysis:</b> Over a 10-year lifespan, the system filters 1M gallons for ~$1,500, costing $0.0015/gallon. This is far cheaper than a lifetime of bottled water and may reduce potential future healthcare costs.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold">Municipal</td>
                  <td className="px-3 py-2"><b>Benefit:</b> <b>Improves Public Health</b> by consistently providing safe water to an entire community, preventing widespread exposure. <b>Reduces Long-Term Costs:</b> Research shows that poorer source water quality (e.g., higher Total Organic Carbon) directly increases daily chemical and operational treatment costs. A GAC upgrade makes treatment more efficient and resilient against pollution spikes. <b>Analysis:</b> While expensive upfront, these projects are financially viable through federal loans. SRFs and WIFIA loans offer low interest rates and can save communities 25% or more on project costs. The economic return includes avoided healthcare costs and more stable water rates.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-cyan-300 mb-2">🔗 Connecting to Policy and Action</h3>
          <p className="text-cyan-100 mb-4">The municipal solution directly uses the policy mechanisms we discussed. For example, the <b>Drinking Water State Revolving Fund (DWSRF)</b> provides loans precisely for projects like lead line replacement or adding GAC treatment for contaminants like PFAS. The recent <b>Drinking Water System Infrastructure Resilience and Sustainability Program</b> also provides grants for projects that protect systems from natural hazards.</p>
        </section>
      </div>
    </div>
  );
}
