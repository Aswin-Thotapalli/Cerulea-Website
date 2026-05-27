'use client';

import {
  AreaChart, Area, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, ReferenceLine,
} from 'recharts';

interface Props {
  data: { date: string; views: number }[];
  color?: string;
}

function Tip({ active, payload }: { active?: boolean; payload?: { payload: { date: string; views: number } }[] }) {
  if (!active || !payload?.length) return null;
  const { date, views } = payload[0].payload;
  return (
    <div style={{
      background: '#111113', border: '1px solid #1C1C1E', borderRadius: 8,
      padding: '10px 14px', boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
    }}>
      <p style={{ color: '#52525B', fontSize: 11, fontWeight: 500, margin: '0 0 4px', letterSpacing: '0.04em' }}>
        {new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
      </p>
      <p style={{ color: '#FAFAFA', fontSize: 20, fontWeight: 800, margin: 0, letterSpacing: '-0.03em' }}>
        {views.toLocaleString()}
        <span style={{ color: '#52525B', fontWeight: 400, fontSize: 12, marginLeft: 6 }}>views</span>
      </p>
    </div>
  );
}

export default function ViewsAreaChart({ data, color = '#2563EB' }: Props) {
  const max = Math.max(...data.map(d => d.views), 1);
  const avg = data.length ? Math.round(data.reduce((s, d) => s + d.views, 0) / data.length) : 0;

  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data} margin={{ top: 8, right: 0, left: -16, bottom: 0 }}>
        <defs>
          <linearGradient id="vg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={color} stopOpacity={0.22} />
            <stop offset="70%"  stopColor={color} stopOpacity={0.04} />
            <stop offset="100%" stopColor={color} stopOpacity={0}    />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="#1C1C1E" strokeDasharray="0" />
        {avg > 0 && (
          <ReferenceLine y={avg} stroke="#1C1C1E" strokeDasharray="4 4"
            label={{ value: 'avg', position: 'right', fill: '#3A3A3C', fontSize: 10 }} />
        )}
        <XAxis
          dataKey="date"
          tickFormatter={d => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          tick={{ fill: '#3A3A3C', fontSize: 11, fontFamily: 'system-ui' }}
          axisLine={false} tickLine={false}
          interval="preserveStartEnd"
        />
        <YAxis
          tick={{ fill: '#3A3A3C', fontSize: 11, fontFamily: 'system-ui' }}
          axisLine={false} tickLine={false}
          tickFormatter={v => v >= 1000 ? `${(v / 1000).toFixed(1)}k` : String(v)}
          width={40}
        />
        <Tooltip
          content={<Tip />}
          cursor={{ stroke: '#2563EB', strokeWidth: 1, strokeOpacity: 0.3, strokeDasharray: '4 4' }}
        />
        <Area
          type="monotone" dataKey="views"
          stroke={color} strokeWidth={2}
          fill="url(#vg)" dot={false}
          activeDot={{ r: 4, fill: color, stroke: '#111113', strokeWidth: 2 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
