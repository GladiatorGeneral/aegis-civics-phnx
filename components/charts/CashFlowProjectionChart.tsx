'use client';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

const data = [
  { year: 'Y1', revenue: 4.5, expenses: 3.3, net: 1.2, cash: 1.1 },
  { year: 'Y2', revenue: 8.0, expenses: 5.2, net: 2.8, cash: 2.6 },
  { year: 'Y3', revenue: 11.0, expenses: 7.0, net: 4.0, cash: 3.7 },
  { year: 'Y4', revenue: 13.5, expenses: 8.3, net: 5.2, cash: 4.8 },
  { year: 'Y5', revenue: 16.0, expenses: 9.5, net: 6.5, cash: 6.0 },
];

export default function CashFlowProjectionChart() {
  return (
    <div style={{ width: '100%', height: 320 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#38bdf8" opacity={0.2} />
          <XAxis dataKey="year" stroke="#67e8f9">
            <Label value="Year" offset={-10} position="insideBottom" fill="#67e8f9" />
          </XAxis>
          <YAxis stroke="#67e8f9" domain={[0, 18]} tickCount={10} >
            <Label value="$M" angle={-90} position="insideLeft" fill="#67e8f9" />
          </YAxis>
          <Tooltip contentStyle={{ background: '#0e7490', border: 'none', color: '#fff' }} />
          <Legend verticalAlign="top" height={36} wrapperStyle={{ color: '#67e8f9' }} />
          <Bar dataKey="revenue" name="Revenue" fill="#38bdf8" />
          <Bar dataKey="expenses" name="Op Expenses" fill="#06b6d4" />
          <Bar dataKey="net" name="Net Income" fill="#818cf8" />
          <Bar dataKey="cash" name="Cash Flow" fill="#fbbf24" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
