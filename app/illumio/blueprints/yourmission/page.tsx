import React from "react";
import { NeuralGlassPanel } from "@/components/ui/NeuralGlassPanel";

export default function YourMissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent mb-3">Your Mission</h1>
          <p className="text-slate-200 max-w-2xl mx-auto">A concise guide for citizens and partners outlining how to engage with the 12 SRDs and participate in local pilot programs.</p>
        </div>
        <NeuralGlassPanel className="mb-6 bg-linear-to-r from-blue-600/20 via-purple-500/10 to-pink-500/20">
          <h2 className="text-2xl font-bold text-cyan-300 mb-3">THE INTEGRATED RENEWAL CURRICULUM: Y/OUR MISSION ARCHITECTURE</h2>
          <p className="text-cyan-100 font-semibold">CORE PHILOSOPHY: DUAL MISSION FRAMEWORK</p>
          <div className="mt-3 text-cyan-100">
            <p><strong className="text-blue-400">YOUR Mission (Individual Sovereignty)</strong> — personal skill acquisition, economic mobility, portfolio development, agency cultivation.</p>
            <p className="mt-2"><strong className="text-rose-400">OUR Mission (Collective Renewal)</strong> — systemic problem-solving, SRD implementation, community transformation, legacy building.</p>
            <p className="italic mt-3">"Two colors, one spectrum of purpose: from self-mastery to system stewardship"</p>
          </div>
        </NeuralGlassPanel>

        <NeuralGlassPanel className="mb-6">
          <h3 className="text-xl font-bold text-emerald-400 mb-3">TIERED LEARNING PYRAMID: 3-LEVEL PROGRESSION</h3>
          <div className="flex justify-center">
            <pre className="text-sm text-cyan-200 bg-slate-800/40 p-3 rounded text-center whitespace-pre mx-auto">{`┌─────────────────────────────────────────────┐
│           TIER 3: SRD MASTERY               │
│    (Months 13-18: System Architect)         │
├─────────────────────────────────────────────┤
│           TIER 2: APPLIED INTEGRATION       │
│      (Months 7-12: Cross-SRD Specialist)    │
├─────────────────────────────────────────────┤
│           TIER 1: FOUNDATIONAL CORE         │
│        (Months 1-6: Systems Thinker)        │
└─────────────────────────────────────────────┘`}</pre>
          </div>
        </NeuralGlassPanel>

        <NeuralGlassPanel className="mb-6">
          <h3 className="text-lg font-bold text-cyan-200">TIER 1: FOUNDATIONAL CORE (Months 1-6)</h3>
          <p className="text-cyan-100 font-semibold mt-2">Universal Systems Thinking & Digital Literacy</p>

          <h4 className="font-semibold text-cyan-200 mt-3">Module 1.1: Digital Citizenship & Infrastructure Literacy (Weeks 1-4)</h4>
          <p className="text-cyan-100"><strong className="text-blue-400">YOUR Focus:</strong> Personal digital sovereignty — <strong className="text-rose-400">OUR Focus:</strong> SRD 1 (Digital Equity)</p>
          <p className="text-cyan-100 mt-2"><span className="text-amber-300 font-semibold">External Resources: (Clickable Links)</span>: <a href="https://learndigital.withgoogle.com/digitalgarage" className="underline">Google Digital Garage</a>, <a href="https://aws.amazon.com/training/" className="underline">AWS Skill Builder</a>, <a href="https://www.netacad.com/" className="underline">Cisco Networking Academy</a>, <a href="https://learn.microsoft.com/" className="underline">Microsoft Learn</a>.</p>
          <p className="text-cyan-100 mt-2"><strong>Project:</strong> Personal digital footprint audit + community broadband gap analysis.</p>

          <h4 className="font-semibold text-cyan-200 mt-3">Module 1.2: Data & AI Literacy (Weeks 5-8)</h4>
          <p className="text-cyan-100"><strong className="text-blue-400">YOUR Focus:</strong> Personal AI assistant creation — <strong className="text-rose-400">OUR Focus:</strong> Clover Chain data structure comprehension</p>
          <p className="text-cyan-100 mt-2"><span className="text-amber-300 font-semibold">External Resources: (Clickable Links)</span>: <a href="https://www.nvidia.com/en-us/deep-learning-ai/education/" className="underline">NVIDIA DLI</a>, <a href="https://ai.google/education/" className="underline">Google AI Courses</a>, <a href="https://huggingface.co/learn" className="underline">Hugging Face Learn</a>, <a href="https://aws.amazon.com/machine-learning/" className="underline">Amazon/AWS ML</a>.</p>
          <p className="text-cyan-100 mt-2"><strong>Project:</strong> Build a Clover Chain-compatible skills wallet prototype.</p>

          <h4 className="font-semibold text-cyan-200 mt-3">Module 1.3: Civic Systems & Economic Literacy (Weeks 9-12)</h4>
          <p className="text-cyan-100"><strong className="text-blue-400">YOUR Focus:</strong> Personal financial dashboard — <strong className="text-rose-400">OUR Focus:</strong> SRD 8-9-12 interconnections</p>
          <p className="text-cyan-100 mt-2"><span className="text-amber-300 font-semibold">External Resources: (Clickable Links)</span>: <a href="https://www.khanacademy.org/" className="underline">Khan Academy</a>, <a href="https://ocw.mit.edu/" className="underline">MIT OpenCourseWare</a>, <a href="https://www.bloomberg.com/professional/product/bmc" className="underline">Bloomberg Market Concepts</a>, <a href="https://www.edx.org/" className="underline">edX</a>.</p>
          <p className="text-cyan-100 mt-2"><strong>Project:</strong> Regional living wage calculator + citizen budget mockup.</p>

          <h4 className="font-semibold text-cyan-200 mt-3">Module 1.4: Sustainability & Infrastructure Literacy (Weeks 13-16)</h4>
          <p className="text-cyan-100"><strong className="text-blue-400">YOUR Focus:</strong> Personal carbon/energy footprint — <strong className="text-rose-400">OUR Focus:</strong> SRD 4-7-11 systems</p>
          <p className="text-cyan-100 mt-2"><span className="text-amber-300 font-semibold">External Resources: (Clickable Links)</span>: <a href="https://www.colorado.edu/" className="underline">University of Colorado Boulder</a>, <a href="https://new.siemens.com/" className="underline">Siemens</a>, <a href="https://www.autodesk.com/" className="underline">Autodesk</a>, <a href="https://www.energy.gov/" className="underline">U.S. Department of Energy</a>.</p>
          <p className="text-cyan-100 mt-2"><strong>Project:</strong> Community solar plan + digital twin of local block.</p>

          <h4 className="font-semibold text-cyan-200 mt-3">Module 1.5: Health & Community Literacy (Weeks 17-20)</h4>
          <p className="text-cyan-100"><strong className="text-blue-400">YOUR Focus:</strong> Personal health data dashboard — <strong className="text-rose-400">OUR Focus:</strong> SRD 3-5-6 integration</p>
          <p className="text-cyan-100 mt-2"><span className="text-amber-300 font-semibold">External Resources: (Clickable Links)</span>: <a href="https://www.jhu.edu/" className="underline">Johns Hopkins</a>, <a href="https://hms.harvard.edu/" className="underline">Harvard Medical School</a>, <a href="https://www.cdc.gov/" className="underline">CDC</a>, <a href="https://www.unicef.org/" className="underline">UNICEF</a>.</p>
          <p className="text-cyan-100 mt-2"><strong>Project:</strong> Map community health assets + design preventative health API schema.</p>

          <h4 className="font-semibold text-cyan-200 mt-3">Module 1.6: Capstone Synthesis (Weeks 21-24)</h4>
          <p className="text-cyan-100">Integration Project: "Community System Scan" — deliverable: digital portfolio + community presentation.</p>
        </NeuralGlassPanel>

        <NeuralGlassPanel className="mb-6">
          <h3 className="text-lg font-bold text-cyan-200">TIER 2: APPLIED INTEGRATION (Months 7-12)</h3>
          <p className="text-cyan-100 mt-2">Cross-SRD Specialization Tracks — choose a primary SRD focus and follow the Tier 2 structure of Deep Specialization and Systems Integration.</p>

          <p className="text-cyan-100 mt-2 font-semibold">Example Tracks: Infrastructure Builder, Human Capital Architect, Health & Wellbeing Systems, Governance & Economics, Integration Specialist.</p>

          <p className="text-cyan-100 mt-3">Quarter 1: Deep Specialization (Months 7-9) — master technical stack, build SRD component, cross-SRD integration project.</p>
          <p className="text-cyan-100 mt-2">Quarter 2: Systems Integration (Months 10-12) — Clover Chain integration, implementation playbook, community pilot deployment.</p>
        </NeuralGlassPanel>

        <NeuralGlassPanel className="mb-6">
          <h3 className="text-lg font-bold text-cyan-200">TIER 3: SRD MASTERY & SYSTEMS LEADERSHIP (Months 13-18)</h3>
          <p className="text-cyan-100 mt-2">Multi-SRD integration, leadership, policy & governance deep dives, community engagement, and a grand synthesis legacy project.</p>
          <p className="text-cyan-100 mt-3">Final deliverable: Implementation blueprint, apprentices trained, published case study, monitoring dashboard.</p>
        </NeuralGlassPanel>

        <NeuralGlassPanel className="mb-6">
          <h3 className="text-lg font-bold text-cyan-200">CONTINUOUS LEARNING ECOSYSTEM</h3>
          <p className="text-cyan-100 mt-2">Micro-credential stacking (Clover Chain-verified badges) and the Quarterly Learning Journeys (Foundations → Specialization → Integration → Leadership).</p>
        </NeuralGlassPanel>

        <NeuralGlassPanel className="mb-6">
          <h3 className="text-lg font-bold text-cyan-200">IMPLEMENTATION ROADMAP & SUCCESS METRICS</h3>
          <p className="text-cyan-100 mt-2">Year 1: Foundation & Pilot (recruit learners, launch Tier 1, establish mentorship). Year 2: Scaling & Integration. Year 3: Autonomy & Innovation (targets for certified learners and SRD implementations).</p>
          <p className="text-cyan-100 mt-3 font-semibold">Success Metrics include personal income increases, certification rates, community metric improvements, projects deployed, and policy changes influenced.</p>
        </NeuralGlassPanel>

        <div className="text-center mt-8">
          <a href="/contact" className="text-cyan-200 underline">Contact the program office to enroll or propose a partnership</a>
        </div>
      </div>
    </div>
  );
}
