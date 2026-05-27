import * as React from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { isAdmin } from '@/lib/auth';
import ViewsAreaChart from '@/components/analytics/charts/ViewsAreaChart';
import FunnelChart from '@/components/analytics/charts/FunnelChart';
import {
  isConfigured,
  getOverview, getPreviousOverview,
  getBounceRate, getPreviousBounceRate,
  getAvgSessionDuration, getPagesPerSession,
  getNewVsReturning,
  getTopPages, getTopPagesWithTime,
  getEntryPages, getExitPages,
  getTopBlogPosts, getTopCTAs, getNavClicks,
  getCountries, getDevices, getOS, getBrowsers,
  getSources, getUTMSources,
  getLeads, getTopEvents,
  getDailyViews, getHourlyTraffic, getDayOfWeek,
  getScrollDepth, getConversionFunnel, getWebVitals,
  getProductBreakdown, getSessionRecordings,
} from '@/lib/posthog-api';

export const metadata: Metadata = {
  title: 'Analytics | Cerulea',
  robots: { index: false, follow: false },
};
export const revalidate = 0;

// ─── Design system ────────────────────────────────────────────────────────────
const C = {
  bg:      '#060606',
  surface: '#0E0E0F',
  raised:  '#141416',
  border:  '#1C1C1E',
  text:    '#FAFAFA',
  sub:     '#A1A1AA',
  dim:     '#52525B',
  ghost:   '#3F3F46',
  blue:    '#2563EB',
  purple:  '#7C3AED',
  green:   '#16A34A',
  red:     '#DC2626',
  amber:   '#D97706',
  sky:     '#0284C7',
  teal:    '#0D9488',
  pink:    '#DB2777',
} as const;

const card: React.CSSProperties = {
  background: C.surface,
  border: `1px solid ${C.border}`,
  borderRadius: 12,
  padding: '20px 24px',
};

const sectionLabel: React.CSSProperties = {
  fontSize: 10, fontWeight: 700, color: C.dim,
  letterSpacing: '0.12em', textTransform: 'uppercase',
  marginBottom: 16, display: 'block',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
const pct = (v: number, t: number) => t ? Math.round((v / t) * 100) : 0;
const delta = (cur: number, prev: number) => prev ? Math.round(((cur - prev) / prev) * 100) : null;

function fmtDur(s: number) {
  if (!s) return '—';
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60), r = s % 60;
  if (m < 60) return r ? `${m}m ${r}s` : `${m}m`;
  return `${Math.floor(m / 60)}h ${m % 60}m`;
}

function timeAgo(ts: string) {
  const d = Date.now() - new Date(ts).getTime(), m = Math.floor(d / 60000);
  if (m < 1) return 'just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  return h < 24 ? `${h}h ago` : `${Math.floor(h / 24)}d ago`;
}

function initials(name?: string, email?: string) {
  if (name) return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  if (email) return email[0].toUpperCase();
  return '?';
}

const FLAGS: Record<string, string> = {
  'India': '🇮🇳', 'United States': '🇺🇸', 'United Kingdom': '🇬🇧', 'Germany': '🇩🇪',
  'France': '🇫🇷', 'Canada': '🇨🇦', 'Australia': '🇦🇺', 'Singapore': '🇸🇬',
  'Japan': '🇯🇵', 'Netherlands': '🇳🇱', 'Switzerland': '🇨🇭', 'Sweden': '🇸🇪',
  'Brazil': '🇧🇷', 'UAE': '🇦🇪', 'South Korea': '🇰🇷', 'China': '🇨🇳',
  'Indonesia': '🇮🇩', 'Israel': '🇮🇱', 'Spain': '🇪🇸', 'Italy': '🇮🇹',
};

const VITAL_T: Record<string, [number, number]> = {
  LCP: [2500, 4000], FID: [100, 300], INP: [200, 500],
  CLS: [0.1, 0.25], FCP: [1800, 3000], TTFB: [800, 1800],
};
const vitalColor = (m: string, v: number) => {
  const t = VITAL_T[m]; if (!t) return C.dim;
  return v <= t[0] ? C.green : v <= t[1] ? C.amber : C.red;
};
const fmtVital = (m: string, v: number) =>
  m === 'CLS' ? v.toFixed(3) : v >= 1000 ? `${(v / 1000).toFixed(2)}s` : `${Math.round(v)}ms`;

// ─── Empty state note ─────────────────────────────────────────────────────────
function Soon({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, padding: '8px 10px', background: C.raised, borderRadius: 6, border: `1px solid ${C.border}` }}>
      <span style={{ fontSize: 12 }}>⏱</span>
      <span style={{ fontSize: 12, color: C.dim, lineHeight: 1.4 }}>{text}</span>
    </div>
  );
}

