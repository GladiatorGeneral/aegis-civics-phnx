"use client";

import React, { useState } from "react";
import { FederalFinanceDashboard } from "@/components/finance/FederalFinanceDashboard";

export default function YearedFinance() {
  const [year, setYear] = useState<number>(2024);
  const [showSRD, setShowSRD] = useState<boolean>(false);

  return (
    <div>
      <div className="mb-6">
        <label htmlFor="year" className="sr-only">Fiscal Year</label>
        <select
          id="year"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="bg-gray-800 text-white rounded px-3 py-2"
        >
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
          <option value={2026}>2026</option>
        </select>
        <label className="ml-4 inline-flex items-center text-sm">
          <input
            type="checkbox"
            checked={showSRD}
            onChange={(e) => setShowSRD(e.target.checked)}
            className="form-checkbox h-4 w-4 text-emerald-400 bg-gray-800 border-gray-600 rounded"
          />
          <span className="ml-2 text-gray-300">Show SRD Impacts</span>
        </label>
      </div>
      <FederalFinanceDashboard year={year} showSRD={showSRD} />
    </div>
  );
}
