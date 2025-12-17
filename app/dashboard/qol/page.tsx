import React from "react";
import NationalQoLDashboard from "@/components/dashboard/NationalQoLDashboard";

export default function QoLPage() {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        <NationalQoLDashboard />
      </div>
    </div>
  );
}
