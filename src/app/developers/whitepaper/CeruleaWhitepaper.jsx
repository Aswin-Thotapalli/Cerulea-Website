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
  { id: "studio",       num: "VII",  title: "Cerulea Studio" },
  { id: "governance",   num: "VIII", title: "Governance" },
  { id: "security",     num: "IX",   title: "Security Model" },
  { id: "intelligence", num: "X",    title: "Cerulea Intelligence" },
  { id: "integrations", num: "XI",   title: "Integrations" },
  { id: "enterprise",   num: "XII",  title: "Enterprise Model" },
  { id: "decision",     num: "XIII", title: "Decision Guide" },
  { id: "summary",      num: "XIV",  title: "Platform Summary" },
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

function Sidebar({ activeSection, onNavigate, searchQuery, setSearchQuery }) {
  const [collapsed, setCollapsed] = useState(false);
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
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>Platform Whitepaper v1.0</div>
            </>}
          </div>
          <button onClick={() => setCollapsed(!collapsed)} style={{
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

function StudioSection() {
  return (
    <section id="studio" style={{ marginBottom: 80 }}>
      <SectionHeader num="VII" title="Cerulea Studio" />
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
      <SectionHeader num="VIII" title="Governance" />
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
      <SectionHeader num="IX" title="Security Model" />
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
      <SectionHeader num="X" title="Cerulea Intelligence" />
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
      <SectionHeader num="XI" title="Integrations" />
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
      <SectionHeader num="XII" title="Enterprise Operating Model" />
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
      <SectionHeader num="XIII" title="Decision Guide" />
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
      <SectionHeader num="XIV" title="Platform Summary" />
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
  const progress = useScrollProgress();

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

      <Sidebar activeSection={activeSection} onNavigate={navigate} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main style={{ marginLeft: 272, minHeight: "100vh", paddingBottom: 80 }}>
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
              {[["14", "Sections"], ["9", "Lifecycle Stages"], ["7", "Integration Categories"]].map(([n, l]) => (
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
          <StudioSection />
          <GovernanceSection />
          <SecuritySection />
          <IntelligenceSection />
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
