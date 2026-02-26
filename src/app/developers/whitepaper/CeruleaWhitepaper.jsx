'use client';
import { useState, useEffect, useRef } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');

  :root {
    --navy: #0D2D4F;
    --navy-mid: #153d65;
    --teal: #0E7C86;
    --teal-light: #13a3b0;
    --teal-muted: #e8f4f6;
    --teal-border: #c5e3e8;
    --ink: #1a2535;
    --ink-mid: #374151;
    --ink-light: #6b7280;
    --surface: #f8fafc;
    --white: #ffffff;
    --rule: #e2e8f0;
    --gold: #c8922a;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .wp-root {
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    color: var(--ink);
    background: var(--surface);
    min-height: 100vh;
  }

  /* ── PROGRESS BAR ─────────────────────────────── */
  .wp-progress {
    position: fixed;
    top: 0; left: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--teal), var(--teal-light));
    z-index: 200;
    transition: width 0.1s linear;
  }

  /* ── STICKY NAV ───────────────────────────────── */
  .wp-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    background: rgba(13, 45, 79, 0.97);
    backdrop-filter: blur(12px);
    z-index: 100;
    border-bottom: 1px solid rgba(14,124,134,0.3);
  }
  .wp-nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .wp-nav-logo {
    font-family: 'DM Serif Display', serif;
    font-size: 1.25rem;
    color: var(--white);
    letter-spacing: 0.08em;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  .wp-nav-logo span {
    display: inline-block;
    width: 6px; height: 6px;
    background: var(--teal-light);
    border-radius: 50%;
  }
  .wp-nav-links {
    display: flex;
    gap: 0.25rem;
    list-style: none;
  }
  .wp-nav-links button {
    background: none;
    border: none;
    color: rgba(255,255,255,0.6);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding: 0.4rem 0.75rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .wp-nav-links button:hover,
  .wp-nav-links button.active {
    color: var(--white);
    background: rgba(14,124,134,0.25);
  }

  /* ── LAYOUT ───────────────────────────────────── */
  .wp-layout {
    display: grid;
    grid-template-columns: 220px 1fr;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 56px;
    min-height: 100vh;
    gap: 0;
  }

  /* ── SIDEBAR ──────────────────────────────────── */
  .wp-sidebar {
    position: sticky;
    top: 56px;
    height: calc(100vh - 56px);
    overflow-y: auto;
    padding: 2rem 1rem 2rem 1.5rem;
    border-right: 1px solid var(--rule);
    background: var(--white);
    scrollbar-width: none;
  }
  .wp-sidebar::-webkit-scrollbar { display: none; }
  .wp-sidebar-label {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-light);
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--rule);
  }
  .wp-sidebar-item {
    display: block;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.78rem;
    font-weight: 400;
    color: var(--ink-light);
    padding: 0.45rem 0.75rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.18s;
    line-height: 1.4;
    border-left: 2px solid transparent;
    margin-bottom: 2px;
  }
  .wp-sidebar-item:hover { color: var(--navy); background: var(--teal-muted); }
  .wp-sidebar-item.active {
    color: var(--teal);
    font-weight: 600;
    background: var(--teal-muted);
    border-left-color: var(--teal);
  }

  /* ── MAIN CONTENT ─────────────────────────────── */
  .wp-main {
    padding: 0;
    background: var(--surface);
  }

  /* ── HERO ─────────────────────────────────────── */
  .wp-hero {
    background: var(--navy);
    padding: 5rem 4rem 4rem;
    position: relative;
    overflow: hidden;
  }
  .wp-hero::before {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(14,124,134,0.18) 0%, transparent 70%);
    pointer-events: none;
  }
  .wp-hero::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--teal), transparent);
  }
  .wp-hero-meta {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--teal-light);
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .wp-hero-meta::before {
    content: '';
    display: inline-block;
    width: 24px; height: 2px;
    background: var(--teal-light);
  }
  .wp-hero-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(2.8rem, 5vw, 4rem);
    color: var(--white);
    line-height: 1.05;
    margin-bottom: 0.5rem;
    letter-spacing: -0.01em;
  }
  .wp-hero-subtitle {
    font-size: 1.15rem;
    font-weight: 300;
    color: rgba(255,255,255,0.65);
    margin-bottom: 2rem;
    max-width: 560px;
    line-height: 1.6;
  }
  .wp-hero-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }
  .wp-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    padding: 0.35rem 0.8rem;
    border-radius: 100px;
    border: 1px solid rgba(14,124,134,0.4);
    color: rgba(255,255,255,0.75);
    background: rgba(14,124,134,0.12);
  }

  /* ── SECTION ──────────────────────────────────── */
  .wp-section {
    padding: 3.5rem 4rem;
    border-bottom: 1px solid var(--rule);
    scroll-margin-top: 72px;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .wp-section.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .wp-section:last-child { border-bottom: none; }

  .wp-section-header {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 1.75rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--teal-border);
  }
  .wp-section-number {
    font-family: 'DM Serif Display', serif;
    font-size: 0.85rem;
    color: var(--teal);
    font-style: italic;
    min-width: 1.5rem;
  }
  .wp-h1 {
    font-family: 'DM Serif Display', serif;
    font-size: 1.9rem;
    color: var(--navy);
    line-height: 1.15;
    letter-spacing: -0.02em;
  }
  .wp-h2 {
    font-family: 'DM Serif Display', serif;
    font-size: 1.25rem;
    color: var(--navy);
    margin: 2rem 0 0.75rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid var(--rule);
  }
  .wp-p {
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--ink-mid);
    margin-bottom: 1rem;
    font-weight: 300;
  }
  .wp-p strong { font-weight: 600; color: var(--ink); }

  /* ── CALLOUT / QUOTE ──────────────────────────── */
  .wp-callout {
    margin: 1.75rem 0;
    padding: 1.25rem 1.5rem;
    border-left: 4px solid var(--teal);
    background: var(--teal-muted);
    border-radius: 0 8px 8px 0;
  }
  .wp-callout p {
    font-size: 0.95rem;
    font-style: italic;
    color: var(--navy);
    line-height: 1.7;
    font-weight: 400;
  }

  /* ── BULLETS ──────────────────────────────────── */
  .wp-list {
    list-style: none;
    margin: 0.75rem 0 1.25rem;
  }
  .wp-list li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--ink-mid);
    padding: 0.35rem 0;
    font-weight: 300;
  }
  .wp-list li::before {
    content: '';
    flex-shrink: 0;
    margin-top: 0.55rem;
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--teal);
  }

  /* ── COMPARISON TABLE ─────────────────────────── */
  .wp-table-wrap {
    margin: 1.5rem 0;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid var(--teal-border);
    box-shadow: 0 2px 12px rgba(13,45,79,0.06);
  }
  .wp-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.875rem;
  }
  .wp-table thead tr {
    background: var(--navy);
  }
  .wp-table thead th {
    padding: 0.85rem 1.1rem;
    text-align: left;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.85);
    border-right: 1px solid rgba(255,255,255,0.08);
  }
  .wp-table thead th:last-child { border-right: none; }
  .wp-table tbody tr:nth-child(even) { background: var(--teal-muted); }
  .wp-table tbody tr:nth-child(odd) { background: var(--white); }
  .wp-table tbody tr:hover { background: #d4edf0; }
  .wp-table td {
    padding: 0.8rem 1.1rem;
    color: var(--ink-mid);
    border-right: 1px solid var(--rule);
    line-height: 1.5;
    vertical-align: top;
    font-weight: 300;
  }
  .wp-table td:first-child { font-weight: 600; color: var(--navy); }
  .wp-table td:last-child { border-right: none; }

  /* ── KV TABLE (summary) ───────────────────────── */
  .wp-kv {
    margin: 1.5rem 0;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid var(--teal-border);
    box-shadow: 0 2px 12px rgba(13,45,79,0.06);
  }
  .wp-kv-row {
    display: grid;
    grid-template-columns: 200px 1fr;
    border-bottom: 1px solid var(--rule);
  }
  .wp-kv-row:last-child { border-bottom: none; }
  .wp-kv-row:nth-child(even) .wp-kv-key { background: var(--teal-muted); }
  .wp-kv-row:nth-child(even) .wp-kv-val { background: #f0f9fa; }
  .wp-kv-key {
    padding: 0.8rem 1.1rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--navy);
    background: var(--surface);
    border-right: 1px solid var(--rule);
    display: flex;
    align-items: center;
  }
  .wp-kv-val {
    padding: 0.8rem 1.1rem;
    font-size: 0.85rem;
    color: var(--ink-mid);
    background: var(--white);
    font-weight: 300;
    line-height: 1.5;
    display: flex;
    align-items: center;
  }

  /* ── AUDIENCE CARDS ───────────────────────────── */
  .wp-card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: 1.25rem 0;
  }
  .wp-card {
    padding: 1.5rem;
    border-radius: 10px;
    border: 1px solid var(--teal-border);
    background: var(--white);
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .wp-card:hover {
    box-shadow: 0 6px 24px rgba(13,45,79,0.1);
    transform: translateY(-2px);
  }
  .wp-card-icon {
    font-size: 1.4rem;
    margin-bottom: 0.6rem;
  }
  .wp-card-title {
    font-family: 'DM Serif Display', serif;
    font-size: 1rem;
    color: var(--navy);
    margin-bottom: 0.5rem;
  }
  .wp-card-body {
    font-size: 0.82rem;
    color: var(--ink-light);
    line-height: 1.6;
    font-weight: 300;
  }

  /* ── LIFECYCLE FLOW ───────────────────────────── */
  .wp-lifecycle {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
    margin: 1.5rem 0;
    background: var(--white);
    border: 1px solid var(--teal-border);
    border-radius: 10px;
    overflow: hidden;
  }
  .wp-lc-item {
    flex: 1;
    min-width: 90px;
    padding: 1rem 0.75rem;
    text-align: center;
    border-right: 1px solid var(--teal-border);
    position: relative;
  }
  .wp-lc-item:last-child { border-right: none; }
  .wp-lc-num {
    font-family: 'DM Serif Display', serif;
    font-size: 1.4rem;
    color: var(--teal-border);
    line-height: 1;
    margin-bottom: 0.3rem;
  }
  .wp-lc-label {
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--navy);
    letter-spacing: 0.04em;
  }
  .wp-lc-item:hover .wp-lc-num { color: var(--teal); }
  .wp-lc-item:hover { background: var(--teal-muted); }
  .wp-lc-item { transition: background 0.2s; }

  /* ── INTEGRATION TABLE ────────────────────────── */
  .wp-int-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    margin: 1.25rem 0;
  }
  .wp-int-card {
    border: 1px solid var(--rule);
    border-radius: 8px;
    overflow: hidden;
    background: var(--white);
  }
  .wp-int-header {
    background: var(--navy);
    padding: 0.55rem 0.9rem;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.85);
  }
  .wp-int-body {
    padding: 0.65rem 0.9rem;
    font-size: 0.8rem;
    color: var(--ink-light);
    line-height: 1.6;
    font-weight: 300;
  }

  /* ── DECISION CARDS ───────────────────────────── */
  .wp-decision-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    margin: 1.25rem 0;
  }
  .wp-decision-card {
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid var(--teal-border);
  }
  .wp-decision-head {
    padding: 0.9rem 1.25rem;
    font-family: 'DM Serif Display', serif;
    font-size: 1rem;
    color: var(--white);
  }
  .wp-decision-head.pub { background: var(--teal); }
  .wp-decision-head.priv { background: var(--navy); }
  .wp-decision-body {
    padding: 1rem 1.25rem;
    background: var(--white);
  }
  .wp-decision-body li {
    font-size: 0.83rem;
    color: var(--ink-mid);
    padding: 0.3rem 0;
    border-bottom: 1px solid var(--rule);
    font-weight: 300;
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
    line-height: 1.5;
    list-style: none;
  }
  .wp-decision-body li:last-child { border-bottom: none; }
  .wp-decision-body li::before {
    content: '';
    flex-shrink: 0;
    margin-top: 0.5rem;
    width: 5px; height: 5px;
    border-radius: 50%;
    background: var(--teal);
  }

  /* ── DISCLAIMER ───────────────────────────────── */
  .wp-disclaimer {
    background: var(--navy);
    padding: 2rem 4rem;
  }
  .wp-disclaimer-inner {
    max-width: 780px;
  }
  .wp-disclaimer-label {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--teal-light);
    margin-bottom: 0.75rem;
  }
  .wp-disclaimer p {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.45);
    line-height: 1.7;
    font-weight: 300;
  }

  /* ── CTA ──────────────────────────────────────── */
  .wp-cta {
    background: linear-gradient(135deg, var(--navy) 0%, #0a3d5c 100%);
    padding: 4rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .wp-cta::before {
    content: '';
    position: absolute;
    top: -80px; left: 50%;
    transform: translateX(-50%);
    width: 500px; height: 300px;
    background: radial-gradient(ellipse, rgba(14,124,134,0.2) 0%, transparent 70%);
    pointer-events: none;
  }
  .wp-cta-eyebrow {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--teal-light);
    margin-bottom: 1rem;
  }
  .wp-cta-title {
    font-family: 'DM Serif Display', serif;
    font-size: 2.2rem;
    color: var(--white);
    margin-bottom: 0.75rem;
    line-height: 1.2;
  }
  .wp-cta-sub {
    font-size: 0.95rem;
    color: rgba(255,255,255,0.55);
    margin-bottom: 2rem;
    font-weight: 300;
    max-width: 440px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }
  .wp-cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  .wp-btn-primary {
    background: var(--teal);
    color: var(--white);
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    padding: 0.8rem 1.75rem;
    border-radius: 6px;
    cursor: pointer;
    letter-spacing: 0.02em;
    transition: background 0.2s, transform 0.15s;
  }
  .wp-btn-primary:hover { background: var(--teal-light); transform: translateY(-1px); }
  .wp-btn-outline {
    background: transparent;
    color: rgba(255,255,255,0.8);
    border: 1px solid rgba(255,255,255,0.25);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0.8rem 1.75rem;
    border-radius: 6px;
    cursor: pointer;
    letter-spacing: 0.02em;
    transition: all 0.2s;
  }
  .wp-btn-outline:hover { border-color: rgba(255,255,255,0.5); color: var(--white); }

  @media (max-width: 900px) {
    .wp-layout { grid-template-columns: 1fr; }
    .wp-sidebar { display: none; }
    .wp-section, .wp-hero, .wp-disclaimer, .wp-cta { padding-left: 1.5rem; padding-right: 1.5rem; }
    .wp-card-grid, .wp-decision-grid, .wp-int-grid { grid-template-columns: 1fr; }
    .wp-nav-links { display: none; }
  }
`;

const NAV_SECTIONS = [
  { id: "abstract",      label: "Abstract" },
  { id: "for-whom",      label: "Who Is This For" },
  { id: "problem",       label: "The Problem" },
  { id: "solution",      label: "The Solution" },
  { id: "philosophy",    label: "Core Philosophy" },
  { id: "architecture",  label: "Architecture" },
  { id: "studio",        label: "Cerulea Studio" },
  { id: "governance",    label: "Governance" },
  { id: "security",      label: "Security" },
  { id: "intelligence",  label: "Cerulea Intelligence" },
  { id: "integrations",  label: "Integrations" },
  { id: "enterprise",    label: "Enterprise Model" },
  { id: "decision",      label: "Decision Guide" },
  { id: "summary",       label: "Platform Summary" },
];

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids]);
  return active;
}

function useScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const handler = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return pct;
}

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.08 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Section({ id, num, title, children }) {
  const ref = useReveal();
  return (
    <section id={id} className="wp-section" ref={ref}>
      <div className="wp-section-header">
        {num && <span className="wp-section-number">{num}</span>}
        <h2 className="wp-h1">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Callout({ children }) {
  return <div className="wp-callout"><p>{children}</p></div>;
}

function BulletList({ items }) {
  return (
    <ul className="wp-list">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

function CompTable({ cols, rows }) {
  return (
    <div className="wp-table-wrap">
      <table className="wp-table">
        <thead>
          <tr>{cols.map((c, i) => <th key={i}>{c}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function KVTable({ rows }) {
  return (
    <div className="wp-kv">
      {rows.map(([k, v], i) => (
        <div className="wp-kv-row" key={i}>
          <div className="wp-kv-key">{k}</div>
          <div className="wp-kv-val">{v}</div>
        </div>
      ))}
    </div>
  );
}

export default function CeruleaWhitepaper() {
  const progress = useScrollProgress();
  const active = useScrollSpy(NAV_SECTIONS.map(s => s.id));

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <style>{styles}</style>
      <div className="wp-root">
        {/* Progress bar */}
        <div className="wp-progress" style={{ width: `${progress}%` }} />

        {/* Nav */}
        <nav className="wp-nav">
          <div className="wp-nav-inner">
            <div className="wp-nav-logo">
              CERULEA <span />
            </div>
            <ul className="wp-nav-links">
              {NAV_SECTIONS.slice(0, 7).map(s => (
                <li key={s.id}>
                  <button
                    className={active === s.id ? "active" : ""}
                    onClick={() => scrollTo(s.id)}
                  >{s.label}</button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="wp-layout">
          {/* Sidebar */}
          <aside className="wp-sidebar">
            <div className="wp-sidebar-label">Contents</div>
            {NAV_SECTIONS.map(s => (
              <button
                key={s.id}
                className={`wp-sidebar-item ${active === s.id ? "active" : ""}`}
                onClick={() => scrollTo(s.id)}
              >{s.label}</button>
            ))}
          </aside>

          {/* Main */}
          <main className="wp-main">
            {/* Hero */}
            <div className="wp-hero">
              <div className="wp-hero-meta">Platform Whitepaper &nbsp;&bull;&nbsp; Version 1.0 &nbsp;&bull;&nbsp; February 2026</div>
              <h1 className="wp-hero-title">Cerulea</h1>
              <p className="wp-hero-subtitle">No-Code Blockchain Infrastructure Platform</p>
              <div className="wp-hero-badges">
                {["Public L1", "Private Chains", "No-Code", "Enterprise-Grade", "Configurable Governance"].map(b => (
                  <span key={b} className="wp-badge">{b}</span>
                ))}
              </div>
            </div>

            {/* Abstract */}
            <Section id="abstract" num="01" title="Abstract">
              <p className="wp-p">
                Blockchain infrastructure has long been the domain of highly specialized engineering teams. Building a production-grade blockchain system requires coordinating runtime compilation, validator configuration, governance wiring, infrastructure provisioning, DevOps pipelines, and monitoring stacks. Each layer demands distinct expertise, separate tooling, and months of integration work. The result is high cost, extended timelines, and operational fragility.
              </p>
              <Callout>
                Cerulea exists because the barrier to deploying blockchain infrastructure has never been the idea. It has always been the execution. We built a platform to close that gap permanently.
              </Callout>
              <p className="wp-p">
                Cerulea is a fully no-code blockchain infrastructure platform. Organizations and developers design, deploy, and operate complete public or private blockchain systems through structured configuration alone. No code is written at any stage. Every architectural decision (validator structure, governance mechanics, infrastructure topology, compliance enforcement, upgrade policy) is expressed through configuration, not engineering.
              </p>
              <p className="wp-p">
                This whitepaper describes Cerulea's architecture, platform capabilities, governance framework, security model, and enterprise operating model. It is written for technical evaluators, enterprise architects, and decision-makers assessing blockchain infrastructure options.
              </p>
            </Section>

            {/* Who is this for */}
            <Section id="for-whom" num="02" title="Who Is This For">
              <p className="wp-p">
                Cerulea serves organizations and builders at the infrastructure layer of blockchain, not at the application layer that runs on top of it. If you are evaluating whether Cerulea fits your context, start here.
              </p>
              <div className="wp-card-grid">
                {[
                  { icon: "🏢", title: "Enterprise Teams", body: "Organizations in finance, logistics, healthcare, or government that need a permissioned blockchain environment with compliance controls, data sovereignty, and internal governance authority." },
                  { icon: "🏗️", title: "Platform Builders", body: "Teams building ecosystem infrastructure, shared network services, or multi-party coordination systems that require a governed public blockchain layer." },
                  { icon: "⚙️", title: "Technical Architects", body: "Engineers and architects responsible for selecting and evaluating blockchain infrastructure stacks. Cerulea replaces custom build with structured configuration." },
                  { icon: "🚀", title: "Founders & Product Teams", body: "Builders who need blockchain infrastructure without assembling a specialized engineering team. Cerulea removes the engineering dependency without removing architectural depth." },
                ].map(c => (
                  <div key={c.title} className="wp-card">
                    <div className="wp-card-icon">{c.icon}</div>
                    <div className="wp-card-title">{c.title}</div>
                    <div className="wp-card-body">{c.body}</div>
                  </div>
                ))}
              </div>
              <Callout>
                Cerulea is purpose-built for blockchain infrastructure. It is not a smart contract builder, token launchpad, DeFi application platform, or general SaaS host. If your need is the execution, governance, and infrastructure layer, you are in the right place.
              </Callout>
            </Section>

            {/* The Problem */}
            <Section id="problem" num="03" title="The Problem">
              <p className="wp-p">
                Deploying a production blockchain system today means assembling and integrating a fragmented engineering stack:
              </p>
              <BulletList items={[
                "Runtime engineering and genesis configuration",
                "Validator setup, staking logic, and slashing conditions",
                "Governance wiring for on-chain proposal and voting mechanics",
                "Infrastructure provisioning across cloud or on-premise environments",
                "DevOps pipelines, monitoring stacks, and alerting systems",
                "Integration layers connecting to external enterprise systems",
              ]} />
              <p className="wp-p">
                Each of these layers requires different expertise, different tools, and different teams. There is no standard lifecycle for upgrades, governance changes, or system retirement. Organizations build one-off processes for each.
              </p>
              <p className="wp-p">
                For enterprises, the problem compounds: compliance requirements, data sovereignty constraints, and internal governance mandates cannot be accommodated by off-the-shelf platforms designed for open participation.
              </p>
              <p className="wp-p">
                The result is slow deployment, high cost, and infrastructure that is difficult to audit, upgrade, or retire safely. Cerulea was built to solve this.
              </p>
            </Section>

            {/* Solution */}
            <Section id="solution" num="04" title="The Cerulea Solution">
              <p className="wp-p">
                Cerulea replaces the fragmented blockchain engineering process with a unified, no-code configuration framework. Architecture becomes structured. Infrastructure becomes intentional. Governance becomes explicit. Deployment becomes atomic.
              </p>
              <p className="wp-p">Every system built on Cerulea follows a defined lifecycle:</p>
              <div className="wp-lifecycle">
                {["Create","Configure","Deploy","Operate","Govern","Upgrade","Expand","Monitor","Retire"].map((s, i) => (
                  <div key={s} className="wp-lc-item">
                    <div className="wp-lc-num">{String(i+1).padStart(2,"0")}</div>
                    <div className="wp-lc-label">{s}</div>
                  </div>
                ))}
              </div>
              <p className="wp-p">Before deployment, nothing exists except configuration. There are no partially running systems and no pre-created infrastructure. After deployment, the complete operational blockchain environment exists. There is no in-between state.</p>
              <h3 className="wp-h2">What Cerulea Deploys</h3>
              <p className="wp-p">When a deployment is triggered, Cerulea generates and provisions:</p>
              <BulletList items={[
                "A functioning blockchain network (public or private)",
                "Runtime configuration and genesis parameters",
                "Validator initialization and governance logic",
                "Smart contract execution capability",
                "API and RPC access layers",
                "Monitoring and observability infrastructure",
                "Operational dashboard and explorer surfaces",
              ]} />
            </Section>

            {/* Core Philosophy */}
            <Section id="philosophy" num="05" title="Core Philosophy">
              {[
                { title: "Determinism", body: "Every system produced by Cerulea is the result of explicit configuration, not hidden automation. There are no emergent deployments and no invisible defaults influencing runtime behavior. What you configure is exactly what runs." },
                { title: "Separation of Configuration and Execution", body: "Until deployment is triggered, nothing exists operationally. Configuration is structured, versioned, and stored. It is not executed. After deployment, the system exists as a complete operational blockchain environment." },
                { title: "Reduction of Engineering Dependency", body: "Cerulea does not remove architectural depth. It removes the requirement to express architecture through code. Complex systems can still be built, through structured configuration rather than development pipelines." },
                { title: "Configurable Decentralization", body: "Decentralization in Cerulea is an architectural decision, not a platform characteristic. Organizations configure validator openness, governance weighting, infrastructure distribution, compliance enforcement, and upgrade authority based on system requirements, not ideology." },
              ].map(({ title, body }) => (
                <div key={title}>
                  <h3 className="wp-h2">{title}</h3>
                  <p className="wp-p">{body}</p>
                </div>
              ))}
            </Section>

            {/* Architecture */}
            <Section id="architecture" num="06" title="Architecture">
              <p className="wp-p">Cerulea supports two primary deployment architectures. The architecture selected at project creation determines every subsequent configuration decision.</p>
              <CompTable
                cols={["Dimension", "Public L1", "Private Chain"]}
                rows={[
                  ["Participation", "Open, permissionless", "Permissioned, enterprise-controlled"],
                  ["Governance", "Token-weighted, community-driven", "Authority-based, organization-defined"],
                  ["Validators", "Hybrid open onboarding, PoS", "Enterprise-selected nodes"],
                  ["Infrastructure", "Distributed network participants", "Cloud, on-prem, or hybrid (org-owned)"],
                  ["Use Cases", "dApps, token systems, ecosystem services", "Enterprise blockchain, regulated industries"],
                  ["Compliance", "Network-level rules only", "Custom compliance enforcement modules"],
                  ["Data control", "Network participants", "Deploying organization exclusively"],
                ]}
              />
              <h3 className="wp-h2">Runtime Engine</h3>
              <p className="wp-p">The Runtime Engine defines how configured systems become executable blockchain environments. Runtime behavior is versioned: every deployment is associated with a specific runtime version, and changes occur only through governance-approved upgrades.</p>
              <BulletList items={[
                "WASM-based execution for smart contracts and modules",
                "EVM compatibility for Solidity-based contracts on Public L1",
                "On-chain parameter adjustments via governance",
                "Runtime security sandboxing to prevent unauthorized execution",
                "Versioned upgrade orchestration with no hard forks required",
              ]} />
              <h3 className="wp-h2">Cross-Chain Interoperability</h3>
              <p className="wp-p">Cross-chain capabilities are configured, not assumed. Supported interoperability includes cross-chain message passing, asset bridging protocols, and optional Private Chain to Public L1 connectivity. For Private Chains, all external connectivity must be explicitly enabled during configuration.</p>
            </Section>

            {/* Studio */}
            <Section id="studio" num="07" title="Cerulea Studio">
              <p className="wp-p">Cerulea Studio is the core environment through which all blockchain systems are created, configured, and deployed. It is not a companion interface. It is the only way to build on Cerulea.</p>
              {[
                { title: "Architecture Selection", body: "The first decision inside Studio defines the architectural topology, determining validator structure, governance mechanics, infrastructure ownership, compliance posture, and operational control boundaries." },
                { title: "Templates and Module Presets", body: "Templates are structured starting points that accelerate configuration without restricting flexibility. Every element can be adjusted, extended, or replaced. Templates reduce friction without reducing control." },
                { title: "Module Configuration Framework", body: "Infrastructure Modules govern foundational mechanics: consensus, validator management, upgrade orchestration, and governance hooks. Application Modules extend the system with token systems, identity frameworks, payment logic, and compliance enforcement." },
                { title: "Workspace and Project Model", body: "Workspaces represent organizational boundaries. Projects within workspaces represent individual blockchain systems, containing all configuration including architecture selection, module settings, governance setup, deployment history, and operational state." },
                { title: "Deployment Engine", body: "When triggered, Cerulea provisions the complete operational stack in a single atomic activation: runtime, validator structures, governance hooks, monitoring surfaces, and operational interfaces. There is no partial deployment state." },
              ].map(({ title, body }) => (
                <div key={title}>
                  <h3 className="wp-h2">{title}</h3>
                  <p className="wp-p">{body}</p>
                </div>
              ))}
            </Section>

            {/* Governance */}
            <Section id="governance" num="08" title="Governance">
              <p className="wp-p">Governance is the operational mechanism through which all post-deployment change occurs in Cerulea. It is not optional. No system can be modified outside the governance framework once deployed.</p>
              <CompTable
                cols={["Aspect", "Public L1", "Private Chain"]}
                rows={[
                  ["Proposal creation", "Any qualifying token holder", "Defined stakeholder roles"],
                  ["Voting mechanism", "Token-weighted stake", "Role-based or multi-sig approval"],
                  ["Execution", "Automatic on-chain after quorum", "Enterprise-approved scheduling"],
                  ["Upgrade authority", "Community alignment required", "Internal governance policy"],
                  ["Audit trail", "Public on-chain", "Compliance-aligned logging"],
                ]}
              />
              <h3 className="wp-h2">Upgrade Strategies</h3>
              <BulletList items={[
                "Rolling changes applied incrementally; network remains operational throughout",
                "Canary changes applied to a limited subset of nodes first to validate under live conditions",
                "Blue-green two parallel environments with traffic shifted at a defined point for near-zero downtime",
              ]} />
            </Section>

            {/* Security */}
            <Section id="security" num="09" title="Security Model">
              <h3 className="wp-h2">Operational vs. Data Control Boundary</h3>
              <p className="wp-p">Cerulea maintains a strict boundary between operational coordination and data control. Cerulea manages deployment orchestration, upgrade management, and monitoring provisioning. Data control (transaction execution, smart contract state, validator key management) belongs entirely to the deploying organization for Private Chains.</p>
              <Callout>Cerulea does not read transaction payloads, access smart contract state, or control enterprise validator keys. This boundary is enforced architecturally, not by policy.</Callout>
              <h3 className="wp-h2">Enterprise Data Sovereignty</h3>
              <BulletList items={[
                "Transaction content and smart contract state",
                "Validator key management and node access",
                "Network exposure boundaries and API access policies",
                "Governance participation and change authority",
                "Infrastructure hosting and operational decisions",
              ]} />
              <h3 className="wp-h2">Compliance Positioning</h3>
              <p className="wp-p">Cerulea supports compliance requirements without prescribing a specific regulatory framework. It provides role-based access controls, governance-controlled change management, audit trails for all governance actions, enterprise-defined compliance module enforcement, and cross-border governance adaptability. Organizations are responsible for ensuring deployments meet their legal and regulatory requirements.</p>
            </Section>

            {/* Intelligence */}
            <Section id="intelligence" num="10" title="Cerulea Intelligence">
              <p className="wp-p">Cerulea Intelligence is an embedded guidance layer inside Studio that provides contextual recommendations and risk-aware signals during the design and configuration phase only. It operates before deployment and cannot take autonomous action.</p>
              <h3 className="wp-h2">What It Does</h3>
              <BulletList items={[
                "Explains configuration implications as settings are made",
                "Highlights structural gaps in system design",
                "Suggests governance alignment based on architecture intent",
                "Identifies incompatible module combinations",
                "Surfaces integration dependencies and readiness signals",
                "Flags upgrade settings that could create operational risk",
              ]} />
              <h3 className="wp-h2">What It Cannot Do</h3>
              <BulletList items={[
                "Deploy systems automatically",
                "Change configurations without explicit user action",
                "Execute governance proposals or vote in governance processes",
                "Manage validators or control infrastructure",
                "Access transaction data or read smart contract state",
              ]} />
              <Callout>Cerulea Intelligence is an advisory system, not an autonomous agent. Every action remains under explicit user and governance control.</Callout>
            </Section>

            {/* Integrations */}
            <Section id="integrations" num="11" title="Integrations">
              <p className="wp-p">Integrations allow Cerulea deployments to interact with external systems at the operational boundary. They do not override governance or runtime behavior.</p>
              <div className="wp-int-grid">
                {[
                  ["Payments", "Stripe, PayPal, Coinbase Commerce, Lemon Squeezy, Razorpay"],
                  ["Authentication", "Clerk, Privy, Dynamic, Auth0, Firebase Auth"],
                  ["Communication", "SendGrid, Resend, Twilio, XMTP, Push Protocol"],
                  ["Storage", "AWS S3, Pinata (IPFS), Irys (Arweave), Lighthouse (Filecoin), Supabase Storage"],
                  ["Data & Oracles", "Chainlink, The Graph, Alchemy, Moralis, Pyth Network"],
                  ["Analytics", "PostHog, Segment, Dune API, Google Analytics 4, Mixpanel"],
                  ["Webhooks", "Slack, Discord, Telegram Bot, Zapier, Custom Endpoint"],
                ].map(([cat, providers]) => (
                  <div key={cat} className="wp-int-card">
                    <div className="wp-int-header">{cat}</div>
                    <div className="wp-int-body">{providers}</div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Enterprise */}
            <Section id="enterprise" num="12" title="Enterprise Operating Model">
              <p className="wp-p">Private Chain deployments are sovereign blockchain environments. The deploying organization owns the system, controls the infrastructure, and bears operational responsibility. Cerulea provides the orchestration platform, configuration lifecycle, and operational tooling.</p>
              {[
                { title: "Private Chain Ownership", body: "The enterprise controls all validator nodes and hosting, defines governance authority and participant roles, manages infrastructure scaling and uptime, retains exclusive access to transaction data and chain state, and determines network exposure and API access policies." },
                { title: "Validator Ownership", body: "Validator node ownership belongs to the enterprise. Cerulea may deploy a limited number of nodes solely for licensing enforcement and usage metering. These nodes have no access to transaction payloads, smart contract state, or enterprise data. Enterprises retain the right to audit Cerulea-operated nodes at any time." },
                { title: "Enterprise Upgrade Model", body: "No upgrade can be applied by Cerulea without the deploying organization triggering the process through their own governance. Enterprises schedule upgrades to align with maintenance windows, compliance review cycles, or change management processes." },
              ].map(({ title, body }) => (
                <div key={title}>
                  <h3 className="wp-h2">{title}</h3>
                  <p className="wp-p">{body}</p>
                </div>
              ))}
            </Section>

            {/* Decision Guide */}
            <Section id="decision" num="13" title="Decision Guide">
              <p className="wp-p">Use this section before beginning configuration. Architecture, governance, infrastructure ownership, and cost structure all follow from this initial decision.</p>
              <div className="wp-decision-grid">
                <div className="wp-decision-card">
                  <div className="wp-decision-head pub">Choose Public L1 if...</div>
                  <ul className="wp-decision-body">
                    {[
                      "The system requires open, permissionless participation",
                      "Governance must be community-driven and transparent",
                      "You do not need to control who runs validators",
                      "Your use case is a dApp, token system, or ecosystem service",
                    ].map(i => <li key={i}>{i}</li>)}
                  </ul>
                </div>
                <div className="wp-decision-card">
                  <div className="wp-decision-head priv">Choose Private Chain if...</div>
                  <ul className="wp-decision-body">
                    {[
                      "Access must be permissioned",
                      "The organization must own and control validator infrastructure",
                      "Compliance, audit, or regulatory requirements apply",
                      "Governance authority must remain inside the organization",
                    ].map(i => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              </div>
              <Callout>The anchor question: Is this open ecosystem infrastructure, or controlled organizational infrastructure?</Callout>
              <h3 className="wp-h2">Cost vs. Control</h3>
              <p className="wp-p">Cerulea removes the engineering cost of building blockchain systems. It does not remove the operational cost of running them. Public L1 reduces infrastructure cost but increases coordination overhead. Private Chains increase infrastructure responsibility but give full operational control. Neither model is cheaper by default.</p>
            </Section>

            {/* Summary */}
            <Section id="summary" num="14" title="Platform Summary">
              <KVTable rows={[
                ["Deployment model", "Public L1 and Private Chain"],
                ["Configuration approach", "Fully no-code, structured configuration framework"],
                ["Governance", "On-chain, proposal-lifecycle driven. Token-weighted (Public L1) or authority-based (Private Chain)"],
                ["Runtime", "WASM + EVM-compatible, versioned upgrades, governance-gated changes"],
                ["Infrastructure hosting", "Cloud (AWS, Azure, GCP), On-Prem, or Hybrid (Private Chain only)"],
                ["Security boundary", "Operational coordination (Cerulea) vs. data control (enterprise or network participants)"],
                ["Integrations", "7 categories, 35+ supported providers"],
                ["AI guidance", "Cerulea Intelligence: advisory-only, pre-deployment configuration assistance"],
                ["Build lifecycle", "9-stage lifecycle: Create through Retire"],
              ]} />
            </Section>

            {/* CTA */}
            <div className="wp-cta">
              <div className="wp-cta-eyebrow">Get Started</div>
              <div className="wp-cta-title">Ready to build on Cerulea?</div>
              <p className="wp-cta-sub">Explore the platform, request a demo, or speak with our team about your infrastructure requirements.</p>
              <div className="wp-cta-buttons">
                <button className="wp-btn-primary">Request a Demo</button>
                <button className="wp-btn-outline">View Documentation</button>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="wp-disclaimer">
              <div className="wp-disclaimer-inner">
                <div className="wp-disclaimer-label">Legal Disclaimer</div>
                <p>This document is provided for informational purposes only. The information contained herein is subject to change without notice. Cerulea makes no warranties, express or implied, regarding the accuracy or completeness of this document. This whitepaper does not constitute legal, financial, or regulatory advice. Organizations are responsible for ensuring that any deployment meets the legal and regulatory requirements applicable in their jurisdiction. Cerulea does not provide compliance certifications. All product features, integrations, and capabilities described are subject to the terms of the applicable enterprise agreement. Version 1.0, February 2026.</p>
              </div>
            </div>

          </main>
        </div>
      </div>
    </>
  );
}
