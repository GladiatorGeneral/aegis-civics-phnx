import { NeuralGlassPanel } from "@/components/ui/NeuralGlassPanel";

export default function AiSecurityPage() {
		return (
				<div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-slate-900 p-0 md:p-8">
						<div className="max-w-4xl mx-auto py-8">
								<div className="mb-12 text-center">
										<h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 drop-shadow-lg">
												AI Security: Blueprint
										</h1>
										<p className="text-cyan-200 text-lg max-w-2xl mx-auto">
												This page outlines the strategy and blueprint for achieving robust, ethical, and secure AI systems as a pillar of national resilience.
										</p>
								</div>

								{/* AI Security & Governance Section */}
								<NeuralGlassPanel className="mb-12">
										<h2 className="text-2xl font-bold text-cyan-300 mb-4">The Imperative: AI Security & National Resilience</h2>
										<p className="text-cyan-100 mb-4">Artificial Intelligence is rapidly transforming every sector of society, from critical infrastructure to healthcare, finance, and defense. The stakes for robust, ethical, and secure AI have never been higher. Without a comprehensive blueprint, the risks of bias, misuse, cyberattack, and systemic failure threaten both individual rights and national security.</p>
										<p className="text-cyan-100 mb-4">The following framework details the core pillars of AI security, governance, and public benefit:</p>
										<div className="overflow-x-auto flex justify-center mb-8">
												<div className="bg-slate-900/60 border-l-4 border-cyan-400 rounded-lg p-6 inline-block min-w-[340px]">
														<div className="flex flex-col items-center">
																<div className="rounded-lg bg-blue-800/80 px-4 py-2 text-cyan-100 font-bold mb-2 shadow">AI System Proliferation</div>
																<div className="flex flex-col items-center">
																		<span className="text-cyan-400 font-semibold mb-2">↓</span>
																		<div className="flex flex-col md:flex-row gap-4 mb-2">
																				<div className="rounded bg-cyan-900/60 px-3 py-2 text-cyan-100 text-xs w-48 shadow">Algorithmic Bias & Discrimination</div>
																				<div className="rounded bg-cyan-900/60 px-3 py-2 text-cyan-100 text-xs w-48 shadow">Cybersecurity Vulnerabilities</div>
																				<div className="rounded bg-cyan-900/60 px-3 py-2 text-cyan-100 text-xs w-48 shadow">Autonomy & Control Loss</div>
																		</div>
																		<span className="text-cyan-400 font-semibold mb-2">↓</span>
																		<div className="flex flex-col md:flex-row gap-4 mb-2">
																				<div className="rounded bg-emerald-900/60 px-3 py-2 text-emerald-100 text-xs w-48 shadow">Social Inequity<br/>Erosion of Trust</div>
																				<div className="rounded bg-emerald-900/60 px-3 py-2 text-emerald-100 text-xs w-48 shadow">Critical System Breaches<br/>Data Exfiltration</div>
																				<div className="rounded bg-emerald-900/60 px-3 py-2 text-emerald-100 text-xs w-48 shadow">Unintended Consequences<br/>Cascade Failures</div>
																		</div>
																		<span className="text-cyan-400 font-semibold mb-2">↓</span>
																		<div className="flex flex-col md:flex-row gap-4 mb-2">
																				<div className="rounded bg-purple-900/60 px-3 py-2 text-purple-100 text-xs w-48 shadow">Weaponization<br/>AI-Driven Misinformation</div>
																		</div>
																		<span className="text-cyan-400 font-semibold mb-2">↓</span>
																		<div className="flex flex-col md:flex-row gap-4">
																				<div className="rounded bg-pink-900/60 px-3 py-2 text-pink-100 text-xs w-48 shadow">Democratic Erosion<br/>Loss of Agency</div>
																				<div className="rounded bg-pink-900/60 px-3 py-2 text-pink-100 text-xs w-48 shadow">Economic Displacement<br/>Labor Market Shocks</div>
																				<div className="rounded bg-pink-900/60 px-3 py-2 text-pink-100 text-xs w-48 shadow">National Security Threats</div>
																		</div>
																</div>
																<div className="mt-4 flex flex-col items-center">
																		<span className="text-green-400 font-semibold mb-2">↑</span>
																		<div className="rounded bg-green-900/60 px-3 py-2 text-green-100 text-xs w-64 shadow">Comprehensive AI Governance<br/><span className="font-normal">Mitigates Risks & Maximizes Benefit</span></div>
																</div>
														</div>
												</div>
										</div>

										<h3 className="text-xl font-bold text-emerald-400 mt-8 mb-2">🤖 How Unchecked AI Can Harm Society</h3>
										<ul className="list-disc list-inside space-y-2 text-cyan-100 mb-6">
												<li><b>Algorithmic Bias:</b> AI systems trained on biased data can perpetuate and amplify discrimination in hiring, lending, law enforcement, and healthcare.</li>
												<li><b>Cybersecurity Risks:</b> AI models and infrastructure are prime targets for cyberattacks, data poisoning, and adversarial manipulation.</li>
												<li><b>Loss of Human Oversight:</b> Autonomous systems can make high-stakes decisions without adequate transparency or recourse, leading to unintended harm.</li>
												<li><b>Weaponization & Misinformation:</b> Generative AI can be used to create deepfakes, automate propaganda, and disrupt democratic processes.</li>
												<li><b>Economic Displacement:</b> Rapid automation can outpace workforce retraining, causing unemployment and social instability.</li>
										</ul>

										<h3 className="text-xl font-bold text-emerald-400 mt-8 mb-2">🛡️ The Blueprint: Secure, Ethical, Accountable AI</h3>
										<ul className="list-disc list-inside space-y-2 text-cyan-100 mb-6">
												<li><b>National AI Standards:</b> Establish enforceable standards for safety, transparency, and fairness in all critical AI systems.</li>
												<li><b>AI Audit & Certification:</b> Require independent audits and certification for high-risk AI applications, including explainability and bias testing.</li>
												<li><b>Cybersecurity by Design:</b> Mandate robust security protocols, continuous monitoring, and rapid response for AI infrastructure.</li>
												<li><b>Human-in-the-Loop:</b> Ensure meaningful human oversight for all consequential AI decisions, especially in justice, healthcare, and defense.</li>
												<li><b>Public Benefit Mandate:</b> Prioritize AI development that advances public good, protects rights, and enhances democratic participation.</li>
										</ul>
								</NeuralGlassPanel>

								{/* Implementation Pathways Section */}
								<section className="mt-16">
										<h2 className="text-2xl font-bold text-emerald-400 mb-4">Implementation Pathways</h2>
										<h3 className="text-xl font-bold text-cyan-300 mb-2">🔒 Five Pillars of AI Security</h3>
										<div className="overflow-x-auto mb-6">
												<table className="min-w-full text-xs md:text-sm text-cyan-100 border border-cyan-700 rounded-lg">
														<thead className="bg-cyan-900/80">
																<tr>
																		<th className="px-3 py-2 font-bold">Pillar</th>
																		<th className="px-3 py-2 font-bold">Key Actions</th>
																		<th className="px-3 py-2 font-bold">Lead Agency</th>
																		<th className="px-3 py-2 font-bold">Metrics</th>
																</tr>
														</thead>
														<tbody className="bg-slate-900/60">
																<tr className="border-b border-cyan-800">
																		<td className="px-3 py-2 font-semibold">1. Safety & Robustness</td>
																		<td className="px-3 py-2">Red-teaming, adversarial testing, fail-safe design</td>
																		<td className="px-3 py-2">NIST, CISA</td>
																		<td className="px-3 py-2"># of critical systems certified</td>
																</tr>
																<tr className="border-b border-cyan-800">
																		<td className="px-3 py-2 font-semibold">2. Fairness & Equity</td>
																		<td className="px-3 py-2">Bias audits, representative data, impact assessments</td>
																		<td className="px-3 py-2">EEOC, DOJ</td>
																		<td className="px-3 py-2">Disparity reduction index</td>
																</tr>
																<tr className="border-b border-cyan-800">
																		<td className="px-3 py-2 font-semibold">3. Security & Resilience</td>
																		<td className="px-3 py-2">Penetration testing, supply chain security, incident response</td>
																		<td className="px-3 py-2">CISA, NSA</td>
																		<td className="px-3 py-2"># of incidents detected/responded</td>
																</tr>
																<tr className="border-b border-cyan-800">
																		<td className="px-3 py-2 font-semibold">4. Transparency & Explainability</td>
																		<td className="px-3 py-2">Model documentation, explainable AI, open reporting</td>
																		<td className="px-3 py-2">NIST, OSTP</td>
																		<td className="px-3 py-2">% of models with public documentation</td>
																</tr>
																<tr>
																		<td className="px-3 py-2 font-semibold">5. Human Oversight</td>
																		<td className="px-3 py-2">Human-in-the-loop, escalation protocols, recourse mechanisms</td>
																		<td className="px-3 py-2">All agencies</td>
																		<td className="px-3 py-2"># of escalations reviewed</td>
																</tr>
														</tbody>
												</table>
										</div>

										<h3 className="text-xl font-bold text-cyan-300 mt-8 mb-2">⚙️ National AI Security Stack</h3>
										<ul className="list-disc list-inside space-y-2 text-cyan-100 mb-6">
												<li><b>AI Security Operations Center (AISOCC):</b> National hub for monitoring, threat intelligence, and rapid response to AI-related incidents.</li>
												<li><b>Open Standards & Interoperability:</b> Mandate open protocols for critical AI systems to ensure transparency and resilience.</li>
												<li><b>AI Talent Pipeline:</b> Invest in education, fellowships, and public service programs to build a diverse, ethical AI workforce.</li>
												<li><b>Public Engagement:</b> Establish citizen advisory boards and participatory design for high-impact AI deployments.</li>
										</ul>
								</section>
						</div>
				</div>
		);
}
