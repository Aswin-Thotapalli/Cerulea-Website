'use client';
import { useState, useEffect, useRef, useCallback } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: "abstract",     num: "I",    title: "Abstract" },
  { id: "for-whom",     num: "II",   title: "Who Is This For" },
  { id: "problem",      num: "III",  title: "The Problem" },
  { id: "solution",     num: "IV",   title: "The Solution" },
  { id: "philosophy",   num: "V",    title: "Core Philosophy" },
  { id: "architecture", num: "VI",   title: "Architecture" },
  { id: "dual-chain",   num: "VII",  title: "Dual-Chain Model" },
  { id: "dcf",          num: "VIII", title: "Dynamic Consensus" },
  { id: "studio",       num: "IX",   title: "Cerulea Studio" },
  { id: "governance",   num: "X",    title: "Governance" },
  { id: "security",     num: "XI",   title: "Security Model" },
  { id: "intelligence", num: "XII",  title: "Cerulea Intelligence" },
  { id: "competitive",  num: "XIII", title: "Competitive Analysis" },
  { id: "integrations", num: "XIV",  title: "Integrations" },
  { id: "enterprise",   num: "XV",   title: "Enterprise Model" },
  { id: "decision",     num: "XVI",  title: "Decision Guide" },
  { id: "summary",      num: "XVII", title: "Platform Summary" },
];

// ─── Hooks ─────────────────────────────────────────────────────────────────────

function useActiveSection() {
  const [active, setActive] = useState("abstract");
  useEffect(() => {
    const els = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
          setActive(top.target.id);
        }
      },
      { rootMargin: "-10% 0px -60% 0px", threshold: 0 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return [active, setActive];
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── Shared components (identical to CeruleaDocs) ─────────────────────────────

function Tag({ children }) {
  return (
    <span style={{
      display: "inline-block", background: "rgba(46,117,182,0.12)", color: "#2E75B6",
      fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
      padding: "3px 10px", borderRadius: 20, border: "1px solid rgba(46,117,182,0.2)"
    }}>{children}</span>
  );
}

function Note({ children }) {
  return (
    <div style={{
      background: "linear-gradient(135deg, #EBF3FB 0%, #F0F7FF 100%)",
      borderLeft: "3px solid #2E75B6", borderRadius: "0 8px 8px 0",
      padding: "14px 18px", margin: "20px 0", fontSize: 14,
      color: "#1A3C6B", lineHeight: 1.7, fontStyle: "italic"
    }}>{children}</div>
  );
}

function SectionHeader({ num, title }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div ref={ref} style={{
      display: "flex", alignItems: "flex-start", gap: 18, marginBottom: 32,
      paddingBottom: 24, borderBottom: "1px solid #E5E7EB",
      opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)",
      transition: "opacity 0.5s ease, transform 0.5s ease"
    }}>
      <div style={{
        background: "linear-gradient(135deg, #1A3C6B, #2E75B6)", color: "#fff",
        fontSize: 12, fontWeight: 800, width: 44, height: 44, borderRadius: 12,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, marginTop: 4, letterSpacing: "0.04em", fontFamily: "'DM Serif Display', Georgia, serif"
      }}>{num}</div>
      <h2 style={{
        fontSize: 30, fontWeight: 700, color: "#1A3C6B", lineHeight: 1.15,
        fontFamily: "'DM Serif Display', Georgia, serif", margin: 0
      }}>{title}</h2>
    </div>
  );
}

function Subsection({ title, children }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div ref={ref} style={{
      marginBottom: 40,
      opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)",
      transition: "opacity 0.55s ease, transform 0.55s ease"
    }}>
      <h3 style={{
        fontSize: 17, fontWeight: 700, color: "#2E75B6", marginBottom: 14,
        display: "flex", alignItems: "center", gap: 10, fontFamily: "'DM Sans', sans-serif"
      }}>
        <span style={{ width: 3, height: 18, background: "#2E75B6", borderRadius: 2, display: "inline-block", flexShrink: 0 }} />
        {title}
      </h3>
      {children}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul style={{ listStyle: "none", margin: "12px 0 16px", display: "flex", flexDirection: "column", gap: 9, padding: 0 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14.5, lineHeight: 1.65, color: "#374151" }}>
          <span style={{ width: 5, height: 5, background: "#2E75B6", borderRadius: "50%", flexShrink: 0, marginTop: 9 }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Card({ icon, title, body, delay = 0 }) {
  const [ref, visible] = useReveal(0.1);
  const [hovered, setHovered] = useState(false);
  return (
    <div ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
      background: hovered ? "#fff" : "#F9FAFB",
      border: `1px solid ${hovered ? "#BFDBF7" : "#E5E7EB"}`,
      borderRadius: 12, padding: "20px 22px", transition: "all 0.25s ease",
      boxShadow: hovered ? "0 8px 24px rgba(26,60,107,0.1)" : "none",
      transform: visible ? (hovered ? "translateY(-3px)" : "none") : "translateY(20px)",
      opacity: visible ? 1 : 0, transitionDelay: `${delay}ms`,
    }}>
      <div style={{ fontSize: 20, marginBottom: 8 }}>{icon}</div>
      <div style={{ fontSize: 14, fontWeight: 700, color: "#1A3C6B", marginBottom: 8, fontFamily: "'DM Sans', sans-serif" }}>{title}</div>
      <div style={{ fontSize: 13.5, color: "#6B7280", lineHeight: 1.6 }}>{body}</div>
    </div>
  );
}

function TwoCol({ left, right, leftTitle, rightTitle, accent = false }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, margin: "16px 0" }}>
      {[{ title: leftTitle, items: left, a: accent }, { title: rightTitle, items: right }].map(({ title, items, a }, i) => (
        <div key={i} style={{
          background: a ? "linear-gradient(135deg, #EBF3FB, #F0F7FF)" : "#F9FAFB",
          border: `1px solid ${a ? "#BFDBF7" : "#E5E7EB"}`, borderRadius: 10, padding: 20
        }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#1A3C6B", marginBottom: 12, paddingBottom: 8, borderBottom: "1px solid #E5E7EB" }}>{title}</div>
          <BulletList items={items} />
        </div>
      ))}
    </div>
  );
}

function StrategyStep({ tag, body, index }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div ref={ref} style={{
      display: "flex", gap: 16, padding: "16px 18px",
      background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 10, alignItems: "flex-start",
      opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(10px)",
      transition: "opacity 0.4s ease, transform 0.4s ease", transitionDelay: `${index * 80}ms`
    }}>
      <div style={{
        background: "linear-gradient(135deg, #1A3C6B, #2E75B6)", color: "#fff",
        fontSize: 10, fontWeight: 800, padding: "4px 12px", borderRadius: 20,
        whiteSpace: "nowrap", letterSpacing: "0.06em", textTransform: "uppercase", flexShrink: 0, marginTop: 2
      }}>{tag}</div>
      <div style={{ fontSize: 14, color: "#374151", lineHeight: 1.65 }}>{body}</div>
    </div>
  );
}

// ─── Diagram helpers ───────────────────────────────────────────────────────────

function makeDiagram(ContentComponent) {
  return function Diagram() {
    const [ref, visible] = useReveal(0.05);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { if (visible && !mounted) setMounted(true); }, [visible]);
    return (
      <div ref={ref} style={{ margin: "28px 0" }}>
        {mounted && <ContentComponent />}
      </div>
    );
  };
}

// ─── Lifecycle diagram ─────────────────────────────────────────────────────────

