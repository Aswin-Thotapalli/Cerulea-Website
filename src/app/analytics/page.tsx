import * as React from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { isAdmin } from '@/lib/auth';
import {
  isConfigured,
  getOverview, getPreviousOverview,
  getBounceRate, getPreviousBounceRate,
  getAvgSessionDuration, getPagesPerSession,
  getNewVsReturning,
  getTopPages, getTopPagesWithTime,
  getTopBlogPosts, getTopCTAs, getNavClicks,
  getCountries, getDevices, getOS, getBrowsers,
  getSources, getLeads, getTopEvents,
  getDailyViews, getHourlyTraffic, getDayOfWeek,
  getScrollDepth, getConversionFunnel, getWebVitals,
  getSessionRecordings,
} from '@/lib/posthog-api';

export const metadata: Metadata = {
  title: 'Analytics | Cerulea',
  robots: { index: false, follow: false },
};
export const revalidate = 0;

// ─── Tokens ───────────────────────────────────────────────────────────────────
const T = {
  bg:      '#07090F',
  card:    '#0C1018',
  card2:   '#111827',
  border:  'rgba(255,255,255,0.07)',
  text:    '#E8EEFF',
  muted:   '#7B8BA8',
  dim:     '#3C4A5C',
  blue:    '#4F8EF7',
  purple:  '#9B72F6',
  green:   '#22C55E',
  orange:  '#F59E0B',
  red:     '#EF4444',
  cyan:    '#22D3EE',
  pink:    '#EC4899',
  teal:    '#14B8A6',
} as const;

// ─── Helpers ──────────────────────────────────────────────────────────────────
function pct(v: number, t: number) { return t ? Math.round((v / t) * 100) : 0; }
function delta(cur: number, prev: number) { return prev ? Math.round(((cur - prev) / prev) * 100) : null; }

function fmtDuration(s: number): string {
  if (!s) return '—';
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60), r = s % 60;
  if (m < 60) return r ? `${m}m ${r}s` : `${m}m`;
  return `${Math.floor(m / 60)}h ${m % 60}m`;
}

function timeAgo(ts: string): string {
  const d = Date.now() - new Date(ts).getTime(), m = Math.floor(d / 60000);
  if (m < 1) return 'just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function initials(name?: string, email?: string): string {
  if (name) return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  if (email) return email[0].toUpperCase();
  return '?';
}

const FLAGS: Record<string, string> = {
  'India': '🇮🇳', 'United States': '🇺🇸', 'United Kingdom': '🇬🇧',
  'Germany': '🇩🇪', 'France': '🇫🇷', 'Canada': '🇨🇦', 'Australia': '🇦🇺',
  'Singapore': '🇸🇬', 'Japan': '🇯🇵', 'Netherlands': '🇳🇱', 'Switzerland': '🇨🇭',
  'Sweden': '🇸🇪', 'Norway': '🇳🇴', 'Brazil': '🇧🇷', 'UAE': '🇦🇪',
  'South Korea': '🇰🇷', 'China': '🇨🇳', 'Indonesia': '🇮🇩', 'Israel': '🇮🇱',
};

const VITAL_THRESHOLDS: Record<string, [number, number]> = {
  LCP:  [2500, 4000], FID: [100, 300], INP: [200, 500],
  CLS:  [0.1,  0.25], FCP: [1800, 3000], TTFB: [800, 1800],
};
function vitalRating(metric: string, value: number) {
  const t = VITAL_THRESHOLDS[metric];
  if (!t) return T.muted;
  return value <= t[0] ? T.green : value <= t[1] ? T.orange : T.red;
}
function fmtVital(metric: string, value: number) {
  if (metric === 'CLS') return value.toFixed(3);
  return value >= 1000 ? `${(value / 1000).toFixed(2)}s` : `${Math.round(value)}ms`;
}

// ─── SVG Charts ───────────────────────────────────────────────────────────────

// Smooth Catmull-Rom spline through points
function spline(pts: { x: number; y: number }[], tension = 0.4): string {
  if (pts.length < 2) return '';
  let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];
    const cp1x = p1.x + (p2.x - p0.x) * tension / 2;
    const cp1y = p1.y + (p2.y - p0.y) * tension / 2;
    const cp2x = p2.x - (p3.x - p1.x) * tension / 2;
    const cp2y = p2.y - (p3.y - p1.y) * tension / 2;
    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d;
}

