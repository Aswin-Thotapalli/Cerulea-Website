'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import Link from 'next/link';
import ViewsAreaChart from './charts/ViewsAreaChart';
import FunnelChart from './charts/FunnelChart';
import type { SessionRec } from '@/lib/posthog-api';

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  bg:       '#F5F5F8',
  surface:  '#FFFFFF',
  elevated: '#EEEFF4',
  border:   'rgba(0,0,0,0.08)',
  borderHi: 'rgba(0,0,0,0.15)',
  text:     '#111118',
  sub:      '#52526A',
  dim:      '#8080A0',
  ghost:    '#A8A8C0',
  indigo:   '#5254C8',
  violet:   '#7C3AED',
  emerald:  '#059669',
  rose:     '#E11D48',
  amber:    '#D97706',
  cyan:     '#0891B2',
  teal:     '#0D9488',
  pink:     '#DB2777',
  sky:      '#0284C7',
} as const;

const FONT = `var(--font-jakarta, 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif)`;
const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

// ─── Data types ───────────────────────────────────────────────────────────────
interface DashboardData {
  ov:    { pageViews: number; uniqueVisitors: number; sessions: number; contacts: number };
  prev:  { pageViews: number; uniqueVisitors: number; sessions: number; contacts: number };
  bounce: number; prevBounce: number;
  dur: number; pps: number;
  nvr:    { type: string; count: number }[];
  topPages:  { page: string; views: number }[];
  pagesTime: { page: string; avgTime: number }[];
  entryPages: { page: string; sessions: number }[];
  exitPages:  { page: string; sessions: number }[];
  topBlog:   { slug: string; title: string; category?: string; views: number }[];
  topCTAs:   { label: string; location?: string; clicks: number }[];
  navClicks: { label: string; clicks: number }[];
  countries: { country: string; count: number }[];
  devices:   { device: string; count: number }[];
  os:        { os: string; count: number }[];
  browsers:  { browser: string; count: number }[];
  sources:   { source: string; count: number }[];
  utmSources: { source: string; medium: string; campaign: string; sessions: number }[];
  leads:  { name?: string; email?: string; company?: string; timestamp?: string; created_at?: string; message?: string }[];
  events: { event: string; count: number }[];
  daily:  { date: string; views: number }[];
  hourly: { hour: number; views: number }[];
  dow:    { day: number | string; views: number }[];
  scroll: { depth: number; sessions: number }[];
  funnel: { visitors: number; ctaClicks: number; formStarts: number; formSubmits: number };
  vitals: { metric: string; avg: number; p75: number }[];
  productBreakdown: { page: string; feature: string; views: number }[];
  sessions: SessionRec[];
  companyVisitors: { company: string; org: string; city: string; country: string; visitors: number; lastSeen: string }[];
  visitorsByIP: { ip: string; company: string; city: string; country: string; region: string; pageViews: number; sessions: number; lastSeen: string }[];
}

interface Props { data: DashboardData; days: number; phBase: string; apiOk: boolean; apiError?: string; }

// ─── Utils ────────────────────────────────────────────────────────────────────
const pct  = (v: number, t: number) => (t ? Math.round((v / t) * 100) : 0);
const delta = (cur: number, prev: number) => (prev ? Math.round(((cur - prev) / prev) * 100) : null);

function fmtDur(s: number) {
  if (!s) return '—';
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60), r = s % 60;
  return r ? `${m}m ${r}s` : `${m}m`;
}

function timeAgo(ts?: string) {
  if (!ts) return '—';
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
  India: '🇮🇳', 'United States': '🇺🇸', 'United Kingdom': '🇬🇧', Germany: '🇩🇪',
  France: '🇫🇷', Canada: '🇨🇦', Australia: '🇦🇺', Singapore: '🇸🇬',
  Japan: '🇯🇵', Netherlands: '🇳🇱', Switzerland: '🇨🇭', Sweden: '🇸🇪',
  Brazil: '🇧🇷', UAE: '🇦🇪', 'South Korea': '🇰🇷', China: '🇨🇳',
  Indonesia: '🇮🇩', Israel: '🇮🇱', Spain: '🇪🇸', Italy: '🇮🇹',
};

const codeToFlag = (code: string) =>
  code.length === 2
    ? code.toUpperCase().split('').map(c => String.fromCodePoint(0x1F1E6 + c.charCodeAt(0) - 65)).join('')
    : '🌐';

const VITAL_T: Record<string, [number, number]> = {
  LCP: [2500, 4000], FID: [100, 300], INP: [200, 500],
  CLS: [0.1, 0.25], FCP: [1800, 3000], TTFB: [800, 1800],
};
const vitalColor = (m: string, v: number) => {
  const t = VITAL_T[m]; if (!t) return C.dim;
  return v <= t[0] ? C.emerald : v <= t[1] ? C.amber : C.rose;
};
const fmtVital = (m: string, v: number) =>
  m === 'CLS' ? v.toFixed(3) : v >= 1000 ? `${(v / 1000).toFixed(2)}s` : `${Math.round(v)}ms`;

// ─── AnimatedNumber ───────────────────────────────────────────────────────────
function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || value === 0) { setDisplay(value); return; }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [isInView, value]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {display.toLocaleString()}
    </span>
  );
}

// ─── Scroll-reveal section ────────────────────────────────────────────────────
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Card (double-bezel pattern) ──────────────────────────────────────────────
function Card({ children, style, glow }: { children: React.ReactNode; style?: React.CSSProperties; glow?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: 1,
        background: hovered ? `rgba(0,0,0,0.04)` : `rgba(0,0,0,0.025)`,
        borderRadius: 14,
        border: `1px solid ${hovered ? C.borderHi : C.border}`,
        transition: 'background 200ms ease, border-color 200ms ease, box-shadow 200ms ease',
        boxShadow: hovered
          ? '0 4px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)'
          : '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.04)',
        position: 'relative',
        ...style,
      }}
    >
      <div style={{
        background: C.surface,
        borderRadius: 13,
        padding: '20px 24px',
        height: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {glow && (
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 13, pointerEvents: 'none',
            background: `radial-gradient(ellipse 140% 80% at 50% -10%, ${glow}10, transparent 70%)`,
          }} />
        )}
        {children}
      </div>
    </div>
  );
}

