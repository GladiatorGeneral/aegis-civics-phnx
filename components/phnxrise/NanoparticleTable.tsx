import React from "react";

export function NanoparticleTable() {
  const rows = [
    {
      type: "Zero-Valent Iron (nZVI)",
      function: "Reductive destruction of chlorinated solvents; heavy metal immobilization",
      note: "Good for groundwater remediation; can oxidize over time",
    },
    {
      type: "Titanium Dioxide (TiO2)",
      function: "Photocatalytic degradation of organics using light energy",
      note: "Requires UV; research on visible-light activation",
    },
    {
      type: "Silver (Ag NPs)",
      function: "Antimicrobial activity vs bacteria and pathogens",
      note: "Effective size/shape dependent; environmental fate concerns",
    },
    {
      type: "Carbon-Based (Graphene Oxide)",
      function: "High-capacity adsorption of heavy metals and organics",
      note: "High surface area; can be functionalized for targets",
    },
  ];

  return (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full text-sm text-cyan-100 border border-cyan-800 rounded-lg">
        <thead className="bg-cyan-900/80">
          <tr>
            <th className="px-3 py-2 text-left">Nanoparticle Type</th>
            <th className="px-3 py-2 text-left">Primary Function & Targets</th>
            <th className="px-3 py-2 text-left">Key Consideration</th>
          </tr>
        </thead>
        <tbody className="bg-slate-900/60">
          {rows.map((r) => (
            <tr key={r.type} className="border-b border-cyan-800">
              <td className="px-3 py-2 align-top">{r.type}</td>
              <td className="px-3 py-2">{r.function}</td>
              <td className="px-3 py-2">{r.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