function AreaChart({ data, color = T.blue }: { data: { date: string; views: number }[]; color?: string }) {
  if (data.length < 2) return null;
  const W = 900, H = 180, P = { t: 20, r: 12, b: 32, l: 48 };
  const IW = W - P.l - P.r, IH = H - P.t - P.b;
  const max = Math.max(...data.map(d => d.views), 1);

  const pts = data.map((d, i) => ({
    x: P.l + (i / (data.length - 1)) * IW,
    y: P.t + IH - (d.views / max) * IH,
    ...d,
  }));

  const linePath = spline(pts);
  const last = pts[pts.length - 1];
  const first = pts[0];
  const area = `${linePath} L${last.x.toFixed(1)},${(P.t + IH).toFixed(1)} L${first.x.toFixed(1)},${(P.t + IH).toFixed(1)} Z`;

  const yVals = [max, Math.round(max * 0.5), 0];
  const xIdxs = [0, Math.round(data.length * 0.25), Math.round(data.length * 0.5), Math.round(data.length * 0.75), data.length - 1].filter(i => i < data.length);

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', overflow: 'visible' }}>
      <defs>
        <linearGradient id="agrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={color} stopOpacity={0.25} />
          <stop offset="60%"  stopColor={color} stopOpacity={0.06} />
          <stop offset="100%" stopColor={color} stopOpacity={0}    />
        </linearGradient>
      </defs>
      {yVals.map((v, i) => {
        const y = P.t + (i / (yVals.length - 1)) * IH;
        return (
          <g key={i}>
            <line x1={P.l} x2={W - P.r} y1={y} y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth={1} />
            <text x={P.l - 8} y={y + 4} textAnchor="end" fontSize={11} fill={T.dim} fontFamily="system-ui">
              {v >= 1000 ? `${(v / 1000).toFixed(1)}k` : v}
            </text>
          </g>
        );
      })}
      <path d={area} fill="url(#agrad)" />
      <path d={linePath} fill="none" stroke={color} strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
      {xIdxs.map(i => {
        const p = pts[i];
        const lbl = new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        return <text key={i} x={p.x} y={H - 6} textAnchor="middle" fontSize={11} fill={T.dim} fontFamily="system-ui">{lbl}</text>;
      })}
      <circle cx={last.x} cy={last.y} r={4} fill={color} />
      <circle cx={last.x} cy={last.y} r={7} fill={color} fillOpacity={0.2} />
    </svg>
  );
}

function Sparkline({ data, color = T.blue }: { data: { date: string; views: number }[]; color?: string }) {
  if (data.length < 2) return null;
  const W = 72, H = 24, max = Math.max(...data.map(d => d.views), 1);
  const pts = data.map((d, i) => ({ x: (i / (data.length - 1)) * W, y: H - (d.views / max) * H, ...d }));
  const line = spline(pts, 0.3);
  const last = pts[pts.length - 1];
  return (
    <svg width={W} height={H} style={{ display: 'block', flexShrink: 0 }}>
      <path d={`${line} L${last.x},${H} L0,${H} Z`} fill={`${color}18`} />
      <path d={line} fill="none" stroke={color} strokeWidth={1.5} strokeLinejoin="round" />
    </svg>
  );
}

function HBar({ v, t, color = T.blue }: { v: number; t: number; color?: string }) {
  const p = pct(v, t || 1);
  return (
    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 3, height: 4, flex: 1 }}>
      <div style={{ background: color, borderRadius: 3, height: 4, width: `${p}%` }} />
    </div>
  );
}

