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
  getTopPages, getTopBlogPosts, getTopCTAs, getNavClicks,
  getCountries, getDevices, getOS, getBrowsers,
  getSources, getLeads, getTopEvents,
  getDailyViews, getHourlyTraffic, getDayOfWeek,
  getScrollDepth,
} from '@/lib/posthog-api';

export const metadata: Metadata = {
  title: 'Analytics | Cerulea',
  robots: { index: false, follow: false },
};

export const revalidate = 0;

// ── Design tokens ─────────────────────────────────────────────────────────────

const C = {
  bg:       '#0D1117',
  surface:  '#161B22',
  border:   '#21262D',
  text:     '#E6EDF3',
  muted:    '#8B949E',
  dim:      '#484F58',
  blue:     '#2F81F7',
  purple:   '#A371F7',
  green:    '#3FB950',
  orange:   '#F0883E',
  red:      '#F85149',
  yellow:   '#D29922',
  teal:     '#39D3C9',
} as const;

const card: React.CSSProperties = {
  background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: '1.25rem',
};

const label: React.CSSProperties = {
  fontSize: 11, fontWeight: 700, color: C.muted,
  letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 6,
};

const sectionHead: React.CSSProperties = {
  fontSize: 11, fontWeight: 700, color: C.muted,
  letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem',
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function pct(v: number, t: number) { return t ? Math.round((v / t) * 100) : 0; }

function trend(cur: number, prev: number) {
  if (!prev) return null;
  return Math.round(((cur - prev) / prev) * 100);
}

function fmtDuration(s: number) {
  if (!s) return '—';
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  const rem = s % 60;
  if (m < 60) return rem ? `${m}m ${rem}s` : `${m}m`;
  return `${Math.floor(m / 60)}h ${m % 60}m`;
}

function timeAgo(ts: string) {
  const d = Date.now() - new Date(ts).getTime();
  const m = Math.floor(d / 60000);
  if (m < 1) return 'just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

const COUNTRY_FLAGS: Record<string, string> = {
  'India': '🇮🇳', 'United States': '🇺🇸', 'United Kingdom': '🇬🇧',
  'Germany': '🇩🇪', 'France': '🇫🇷', 'Canada': '🇨🇦', 'Australia': '🇦🇺',
  'Singapore': '🇸🇬', 'Japan': '🇯🇵', 'Netherlands': '🇳🇱',
  'Switzerland': '🇨🇭', 'Sweden': '🇸🇪', 'Norway': '🇳🇴', 'Denmark': '🇩🇰',
  'Brazil': '🇧🇷', 'UAE': '🇦🇪', 'South Korea': '🇰🇷', 'China': '🇨🇳',
};

// ── SVG Charts ────────────────────────────────────────────────────────────────

function AreaChart({ data, color = C.blue }: { data: { date: string; views: number }[]; color?: string }) {
  if (data.length < 2) return (
    <div style={{ padding: '2rem', textAlign: 'center', color: C.dim, fontSize: 13 }}>
      Not enough data for chart yet.
    </div>
  );

  const W = 900, H = 160;
  const P = { t: 16, r: 16, b: 30, l: 44 };
  const IW = W - P.l - P.r, IH = H - P.t - P.b;
  const max = Math.max(...data.map(d => d.views), 1);

  const pts = data.map((d, i) => ({
    x: P.l + (i / (data.length - 1)) * IW,
    y: P.t + IH - (d.views / max) * IH,
    ...d,
  }));

  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const area = `${line} L${pts[pts.length - 1].x.toFixed(1)},${(P.t + IH).toFixed(1)} L${pts[0].x.toFixed(1)},${(P.t + IH).toFixed(1)} Z`;

  const yVals = [max, Math.round(max * 0.5), 0];
  const xIdxs = [0, Math.round(data.length * 0.25), Math.round(data.length * 0.5), Math.round(data.length * 0.75), data.length - 1].filter(i => i < data.length);

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', overflow: 'visible' }}>
      <defs>
        <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.28} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      {yVals.map((v, i) => {
        const y = P.t + (i / (yVals.length - 1)) * IH;
        return (
          <g key={v}>
            <line x1={P.l} x2={W - P.r} y1={y} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />
            <text x={P.l - 6} y={y + 4} textAnchor="end" fontSize={10} fill={C.dim} fontFamily="system-ui">
              {v >= 1000 ? `${(v / 1000).toFixed(1)}k` : v}
            </text>
          </g>
        );
      })}
      <path d={area} fill="url(#ag)" />
      <path d={line} fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
      {xIdxs.map(i => {
        const p = pts[i];
        const lbl = new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        return (
          <text key={i} x={p.x} y={H - 6} textAnchor="middle" fontSize={10} fill={C.dim} fontFamily="system-ui">
            {lbl}
          </text>
        );
      })}
      {pts.length > 0 && (
        <circle cx={pts[pts.length - 1].x} cy={pts[pts.length - 1].y} r={3.5} fill={color} />
      )}
    </svg>
  );
}

