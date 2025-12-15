'use client';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

const data = [
  { category: 'AI & Automation', amount: 1.4 },
  { category: 'Farm Equipment', amount: 2.25 },
  { category: 'Water Farming Infra', amount: 2.15 },
  { category: 'Greenhouse & Processing', amount: 2.85 },
  { category: 'Working Capital & Soft', amount: 3.35 },
];

export default function CapexBreakdownChart() {
  return (
    <div style={{ width: '100%', height: 320 }}>
      <ResponsiveContainer>
        <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 60, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#38bdf8" opacity={0.2} />
          <XAxis type="number" stroke="#67e8f9" domain={[0, 4]} tick={{ fill: '#67e8f9' }}>
            <Label value="$M" offset={-10} position="insideBottom" fill="#67e8f9" />
          </XAxis>
          <YAxis dataKey="category" type="category" stroke="#67e8f9" width={180} tick={{ fill: '#67e8f9', fontSize: 14 }} />
          <Tooltip contentStyle={{ background: '#0e7490', border: 'none', color: '#fff' }} formatter={(value) => [`$${value}M`]} />
          <Legend verticalAlign="top" height={36} wrapperStyle={{ color: '#67e8f9' }} />
          <Bar dataKey="amount" name="Amount ($M)" fill="#38bdf8" barSize={18} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