function VBars({ data, color = T.blue }: { data: { label: string; v: number }[]; color?: string }) {
  const max = Math.max(...data.map(d => d.v), 1);
  const W = 460, BH = 68, LH = 16;
  const bw = W / data.length;
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${BH + LH}`} style={{ display: 'block', overflow: 'visible' }}>
      {data.map((d, i) => {
        const h = Math.max((d.v / max) * BH, d.v ? 2 : 0);
        const x = i * bw + bw * 0.2;
        const w = bw * 0.6;
        return (
          <g key={i}>
            <rect x={x} y={BH - h} width={w} height={h} fill={color} rx={2}
              opacity={0.5 + (d.v / max) * 0.5} />
            <text x={x + w / 2} y={BH + 13} textAnchor="middle" fontSize={9} fill={T.dim} fontFamily="system-ui">
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function HeatGrid({ data, color = T.blue }: { data: { hour: number; views: number }[]; color?: string }) {
  const max = Math.max(...data.map(d => d.views), 1);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: 3, marginBottom: 6 }}>
      {data.map(({ hour, views }) => {
        const opacity = views ? 0.12 + (views / max) * 0.88 : 0.06;
        return (
          <div key={hour} title={`${hour}:00 — ${views} views`} style={{
            aspectRatio: '1', borderRadius: 3,
            background: views ? `${color}` : 'rgba(255,255,255,0.04)',
            opacity,
          }} />
        );
      })}
    </div>
  );
}

function DonutChart({ slices }: { slices: { label: string; value: number; color: string }[] }) {
  const total = slices.reduce((s, d) => s + d.value, 0);
  if (!total) return null;
  const R = 40, r = 24, cx = 52, cy = 52;
  let a = -Math.PI / 2;
  const arcs = slices.map(s => {
    const frac = s.value / total;
    const sa = a; a += frac * Math.PI * 2;
    const x1 = cx + R * Math.cos(sa), y1 = cy + R * Math.sin(sa);
    const x2 = cx + R * Math.cos(a),  y2 = cy + R * Math.sin(a);
    const ix1 = cx + r * Math.cos(sa), iy1 = cy + r * Math.sin(sa);
    const ix2 = cx + r * Math.cos(a),  iy2 = cy + r * Math.sin(a);
    const lg = frac > 0.5 ? 1 : 0;
    return { ...s, pct: Math.round(frac * 100), path: `M${x1.toFixed(2)} ${y1.toFixed(2)} A${R} ${R} 0 ${lg} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} L${ix2.toFixed(2)} ${iy2.toFixed(2)} A${r} ${r} 0 ${lg} 0 ${ix1.toFixed(2)} ${iy1.toFixed(2)}Z` };
  });
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
      <svg width={104} height={104} viewBox="0 0 104 104" style={{ flexShrink: 0 }}>
        {arcs.map(a => <path key={a.label} d={a.path} fill={a.color} />)}
        <circle cx={cx} cy={cy} r={20} fill={T.card} />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {arcs.map(a => (
          <div key={a.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: a.color, flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 13, color: T.text, fontWeight: 600 }}>{a.label}</div>
              <div style={{ fontSize: 11, color: T.muted }}>{a.value.toLocaleString()} · {a.pct}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrendBadge({ d, invert = false }: { d: number | null; invert?: boolean }) {
  if (d === null) return null;
  const good = invert ? d <= 0 : d >= 0;
  return (
    <span style={{ fontSize: 11, fontWeight: 700, color: good ? T.green : T.red, display: 'inline-flex', alignItems: 'center' }}>
      {d >= 0 ? '↑' : '↓'}&nbsp;{Math.abs(d)}%
    </span>
  );
}

// ─── Card primitives ──────────────────────────────────────────────────────────
const card: React.CSSProperties = {
  background: T.card,
  border: `1px solid ${T.border}`,
  borderRadius: 12,
  padding: '1.25rem 1.5rem',
};

const sh: React.CSSProperties = {
  fontSize: 10, fontWeight: 700, color: T.muted,
  letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem',
};

// ─── Setup gate ───────────────────────────────────────────────────────────────
function SetupRequired() {
  return (
    <div style={{ minHeight: '100vh', background: T.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ ...card, maxWidth: 540, width: '100%' }}>
        <p style={{ fontSize: 32, marginBottom: 16 }}>🔧</p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: T.text, marginBottom: 8 }}>PostHog not configured</h2>
        <p style={{ color: T.muted, lineHeight: 1.7, marginBottom: 20 }}>Add these to Vercel → Environment Variables, then redeploy:</p>
        <div style={{ background: '#020408', border: `1px solid ${T.border}`, borderRadius: 8, padding: '1rem 1.25rem', fontFamily: 'monospace', fontSize: 13, color: T.text, lineHeight: 2.2 }}>
          <div style={{ color: T.dim }}># PostHog → Avatar → Personal API Keys</div>
          <div>POSTHOG_PERSONAL_API_KEY=phx_...</div>
          <div style={{ marginTop: 8, color: T.dim }}># PostHog URL → number after /project/</div>
          <div>POSTHOG_PROJECT_ID=123456</div>
        </div>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default async function AnalyticsPage({ searchParams }: { searchParams: Promise<{ days?: string }> }) {
  const admin = await isAdmin();
  if (!admin) redirect('/');
  if (!isConfigured()) return <SetupRequired />;

  const { days: dp } = await searchParams;
  const days = Number(dp) || 7;

  const [
    ov, prev, bounce, prevBounce, dur, pps, nvr,
    topPages, pagesTime, topBlog, topCTAs, navClicks,
    countries, devices, os, browsers, sources,
    leads, events, daily, hourly, dow, scroll,
    funnel, vitals, sessions,
  ] = await Promise.all([
    getOverview(days).catch(() => ({ pageViews: 0, uniqueVisitors: 0, sessions: 0, contacts: 0 })),
    getPreviousOverview(days).catch(() => ({ pageViews: 0, uniqueVisitors: 0, sessions: 0, contacts: 0 })),
    getBounceRate(days).catch(() => 0),
    getPreviousBounceRate(days).catch(() => 0),
    getAvgSessionDuration(days).catch(() => 0),
    getPagesPerSession(days).catch(() => 0),
    getNewVsReturning(days).catch(() => []),
    getTopPages(days).catch(() => []),
    getTopPagesWithTime(days).catch(() => []),
    getTopBlogPosts(days).catch(() => []),
    getTopCTAs(days).catch(() => []),
    getNavClicks(days).catch(() => []),
    getCountries(days).catch(() => []),
    getDevices(days).catch(() => []),
    getOS(days).catch(() => []),
    getBrowsers(days).catch(() => []),
    getSources(days).catch(() => []),
    getLeads(days).catch(() => []),
    getTopEvents(days).catch(() => []),
    getDailyViews(days).catch(() => []),
    getHourlyTraffic(days).catch(() => []),
    getDayOfWeek(days).catch(() => []),
    getScrollDepth(days).catch(() => []),
    getConversionFunnel(days).catch(() => ({ visitors: 0, ctaClicks: 0, formStarts: 0, formSubmits: 0 })),
    getWebVitals(days).catch(() => []),
    getSessionRecordings(20).catch(() => []),
  ]);

  const dViews    = delta(ov.pageViews,      prev.pageViews);
  const dVisitors = delta(ov.uniqueVisitors,  prev.uniqueVisitors);
  const dSessions = delta(ov.sessions,        prev.sessions);
  const dContacts = delta(ov.contacts,        prev.contacts);
  const dBounce   = delta(bounce,             prevBounce);

  const tSrc  = sources.reduce((s, d) => s + d.count, 0);
  const tDev  = devices.reduce((s, d) => s + d.count, 0);
  const tOS   = os.reduce((s, d) => s + d.count, 0);
  const tBrow = browsers.reduce((s, d) => s + d.count, 0);
  const tCtr  = countries.reduce((s, d) => s + d.count, 0);

  const phBase = `https://us.posthog.com/project/${process.env.POSTHOG_PROJECT_ID}`;
  const newVisitors = nvr.find(r => r.type === 'New')?.count ?? 0;

  const kpis = [
    { label: 'Page Views',      value: ov.pageViews.toLocaleString(),      d: dViews,    color: T.blue,   spark: true  },
    { label: 'Unique Visitors', value: ov.uniqueVisitors.toLocaleString(), d: dVisitors, color: T.purple, spark: false },
    { label: 'Sessions',        value: ov.sessions.toLocaleString(),       d: dSessions, color: T.cyan,   spark: false },
    { label: 'Leads',           value: ov.contacts.toLocaleString(),       d: dContacts, color: T.green,  spark: false },
  ];

  const secondary = [
    { label: 'Bounce Rate',    value: `${bounce}%`,              d: dBounce, invert: true,  color: T.orange },
    { label: 'Avg Duration',   value: fmtDuration(dur),          d: null,    invert: false, color: T.teal   },
    { label: 'Pages / Session',value: pps ? pps.toFixed(1) : '—', d: null,  invert: false, color: '#38BDF8' },
    { label: 'New Visitors',   value: newVisitors.toLocaleString(), d: null, invert: false, color: T.pink   },
  ];

  return (
    <div style={{ background: T.bg, minHeight: '100vh', color: T.text, fontFamily: 'system-ui,-apple-system,sans-serif' }}>

      {/* ── Topbar ──────────────────────────────────────────────────────── */}
      <div style={{ background: '#070912', borderBottom: `1px solid ${T.border}`, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.5rem', position: 'sticky', top: 64, zIndex: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Link href="/" style={{ color: T.blue, fontSize: 13, fontWeight: 600, textDecoration: 'none', opacity: 0.8 }}>← cerulea.io</Link>
          <span style={{ color: T.border }}>|</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: T.text }}>Analytics</span>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {[7, 30, 90].map(d => (
            <Link key={d} href={`/analytics?days=${d}`} style={{
              padding: '4px 14px', borderRadius: 6, fontSize: 12, fontWeight: 700, textDecoration: 'none',
              background: days === d ? T.blue : 'rgba(255,255,255,0.05)',
              color: days === d ? '#fff' : T.muted,
              border: `1px solid ${days === d ? T.blue : T.border}`,
            }}>
              {d === 7 ? '1W' : d === 30 ? '1M' : '3M'}
            </Link>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '2rem 1.5rem 6rem' }}>

        {/* ── KPI cards ─────────────────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 12 }}>
          {kpis.map(({ label, value, d: dl, color, spark }) => (
            <div key={label} style={{ ...card, borderTop: `2px solid ${color}`, display: 'flex', flexDirection: 'column', gap: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{label}</span>
                <TrendBadge d={dl} />
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
                <span style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: T.text }}>{value}</span>
                {spark && <Sparkline data={daily} color={color} />}
              </div>
              <div style={{ fontSize: 11, color: T.dim, marginTop: 8 }}>vs prev {days}d</div>
            </div>
          ))}
        </div>

        {/* ── Secondary KPIs ────────────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
          {secondary.map(({ label, value, d: dl, invert, color }) => (
            <div key={label} style={{ ...card, borderTop: `2px solid ${color}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{label}</span>
                {dl !== null && <TrendBadge d={dl} invert={invert} />}
              </div>
              <span style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: T.text }}>{value}</span>
            </div>
          ))}
        </div>

        {/* ── Area chart + right rail ────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 12, marginBottom: 20 }}>
          <div style={card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <p style={{ ...sh, margin: 0 }}>Daily Page Views</p>
              <span style={{ fontSize: 12, color: T.dim }}>{ov.pageViews.toLocaleString()} total</span>
            </div>
            <AreaChart data={daily} color={T.blue} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {/* New vs Returning */}
            <div style={{ ...card, flex: 1 }}>
              <p style={sh}>Audience</p>
              <DonutChart slices={[
                { label: 'New',       value: nvr.find(r => r.type === 'New')?.count ?? 0,       color: T.blue   },
                { label: 'Returning', value: nvr.find(r => r.type === 'Returning')?.count ?? 0, color: T.purple },
              ]} />
            </div>
            {/* Conversion mini */}
            <div style={{ ...card, flex: 1 }}>
              <p style={sh}>Conversion</p>
              {[
                { label: 'Visitors',    value: funnel.visitors,    color: T.blue   },
                { label: 'CTA Clicks',  value: funnel.ctaClicks,   color: T.purple },
                { label: 'Form Start',  value: funnel.formStarts,  color: T.orange },
                { label: 'Submitted',   value: funnel.formSubmits, color: T.green  },
              ].map(({ label, value, color }, i, arr) => {
                const rate = arr[0].value ? pct(value, arr[0].value) : 0;
                return (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: i < arr.length - 1 ? 10 : 0 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: T.muted, flex: 1 }}>{label}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: T.text }}>{value.toLocaleString()}</span>
                    {i > 0 && <span style={{ fontSize: 11, color, minWidth: 34, textAlign: 'right' }}>{rate}%</span>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Top Pages (with time) + Traffic Sources ────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 12, marginBottom: 20 }}>
          {/* Pages with time */}
          <div style={card}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '0 12px', alignItems: 'center', marginBottom: 12 }}>
              <span style={sh}>Top Pages</span>
              <span style={{ fontSize: 10, fontWeight: 700, color: T.dim, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Views</span>
              <span style={{ fontSize: 10, fontWeight: 700, color: T.dim, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Avg Time</span>
            </div>
            {topPages.map(({ page, views }) => {
              const timeRow = pagesTime.find(t => t.page === page);
              return (
                <div key={page} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '0 12px', alignItems: 'center', marginBottom: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
                    <HBar v={views} t={topPages[0]?.views ?? 1} color={T.blue} />
                    <span style={{ fontSize: 12, color: T.muted, fontFamily: 'monospace', flexShrink: 0, maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={page}>{page}</span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: T.text, textAlign: 'right', width: 36 }}>{views}</span>
                  <span style={{ fontSize: 12, color: T.muted, textAlign: 'right', width: 52 }}>
                    {timeRow ? fmtDuration(timeRow.avgTime) : '—'}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Traffic sources */}
          <div style={card}>
            <p style={sh}>Traffic Sources</p>
            {sources.map(({ source, count }) => (
              <div key={source} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 12, color: T.muted, flexShrink: 0, width: 120, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{source}</span>
                <HBar v={count} t={tSrc} color={T.purple} />
                <span style={{ fontSize: 11, fontWeight: 700, color: T.text, flexShrink: 0, width: 32, textAlign: 'right' }}>{pct(count, tSrc)}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Scroll depth + Hourly heatmap + Day of week ────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 20 }}>
          {/* Scroll depth */}
          <div style={card}>
            <p style={sh}>Scroll Depth</p>
            {scroll.map(({ depth, sessions: s }) => {
              const p = ov.sessions ? pct(s, ov.sessions) : 0;
              const colors: Record<number, string> = { 25: T.blue, 50: T.purple, 75: T.green, 90: T.orange, 100: T.red };
              return (
                <div key={depth} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                    <span style={{ fontSize: 12, color: T.muted }}>{depth}% scroll</span>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <span style={{ fontSize: 11, color: T.dim }}>{s.toLocaleString()}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: colors[depth] }}>{p}%</span>
                    </div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 3, height: 5 }}>
                    <div style={{ background: colors[depth], borderRadius: 3, height: 5, width: `${p}%` }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hourly heatmap */}
          <div style={card}>
            <p style={sh}>Hourly Traffic — UTC</p>
            <HeatGrid data={hourly} color={T.blue} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
              {['0h', '6h', '12h', '18h', '23h'].map(l => (
                <span key={l} style={{ fontSize: 9, color: T.dim }}>{l}</span>
              ))}
            </div>
          </div>

          {/* Day of week */}
          <div style={card}>
            <p style={sh}>Day of Week</p>
            <VBars data={dow.map(d => ({ label: d.day, v: d.views }))} color={T.teal} />
          </div>
        </div>

        {/* ── Session Recordings ────────────────────────────────────────── */}
        <div style={{ ...card, marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <p style={{ ...sh, margin: 0 }}>Session Recordings</p>
            <a href={`${phBase}/replay/home`} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 12, color: T.blue, textDecoration: 'none', fontWeight: 600 }}>
              Open in PostHog →
            </a>
          </div>
          {sessions.length === 0 ? (
            <p style={{ color: T.dim, fontSize: 13 }}>No recordings yet — recordings appear here as sessions accumulate.</p>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
                <thead>
                  <tr>
                    {['', 'Visitor', 'Duration', 'Clicks', 'Device', 'Country', 'When', 'Watch'].map(h => (
                      <th key={h} style={{ fontSize: 10, fontWeight: 700, color: T.dim, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '6px 10px', borderBottom: `1px solid ${T.border}`, textAlign: 'left', whiteSpace: 'nowrap' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sessions.map(rec => {
                    const p = rec.person?.properties ?? {};
                    const name = rec.person?.name;
                    const email = p.email;
                    const country = p.$geoip_country_name;
                    const browser = p.$browser;
                    const device  = p.$device_type;
                    return (
                      <tr key={rec.id} style={{ borderBottom: `1px solid ${T.border}` }}>
                        {/* Status dot */}
                        <td style={{ padding: '10px 10px 10px 14px', width: 20 }}>
                          <div style={{ width: 7, height: 7, borderRadius: '50%', background: rec.viewed ? T.dim : T.green, flexShrink: 0 }} title={rec.viewed ? 'Viewed' : 'New'} />
                        </td>
                        {/* Visitor */}
                        <td style={{ padding: '10px 10px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <div style={{ width: 28, height: 28, borderRadius: '50%', background: `${T.blue}22`, border: `1px solid ${T.blue}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: T.blue, flexShrink: 0 }}>
                              {initials(name, email)}
                            </div>
                            <div>
                              <div style={{ fontSize: 13, color: T.text, fontWeight: 600 }}>{name || (email ? email.split('@')[0] : 'Anonymous')}</div>
                              {(browser || device) && <div style={{ fontSize: 11, color: T.dim }}>{[browser, device].filter(Boolean).join(' · ')}</div>}
                            </div>
                          </div>
                        </td>
                        {/* Duration */}
                        <td style={{ padding: '10px', fontSize: 13, color: T.text, fontWeight: 600, whiteSpace: 'nowrap' }}>
                          {fmtDuration(rec.duration)}
                        </td>
                        {/* Clicks */}
                        <td style={{ padding: '10px', fontSize: 13, color: T.muted, whiteSpace: 'nowrap' }}>
                          {rec.click_count ?? 0}
                          {rec.console_error_count > 0 && (
                            <span style={{ marginLeft: 8, color: T.red, fontSize: 11, fontWeight: 700 }}>{rec.console_error_count} err</span>
                          )}
                        </td>
                        {/* Device */}
                        <td style={{ padding: '10px', fontSize: 12, color: T.muted }}>
                          {device ?? '—'}
                        </td>
                        {/* Country */}
                        <td style={{ padding: '10px', fontSize: 12, color: T.muted, whiteSpace: 'nowrap' }}>
                          {country ? `${FLAGS[country] ?? '🌐'} ${country}` : '—'}
                        </td>
                        {/* When */}
                        <td style={{ padding: '10px', fontSize: 12, color: T.dim, whiteSpace: 'nowrap' }}>
                          {timeAgo(rec.start_time)}
                        </td>
                        {/* Watch link */}
                        <td style={{ padding: '10px 14px 10px 10px' }}>
                          <a href={`${phBase}/replay/${rec.id}`} target="_blank" rel="noopener noreferrer"
                            style={{ fontSize: 12, fontWeight: 700, color: T.blue, textDecoration: 'none', background: `${T.blue}15`, border: `1px solid ${T.blue}33`, borderRadius: 6, padding: '4px 10px', whiteSpace: 'nowrap', display: 'inline-block' }}>
                            ▶ Watch
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* ── Blog + CTA ──────────────────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
          {/* Blog */}
          <div style={card}>
            <p style={sh}>Blog Post Views</p>
            {topBlog.length === 0 ? (
              <p style={{ fontSize: 13, color: T.dim }}>No blog post views yet.</p>
            ) : topBlog.map(({ slug, title, category, views }) => (
              <div key={slug} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <Link href={`/blog/${slug}`} style={{ fontSize: 13, color: T.text, fontWeight: 600, textDecoration: 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'block' }}>{title}</Link>
                  {category && <span style={{ fontSize: 11, color: T.dim }}>{category}</span>}
                </div>
                <HBar v={views} t={topBlog[0]?.views ?? 1} color={T.orange} />
                <span style={{ fontSize: 12, fontWeight: 700, color: T.text, flexShrink: 0, width: 24, textAlign: 'right' }}>{views}</span>
              </div>
            ))}
          </div>

          {/* CTAs + Nav */}
          <div style={{ ...card, display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem' }}>
              <div>
                <p style={sh}>CTA Clicks</p>
                {topCTAs.length === 0 ? <p style={{ fontSize: 13, color: T.dim }}>No CTA clicks yet.</p> : topCTAs.slice(0, 7).map(({ label: l, location, clicks }) => (
                  <div key={`${l}-${location}`} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 9 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 12, color: T.text, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l}</div>
                      {location && <div style={{ fontSize: 10, color: T.dim }}>{location}</div>}
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: T.green, flexShrink: 0 }}>{clicks}</span>
                  </div>
                ))}
              </div>
              <div>
                <p style={sh}>Nav Clicks</p>
                {navClicks.length === 0 ? <p style={{ fontSize: 13, color: T.dim }}>No nav clicks yet.</p> : navClicks.slice(0, 7).map(({ label: l, clicks }) => (
                  <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 9 }}>
                    <span style={{ fontSize: 12, color: T.muted, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: T.orange, flexShrink: 0 }}>{clicks}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Devices / OS / Browsers ──────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 20 }}>
          {[
            { title: 'Devices',  rows: devices.map(d  => ({ name: d.device,  count: d.count })), total: tDev,  color: T.cyan   },
            { title: 'OS',       rows: os.map(o        => ({ name: o.os,      count: o.count })), total: tOS,   color: T.orange },
            { title: 'Browsers', rows: browsers.map(b  => ({ name: b.browser, count: b.count })), total: tBrow, color: T.green  },
          ].map(({ title, rows, total, color }) => (
            <div key={title} style={card}>
              <p style={sh}>{title}</p>
              {rows.map(({ name, count }) => (
                <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 12, color: T.muted, width: 88, flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</span>
                  <HBar v={count} t={total} color={color} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: T.text, width: 30, textAlign: 'right', flexShrink: 0 }}>{pct(count, total)}%</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ── Web Vitals ────────────────────────────────────────────────── */}
        {vitals.length > 0 && (
          <div style={{ ...card, marginBottom: 20 }}>
            <p style={sh}>Web Vitals (p75)</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12 }}>
              {vitals.map(({ metric, avg, p75 }) => {
                const color = vitalRating(metric, p75);
                const good = color === T.green;
                return (
                  <div key={metric} style={{ background: `${color}0D`, border: `1px solid ${color}33`, borderRadius: 8, padding: '12px 16px' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color, letterSpacing: '0.08em', marginBottom: 6 }}>{metric}</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: T.text, letterSpacing: '-0.02em' }}>{fmtVital(metric, p75)}</div>
                    <div style={{ fontSize: 11, color: T.dim, marginTop: 4 }}>avg {fmtVital(metric, avg)} · {good ? '✓ Good' : '⚠ Needs work'}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Geography ────────────────────────────────────────────────── */}
        {countries.length > 0 && (
          <div style={{ ...card, marginBottom: 20 }}>
            <p style={sh}>Geography</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '10px 48px' }}>
              {countries.map(({ country, count }) => (
                <div key={country} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 18, width: 24, flexShrink: 0 }}>{FLAGS[country] ?? '🌐'}</span>
                  <span style={{ fontSize: 13, color: T.muted, width: 140, flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{country}</span>
                  <HBar v={count} t={tCtr} color={T.blue} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: T.text, width: 32, textAlign: 'right', flexShrink: 0 }}>{count}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Leads table ──────────────────────────────────────────────── */}
        {leads.length > 0 && (
          <div style={{ ...card, marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <p style={{ ...sh, margin: 0 }}>Contact Form Leads</p>
              <span style={{ fontSize: 12, fontWeight: 700, color: T.green }}>{leads.length} in last {days}d</span>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {['Name', 'Email', 'Company', 'Submitted'].map(h => (
                    <th key={h} style={{ fontSize: 10, fontWeight: 700, color: T.dim, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '6px 10px', borderBottom: `1px solid ${T.border}`, textAlign: 'left' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${T.border}` }}>
                    <td style={{ fontSize: 13, color: T.text, fontWeight: 600, padding: '10px' }}>{lead.name || '—'}</td>
                    <td style={{ padding: '10px' }}>
                      {lead.email
                        ? <a href={`mailto:${lead.email}`} style={{ color: T.blue, textDecoration: 'none', fontSize: 13 }}>{lead.email}</a>
                        : <span style={{ color: T.dim, fontSize: 13 }}>—</span>}
                    </td>
                    <td style={{ fontSize: 13, color: T.muted, padding: '10px' }}>{lead.company || '—'}</td>
                    <td style={{ fontSize: 12, color: T.dim, padding: '10px' }}>{timeAgo(lead.timestamp)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ── Custom events ────────────────────────────────────────────── */}
        {events.length > 0 && (
          <div style={{ ...card, marginBottom: 20 }}>
            <p style={sh}>Other Events</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
              {events.map(({ event: ev, count }) => (
                <div key={ev} style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${T.border}`, borderRadius: 8, padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: T.muted, fontFamily: 'monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginRight: 8 }}>{ev}</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: T.text, flexShrink: 0 }}>{count.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Clarity card ─────────────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <a href="https://clarity.microsoft.com" target="_blank" rel="noopener noreferrer" style={{ ...card, textDecoration: 'none', display: 'block', borderTop: `2px solid ${T.orange}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: T.text, margin: '0 0 4px' }}>Heatmaps & Click Maps</p>
                <span style={{ fontSize: 11, color: T.orange, fontWeight: 700, letterSpacing: '0.06em' }}>Microsoft Clarity</span>
              </div>
              <span style={{ fontSize: 20 }}>🗺️</span>
            </div>
            <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.6, margin: 0 }}>Visual click maps, scroll heatmaps, rage-click detection, and dead-click reports — per page.</p>
          </a>
          <a href={`${phBase}/replay/home`} target="_blank" rel="noopener noreferrer" style={{ ...card, textDecoration: 'none', display: 'block', borderTop: `2px solid ${T.blue}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: T.text, margin: '0 0 4px' }}>Full PostHog Dashboard</p>
                <span style={{ fontSize: 11, color: T.blue, fontWeight: 700, letterSpacing: '0.06em' }}>PostHog</span>
              </div>
              <span style={{ fontSize: 20 }}>📊</span>
            </div>
            <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.6, margin: 0 }}>Advanced funnels, cohorts, feature flags, A/B tests, and the complete session replay library.</p>
          </a>
        </div>

      </div>
    </div>
  );
}