function LifecycleDiagramContent() {
  return (
    <>
      <style>{`
        @keyframes lc-fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes lc-slideIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        .wp-lc .g-title{animation:lc-fadeIn .5s ease both;animation-delay:.1s;opacity:0}
        .wp-lc .g-s1{animation:lc-slideIn .45s ease both;animation-delay:.4s;opacity:0}
        .wp-lc .g-s2{animation:lc-slideIn .45s ease both;animation-delay:.6s;opacity:0}
        .wp-lc .g-s3{animation:lc-slideIn .45s ease both;animation-delay:.8s;opacity:0}
        .wp-lc .g-s4{animation:lc-slideIn .45s ease both;animation-delay:1.0s;opacity:0}
        .wp-lc .g-s5{animation:lc-slideIn .45s ease both;animation-delay:1.2s;opacity:0}
        .wp-lc .g-turn1{animation:lc-fadeIn .4s ease both;animation-delay:1.5s;opacity:0}
        .wp-lc .g-s9{animation:lc-slideIn .45s ease both;animation-delay:1.7s;opacity:0}
        .wp-lc .g-s8{animation:lc-slideIn .45s ease both;animation-delay:1.9s;opacity:0}
        .wp-lc .g-s7{animation:lc-slideIn .45s ease both;animation-delay:2.1s;opacity:0}
        .wp-lc .g-s6{animation:lc-slideIn .45s ease both;animation-delay:2.3s;opacity:0}
        .wp-lc .g-turn2{animation:lc-fadeIn .4s ease both;animation-delay:2.6s;opacity:0}
        .wp-lc .g-note{animation:lc-fadeIn .5s ease both;animation-delay:2.9s;opacity:0}
      `}</style>
      <div className="wp-lc" style={{ borderRadius: 12, border: "1px solid #E5E7EB", overflow: "hidden" }}
        dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 820 440" xmlns="http://www.w3.org/2000/svg" font-family="'Segoe UI',Arial,sans-serif">
  <defs><marker id="lc-la" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#1B5E7B"/></marker></defs>
  <rect width="820" height="440" fill="#F4F8FA" rx="10"/>
  <g class="g-title">
    <text x="410" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="#1B5E7B" letter-spacing="1">CERULEA STUDIO · BUILD LIFECYCLE</text>
    <text x="410" y="44" text-anchor="middle" font-size="9" fill="#888">Nine stages from configuration to governance-led retirement · All handled inside Studio</text>
  </g>
  <g class="g-s1">
    <rect x="18" y="78" width="126" height="74" rx="7" fill="#1B5E7B"/>
    <text x="81" y="101" text-anchor="middle" font-size="9" fill="#AEDBE8">01</text>
    <text x="81" y="118" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">CREATE</text>
    <text x="81" y="135" text-anchor="middle" font-size="9" fill="#AEDBE8">Scope, access,</text>
    <text x="81" y="147" text-anchor="middle" font-size="9" fill="#AEDBE8">architecture</text>
    <line x1="144" y1="115" x2="162" y2="115" stroke="#1B5E7B" stroke-width="2" marker-end="url(#lc-la)"/>
  </g>
  <g class="g-s2">
    <rect x="164" y="78" width="126" height="74" rx="7" fill="#2E86AB"/>
    <text x="227" y="101" text-anchor="middle" font-size="9" fill="#D0EEFA">02</text>
    <text x="227" y="118" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">CONFIGURE</text>
    <text x="227" y="135" text-anchor="middle" font-size="9" fill="#D0EEFA">Module canvas,</text>
    <text x="227" y="147" text-anchor="middle" font-size="9" fill="#D0EEFA">blueprints</text>
    <line x1="290" y1="115" x2="308" y2="115" stroke="#2E86AB" stroke-width="2" marker-end="url(#lc-la)"/>
  </g>
  <g class="g-s3">
    <rect x="310" y="78" width="126" height="74" rx="7" fill="#16697A"/>
    <text x="373" y="101" text-anchor="middle" font-size="9" fill="#AADDE5">03</text>
    <text x="373" y="118" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">DEPLOY</text>
    <text x="373" y="135" text-anchor="middle" font-size="9" fill="#AADDE5">Atomic activation,</text>
    <text x="373" y="147" text-anchor="middle" font-size="9" fill="#AADDE5">compile + launch</text>
    <line x1="436" y1="115" x2="454" y2="115" stroke="#16697A" stroke-width="2" marker-end="url(#lc-la)"/>
  </g>
  <g class="g-s4">
    <rect x="456" y="78" width="126" height="74" rx="7" fill="#3A7CA5"/>
    <text x="519" y="101" text-anchor="middle" font-size="9" fill="#CCE3F5">04</text>
    <text x="519" y="118" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">OPERATE</text>
    <text x="519" y="135" text-anchor="middle" font-size="9" fill="#CCE3F5">Validators live,</text>
    <text x="519" y="147" text-anchor="middle" font-size="9" fill="#CCE3F5">APIs active</text>
    <line x1="582" y1="115" x2="600" y2="115" stroke="#3A7CA5" stroke-width="2" marker-end="url(#lc-la)"/>
  </g>
  <g class="g-s5">
    <rect x="602" y="78" width="126" height="74" rx="7" fill="#489FB5"/>
    <text x="665" y="101" text-anchor="middle" font-size="9" fill="#E0F5FA">05</text>
    <text x="665" y="118" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">GOVERN</text>
    <text x="665" y="135" text-anchor="middle" font-size="9" fill="#E0F5FA">All changes via</text>
    <text x="665" y="147" text-anchor="middle" font-size="9" fill="#E0F5FA">governance</text>
  </g>
  <g class="g-turn1">
    <line x1="728" y1="115" x2="786" y2="115" stroke="#489FB5" stroke-width="2"/>
    <line x1="786" y1="115" x2="786" y2="298" stroke="#489FB5" stroke-width="2"/>
    <line x1="786" y1="298" x2="768" y2="298" stroke="#489FB5" stroke-width="2" marker-end="url(#lc-la)"/>
  </g>
  <g class="g-s9">
    <rect x="602" y="262" width="126" height="74" rx="7" fill="#1B5E7B"/>
    <text x="665" y="285" text-anchor="middle" font-size="9" fill="#AEDBE8">09</text>
    <text x="665" y="302" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">RETIRE</text>
    <text x="665" y="319" text-anchor="middle" font-size="9" fill="#AEDBE8">Governed decom-</text>
    <text x="665" y="331" text-anchor="middle" font-size="9" fill="#AEDBE8">missioning</text>
    <line x1="602" y1="299" x2="584" y2="299" stroke="#1B5E7B" stroke-width="2" marker-end="url(#lc-la)"/>
  </g>
  <g class="g-s8">
    <rect x="456" y="262" width="126" height="74" rx="7" fill="#2E86AB"/>
    <text x="519" y="285" text-anchor="middle" font-size="9" fill="#D0EEFA">08</text>
    <text x="519" y="302" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">MONITOR</text>
    <text x="519" y="319" text-anchor="middle" font-size="9" fill="#D0EEFA">Validators, txns,</text>
    <text x="519" y="331" text-anchor="middle" font-size="9" fill="#D0EEFA">governance, infra</text>
    <line x1="456" y1="299" x2="438" y2="299" stroke="#2E86AB" stroke-width="2" marker-end="url(#lc-la)"/>
  </g>
  <g class="g-s7">
    <rect x="310" y="262" width="126" height="74" rx="7" fill="#16697A"/>
    <text x="373" y="285" text-anchor="middle" font-size="9" fill="#AADDE5">07</text>
    <text x="373" y="302" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">EXPAND</text>
    <text x="373" y="319" text-anchor="middle" font-size="9" fill="#AADDE5">Add validators,</text>
    <text x="373" y="331" text-anchor="middle" font-size="9" fill="#AADDE5">modules, bridges</text>
    <line x1="310" y1="299" x2="292" y2="299" stroke="#16697A" stroke-width="2" marker-end="url(#lc-la)"/>
  </g>
  <g class="g-s6">
    <rect x="164" y="262" width="126" height="74" rx="7" fill="#3A7CA5"/>
    <text x="227" y="285" text-anchor="middle" font-size="9" fill="#CCE3F5">06</text>
    <text x="227" y="302" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">UPGRADE</text>
    <text x="227" y="319" text-anchor="middle" font-size="9" fill="#CCE3F5">Rolling / Canary /</text>
    <text x="227" y="331" text-anchor="middle" font-size="9" fill="#CCE3F5">Blue-Green</text>
  </g>
  <g class="g-turn2">
    <line x1="164" y1="299" x2="36" y2="299" stroke="#3A7CA5" stroke-width="2"/>
    <line x1="36" y1="299" x2="36" y2="152" stroke="#3A7CA5" stroke-width="2"/>
    <line x1="36" y1="152" x2="51" y2="152" stroke="#3A7CA5" stroke-width="1.5" stroke-dasharray="4,3"/>
    <text x="14" y="230" text-anchor="middle" font-size="9" fill="#888" transform="rotate(-90,14,230)">Governance Controlled</text>
  </g>
  <g class="g-note">
    <text x="410" y="398" text-anchor="middle" font-size="10" fill="#888">Every stage is handled inside Cerulea Studio. No external tooling required at any point.</text>
    <text x="410" y="414" text-anchor="middle" font-size="10" fill="#888">Every post-deployment change passes through on-chain governance. No administrative bypasses.</text>
  </g>
</svg>` }}
      />
    </>
  );
}
const LifecycleDiagram = makeDiagram(LifecycleDiagramContent);

// ─── Architecture diagram ──────────────────────────────────────────────────────

function ArchDiagramContent() {
  return (
    <>
      <style>{`
        @keyframes arch-fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        @keyframes arch-fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes arch-slideLeft{from{opacity:0;transform:translateX(-22px)}to{opacity:1;transform:translateX(0)}}
        @keyframes arch-slideRight{from{opacity:0;transform:translateX(22px)}to{opacity:1;transform:translateX(0)}}
        @keyframes arch-slideUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        .wp-arch .g-title{animation:arch-fadeIn .6s ease both;animation-delay:.1s;opacity:0}
        .wp-arch .g-ui1{animation:arch-fadeUp .5s ease both;animation-delay:.3s;opacity:0}
        .wp-arch .g-ui2{animation:arch-fadeUp .5s ease both;animation-delay:.45s;opacity:0}
        .wp-arch .g-ui3{animation:arch-fadeUp .5s ease both;animation-delay:.6s;opacity:0}
        .wp-arch .g-conn1{animation:arch-fadeIn .4s ease both;animation-delay:.9s;opacity:0}
        .wp-arch .g-intel{animation:arch-fadeUp .5s ease both;animation-delay:1.1s;opacity:0}
        .wp-arch .g-conn2{animation:arch-fadeIn .4s ease both;animation-delay:1.5s;opacity:0}
        .wp-arch .g-orch{animation:arch-fadeUp .5s ease both;animation-delay:1.7s;opacity:0}
        .wp-arch .g-conn3{animation:arch-fadeIn .4s ease both;animation-delay:2.1s;opacity:0}
        .wp-arch .g-wasm{animation:arch-slideLeft .5s ease both;animation-delay:2.3s;opacity:0}
        .wp-arch .g-evm{animation:arch-slideRight .5s ease both;animation-delay:2.4s;opacity:0}
        .wp-arch .g-conn4{animation:arch-fadeIn .4s ease both;animation-delay:2.8s;opacity:0}
        .wp-arch .g-pub{animation:arch-slideLeft .6s ease both;animation-delay:3.0s;opacity:0}
        .wp-arch .g-priv{animation:arch-slideRight .6s ease both;animation-delay:3.1s;opacity:0}
        .wp-arch .g-conn5{animation:arch-fadeIn .4s ease both;animation-delay:3.6s;opacity:0}
        .wp-arch .g-bridge{animation:arch-slideUp .6s ease both;animation-delay:3.8s;opacity:0}
      `}</style>
      <div className="wp-arch" style={{ borderRadius: 12, border: "1px solid #E5E7EB", overflow: "hidden" }}
        dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 960 760" xmlns="http://www.w3.org/2000/svg" font-family="'Segoe UI',Arial,sans-serif">
  <defs><marker id="arch-arr" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#1B5E7B"/></marker></defs>
  <rect width="960" height="760" fill="#F4F8FA" rx="10"/>
  <g class="g-title">
    <text x="480" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#1B5E7B" letter-spacing="1">CERULEA PLATFORM ARCHITECTURE</text>
    <text x="480" y="50" text-anchor="middle" font-size="10" fill="#888">Eight Modular Layers · Unified Interface · Dual-Chain Infrastructure</text>
  </g>
  <g class="g-ui1"><rect x="30" y="65" width="270" height="56" rx="7" fill="#1B5E7B"/><text x="165" y="88" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">Cerulea Studio</text><text x="165" y="107" text-anchor="middle" font-size="10" fill="#AEDBE8">No-Code Visual Builder</text></g>
  <g class="g-ui2"><rect x="345" y="65" width="270" height="56" rx="7" fill="#1B5E7B"/><text x="480" y="88" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">Cerulea Dashboard</text><text x="480" y="107" text-anchor="middle" font-size="10" fill="#AEDBE8">Operational Monitoring</text></g>
  <g class="g-ui3"><rect x="660" y="65" width="270" height="56" rx="7" fill="#1B5E7B"/><text x="795" y="88" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">Cerulea Explorer</text><text x="795" y="107" text-anchor="middle" font-size="10" fill="#AEDBE8">On-Chain Activity Viewer</text></g>
  <g class="g-conn1">
    <line x1="165" y1="121" x2="165" y2="138" stroke="#1B5E7B" stroke-width="1.5"/>
    <line x1="480" y1="121" x2="480" y2="138" stroke="#1B5E7B" stroke-width="1.5"/>
    <line x1="795" y1="121" x2="795" y2="138" stroke="#1B5E7B" stroke-width="1.5"/>
    <line x1="165" y1="138" x2="795" y2="138" stroke="#1B5E7B" stroke-width="1.5"/>
    <line x1="480" y1="138" x2="480" y2="152" stroke="#1B5E7B" stroke-width="1.5" marker-end="url(#arch-arr)"/>
    <text x="480" y="165" text-anchor="middle" font-size="9" fill="#999" letter-spacing="1">AI CONFIGURATION LAYER</text>
  </g>
  <g class="g-intel"><rect x="130" y="170" width="700" height="54" rx="7" fill="#2E86AB"/><text x="480" y="193" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">Cerulea Intelligence</text><text x="480" y="211" text-anchor="middle" font-size="10" fill="#D0EEFA">Configuration Guidance · Risk Signals · Structural Recommendations · Compliance Alignment</text></g>
  <g class="g-conn2">
    <line x1="480" y1="224" x2="480" y2="242" stroke="#2E86AB" stroke-width="1.5" marker-end="url(#arch-arr)"/>
    <text x="480" y="258" text-anchor="middle" font-size="9" fill="#999" letter-spacing="1">PLATFORM ORCHESTRATION</text>
  </g>
  <g class="g-orch"><rect x="130" y="264" width="700" height="54" rx="7" fill="#16697A"/><text x="480" y="287" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">Compilation Engine / Platform Orchestration</text><text x="480" y="305" text-anchor="middle" font-size="10" fill="#AADDE5">Module Assembly · Deterministic Compilation · Deployment Pipeline · Lifecycle Management</text></g>
  <g class="g-conn3">
    <line x1="310" y1="318" x2="310" y2="336" stroke="#16697A" stroke-width="1.5"/>
    <line x1="650" y1="318" x2="650" y2="336" stroke="#16697A" stroke-width="1.5"/>
    <line x1="310" y1="336" x2="650" y2="336" stroke="#16697A" stroke-width="1.5"/>
    <line x1="310" y1="336" x2="310" y2="350" stroke="#3A7CA5" stroke-width="1.5" marker-end="url(#arch-arr)"/>
    <line x1="650" y1="336" x2="650" y2="350" stroke="#3A7CA5" stroke-width="1.5" marker-end="url(#arch-arr)"/>
    <text x="480" y="365" text-anchor="middle" font-size="9" fill="#999" letter-spacing="1">EXECUTION RUNTIME</text>
  </g>
  <g class="g-wasm"><rect x="130" y="372" width="355" height="52" rx="7" fill="#3A7CA5"/><text x="307" y="393" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">WASM Runtime</text><text x="307" y="411" text-anchor="middle" font-size="10" fill="#CCE4F5">WebAssembly · Studio-Generated Contracts</text></g>
  <g class="g-evm"><rect x="475" y="372" width="355" height="52" rx="7" fill="#3A7CA5"/><text x="652" y="393" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">EVM Runtime</text><text x="652" y="411" text-anchor="middle" font-size="10" fill="#CCE4F5">Ethereum Virtual Machine · Solidity Contracts</text></g>
  <g class="g-conn4">
    <line x1="240" y1="424" x2="240" y2="454" stroke="#888" stroke-width="1.5" marker-end="url(#arch-arr)"/>
    <line x1="720" y1="424" x2="720" y2="454" stroke="#888" stroke-width="1.5" marker-end="url(#arch-arr)"/>
  </g>
  <g class="g-pub">
    <rect x="20" y="455" width="420" height="195" rx="9" fill="#EAF6FB" stroke="#489FB5" stroke-width="2"/>
    <rect x="20" y="455" width="420" height="34" rx="9" fill="#489FB5"/>
    <rect x="20" y="471" width="420" height="18" fill="#489FB5"/>
    <text x="230" y="477" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">PUBLIC L1  ·  cerulea-public-1</text>
    <rect x="38" y="497" width="384" height="40" rx="5" fill="#489FB5" fill-opacity=".25" stroke="#489FB5" stroke-width="1"/>
    <text x="230" y="513" text-anchor="middle" font-size="11" font-weight="700" fill="#16697A">DCF Consensus  ·  Fixed Policy Set</text>
    <text x="230" y="527" text-anchor="middle" font-size="9" fill="#16697A">Approved Registry · Identity-Verified · Uptime · Governance</text>
    <rect x="38" y="546" width="384" height="36" rx="5" fill="#489FB5" fill-opacity=".12"/>
    <text x="230" y="561" text-anchor="middle" font-size="11" font-weight="700" fill="#1B3A4B">Public Chain State</text>
    <text x="230" y="574" text-anchor="middle" font-size="9" fill="#1B3A4B">Immutable Ledger · Smart Contract State · Governance Records</text>
    <rect x="38" y="590" width="384" height="36" rx="5" fill="#489FB5" fill-opacity=".08"/>
    <text x="230" y="605" text-anchor="middle" font-size="11" font-weight="700" fill="#1B3A4B">5 Active Validators</text>
    <text x="230" y="618" text-anchor="middle" font-size="9" fill="#1B3A4B">Policy-Approved Nodes · Distributed Infrastructure</text>
  </g>
  <g class="g-priv">
    <rect x="520" y="455" width="420" height="195" rx="9" fill="#EEF8F2" stroke="#16697A" stroke-width="2"/>
    <rect x="520" y="455" width="420" height="34" rx="9" fill="#16697A"/>
    <rect x="520" y="471" width="420" height="18" fill="#16697A"/>
    <text x="730" y="477" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">CERULEA PRIVATE  ·  Sovereign Enterprise</text>
    <rect x="538" y="497" width="384" height="40" rx="5" fill="#16697A" fill-opacity=".2" stroke="#16697A" stroke-width="1"/>
    <text x="730" y="513" text-anchor="middle" font-size="11" font-weight="700" fill="#16697A">DCF Consensus  ·  Configurable Policy</text>
    <text x="730" y="527" text-anchor="middle" font-size="9" fill="#16697A">Enterprise-Defined Rules · Identity · Compliance · Custom</text>
    <rect x="538" y="546" width="384" height="36" rx="5" fill="#16697A" fill-opacity=".1"/>
    <text x="730" y="561" text-anchor="middle" font-size="11" font-weight="700" fill="#1B3A2A">Sovereign Private Chain State</text>
    <text x="730" y="574" text-anchor="middle" font-size="9" fill="#1B3A2A">Enterprise-Exclusive Data · Zero Vendor Access</text>
    <rect x="538" y="590" width="384" height="36" rx="5" fill="#16697A" fill-opacity=".06"/>
    <text x="730" y="605" text-anchor="middle" font-size="11" font-weight="700" fill="#1B3A2A">Enterprise Infrastructure</text>
    <text x="730" y="618" text-anchor="middle" font-size="9" fill="#1B3A2A">AWS · GCP · Azure · On-Premise · Hybrid</text>
  </g>
  <g class="g-conn5">
    <line x1="230" y1="650" x2="230" y2="672" stroke="#1B5E7B" stroke-width="1.5"/>
    <line x1="730" y1="650" x2="730" y2="672" stroke="#1B5E7B" stroke-width="1.5"/>
    <line x1="230" y1="672" x2="730" y2="672" stroke="#1B5E7B" stroke-width="1.5"/>
    <line x1="480" y1="672" x2="480" y2="685" stroke="#1B5E7B" stroke-width="1.5" marker-end="url(#arch-arr)"/>
    <text x="480" y="702" text-anchor="middle" font-size="9" fill="#999" letter-spacing="1">BRIDGE ENGINE + INTEGRATION LAYER</text>
  </g>
  <g class="g-bridge">
    <rect x="20" y="706" width="920" height="44" rx="7" fill="#1B5E7B"/>
    <text x="480" y="724" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">Cross-Chain Bridge Engine  ·  REST APIs  ·  RPC Endpoints  ·  Webhooks</text>
    <text x="480" y="742" text-anchor="middle" font-size="9" fill="#AEDBE8">Ethereum · BNB · Polygon · Cosmos (IBC) · Solana · Polkadot (XCM) · Avalanche · Bitcoin (HTLC) · L2 Rollups</text>
  </g>
</svg>` }}
      />
    </>
  );
}
const ArchDiagram = makeDiagram(ArchDiagramContent);

