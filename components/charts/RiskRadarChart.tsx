'use client';

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, Legend } from 'recharts';

const data = [
  { risk: 'Commodity Prices', mitigation: 4 },
  { risk: 'Aquaculture Disease', mitigation: 5 },
  { risk: 'Weather Events', mitigation: 3 },
  { risk: 'Labor Availability', mitigation: 4 },
];

// mitigation: 1 = low, 5 = high (effectiveness of mitigation strategy)

export default function RiskRadarChart() {
  return (
    <div style={{ width: '100%', height: 340 }}>
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#38bdf8" opacity={0.2} />
          <PolarAngleAxis dataKey="risk" stroke="#67e8f9" tick={{ fill: '#67e8f9', fontSize: 14 }} />
          <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fill: '#67e8f9' }} />
          <Radar name="Mitigation Effectiveness" dataKey="mitigation" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.4} />
          <Tooltip contentStyle={{ background: '#0e7490', border: 'none', color: '#fff' }} />
          <Legend wrapperStyle={{ color: '#67e8f9' }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
