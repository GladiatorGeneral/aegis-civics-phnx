import React from "react";
import { NeuralGlassPanel } from "@/components/ui/NeuralGlassPanel";
import { MedicalSystemDiagram } from "@/components/ui/MedicalSystemDiagram";

export default function MedicalSecurityPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 p-4 md:p-8">
			<div className="max-w-4xl mx-auto py-8">
				<div className="mb-10 text-center">
					<h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent mb-3">Medical Security: Blueprint</h1>
					<p className="text-slate-200 max-w-2xl mx-auto">A resilient medical system requires integrated surveillance, robust supply chains, adaptable care delivery, and an empowered workforce. This blueprint maps interventions across those domains.</p>
				</div>

				<div className="prose prose-invert prose-lg max-w-none text-cyan-100 mb-6">
					<h2 className="text-2xl font-bold text-cyan-300 mb-4">The American Health Security and Economic Prosperity Act of 2026</h2>
					<p className="text-cyan-200 font-semibold mb-2">119th CONGRESS<br/>1st Session<br/>S. / H.R. ___</p>
					<p className="italic text-cyan-300 mb-4">An Act</p>
					<p>To establish a universal health security program for all residents of the United States, to reduce the cost of prescription drugs and ensure the security of the pharmaceutical supply chain, to strengthen the healthcare safety net, to provide for a transition to a value-based healthcare system, to stimulate economic growth, and for other purposes.</p>
					<p className="mb-4">Be it enacted by the Senate and House of Representatives of the United States of America in Congress assembled,</p>

					<h3 className="text-xl font-bold text-blue-300 mt-8 mb-2">SECTION 1. SHORT TITLE; TABLE OF CONTENTS.</h3>
					<ul className="mb-4">
						<li><b>Short Title.</b>—This Act may be cited as the “American Health Security and Economic Prosperity Act of 2026”.</li>
						<li><b>Table Of Contents.</b>—The table of contents for this Act is as follows:</li>
					</ul>

					<div className="bg-cyan-900/40 border-l-4 border-cyan-400 p-4 rounded-lg mb-6">
						<b>DIVISION A—THE AMERICAN HEALTH SECURITY PROGRAM</b><br/>
						Title I—Universal Entitlement to Health Coverage<br/>
						Title II—Benefits and Cost-Sharing<br/>
						Title III—Financing the American Health Security Program<br/>
						Title IV—Provider Participation and Payment Reform<br/>
						<br/>
						<b>DIVISION B—PRESCRIPTION DRUG AFFORDABILITY AND SUPPLY CHAIN RESILIENCE</b><br/>
						Title V—Prescription Drug Negotiation and Pricing<br/>
						Title VI—Supply Chain Transparency and Security<br/>
						Title VII—Safe Personal Importation and International Cooperation<br/>
						<br/>
						<b>DIVISION C—STRENGTHENING THE HEALTHCARE SAFETY NET AND CONSUMER PROTECTIONS</b><br/>
						Title VIII—Mandatory Community Benefit Standards for Non-Profit Hospitals<br/>
						Title IX—Enhanced Insurance Regulations and Consumer Protections<br/>
						Title X—Support for Vulnerable Populations<br/>
						<br/>
						<b>DIVISION D—TRANSITION, IMPLEMENTATION, AND ECONOMIC STABILIZATION</b><br/>
						Title XI—Transition Authority and "Day 1" Implementation<br/>
						Title XII—The Health Security Transition Trust Fund<br/>
						Title XIII—Workforce and Economic Development Programs<br/>
						Title XIV—Information Technology and Data Infrastructure<br/>
						<br/>
						<b>DIVISION E—BUDGETARY EFFECTS, DEFICIT REDUCTION, AND ECONOMIC IMPACT</b><br/>
						Title XV—Offsets and Financing<br/>
						Title XVI—Congressional Budget Office Analysis and Reporting<br/>
						<br/>
						<b>DIVISION F—GENERAL PROVISIONS AND CONFORMING AMENDMENTS</b><br/>
						Title XVII—General Provisions
					</div>

					<h3 className="text-xl font-bold text-cyan-300 mt-8 mb-2">DIVISION A—THE AMERICAN HEALTH SECURITY PROGRAM</h3>
					<h4 className="text-lg font-semibold text-blue-200 mt-6 mb-2">TITLE I—UNIVERSAL ENTITLEMENT TO HEALTH COVERAGE</h4>
					<b>Sec. 1001. Establishment of the American Health Security Program.</b>
					<ul className="mb-2">
						<li><b>IN GENERAL.</b>—Notwithstanding any other provision of law, there is established in the Department of Health and Human Services (HHS) the American Health Security Program (in this Act referred to as the “Program”) to provide comprehensive health coverage for all residents of the United States.</li>
						<li><b>UNIVERSAL ENROLLMENT.</b>
							<ul>
								<li>EFFECTIVE DATE ENROLLMENT.—On the effective date established in Title XI, all legal U.S. residents shall be automatically enrolled in the Program.</li>
								<li>ONGOING ENROLLMENT.—Any individual who establishes residency after the effective date shall be automatically enrolled upon verification of residency by the Social Security Administration.</li>
								<li>NO PREMIUMS.—No premiums, contributions, or other similar payments shall be charged to any individual for Tier 1 benefits described in Title II.</li>
							</ul>
						</li>
					</ul>

					<h4 className="text-lg font-semibold text-blue-200 mt-6 mb-2">TITLE II—BENEFITS AND COST-SHARING</h4>
					<b>Sec. 2001. Comprehensive Benefits Package.</b>
					<ul className="mb-2">
						<li>HOSPITAL SERVICES.—Inpatient and outpatient hospital care, including room and board, nursing services, and medical supplies.</li>
						<li>PROFESSIONAL SERVICES.—Services provided by physicians, nurse practitioners, physician assistants, certified nurse midwives, and other qualified health professionals, including telehealth services.</li>
						<li>PRESCRIPTION DRUGS AND BIOLOGICALS.—All prescription drugs, biological products, and medically necessary over-the-counter medications as determined by the Secretary.</li>
						<li>MENTAL HEALTH AND SUBSTANCE USE DISORDER SERVICES.—Including inpatient, outpatient, intensive outpatient, and residential treatment.</li>
						<li>DENTAL, VISION, AND HEARING SERVICES.—Comprehensive dental care (including restorative and periodontal services), vision exams and corrective lenses, and hearing exams and hearing aids.</li>
						<li>LONG-TERM SERVICES AND SUPPORTS.—Home and community-based services, nursing facility care, and personal care services.</li>
						<li>PREVENTIVE AND WELLNESS SERVICES.—All services rated "A" or "B" by the United States Preventive Services Task Force, routine immunizations, and annual wellness visits.</li>
						<li>EMERGENCY SERVICES.—Emergency medical services, including ambulance services and care in hospital emergency departments.</li>
						<li>MATERNITY AND NEWBORN CARE.—Prenatal care, labor and delivery, postpartum care, and well-baby care.</li>
						<li>REHABILITATIVE AND HABILITATIVE SERVICES.—Physical therapy, occupational therapy, speech-language pathology, and audiology services.</li>
						<li>LABORATORY AND DIAGNOSTIC SERVICES.—Radiology, pathology, and other diagnostic services.</li>
						<li>PEDIATRIC SERVICES.—Including services provided under the Early and Periodic Screening, Diagnostic, and Treatment (EPSDT) program.</li>
						<li>CHIROPRACTIC SERVICES AND ALTERNATIVE MEDICINE.—As determined by the Secretary based on clinical efficacy.</li>
						<li>END-OF-LIFE CARE.—Including palliative care and hospice services.</li>
						<li>MEDICAL EQUIPMENT AND SUPPLIES.—Durable medical equipment, prosthetics, orthotics, and other medically necessary supplies.</li>
					</ul>

					<p className="text-cyan-200 mt-8">This comprehensive legislation provides the statutory framework to achieve large-scale transformation of the American healthcare system: universal coverage, cost control, supply chain resilience, and a stronger public health infrastructure.</p>
				</div>

				<NeuralGlassPanel className="mb-8">
					<h2 className="text-2xl font-bold text-emerald-300 mb-4">Aegis Health Security Initiative: A National Health Protection Plan for Every American</h2>

					<h3 className="text-lg font-bold text-cyan-200">Executive Summary</h3>
					<p className="text-cyan-100 mb-3">America's healthcare system loses significant resources to fraud and inefficiency. The <b>Aegis Health Security Initiative</b> aims to reduce fraud, improve care quality, and make healthcare more affordable and secure for all.</p>

					<h4 className="text-md font-semibold text-cyan-200 mt-2">The Problem</h4>
					<ul className="list-disc list-inside text-cyan-100 mb-3">
						<li><b>Medical identity theft</b> and phantom billing erode trust and waste taxpayer dollars.</li>
						<li><b>Fragmented records</b> and supply chain fragility impair care delivery and surge response.</li>
					</ul>

					<h4 className="text-md font-semibold text-cyan-200">Core Components</h4>
					<ul className="list-disc list-inside text-cyan-100 mb-3">
						<li><b>Aegis Health ID:</b> A privacy-preserving universal health identifier to reduce fraud and enable seamless provider interactions.</li>
						<li><b>Supply Chain Resilience:</b> Decentralized caches, inventory telemetry, and public-private surge contracts.</li>
						<li><b>Surveillance & Response:</b> Genomic sequencing, wastewater monitoring, and unified reporting.</li>
					</ul>

					<div className="flex justify-center my-6"><MedicalSystemDiagram /></div>

					<h4 className="text-md font-semibold text-cyan-200 mt-2">Day-to-day Flow</h4>
					<ol className="list-decimal list-inside text-cyan-100 mb-4">
						<li>Visit doctor → Present Aegis Health ID</li>
						<li>System verifies identity, fetches authorized history</li>
						<li>Doctor reviews integrated record and recommended treatments</li>
						<li>Bill processed with real-time fraud checks</li>
						<li>You review charges in a simple app with full transparency</li>
					</ol>

					<h3 className="text-lg font-bold text-emerald-400 mt-4">Part 3: The Council on Medical Security</h3>
					<p className="text-cyan-100 mb-2">An independent watchdog modeled on the CFPB with subpoena and enforcement powers to protect patients and punish misuse.</p>
					<ul className="list-disc list-inside text-cyan-100 mb-3">
						<li><b>Subpoena authority</b>, civil penalties up to $50,000 per violation, and patient restitution mandates</li>
						<li><b>Whistleblower protections</b> with bounty rewards</li>
						<li><b>Rights for patients:</b> audit, correction, restitution, prevention plans, portability</li>
					</ul>

					<h3 className="text-lg font-bold text-emerald-400 mt-4">Part 4: How We Stop Fraud and Improve Care</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
						<div>
							<h4 className="font-semibold text-cyan-200">Stopping the $300B theft</h4>
							<ul className="list-disc list-inside text-cyan-100">
								<li><b>Biometric Aegis ID</b> — reduces identity theft dramatically</li>
								<li><b>Real-time digital verification</b> — stops phantom billing</li>
								<li><b>Cross-pharmacy tracking</b> — stops prescription fraud</li>
								<li><b>Transparent referrals and AI-based billing checks</b> — prevents upcoding and kickbacks</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold text-cyan-200">Improving care</h4>
							<ul className="list-disc list-inside text-cyan-100">
								<li>Records portability — no repeated tests</li>
								<li>Personalized prevention plans — fewer late-stage diseases</li>
								<li>AI double-checks — reduces medical errors</li>
								<li>Paramedic access en route — better emergency outcomes</li>
							</ul>
						</div>
					</div>

					<h3 className="text-lg font-bold text-emerald-400 mt-4">Part 5: Cost-Benefit Analysis</h3>
					<p className="text-cyan-100 mb-2"><b>Investment:</b> $47B over 7 years (development, hardware, training, Council)</p>
				</NeuralGlassPanel>
			</div>
		</div>
	);
}