// ─── Dual-Chain diagram ────────────────────────────────────────────────────────

function DualChainDiagramContent() {
  return (
    <>
      <style>{`
        @keyframes dc-fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes dc-slideDown{from{opacity:0;transform:translateY(-18px)}to{opacity:1;transform:translateY(0)}}
        @keyframes dc-slideLeft{from{opacity:0;transform:translateX(-24px)}to{opacity:1;transform:translateX(0)}}
        @keyframes dc-slideRight{from{opacity:0;transform:translateX(24px)}to{opacity:1;transform:translateX(0)}}
        .wp-dc .g-title{animation:dc-fadeIn .5s ease both;animation-delay:.15s;opacity:0}
        .wp-dc .g-studio{animation:dc-slideDown .6s ease both;animation-delay:.4s;opacity:0}
        .wp-dc .g-arrows{animation:dc-fadeIn .5s ease both;animation-delay:1.0s;opacity:0}
        .wp-dc .g-pub{animation:dc-slideLeft .6s cubic-bezier(.25,.8,.25,1) both;animation-delay:1.3s;opacity:0}
        .wp-dc .g-priv{animation:dc-slideRight .6s cubic-bezier(.25,.8,.25,1) both;animation-delay:1.3s;opacity:0}
        .wp-dc .g-bridge{animation:dc-fadeIn .5s ease both;animation-delay:2.0s;opacity:0}
      `}</style>
      <div className="wp-dc" style={{ borderRadius: 12, border: "1px solid #E5E7EB", overflow: "hidden" }}
        dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 860 480" xmlns="http://www.w3.org/2000/svg" font-family="'Segoe UI',Arial,sans-serif">
  <defs>
    <marker id="dc-da" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#1B5E7B"/></marker>
    <marker id="dc-dg" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#16697A"/></marker>
  </defs>
  <rect width="860" height="480" fill="#F4F8FA" rx="10"/>
  <g class="g-title">
    <text x="430" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="#1B5E7B" letter-spacing="1">THE DUAL-CHAIN MODEL</text>
    <text x="430" y="46" text-anchor="middle" font-size="10" fill="#888">One Interface · Two Architectures · Complete Sovereignty</text>
  </g>
  <g class="g-studio">
    <rect x="280" y="56" width="300" height="60" rx="8" fill="#1B5E7B"/>
    <text x="430" y="81" text-anchor="middle" font-size="14" font-weight="700" fill="#fff">Cerulea Studio</text>
    <text x="430" y="100" text-anchor="middle" font-size="10" fill="#AEDBE8">Single Interface · No-Code Configuration</text>
  </g>
  <g class="g-arrows">
    <line x1="360" y1="116" x2="218" y2="165" stroke="#489FB5" stroke-width="2" marker-end="url(#dc-da)"/>
    <line x1="500" y1="116" x2="642" y2="165" stroke="#16697A" stroke-width="2" marker-end="url(#dc-dg)"/>
  </g>
  <g class="g-pub">
    <rect x="30" y="170" width="380" height="250" rx="9" fill="#EAF6FB" stroke="#489FB5" stroke-width="2.5"/>
    <rect x="30" y="170" width="380" height="36" rx="9" fill="#489FB5"/>
    <rect x="30" y="188" width="380" height="18" fill="#489FB5"/>
    <text x="220" y="193" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">PUBLIC L1</text>
    <text x="220" y="226" text-anchor="middle" font-size="10" font-weight="700" fill="#16697A">Consensus</text>
    <text x="220" y="241" text-anchor="middle" font-size="9" fill="#444">DCF · Fixed Policy Set · Approved Registry</text>
    <line x1="56" y1="249" x2="384" y2="249" stroke="#C0DCE5" stroke-width="1"/>
    <text x="220" y="265" text-anchor="middle" font-size="10" font-weight="700" fill="#16697A">Governance</text>
    <text x="220" y="280" text-anchor="middle" font-size="9" fill="#444">Token-weighted community voting</text>
    <line x1="56" y1="288" x2="384" y2="288" stroke="#C0DCE5" stroke-width="1"/>
    <text x="220" y="304" text-anchor="middle" font-size="10" font-weight="700" fill="#16697A">Data Visibility</text>
    <text x="220" y="319" text-anchor="middle" font-size="9" fill="#444">Public via Cerulea Explorer</text>
    <line x1="56" y1="327" x2="384" y2="327" stroke="#C0DCE5" stroke-width="1"/>
    <text x="220" y="343" text-anchor="middle" font-size="10" font-weight="700" fill="#16697A">Target Use Case</text>
    <text x="220" y="358" text-anchor="middle" font-size="9" fill="#444">dApps · Public Registries · Token Systems</text>
    <line x1="56" y1="366" x2="384" y2="366" stroke="#C0DCE5" stroke-width="1"/>
    <text x="220" y="382" text-anchor="middle" font-size="10" font-weight="700" fill="#16697A">Runtime</text>
    <text x="220" y="397" text-anchor="middle" font-size="9" fill="#444">Full EVM Compatibility · WASM · Solidity</text>
  </g>
  <g class="g-priv">
    <rect x="450" y="170" width="380" height="250" rx="9" fill="#EEF8F2" stroke="#16697A" stroke-width="2.5"/>
    <rect x="450" y="170" width="380" height="36" rx="9" fill="#16697A"/>
    <rect x="450" y="188" width="380" height="18" fill="#16697A"/>
    <text x="640" y="193" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">CERULEA PRIVATE</text>
    <text x="640" y="226" text-anchor="middle" font-size="10" font-weight="700" fill="#16697A">Consensus</text>
    <text x="640" y="241" text-anchor="middle" font-size="9" fill="#444">DCF · Fully Configurable · Enterprise Rules</text>
    <line x1="476" y1="249" x2="804" y2="249" stroke="#B5DBC6" stroke-width="1"/>
    <text x="640" y="265" text-anchor="middle" font-size="10" font-weight="700" fill="#16697A">Governance</text>
    <text x="640" y="280" text-anchor="middle" font-size="9" fill="#444">Authority-based · Multi-signature approval</text>
    <line x1="476" y1="288" x2="804" y2="288" stroke="#B5DBC6" stroke-width="1"/>
    <text x="640" y="304" text-anchor="middle" font-size="10" font-weight="700" fill="#16697A">Data Sovereignty</text>
    <text x="640" y="319" text-anchor="middle" font-size="9" fill="#444">Enterprise-exclusive · Zero vendor access</text>
    <line x1="476" y1="327" x2="804" y2="327" stroke="#B5DBC6" stroke-width="1"/>
    <text x="640" y="343" text-anchor="middle" font-size="10" font-weight="700" fill="#16697A">Target Use Case</text>
    <text x="640" y="358" text-anchor="middle" font-size="9" fill="#444">Regulated Industries · Government · Private Data</text>
    <line x1="476" y1="366" x2="804" y2="366" stroke="#B5DBC6" stroke-width="1"/>
    <text x="640" y="382" text-anchor="middle" font-size="10" font-weight="700" fill="#16697A">Infrastructure</text>
    <text x="640" y="397" text-anchor="middle" font-size="9" fill="#444">AWS · GCP · Azure · On-Premise · Hybrid</text>
  </g>
  <g class="g-bridge">
    <line x1="220" y1="420" x2="220" y2="446" stroke="#489FB5" stroke-width="1.5" stroke-dasharray="4,3"/>
    <line x1="640" y1="420" x2="640" y2="446" stroke="#16697A" stroke-width="1.5" stroke-dasharray="4,3"/>
    <line x1="220" y1="446" x2="640" y2="446" stroke="#888" stroke-width="1.5" stroke-dasharray="4,3"/>
    <text x="430" y="464" text-anchor="middle" font-size="10" fill="#888">Both chains connect optionally through the Cross-Chain Bridge Engine</text>
  </g>
</svg>` }}
      />
    </>
  );
}
const DualChainDiagram = makeDiagram(DualChainDiagramContent);

// ─── DCF diagram ───────────────────────────────────────────────────────────────

function DCFDiagramContent() {
  return (
    <>
      <style>{`
        @keyframes dcf-fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes dcf-scaleIn{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}
        @keyframes dcf-nodePop{from{opacity:0}60%{opacity:1;transform:scale(1.08)}to{opacity:1;transform:scale(1)}}
        .wp-dcf .g-title{animation:dcf-fadeIn .5s ease both;animation-delay:.1s;opacity:0}
        .wp-dcf .g-center{animation:dcf-scaleIn .6s cubic-bezier(.34,1.56,.64,1) both;animation-delay:.4s;opacity:0;transform-origin:420px 270px}
        .wp-dcf .g-n1{animation:dcf-fadeIn .5s ease both;animation-delay:.8s;opacity:0}
        .wp-dcf .g-n2{animation:dcf-fadeIn .5s ease both;animation-delay:1.0s;opacity:0}
        .wp-dcf .g-n3{animation:dcf-fadeIn .5s ease both;animation-delay:1.2s;opacity:0}
        .wp-dcf .g-n4{animation:dcf-fadeIn .5s ease both;animation-delay:1.4s;opacity:0}
        .wp-dcf .g-n5{animation:dcf-fadeIn .5s ease both;animation-delay:1.6s;opacity:0}
        .wp-dcf .g-n6{animation:dcf-fadeIn .5s ease both;animation-delay:1.8s;opacity:0}
        .wp-dcf .g-n7{animation:dcf-fadeIn .5s ease both;animation-delay:2.0s;opacity:0}
        .wp-dcf .g-n8{animation:dcf-fadeIn .5s ease both;animation-delay:2.2s;opacity:0}
        .wp-dcf .g-note{animation:dcf-fadeIn .5s ease both;animation-delay:2.6s;opacity:0}
      `}</style>
      <div className="wp-dcf" style={{ borderRadius: 12, border: "1px solid #E5E7EB", overflow: "hidden" }}
        dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 840 540" xmlns="http://www.w3.org/2000/svg" font-family="'Segoe UI',Arial,sans-serif">
  <rect width="840" height="540" fill="#F4F8FA" rx="10"/>
  <g class="g-title">
    <text x="420" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="#1B5E7B" letter-spacing="1">DYNAMIC CONSENSUS FRAMEWORK (DCF)</text>
    <text x="420" y="46" text-anchor="middle" font-size="10" fill="#888">Policy-Based Validator Coordination · Not Token-Weighted</text>
  </g>
  <g class="g-center">
    <circle cx="420" cy="270" r="66" fill="#1B5E7B"/>
    <circle cx="420" cy="270" r="72" fill="none" stroke="#1B5E7B" stroke-width="2" stroke-opacity=".3"/>
    <text x="420" y="262" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">DCF</text>
    <text x="420" y="278" text-anchor="middle" font-size="9" fill="#AEDBE8">Validator</text>
    <text x="420" y="292" text-anchor="middle" font-size="9" fill="#AEDBE8">Coordination</text>
  </g>
  <g class="g-n1">
    <line x1="420" y1="198" x2="420" y2="130" stroke="#2E86AB" stroke-width="1.5" stroke-dasharray="4,3"/>
    <rect x="322" y="76" width="196" height="50" rx="7" fill="#2E86AB"/>
    <text x="420" y="96" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">Approved Validator Registry</text>
    <text x="420" y="111" text-anchor="middle" font-size="9" fill="#D0EEFA">Only registered nodes may validate</text>
  </g>
  <g class="g-n2">
    <line x1="468" y1="218" x2="546" y2="170" stroke="#2E86AB" stroke-width="1.5" stroke-dasharray="4,3"/>
    <rect x="540" y="120" width="185" height="50" rx="7" fill="#2E86AB"/>
    <text x="632" y="140" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">Identity-Verified Operators</text>
    <text x="632" y="155" text-anchor="middle" font-size="9" fill="#D0EEFA">Companies, institutions, approved orgs</text>
  </g>
  <g class="g-n3">
    <line x1="486" y1="270" x2="558" y2="270" stroke="#16697A" stroke-width="1.5" stroke-dasharray="4,3"/>
    <rect x="560" y="245" width="170" height="50" rx="7" fill="#16697A"/>
    <text x="645" y="265" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">Uptime + Performance</text>
    <text x="645" y="280" text-anchor="middle" font-size="9" fill="#AADDE5">Thresholds, sync health, latency</text>
  </g>
  <g class="g-n4">
    <line x1="468" y1="322" x2="544" y2="370" stroke="#16697A" stroke-width="1.5" stroke-dasharray="4,3"/>
    <rect x="544" y="368" width="192" height="50" rx="7" fill="#16697A"/>
    <text x="640" y="388" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">Reputation + Behaviour</text>
    <text x="640" y="403" text-anchor="middle" font-size="9" fill="#AADDE5">Missed blocks, misbehaviour score</text>
  </g>
  <g class="g-n5">
    <line x1="420" y1="336" x2="420" y2="408" stroke="#3A7CA5" stroke-width="1.5" stroke-dasharray="4,3"/>
    <rect x="320" y="408" width="200" height="50" rx="7" fill="#3A7CA5"/>
    <text x="420" y="428" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">Policy-Based Rotation</text>
    <text x="420" y="443" text-anchor="middle" font-size="9" fill="#CCE3F5">Eligibility, fairness, availability</text>
  </g>
  <g class="g-n6">
    <line x1="372" y1="322" x2="220" y2="393" stroke="#3A7CA5" stroke-width="1.5" stroke-dasharray="4,3"/>
    <rect x="18" y="368" width="202" height="50" rx="7" fill="#3A7CA5"/>
    <text x="119" y="388" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">Governance-Permissioned</text>
    <text x="119" y="403" text-anchor="middle" font-size="9" fill="#CCE3F5">Admission, suspension, reinstate</text>
  </g>
  <g class="g-n7">
    <line x1="354" y1="270" x2="188" y2="270" stroke="#489FB5" stroke-width="1.5" stroke-dasharray="4,3"/>
    <rect x="18" y="245" width="170" height="50" rx="7" fill="#489FB5"/>
    <text x="103" y="265" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">Security Compliance</text>
    <text x="103" y="280" text-anchor="middle" font-size="9" fill="#E0F5FA">Key mgmt, patched systems</text>
  </g>
  <g class="g-n8">
    <line x1="372" y1="218" x2="208" y2="145" stroke="#489FB5" stroke-width="1.5" stroke-dasharray="4,3"/>
    <rect x="18" y="120" width="190" height="50" rx="7" fill="#489FB5"/>
    <text x="113" y="140" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">Infrastructure Requirements</text>
    <text x="113" y="155" text-anchor="middle" font-size="9" fill="#E0F5FA">Hardware, network, node config</text>
  </g>
  <g class="g-note">
    <rect x="248" y="498" width="344" height="28" rx="7" fill="#16697A" fill-opacity=".15" stroke="#16697A" stroke-width="1"/>
    <text x="420" y="517" text-anchor="middle" font-size="10" fill="#16697A" font-weight="700">Cerulea Private: All 8 policies are fully configurable by the enterprise</text>
  </g>
</svg>` }}
      />
    </>
  );
}
const DCFDiagram = makeDiagram(DCFDiagramContent);