// ─── Primitives ───────────────────────────────────────────────────────────────
function Pill({ label, color }: { label: string; color: string }) {
  return (
    <span style={{ fontSize: 10, fontWeight: 700, color, background: `${color}18`, border: `1px solid ${color}30`, borderRadius: 20, padding: '2px 8px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
      {label}
    </span>
  );
}

function TrendBadge({ d, invert = false }: { d: number | null; invert?: boolean }) {
  if (d === null) return null;
  const good = invert ? d <= 0 : d >= 0;
  return (
    <span style={{ fontSize: 11, fontWeight: 700, color: good ? C.green : C.red }}>
      {d >= 0 ? '↑' : '↓'} {Math.abs(d)}%
    </span>
  );
}

function HBar({ v, t, color = C.blue, height = 4 }: { v: number; t: number; color?: string; height?: number }) {
  const p = pct(v, t || 1);
  return (
    <div style={{ background: C.border, borderRadius: 3, height, flex: 1 }}>
      <div style={{ background: color, borderRadius: 3, height, width: `${p}%` }} />
    </div>
  );
}

function Sparkline({ data, color = C.blue }: { data: { date: string; views: number }[]; color?: string }) {
  if (data.length < 2) return null;
  const W = 64, H = 20, max = Math.max(...data.map(d => d.views), 1);
  const pts = data.map((d, i) => `${(i / (data.length - 1)) * W},${H - (d.views / max) * H}`).join(' ');
  return (
    <svg width={W} height={H} style={{ display: 'block', flexShrink: 0, opacity: 0.7 }}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth={1.5} strokeLinejoin="round" />
    </svg>
  );
}

function VBars({ data, color = C.blue }: { data: { label: string; v: number }[]; color?: string }) {
  const max = Math.max(...data.map(d => d.v), 1);
  const W = 440, BH = 60, LH = 14;
  const bw = W / data.length;
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${BH + LH}`} style={{ display: 'block', overflow: 'visible' }}>
      {data.map((d, i) => {
        const h = Math.max((d.v / max) * BH, d.v ? 2 : 0);
        const x = i * bw + bw * 0.2, w = bw * 0.6;
        return (
          <g key={i}>
            <rect x={x} y={BH - h} width={w} height={h} fill={color} rx={2}
              opacity={0.3 + (d.v / max) * 0.7} />
            <text x={x + w / 2} y={BH + 12} textAnchor="middle" fontSize={9} fill={C.ghost} fontFamily="system-ui">
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function HeatGrid({ data, color = C.blue }: { data: { hour: number; views: number }[]; color?: string }) {
  const max = Math.max(...data.map(d => d.views), 1);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: 3, marginBottom: 4 }}>
      {data.map(({ hour, views }) => (
        <div key={hour} title={`${String(hour).padStart(2, '0')}:00 — ${views} views`} style={{
          aspectRatio: '1', borderRadius: 3,
          background: views ? color : C.border,
          opacity: views ? 0.1 + (views / max) * 0.9 : 1,
        }} />
      ))}
    </div>
  );
}

function DonutChart({ slices }: { slices: { label: string; value: number; color: string }[] }) {
  const total = slices.reduce((s, d) => s + d.value, 0);
  const R = 40, r = 24, cx = 52, cy = 52;
  let a = -Math.PI / 2;
  const arcs = slices.map(s => {
    const frac = total ? s.value / total : 0;
    const sa = a; a += frac * Math.PI * 2;
    const x1 = cx + R * Math.cos(sa), y1 = cy + R * Math.sin(sa);
    const x2 = cx + R * Math.cos(a),  y2 = cy + R * Math.sin(a);
    const ix1 = cx + r * Math.cos(sa), iy1 = cy + r * Math.sin(sa);
    const ix2 = cx + r * Math.cos(a),  iy2 = cy + r * Math.sin(a);
    const lg = frac > 0.5 ? 1 : 0;
    return { ...s, pct: Math.round(frac * 100), path: `M${x1.toFixed(1)} ${y1.toFixed(1)} A${R} ${R} 0 ${lg} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} L${ix2.toFixed(1)} ${iy2.toFixed(1)} A${r} ${r} 0 ${lg} 0 ${ix1.toFixed(1)} ${iy1.toFixed(1)}Z` };
  });
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <svg width={104} height={104} viewBox="0 0 104 104" style={{ flexShrink: 0 }}>
        {total === 0
          ? <circle cx={cx} cy={cy} r={R} fill="none" stroke={C.border} strokeWidth={R - r} />
          : arcs.map(a => <path key={a.label} d={a.path} fill={a.color} />)}
        <circle cx={cx} cy={cy} r={r - 2} fill={C.surface} />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {arcs.map(a => (
          <div key={a.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: a.color, flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: C.sub }}>{a.label}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.text, marginLeft: 'auto' }}>{a.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Setup gate ───────────────────────────────────────────────────────────────
function SetupRequired() {
  return (
    <div style={{ minHeight: '100vh', background: C.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ ...card, maxWidth: 520, width: '100%' }}>
        <p style={{ fontSize: 28, marginBottom: 12 }}>⚙️</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: C.text, margin: '0 0 8px' }}>PostHog not configured</h2>
        <p style={{ color: C.sub, lineHeight: 1.7, margin: '0 0 20px' }}>Add these to Vercel → Environment Variables and redeploy:</p>
        <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 8, padding: '1rem 1.25rem', fontFamily: 'monospace', fontSize: 13, color: C.text, lineHeight: 2.2 }}>
          <div style={{ color: C.ghost }}>{'# PostHog → Avatar → Personal API Keys'}</div>
          <div>POSTHOG_PERSONAL_API_KEY=phx_...</div>
          <div style={{ marginTop: 8, color: C.ghost }}>{'# PostHog URL → /project/{number}'}</div>
          <div>POSTHOG_PROJECT_ID=123456</div>
        </div>
        <p style={{ color: C.ghost, fontSize: 12, marginTop: 12 }}>Server-only — no NEXT_PUBLIC_ prefix needed.</p>
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
    topPages, pagesTime, entryPages, exitPages,
    topBlog, topCTAs, navClicks,
    countries, devices, os, browsers, sources, utmSources,
    leads, events, daily, hourly, dow, scroll,
    funnel, vitals, productBreakdown, sessions,
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
    getEntryPages(days).catch(() => []),
    getExitPages(days).catch(() => []),
    getTopBlogPosts(days).catch(() => []),
    getTopCTAs(days).catch(() => []),
    getNavClicks(days).catch(() => []),
    getCountries(days).catch(() => []),
    getDevices(days).catch(() => []),
    getOS(days).catch(() => []),
    getBrowsers(days).catch(() => []),
    getSources(days).catch(() => []),
    getUTMSources(days).catch(() => []),
    getLeads(days).catch(() => []),
    getTopEvents(days).catch(() => []),
    getDailyViews(days).catch(() => []),
    getHourlyTraffic(days).catch(() => []),
    getDayOfWeek(days).catch(() => []),
    getScrollDepth(days).catch(() => []),
    getConversionFunnel(days).catch(() => ({ visitors: 0, ctaClicks: 0, formStarts: 0, formSubmits: 0 })),
    getWebVitals(days).catch(() => []),
    getProductBreakdown(days).catch(() => []),
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

  const phBase  = `https://us.posthog.com/project/${process.env.POSTHOG_PROJECT_ID}`;
  const newV    = nvr.find(r => r.type === 'New')?.count ?? 0;
  const retV    = nvr.find(r => r.type === 'Returning')?.count ?? 0;

  // Unique product pages from breakdown
  const productPages = Array.from(new Set(productBreakdown.map(r => r.page))).map(page => ({
    page,
    views: productBreakdown.filter(r => r.page === page).reduce((s, r) => s + r.views, 0),
    features: productBreakdown.filter(r => r.page === page),
  })).sort((a, b) => b.views - a.views);

  const divider = <div style={{ height: 1, background: C.border, margin: '0 -24px' }} />;

  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.text, fontFamily: 'system-ui,-apple-system,sans-serif' }}>

      {/* ── Topbar ──────────────────────────────────────────────────────── */}
      <div style={{ background: C.bg, borderBottom: `1px solid ${C.border}`, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', position: 'sticky', top: 64, zIndex: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link href="/" style={{ color: C.dim, fontSize: 13, textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 13L5 8l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            cerulea.io
          </Link>
          <span style={{ color: C.border }}>|</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: C.text }}>Analytics</span>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {([7, 30, 90] as const).map(d => (
            <Link key={d} href={`/analytics?days=${d}`} style={{
              padding: '4px 14px', borderRadius: 6, fontSize: 12, fontWeight: 600,
              textDecoration: 'none',
              background: days === d ? C.blue : 'transparent',
              color: days === d ? '#fff' : C.dim,
              border: `1px solid ${days === d ? C.blue : C.border}`,
            }}>
              {d === 7 ? '7 days' : d === 30 ? '30 days' : '90 days'}
            </Link>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '28px 24px 80px' }}>

        {/* ── KPI row ───────────────────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 12 }}>
          {[
            { label: 'Page Views',      value: ov.pageViews,       d: dViews,    color: C.blue,   spark: true  },
            { label: 'Unique Visitors', value: ov.uniqueVisitors,  d: dVisitors, color: C.purple, spark: false },
            { label: 'Sessions',        value: ov.sessions,        d: dSessions, color: C.sky,    spark: false },
            { label: 'Contact Leads',   value: ov.contacts,        d: dContacts, color: C.green,  spark: false },
          ].map(({ label, value, d: dl, color, spark }) => (
            <div key={label} style={{ ...card, borderTop: `2px solid ${color}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: C.dim, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</span>
                <TrendBadge d={dl} />
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: C.text }}>
                  {value.toLocaleString()}
                </span>
                {spark && <Sparkline data={daily} color={color} />}
              </div>
              <div style={{ fontSize: 11, color: C.ghost, marginTop: 8 }}>vs prev {days}d</div>
            </div>
          ))}
        </div>

        {/* ── Secondary KPIs ────────────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>
          {[
            { label: 'Bounce Rate',    value: `${bounce}%`,              d: dBounce, invert: true,  color: C.amber },
            { label: 'Avg Duration',   value: fmtDur(dur),               d: null,    invert: false, color: C.teal  },
            { label: 'Pages / Session',value: pps ? pps.toFixed(1) : '—',d: null,    invert: false, color: C.sky   },
            { label: 'New Visitors',   value: newV.toLocaleString(),     d: null,    invert: false, color: C.pink  },
          ].map(({ label, value, d: dl, invert, color }) => (
            <div key={label} style={{ ...card, borderTop: `2px solid ${color}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: C.dim, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</span>
                {dl !== null && <TrendBadge d={dl} invert={invert} />}
              </div>
              <span style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: C.text }}>{value}</span>
            </div>
          ))}
        </div>

        {/* ── Daily views chart ─────────────────────────────────────────── */}
        <div style={{ ...card, marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <span style={sectionLabel}>Daily Page Views</span>
            <span style={{ fontSize: 12, color: C.dim }}>{ov.pageViews.toLocaleString()} total · {days}d window</span>
          </div>
          {daily.length < 2
            ? (
              <div style={{ height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Soon text="Appears within minutes of your first visitor with PostHog configured." />
              </div>
            )
            : <ViewsAreaChart data={daily} color={C.blue} />
          }
        </div>

        {/* ── Conversion funnel ─────────────────────────────────────────── */}
        <div style={{ ...card, marginBottom: 24 }}>
          <span style={sectionLabel}>Conversion Funnel</span>
          <FunnelChart steps={[
            { label: 'Visitors',   sublabel: 'Unique people',    value: funnel.visitors,    color: C.blue   },
            { label: 'CTA Clicks', sublabel: 'Engaged with CTAs',value: funnel.ctaClicks,   color: C.purple },
            { label: 'Form Start', sublabel: 'Opened contact',   value: funnel.formStarts,  color: C.amber  },
            { label: 'Submitted',  sublabel: 'Sent enquiry',     value: funnel.formSubmits, color: C.green  },
          ]} />
          {funnel.visitors === 0 && (
            <Soon text="Appears as soon as visitors start clicking CTAs. Typically within hours of launch." />
          )}
        </div>

        {/* ── Top pages + Sources ───────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 12, marginBottom: 24 }}>
          {/* Pages with time */}
          <div style={card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ ...sectionLabel, margin: 0 }}>Top Pages</span>
              <span style={{ fontSize: 10, color: C.ghost, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Avg Time</span>
            </div>
            {topPages.length === 0
              ? <Soon text="Appears within minutes of the first page view." />
              : topPages.map(({ page, views }) => {
                const t = pagesTime.find(p => p.page === page);
                return (
                  <div key={page} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <span style={{ fontSize: 12, color: C.dim, fontFamily: 'monospace', width: 160, flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={page}>{page}</span>
                    <HBar v={views} t={topPages[0]?.views ?? 1} color={C.blue} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: C.text, width: 32, textAlign: 'right', flexShrink: 0 }}>{views}</span>
                    <span style={{ fontSize: 11, color: C.ghost, width: 44, textAlign: 'right', flexShrink: 0 }}>{t ? fmtDur(t.avgTime) : '—'}</span>
                  </div>
                );
              })}
          </div>
          {/* Sources */}
          <div style={card}>
            <span style={sectionLabel}>Traffic Sources</span>
            {sources.length === 0
              ? <Soon text="Appears once visitors arrive from search, social, or direct." />
              : sources.map(({ source, count }) => (
                <div key={source} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 12, color: C.sub, width: 110, flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{source}</span>
                  <HBar v={count} t={tSrc} color={C.purple} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: C.text, width: 32, textAlign: 'right', flexShrink: 0 }}>{pct(count, tSrc)}%</span>
                </div>
              ))}
          </div>
        </div>

        {/* ── Entry + Exit pages ────────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
          <div style={card}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span style={{ ...sectionLabel, margin: 0 }}>Entry Pages</span>
              <Pill label="Landing" color={C.green} />
            </div>
            {entryPages.length === 0
              ? <Soon text="Shows where sessions begin. Appears after the first sessions are recorded." />
              : entryPages.map(({ page, sessions: s }) => (
                <div key={page} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 12, color: C.sub, fontFamily: 'monospace', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{page}</span>
                  <HBar v={s} t={entryPages[0]?.sessions ?? 1} color={C.green} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.text, width: 32, textAlign: 'right', flexShrink: 0 }}>{s}</span>
                </div>
              ))}
          </div>
          <div style={card}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span style={{ ...sectionLabel, margin: 0 }}>Exit Pages</span>
              <Pill label="Drop-off" color={C.red} />
            </div>
            {exitPages.length === 0
              ? <Soon text="Shows where users leave. Useful for identifying high drop-off pages." />
              : exitPages.map(({ page, sessions: s }) => (
                <div key={page} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 12, color: C.sub, fontFamily: 'monospace', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{page}</span>
                  <HBar v={s} t={exitPages[0]?.sessions ?? 1} color={C.red} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.text, width: 32, textAlign: 'right', flexShrink: 0 }}>{s}</span>
                </div>
              ))}
          </div>
        </div>

        {/* ── Scroll depth + Hourly + DOW ───────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 24 }}>
          {/* Scroll depth */}
          <div style={card}>
            <span style={sectionLabel}>Scroll Depth</span>
            {scroll.map(({ depth, sessions: s }) => {
              const p = ov.sessions ? pct(s, ov.sessions) : 0;
              const depthColor: Record<number, string> = { 25: C.blue, 50: C.purple, 75: C.teal, 90: C.amber, 100: C.green };
              return (
                <div key={depth} style={{ marginBottom: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                    <span style={{ fontSize: 12, color: C.sub }}>{depth}% scrolled</span>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <span style={{ fontSize: 11, color: C.ghost }}>{s.toLocaleString()} sessions</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: depthColor[depth] }}>{p}%</span>
                    </div>
                  </div>
                  <div style={{ background: C.border, borderRadius: 3, height: 5 }}>
                    <div style={{ background: depthColor[depth], borderRadius: 3, height: 5, width: `${p}%` }} />
                  </div>
                </div>
              );
            })}
            {scroll.every(d => d.sessions === 0) && (
              <Soon text="Appears after visitors scroll. Usually within 1 hour of real traffic." />
            )}
          </div>
          {/* Hourly */}
          <div style={card}>
            <span style={sectionLabel}>Hourly Traffic (UTC)</span>
            <HeatGrid data={hourly} color={C.blue} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
              {['0h', '6h', '12h', '18h', '23h'].map(l => (
                <span key={l} style={{ fontSize: 9, color: C.ghost }}>{l}</span>
              ))}
            </div>
            {hourly.every(d => d.views === 0) && (
              <Soon text="Shows traffic by hour. Useful after 50+ sessions (~3–5 days)." />
            )}
          </div>
          {/* Day of week */}
          <div style={card}>
            <span style={sectionLabel}>Day of Week</span>
            <VBars data={dow.map(d => ({ label: d.day, v: d.views }))} color={C.teal} />
            {dow.every(d => d.views === 0) && (
              <Soon text="Meaningful after 7+ days of traffic to cover a full week." />
            )}
          </div>
        </div>

        {/* ── Audience: New vs Returning ────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 24 }}>
          <div style={card}>
            <span style={sectionLabel}>New vs Returning</span>
            <DonutChart slices={[
              { label: 'New',       value: newV, color: C.blue   },
              { label: 'Returning', value: retV, color: C.purple },
            ]} />
            {(newV + retV) === 0 && <Soon text="Appears after the first visitors arrive." />}
          </div>
          {/* Devices */}
          <div style={card}>
            <span style={sectionLabel}>Devices</span>
            {devices.length === 0
              ? <Soon text="Appears alongside the first page views." />
              : devices.map(({ device, count }) => (
                <div key={device} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 12, color: C.sub, width: 80, flexShrink: 0 }}>{device}</span>
                  <HBar v={count} t={tDev} color={C.sky} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: C.text, width: 30, textAlign: 'right', flexShrink: 0 }}>{pct(count, tDev)}%</span>
                </div>
              ))}
          </div>
          {/* OS + Browsers stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ ...card, flex: 1 }}>
              <span style={sectionLabel}>OS</span>
              {os.length === 0
                ? <Soon text="Appears with first page views." />
                : os.slice(0, 5).map(({ os: o, count }) => (
                  <div key={o} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 12, color: C.sub, width: 70, flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{o}</span>
                    <HBar v={count} t={tOS} color={C.amber} />
                    <span style={{ fontSize: 11, fontWeight: 700, color: C.text, width: 28, textAlign: 'right', flexShrink: 0 }}>{pct(count, tOS)}%</span>
                  </div>
                ))}
            </div>
            <div style={{ ...card, flex: 1 }}>
              <span style={sectionLabel}>Browsers</span>
              {browsers.length === 0
                ? <Soon text="Appears with first page views." />
                : browsers.slice(0, 4).map(({ browser, count }) => (
                  <div key={browser} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 12, color: C.sub, width: 70, flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{browser}</span>
                    <HBar v={count} t={tBrow} color={C.teal} />
                    <span style={{ fontSize: 11, fontWeight: 700, color: C.text, width: 28, textAlign: 'right', flexShrink: 0 }}>{pct(count, tBrow)}%</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* ── Geography ────────────────────────────────────────────────── */}
        <div style={{ ...card, marginBottom: 24 }}>
          <span style={sectionLabel}>Geography</span>
          {countries.length === 0
            ? <Soon text="Geo data appears after the first sessions. PostHog derives location from IP — no precise coordinates are stored." />
            : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '10px 48px' }}>
                {countries.map(({ country, count }) => (
                  <div key={country} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 18, width: 24, flexShrink: 0 }}>{FLAGS[country] ?? '🌐'}</span>
                    <span style={{ fontSize: 13, color: C.sub, width: 130, flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{country}</span>
                    <HBar v={count} t={tCtr} color={C.blue} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: C.text, width: 32, textAlign: 'right', flexShrink: 0 }}>{count}</span>
                  </div>
                ))}
              </div>
            )}
        </div>

        {/* ── Session recordings ────────────────────────────────────────── */}
        <div style={{ ...card, marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <span style={{ ...sectionLabel, margin: 0 }}>Session Recordings</span>
            <a href={`${phBase}/replay/home`} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 12, color: C.blue, textDecoration: 'none', fontWeight: 600, opacity: 0.8, display: 'flex', alignItems: 'center', gap: 4 }}>
              All recordings in PostHog
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
          {sessions.length === 0
            ? <Soon text="Recordings appear after your first visitors arrive. Each session is automatically captured when PostHog is active." />
            : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                  <thead>
                    <tr>
                      {['', 'Visitor', 'Duration', 'Clicks', 'Device · Browser', 'Country', 'When', ''].map((h, i) => (
                        <th key={i} style={{ fontSize: 10, fontWeight: 700, color: C.ghost, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '6px 10px', borderBottom: `1px solid ${C.border}`, textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sessions.map(rec => {
                      const p = rec.person?.properties ?? {};
                      const name = rec.person?.name, email = p.email;
                      return (
                        <tr key={rec.id} style={{ borderBottom: `1px solid ${C.border}` }}>
                          <td style={{ padding: '10px 10px 10px 14px', width: 14 }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: rec.viewed ? C.ghost : C.green }} title={rec.viewed ? 'Viewed' : 'New'} />
                          </td>
                          <td style={{ padding: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                              <div style={{ width: 28, height: 28, borderRadius: '50%', background: `${C.blue}18`, border: `1px solid ${C.blue}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: C.blue, flexShrink: 0 }}>
                                {initials(name, email)}
                              </div>
                              <div>
                                <div style={{ fontSize: 13, color: C.text, fontWeight: 600 }}>{name || (email ? email.split('@')[0] : 'Anonymous')}</div>
                                {email && <div style={{ fontSize: 11, color: C.dim }}>{email}</div>}
                              </div>
                            </div>
                          </td>
                          <td style={{ padding: '10px', fontSize: 13, fontWeight: 600, color: C.text, whiteSpace: 'nowrap' }}>{fmtDur(rec.duration)}</td>
                          <td style={{ padding: '10px', fontSize: 13, color: C.sub, whiteSpace: 'nowrap' }}>
                            {rec.click_count ?? 0}
                            {(rec.console_error_count ?? 0) > 0 && (
                              <span style={{ marginLeft: 8, color: C.red, fontSize: 10, fontWeight: 700 }}>✕ {rec.console_error_count}</span>
                            )}
                          </td>
                          <td style={{ padding: '10px', fontSize: 12, color: C.dim, whiteSpace: 'nowrap' }}>
                            {[p.$device_type, p.$browser].filter(Boolean).join(' · ') || '—'}
                          </td>
                          <td style={{ padding: '10px', fontSize: 12, color: C.sub, whiteSpace: 'nowrap' }}>
                            {p.$geoip_country_name ? `${FLAGS[p.$geoip_country_name] ?? '🌐'} ${p.$geoip_country_name}` : '—'}
                          </td>
                          <td style={{ padding: '10px', fontSize: 12, color: C.ghost, whiteSpace: 'nowrap' }}>{timeAgo(rec.start_time)}</td>
                          <td style={{ padding: '10px 14px 10px 10px' }}>
                            <a href={`${phBase}/replay/${rec.id}`} target="_blank" rel="noopener noreferrer"
                              style={{ fontSize: 12, fontWeight: 700, color: C.blue, textDecoration: 'none', background: `${C.blue}12`, border: `1px solid ${C.blue}28`, borderRadius: 6, padding: '4px 10px', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                              <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor"><path d="M3 2l10 6-10 6V2z" /></svg>
                              Watch
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

        {/* ── Blog posts + CTAs + Nav ───────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
          <div style={card}>
            <span style={sectionLabel}>Blog Post Views</span>
            {topBlog.length === 0
              ? <Soon text="Appears after the first blog post is viewed. Each view fires a blog_post_viewed event." />
              : topBlog.map(({ slug, title, category, views }) => (
                <div key={slug} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <Link href={`/blog/${slug}`} style={{ fontSize: 13, color: C.text, fontWeight: 600, textDecoration: 'none', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</Link>
                    {category && <span style={{ fontSize: 11, color: C.ghost }}>{category}</span>}
                  </div>
                  <HBar v={views} t={topBlog[0]?.views ?? 1} color={C.amber} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.text, flexShrink: 0, width: 24, textAlign: 'right' }}>{views}</span>
                </div>
              ))}
          </div>
          <div style={{ ...card, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
            <div>
              <span style={sectionLabel}>CTA Clicks</span>
              {topCTAs.length === 0
                ? <Soon text="Fires when users click tracked CTA buttons. Appears after first CTA interactions." />
                : topCTAs.slice(0, 7).map(({ label: l, location, clicks }) => (
                  <div key={`${l}-${location}`} style={{ marginBottom: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                      <span style={{ fontSize: 12, color: C.sub, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: C.green, flexShrink: 0 }}>{clicks}</span>
                    </div>
                    {location && <div style={{ fontSize: 10, color: C.ghost }}>{location}</div>}
                  </div>
                ))}
            </div>
            <div>
              <span style={sectionLabel}>Nav Clicks</span>
              {navClicks.length === 0
                ? <Soon text="Fires when users click navigation links. Appears after first nav interactions." />
                : navClicks.slice(0, 7).map(({ label: l, clicks }) => (
                  <div key={l} style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 12, color: C.sub, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: C.amber, flexShrink: 0 }}>{clicks}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* ── Product breakdown ─────────────────────────────────────────── */}
        <div style={{ ...card, marginBottom: 24 }}>
          <span style={sectionLabel}>Product Page Engagement</span>
          {productPages.length === 0
            ? <Soon text="Fires when users engage with product feature sections. Appears after product pages get traffic." />
            : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
                {productPages.slice(0, 8).map(({ page, views, features }) => (
                  <div key={page} style={{ background: C.raised, border: `1px solid ${C.border}`, borderRadius: 8, padding: '12px 16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                      <span style={{ fontSize: 12, color: C.text, fontWeight: 700, fontFamily: 'monospace' }}>{page}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: C.blue }}>{views}</span>
                    </div>
                    {features.slice(0, 3).map(({ feature, views: fv }) => (
                      <div key={feature} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                        <span style={{ fontSize: 11, color: C.dim, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 160 }}>{feature}</span>
                        <span style={{ fontSize: 11, color: C.ghost, flexShrink: 0 }}>{fv}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
        </div>

        {/* ── UTM Campaigns ────────────────────────────────────────────── */}
        {utmSources.length > 0 && (
          <div style={{ ...card, marginBottom: 24 }}>
            <span style={sectionLabel}>UTM Campaigns</span>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {['Source', 'Medium', 'Campaign', 'Sessions'].map(h => (
                    <th key={h} style={{ fontSize: 10, fontWeight: 700, color: C.ghost, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '6px 10px', borderBottom: `1px solid ${C.border}`, textAlign: 'left' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {utmSources.map((u, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${C.border}` }}>
                    <td style={{ fontSize: 13, color: C.text, fontWeight: 600, padding: '10px' }}>{u.source}</td>
                    <td style={{ fontSize: 13, color: C.sub, padding: '10px' }}>{u.medium}</td>
                    <td style={{ fontSize: 13, color: C.sub, padding: '10px' }}>{u.campaign}</td>
                    <td style={{ fontSize: 13, fontWeight: 700, color: C.blue, padding: '10px' }}>{u.sessions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ── Web Vitals ────────────────────────────────────────────────── */}
        <div style={{ ...card, marginBottom: 24 }}>
          <span style={sectionLabel}>Web Vitals</span>
          {vitals.length === 0
            ? (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 10 }}>
                  {['LCP', 'FID / INP', 'CLS', 'FCP', 'TTFB'].map(m => (
                    <div key={m} style={{ background: C.raised, border: `1px solid ${C.border}`, borderRadius: 8, padding: '12px 16px', opacity: 0.5 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: C.ghost, letterSpacing: '0.08em', marginBottom: 8 }}>{m}</div>
                      <div style={{ fontSize: '1.4rem', fontWeight: 800, color: C.dim }}>—</div>
                    </div>
                  ))}
                </div>
                <Soon text="Web Vitals are captured on every page load. Appears within minutes of the first visitor." />
              </>
            )
            : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 10 }}>
                {vitals.map(({ metric, avg, p75 }) => {
                  const color = vitalColor(metric, p75);
                  return (
                    <div key={metric} style={{ background: `${color}08`, border: `1px solid ${color}25`, borderRadius: 8, padding: '12px 16px' }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color, letterSpacing: '0.08em', marginBottom: 8 }}>{metric}</div>
                      <div style={{ fontSize: '1.4rem', fontWeight: 800, color: C.text, letterSpacing: '-0.02em' }}>{fmtVital(metric, p75)}</div>
                      <div style={{ fontSize: 10, color: C.ghost, marginTop: 4 }}>avg {fmtVital(metric, avg)}</div>
                    </div>
                  );
                })}
              </div>
            )}
        </div>

        {/* ── Leads ────────────────────────────────────────────────────── */}
        <div style={{ ...card, marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <span style={{ ...sectionLabel, margin: 0 }}>Contact Form Leads</span>
            {leads.length > 0 && <span style={{ fontSize: 12, fontWeight: 700, color: C.green }}>{leads.length} in last {days}d</span>}
          </div>
          {leads.length === 0
            ? <Soon text="Appears after the first contact form submission. Each lead is also available at support@cerulea.io." />
            : (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {['Name', 'Email', 'Company', 'Submitted'].map(h => (
                      <th key={h} style={{ fontSize: 10, fontWeight: 700, color: C.ghost, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '6px 10px', borderBottom: `1px solid ${C.border}`, textAlign: 'left' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, i) => (
                    <tr key={i} style={{ borderBottom: `1px solid ${C.border}` }}>
                      <td style={{ fontSize: 13, color: C.text, fontWeight: 600, padding: '10px' }}>{lead.name || '—'}</td>
                      <td style={{ padding: '10px' }}>
                        {lead.email
                          ? <a href={`mailto:${lead.email}`} style={{ color: C.blue, textDecoration: 'none', fontSize: 13 }}>{lead.email}</a>
                          : <span style={{ color: C.ghost, fontSize: 13 }}>—</span>}
                      </td>
                      <td style={{ fontSize: 13, color: C.sub, padding: '10px' }}>{lead.company || '—'}</td>
                      <td style={{ fontSize: 12, color: C.ghost, padding: '10px' }}>{timeAgo(lead.timestamp)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
        </div>

        {/* ── Custom events ────────────────────────────────────────────── */}
        {events.length > 0 && (
          <div style={{ ...card, marginBottom: 24 }}>
            <span style={sectionLabel}>Other Events</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
              {events.map(({ event: ev, count }) => (
                <div key={ev} style={{ background: C.raised, border: `1px solid ${C.border}`, borderRadius: 8, padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: C.dim, fontFamily: 'monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginRight: 8 }}>{ev}</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: C.text, flexShrink: 0 }}>{count.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── External tools ────────────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <a href="https://clarity.microsoft.com" target="_blank" rel="noopener noreferrer"
            style={{ ...card, textDecoration: 'none', display: 'block', borderLeft: `3px solid ${C.amber}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: C.text, margin: '0 0 4px' }}>Heatmaps & Click Maps</p>
                <Pill label="Microsoft Clarity" color={C.amber} />
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: C.ghost, flexShrink: 0 }}>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p style={{ fontSize: 13, color: C.dim, lineHeight: 1.6, margin: 0 }}>
              Visual click maps, scroll heatmaps, rage-click detection, and session recordings with video playback.
            </p>
          </a>
          <a href={`${phBase}/replay/home`} target="_blank" rel="noopener noreferrer"
            style={{ ...card, textDecoration: 'none', display: 'block', borderLeft: `3px solid ${C.blue}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: C.text, margin: '0 0 4px' }}>Full PostHog Dashboard</p>
                <Pill label="PostHog" color={C.blue} />
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: C.ghost, flexShrink: 0 }}>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p style={{ fontSize: 13, color: C.dim, lineHeight: 1.6, margin: 0 }}>
              Advanced funnels, cohort analysis, feature flags, A/B tests, and the full session replay library.
            </p>
          </a>
        </div>

      </div>
    </div>
  );
}
