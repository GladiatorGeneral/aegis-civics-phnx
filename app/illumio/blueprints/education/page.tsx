import React from "react";
import { NeuralGlassPanel } from "@/components/ui/NeuralGlassPanel";
import { SocialConnectionEngineDiagram } from "@/components/ui/SocialConnectionEngineDiagram";
import { MetricBadge } from "@/components/ui/MetricBadge";

export default function EducationSecurityPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-slate-900 p-0 md:p-8">
			<div className="max-w-4xl mx-auto py-8">
				<div className="mb-12 text-center">
					<h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 drop-shadow-lg">Education Security: Blueprint</h1>
					<p className="text-cyan-200 text-lg max-w-2xl mx-auto">This page outlines the strategy and blueprint for transforming education and workforce development.</p>
				</div>

				<NeuralGlassPanel className="mb-12">
					<h2 className="text-2xl font-bold text-cyan-300 mb-4">Social Connection Architecture</h2>
					<p className="text-cyan-100 mb-4">A compact, explainable topology connecting a social-connection engine with collaborative-learning modules.</p>
					<div className="flex justify-center mb-4"><SocialConnectionEngineDiagram /></div>
					<div className="mt-3 text-sm text-cyan-100">
						<strong>Legend:</strong>
						<ul className="list-inside list-disc ml-4 mt-2">
							<li><b>Teal:</b> Core engine — policy and analytics.</li>
							<li><b>Boxes:</b> Domain modules for collaboration, wellness, and monitoring.</li>
						</ul>
					</div>
				</NeuralGlassPanel>

				<NeuralGlassPanel className="mb-6">
					<h3 className="text-xl font-bold text-emerald-400 mb-2">Deployment Roadmap</h3>
					<div className="overflow-x-auto text-xs text-cyan-100 mb-4">
						<pre>{`Phase 1: Immediate (Days 1-30)
Phase 2: Pilot (Months 1-12)
Phase 3: Scale (Years 1-3)`}</pre>
					</div>
				</NeuralGlassPanel>

				<NeuralGlassPanel className="mb-12">
					<h3 className="text-xl font-bold text-emerald-400 mt-8 mb-6">📚 Key Outcomes & Metrics</h3>
					<div className="grid grid-cols-2 gap-4 mb-6">
						<div className="bg-cyan-900/40 rounded-lg p-4 flex flex-col items-center">
							<span className="text-3xl font-bold text-cyan-300">65M</span>
							<span className="text-cyan-100 text-sm">K-12 Students Improved</span>
							<MetricBadge label="K-12" />
						</div>
						<div className="bg-cyan-900/40 rounded-lg p-4 flex flex-col items-center">
							<span className="text-3xl font-bold text-cyan-300">60.8M</span>
							<span className="text-cyan-100 text-sm">Higher Education Advanced</span>
							<MetricBadge label="Higher" />
						</div>
						<div className="bg-cyan-900/40 rounded-lg p-4 flex flex-col items-center">
							<span className="text-3xl font-bold text-cyan-300">52.6M</span>
							<span className="text-cyan-100 text-sm">Adult Education Upskilled</span>
							<MetricBadge label="Adult" />
						</div>
						<div className="bg-cyan-900/40 rounded-lg p-4 flex flex-col items-center">
							<span className="text-3xl font-bold text-cyan-300">9.2M</span>
							<span className="text-cyan-100 text-sm">Early Childhood Prepared</span>
							<MetricBadge label="Early" />
						</div>
						<div className="bg-cyan-900/40 rounded-lg p-4 flex flex-col items-center">
							<span className="text-3xl font-bold text-cyan-300">1.8M</span>
							<span className="text-cyan-100 text-sm">Prevented Dropouts</span>
							<MetricBadge label="No Out" />
						</div>
						<div className="bg-cyan-900/40 rounded-lg p-4 flex flex-col items-center">
							<span className="text-3xl font-bold text-cyan-300">14.6M</span>
							<span className="text-cyan-100 text-sm">Community College Students</span>
							<MetricBadge label="CC" />
						</div>
						<div className="bg-cyan-900/40 rounded-lg p-4 flex flex-col items-center">
							<span className="text-3xl font-bold text-cyan-300">2.4M</span>
							<span className="text-cyan-100 text-sm">STEM Graduates Added</span>
							<MetricBadge label="STEM" />
						</div>
						<div className="bg-cyan-900/40 rounded-lg p-4 flex flex-col items-center">
							<span className="text-3xl font-bold text-cyan-300">18M</span>
							<span className="text-cyan-100 text-sm">Adults Literacy-Improved</span>
							<MetricBadge label="Lit" />
						</div>
						<div className="bg-cyan-900/40 rounded-lg p-4 flex flex-col items-center col-span-2">
							<span className="text-3xl font-bold text-green-400">$5.6T</span>
							<span className="text-cyan-100 text-sm">GDP Contribution</span>
							<MetricBadge label="GDP" variant="rect" rectWidth={120} rectHeight={60} />
						</div>
					</div>
				</NeuralGlassPanel>

				<NeuralGlassPanel className="mb-12">
					<h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">Education Security: The Foundation of Human Potential</h2>
					<p className="text-cyan-100 mb-4"><strong>The Fundamental Right of Lifelong Learning</strong></p>
					<p className="text-cyan-100 mb-4">Education security is the principle that every human being possesses an inherent right to cognitive development and knowledge acquisition from birth to death—not as a finite commodity distributed in childhood, but as an ongoing infrastructure supporting human potential across the lifespan. This isn't about standardized curriculum delivery; it's about <strong>cognitive sovereignty</strong>: the fundamental freedom to develop one's mind fully, regardless of birth circumstances, age, or previous educational access.</p>

					<h3 className="text-xl font-semibold text-emerald-300 mt-4 mb-2">Why This Matters: The Neuroscience of Inequality</h3>
					<p className="text-cyan-100 mb-3">Current educational inequities aren't just social problems—they're <strong>neurological catastrophes</strong>. When we deny education security:</p>
					<ol className="list-decimal list-inside ml-5 text-cyan-100 mb-4">
						<li><strong>We create literal brain architecture disparities</strong>: Children in under-resourced environments show measurably different prefrontal cortex development by age 5.</li>
						<li><strong>We waste human cognitive capital</strong>: The child who might solve climate change is currently sorting recycling in a system that never identified their potential.</li>
						<li><strong>We accept preventable suffering</strong>: Most social problems (health disparities, economic inequality, political instability) trace directly to educational access gaps.</li>
					</ol>
					<p className="text-cyan-100 mb-4">The brain's neuroplasticity—its ability to reorganize and form new connections—doesn't end at 18. It persists throughout life, meaning <strong>every moment of denied education represents stolen cognitive potential</strong> that could have contributed to society.</p>

					<h3 className="text-xl font-semibold text-emerald-300 mt-4 mb-2">How Education Security Creates Better Societies</h3>
					<h4 className="text-lg font-bold text-cyan-300 mt-3">1. The Innovation Multiplier Effect</h4>
					<p className="text-cyan-100 mb-3">When education is secure and lifelong, we stop treating human minds as fixed-quantity resources and start recognizing them as <strong>compound interest generators</strong>. Each educated person doesn't just contribute their own ideas—they create environments where others' ideas flourish. This creates geometric, not arithmetic, growth in societal innovation.</p>
					<p className="text-cyan-100 mb-3"><strong>Example:</strong> Finland's adult education programs (funded as public right) created the unexpected side-effect of elderly entrepreneurs starting successful businesses at rates higher than young adults in other nations.</p>

					<h4 className="text-lg font-bold text-cyan-300 mt-3">2. The Democratic Stabilization Factor</h4>
					<ul className="list-disc list-inside ml-5 text-cyan-100 mb-3">
						<li><strong>Critical thinking as immune system</strong>: Societies with widespread critical thinking skills show lower susceptibility to misinformation epidemics.</li>
						<li><strong>Complex problem-solving capacity</strong>: Educated populations navigate trade-offs and complexity without resorting to authoritarian simplicity.</li>
						<li><strong>Empathy through perspective-taking</strong>: Literature, history, and social sciences, when universally accessible, build the cognitive frameworks for understanding diverse experiences.</li>
					</ul>

					<h4 className="text-lg font-bold text-cyan-300 mt-3">3. The Economic Resilience Architecture</h4>
					<ul className="list-disc list-inside ml-5 text-cyan-100 mb-3">
						<li><strong>Workforce adaptability</strong>: Instead of mass unemployment during technological shifts, educated populations retrain in months, not decades.</li>
						<li><strong>Distributed innovation</strong>: When anyone can learn advanced skills at any age, breakthrough ideas emerge from unexpected places.</li>
						<li><strong>Reduced social costs</strong>: Every dollar invested in adult literacy saves money in healthcare, incarceration, and social services.</li>
					</ul>

					<h4 className="text-lg font-bold text-cyan-300 mt-3">4. The Creativity Commons</h4>
					<p className="text-cyan-100 mb-3">Creativity isn't a rare genetic gift—it's <strong>the combinatorial explosion of diverse knowledge bases meeting</strong>. Education security ensures cross-pollination at scale and that failed experiments become public goods rather than personal catastrophe.</p>

					<h3 className="text-xl font-semibold text-emerald-300 mt-4 mb-2">Our Current Trajectory: Cognitive Apartheid</h3>
					<h4 className="text-lg font-bold text-cyan-300 mt-3">The Three-Tiered System We've Built</h4>
					<ul className="list-inside ml-5 text-cyan-100 mb-4">
						<li><strong>Tier 1: The Cognitively Sovereign</strong> (≈15%): Access to adaptive tutors, elite universities, neuroscience-optimized learning environments — compound cognitive advantages across generations.</li>
						<li><strong>Tier 2: The Curriculum Compliant</strong> (≈60%): Standardized education focused on compliance and basic workforce readiness — limited adaptive capacity.</li>
						<li><strong>Tier 3: The Education Insecure</strong> (≈25%): Inconsistent access to basic literacy and numeracy — permanent exclusion from the knowledge economy.</li>
					</ul>

					<h4 className="text-lg font-semibold text-amber-300 mt-2 mb-2">The Fatal Flaws in Current Approach</h4>
					<ol className="list-decimal list-inside ml-5 text-cyan-100 mb-4">
						<li><strong>The Fixed-Pie Fallacy</strong>: We act as if there's limited "smart" to distribute, when intelligence is largely developed, not innate.</li>
						<li><strong>The Childhood-Only Model</strong>: We concentrate 90% of educational resources into the first 18 years of life, ignoring decades of adult potential.</li>
						<li><strong>The Standardization Trap</strong>: We prioritize measurable compliance over actual understanding, creating fragile knowledge that doesn't transfer.</li>
						<li><strong>The Privilege Feedback Loop</strong>: Educational advantages compound generationally, creating exponentially widening gaps.</li>
					</ol>

					<h3 className="text-xl font-semibold text-emerald-300 mt-4 mb-2">Why Change Is Non-Negotiable</h3>
					<h4 className="text-lg font-bold text-cyan-300 mt-3">The Coming Cognitive Crisis</h4>
					<ol className="list-decimal list-inside ml-5 text-cyan-100 mb-4">
						<li><strong>The AI Divide (2025-2035)</strong>: As AI advances, the gap between the education-secure and education-insecure will transform from economic inequality to <strong>cognitive speciation</strong>.</li>
						<li><strong>The Complexity Collapse</strong>: Global challenges require distributed intelligence at scale; concentrating problem-solving capacity risks collapse.</li>
						<li><strong>The Democratic Erosion</strong>: Uneducated populations can't sustain complex democratic governance, leading to authoritarian backsliding.</li>
						<li><strong>The Innovation Plateau</strong>: When only 15% of minds fully participate in discovery, we solve 21st-century problems with 15% of available human intelligence.</li>
					</ol>

					<h3 className="text-xl font-semibold text-emerald-300 mt-4 mb-2">The PHNXForge Alternative: Cognitive Infrastructure as Public Good</h3>
					<p className="text-cyan-100 mb-3">Our framework represents a fundamentally different approach: not education as service delivery, but <strong>cognitive development as public infrastructure</strong>—as essential as roads, clean water, or electrical grids.</p>
					<ul className="list-disc list-inside ml-5 text-cyan-100 mb-4">
						<li><strong>Universal Neuro-Optimization</strong>: Applying neuroscience equally to all learners.</li>
						<li><strong>Lifelong Cognitive Support</strong>: Continuous learning infrastructure from childhood through senior citizenship.</li>
						<li><strong>Collective Intelligence</strong>: Using AI to multiply human teachers' impact, not replace them.</li>
						<li><strong>Formal Equity Guarantees</strong>: Mathematical verification that all students receive evidence-based instruction.</li>
					</ul>

					<h3 className="text-xl font-semibold text-emerald-300 mt-4 mb-2">The Moral and Practical Imperative</h3>
					<p className="text-cyan-100 mb-4">The choice before us isn't technical or economic—it's <strong>civilizational</strong>. Path A continues concentrating cognitive development in elites; Path B treats every mind as precious national infrastructure. The PHNXForge model demonstrates the technology exists; what's missing is the collective will.</p>
					<p className="text-cyan-200 text-sm">Education security isn't charity—it's the most pragmatic investment in human survival and flourishing ever conceived.</p>
				</NeuralGlassPanel>

			</div>
		</div>
	);
}
