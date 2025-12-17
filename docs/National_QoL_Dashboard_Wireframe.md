National QoL Dashboard — First-version wireframe

Purpose
- Concise, updateable set of 20 indicators across 7 domains to inform decision-makers and the public.

Landing view (components)
- Top-line: National QoL composite score (big numeric, arrow, delta), date stamp, download CSV.
- Domain tiles (7): domain score, 3 mini-sparklines (indicator trends), traffic-light status vs targets, short narrative.
- Map view: choropleth by county/state; pilot regions highlighted; click-to-drilldown to regional indicator list.
- High-leverage interventions: small panel showing top N interventions with modeled marginal QoL uplift per $ (sortable).
- Investment optimizer: simple inputs for $X allocation, runs network model and returns uplift & ranked list.
- Data & methodology tab: data sources, cadence, elasticity assumptions, codebook, API endpoints.

Visualization notes
- Sparklines: 12–36 points depending on cadence; color by traffic-light status.
- Domain score: weighted composite of domain indicators (weights editable via methodology tab).
- QoL composite: normalized 0–100 index; show 12-month trend and contribution waterfall.

API & CSV
- Endpoints (examples):
  - GET /api/qol/indicators — returns indicators manifest (JSON).
  - GET /api/qol/data?indicator=avoid_hosp&region=USA&from=2024-01-01 — returns time series CSV/JSON.
- CSV template: `data/qol/sample_indicator_template.csv` (columns: region_type,region_id,date,value,units,source_url,notes).

Measurement cadence
- Monthly: admin metrics.
- Quarterly: labor, health utilization, grid reliability.
- Annual: survey-driven metrics.

Next steps (implementation)
1. Wire up `data/qol/indicators.json` as the manifest.
2. Implement simple server API that serves CSV/JSON per indicator from `data/qol/*.csv` files.
3. Build a client component `components/dashboard/NationalQoLDashboard.tsx` and a page under `app/dashboard/qol/page.tsx`.
4. Add a minimal network model implementation (Python/Node) for initial marginal uplift estimates; store results in `data/qol/model_output.json`.

