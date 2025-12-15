'use client';

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

const data = [
	{ year: 'Y1', income: 1.2, debt: 1.05 },
	{ year: 'Y2', income: 2.8, debt: 1.05 },
	{ year: 'Y3', income: 4.0, debt: 1.05 },
	{ year: 'Y4', income: 5.2, debt: 1.05 },
	{ year: 'Y5', income: 6.5, debt: 1.05 },
];

export default function CashFlowVsDebtChart() {
	return (
		<div style={{ width: '100%', height: 320 }}>
			<ResponsiveContainer>
				<LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
					<CartesianGrid strokeDasharray="3 3" stroke="#38bdf8" opacity={0.2} />
					<XAxis dataKey="year" stroke="#67e8f9">
						<Label value="Year" offset={-10} position="insideBottom" fill="#67e8f9" />
					</XAxis>
					<YAxis stroke="#67e8f9" domain={[0, 7]} tickCount={8}>
						<Label value="$M" angle={-90} position="insideLeft" fill="#67e8f9" />
					</YAxis>
					<Tooltip contentStyle={{ background: '#0e7490', border: 'none', color: '#fff' }} />
					<Legend verticalAlign="top" height={36} wrapperStyle={{ color: '#67e8f9' }} />
					<Line
						type="monotone"
						dataKey="income"
						name="Net Operating Income"
						stroke="#38bdf8"
						strokeWidth={3}
						dot={{ r: 5 }}
					/>
					<Line
						type="monotone"
						dataKey="debt"
						name="Debt Service (Fixed)"
						stroke="#fbbf24"
						strokeWidth={3}
						dot={{ r: 5 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