function Sparkline({ data, color = C.blue }: { data: { date: string; views: number }[]; color?: string }) {
  if (data.length < 2) return null;
  const W = 80, H = 28;
  const max = Math.max(...data.map(d => d.views), 1);
  const pts = data.map((d, i) => `${(i / (data.length - 1)) * W},${H - (d.views / max) * H}`).join(' ');
  return (
    <svg width={W} height={H} style={{ display: 'block' }}>
      <polyline points={`0,${H} ${pts} ${W},${H}`} fill={`${color}18`} stroke="none" />
      <polyline points={pts} fill="none" stroke={color} strokeWidth={1.5} strokeLinejoin="round" />
    </svg>
  );
}

function HBar({ value, total, color = C.blue }: { value: number; total: number; color?: string }) {
  const p = pct(value, total || 1);
  return (
    <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 5, flex: 1 }}>
      <div style={{ background: color, borderRadius: 3, height: 5, width: `${p}%` }} />
    </div>
  );
}

function VBars({ data, color = C.blue, labelEvery = 1 }: { data: { label: string; value: number }[]; color?: string; labelEvery?: number }) {
  const max = Math.max(...data.map(d => d.value), 1);
  const W = 480, BH = 72, LH = 16, H = BH + LH;
  const bw = W / data.length;
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', overflow: 'visible' }}>
      {data.map((d, i) => {
        const h = (d.value / max) * BH;
        const x = i * bw + bw * 0.18;
        const w = bw * 0.64;
        return (
          <g key={i}>
            <rect x={x} y={BH - h} width={w} height={h || 1} fill={color} rx={2}
              opacity={d.value ? 0.75 + (d.value / max) * 0.25 : 0.12} />
            {i % labelEvery === 0 && (
              <text x={x + w / 2} y={H - 2} textAnchor="middle" fontSize={9} fill={C.dim} fontFamily="system-ui">
                {d.label}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function DonutChart({ slices }: { slices: { label: string; value: number; color: string }[] }) {
  const total = slices.reduce((s, d) => s + d.value, 0);
  if (!total) return <p style={{ color: C.dim, fontSize: 13 }}>No visitor data yet.</p>;

  const R = 40, r = 24, cx = 52, cy = 52;
  let a = -Math.PI / 2;

  const arcs = slices.map(s => {
    const frac = s.value / total;
    const sa = a;
    a += frac * Math.PI * 2;
    const ea = a;
    const x1 = cx + R * Math.cos(sa), y1 = cy + R * Math.sin(sa);
    const x2 = cx + R * Math.cos(ea), y2 = cy + R * Math.sin(ea);
    const ix1 = cx + r * Math.cos(sa), iy1 = cy + r * Math.sin(sa);
    const ix2 = cx + r * Math.cos(ea), iy2 = cy + r * Math.sin(ea);
    const lg = frac > 0.5 ? 1 : 0;
    return {
      ...s,
      path: `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${R} ${R} 0 ${lg} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} L ${ix2.toFixed(2)} ${iy2.toFixed(2)} A ${r} ${r} 0 ${lg} 0 ${ix1.toFixed(2)} ${iy1.toFixed(2)} Z`,
      pct: Math.round(frac * 100),
    };
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <svg width={104} height={104} viewBox="0 0 104 104" style={{ flexShrink: 0 }}>
        {arcs.map(a => <path key={a.label} d={a.path} fill={a.color} />)}
        <circle cx={cx} cy={cy} r={20} fill={C.surface} />
        <text x={cx} y={cy + 5} textAnchor="middle" fontSize={13} fontWeight={800} fill={C.text} fontFamily="system-ui">
          {arcs[0]?.pct}%
        </text>
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {arcs.map(a => (
          <div key={a.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: a.color, flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 13, color: C.text, fontWeight: 600 }}>{a.label}</div>
              <div style={{ fontSize: 11, color: C.muted }}>{a.value.toLocaleString()} · {a.pct}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Trend badge ───────────────────────────────────────────────────────────────

function TrendBadge({ delta, invert = false }: { delta: number | null; invert?: boolean }) {
  if (delta === null) return null;
  const positive = invert ? delta <= 0 : delta >= 0;
  return (
    <span style={{
      fontSize: 11, fontWeight: 700,
      color: positive ? C.green : C.red,
      display: 'inline-flex', alignItems: 'center', gap: 2,
    }}>
      {delta >= 0 ? '↑' : '↓'} {Math.abs(delta)}%
    </span>
  );
}

// ── Setup gate ────────────────────────────────────────────────────────────────

function SetupRequired() {
  return (
    <div style={{ minHeight: '100vh', background: C.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, padding: '3rem', maxWidth: 560, width: '100%' }}>
        <p style={{ fontSize: 32, marginBottom: 16 }}>🔧</p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: C.text, marginBottom: 8 }}>PostHog API not configured</h2>
        <p style={{ color: C.muted, lineHeight: 1.7, marginBottom: 24 }}>
          Add these environment variables to your Vercel project, then redeploy:
        </p>
        <div style={{ background: '#0D1117', border: `1px solid ${C.border}`, borderRadius: 8, padding: '1.25rem', fontFamily: 'monospace', fontSize: 13, color: C.text, lineHeight: 2.2 }}>
          <div style={{ color: C.dim }}># PostHog → Avatar → Personal API Keys</div>
          <div>POSTHOG_PERSONAL_API_KEY=phx_...</div>
          <div style={{ marginTop: 8, color: C.dim }}># PostHog → URL after /project/</div>
          <div>POSTHOG_PROJECT_ID=123456</div>
        </div>
        <p style={{ color: C.dim, fontSize: 13, marginTop: 16 }}>Server-only — no NEXT_PUBLIC_ prefix needed.</p>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default async function AnalyticsPage({
  searchParams,
}: {
  searchParams: Promise<{ days?: string }>;
}) {
  const admin = await isAdmin();
  if (!admin) redirect('/');

  if (!isConfigured()) return <SetupRequired />;

  const { days: dp } = await searchParams;
  const days = Number(dp) || 7;

  const [
    overview, prevOverview,
    bounceRate, prevBounceRate,
    avgDuration, pagesPerSession,
    newVsReturning,
    topPages, topBlogPosts, topCTAs, navClicks,
    countries, devices, os, browsers, sources,
    leads, events, daily, hourly, dow, scrollDepth,
  ] = await Promise.all([
    getOverview(days).catch(() => ({ pageViews: 0, uniqueVisitors: 0, sessions: 0, contacts: 0 })),
    getPreviousOverview(days).catch(() => ({ pageViews: 0, uniqueVisitors: 0, sessions: 0, contacts: 0 })),
    getBounceRate(days).catch(() => 0),
    getPreviousBounceRate(days).catch(() => 0),
    getAvgSessionDuration(days).catch(() => 0),
    getPagesPerSession(days).catch(() => 0),
    getNewVsReturning(days).catch(() => []),
    getTopPages(days).catch(() => []),
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
  ]);

  const tViews     = trend(overview.pageViews,      prevOverview.pageViews);
  const tVisitors  = trend(overview.uniqueVisitors,  prevOverview.uniqueVisitors);
  const tSessions  = trend(overview.sessions,        prevOverview.sessions);
  const tContacts  = trend(overview.contacts,        prevOverview.contacts);
  const tBounce    = trend(bounceRate,               prevBounceRate);

  const totalSrc   = sources.reduce((s, d) => s + d.count, 0);
  const totalDev   = devices.reduce((s, d) => s + d.count, 0);
  const totalOS    = os.reduce((s, d) => s + d.count, 0);
  const totalBrow  = browsers.reduce((s, d) => s + d.count, 0);
  const totalCtr   = countries.reduce((s, d) => s + d.count, 0);
  const topPageMax = topPages[0]?.views || 1;
  const topCtaMax  = topCTAs[0]?.clicks || 1;
  const topNavMax  = navClicks[0]?.clicks || 1;
  const topBlogMax = topBlogPosts[0]?.views || 1;

  const phUrl = `https://us.posthog.com/project/${process.env.POSTHOG_PROJECT_ID}`;

  const newVisitors = newVsReturning.find(r => r.type === 'New')?.count ?? 0;

  return (
    <div style={{ background: C.bg, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', color: C.text }}>

      {/* ── Top bar ──────────────────────────────────────────────────────── */}
      <div style={{
        background: '#0D1117', borderBottom: `1px solid ${C.border}`,
        padding: '0 1.5rem', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: 52,
        position: 'sticky', top: 64, zIndex: 40,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link href="/" style={{ color: C.blue, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
            ← cerulea.io
          </Link>
          <span style={{ color: C.border }}>|</span>
          <span style={{ color: C.text, fontWeight: 700, fontSize: 14 }}>Analytics</span>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {[7, 30, 90].map(d => (
            <Link key={d} href={`/analytics?days=${d}`} style={{
              padding: '4px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700,
              textDecoration: 'none',
              background: days === d ? C.blue : 'rgba(255,255,255,0.06)',
              color: days === d ? '#fff' : C.muted,
              border: `1px solid ${days === d ? C.blue : C.border}`,
            }}>
              {d}d
            </Link>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '1.75rem 1.5rem 5rem' }}>

        {/* ── Stat cards row 1 ──────────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 12 }}>
          {[
            { lbl: 'Page Views',      val: overview.pageViews.toLocaleString(),      delta: tViews,    color: C.blue,   spark: true },
            { lbl: 'Unique Visitors', val: overview.uniqueVisitors.toLocaleString(), delta: tVisitors, color: C.purple, spark: false },
            { lbl: 'Sessions',        val: overview.sessions.toLocaleString(),       delta: tSessions, color: C.teal,   spark: false },
            { lbl: 'Bounce Rate',     val: `${bounceRate}%`,                         delta: tBounce,   color: C.orange, spark: false, invert: true },
          ].map(({ lbl, val, delta, color, spark, invert }) => (
            <div key={lbl} style={{ ...card, borderTop: `2px solid ${color}` }}>
              <span style={{ ...label, color }}>{lbl}</span>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: C.text }}>
                  {val}
                </div>
                {spark && daily.length > 1 && (
                  <div style={{ paddingBottom: 4 }}>
                    <Sparkline data={daily} color={color} />
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
                <TrendBadge delta={delta} invert={invert} />
                <span style={{ fontSize: 11, color: C.dim }}>vs prev {days}d</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Stat cards row 2 ──────────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
          {[
            { lbl: 'Avg Session Duration', val: fmtDuration(avgDuration),         color: C.yellow },
            { lbl: 'Pages / Session',      val: pagesPerSession ? pagesPerSession.toFixed(1) : '—', color: '#38BDF8' },
            { lbl: 'Contact Leads',        val: overview.contacts.toLocaleString(), delta: tContacts, color: C.green  },
            { lbl: 'New Visitors',         val: newVisitors.toLocaleString(),       color: '#EC4899' },
          ].map(({ lbl, val, color, delta }: { lbl: string; val: string; color: string; delta?: number | null }) => (
            <div key={lbl} style={{ ...card, borderTop: `2px solid ${color}` }}>
              <span style={{ ...label, color }}>{lbl}</span>
              <div style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: C.text }}>
                {val}
              </div>
              {delta !== undefined && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
                  <TrendBadge delta={delta ?? null} />
                  <span style={{ fontSize: 11, color: C.dim }}>vs prev {days}d</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Daily views chart ─────────────────────────────────────────── */}
        <div style={{ ...card, marginBottom: 20, paddingBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <p style={{ ...sectionHead, margin: 0 }}>Daily Page Views</p>
            <span style={{ fontSize: 12, color: C.dim }}>
              {overview.pageViews.toLocaleString()} total in {days}d
            </span>
          </div>
          <AreaChart data={daily} color={C.blue} />
        </div>

        {/* ── Top pages + Traffic sources + New vs Returning ─────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 0.9fr', gap: 12, marginBottom: 20 }}>

          {/* Top pages */}
          <div style={card}>
            <p style={sectionHead}>Top Pages</p>
            {topPages.length === 0 ? (
              <p style={{ color: C.dim, fontSize: 13 }}>No data yet.</p>
            ) : topPages.map(({ page, views }) => (
              <div key={page} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 12, color: C.muted, fontFamily: 'monospace', flexShrink: 0, width: 170, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={page}>
                  {page}
                </span>
                <HBar value={views} total={topPageMax} color={C.blue} />
                <span style={{ fontSize: 12, color: C.text, fontWeight: 700, flexShrink: 0, width: 36, textAlign: 'right' }}>{views}</span>
              </div>
            ))}
          </div>

          {/* Traffic sources */}
          <div style={card}>
            <p style={sectionHead}>Traffic Sources</p>
            {sources.length === 0 ? (
              <p style={{ color: C.dim, fontSize: 13 }}>No data yet.</p>
            ) : sources.map(({ source, count }) => (
              <div key={source} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 12, color: C.muted, flexShrink: 0, width: 110, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {source}
                </span>
                <HBar value={count} total={totalSrc} color={C.purple} />
                <span style={{ fontSize: 11, color: C.text, fontWeight: 700, flexShrink: 0, width: 32, textAlign: 'right' }}>
                  {pct(count, totalSrc)}%
                </span>
              </div>
            ))}
          </div>

          {/* New vs Returning */}
          <div style={card}>
            <p style={sectionHead}>New vs Returning</p>
            <DonutChart slices={[
              { label: 'New',       value: newVsReturning.find(r => r.type === 'New')?.count       ?? 0, color: C.blue   },
              { label: 'Returning', value: newVsReturning.find(r => r.type === 'Returning')?.count ?? 0, color: C.purple },
            ]} />
          </div>
        </div>

        {/* ── Scroll depth + Hourly + Day of Week ───────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', gap: 12, marginBottom: 20 }}>

          {/* Scroll depth */}
          <div style={card}>
            <p style={sectionHead}>Scroll Depth</p>
            {scrollDepth.every(d => d.sessions === 0) ? (
              <p style={{ color: C.dim, fontSize: 13 }}>No scroll data yet.</p>
            ) : scrollDepth.map(({ depth, sessions: s }) => {
              const p = overview.sessions ? pct(s, overview.sessions) : 0;
              const depthColor: Record<number, string> = { 25: C.blue, 50: C.purple, 75: C.green, 90: C.orange, 100: C.red };
              const depthLabel: Record<number, string> = { 25: '25%', 50: '50%', 75: '75%', 90: '90%', 100: '100%' };
              return (
                <div key={depth} style={{ marginBottom: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                    <span style={{ fontSize: 12, color: C.muted }}>{depthLabel[depth]} scroll</span>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span style={{ fontSize: 11, color: C.dim }}>{s.toLocaleString()} sessions</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: depthColor[depth] }}>{p}%</span>
                    </div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 5 }}>
                    <div style={{ background: depthColor[depth], borderRadius: 3, height: 5, width: `${p}%` }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hourly traffic */}
          <div style={card}>
            <p style={sectionHead}>Hourly Traffic (UTC)</p>
            {hourly.every(d => d.views === 0) ? (
              <p style={{ color: C.dim, fontSize: 13 }}>No data yet.</p>
            ) : (
              <>
                <VBars data={hourly.map(d => ({ label: d.hour % 6 === 0 ? `${d.hour}h` : '', value: d.views }))} color={C.purple} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                  {['0h', '6h', '12h', '18h', '23h'].map(l => (
                    <span key={l} style={{ fontSize: 9, color: C.dim }}>{l}</span>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Day of week */}
          <div style={card}>
            <p style={sectionHead}>Day of Week</p>
            {dow.every(d => d.views === 0) ? (
              <p style={{ color: C.dim, fontSize: 13 }}>No data yet.</p>
            ) : (
              <VBars data={dow.map(d => ({ label: d.day, value: d.views }))} color={C.teal} />
            )}
          </div>
        </div>

        {/* ── Blog posts + CTA clicks ────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>

          {/* Blog posts */}
          <div style={card}>
            <p style={sectionHead}>Blog Post Views</p>
            {topBlogPosts.length === 0 ? (
              <p style={{ color: C.dim, fontSize: 13 }}>No blog views tracked yet.</p>
            ) : topBlogPosts.map(({ slug, title, category, views }) => (
              <div key={slug} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <Link href={`/blog/${slug}`} style={{ fontSize: 13, color: C.text, textDecoration: 'none', fontWeight: 600, display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={title}>
                    {title}
                  </Link>
                  {category && <span style={{ fontSize: 11, color: C.dim }}>{category}</span>}
                </div>
                <HBar value={views} total={topBlogMax} color={C.orange} />
                <span style={{ fontSize: 12, color: C.text, fontWeight: 700, flexShrink: 0, width: 28, textAlign: 'right' }}>{views}</span>
              </div>
            ))}
          </div>

          {/* CTA clicks */}
          <div style={card}>
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={sectionHead}>CTA Clicks</p>
                {topCTAs.length === 0 ? (
                  <p style={{ color: C.dim, fontSize: 13 }}>No CTA clicks tracked yet.</p>
                ) : topCTAs.map(({ label: l, location, clicks }) => (
                  <div key={`${l}-${location}`} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 12, color: C.text, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l}</div>
                      {location && <div style={{ fontSize: 10, color: C.dim }}>{location}</div>}
                    </div>
                    <HBar value={clicks} total={topCtaMax} color={C.green} />
                    <span style={{ fontSize: 12, color: C.text, fontWeight: 700, flexShrink: 0, width: 28, textAlign: 'right' }}>{clicks}</span>
                  </div>
                ))}
              </div>
              <div style={{ width: 1, background: C.border, flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={sectionHead}>Nav Clicks</p>
                {navClicks.length === 0 ? (
                  <p style={{ color: C.dim, fontSize: 13 }}>No nav clicks tracked yet.</p>
                ) : navClicks.map(({ label: l, clicks }) => (
                  <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <span style={{ fontSize: 12, color: C.muted, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l}</span>
                    <HBar value={clicks} total={topNavMax} color={C.yellow} />
                    <span style={{ fontSize: 12, color: C.text, fontWeight: 700, flexShrink: 0, width: 28, textAlign: 'right' }}>{clicks}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Device / OS / Browser ─────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 20 }}>
          {[
            { title: 'Devices',  rows: devices.map(d  => ({ name: d.device,  count: d.count })),  total: totalDev,  color: C.teal   },
            { title: 'OS',       rows: os.map(o        => ({ name: o.os,      count: o.count })),  total: totalOS,   color: C.orange },
            { title: 'Browsers', rows: browsers.map(b  => ({ name: b.browser, count: b.count })),  total: totalBrow, color: C.green  },
          ].map(({ title, rows, total, color }) => (
            <div key={title} style={card}>
              <p style={sectionHead}>{title}</p>
              {rows.length === 0 ? (
                <p style={{ color: C.dim, fontSize: 13 }}>No data yet.</p>
              ) : rows.map(({ name, count }) => (
                <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 12, color: C.muted, flexShrink: 0, width: 90, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</span>
                  <HBar value={count} total={total} color={color} />
                  <span style={{ fontSize: 11, color: C.text, fontWeight: 700, flexShrink: 0, width: 30, textAlign: 'right' }}>
                    {pct(count, total)}%
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ── Geography ─────────────────────────────────────────────────── */}
        <div style={{ ...card, marginBottom: 20 }}>
          <p style={sectionHead}>Top Countries</p>
          {countries.length === 0 ? (
            <p style={{ color: C.dim, fontSize: 13 }}>No geo data yet. Appears after the first real sessions.</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '8px 40px' }}>
              {countries.map(({ country, count }) => (
                <div key={country} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 16, width: 22, flexShrink: 0 }}>{COUNTRY_FLAGS[country] ?? '🌐'}</span>
                  <span style={{ fontSize: 13, color: C.muted, flexShrink: 0, width: 130, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{country}</span>
                  <HBar value={count} total={totalCtr} color={C.blue} />
                  <span style={{ fontSize: 12, color: C.text, fontWeight: 700, flexShrink: 0, width: 32, textAlign: 'right' }}>{count}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Contact Leads ─────────────────────────────────────────────── */}
        <div style={{ ...card, marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <p style={{ ...sectionHead, margin: 0 }}>Contact Form Leads</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              {overview.contacts > 0 && (
                <span style={{ fontSize: 12, fontWeight: 700, color: C.green }}>
                  {overview.contacts} submission{overview.contacts !== 1 ? 's' : ''}
                </span>
              )}
              <span style={{ fontSize: 12, color: C.dim }}>last {days} days</span>
            </div>
          </div>
          {leads.length === 0 ? (
            <p style={{ color: C.dim, fontSize: 13 }}>No leads submitted in this period.</p>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {['Name', 'Email', 'Company', 'Submitted'].map(h => (
                    <th key={h} style={{ fontSize: 11, fontWeight: 700, color: C.dim, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '6px 12px', borderBottom: `1px solid ${C.border}`, textAlign: 'left' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${C.border}` }}>
                    <td style={{ fontSize: 13, color: C.text, fontWeight: 600, padding: '10px 12px' }}>{lead.name || '—'}</td>
                    <td style={{ fontSize: 13, padding: '10px 12px' }}>
                      {lead.email
                        ? <a href={`mailto:${lead.email}`} style={{ color: C.blue, textDecoration: 'none', fontWeight: 500 }}>{lead.email}</a>
                        : <span style={{ color: C.dim }}>—</span>}
                    </td>
                    <td style={{ fontSize: 13, color: C.muted, padding: '10px 12px' }}>{lead.company || '—'}</td>
                    <td style={{ fontSize: 12, color: C.dim, padding: '10px 12px' }}>{timeAgo(lead.timestamp)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* ── Custom Events ─────────────────────────────────────────────── */}
        {events.length > 0 && (
          <div style={{ ...card, marginBottom: 20 }}>
            <p style={sectionHead}>Other Events</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 8 }}>
              {events.map(({ event: ev, count }) => (
                <div key={ev} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.border}`, borderRadius: 8, padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: C.muted, fontFamily: 'monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginRight: 8 }}>{ev}</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: C.text, flexShrink: 0 }}>{count.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── External tools ────────────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            {
              title: 'Session Recordings',
              desc: 'Watch real user sessions — exactly what they clicked, where they moved, where they dropped off.',
              sub: 'PostHog',
              href: `${phUrl}/replay/home`,
              color: C.blue,
            },
            {
              title: 'Heatmaps & Rage Clicks',
              desc: 'Visual click maps, scroll maps, dead-click detection, and rage-click reports per page.',
              sub: 'Microsoft Clarity',
              href: 'https://clarity.microsoft.com',
              color: C.orange,
            },
          ].map(({ title, desc, sub, href, color }) => (
            <a key={title} href={href} target="_blank" rel="noopener noreferrer"
              style={{ ...card, display: 'block', textDecoration: 'none', borderTop: `2px solid ${color}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: C.text, margin: 0 }}>{title}</p>
                <span style={{ fontSize: 11, color, fontWeight: 700, letterSpacing: '0.05em' }}>{sub} →</span>
              </div>
              <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
