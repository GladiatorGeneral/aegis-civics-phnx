'use client';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

const data = [
  { kpi: 'Crop Yield vs Local', year1: 10, year5: 25, unit: '%' },
  { kpi: 'Fish Feed Ratio', year1: 1.5, year5: 1.2, unit: '' },
  { kpi: 'Greenhouse Yield', year1: 5, year5: 8, unit: 'kg/sf' },
  { kpi: 'Water Recycling', year1: 90, year5: 99, unit: '%' },
  { kpi: 'Gross Margin', year1: 40, year5: 52, unit: '%' },
  { kpi: 'Labor Cost/Lb', year1: 0.18, year5: 0.12, unit: '$/lb' },
];

export default function KPIBarChart() {
  return (
    <div style={{ width: '100%', height: 340 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#38bdf8" opacity={0.2} />
          <XAxis type="number" stroke="#67e8f9" domain={[0, 'dataMax + 10']} tick={{ fill: '#67e8f9' }} />
          <YAxis dataKey="kpi" type="category" stroke="#67e8f9" width={180} tick={{ fill: '#67e8f9', fontSize: 14 }} />
          <Tooltip contentStyle={{ background: '#0e7490', border: 'none', color: '#fff' }} formatter={(value, name, props) => [`${value} ${props.payload.unit || ''}`]} />
          <Legend verticalAlign="top" height={36} wrapperStyle={{ color: '#67e8f9' }} />
          <Bar dataKey="year1" name="Year 1" fill="#38bdf8" barSize={18} />
          <Bar dataKey="year5" name="Year 5" fill="#fbbf24" barSize={18} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
