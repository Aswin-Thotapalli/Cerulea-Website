import { redirect } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { isAdmin } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Analytics | Cerulea',
  robots: { index: false, follow: false }, // keep out of search engines
};
import {
  isConfigured,
  getOverview,
  getTopPages,
  getCountries,
  getDevices,
  getOS,
  getBrowsers,
  getSources,
  getLeads,
  getTopEvents,
  getDailyViews,
} from '@/lib/posthog-api';

export const revalidate = 0;

// ── Helpers ───────────────────────────────────────────────────────────────────

function pct(value: number, total: number) {
  if (!total) return 0;
  return Math.round((value / total) * 100);
}

function timeAgo(ts: string) {
  const diff = Date.now() - new Date(ts).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return 'just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function Bar({ pct: p, color = '#2563eb' }: { pct: number; color?: string }) {
  return (
    <div style={{ background: '#F1F5F9', borderRadius: 4, height: 6, flex: 1 }}>
      <div style={{ background: color, borderRadius: 4, height: 6, width: `${p}%`, transition: 'width 0.4s ease' }} />
    </div>
  );
}

function Sparkline({ data }: { data: { date: string; views: number }[] }) {
  if (!data.length) return null;
  const max = Math.max(...data.map(d => d.views), 1);
  const w = 200, h = 40;
  const pts = data.map((d, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - (d.views / max) * h;
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg width={w} height={h} style={{ overflow: 'visible' }}>
      <polyline points={pts} fill="none" stroke="#2563eb" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
      <polyline points={`0,${h} ${pts} ${w},${h}`} fill="rgba(37,99,235,0.08)" stroke="none" />
    </svg>
  );
}

// ── Setup gate ────────────────────────────────────────────────────────────────

function SetupRequired() {
  return (
    <div style={{ minHeight: '100vh', background: '#0A192F', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', fontFamily: 'inherit' }}>
      <div style={{ background: '#fff', borderRadius: 16, padding: '3rem', maxWidth: 560, width: '100%' }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>🔧</div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0A192F', marginBottom: 8 }}>PostHog API not configured</h2>
        <p style={{ color: '#64748B', lineHeight: 1.7, marginBottom: 24 }}>
          Add these two environment variables to your Vercel project, then redeploy:
        </p>
        <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 8, padding: '1.25rem', fontFamily: 'monospace', fontSize: 13, color: '#0A192F', lineHeight: 2, marginBottom: 24 }}>
          <div><span style={{ color: '#94A3B8' }}># PostHog → Settings → API Keys → Personal API Key</span></div>
          <div>POSTHOG_PERSONAL_API_KEY=phx_...</div>
          <div style={{ marginTop: 8 }}><span style={{ color: '#94A3B8' }}># PostHog → your project URL → the number after /project/</span></div>
          <div>POSTHOG_PROJECT_ID=123456</div>
        </div>
        <p style={{ color: '#94A3B8', fontSize: 13 }}>These are server-only variables — no NEXT_PUBLIC_ prefix needed.</p>
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

  const { days: daysParam } = await searchParams;
  const days = Number(daysParam) || 7;

  // Fetch everything in parallel
  const [overview, topPages, countries, devices, os, browsers, sources, leads, events, daily] =
    await Promise.all([
      getOverview(days).catch(() => ({ pageViews: 0, uniqueVisitors: 0, sessions: 0, contacts: 0 })),
      getTopPages(days).catch(() => []),
      getCountries(days).catch(() => []),
      getDevices(days).catch(() => []),
      getOS(days).catch(() => []),
      getBrowsers(days).catch(() => []),
      getSources(days).catch(() => []),
      getLeads(days).catch(() => []),
      getTopEvents(days).catch(() => []),
      getDailyViews(days).catch(() => []),
    ]);

  const totalDevices   = devices.reduce((s, d) => s + d.count, 0);
  const totalOS        = os.reduce((s, d) => s + d.count, 0);
  const totalBrowsers  = browsers.reduce((s, d) => s + d.count, 0);
  const totalCountries = countries.reduce((s, d) => s + d.count, 0);
  const totalSources   = sources.reduce((s, d) => s + d.count, 0);
  const topPageTotal   = topPages[0]?.views || 1;

  const phUrl = `https://us.posthog.com/project/${process.env.POSTHOG_PROJECT_ID}`;

  // ── Styles ──────────────────────────────────────────────────────────────────
  const card: React.CSSProperties = { background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, padding: '1.5rem' };
  const label: React.CSSProperties = { fontSize: 11, fontWeight: 800, color: '#94A3B8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4, display: 'block' };
  const sectionTitle: React.CSSProperties = { fontSize: 11, fontWeight: 800, color: '#94A3B8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' };
  const th: React.CSSProperties = { fontSize: 11, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '8px 12px', borderBottom: '1px solid #F1F5F9', textAlign: 'left' };
  const td: React.CSSProperties = { fontSize: 13, color: '#475569', padding: '10px 12px', borderBottom: '1px solid #F8FAFC' };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', fontFamily: 'inherit' }}>

      {/* ── Top Bar ─────────────────────────────────────────────────────────── */}
      <div style={{ background: '#0A192F', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, position: 'sticky', top: 64, zIndex: 40, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link href="/" style={{ color: '#60A5FA', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>← cerulea.io</Link>
          <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
          <span style={{ color: '#fff', fontWeight: 800, fontSize: 15, letterSpacing: '-0.02em' }}>Analytics</span>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {[7, 30, 90].map(d => (
            <Link key={d} href={`/analytics?days=${d}`} style={{
              padding: '5px 14px', borderRadius: 6, fontSize: 12, fontWeight: 700, textDecoration: 'none',
              background: days === d ? '#2563eb' : 'rgba(255,255,255,0.08)',
              color: days === d ? '#fff' : '#94A3B8',
              border: days === d ? '1px solid #2563eb' : '1px solid rgba(255,255,255,0.1)',
            }}>
              {d}d
            </Link>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>

        {/* ── Overview cards ──────────────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
          {[
            { label: 'Page Views',      value: overview.pageViews.toLocaleString(),      sparkline: true,  color: '#2563eb' },
            { label: 'Unique Visitors', value: overview.uniqueVisitors.toLocaleString(), sparkline: false, color: '#7c3aed' },
            { label: 'Sessions',        value: overview.sessions.toLocaleString(),        sparkline: false, color: '#0891b2' },
            { label: 'Contact Leads',   value: overview.contacts.toLocaleString(),        sparkline: false, color: '#16a34a' },
          ].map(({ label: l, value, sparkline, color }) => (
            <div key={l} style={{ ...card, borderTop: `3px solid ${color}` }}>
              <span style={{ ...label, color }}>{l}</span>
              <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0A192F', letterSpacing: '-0.03em', lineHeight: 1 }}>
                {value}
              </div>
              {sparkline && daily.length > 1 && (
                <div style={{ marginTop: 12, opacity: 0.7 }}>
                  <Sparkline data={daily} />
                </div>
              )}
              <div style={{ fontSize: 12, color: '#94A3B8', marginTop: sparkline ? 0 : 8 }}>
                Last {days} days
              </div>
            </div>
          ))}
        </div>

        {/* ── Top Pages + Traffic Sources ─────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>

          {/* Top pages */}
          <div style={card}>
            <p style={sectionTitle}>Top Pages</p>
            {topPages.length === 0 ? (
              <p style={{ color: '#94A3B8', fontSize: 13 }}>No data yet.</p>
            ) : (
              <div>
                {topPages.map(({ page, views }) => (
                  <div key={page} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <span style={{ fontSize: 12, color: '#475569', fontFamily: 'monospace', flexShrink: 0, width: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                      title={page}>{page}</span>
                    <Bar pct={pct(views, topPageTotal)} />
                    <span style={{ fontSize: 12, color: '#64748B', fontWeight: 700, flexShrink: 0, width: 40, textAlign: 'right' }}>{views}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Traffic sources */}
          <div style={card}>
            <p style={sectionTitle}>Traffic Sources</p>
            {sources.length === 0 ? (
              <p style={{ color: '#94A3B8', fontSize: 13 }}>No data yet.</p>
            ) : (
              <div>
                {sources.map(({ source, count }) => (
                  <div key={source} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <span style={{ fontSize: 12, color: '#475569', flexShrink: 0, width: 140, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                      title={source}>{source}</span>
                    <Bar pct={pct(count, totalSources)} color='#7c3aed' />
                    <span style={{ fontSize: 12, color: '#64748B', fontWeight: 700, flexShrink: 0, width: 40, textAlign: 'right' }}>{pct(count, totalSources)}%</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Device / OS / Browser ───────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
          {[
            { title: 'Devices',  rows: devices.map(d  => ({ name: d.device,  count: d.count,  total: totalDevices  })),  color: '#0891b2' },
            { title: 'OS',       rows: os.map(o       => ({ name: o.os,       count: o.count,  total: totalOS       })),  color: '#ea580c' },
            { title: 'Browsers', rows: browsers.map(b => ({ name: b.browser,  count: b.count,  total: totalBrowsers })),  color: '#16a34a' },
          ].map(({ title, rows, color }) => (
            <div key={title} style={card}>
              <p style={sectionTitle}>{title}</p>
              {rows.length === 0 ? <p style={{ color: '#94A3B8', fontSize: 13 }}>No data yet.</p> : rows.map(({ name, count, total }) => (
                <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 12, color: '#475569', flexShrink: 0, width: 100, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</span>
                  <Bar pct={pct(count, total)} color={color} />
                  <span style={{ fontSize: 11, color: '#64748B', fontWeight: 700, flexShrink: 0, width: 34, textAlign: 'right' }}>{pct(count, total)}%</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ── Geography ───────────────────────────────────────────────────── */}
        <div style={{ ...card, marginBottom: 24 }}>
          <p style={sectionTitle}>Top Countries</p>
          {countries.length === 0 ? (
            <p style={{ color: '#94A3B8', fontSize: 13 }}>No data yet. Geo data appears after the first few real sessions.</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '8px 32px' }}>
              {countries.map(({ country, count }) => (
                <div key={country} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 13, color: '#475569', flexShrink: 0, width: 140, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{country}</span>
                  <Bar pct={pct(count, totalCountries)} color='#2563eb' />
                  <span style={{ fontSize: 11, color: '#64748B', fontWeight: 700, flexShrink: 0 }}>{count}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Contact Leads ────────────────────────────────────────────────── */}
        <div style={{ ...card, marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <p style={{ ...sectionTitle, margin: 0 }}>Contact Form Leads</p>
            <span style={{ fontSize: 12, color: '#94A3B8' }}>
              {leads.length} submission{leads.length !== 1 ? 's' : ''} in last {days} days
            </span>
          </div>
          {leads.length === 0 ? (
            <p style={{ color: '#94A3B8', fontSize: 13 }}>No leads yet in this period.</p>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {['Name', 'Email', 'Company', 'Submitted'].map(h => (
                    <th key={h} style={th}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, i) => (
                  <tr key={i}>
                    <td style={{ ...td, fontWeight: 600, color: '#0A192F' }}>{lead.name || '—'}</td>
                    <td style={td}>
                      {lead.email ? (
                        <a href={`mailto:${lead.email}`} style={{ color: '#2563eb', textDecoration: 'none' }}>
                          {lead.email}
                        </a>
                      ) : '—'}
                    </td>
                    <td style={td}>{lead.company || '—'}</td>
                    <td style={{ ...td, color: '#94A3B8', fontSize: 12 }}>{timeAgo(lead.timestamp)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* ── Top Events ───────────────────────────────────────────────────── */}
        <div style={{ ...card, marginBottom: 24 }}>
          <p style={sectionTitle}>Top Custom Events</p>
          {events.length === 0 ? (
            <p style={{ color: '#94A3B8', fontSize: 13 }}>No custom events recorded yet.</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 8 }}>
              {events.map(({ event: ev, count }) => (
                <div key={ev} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 8, padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: '#475569', fontFamily: 'monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginRight: 8 }}>{ev}</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: '#0A192F', flexShrink: 0 }}>{count.toLocaleString()}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── External tools ───────────────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            {
              title: 'PostHog — Session Recordings',
              desc: 'Watch real user sessions, see exactly what they clicked, where they hovered, and where they dropped off.',
              href: `${phUrl}/replay/home`,
              color: '#2563eb',
              label: 'Open Session Recordings →',
            },
            {
              title: 'Microsoft Clarity — Heatmaps',
              desc: 'Visual heatmaps, scroll maps, rage-click detection, and dead-click reports for every page.',
              href: 'https://clarity.microsoft.com',
              color: '#ea580c',
              label: 'Open Clarity Heatmaps →',
            },
          ].map(({ title, desc, href, color, label: btnLabel }) => (
            <a key={title} href={href} target="_blank" rel="noopener noreferrer"
              style={{ ...card, display: 'block', textDecoration: 'none', borderTop: `3px solid ${color}`, transition: 'box-shadow 0.2s' }}>
              <p style={{ fontSize: 14, fontWeight: 800, color: '#0A192F', marginBottom: 8 }}>{title}</p>
              <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.6, marginBottom: 16 }}>{desc}</p>
              <span style={{ fontSize: 13, fontWeight: 700, color }}>{btnLabel}</span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