// ─── Quadrant chart helper ─────────────────────────────────────────────────────

function makeQuadrantCSS(p) {
  return `
    @keyframes ${p}-fadeIn{from{opacity:0}to{opacity:1}}
    @keyframes ${p}-scaleIn{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}
    @keyframes ${p}-popIn{0%{opacity:0;transform:scale(0)}70%{transform:scale(1.15)}100%{opacity:1;transform:scale(1)}}
    .wp-${p} .g-bg{animation:${p}-fadeIn .5s ease both;animation-delay:.1s;opacity:0}
    .wp-${p} .g-title{animation:${p}-fadeIn .5s ease both;animation-delay:.3s;opacity:0}
    .wp-${p} .g-shade{animation:${p}-fadeIn .7s ease both;animation-delay:.5s;opacity:0}
    .wp-${p} .g-axes{animation:${p}-fadeIn .7s ease both;animation-delay:.8s;opacity:0}
    .wp-${p} .g-labs{animation:${p}-fadeIn .6s ease both;animation-delay:1.2s;opacity:0}
    .wp-${p} .g-ql{animation:${p}-fadeIn .6s ease both;animation-delay:1.4s;opacity:0}
    .wp-${p} .g-p1{animation:${p}-scaleIn .5s cubic-bezier(.34,1.56,.64,1) both;animation-delay:1.8s;opacity:0;transform-origin:center}
    .wp-${p} .g-p2{animation:${p}-scaleIn .5s cubic-bezier(.34,1.56,.64,1) both;animation-delay:2.0s;opacity:0;transform-origin:center}
    .wp-${p} .g-p3{animation:${p}-scaleIn .5s cubic-bezier(.34,1.56,.64,1) both;animation-delay:2.2s;opacity:0;transform-origin:center}
    .wp-${p} .g-p4{animation:${p}-scaleIn .5s cubic-bezier(.34,1.56,.64,1) both;animation-delay:2.4s;opacity:0;transform-origin:center}
    .wp-${p} .g-p5{animation:${p}-popIn .7s cubic-bezier(.34,1.56,.64,1) both;animation-delay:2.8s;opacity:0;transform-origin:center}
    .wp-${p} .g-ann{animation:${p}-fadeIn .5s ease both;animation-delay:3.2s;opacity:0}
  `;
}

// Quadrant A: Deployment Complexity vs Chain Flexibility
function QuadrantAContent() {
  return (
    <>
      <style>{makeQuadrantCSS("qa")}</style>
      <div className="wp-qa" style={{ borderRadius: 12, border: "1px solid #E5E7EB", overflow: "hidden" }}
        dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 820 680" xmlns="http://www.w3.org/2000/svg" font-family="'Segoe UI',Arial,sans-serif">
<g class="g-bg"><rect width="820" height="680" fill="#F4F8FA" rx="10"/></g>
<g class="g-title"><text x="410" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#1B5E7B" letter-spacing="1">DEPLOYMENT COMPLEXITY vs CHAIN FLEXIBILITY</text><text x="410" y="48" text-anchor="middle" font-size="10" fill="#888">X: Technical overhead to deploy  ·  Y: Chain configurations possible</text></g>
<g class="g-shade"><rect x="80" y="55" width="328" height="275" fill="#E8F5E9" fill-opacity=".7" rx="4"/><rect x="408" y="55" width="329" height="275" fill="#FFF8E1" fill-opacity=".6" rx="4"/><rect x="80" y="330" width="328" height="275" fill="#E3F2FD" fill-opacity=".4" rx="4"/><rect x="408" y="330" width="329" height="275" fill="#FFEBEE" fill-opacity=".45" rx="4"/></g>
<g class="g-axes"><line x1="80" y1="50" x2="80" y2="614" stroke="#333" stroke-width="2"/><line x1="75" y1="608" x2="737" y2="608" stroke="#333" stroke-width="2"/><polygon points="80,44 74,58 86,58" fill="#333"/><polygon points="743,608 729,602 729,614" fill="#333"/><line x1="408" y1="50" x2="408" y2="608" stroke="#bbb" stroke-width="1" stroke-dasharray="5,4"/><line x1="80" y1="330" x2="737" y2="330" stroke="#bbb" stroke-width="1" stroke-dasharray="5,4"/></g>
<g class="g-labs"><text x="26" y="330" text-anchor="middle" font-size="11" font-weight="700" fill="#555" transform="rotate(-90,26,330)">CHAIN CONFIGURABILITY</text><text x="44" y="90" text-anchor="middle" font-size="9" fill="#888" transform="rotate(-90,44,90)">High</text><text x="44" y="575" text-anchor="middle" font-size="9" fill="#888" transform="rotate(-90,44,575)">Low</text><text x="410" y="648" text-anchor="middle" font-size="11" font-weight="700" fill="#555">DEPLOYMENT COMPLEXITY</text><text x="120" y="637" text-anchor="middle" font-size="9" fill="#888">Low</text><text x="692" y="637" text-anchor="middle" font-size="9" fill="#888">High</text></g>
<g class="g-ql"><text x="244" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#2E7D32" fill-opacity=".8">FLEXIBLE  ·  LOW COMPLEXITY</text><text x="572" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#E65100" fill-opacity=".75">FLEXIBLE  ·  HIGH COMPLEXITY</text><text x="244" y="352" text-anchor="middle" font-size="10" font-weight="700" fill="#1565C0" fill-opacity=".5">RIGID  ·  LOW COMPLEXITY</text><text x="572" y="352" text-anchor="middle" font-size="10" font-weight="700" fill="#B71C1C" fill-opacity=".65">RIGID  ·  HIGH COMPLEXITY</text></g>
<g class="g-p1"><circle cx="310" cy="498" r="22" fill="#FF6B35" opacity=".85"/><text x="310" y="494" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">R3</text><text x="310" y="507" text-anchor="middle" font-size="8" fill="#fff">CORDA</text><text x="310" y="532" text-anchor="middle" font-size="9" fill="#555">Fixed model · Low config</text></g>
<g class="g-p2"><circle cx="441" cy="246" r="22" fill="#E84142" opacity=".85"/><text x="441" y="242" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">AVA</text><text x="441" y="255" text-anchor="middle" font-size="8" fill="#fff">LANCHE</text><text x="441" y="280" text-anchor="middle" font-size="9" fill="#555">EVM + Subnets</text></g>
<g class="g-p3"><circle cx="612" cy="192" r="22" fill="#2E3148" opacity=".85"/><text x="612" y="188" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">COS</text><text x="612" y="201" text-anchor="middle" font-size="8" fill="#fff">MOS</text><text x="612" y="226" text-anchor="middle" font-size="9" fill="#555">Go · Full sovereignty</text></g>
<g class="g-p4"><circle cx="706" cy="114" r="22" fill="#E6007A" opacity=".85"/><text x="706" y="110" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">POLKA</text><text x="706" y="123" text-anchor="middle" font-size="8" fill="#fff">DOT</text><text x="706" y="148" text-anchor="middle" font-size="9" fill="#555">Rust · Parachain</text></g>
<g class="g-p5"><circle cx="178" cy="106" r="32" fill="#1B5E7B"/><circle cx="178" cy="106" r="36" fill="none" stroke="#1B5E7B" stroke-width="2" stroke-opacity=".3"/><text x="178" y="101" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">CERULEA</text><text x="178" y="115" text-anchor="middle" font-size="8" fill="#AEDBE8">Flexible · No-Code</text><text x="178" y="150" text-anchor="middle" font-size="10" fill="#1B5E7B" font-weight="700">cerulea.io</text></g>
</svg>` }}
      />
    </>
  );
}
const QuadrantADiagram = makeDiagram(QuadrantAContent);

// Quadrant B: Code Requirement vs Chain Sophistication
function QuadrantBContent() {
  return (
    <>
      <style>{makeQuadrantCSS("qb")}</style>
      <div className="wp-qb" style={{ borderRadius: 12, border: "1px solid #E5E7EB", overflow: "hidden" }}
        dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 820 680" xmlns="http://www.w3.org/2000/svg" font-family="'Segoe UI',Arial,sans-serif">
<g class="g-bg"><rect width="820" height="680" fill="#F4F8FA" rx="10"/></g>
<g class="g-title"><text x="410" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#1B5E7B" letter-spacing="1">CODE REQUIREMENT vs CHAIN SOPHISTICATION</text><text x="410" y="48" text-anchor="middle" font-size="10" fill="#888">X: Code required to deploy (left = extensive, right = none)  ·  Y: Feature sophistication</text></g>
<g class="g-shade"><rect x="80" y="55" width="328" height="275" fill="#FFF8E1" fill-opacity=".6" rx="4"/><rect x="408" y="55" width="329" height="275" fill="#E8F5E9" fill-opacity=".7" rx="4"/><rect x="80" y="330" width="328" height="275" fill="#FFEBEE" fill-opacity=".45" rx="4"/><rect x="408" y="330" width="329" height="275" fill="#E3F2FD" fill-opacity=".3" rx="4"/></g>
<g class="g-axes"><line x1="80" y1="50" x2="80" y2="614" stroke="#333" stroke-width="2"/><line x1="75" y1="608" x2="737" y2="608" stroke="#333" stroke-width="2"/><polygon points="80,44 74,58 86,58" fill="#333"/><polygon points="743,608 729,602 729,614" fill="#333"/><line x1="408" y1="50" x2="408" y2="608" stroke="#bbb" stroke-width="1" stroke-dasharray="5,4"/><line x1="80" y1="330" x2="737" y2="330" stroke="#bbb" stroke-width="1" stroke-dasharray="5,4"/></g>
<g class="g-labs"><text x="26" y="330" text-anchor="middle" font-size="11" font-weight="700" fill="#555" transform="rotate(-90,26,330)">CHAIN SOPHISTICATION</text><text x="44" y="90" text-anchor="middle" font-size="9" fill="#888" transform="rotate(-90,44,90)">Enterprise-Grade</text><text x="44" y="575" text-anchor="middle" font-size="9" fill="#888" transform="rotate(-90,44,575)">Basic</text><text x="410" y="648" text-anchor="middle" font-size="11" font-weight="700" fill="#555">CODE REQUIREMENT</text><text x="128" y="637" text-anchor="middle" font-size="9" fill="#888">Extensive Code</text><text x="688" y="637" text-anchor="middle" font-size="9" fill="#888">No Code / Visual</text></g>
<g class="g-ql"><text x="244" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#E65100" fill-opacity=".75">SOPHISTICATED  ·  CODE-HEAVY</text><text x="572" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#2E7D32" fill-opacity=".8">SOPHISTICATED  ·  NO-CODE</text><text x="244" y="352" text-anchor="middle" font-size="10" font-weight="700" fill="#B71C1C" fill-opacity=".65">BASIC  ·  CODE-HEAVY</text><text x="572" y="352" text-anchor="middle" font-size="10" font-weight="700" fill="#1565C0" fill-opacity=".4">BASIC  ·  NO-CODE</text></g>
<g class="g-p1"><circle cx="120" cy="112" r="22" fill="#E6007A" opacity=".85"/><text x="120" y="108" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">POLKA</text><text x="120" y="121" text-anchor="middle" font-size="8" fill="#fff">DOT</text><text x="120" y="146" text-anchor="middle" font-size="9" fill="#555">Rust · Top-tier</text></g>
<g class="g-p2"><circle cx="200" cy="192" r="22" fill="#2E3148" opacity=".85"/><text x="200" y="188" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">COS</text><text x="200" y="201" text-anchor="middle" font-size="8" fill="#fff">MOS</text><text x="200" y="226" text-anchor="middle" font-size="9" fill="#555">Go · Full SDK</text></g>
<g class="g-p3"><circle cx="211" cy="218" r="22" fill="#E84142" opacity=".85"/><text x="211" y="214" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">AVA</text><text x="211" y="227" text-anchor="middle" font-size="8" fill="#fff">LANCHE</text><text x="211" y="252" text-anchor="middle" font-size="9" fill="#555">EVM · HyperSDK</text></g>
<g class="g-p4"><circle cx="244" cy="330" r="22" fill="#FF6B35" opacity=".85"/><text x="244" y="326" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">R3</text><text x="244" y="339" text-anchor="middle" font-size="8" fill="#fff">CORDA</text><text x="244" y="364" text-anchor="middle" font-size="9" fill="#555">Java · Narrow scope</text></g>
<g class="g-p5"><circle cx="671" cy="134" r="32" fill="#1B5E7B"/><circle cx="671" cy="134" r="36" fill="none" stroke="#1B5E7B" stroke-width="2" stroke-opacity=".3"/><text x="671" y="129" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">CERULEA</text><text x="671" y="143" text-anchor="middle" font-size="8" fill="#AEDBE8">Studio · Full features</text><text x="671" y="178" text-anchor="middle" font-size="10" fill="#1B5E7B" font-weight="700">cerulea.io</text></g>
</svg>` }}
      />
    </>
  );
}
const QuadrantBDiagram = makeDiagram(QuadrantBContent);

