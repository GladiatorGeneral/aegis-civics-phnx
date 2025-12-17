const fs = require('fs');
const path = require('path');

// Starter SRD network elasticities (node -> node elasticity estimates)
const srds = ['Health','Education & Workforce','Economic Security & Housing','Digital Access','Energy & Environment','Child & Family','Governance & Civic'];

// Simple symmetric elasticity matrix (small illustrative values)
const elasticity = {
  Health: { Health: 0.3, 'Education & Workforce': 0.05, 'Economic Security & Housing': 0.02, 'Digital Access': 0.01, 'Energy & Environment': 0.00, 'Child & Family': 0.04, 'Governance & Civic': 0.02 },
  'Education & Workforce': { Health: 0.02, 'Education & Workforce': 0.28, 'Economic Security & Housing': 0.06, 'Digital Access': 0.02, 'Energy & Environment': 0.00, 'Child & Family': 0.03, 'Governance & Civic': 0.01 },
  'Economic Security & Housing': { Health: 0.01, 'Education & Workforce': 0.04, 'Economic Security & Housing': 0.25, 'Digital Access': 0.02, 'Energy & Environment': 0.01, 'Child & Family': 0.02, 'Governance & Civic': 0.03 },
  'Digital Access': { Health: 0.00, 'Education & Workforce': 0.03, 'Economic Security & Housing': 0.02, 'Digital Access': 0.22, 'Energy & Environment': 0.00, 'Child & Family': 0.01, 'Governance & Civic': 0.01 },
  'Energy & Environment': { Health: 0.00, 'Education & Workforce': 0.00, 'Economic Security & Housing': 0.01, 'Digital Access': 0.00, 'Energy & Environment': 0.30, 'Child & Family': 0.00, 'Governance & Civic': 0.01 },
  'Child & Family': { Health: 0.04, 'Education & Workforce': 0.05, 'Economic Security & Housing': 0.02, 'Digital Access': 0.01, 'Energy & Environment': 0.00, 'Child & Family': 0.26, 'Governance & Civic': 0.01 },
  'Governance & Civic': { Health: 0.01, 'Education & Workforce': 0.01, 'Economic Security & Housing': 0.02, 'Digital Access': 0.01, 'Energy & Environment': 0.00, 'Child & Family': 0.01, 'Governance & Civic': 0.18 },
};

// Candidate interventions (primary SRD, estimated cost USD millions)
const interventions = [
  { id: 'primary_care_expansion', name: 'Primary Care Expansion', srd: 'Health', cost_m: 250 },
  { id: 'universal_coverage_subsidy', name: 'Coverage Subsidy', srd: 'Health', cost_m: 1200 },
  { id: 'early_childhood_programs', name: 'Early Childhood Education Boost', srd: 'Child & Family', cost_m: 300 },
  { id: 'workforce_credentials', name: 'Workforce Credentialing', srd: 'Education & Workforce', cost_m: 90 },
  { id: 'broadband_deployment', name: 'Broadband Deployment', srd: 'Digital Access', cost_m: 600 },
  { id: 'rental_assistance', name: 'Targeted Rental Assistance', srd: 'Economic Security & Housing', cost_m: 400 },
  { id: 'energy_efficiency', name: 'Home Energy Retrofit', srd: 'Energy & Environment', cost_m: 350 },
  { id: 'childcare_subsidy', name: 'Childcare Subsidy Expansion', srd: 'Child & Family', cost_m: 450 },
  { id: 'eviction_prevention', name: 'Eviction Prevention Program', srd: 'Economic Security & Housing', cost_m: 80 },
  { id: 'voter_outreach', name: 'Civic Participation Push', srd: 'Governance & Civic', cost_m: 25 },
  { id: 'nutrition_programs', name: 'Nutrition & Food Access', srd: 'Food & Community Safety', cost_m: 200 },
  { id: 'grid_resilience', name: 'Grid Resilience Investments', srd: 'Energy & Environment', cost_m: 700 }
];

// Note: 'Food & Community Safety' is not in the srds array above; map it to Economic Security for this simple starter model
function normalizeSrd(s) {
  if (s === 'Food & Community Safety') return 'Economic Security & Housing';
  return s;
}

// Compute marginal QoL uplift per $1M invested using elasticity matrix and a simple normalization.
// For each intervention, the per-$1M uplift = sum_over_srds( elasticity[primary_srds][target_srd] * (1 / cost_m) * 1e6_factor )
// We use a simplifying factor to make numbers readable: uplift_per_1m = base_effect * 100

const results = interventions.map((it) => {
  const primary = normalizeSrd(it.srd);
  const row = elasticity[primary] || {};
  // aggregate effect across SRDs weighted equally
  let agg = 0;
  Object.keys(row).forEach((target) => {
    agg += row[target];
  });
  // baseline effect per 1M inversely proportional to project scale (smaller cost -> higher marginal for first 1M)
  const per1m = (agg / Object.keys(row).length) * (1 / Math.max(1, it.cost_m)) * 100;
  return {
    id: it.id,
    name: it.name,
    srd: it.srd,
    cost_m: it.cost_m,
    marginal_qol_uplift_per_1m: Number(per1m.toFixed(4))
  };
});

results.sort((a,b)=>b.marginal_qol_uplift_per_1m - a.marginal_qol_uplift_per_1m);

const out = { generated_at: new Date().toISOString(), results };

const outPath = path.join(process.cwd(), 'data', 'qol', 'model_output.json');
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log('Wrote model output to', outPath);
