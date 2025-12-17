export const qualityOfLifeData = {
  meta: {
    project: "Project Phnx",
    dataset: "Federal Finance SRD + ROI + QoL Overlay",
    created: "2025-12-16",
    authoring_context: {
      user_intent: "Integrate fiscal, SRD, ROI, and QoL metrics into dashboard-ready dataset",
      constraints: [
        "No broad tax hikes",
        "No Social Security benefit cuts",
        "Medicare/Medicaid constrained post-2026",
        "Interest-rate realism preserved"
      ],
      methodology: [
        "FY 2025–26 baseline inferred from federal dashboard data",
        "SRD effects phased (2026=35%, 2027=60%, 2028=90%)",
        "Spending reductions modeled as growth moderation",
        "QoL indexed by health, economic security, time/leisure, community, environment",
        "ROI calculated as deficit reduction per $100B invested"
      ]
    },
    conversation_serialization: [
      "User provided FY 2024–26 federal revenue and spending data",
      "Assistant generated SRD framework and deficit reduction logic",
      "User requested FY 2025–26 inferred numbers with Medicare/Medicaid realism",
      "Assistant corrected category-level data",
      "User selected SRD overlay visualization",
      "Assistant produced FY 2027–28 dual-track trajectories",
      "User requested JSON serialization + unpicked options retention",
      "User requested SRD ROI + QoL integration",
      "Assistant integrated ROI + QoL metrics into existing SRD/fiscal framework"
    ]
  },

  policy_tracks: {
    baseline_non_srd: {
      description: "Continuation of current policy without SRD-driven interventions",
      fiscal_years: {
        "2025": { revenue: 5.12, spending: 7.12, deficit: 2.0, debt: 36.9, GDP: 28.7, debt_to_GDP: 1.29, QoL_index: 50 },
        "2026": { revenue: 5.33, spending: 7.42, deficit: 2.09, debt: 38.9, GDP: 29.7, debt_to_GDP: 1.31, QoL_index: 50 },
        "2027": { revenue: 5.53, spending: 7.67, deficit: 2.14, debt: 41.0, GDP: 30.8, debt_to_GDP: 1.33, QoL_index: 51 },
        "2028": { revenue: 5.74, spending: 7.99, deficit: 2.25, debt: 43.3, GDP: 31.9, debt_to_GDP: 1.36, QoL_index: 52 }
      }
    },

    srd_driven_policy: {
      description: "Strategic Resilience Domains applied with phased efficiency, participation, and QoL effects",
      srd_activation: { "2026": 0.35, "2027": 0.6, "2028": 0.9 },
      fiscal_years: {
        "2025": { revenue: 5.12, spending: 7.12, deficit: 2.0, debt: 36.9, GDP: 28.7, debt_to_GDP: 1.29, QoL_index: 50, note: "SRD investments initiated; no material fiscal impact yet" },
        "2026": { revenue: 5.73, spending: 7.04, deficit: 1.31, debt: 38.2, GDP: 30.0, debt_to_GDP: 1.27, QoL_index: 55 },
        "2027": { revenue: 5.87, spending: 7.28, deficit: 1.41, debt: 39.6, GDP: 31.4, debt_to_GDP: 1.26, QoL_index: 62 },
        "2028": { revenue: 6.16, spending: 7.15, deficit: 0.99, debt: 40.6, GDP: 32.9, debt_to_GDP: 1.23, QoL_index: 72 }
      }
    }
  },

  srd_fiscal_contributors: {
    revenue_lift: { SRD_1_Digital_Equity: 0.07, SRD_2_Workforce: 0.18, SRD_5_Childcare: 0.11, SRD_8_Wage_Stability: 0.06 },
    spending_moderation: { SRD_3_Healthcare_Efficiency: 0.22, SRD_11_Energy_Stability: 0.08, SRD_8_Housing_Stability: 0.05, SRD_9_Fiscal_Transparency: 0.04 }
  },

  srd_roi_per_100B: {
    "2026": 0.78,
    "2027": 0.73,
    "2028": 1.26,
    notes: "ROI calculated as deficit reduction + revenue lift + spending moderation per $100B SRD investment"
  },

  srd_qol_index: {
    components: ["health", "economic_security", "time_leisure", "community_safety", "environmental_resilience"],
    fiscal_years: { "2025": 50, "2026": 55, "2027": 62, "2028": 72 }
  },

  interpretive_notes: {
    key_insight: "SRD investments stabilize debt, reduce deficits, and drive QoL gains without austerity",
    risk_factor: "Sustained high interest rates delay SRD benefits but do not negate them",
    credibility_signal: "Social Security and defense remain structurally intact; QoL improvements reinforce fiscal justification"
  },

  unpicked_options: ["High-interest stress test scenarios", "State-by-state SRD impact view", "Yearly legislative sequencing roadmap"]
};