// Quadrant C: Permissioning Model vs Target Buyer
function QuadrantCContent() {
  return (
    <>
      <style>{makeQuadrantCSS("qc")}</style>
      <div className="wp-qc" style={{ borderRadius: 12, border: "1px solid #E5E7EB", overflow: "hidden" }}
        dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 820 680" xmlns="http://www.w3.org/2000/svg" font-family="'Segoe UI',Arial,sans-serif">
<g class="g-bg"><rect width="820" height="680" fill="#F4F8FA" rx="10"/></g>
<g class="g-title"><text x="410" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#1B5E7B" letter-spacing="1">PERMISSIONING MODEL vs TARGET BUYER</text><text x="410" y="48" text-anchor="middle" font-size="10" fill="#888">X: Permissioning spectrum  ·  Y: Primary buyer segment  ·  Cerulea spans both quadrants</text></g>
<g class="g-shade"><rect x="80" y="55" width="328" height="275" fill="#EDE7F6" fill-opacity=".5" rx="4"/><rect x="408" y="55" width="329" height="275" fill="#E8F5E9" fill-opacity=".5" rx="4"/><rect x="80" y="330" width="328" height="275" fill="#FFF8E1" fill-opacity=".5" rx="4"/><rect x="408" y="330" width="329" height="275" fill="#E3F2FD" fill-opacity=".45" rx="4"/></g>
<g class="g-axes"><line x1="80" y1="50" x2="80" y2="614" stroke="#333" stroke-width="2"/><line x1="75" y1="608" x2="737" y2="608" stroke="#333" stroke-width="2"/><polygon points="80,44 74,58 86,58" fill="#333"/><polygon points="743,608 729,602 729,614" fill="#333"/><line x1="408" y1="50" x2="408" y2="608" stroke="#bbb" stroke-width="1" stroke-dasharray="5,4"/><line x1="80" y1="330" x2="737" y2="330" stroke="#bbb" stroke-width="1" stroke-dasharray="5,4"/></g>
<g class="g-labs"><text x="26" y="330" text-anchor="middle" font-size="11" font-weight="700" fill="#555" transform="rotate(-90,26,330)">PRIMARY BUYER</text><text x="44" y="90" text-anchor="middle" font-size="9" fill="#888" transform="rotate(-90,44,90)">Enterprise / Institutional</text><text x="44" y="575" text-anchor="middle" font-size="9" fill="#888" transform="rotate(-90,44,575)">Developer / Startup</text><text x="410" y="648" text-anchor="middle" font-size="11" font-weight="700" fill="#555">PERMISSIONING MODEL</text><text x="128" y="637" text-anchor="middle" font-size="9" fill="#888">Fully Permissioned</text><text x="688" y="637" text-anchor="middle" font-size="9" fill="#888">Fully Permissionless</text></g>
<g class="g-ql"><text x="244" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#6A1B9A" fill-opacity=".7">PERMISSIONED  ·  ENTERPRISE</text><text x="572" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#2E7D32" fill-opacity=".8">PERMISSIONLESS  ·  ENTERPRISE</text><text x="244" y="352" text-anchor="middle" font-size="10" font-weight="700" fill="#E65100" fill-opacity=".6">PERMISSIONED  ·  DEVELOPER</text><text x="572" y="352" text-anchor="middle" font-size="10" font-weight="700" fill="#1565C0" fill-opacity=".65">PERMISSIONLESS  ·  DEVELOPER</text></g>
<g class="g-p1"><circle cx="108" cy="76" r="22" fill="#FF6B35" opacity=".85"/><text x="108" y="72" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">R3</text><text x="108" y="85" text-anchor="middle" font-size="8" fill="#fff">CORDA</text><text x="108" y="112" text-anchor="middle" font-size="9" fill="#555">Permissioned · Finance</text></g>
<g class="g-p2"><circle cx="706" cy="444" r="22" fill="#E6007A" opacity=".85"/><text x="706" y="440" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">POLKA</text><text x="706" y="453" text-anchor="middle" font-size="8" fill="#fff">DOT</text><text x="706" y="478" text-anchor="middle" font-size="9" fill="#555">Permissionless · Dev</text></g>
<g class="g-p3"><circle cx="610" cy="516" r="22" fill="#2E3148" opacity=".85"/><text x="610" y="512" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">COS</text><text x="610" y="525" text-anchor="middle" font-size="8" fill="#fff">MOS</text><text x="610" y="550" text-anchor="middle" font-size="9" fill="#555">Permissionless · Dev</text></g>
<g class="g-p4"><circle cx="540" cy="386" r="22" fill="#E84142" opacity=".85"/><text x="540" y="382" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">AVA</text><text x="540" y="395" text-anchor="middle" font-size="8" fill="#fff">LANCHE</text><text x="540" y="420" text-anchor="middle" font-size="9" fill="#555">Dev-leaning · Token</text></g>
<g class="g-ann"><path d="M252,178 Q420,240 624,302" fill="none" stroke="#1B5E7B" stroke-width="2" stroke-dasharray="8,5" stroke-opacity=".6"/><text x="440" y="236" text-anchor="middle" font-size="10" fill="#1B5E7B" font-weight="700" font-style="italic">CERULEA DUAL-CHAIN: covers both positions</text></g>
<g class="g-p5"><circle cx="236" cy="155" r="26" fill="#1B5E7B"/><text x="236" y="148" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">CERULEA</text><text x="236" y="161" text-anchor="middle" font-size="8" fill="#AEDBE8">PRIVATE</text><text x="236" y="193" text-anchor="middle" font-size="9" fill="#1B5E7B">Permissioned · Enterprise</text><circle cx="638" cy="302" r="26" fill="#1B5E7B" fill-opacity=".2" stroke="#1B5E7B" stroke-width="2.5"/><text x="638" y="295" text-anchor="middle" font-size="9" font-weight="700" fill="#1B5E7B">CERULEA</text><text x="638" y="308" text-anchor="middle" font-size="8" fill="#1B5E7B">PUBLIC L1</text><text x="638" y="340" text-anchor="middle" font-size="9" fill="#1B5E7B">Permissionless · Both</text></g>
</svg>` }}
      />
    </>
  );
}
const QuadrantCDiagram = makeDiagram(QuadrantCContent);

// Quadrant D: Time-to-Deploy vs Customisability
function QuadrantDContent() {
  return (
    <>
      <style>{makeQuadrantCSS("qd")}</style>
      <div className="wp-qd" style={{ borderRadius: 12, border: "1px solid #E5E7EB", overflow: "hidden" }}
        dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 820 680" xmlns="http://www.w3.org/2000/svg" font-family="'Segoe UI',Arial,sans-serif">
<g class="g-bg"><rect width="820" height="680" fill="#F4F8FA" rx="10"/></g>
<g class="g-title"><text x="410" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#1B5E7B" letter-spacing="1">TIME-TO-DEPLOY vs CUSTOMISABILITY</text><text x="410" y="48" text-anchor="middle" font-size="10" fill="#888">X: Customisability of chain parameters  ·  Y: Deployment time (bottom = fast)</text></g>
<g class="g-shade"><rect x="80" y="55" width="328" height="275" fill="#FFEBEE" fill-opacity=".45" rx="4"/><rect x="408" y="55" width="329" height="275" fill="#FFF8E1" fill-opacity=".6" rx="4"/><rect x="80" y="330" width="328" height="275" fill="#E3F2FD" fill-opacity=".3" rx="4"/><rect x="408" y="330" width="329" height="275" fill="#E8F5E9" fill-opacity=".7" rx="4"/></g>
<g class="g-axes"><line x1="80" y1="50" x2="80" y2="614" stroke="#333" stroke-width="2"/><line x1="75" y1="608" x2="737" y2="608" stroke="#333" stroke-width="2"/><polygon points="80,44 74,58 86,58" fill="#333"/><polygon points="743,608 729,602 729,614" fill="#333"/><line x1="408" y1="50" x2="408" y2="608" stroke="#bbb" stroke-width="1" stroke-dasharray="5,4"/><line x1="80" y1="330" x2="737" y2="330" stroke="#bbb" stroke-width="1" stroke-dasharray="5,4"/></g>
<g class="g-labs"><text x="26" y="330" text-anchor="middle" font-size="11" font-weight="700" fill="#555" transform="rotate(-90,26,330)">TIME TO DEPLOY</text><text x="44" y="90" text-anchor="middle" font-size="9" fill="#888" transform="rotate(-90,44,90)">Months to Years (Slow)</text><text x="44" y="575" text-anchor="middle" font-size="9" fill="#888" transform="rotate(-90,44,575)">Weeks to Months (Fast)</text><text x="410" y="648" text-anchor="middle" font-size="11" font-weight="700" fill="#555">CUSTOMISABILITY</text><text x="128" y="637" text-anchor="middle" font-size="9" fill="#888">Fixed Defaults</text><text x="688" y="637" text-anchor="middle" font-size="9" fill="#888">Fully Configurable</text></g>
<g class="g-ql"><text x="244" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#B71C1C" fill-opacity=".65">RIGID  ·  SLOW</text><text x="572" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#E65100" fill-opacity=".75">CUSTOMISABLE  ·  SLOW</text><text x="244" y="352" text-anchor="middle" font-size="10" font-weight="700" fill="#1565C0" fill-opacity=".45">RIGID  ·  FAST</text><text x="572" y="352" text-anchor="middle" font-size="10" font-weight="700" fill="#2E7D32" fill-opacity=".8">CUSTOMISABLE  ·  FAST</text></g>
<g class="g-p1"><circle cx="211" cy="218" r="22" fill="#FF6B35" opacity=".85"/><text x="211" y="214" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">R3</text><text x="211" y="227" text-anchor="middle" font-size="8" fill="#fff">CORDA</text><text x="211" y="252" text-anchor="middle" font-size="9" fill="#555">Fixed · Slow</text></g>
<g class="g-p2"><circle cx="610" cy="196" r="22" fill="#2E3148" opacity=".85"/><text x="610" y="192" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">COS</text><text x="610" y="205" text-anchor="middle" font-size="8" fill="#fff">MOS</text><text x="610" y="230" text-anchor="middle" font-size="9" fill="#555">Flexible · 6-12 months</text></g>
<g class="g-p3"><circle cx="704" cy="116" r="22" fill="#E6007A" opacity=".85"/><text x="704" y="112" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">POLKA</text><text x="704" y="125" text-anchor="middle" font-size="8" fill="#fff">DOT</text><text x="704" y="150" text-anchor="middle" font-size="9" fill="#555">Flexible · 6-12 months</text></g>
<g class="g-p4"><circle cx="507" cy="302" r="22" fill="#E84142" opacity=".85"/><text x="507" y="298" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">AVA</text><text x="507" y="311" text-anchor="middle" font-size="8" fill="#fff">LANCHE</text><text x="507" y="336" text-anchor="middle" font-size="9" fill="#555">Subnets · 3-6 months</text></g>
<g class="g-p5"><circle cx="671" cy="526" r="32" fill="#1B5E7B"/><circle cx="671" cy="526" r="36" fill="none" stroke="#1B5E7B" stroke-width="2" stroke-opacity=".3"/><text x="671" y="521" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">CERULEA</text><text x="671" y="535" text-anchor="middle" font-size="8" fill="#AEDBE8">Full config · Months</text><text x="671" y="570" text-anchor="middle" font-size="10" fill="#1B5E7B" font-weight="700">cerulea.io</text></g>
</svg>` }}
      />
    </>
  );
}
const QuadrantDDiagram = makeDiagram(QuadrantDContent);