// ─── Section label ────────────────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontSize: 10, fontWeight: 700, color: C.dim,
      letterSpacing: '0.12em', textTransform: 'uppercase',
      display: 'block', marginBottom: 18,
    }}>
      {children}
    </span>
  );
}

// ─── Trend badge ──────────────────────────────────────────────────────────────
function Trend({ d, invert = false }: { d: number | null; invert?: boolean }) {
  if (d === null) return null;
  const good = invert ? d <= 0 : d >= 0;
  const color = good ? C.emerald : C.rose;
  return (
    <span style={{
      fontSize: 11, fontWeight: 700, color,
      background: `${color}14`, borderRadius: 6,
      padding: '2px 7px', display: 'inline-flex', alignItems: 'center', gap: 3,
    }}>
      <span>{d >= 0 ? '↑' : '↓'}</span>
      <span>{Math.abs(d)}%</span>
    </span>
  );
}

// ─── Animated horizontal bar ──────────────────────────────────────────────────
function HBar({ v, t, color = C.indigo, height = 4 }: { v: number; t: number; color?: string; height?: number }) {
  const p = pct(v, t || 1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} style={{ background: 'rgba(0,0,0,0.08)', borderRadius: 3, height, flex: 1, overflow: 'hidden' }}>
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${Math.max(p, v ? 2 : 0)}%` } : {}}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        style={{ background: color, borderRadius: 3, height }}
      />
    </div>
  );
}

// ─── Sparkline ────────────────────────────────────────────────────────────────
function Sparkline({ data, color = C.indigo }: { data: { views: number }[]; color?: string }) {
  if (data.length < 2) return null;
  const W = 60, H = 20, max = Math.max(...data.map(d => d.views), 1);
  const pts = data.map((d, i) => `${(i / (data.length - 1)) * W},${H - (d.views / max) * H * 0.9}`).join(' ');
  return (
    <svg width={W} height={H} style={{ display: 'block', flexShrink: 0 }}>
      <defs>
        <linearGradient id={`sg-${color.replace('#', '')}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={color} stopOpacity={0.3} />
          <stop offset="100%" stopColor={color} stopOpacity={1} />
        </linearGradient>
      </defs>
      <polyline points={pts} fill="none" stroke={`url(#sg-${color.replace('#', '')})`} strokeWidth={1.5} strokeLinejoin="round" />
    </svg>
  );
}

// ─── Heat grid ────────────────────────────────────────────────────────────────
function HeatGrid({ data, color = C.indigo }: { data: { hour: number; views: number }[]; color?: string }) {
  const max = Math.max(...data.map(d => d.views), 1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: 3, marginBottom: 4 }}>
      {data.map(({ hour, views }, i) => (
        <motion.div
          key={hour}
          title={`${String(hour).padStart(2, '0')}:00 — ${views} views`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: views ? 0.15 + (views / max) * 0.85 : 0.08 } : {}}
          transition={{ duration: 0.4, delay: i * 0.012, ease: 'easeOut' }}
          style={{
            aspectRatio: '1', borderRadius: 3,
            background: views ? color : 'rgba(0,0,0,0.07)',
          }}
        />
      ))}
    </div>
  );
}

// ─── Vertical bar chart ───────────────────────────────────────────────────────
function VBars({ data, color = C.indigo }: { data: { label: string | number; v: number }[]; color?: string }) {
  const max = Math.max(...data.map(d => d.v), 1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const BH = 56;
  return (
    <div ref={ref} style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: BH + 18 }}>
      {data.map((d, i) => {
        const h = max ? Math.max((d.v / max) * BH, d.v ? 3 : 0) : 0;
        return (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <div style={{ width: '100%', height: BH, display: 'flex', alignItems: 'flex-end' }}>
              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: h } : {}}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.05 }}
                style={{ width: '100%', background: color, borderRadius: '3px 3px 2px 2px', opacity: 0.3 + (d.v / max) * 0.7 }}
              />
            </div>
            <span style={{ fontSize: 9, color: C.ghost, whiteSpace: 'nowrap' }}>{d.label}</span>
          </div>
        );
      })}
    </div>
  );
}

// ─── SVG Donut ────────────────────────────────────────────────────────────────
function Donut({ slices }: { slices: { label: string; value: number; color: string }[] }) {
  const total = slices.reduce((s, d) => s + d.value, 0);
  const R = 38, r = 22, cx = 48, cy = 48;
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
      <svg width={96} height={96} viewBox="0 0 96 96" style={{ flexShrink: 0 }}>
        {total === 0
          ? <circle cx={cx} cy={cy} r={R} fill="none" stroke={C.ghost} strokeWidth={R - r} />
          : arcs.map(arc => <path key={arc.label} d={arc.path} fill={arc.color} />)}
        <circle cx={cx} cy={cy} r={r - 2} fill={C.surface} />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {arcs.map(arc => (
          <div key={arc.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: arc.color, flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: C.sub, flex: 1 }}>{arc.label}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.text, fontVariantNumeric: 'tabular-nums' }}>{arc.value.toLocaleString()}</span>
            <span style={{ fontSize: 11, color: C.dim, width: 32, textAlign: 'right' }}>{arc.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Soon note ────────────────────────────────────────────────────────────────
function Soon({ text }: { text: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 10, marginTop: 12,
      padding: '10px 14px', background: C.elevated, borderRadius: 8,
      border: `1px solid ${C.border}`,
    }}>
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
        <circle cx="8" cy="8" r="7" stroke={C.dim} strokeWidth="1.5" />
        <path d="M8 5v3.5L10 10" stroke={C.dim} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span style={{ fontSize: 12, color: C.dim, lineHeight: 1.6 }}>{text}</span>
    </div>
  );
}

