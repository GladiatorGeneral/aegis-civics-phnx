'use client';

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

const data = [
  { year: 'Y1', revenue: 2, profit: 0.5 },
  { year: 'Y2', revenue: 6, profit: 2 },
  { year: 'Y3', revenue: 10, profit: 4 },
  { year: 'Y4', revenue: 14, profit: 6 },
  { year: 'Y5', revenue: 16, profit: 7 },
];

export default function RevenueProfitGrowthChart() {
  return (
    <div style={{ width: '100%', height: 320 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#38bdf8" opacity={0.2} />
          <XAxis dataKey="year" stroke="#67e8f9">
            <Label value="Year" offset={-10} position="insideBottom" fill="#67e8f9" />
          </XAxis>
          <YAxis stroke="#67e8f9" domain={[0, 18]} tickCount={10} >
            <Label value="$M" angle={-90} position="insideLeft" fill="#67e8f9" />
          </YAxis>
          <Tooltip contentStyle={{ background: '#0e7490', border: 'none', color: '#fff' }} />
          <Legend verticalAlign="top" height={36} wrapperStyle={{ color: '#67e8f9' }} />
          <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#38bdf8" strokeWidth={3} dot={{ r: 5 }} />
          <Line type="monotone" dataKey="profit" name="Net Profit" stroke="#fbbf24" strokeWidth={3} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