// ─── Whitepaper-specific components ───────────────────────────────────────────

function CompTable({ cols, rows }) {
  return (
    <div style={{ overflowX: "auto", margin: "16px 0", borderRadius: 10, overflow: "hidden", border: "1px solid #E5E7EB" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr>
            {cols.map((c, i) => (
              <th key={i} style={{ background: "#1A3C6B", color: "#fff", padding: "12px 16px", textAlign: "left", fontWeight: 600, fontFamily: "'DM Sans', sans-serif", borderRight: i < cols.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: "11px 16px", borderBottom: "1px solid #F1F5F9", background: i % 2 === 0 ? "#F9FAFB" : "#fff", fontWeight: j === 0 ? 700 : 400, color: j === 0 ? "#1A3C6B" : "#4B5563", borderRight: j < row.length - 1 ? "1px solid #E5E7EB" : "none", lineHeight: 1.5 }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function KVTable({ rows }) {
  const [ref, visible] = useReveal(0.05);
  return (
    <div ref={ref} style={{ margin: "16px 0", borderRadius: 10, overflow: "hidden", border: "1px solid #E5E7EB", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)", transition: "opacity 0.5s ease, transform 0.5s ease" }}>
      {rows.map(([k, v], i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "200px 1fr", borderBottom: i < rows.length - 1 ? "1px solid #E5E7EB" : "none" }}>
          <div style={{ padding: "12px 16px", fontSize: 13, fontWeight: 700, color: "#1A3C6B", background: i % 2 === 0 ? "#EBF3FB" : "#F9FAFB", borderRight: "1px solid #E5E7EB", display: "flex", alignItems: "center" }}>{k}</div>
          <div style={{ padding: "12px 16px", fontSize: 13.5, color: "#374151", background: i % 2 === 0 ? "#F0F7FF" : "#fff", lineHeight: 1.6 }}>{v}</div>
        </div>
      ))}
    </div>
  );
}

// ─── Sidebar (identical to CeruleaDocs) ───────────────────────────────────────

function Sidebar({ activeSection, onNavigate, searchQuery, setSearchQuery, collapsed, onCollapse }) {
  return (
    <aside style={{
      position: "fixed", top: 64, left: 0,
      width: collapsed ? 64 : 272, height: "calc(100vh - 64px)",
      background: "linear-gradient(160deg, #0f2544 0%, #1A3C6B 60%, #1e4d8c 100%)",
      display: "flex", flexDirection: "column", zIndex: 100,
      transition: "width 0.3s ease", overflow: "hidden",
      boxShadow: "4px 0 24px rgba(0,0,0,0.15)"
    }}>
      <div style={{ padding: "24px 18px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ overflow: "hidden" }}>
            {!collapsed && <>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: "0.1em", fontFamily: "'DM Serif Display', Georgia, serif" }}>CERULEA</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>Platform Whitepaper v4.0</div>
            </>}
          </div>
          <button onClick={() => onCollapse(!collapsed)} style={{
            background: "rgba(255,255,255,0.08)", border: "none", color: "rgba(255,255,255,0.6)",
            width: 28, height: 28, borderRadius: 6, cursor: "pointer", fontSize: 12,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
          }}>{collapsed ? "›" : "‹"}</button>
        </div>
      </div>

      {!collapsed && (
        <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search whitepaper..."
            style={{
              width: "100%", padding: "8px 12px",
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 8, color: "#fff", fontSize: 12.5, outline: "none",
              fontFamily: "'DM Sans', sans-serif"
            }}
          />
        </div>
      )}

      <nav style={{ flex: 1, overflowY: "auto", padding: "12px 0", scrollbarWidth: "none" }}>
        {SECTIONS.filter(s => !searchQuery || s.title.toLowerCase().includes(searchQuery.toLowerCase())).map(s => {
          const isActive = activeSection === s.id;
          return (
            <a key={s.id} href={`#${s.id}`} onClick={e => { e.preventDefault(); onNavigate(s.id); }}
              title={collapsed ? `${s.num}. ${s.title}` : ""}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "9px 18px", textDecoration: "none", fontSize: 12.5, fontFamily: "'DM Sans', sans-serif",
                color: isActive ? "#fff" : "rgba(255,255,255,0.55)",
                background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
                borderLeft: `3px solid ${isActive ? "#60A5FA" : "transparent"}`,
                transition: "all 0.15s ease", whiteSpace: "nowrap", overflow: "hidden"
              }}
            >
              <span style={{ fontSize: 10, fontWeight: 800, color: isActive ? "#93C5FD" : "rgba(255,255,255,0.3)", letterSpacing: "0.06em", minWidth: 22, flexShrink: 0 }}>{s.num}</span>
              {!collapsed && <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{s.title}</span>}
            </a>
          );
        })}
      </nav>

      {!collapsed && (
        <div style={{ padding: "12px 18px", borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: 11, color: "rgba(255,255,255,0.3)", flexShrink: 0 }}>
          February 2026 &nbsp;·&nbsp; Version 1.0
        </div>
      )}
    </aside>
  );
}

// ─── Section components ────────────────────────────────────────────────────────

function P({ children }) {
  return <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", marginBottom: 14, textAlign: "justify" }}>{children}</p>;
}

function AbstractSection() {
  return (
    <section id="abstract" style={{ marginBottom: 80 }}>
      <SectionHeader num="I" title="Abstract" />
      <P>Blockchain infrastructure has long been the domain of highly specialised engineering teams. Building a production-grade blockchain system requires coordinating runtime compilation, validator configuration, governance wiring, infrastructure provisioning, DevOps pipelines, and monitoring stacks. Each layer demands distinct expertise, separate tooling, and months of integration work.</P>
      <Note>Cerulea exists because the barrier to deploying blockchain infrastructure has never been the idea. It has always been the execution. We built a platform to close that gap permanently.</Note>
      <P>Cerulea is a fully no-code blockchain infrastructure platform. Organisations and developers design, deploy, and operate complete public or private blockchain systems through structured configuration alone. No code is written at any stage. Every architectural decision — validator structure, governance mechanics, infrastructure topology, compliance enforcement, upgrade policy — is expressed through configuration, not engineering.</P>
      <P>This whitepaper describes Cerulea's architecture, platform capabilities, governance framework, security model, and enterprise operating model. It is written for technical evaluators, enterprise architects, and decision-makers assessing blockchain infrastructure options.</P>
    </section>
  );
}

function ForWhomSection() {
  return (
    <section id="for-whom" style={{ marginBottom: 80 }}>
      <SectionHeader num="II" title="Who Is This For" />
      <P>Cerulea serves organisations and builders at the infrastructure layer of blockchain, not at the application layer that runs on top of it.</P>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, margin: "20px 0" }}>
        {[
          { icon: "🏢", title: "Enterprise Teams", body: "Organisations in finance, logistics, healthcare, or government that need a permissioned blockchain environment with compliance controls, data sovereignty, and internal governance authority." },
          { icon: "🏗️", title: "Platform Builders", body: "Teams building ecosystem infrastructure, shared network services, or multi-party coordination systems that require a governed public blockchain layer." },
          { icon: "⚙️", title: "Technical Architects", body: "Engineers and architects responsible for selecting and evaluating blockchain infrastructure stacks. Cerulea replaces custom build with structured configuration." },
          { icon: "🚀", title: "Founders & Product Teams", body: "Builders who need blockchain infrastructure without assembling a specialised engineering team. Cerulea removes the engineering dependency without removing architectural depth." },
        ].map((c, i) => <Card key={i} {...c} delay={i * 80} />)}
      </div>
      <Note>Cerulea is purpose-built for blockchain infrastructure — not a smart contract builder, token launchpad, DeFi application platform, or general SaaS host.</Note>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="problem" style={{ marginBottom: 80 }}>
      <SectionHeader num="III" title="The Problem" />
      <P>Deploying a production blockchain system today means assembling and integrating a fragmented engineering stack:</P>
      <BulletList items={[
        "Runtime engineering and genesis configuration",
        "Validator setup, staking logic, and slashing conditions",
        "Governance wiring for on-chain proposal and voting mechanics",
        "Infrastructure provisioning across cloud or on-premise environments",
        "DevOps pipelines, monitoring stacks, and alerting systems",
        "Integration layers connecting to external enterprise systems",
      ]} />
      <P>Each of these layers requires different expertise, different tools, and different teams. For enterprises, the problem compounds: compliance requirements, data sovereignty constraints, and internal governance mandates cannot be accommodated by off-the-shelf platforms designed for open participation.</P>
      <P>The result is slow deployment, high cost, and infrastructure that is difficult to audit, upgrade, or retire safely. Cerulea was built to solve this.</P>
    </section>
  );
}

function SolutionSection() {
  const [ref, visible] = useReveal(0.05);
  return (
    <section id="solution" style={{ marginBottom: 80 }}>
      <SectionHeader num="IV" title="The Cerulea Solution" />
      <P>Cerulea replaces the fragmented blockchain engineering process with a unified, no-code configuration framework. Architecture becomes structured. Infrastructure becomes intentional. Governance becomes explicit. Deployment becomes atomic.</P>
      <div ref={ref} style={{ background: "linear-gradient(135deg, #EBF3FB 0%, #F0F7FF 100%)", border: "1px solid #BFDBF7", borderRadius: 14, padding: "22px 24px", margin: "24px 0", opacity: visible ? 1 : 0, transition: "opacity 0.6s ease" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#2E75B6", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Build Lifecycle</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 0, alignItems: "center", justifyContent: "space-between" }}>
          {["Create","Configure","Deploy","Operate","Govern","Upgrade","Expand","Monitor","Retire"].map((label, i) => (
            <div key={label} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{ width: 38, height: 38, background: "#fff", border: "1.5px solid #BFDBF7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#2E75B6", fontWeight: 700, boxShadow: "0 2px 8px rgba(46,117,182,0.1)" }}>{String(i+1).padStart(2,"0")}</div>
                <span style={{ fontSize: 10, fontWeight: 600, color: "#2E75B6", letterSpacing: "0.04em" }}>{label}</span>
              </div>
              {i < 8 && <span style={{ color: "#93C5FD", fontSize: 16, margin: "0 4px", marginBottom: 14 }}>›</span>}
            </div>
          ))}
        </div>
      </div>
      <LifecycleDiagram />
      <Subsection title="What Cerulea Deploys">
        <P>When a deployment is triggered, Cerulea generates and provisions:</P>
        <BulletList items={[
          "A functioning blockchain network (public or private)",
          "Runtime configuration and genesis parameters",
          "Validator initialization and governance logic",
          "Smart contract execution capability",
          "API and RPC access layers",
          "Monitoring and observability infrastructure",
          "Operational dashboard and explorer surfaces",
        ]} />
      </Subsection>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section id="philosophy" style={{ marginBottom: 80 }}>
      <SectionHeader num="V" title="Core Philosophy" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, margin: "8px 0 28px" }}>
        {[
          { icon: "◈", title: "Determinism", body: "Every system is the result of explicit configuration. No emergent deployments and no invisible defaults influencing runtime behavior." },
          { icon: "⇄", title: "Separation", body: "Until deployment is triggered, nothing exists operationally. Configuration is structured, versioned, and stored — but not executed." },
          { icon: "−", title: "Reduced Dependency", body: "Cerulea removes the requirement to express architecture through code. Complex systems can still be built through structured configuration." },
          { icon: "◎", title: "Configurable Decentralization", body: "Decentralization is an architectural decision — validator openness, governance weighting, and compliance enforcement are all configurable." },
        ].map((c, i) => <Card key={i} {...c} delay={i * 80} />)}
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section id="architecture" style={{ marginBottom: 80 }}>
      <SectionHeader num="VI" title="Architecture" />
      <ArchDiagram />
      <P>Cerulea supports two primary deployment architectures. The architecture selected at project creation determines every subsequent configuration decision.</P>
      <CompTable
        cols={["Dimension", "Public L1", "Private Chain"]}
        rows={[
          ["Participation", "Open, permissionless", "Permissioned, enterprise-controlled"],
          ["Governance", "Token-weighted, community-driven", "Authority-based, organisation-defined"],
          ["Validators", "Hybrid open onboarding, PoS", "Enterprise-selected nodes"],
          ["Infrastructure", "Distributed network participants", "Cloud, on-prem, or hybrid (org-owned)"],
          ["Use Cases", "dApps, token systems, ecosystem services", "Enterprise blockchain, regulated industries"],
          ["Compliance", "Network-level rules only", "Custom compliance enforcement modules"],
          ["Data control", "Network participants", "Deploying organisation exclusively"],
        ]}
      />
      <Subsection title="Runtime Engine">
        <P>The Runtime Engine defines how configured systems become executable blockchain environments. Runtime behavior is versioned: every deployment is associated with a specific runtime version, and changes occur only through governance-approved upgrades.</P>
        <BulletList items={[
          "WASM-based execution for smart contracts and modules",
          "EVM compatibility for Solidity-based contracts on Public L1",
          "On-chain parameter adjustments via governance",
          "Runtime security sandboxing to prevent unauthorised execution",
          "Versioned upgrade orchestration with no hard forks required",
        ]} />
      </Subsection>
      <Subsection title="Cross-Chain Interoperability">
        <P>Cross-chain capabilities are configured, not assumed. Supported interoperability includes cross-chain message passing, asset bridging protocols, and optional Private Chain to Public L1 connectivity. All external connectivity must be explicitly enabled during configuration.</P>
      </Subsection>
    </section>
  );
}

function DualChainSection() {
  return (
    <section id="dual-chain" style={{ marginBottom: 80 }}>
      <SectionHeader num="VII" title="Dual-Chain Model" />
      <P>Every Cerulea deployment is one of two sovereign architectures — Public L1 or Cerulea Private. This selection, made at project creation in Studio, determines all subsequent decisions about governance, infrastructure ownership, compliance posture, and validator control. Both architectures are complete, standalone blockchain environments accessed through the same interface.</P>
      <DualChainDiagram />
      <Subsection title="Public L1">
        <P>The Public L1 operates as Cerulea's open, permissionless blockchain network. Validators are admitted through the DCF policy registry. Governance is token-weighted and community-driven. All chain activity is publicly visible through Cerulea Explorer. The Public L1 is appropriate for dApps, token systems, public registries, and open ecosystem services.</P>
      </Subsection>
      <Subsection title="Cerulea Private">
        <P>Cerulea Private deployments are sovereign enterprise blockchain environments. The deploying organisation owns the validator infrastructure, holds governance authority, and has exclusive access to all chain state. Zero vendor access exists — Cerulea cannot read transaction payloads or smart contract state. This architecture is appropriate for regulated industries, government use cases, supply chain systems, and any environment where data sovereignty and compliance authority are non-negotiable.</P>
      </Subsection>
      <Subsection title="Optional Bridge Connectivity">
        <P>Both chain types can optionally connect through the Cross-Chain Bridge Engine. This enables selective asset transfers and message passing between Public L1 and Private Chain environments without compromising the sovereignty of either. Bridge connectivity must be explicitly configured — it is never assumed or applied by default.</P>
      </Subsection>
      <CompTable
        cols={["Dimension", "Public L1", "Cerulea Private"]}
        rows={[
          ["Participation", "Open, permissionless", "Permissioned, enterprise-controlled"],
          ["Governance", "Token-weighted, community-driven", "Authority-based, organisation-defined"],
          ["Validators", "DCF registry, open onboarding", "Enterprise-selected, organisation-owned"],
          ["Infrastructure", "Distributed network participants", "Cloud, on-prem, or hybrid (org-owned)"],
          ["Data visibility", "Public via Cerulea Explorer", "Enterprise-exclusive, zero vendor access"],
          ["Compliance", "Network-level rules only", "Custom enforcement modules, full control"],
          ["Use cases", "dApps, tokens, ecosystem services", "Enterprise blockchain, regulated industries"],
        ]}
      />
    </section>
  );
}

function DCFSection() {
  return (
    <section id="dcf" style={{ marginBottom: 80 }}>
      <SectionHeader num="VIII" title="Dynamic Consensus Framework" />
      <P>The Dynamic Consensus Framework (DCF) is Cerulea's validator coordination mechanism. It differs from conventional blockchain consensus in a fundamental way: validator participation is governed by explicit policies, not by token holdings or open entry. Under DCF, validators are admitted, rotated, and suspended according to a structured eight-pillar policy set.</P>
      <DCFDiagram />
      <Subsection title="The Eight Policy Pillars">
        <BulletList items={[
          "Approved Validator Registry — only nodes listed in the registry may participate in validation",
          "Identity-Verified Operators — validators must be verified entities: companies, institutions, or approved organisations",
          "Uptime + Performance — validators must meet defined thresholds for availability, sync health, and latency",
          "Reputation + Behaviour — missed blocks and misbehaviour are scored and factored into eligibility",
          "Policy-Based Rotation — validator slot allocation follows eligibility, fairness, and availability rules",
          "Governance-Permissioned Admission — admission, suspension, and reinstatement pass through on-chain governance",
          "Security Compliance — validators must demonstrate key management hygiene and system patching standards",
          "Infrastructure Requirements — hardware, network capacity, and node configuration must meet defined minimums",
        ]} />
      </Subsection>
      <Subsection title="Public L1 vs Private Chain DCF">
        <P>On the Public L1, the DCF policy set is fixed and community-governed. Policy changes require a governance proposal and quorum approval. On Cerulea Private, all eight policy pillars are fully configurable by the enterprise at deployment time and adjustable through internal governance thereafter. This gives regulated organisations direct control over every dimension of their validator environment.</P>
        <Note>DCF does not use token staking to determine validator selection. Eligibility is policy-driven. This makes validator behaviour predictable and auditable — critical for regulated deployments.</Note>
      </Subsection>
      <Subsection title="Upgrade Strategies">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            ["Rolling", "Changes applied incrementally across validator nodes. The network continues operating throughout the upgrade."],
            ["Canary", "Changes applied to a limited subset of nodes first to validate behaviour under live conditions before proceeding."],
            ["Blue-Green", "Two parallel environments run simultaneously. Traffic shifts at a defined point for near-zero downtime."],
          ].map(([tag, body], i) => <StrategyStep key={tag} tag={tag} body={body} index={i} />)}
        </div>
      </Subsection>
    </section>
  );
}