// ─── Pill badge ───────────────────────────────────────────────────────────────
function Pill({ label, color }: { label: string; color: string }) {
  return (
    <span style={{
      fontSize: 9, fontWeight: 700, color,
      background: `${color}14`, border: `1px solid ${color}28`,
      borderRadius: 20, padding: '2px 8px',
      letterSpacing: '0.08em', textTransform: 'uppercase',
    }}>
      {label}
    </span>
  );
}

// ─── Table header cell ────────────────────────────────────────────────────────
const TH = ({ children }: { children: React.ReactNode }) => (
  <th style={{
    fontSize: 10, fontWeight: 700, color: C.dim,
    textTransform: 'uppercase', letterSpacing: '0.09em',
    padding: '6px 12px', borderBottom: `1px solid ${C.border}`,
    textAlign: 'left', whiteSpace: 'nowrap',
  }}>{children}</th>
);

// ─── Stagger container ────────────────────────────────────────────────────────
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

// ─── MAIN DASHBOARD ───────────────────────────────────────────────────────────
export default function AnalyticsDashboard({ data, days, phBase, apiOk, apiError }: Props) {
  const {
    ov, prev, bounce, prevBounce, dur, pps, nvr,
    topPages, pagesTime, entryPages, exitPages,
    topBlog, topCTAs, navClicks,
    countries, devices, os, browsers, sources, utmSources,
    leads, events, daily, hourly, dow, scroll,
    funnel, vitals, productBreakdown, sessions,
    companyVisitors,
    visitorsByIP,
  } = data;

  const dViews    = delta(ov.pageViews,     prev.pageViews);
  const dVisitors = delta(ov.uniqueVisitors, prev.uniqueVisitors);
  const dSessions = delta(ov.sessions,      prev.sessions);
  const dContacts = delta(ov.contacts,      prev.contacts);
  const dBounce   = delta(bounce,           prevBounce);

  const tSrc  = sources.reduce((s, d) => s + d.count, 0);
  const tDev  = devices.reduce((s, d) => s + d.count, 0);
  const tOS   = os.reduce((s, d) => s + d.count, 0);
  const tBrow = browsers.reduce((s, d) => s + d.count, 0);
  const tCtr  = countries.reduce((s, d) => s + d.count, 0);
  const newV  = nvr.find(r => r.type === 'New')?.count ?? 0;
  const retV  = nvr.find(r => r.type === 'Returning')?.count ?? 0;

  const productPages = Array.from(new Set(productBreakdown.map(r => r.page))).map(page => ({
    page,
    views: productBreakdown.filter(r => r.page === page).reduce((s, r) => s + r.views, 0),
    features: productBreakdown.filter(r => r.page === page),
  })).sort((a, b) => b.views - a.views);

  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.text, fontFamily: FONT, position: 'relative' }}>

      {/* Ambient background orbs */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', width: 700, height: 700, top: -250, right: -150, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(82,84,200,0.07) 0%, transparent 65%)',
        }} />
        <div style={{
          position: 'absolute', width: 500, height: 500, bottom: 100, left: -150, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 65%)',
        }} />
        <div style={{
          position: 'absolute', width: 400, height: 400, top: '40%', left: '40%', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(5,150,105,0.04) 0%, transparent 65%)',
        }} />
      </div>

      {/* ── Sticky topbar ──────────────────────────────────────────────────── */}
      <div style={{
        position: 'sticky', top: 64, zIndex: 40, height: 52,
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        background: 'rgba(245,245,248,0.92)',
        borderBottom: `1px solid ${C.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <Link href="/" style={{ color: C.dim, fontSize: 13, textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6, transition: 'color 150ms ease' }}>
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M10 13L5 8l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            cerulea.io
          </Link>
          <div style={{ width: 1, height: 16, background: C.border }} />
          <span style={{ fontSize: 14, fontWeight: 700, color: C.text, letterSpacing: '-0.01em' }}>Analytics</span>
        </div>

        {/* Time range pills */}
        <div style={{ display: 'flex', gap: 2, background: 'rgba(0,0,0,0.07)', borderRadius: 9, padding: 2 }}>
          {([7, 30, 90] as const).map(d => (
            <Link key={d} href={`/analytics?days=${d}`} style={{
              padding: '5px 14px', borderRadius: 7, fontSize: 12, fontWeight: 600,
              textDecoration: 'none', transition: 'all 180ms ease',
              background: days === d ? C.surface : 'transparent',
              color: days === d ? C.text : C.sub,
              boxShadow: days === d ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
            }}>
              {d === 7 ? '7d' : d === 30 ? '30d' : '90d'}
            </Link>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 28px 100px', position: 'relative', zIndex: 1 }}>

        {/* ── API health warning ────────────────────────────────────────── */}
        {!apiOk && (
          <div style={{
            marginBottom: 20, padding: '14px 20px', borderRadius: 12,
            background: `${C.amber}12`, border: `1px solid ${C.amber}35`,
            display: 'flex', alignItems: 'flex-start', gap: 12,
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
              <path d="M8 1L15 14H1L8 1Z" stroke={C.amber} strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M8 6v3M8 11v.5" stroke={C.amber} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.amber, marginBottom: 4 }}>
                PostHog API returned an error — all widgets show empty data
              </div>
              <div style={{ fontSize: 12, color: C.sub, lineHeight: 1.6 }}>
                Your <code style={{ fontFamily: 'monospace', background: 'rgba(0,0,0,0.07)', borderRadius: 4, padding: '1px 5px' }}>POSTHOG_PERSONAL_API_KEY</code> may be wrong or missing permissions.
                Go to PostHog → your avatar → <strong>Personal API Keys</strong> and create a key with <em>Read</em> access for project <strong>332348</strong>.
                Then update the Vercel env var and redeploy.
                {apiError && <div style={{ marginTop: 6, fontFamily: 'monospace', fontSize: 11, color: C.dim, wordBreak: 'break-all' }}>{apiError}</div>}
              </div>
            </div>
          </div>
        )}

        {/* ── KPI grid (stagger) ────────────────────────────────────────── */}
        <motion.div variants={stagger} initial="hidden" animate="show"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 12 }}>
          {[
            { label: 'Page Views',       value: ov.pageViews,      d: dViews,    color: C.indigo, spark: true  },
            { label: 'Unique Visitors',  value: ov.uniqueVisitors, d: dVisitors, color: C.violet, spark: false },
            { label: 'Sessions',         value: ov.sessions,       d: dSessions, color: C.cyan,   spark: false },
            { label: 'Contact Leads',    value: ov.contacts,       d: dContacts, color: C.emerald,spark: false },
          ].map(({ label, value, d: dl, color, spark }) => (
            <motion.div key={label} variants={item}>
              <Card glow={color} style={{ height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: C.dim, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</span>
                  <Trend d={dl} />
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
                  <div style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: C.text }}>
                    <AnimatedNumber value={value} />
                  </div>
                  {spark && <Sparkline data={daily} color={color} />}
                </div>
                <div style={{ marginTop: 10, fontSize: 11, color: C.dim }}>vs prev {days}d</div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, borderRadius: '0 0 13px 13px', background: color, opacity: 0.4 }} />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={stagger} initial="hidden" animate="show"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 28 }}>
          {[
            { label: 'Bounce Rate',      value: `${bounce}%`,                d: dBounce, invert: true,  color: C.amber },
            { label: 'Avg Session',      value: fmtDur(dur),                 d: null,    invert: false, color: C.teal  },
            { label: 'Pages / Session',  value: pps ? pps.toFixed(1) : '—', d: null,    invert: false, color: C.sky   },
            { label: 'New Visitors',     value: newV.toLocaleString(),       d: null,    invert: false, color: C.pink  },
          ].map(({ label, value, d: dl, invert, color }) => (
            <motion.div key={label} variants={item}>
              <Card glow={color} style={{ height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: C.dim, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</span>
                  {dl !== null && <Trend d={dl} invert={invert} />}
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: C.text, fontVariantNumeric: 'tabular-nums' }}>{value}</div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, borderRadius: '0 0 13px 13px', background: color, opacity: 0.35 }} />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Daily views ───────────────────────────────────────────────── */}
        <Reveal>
          <Card style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div>
                <Label>Daily Page Views</Label>
              </div>
              <span style={{ fontSize: 12, color: C.dim, fontVariantNumeric: 'tabular-nums' }}>
                {ov.pageViews.toLocaleString()} total · {days}d
              </span>
            </div>
            {daily.length < 2
              ? <div style={{ height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Soon text="Appears within minutes of your first visitor with PostHog configured." />
                </div>
              : <ViewsAreaChart data={daily} color={C.indigo} />
            }
          </Card>
        </Reveal>

        {/* ── Conversion funnel ─────────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <Card style={{ marginBottom: 20 }}>
            <Label>Conversion Funnel</Label>
            <FunnelChart steps={[
              { label: 'Visitors',    sublabel: 'Unique people',      value: funnel.visitors,    color: C.indigo  },
              { label: 'CTA Clicks',  sublabel: 'Engaged with CTAs',  value: funnel.ctaClicks,   color: C.violet  },
              { label: 'Form Start',  sublabel: 'Opened contact',     value: funnel.formStarts,  color: C.amber   },
              { label: 'Submitted',   sublabel: 'Sent enquiry',       value: funnel.formSubmits, color: C.emerald },
            ]} />
            {funnel.visitors === 0 && (
              <Soon text="Appears as visitors engage with CTAs. Typically within hours of launch." />
            )}
          </Card>
        </Reveal>

        {/* ── Top pages + Traffic sources ───────────────────────────────── */}
        <Reveal delay={0.05}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 12, marginBottom: 20 }}>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <Label>Top Pages</Label>
                <span style={{ fontSize: 10, color: C.ghost, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Avg Time</span>
              </div>
              {topPages.length === 0
                ? <Soon text="Appears within minutes of the first page view." />
                : topPages.map(({ page, views }) => {
                    const t = pagesTime.find(p => p.page === page);
                    return (
                      <div key={page} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                        <span style={{ fontSize: 12, color: C.sub, fontFamily: 'monospace', width: 160, flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={page}>{page}</span>
                        <HBar v={views} t={topPages[0]?.views ?? 1} color={C.indigo} />
                        <span style={{ fontSize: 12, fontWeight: 700, color: C.text, width: 36, textAlign: 'right', flexShrink: 0, fontVariantNumeric: 'tabular-nums' }}>{views}</span>
                        <span style={{ fontSize: 11, color: C.dim, width: 44, textAlign: 'right', flexShrink: 0 }}>{t ? fmtDur(t.avgTime) : '—'}</span>
                      </div>
                    );
                  })}
            </Card>
            <Card>
              <Label>Traffic Sources</Label>
              {sources.length === 0
                ? <Soon text="Appears once visitors arrive from search, social, or direct." />
                : sources.map(({ source, count }) => (
                  <div key={source} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <span style={{ fontSize: 12, color: C.sub, width: 100, flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{source}</span>
                    <HBar v={count} t={tSrc} color={C.violet} />
                    <span style={{ fontSize: 11, fontWeight: 700, color: C.text, width: 32, textAlign: 'right', flexShrink: 0 }}>{pct(count, tSrc)}%</span>
                  </div>
                ))}
            </Card>
          </div>
        </Reveal>

        {/* ── Entry + Exit pages ────────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
            <Card>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <Label>Entry Pages</Label>
                <Pill label="Landing" color={C.emerald} />
              </div>
              {entryPages.length === 0
                ? <Soon text="Shows where sessions begin. Appears after the first sessions are recorded." />
                : entryPages.map(({ page, sessions: s }) => (
                  <div key={page} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <span style={{ fontSize: 12, color: C.sub, fontFamily: 'monospace', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{page}</span>
                    <HBar v={s} t={entryPages[0]?.sessions ?? 1} color={C.emerald} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: C.text, width: 32, textAlign: 'right', flexShrink: 0, fontVariantNumeric: 'tabular-nums' }}>{s}</span>
                  </div>
                ))}
            </Card>
            <Card>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <Label>Exit Pages</Label>
                <Pill label="Drop-off" color={C.rose} />
              </div>
              {exitPages.length === 0
                ? <Soon text="Shows where users leave. Useful for identifying high drop-off pages." />
                : exitPages.map(({ page, sessions: s }) => (
                  <div key={page} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <span style={{ fontSize: 12, color: C.sub, fontFamily: 'monospace', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{page}</span>
                    <HBar v={s} t={exitPages[0]?.sessions ?? 1} color={C.rose} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: C.text, width: 32, textAlign: 'right', flexShrink: 0, fontVariantNumeric: 'tabular-nums' }}>{s}</span>
                  </div>
                ))}
            </Card>
          </div>
        </Reveal>

        {/* ── Scroll + Hourly + DOW ─────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 20 }}>
            <Card>
              <Label>Scroll Depth</Label>
              {scroll.map(({ depth, sessions: s }) => {
                const p = ov.sessions ? pct(s, ov.sessions) : 0;
                const depthColor: Record<number, string> = { 25: C.indigo, 50: C.violet, 75: C.teal, 90: C.amber, 100: C.emerald };
                const dc = depthColor[depth] ?? C.indigo;
                return (
                  <div key={depth} style={{ marginBottom: 14 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ fontSize: 12, color: C.sub }}>{depth}%</span>
                      <div style={{ display: 'flex', gap: 10 }}>
                        <span style={{ fontSize: 11, color: C.ghost, fontVariantNumeric: 'tabular-nums' }}>{s.toLocaleString()}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: dc, fontVariantNumeric: 'tabular-nums' }}>{p}%</span>
                      </div>
                    </div>
                    <HBar v={s} t={ov.sessions || 1} color={dc} height={5} />
                  </div>
                );
              })}
              {scroll.every(d => d.sessions === 0) && (
                <Soon text="Appears after visitors scroll. Usually within 1 hour of real traffic." />
              )}
            </Card>
            <Card>
              <Label>Hourly Traffic (IST)</Label>
              <HeatGrid data={hourly} color={C.indigo} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                {['0h', '6h', '12h', '18h', '23h'].map(l => (
                  <span key={l} style={{ fontSize: 9, color: C.ghost }}>{l}</span>
                ))}
              </div>
              {hourly.every(d => d.views === 0) && (
                <Soon text="Shows traffic by hour. Useful after 50+ sessions (~3–5 days)." />
              )}
            </Card>
            <Card>
              <Label>Day of Week</Label>
              <VBars
                data={dow.map(d => ({ label: (['S', 'M', 'T', 'W', 'T', 'F', 'S'][Number(d.day)] ?? d.day) as string, v: d.views }))}
                color={C.teal}
              />
              {dow.every(d => d.views === 0) && (
                <Soon text="Meaningful after 7+ days of traffic to cover a full week." />
              )}
            </Card>
          </div>
        </Reveal>

        {/* ── Audience ─────────────────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 20 }}>
            <Card>
              <Label>New vs Returning</Label>
              <Donut slices={[
                { label: 'New',       value: newV, color: C.indigo  },
                { label: 'Returning', value: retV, color: C.violet  },
              ]} />
              {(newV + retV) === 0 && <Soon text="Appears after the first visitors arrive." />}
            </Card>
            <Card>
              <Label>Devices</Label>
              {devices.length === 0
                ? <Soon text="Appears alongside the first page views." />
                : devices.map(({ device, count }) => (
                  <div key={device} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <span style={{ fontSize: 12, color: C.sub, width: 80, flexShrink: 0 }}>{device}</span>
                    <HBar v={count} t={tDev} color={C.sky} />
                    <span style={{ fontSize: 11, fontWeight: 700, color: C.text, width: 30, textAlign: 'right', flexShrink: 0 }}>{pct(count, tDev)}%</span>
                  </div>
                ))}
            </Card>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Card>
                <Label>Operating System</Label>
                {os.length === 0
                  ? <Soon text="Appears with first page views." />
                  : os.slice(0, 5).map(({ os: o, count }) => (
                    <div key={o} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <span style={{ fontSize: 12, color: C.sub, width: 70, flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{o}</span>
                      <HBar v={count} t={tOS} color={C.amber} />
                      <span style={{ fontSize: 11, fontWeight: 700, color: C.text, width: 28, textAlign: 'right', flexShrink: 0 }}>{pct(count, tOS)}%</span>
                    </div>
                  ))}
              </Card>
              <Card>
                <Label>Browsers</Label>
                {browsers.length === 0
                  ? <Soon text="Appears with first page views." />
                  : browsers.slice(0, 4).map(({ browser, count }) => (
                    <div key={browser} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <span style={{ fontSize: 12, color: C.sub, width: 70, flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{browser}</span>
                      <HBar v={count} t={tBrow} color={C.teal} />
                      <span style={{ fontSize: 11, fontWeight: 700, color: C.text, width: 28, textAlign: 'right', flexShrink: 0 }}>{pct(count, tBrow)}%</span>
                    </div>
                  ))}
              </Card>
            </div>
          </div>
        </Reveal>

        {/* ── Geography ────────────────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <Card style={{ marginBottom: 20 }}>
            <Label>Geography</Label>
            {countries.length === 0
              ? <Soon text="Geo data appears after the first sessions. PostHog derives location from IP — no precise coordinates stored." />
              : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '10px 48px' }}>
                  {countries.map(({ country, count }) => (
                    <div key={country} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 18, width: 24, flexShrink: 0, lineHeight: 1 }}>{FLAGS[country] ?? '🌐'}</span>
                      <span style={{ fontSize: 13, color: C.sub, width: 130, flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{country}</span>
                      <HBar v={count} t={tCtr} color={C.indigo} />
                      <span style={{ fontSize: 12, fontWeight: 700, color: C.text, width: 32, textAlign: 'right', flexShrink: 0, fontVariantNumeric: 'tabular-nums' }}>{count}</span>
                    </div>
                  ))}
                </div>
              )}
          </Card>
        </Reveal>

        {/* ── Company / IP Visitors ─────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <Card style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Label>Company Visitors</Label>
                {companyVisitors.length > 0 && (
                  <span style={{ fontSize: 11, fontWeight: 700, color: C.teal, background: `${C.teal}12`, border: `1px solid ${C.teal}25`, borderRadius: 6, padding: '2px 8px', marginTop: -16 }}>
                    {companyVisitors.length} identified
                  </span>
                )}
              </div>
              <span style={{ fontSize: 11, color: C.dim, maxWidth: 280, textAlign: 'right', lineHeight: 1.5 }}>
                Companies identified via IP lookup (ipinfo.io)
              </span>
            </div>
            {companyVisitors.length === 0
              ? (
                <Soon text="Companies are identified when a visitor's IP resolves to an org via ipinfo.io. Appears once real traffic arrives — ISP-only IPs (residential / mobile) are not matched." />
              ) : (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                    <thead>
                      <tr>
                        <TH>Company / Organisation</TH>
                        <TH>ISP / Network</TH>
                        <TH>Location</TH>
                        <TH>Visits</TH>
                        <TH>Last Seen</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {companyVisitors.map((row, i) => (
                        <tr key={i} style={{ borderBottom: `1px solid ${C.border}`, transition: 'background 120ms ease' }}
                          onMouseEnter={e => (e.currentTarget.style.background = C.elevated)}
                          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                          <td style={{ padding: '10px 12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                              <div style={{ width: 30, height: 30, borderRadius: 8, background: `${C.teal}14`, border: `1px solid ${C.teal}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: C.teal, flexShrink: 0, letterSpacing: '-0.01em' }}>
                                {row.company.charAt(0).toUpperCase()}
                              </div>
                              <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{row.company}</span>
                            </div>
                          </td>
                          <td style={{ padding: '10px 12px', fontSize: 12, color: C.dim, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {row.org || '—'}
                          </td>
                          <td style={{ padding: '10px 12px', fontSize: 13, color: C.sub, whiteSpace: 'nowrap' }}>
                            {row.country
                              ? `${codeToFlag(row.country)} ${[row.city, row.country].filter(Boolean).join(', ')}`
                              : '—'}
                          </td>
                          <td style={{ padding: '10px 12px', fontSize: 14, fontWeight: 800, color: C.teal, fontVariantNumeric: 'tabular-nums' }}>
                            {row.visitors}
                          </td>
                          <td style={{ padding: '10px 12px', fontSize: 12, color: C.ghost, whiteSpace: 'nowrap' }}>
                            {timeAgo(row.lastSeen)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
          </Card>
        </Reveal>

        {/* ── IP Visitor Intelligence ───────────────────────────────────── */}
        <Reveal delay={0.05}>
          <Card style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Label>IP Visitor Intelligence</Label>
                {visitorsByIP.length > 0 && (
                  <span style={{ fontSize: 11, fontWeight: 700, color: C.violet, background: `${C.violet}12`, border: `1px solid ${C.violet}25`, borderRadius: 6, padding: '2px 8px', marginTop: -16 }}>
                    {visitorsByIP.length} unique IPs
                  </span>
                )}
              </div>
              <span style={{ fontSize: 11, color: C.dim }}>Per-IP page views, sessions & location</span>
            </div>
            {visitorsByIP.length === 0
              ? <Soon text="Appears once visitors arrive and their IP resolves. New visitors since the last deploy will populate this." />
              : (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
                    <thead>
                      <tr>
                        <TH>IP Address</TH>
                        <TH>Company / ISP</TH>
                        <TH>Location</TH>
                        <TH>Pages</TH>
                        <TH>Sessions</TH>
                        <TH>Last Seen</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {visitorsByIP.map((row, i) => (
                        <tr key={i} style={{ borderBottom: `1px solid ${C.border}`, transition: 'background 120ms ease' }}
                          onMouseEnter={e => (e.currentTarget.style.background = C.elevated)}
                          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                          <td style={{ padding: '10px 12px' }}>
                            <code style={{ fontSize: 12, fontFamily: 'monospace', color: C.text, fontWeight: 600, background: `${C.violet}0C`, border: `1px solid ${C.violet}20`, borderRadius: 5, padding: '2px 7px' }}>
                              {row.ip || '—'}
                            </code>
                          </td>
                          <td style={{ padding: '10px 12px', maxWidth: 220 }}>
                            <div style={{ fontSize: 13, fontWeight: 600, color: C.text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {row.company || <span style={{ color: C.ghost }}>Unknown</span>}
                            </div>
                          </td>
                          <td style={{ padding: '10px 12px', fontSize: 12, color: C.sub, whiteSpace: 'nowrap' }}>
                            {row.country
                              ? `${codeToFlag(row.country)} ${[row.city, row.region, row.country].filter(Boolean).join(', ')}`
                              : '—'}
                          </td>
                          <td style={{ padding: '10px 12px', fontSize: 14, fontWeight: 800, color: C.indigo, fontVariantNumeric: 'tabular-nums' }}>
                            {row.pageViews}
                          </td>
                          <td style={{ padding: '10px 12px', fontSize: 13, fontWeight: 600, color: C.violet, fontVariantNumeric: 'tabular-nums' }}>
                            {row.sessions}
                          </td>
                          <td style={{ padding: '10px 12px', fontSize: 12, color: C.ghost, whiteSpace: 'nowrap' }}>
                            {timeAgo(row.lastSeen)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
          </Card>
        </Reveal>

        {/* ── Session Recordings ────────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <Card style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <Label>Session Recordings</Label>
              <a href={`${phBase}/replay/home`} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 12, color: C.indigo, textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 5, opacity: 0.8 }}>
                All in PostHog
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
            {sessions.length === 0
              ? <Soon text="Recordings appear after your first visitors arrive. Each session is automatically captured when PostHog is active." />
              : (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                    <thead>
                      <tr>
                        <TH>{''}</TH><TH>Visitor</TH><TH>Duration</TH><TH>Clicks</TH>
                        <TH>Device · Browser</TH><TH>Country</TH><TH>When</TH><TH>{''}</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {sessions.map(rec => {
                        const p = rec.person?.properties ?? {};
                        const name = rec.person?.name, email = p.email;
                        return (
                          <tr key={rec.id} style={{ borderBottom: `1px solid ${C.border}`, transition: 'background 120ms ease' }}
                            onMouseEnter={e => (e.currentTarget.style.background = C.elevated)}
                            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                            <td style={{ padding: '10px 10px 10px 4px', width: 14 }}>
                              <div style={{ width: 6, height: 6, borderRadius: '50%', background: rec.viewed ? C.ghost : C.emerald }} />
                            </td>
                            <td style={{ padding: '10px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <div style={{ width: 28, height: 28, borderRadius: '50%', background: `${C.indigo}18`, border: `1px solid ${C.indigo}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: C.indigo, flexShrink: 0 }}>
                                  {initials(name, email)}
                                </div>
                                <div>
                                  <div style={{ fontSize: 13, color: C.text, fontWeight: 600 }}>{name || (email ? email.split('@')[0] : 'Anonymous')}</div>
                                  {email && <div style={{ fontSize: 11, color: C.dim }}>{email}</div>}
                                </div>
                              </div>
                            </td>
                            <td style={{ padding: '10px', fontSize: 13, fontWeight: 600, color: C.text, whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>{fmtDur(rec.duration)}</td>
                            <td style={{ padding: '10px', fontSize: 13, color: C.sub, whiteSpace: 'nowrap' }}>
                              {rec.click_count ?? 0}
                              {(rec.console_error_count ?? 0) > 0 && (
                                <span style={{ marginLeft: 8, color: C.rose, fontSize: 10, fontWeight: 700 }}>✕ {rec.console_error_count}</span>
                              )}
                            </td>
                            <td style={{ padding: '10px', fontSize: 12, color: C.dim, whiteSpace: 'nowrap' }}>
                              {[p.$device_type, p.$browser].filter(Boolean).join(' · ') || '—'}
                            </td>
                            <td style={{ padding: '10px', fontSize: 12, color: C.sub, whiteSpace: 'nowrap' }}>
                              {p.$geoip_country_name ? `${FLAGS[p.$geoip_country_name] ?? '🌐'} ${p.$geoip_country_name}` : '—'}
                            </td>
                            <td style={{ padding: '10px', fontSize: 12, color: C.ghost, whiteSpace: 'nowrap' }}>{timeAgo(rec.start_time)}</td>
                            <td style={{ padding: '10px 4px 10px 10px' }}>
                              <a href={`${phBase}/replay/${rec.id}`} target="_blank" rel="noopener noreferrer"
                                style={{ fontSize: 12, fontWeight: 700, color: C.indigo, textDecoration: 'none', background: `${C.indigo}12`, border: `1px solid ${C.indigo}25`, borderRadius: 7, padding: '4px 10px', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 5, transition: 'background 150ms ease' }}>
                                <svg width="9" height="9" viewBox="0 0 16 16" fill="currentColor"><path d="M3 2l10 6-10 6V2z" /></svg>
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
          </Card>
        </Reveal>

        {/* ── Blog + CTAs + Nav ─────────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
            <Card>
              <Label>Blog Post Views</Label>
              {topBlog.length === 0
                ? <Soon text="Appears after the first blog post is viewed. Each view fires a blog_post_viewed event." />
                : topBlog.map(({ slug, title, category, views }) => (
                  <div key={slug} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <Link href={`/blog/${slug}`} style={{ fontSize: 13, color: C.text, fontWeight: 600, textDecoration: 'none', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</Link>
                      {category && <span style={{ fontSize: 11, color: C.ghost }}>{category}</span>}
                    </div>
                    <HBar v={views} t={topBlog[0]?.views ?? 1} color={C.amber} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: C.text, flexShrink: 0, width: 24, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{views}</span>
                  </div>
                ))}
            </Card>
            <Card>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
                <div>
                  <Label>CTA Clicks</Label>
                  {topCTAs.length === 0
                    ? <Soon text="Fires when users click tracked CTA buttons." />
                    : topCTAs.slice(0, 7).map(({ label: l, location, clicks }) => (
                      <div key={`${l}-${location}`} style={{ marginBottom: 10 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                          <span style={{ fontSize: 12, color: C.sub, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l}</span>
                          <span style={{ fontSize: 12, fontWeight: 700, color: C.emerald, flexShrink: 0, fontVariantNumeric: 'tabular-nums' }}>{clicks}</span>
                        </div>
                        {location && <div style={{ fontSize: 10, color: C.ghost }}>{location}</div>}
                      </div>
                    ))}
                </div>
                <div>
                  <Label>Nav Clicks</Label>
                  {navClicks.length === 0
                    ? <Soon text="Fires when users click navigation links." />
                    : navClicks.slice(0, 7).map(({ label: l, clicks }) => (
                      <div key={l} style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginBottom: 10 }}>
                        <span style={{ fontSize: 12, color: C.sub, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: C.amber, flexShrink: 0, fontVariantNumeric: 'tabular-nums' }}>{clicks}</span>
                      </div>
                    ))}
                </div>
              </div>
            </Card>
          </div>
        </Reveal>

        {/* ── Product Breakdown ─────────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <Card style={{ marginBottom: 20 }}>
            <Label>Product Page Engagement</Label>
            {productPages.length === 0
              ? <Soon text="Fires when users engage with product feature sections. Appears after product pages get traffic." />
              : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10 }}>
                  {productPages.slice(0, 8).map(({ page, views, features }) => (
                    <div key={page} style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 10, padding: '14px 18px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <span style={{ fontSize: 12, color: C.text, fontWeight: 700, fontFamily: 'monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 180 }}>{page}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: C.indigo, fontVariantNumeric: 'tabular-nums', flexShrink: 0 }}>{views}</span>
                      </div>
                      {features.slice(0, 3).map(({ feature, views: fv }) => (
                        <div key={feature} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <span style={{ fontSize: 11, color: C.dim, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 160 }}>{feature}</span>
                          <span style={{ fontSize: 11, color: C.ghost, flexShrink: 0, fontVariantNumeric: 'tabular-nums' }}>{fv}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
          </Card>
        </Reveal>

        {/* ── UTM Campaigns (conditional) ───────────────────────────────── */}
        {utmSources.length > 0 && (
          <Reveal delay={0.05}>
            <Card style={{ marginBottom: 20 }}>
              <Label>UTM Campaigns</Label>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead><tr><TH>Source</TH><TH>Medium</TH><TH>Campaign</TH><TH>Sessions</TH></tr></thead>
                <tbody>
                  {utmSources.map((u, i) => (
                    <tr key={i} style={{ borderBottom: `1px solid ${C.border}`, transition: 'background 120ms ease' }}
                      onMouseEnter={e => (e.currentTarget.style.background = C.elevated)}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                      <td style={{ fontSize: 13, color: C.text, fontWeight: 600, padding: '10px 12px' }}>{u.source}</td>
                      <td style={{ fontSize: 13, color: C.sub, padding: '10px 12px' }}>{u.medium}</td>
                      <td style={{ fontSize: 13, color: C.sub, padding: '10px 12px' }}>{u.campaign}</td>
                      <td style={{ fontSize: 13, fontWeight: 700, color: C.indigo, padding: '10px 12px', fontVariantNumeric: 'tabular-nums' }}>{u.sessions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </Reveal>
        )}

        {/* ── Web Vitals ────────────────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <Card style={{ marginBottom: 20 }}>
            <Label>Web Vitals</Label>
            {vitals.length === 0
              ? (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 10 }}>
                    {['LCP', 'INP', 'CLS', 'FCP', 'TTFB'].map(m => (
                      <div key={m} style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 10, padding: '14px 16px', opacity: 0.5 }}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: C.dim, letterSpacing: '0.08em', marginBottom: 10 }}>{m}</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: C.ghost, letterSpacing: '-0.03em' }}>—</div>
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
                      <div key={metric} style={{ background: `${color}08`, border: `1px solid ${color}22`, borderRadius: 10, padding: '14px 16px' }}>
                        <div style={{ fontSize: 10, fontWeight: 700, color, letterSpacing: '0.08em', marginBottom: 10 }}>{metric}</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: C.text, letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' }}>{fmtVital(metric, p75)}</div>
                        <div style={{ fontSize: 10, color: C.ghost, marginTop: 5 }}>avg {fmtVital(metric, avg)}</div>
                      </div>
                    );
                  })}
                </div>
              )}
          </Card>
        </Reveal>

        {/* ── Leads table ───────────────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <Card style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <Label>Contact Leads</Label>
              {leads.length > 0 && (
                <span style={{ fontSize: 12, fontWeight: 700, color: C.emerald, background: `${C.emerald}12`, border: `1px solid ${C.emerald}25`, borderRadius: 6, padding: '3px 10px' }}>
                  {leads.length} in last {days}d
                </span>
              )}
            </div>
            {leads.length === 0
              ? <Soon text="Appears after the first contact form submission." />
              : (
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead><tr><TH>Name</TH><TH>Email</TH><TH>Company</TH><TH>Submitted</TH></tr></thead>
                  <tbody>
                    {leads.map((lead, i) => (
                      <tr key={i} style={{ borderBottom: `1px solid ${C.border}`, transition: 'background 120ms ease' }}
                        onMouseEnter={e => (e.currentTarget.style.background = C.elevated)}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                        <td style={{ fontSize: 13, color: C.text, fontWeight: 600, padding: '10px 12px' }}>{lead.name || '—'}</td>
                        <td style={{ padding: '10px 12px' }}>
                          {lead.email
                            ? <a href={`mailto:${lead.email}`} style={{ color: C.indigo, textDecoration: 'none', fontSize: 13 }}>{lead.email}</a>
                            : <span style={{ color: C.ghost, fontSize: 13 }}>—</span>}
                        </td>
                        <td style={{ fontSize: 13, color: C.sub, padding: '10px 12px' }}>{lead.company || '—'}</td>
                        <td style={{ fontSize: 12, color: C.ghost, padding: '10px 12px' }}>{timeAgo(lead.timestamp || lead.created_at)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
          </Card>
        </Reveal>

        {/* ── Custom Events ─────────────────────────────────────────────── */}
        {events.length > 0 && (
          <Reveal delay={0.05}>
            <Card style={{ marginBottom: 20 }}>
              <Label>Other Events</Label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
                {events.map(({ event: ev, count }) => (
                  <div key={ev} style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 9, padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: C.dim, fontFamily: 'monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginRight: 8 }}>{ev}</span>
                    <span style={{ fontSize: 14, fontWeight: 800, color: C.text, flexShrink: 0, fontVariantNumeric: 'tabular-nums' }}>{count.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        )}

        {/* ── External Tools ────────────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <a href="https://clarity.microsoft.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
              <Card glow={C.amber}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: C.text, margin: '0 0 6px', letterSpacing: '-0.01em' }}>Heatmaps & Click Maps</p>
                    <Pill label="Microsoft Clarity" color={C.amber} />
                  </div>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: C.dim, flexShrink: 0, marginTop: 2 }}>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p style={{ fontSize: 13, color: C.dim, lineHeight: 1.65, margin: 0 }}>
                  Visual click maps, scroll heatmaps, rage-click detection, and session recordings with video playback.
                </p>
              </Card>
            </a>
            <a href={`${phBase}/replay/home`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
              <Card glow={C.indigo}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: C.text, margin: '0 0 6px', letterSpacing: '-0.01em' }}>Full PostHog Dashboard</p>
                    <Pill label="PostHog" color={C.indigo} />
                  </div>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: C.dim, flexShrink: 0, marginTop: 2 }}>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p style={{ fontSize: 13, color: C.dim, lineHeight: 1.65, margin: 0 }}>
                  Full analytics suite: funnels, cohorts, feature flags, A/B tests, and deeper session recording search.
                </p>
              </Card>
            </a>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
