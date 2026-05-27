'use client';

import {
  AreaChart, Area, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, ReferenceLine,
} from 'recharts';

interface Props {
  data: { date: string; views: number }[];
  color?: string;
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: { payload: { date: string; views: number } }[] }) {
  if (!active || !payload?.length) return null;
  const { date, views } = payload[0].payload;
  return (
    <div style={{
      background: '#0C0C14',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 10,
      padding: '10px 16px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)',
    }}>
      <p style={{ color: '#4B4B5E', fontSize: 11, fontWeight: 600, margin: '0 0 4px', letterSpacing: '0.04em' }}>
        {new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
      </p>
      <p style={{ color: '#EDEDF0', fontSize: 22, fontWeight: 800, margin: 0, letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums' }}>
        {views.toLocaleString()}
        <span style={{ color: '#4B4B5E', fontWeight: 500, fontSize: 12, marginLeft: 6 }}>views</span>
      </p>
    </div>
  );
}

export default function ViewsAreaChart({ data, color = '#6366F1' }: Props) {
  const avg = data.length ? Math.round(data.reduce((s, d) => s + d.views, 0) / data.length) : 0;
  const gradId = `vg-${color.replace('#', '')}`;

  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data} margin={{ top: 8, right: 4, left: -16, bottom: 0 }}>
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={color} stopOpacity={0.28} />
            <stop offset="60%"  stopColor={color} stopOpacity={0.06} />
            <stop offset="100%" stopColor={color} stopOpacity={0}    />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" strokeDasharray="0" />
        {avg > 0 && (
          <ReferenceLine
            y={avg}
            stroke="rgba(255,255,255,0.1)"
            strokeDasharray="4 4"
            label={{ value: 'avg', position: 'right', fill: '#4B4B5E', fontSize: 10 }}
          />
        )}
        <XAxis
          dataKey="date"
          tickFormatter={d => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          tick={{ fill: '#4B4B5E', fontSize: 11 }}
          axisLine={false} tickLine={false}
          interval="preserveStartEnd"
        />
        <YAxis
          tick={{ fill: '#4B4B5E', fontSize: 11 }}
          axisLine={false} tickLine={false}
          tickFormatter={v => v >= 1000 ? `${(v / 1000).toFixed(1)}k` : String(v)}
          width={40}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ stroke: color, strokeWidth: 1, strokeOpacity: 0.25, strokeDasharray: '4 4' }}
        />
        <Area
          type="monotone" dataKey="views"
          stroke={color} strokeWidth={2}
          fill={`url(#${gradId})`} dot={false}
          activeDot={{ r: 5, fill: color, stroke: '#0C0C14', strokeWidth: 2.5 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