function StudioSection() {
  return (
    <section id="studio" style={{ marginBottom: 80 }}>
      <SectionHeader num="IX" title="Cerulea Studio" />
      <P>Cerulea Studio is the core environment through which all blockchain systems are created, configured, and deployed. It is not a companion interface. It is the only way to build on Cerulea.</P>
      {[
        { title: "Architecture Selection", body: "The first decision inside Studio defines the architectural topology, determining validator structure, governance mechanics, infrastructure ownership, compliance posture, and operational control boundaries." },
        { title: "Templates and Module Presets", body: "Templates are structured starting points that accelerate configuration without restricting flexibility. Every element can be adjusted, extended, or replaced. Templates reduce friction without reducing control." },
        { title: "Module Configuration Framework", body: "Infrastructure Modules govern foundational mechanics: consensus, validator management, upgrade orchestration, and governance hooks. Application Modules extend the system with token systems, identity frameworks, payment logic, and compliance enforcement." },
        { title: "Workspace and Project Model", body: "Workspaces represent organisational boundaries. Projects within workspaces represent individual blockchain systems, containing all configuration including architecture selection, module settings, governance setup, deployment history, and operational state." },
        { title: "Deployment Engine", body: "When triggered, Cerulea provisions the complete operational stack in a single atomic activation: runtime, validator structures, governance hooks, monitoring surfaces, and operational interfaces. There is no partial deployment state." },
      ].map(({ title, body }) => (
        <Subsection key={title} title={title}><P>{body}</P></Subsection>
      ))}
    </section>
  );
}

function GovernanceSection() {
  return (
    <section id="governance" style={{ marginBottom: 80 }}>
      <SectionHeader num="X" title="Governance" />
      <P>Governance is the operational mechanism through which all post-deployment change occurs in Cerulea. It is not optional. No system can be modified outside the governance framework once deployed.</P>
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
      <Subsection title="Upgrade Strategies">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            ["Rolling", "Changes applied incrementally across validator nodes. The network continues operating throughout the upgrade."],
            ["Canary", "Changes applied to a limited subset of nodes first to validate behavior under live conditions before proceeding."],
            ["Blue-Green", "Two parallel environments run simultaneously. Traffic is shifted at a defined point for near-zero downtime."],
          ].map(([tag, body], i) => <StrategyStep key={tag} tag={tag} body={body} index={i} />)}
        </div>
      </Subsection>
    </section>
  );
}

function SecuritySection() {
  return (
    <section id="security" style={{ marginBottom: 80 }}>
      <SectionHeader num="XI" title="Security Model" />
      <Subsection title="Operational vs. Data Control Boundary">
        <TwoCol
          leftTitle="Cerulea manages"
          rightTitle="Enterprise owns"
          left={["Deployment orchestration", "Upgrade management", "Monitoring surface provisioning", "Lifecycle control tooling"]}
          right={["Transaction execution and state", "Smart contract state", "Validator key management", "All enterprise data within the deployed system"]}
        />
        <Note>Cerulea does not read transaction payloads, access smart contract state, or control enterprise validator keys. This boundary is enforced architecturally, not by policy.</Note>
      </Subsection>
      <Subsection title="Enterprise Data Sovereignty">
        <P>Organisations retain exclusive control over transaction content, validator key management, network exposure boundaries, governance participation, and all infrastructure decisions.</P>
      </Subsection>
      <Subsection title="Compliance Positioning">
        <BulletList items={[
          "Role-based access control for permissioned participation",
          "Governance-controlled upgrade and change management",
          "Audit trails for all governance actions and configuration changes",
          "Enterprise-defined compliance rule enforcement at the module level",
          "Cross-border governance adaptability for multi-jurisdiction deployments",
        ]} />
        <Note>Cerulea provides the structural controls through which organisations can implement their own compliance requirements — not legal compliance certifications.</Note>
      </Subsection>
    </section>
  );
}

function IntelligenceSection() {
  return (
    <section id="intelligence" style={{ marginBottom: 80 }}>
      <SectionHeader num="XII" title="Cerulea Intelligence" />
      <P>Cerulea Intelligence is an embedded guidance layer inside Studio that provides contextual recommendations and risk-aware signals during the design and configuration phase only. It cannot take autonomous action.</P>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, margin: "20px 0" }}>
        {[
          { icon: "◎", title: "Configuration Guidance", body: "Explains configuration implications, highlights structural gaps, and suggests governance alignment based on architecture intent." },
          { icon: "△", title: "Risk Signals", body: "Surfaces missing configuration, conflicting governance settings, incomplete integrations, and infrastructure issues before deployment." },
          { icon: "◉", title: "Use Case Example", body: "A Private Chain user with compliance modules enabled receives governance suggestions tailored to authority-based models and regulated infrastructure." },
          { icon: "✗", title: "Intentionally Constrained", body: "Cannot deploy systems, change config without user action, execute governance proposals, manage validators, or access transaction data." },
        ].map((c, i) => <Card key={i} {...c} delay={i * 80} />)}
      </div>
      <Note>Cerulea Intelligence is an advisory system, not an autonomous agent. Every action remains under explicit user and governance control.</Note>
    </section>
  );
}

