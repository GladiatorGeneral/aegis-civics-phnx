'use client';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

const data = [
  { year: 'Y1', Conventional: 1, Aquaculture: 0.5, Greenhouse: 0.3, Carbon: 0.2 },
  { year: 'Y2', Conventional: 2, Aquaculture: 1.5, Greenhouse: 1, Carbon: 0.5 },
  { year: 'Y3', Conventional: 3, Aquaculture: 2.5, Greenhouse: 2, Carbon: 0.7 },
  { year: 'Y4', Conventional: 4, Aquaculture: 3, Greenhouse: 3, Carbon: 1 },
  { year: 'Y5', Conventional: 5, Aquaculture: 4, Greenhouse: 4, Carbon: 1.5 },
];

export default function RevenueStreamEvolutionChart() {
  return (
    <div style={{ width: '100%', height: 320 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#38bdf8" opacity={0.2} />
          <XAxis dataKey="year" stroke="#67e8f9">
            <Label value="Year" offset={-10} position="insideBottom" fill="#67e8f9" />
          </XAxis>
          <YAxis stroke="#67e8f9" domain={[0, 16]} tickCount={9} >
            <Label value="$M" angle={-90} position="insideLeft" fill="#67e8f9" />
          </YAxis>
          <Tooltip contentStyle={{ background: '#0e7490', border: 'none', color: '#fff' }} />
          <Legend verticalAlign="top" height={36} wrapperStyle={{ color: '#67e8f9' }} />
          <Bar dataKey="Conventional" stackId="a" name="Conventional" fill="#38bdf8" />
          <Bar dataKey="Aquaculture" stackId="a" name="Aquaculture" fill="#06b6d4" />
          <Bar dataKey="Greenhouse" stackId="a" name="Greenhouse" fill="#818cf8" />
          <Bar dataKey="Carbon" stackId="a" name="Carbon Credits" fill="#fbbf24" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