function CompetitiveSection() {
  return (
    <section id="competitive" style={{ marginBottom: 80 }}>
      <SectionHeader num="XIII" title="Competitive Analysis" />
      <P>Four dimensions define Cerulea's competitive position in the blockchain infrastructure market. Each chart maps the existing landscape against a distinct decision axis, plotting Cerulea against R3 Corda, Cosmos, Polkadot, and Avalanche — the four most frequently evaluated alternatives for enterprise and developer blockchain infrastructure.</P>
      <P>The central finding across all four dimensions: no other platform simultaneously achieves high configurability, enterprise-grade sophistication, fast deployment, and zero code requirement. Cerulea occupies a position that requires combining those capabilities — and no alternative currently fills that space.</P>

      <Subsection title="Deployment Complexity vs Chain Flexibility">
        <P>Competitors achieve high flexibility only at the cost of high deployment complexity (Cosmos, Polkadot). Cerulea achieves maximum chain configurability with the lowest deployment complexity on the market — no code, no custom runtime engineering required.</P>
        <QuadrantADiagram />
      </Subsection>

      <Subsection title="Code Requirement vs Chain Sophistication">
        <P>Every other sophisticated blockchain infrastructure platform requires extensive custom code: Rust for Polkadot parachains, Go for Cosmos appchains, Java for Corda flows, EVM/HyperSDK for Avalanche subnets. Cerulea delivers enterprise-grade sophistication through structured configuration alone — no code written at any stage.</P>
        <QuadrantBDiagram />
      </Subsection>

      <Subsection title="Permissioning Model vs Target Buyer">
        <P>The market is fragmented: permissioned platforms serve enterprise buyers (Corda), permissionless platforms serve developer/startup buyers (Cosmos, Polkadot, Avalanche). No single platform spans both. Cerulea's dual-chain model is the only architecture that covers the full spectrum — Cerulea Private serves permissioned enterprise buyers, while the Public L1 serves permissionless developer and enterprise use cases simultaneously.</P>
        <QuadrantCDiagram />
      </Subsection>

      <Subsection title="Time-to-Deploy vs Customisability">
        <P>The industry trade-off has always been: fast deployment means fixed defaults (Corda), full customisation means months of engineering (Cosmos, Polkadot). Avalanche's subnet model improves on this but still requires 3–6 months. Cerulea breaks the trade-off entirely: full parameter configurability, deployable in weeks to months through Studio alone.</P>
        <QuadrantDDiagram />
      </Subsection>
    </section>
  );
}

function IntegrationsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const categories = [
    { title: "Payments",       providers: ["Stripe", "PayPal", "Coinbase Commerce", "Lemon Squeezy", "Razorpay"] },
    { title: "Authentication", providers: ["Clerk", "Privy", "Dynamic", "Auth0", "Firebase Auth"] },
    { title: "Communication",  providers: ["SendGrid", "Resend", "Twilio", "XMTP", "Push Protocol"] },
    { title: "Storage",        providers: ["AWS S3", "Pinata (IPFS)", "Irys (Arweave)", "Lighthouse (Filecoin)", "Supabase Storage"] },
    { title: "Data & Oracles", providers: ["Chainlink", "The Graph", "Alchemy", "Moralis", "Pyth Network"] },
    { title: "Analytics",      providers: ["PostHog", "Segment", "Dune API", "Google Analytics 4", "Mixpanel"] },
    { title: "Webhooks",       providers: ["Slack", "Discord", "Telegram Bot", "Zapier", "Custom Endpoint"] },
  ];
  const cat = categories[activeTab];
  return (
    <section id="integrations" style={{ marginBottom: 80 }}>
      <SectionHeader num="XIV" title="Integrations" />
      <P>Integrations allow Cerulea deployments to interact with external systems at the operational boundary. They do not override governance or runtime behavior.</P>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "20px 0" }}>
        {categories.map((c, i) => (
          <button key={i} onClick={() => setActiveTab(i)} style={{ padding: "7px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600, border: `1.5px solid ${activeTab === i ? "#1A3C6B" : "#E5E7EB"}`, background: activeTab === i ? "#1A3C6B" : "#fff", color: activeTab === i ? "#fff" : "#6B7280", cursor: "pointer", transition: "all 0.2s ease", fontFamily: "'DM Sans', sans-serif" }}>
            {c.title}
          </button>
        ))}
      </div>
      <div key={activeTab} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10, animation: "fadeSlideIn 0.3s ease" }}>
        {cat.providers.map((name, i) => (
          <div key={i} style={{ padding: "14px 16px", background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 10, fontSize: 14, fontWeight: 600, color: "#1A3C6B" }}>{name}</div>
        ))}
      </div>
      <style>{`@keyframes fadeSlideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  );
}

function EnterpriseSection() {
  return (
    <section id="enterprise" style={{ marginBottom: 80 }}>
      <SectionHeader num="XV" title="Enterprise Operating Model" />
      <P>Private Chain deployments are sovereign blockchain environments. The deploying organisation owns the system, controls the infrastructure, and bears operational responsibility. Cerulea provides the orchestration platform and operational tooling.</P>
      <TwoCol
        leftTitle="Enterprise Controls"
        rightTitle="Cerulea Provides"
        left={["All validator nodes and hosting environment", "Governance authority and participant roles", "Infrastructure scaling, redundancy, and uptime", "Exclusive access to transaction data and chain state", "Network exposure and API access policies"]}
        right={["Configuration framework and Studio environment", "Deployment orchestration and lifecycle tooling", "Upgrade coordination support", "Monitoring surfaces and observability", "Usage metering (usage data only, no payload access)"]}
      />
      {[
        { title: "Validator Ownership", body: "Validator node ownership belongs entirely to the enterprise. Cerulea may deploy a limited number of nodes solely for licensing enforcement and usage metering. These nodes have no access to transaction payloads, smart contract state, or enterprise data." },
        { title: "Enterprise Upgrade Model", body: "No upgrade can be applied by Cerulea without the deploying organisation triggering the process through their own governance. Enterprises schedule upgrades to align with maintenance windows, compliance review cycles, or change management processes." },
      ].map(({ title, body }) => (
        <Subsection key={title} title={title}><P>{body}</P></Subsection>
      ))}
    </section>
  );
}

function DecisionSection() {
  return (
    <section id="decision" style={{ marginBottom: 80 }}>
      <SectionHeader num="XVI" title="Decision Guide" />
      <P>Use this section before beginning configuration. Architecture, governance, infrastructure ownership, and cost structure all follow from this initial decision.</P>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, margin: "20px 0" }}>
        <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #A7F3D0" }}>
          <div style={{ padding: "14px 20px", background: "#059669", fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 15, color: "#fff", fontWeight: 700 }}>Choose Public L1 if…</div>
          <div style={{ padding: "16px 20px", background: "#fff" }}>
            <BulletList items={[
              "The system requires open, permissionless participation",
              "Governance must be community-driven and transparent",
              "You do not need to control who runs validators",
              "Your use case is a dApp, token system, or ecosystem service",
            ]} />
          </div>
        </div>
        <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #BFDBF7" }}>
          <div style={{ padding: "14px 20px", background: "#1A3C6B", fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 15, color: "#fff", fontWeight: 700 }}>Choose Private Chain if…</div>
          <div style={{ padding: "16px 20px", background: "#fff" }}>
            <BulletList items={[
              "Access must be permissioned",
              "The organisation must own and control validator infrastructure",
              "Compliance, audit, or regulatory requirements apply",
              "Governance authority must remain inside the organisation",
            ]} />
          </div>
        </div>
      </div>
      <Note><strong>Anchor question:</strong> Is this open ecosystem infrastructure, or controlled organisational infrastructure?</Note>
      <Subsection title="Cost vs. Control">
        <P>Cerulea removes the engineering cost of building blockchain systems. It does not remove the operational cost of running them. Public L1 reduces infrastructure cost but increases coordination overhead. Private Chains increase infrastructure responsibility but give full operational control. Neither model is cheaper by default.</P>
      </Subsection>
    </section>
  );
}

function SummarySection() {
  return (
    <section id="summary" style={{ marginBottom: 80 }}>
      <SectionHeader num="XVII" title="Platform Summary" />
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
    </section>
  );
}

// ─── App ────────────────────────────────────────────────────────────────────────

export default function CeruleaWhitepaper() {
  const [activeSection, setActiveSection] = useActiveSection();
  const [searchQuery, setSearchQuery] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const progress = useScrollProgress();
  const sidebarWidth = collapsed ? 64 : 272;

  const navigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: "#fff", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(26,60,107,0.2); border-radius: 4px; }
        p { margin: 0 0 14px; }
        a { text-decoration: none; }
      `}</style>

      {/* Reading progress bar */}
      <div style={{ position: "fixed", top: 64, left: 0, height: 3, zIndex: 200, background: "linear-gradient(90deg, #2E75B6, #60A5FA)", width: `${progress}%`, transition: "width 0.1s linear" }} />

      <Sidebar activeSection={activeSection} onNavigate={navigate} searchQuery={searchQuery} setSearchQuery={setSearchQuery} collapsed={collapsed} onCollapse={setCollapsed} />

      <main style={{ marginLeft: sidebarWidth, minHeight: "100vh", paddingBottom: 80, transition: "margin-left 0.3s ease" }}>
        {/* Breadcrumb */}
        <div style={{ position: "sticky", top: 64, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #F3F4F6", padding: "14px 52px", display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 50 }}>
          <div style={{ fontSize: 13, color: "#9CA3AF" }}>
            Cerulea &rsaquo; <span style={{ color: "#1A3C6B", fontWeight: 600 }}>{SECTIONS.find(s => s.id === activeSection)?.title || "Platform Whitepaper"}</span>
          </div>
          <div style={{ fontSize: 12, color: "#9CA3AF" }}>Version 1.0 &nbsp;·&nbsp; February 2026</div>
        </div>

        <div style={{ maxWidth: 860, padding: "60px 52px 0", width: "100%" }}>
          {/* Hero */}
          <div style={{ background: "linear-gradient(135deg, #0f2544 0%, #1A3C6B 55%, #2563ab 100%)", borderRadius: 20, padding: "56px 52px", marginBottom: 72, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, background: "radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
            <Tag>Platform Whitepaper</Tag>
            <h1 style={{ fontSize: 54, fontWeight: 700, color: "#fff", margin: "18px 0 12px", letterSpacing: "-0.03em", lineHeight: 1.05, fontFamily: "'DM Serif Display', Georgia, serif" }}>Cerulea</h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 500, lineHeight: 1.65, marginBottom: 36 }}>
              No-Code Blockchain Infrastructure Platform — Public L1 &amp; Private Chains.
            </p>
            <div style={{ display: "flex", gap: 28, fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
              {[["17", "Sections"], ["9", "Lifecycle Stages"], ["7", "Diagrams"]].map(([n, l]) => (
                <div key={l}>
                  <span style={{ fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.85)", display: "block", fontFamily: "'DM Serif Display', serif" }}>{n}</span>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sections */}
          <AbstractSection />
          <ForWhomSection />
          <ProblemSection />
          <SolutionSection />
          <PhilosophySection />
          <ArchitectureSection />
          <DualChainSection />
          <DCFSection />
          <StudioSection />
          <GovernanceSection />
          <SecuritySection />
          <IntelligenceSection />
          <CompetitiveSection />
          <IntegrationsSection />
          <EnterpriseSection />
          <DecisionSection />
          <SummarySection />

          {/* CTA */}
          <div style={{ background: "linear-gradient(135deg, #0f2544 0%, #1A3C6B 55%, #2563ab 100%)", borderRadius: 20, padding: "52px 48px", textAlign: "center", marginBottom: 40, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)", width: 400, height: 200, background: "radial-gradient(ellipse, rgba(96,165,250,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
            <Tag>Get Started</Tag>
            <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "2rem", color: "#fff", margin: "16px 0 10px", lineHeight: 1.2 }}>Ready to build on Cerulea?</div>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", marginBottom: "2rem", maxWidth: 440, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>Explore the platform, request a demo, or speak with our team about your infrastructure requirements.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/company/contact-sales" style={{ background: "#2E75B6", color: "#fff", padding: "12px 28px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none", transition: "background 0.2s" }}>Contact Sales</a>
              <a href="/developers/docs" style={{ background: "transparent", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.25)", padding: "12px 28px", borderRadius: 8, fontWeight: 500, fontSize: 14, textDecoration: "none" }}>View Documentation</a>
            </div>
          </div>

          {/* Disclaimer */}
          <div style={{ padding: "28px 32px", background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 12, marginBottom: 60 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2E75B6", marginBottom: 10 }}>Legal Disclaimer</div>
            <p style={{ fontSize: 12, color: "#9CA3AF", lineHeight: 1.7, margin: 0 }}>This document is provided for informational purposes only. The information contained herein is subject to change without notice. Cerulea makes no warranties, express or implied, regarding the accuracy or completeness of this document. This whitepaper does not constitute legal, financial, or regulatory advice. Organisations are responsible for ensuring that any deployment meets the legal and regulatory requirements applicable in their jurisdiction. Version 1.0, February 2026.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
