'use client';
import { useState, useEffect, useRef, useCallback } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const LIFECYCLE_STEPS = [
  { icon: "✦", label: "Create" },
  { icon: "⚙", label: "Configure" },
  { icon: "⬆", label: "Deploy" },
  { icon: "◈", label: "Operate" },
  { icon: "◎", label: "Govern" },
  { icon: "↑", label: "Upgrade" },
  { icon: "✙", label: "Expand" },
  { icon: "◉", label: "Monitor" },
  { icon: "□", label: "Retire" },
];

const SECTIONS = [
  { id: "foundation", num: "I", title: "Foundation" },
  { id: "decision", num: "II", title: "Decision Frameworks" },
  { id: "studio", num: "III", title: "Cerulea Studio" },
  { id: "lifecycle", num: "IV", title: "Build Lifecycle" },
  { id: "architecture", num: "V", title: "Architecture" },
  { id: "governance", num: "VI", title: "Governance" },
  { id: "infrastructure", num: "VII", title: "Infrastructure" },
  { id: "security", num: "VIII", title: "Security Model" },
  { id: "intelligence", num: "IX", title: "Cerulea Intelligence" },
  { id: "integrations", num: "X", title: "Integrations" },
  { id: "apis", num: "XI", title: "APIs & Access" },
  { id: "enterprise", num: "XII", title: "Enterprise Model" },
  { id: "glossary", num: "XIII", title: "Glossary" },
];

const INTEGRATION_CATEGORIES = [
  {
    id: "payments", title: "Payment Integrations",
    desc: "Connect blockchain execution with real-world payment infrastructure through transaction-triggered events and on-chain settlement confirmation.",
    providers: [
      { name: "Stripe", desc: "Industry-standard online payment processing and subscription management, suited for SaaS-adjacent blockchain products." },
      { name: "PayPal", desc: "Broad consumer payment acceptance including PayPal balance, Venmo, and Pay Later for user-facing applications." },
      { name: "Coinbase Commerce", desc: "Native crypto payment acceptance directly to a self-custodied wallet, suited for Web3-native monetization." },
      { name: "Lemon Squeezy", desc: "Merchant-of-record service handling global tax compliance for blockchain products selling internationally." },
      { name: "Razorpay", desc: "Full-stack payment gateway for India, supporting UPI, cards, and net banking for India-based deployments." },
    ]
  },
  {
    id: "auth", title: "Authentication Integrations",
    desc: "Define who can interact with a deployed system, enforce role boundaries, and support enterprise identity frameworks.",
    providers: [
      { name: "Clerk", desc: "Full-stack user management with pre-built UI components and APIs, ideal for rapid identity setup." },
      { name: "Privy", desc: "Web3-native onboarding that creates embedded wallets for users, removing external wallet friction." },
      { name: "Dynamic", desc: "Multi-chain wallet authentication supporting wallet-based and social login flows for hybrid audiences." },
      { name: "Auth0", desc: "Enterprise-grade identity with SSO, MFA, and compliance-aligned access control for regulated deployments." },
      { name: "Firebase Auth", desc: "Google's scalable identity platform for web and mobile, suited for high-volume consumer-facing deployments." },
    ]
  },
  {
    id: "comms", title: "Communication Integrations",
    desc: "Enable event-driven alerts, governance notifications, and operational communications routed to stakeholders in real time.",
    providers: [
      { name: "SendGrid", desc: "High-deliverability transactional email at scale for governance notifications and system alerts." },
      { name: "Resend", desc: "Developer-first email API with modern tooling and React-based email templates." },
      { name: "Twilio", desc: "SMS, WhatsApp, and Voice APIs for multi-channel operational alerting and user communications." },
      { name: "XMTP", desc: "Secure, decentralized Web3 messaging protocol enabling wallet-to-wallet communication tied to on-chain identity." },
      { name: "Push Protocol", desc: "Cross-chain push notification and messaging layer linked to blockchain events." },
    ]
  },
  {
    id: "storage", title: "Storage Integrations",
    desc: "Connect to external storage systems for off-chain data management, asset persistence, and compliance-aligned data retention.",
    providers: [
      { name: "AWS S3", desc: "Standard enterprise-grade object storage for reliable, scalable off-chain data persistence." },
      { name: "Pinata", desc: "IPFS pinning service for NFT metadata and decentralized content across the IPFS network." },
      { name: "Irys (Arweave)", desc: "Permanent, censorship-resistant data storage suited for immutable record-keeping requirements." },
      { name: "Lighthouse", desc: "Perpetual file storage on Filecoin backed by cryptographic storage proofs for compliance-driven retention." },
      { name: "Supabase Storage", desc: "File storage integrated with Postgres row-level security for deployments combining on-chain and structured off-chain data." },
    ]
  },
  {
    id: "oracles", title: "Data & Oracle Integrations",
    desc: "Allow on-chain logic to reference verified external data without compromising runtime determinism.",
    providers: [
      { name: "Chainlink", desc: "The leading decentralized oracle network for tamper-resistant price feeds, verifiable randomness, and external API connectivity." },
      { name: "The Graph", desc: "Blockchain data indexing with subgraphs for efficient historical queries and real-time event tracking." },
      { name: "Alchemy", desc: "Full-stack Web3 development platform providing node infrastructure, enhanced APIs, and blockchain analytics." },
      { name: "Moralis", desc: "Enterprise-grade Web3 API suite covering NFT data, token balances, transaction history, and real-time event streaming." },
      { name: "Pyth Network", desc: "High-frequency real-time market data oracle with sub-second price updates across equities, crypto, FX, and commodities." },
    ]
  },
  {
    id: "analytics", title: "Analytics Integrations",
    desc: "Provide operational visibility, usage intelligence, and behavioral data to understand how your blockchain systems are being used.",
    providers: [
      { name: "PostHog", desc: "Open-source product analytics with feature flags and session recording for teams needing full data ownership." },
      { name: "Segment", desc: "Customer data platform routing event streams to any downstream analytics, marketing, or data warehouse tool." },
      { name: "Dune API", desc: "SQL-based blockchain data analytics enabling custom dashboards and queries over indexed on-chain data." },
      { name: "Google Analytics 4", desc: "Web and app behavior tracking for monitoring user-facing interfaces connected to a deployment." },
      { name: "Mixpanel", desc: "Event-based product analytics focused on user behavior flows and retention for consumer-facing applications." },
    ]
  },
  {
    id: "webhooks", title: "Webhook Integrations",
    desc: "Bridge the blockchain runtime and the broader tooling ecosystem, enabling real-time automation without polling.",
    providers: [
      { name: "Slack", desc: "Post structured alerts and governance updates to Slack channels, keeping operational teams informed in real time." },
      { name: "Discord", desc: "Send validator status changes, governance votes, and system alerts to Discord channels for community deployments." },
      { name: "Telegram Bot", desc: "Deliver automated messages via Telegram for lightweight operational alerting and community notifications." },
      { name: "Zapier", desc: "Trigger multi-step automation workflows across thousands of connected tools for no-code downstream integrations." },
      { name: "Custom Endpoint", desc: "Send JSON payloads to any server endpoint, supporting fully custom internal integrations and enterprise pipelines." },
    ]
  },
];

const GLOSSARY = [
  ["API", "Application Programming Interface. A defined set of rules allowing software to communicate. Cerulea exposes REST APIs for external tools and workflows to interact with deployed systems."],
  ["WASM", "WebAssembly. A binary instruction format enabling high-performance code execution in a sandboxed environment. Cerulea uses WASM as the runtime for smart contracts and modules."],
  ["EVM", "Ethereum Virtual Machine. The execution environment used by Ethereum and compatible blockchains. Cerulea's Public L1 supports EVM compatibility, meaning Solidity contracts can run with minimal modification."],
  ["RPC", "Remote Procedure Call. A protocol allowing external programs to request operations from a blockchain node. How wallets, applications, and backends submit transactions and query state."],
  ["PoS", "Proof-of-Stake. A consensus mechanism where validators are selected based on staked collateral. Cerulea's Public L1 uses PoS for validator selection and network security."],
  ["Validator", "A node in a blockchain network responsible for verifying transactions and adding new blocks. On Public L1, selected via PoS. On Private Chains, enterprise-selected."],
  ["Genesis Parameters", "The initial configuration values that define how a blockchain network starts, including validator set, token distribution, and governance settings. Cerulea generates these automatically from Studio configuration."],
  ["Governance", "The on-chain mechanism through which changes to a live blockchain system are proposed, voted on, and executed. In Cerulea, the only pathway for modifying a deployed system after launch."],
  ["Slashing", "A penalty mechanism that reduces a validator's staked tokens for misbehavior such as double-signing or excessive downtime. Slashing conditions are configured during system setup."],
  ["Epoch", "A fixed period after which validator sets are updated, rewards distributed, and governance checkpoints may occur. Epoch length is configured as part of the system's consensus parameters."],
  ["dApp", "Decentralized Application. An application running on a blockchain rather than a centralized server, interacting with smart contracts without a single point of control."],
  ["IPFS", "InterPlanetary File System. A peer-to-peer file storage protocol addressing files by content rather than location. Cerulea's storage integrations include IPFS-based providers for decentralized asset persistence."],
  ["Smart Contract", "Self-executing code on a blockchain that enforces agreed-upon rules when predefined conditions are met. Cerulea provisions smart contract execution without requiring users to write contract code."],
  ["Oracle", "A service providing verified real-world data to smart contracts, bridging on-chain logic and off-chain information such as price feeds or event data."],
  ["SLA", "Service Level Agreement. A formal commitment defining expected service levels including uptime guarantees. For Private Chain deployments, the enterprise is responsible for maintaining SLAs on validator infrastructure."],
  ["Interoperability", "The ability of different blockchain networks to communicate and transfer assets or data. Cerulea supports configurable cross-chain interoperability through message passing and asset bridging protocols."],
  ["No-Code", "An approach enabling functional systems to be built through visual configuration rather than writing source code. Cerulea is fully no-code: every aspect of a blockchain deployment is configured, not programmed."],
  ["Blue-Green Deployment", "An upgrade strategy where two identical environments run in parallel. Traffic shifts from old (blue) to new (green) at a precise moment, enabling near-zero downtime."],
  ["Canary Deployment", "An upgrade strategy where a new version rolls out to a small subset of nodes first. If issues are detected, the rollout halts before broader impact occurs."],
  ["Data Sovereignty", "The principle that data is subject to the laws and governance of the organization controlling it. Cerulea's Private Chain architecture is designed to preserve full enterprise data sovereignty."],
];

// ─── Hooks ─────────────────────────────────────────────────────────────────────

function useActiveSection() {
  const [active, setActive] = useState("foundation");
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

function useReveal(threshold = 0.15) {
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

// ─── Small components ───────────────────────────────────────────────────────────

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

function Subsection({ title, children, id }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div ref={ref} id={id} style={{
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
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#fff" : "#F9FAFB",
        border: `1px solid ${hovered ? "#BFDBF7" : "#E5E7EB"}`,
        borderRadius: 12, padding: "20px 22px",
        transition: "all 0.25s ease",
        boxShadow: hovered ? "0 8px 24px rgba(26,60,107,0.1)" : "none",
        transform: visible ? (hovered ? "translateY(-3px)" : "none") : "translateY(20px)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${delay}ms`,
      }}
    >
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

function Provider({ name, desc, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, visible] = useReveal(0.05);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "flex-start", gap: 16,
        padding: "14px 18px",
        background: hovered ? "#fff" : "#F9FAFB",
        border: `1px solid ${hovered ? "#BFDBF7" : "#E5E7EB"}`,
        borderRadius: 10, cursor: "default",
        transition: "all 0.2s ease",
        boxShadow: hovered ? "0 4px 14px rgba(26,60,107,0.07)" : "none",
        opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(-10px)",
        transitionDelay: `${index * 60}ms`,
      }}
    >
      <div style={{
        minWidth: 130, fontSize: 13.5, fontWeight: 700, color: "#1A3C6B",
        fontFamily: "'DM Sans', sans-serif"
      }}>{name}</div>
      <div style={{ fontSize: 13.5, color: "#6B7280", lineHeight: 1.6 }}>{desc}</div>
    </div>
  );
}

function StrategyStep({ tag, body, index }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div ref={ref} style={{
      display: "flex", gap: 16, padding: "16px 18px",
      background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 10,
      alignItems: "flex-start",
      opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(10px)",
      transition: "opacity 0.4s ease, transform 0.4s ease",
      transitionDelay: `${index * 80}ms`
    }}>
      <div style={{
        background: "linear-gradient(135deg, #1A3C6B, #2E75B6)", color: "#fff",
        fontSize: 10, fontWeight: 800, padding: "4px 12px", borderRadius: 20,
        whiteSpace: "nowrap", letterSpacing: "0.06em", textTransform: "uppercase", flexShrink: 0, marginTop: 2
      }}>{tag}</div>
      <div style={{ fontSize: 14, color: "#374151", lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}

// ─── Main sections ─────────────────────────────────────────────────────────────

function FoundationSection() {
  const [ref, visible] = useReveal(0.05);
  return (
    <section id="foundation" style={{ marginBottom: 80 }}>
      <SectionHeader num="I" title="Foundation" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 14 }}>
        Cerulea is a Blockchain Infrastructure Platform. It enables organizations and developers to build, deploy, and operate public and private blockchain systems without writing code.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 24 }}>
        Traditional blockchain development requires coordinating runtime engineering, validator configuration, governance wiring, infrastructure provisioning, DevOps pipelines, monitoring stacks, and integration layers across multiple independent tools and teams. Cerulea replaces that fragmented process with a unified configuration framework.
      </p>

      {/* Lifecycle flow */}
      <div ref={ref} style={{
        background: "linear-gradient(135deg, #EBF3FB 0%, #F0F7FF 100%)",
        border: "1px solid #BFDBF7", borderRadius: 14, padding: "22px 24px", marginBottom: 32,
        opacity: visible ? 1 : 0, transition: "opacity 0.6s ease"
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#2E75B6", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Build Lifecycle</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 0, alignItems: "center", justifyContent: "space-between" }}>
          {LIFECYCLE_STEPS.map((step, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{
                  width: 38, height: 38, background: "#fff", border: "1.5px solid #BFDBF7",
                  borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, color: "#2E75B6", fontWeight: 700,
                  boxShadow: "0 2px 8px rgba(46,117,182,0.1)"
                }}>{step.icon}</div>
                <span style={{ fontSize: 10, fontWeight: 600, color: "#2E75B6", letterSpacing: "0.04em" }}>{step.label}</span>
              </div>
              {i < LIFECYCLE_STEPS.length - 1 && <span style={{ color: "#93C5FD", fontSize: 16, margin: "0 4px", marginBottom: 14 }}>›</span>}
            </div>
          ))}
        </div>
      </div>

      <Subsection title="1. What Cerulea Is">
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 14 }}>
          Cerulea is a fully no-code blockchain infrastructure platform. It does not simplify blockchain by hiding it - it restructures blockchain architecture into a controlled configuration framework. Users work through Cerulea Studio, which transforms structured configuration into a fully operational blockchain environment. No code is written at any stage.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 12 }}>When a deployment is triggered, Cerulea generates and provisions:</p>
        <BulletList items={[
          "A functioning blockchain network (public or private)",
          "Runtime configuration and genesis parameters",
          "Validator initialization and governance logic",
          "Smart contract execution capability",
          "API and RPC access layers",
          "Monitoring and observability infrastructure",
          "Operational dashboard and explorer surfaces",
        ]} />
        <Note>Cerulea is purpose-built for blockchain infrastructure - not smart contract building, token launching, DeFi applications, or general SaaS hosting. It provides the execution, governance, and infrastructure layer that external interfaces connect to.</Note>
      </Subsection>

      <Subsection title="2. Core Philosophy">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[
            { icon: "◈", title: "Determinism", body: "Every system is the result of explicit configuration. No emergent deployments and no invisible defaults influencing runtime behavior." },
            { icon: "⇄", title: "Separation", body: "Until deployment is triggered, nothing exists operationally. Configuration is structured, versioned, and stored - but not executed." },
            { icon: "−", title: "Reduced Dependency", body: "Cerulea removes the requirement to express architecture through code. Complex systems can still be built through structured configuration." },
            { icon: "◎", title: "Configurable Decentralization", body: "Decentralization is an architectural decision. Validator openness, governance weighting, and compliance enforcement are all configurable." },
          ].map((c, i) => <Card key={i} {...c} delay={i * 80} />)}
        </div>
      </Subsection>

      <Subsection title="3. Configurable Decentralization">
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 14 }}>
          Traditional blockchain discourse frames decentralization as binary: maximum decentralization or centralized control. Cerulea rejects this framing. Users can configure:
        </p>
        <BulletList items={[
          "Validator openness: fully open, curated, or enterprise-selected",
          "Governance weighting: token-based, role-based, or controlled participation",
          "Infrastructure distribution: cloud, on-premise, hybrid, or region-specific",
          "Compliance enforcement: optional, advisory, or mandatory",
          "Upgrade authority: community-led, enterprise-led, or hybrid governance",
        ]} />
      </Subsection>
    </section>
  );
}

function DecisionSection() {
  return (
    <section id="decision" style={{ marginBottom: 80 }}>
      <SectionHeader num="II" title="Decision Frameworks" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 24 }}>
        Use this section before opening Cerulea Studio. The decisions made here determine architecture, governance model, infrastructure ownership, and cost structure. Getting them wrong at the start means rebuilding from scratch.
      </p>

      <Subsection title="1. Architecture: Public L1 or Private Chain?">
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", marginBottom: 16 }}>This is an operational decision, not a technical one.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: 12, padding: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#065F46", marginBottom: 12, letterSpacing: "0.04em" }}>CHOOSE PUBLIC L1 IF ALL ARE TRUE</div>
            <BulletList items={[
              "The system needs open, permissionless participation",
              "Governance must be community-driven and transparent",
              "You do not need to control who runs validators",
              "Your use case is a dApp, token system, or ecosystem service",
            ]} />
          </div>
          <div style={{ background: "#EFF6FF", border: "1px solid #BFDBF7", borderRadius: 12, padding: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#1A3C6B", marginBottom: 12, letterSpacing: "0.04em" }}>CHOOSE PRIVATE CHAIN IF ANY ARE TRUE</div>
            <BulletList items={[
              "Access must be permissioned",
              "The organization must own and control validator infrastructure",
              "Compliance, audit, or regulatory requirements apply",
              "Governance authority must remain inside the organization",
            ]} />
          </div>
        </div>
        <Note><strong>Anchor question:</strong> Is this open ecosystem infrastructure, or controlled organizational infrastructure? See Section V for architecture detail.</Note>
      </Subsection>

      <Subsection title="2. Governance Model">
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", marginBottom: 14 }}>
          Governance must match who owns the system. A mismatch between ownership and governance creates operational problems that cannot be patched after deployment.
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr>
                {["Model", "Recommended for", "Key characteristic"].map(h => (
                  <th key={h} style={{ background: "#1A3C6B", color: "#fff", padding: "12px 16px", textAlign: "left", fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Token-weighted", "Public L1", "External, independent participants"],
                ["Authority-based", "Private Chain", "Change approval stays inside the organization"],
                ["Hybrid domains", "Mixed deployments", "Internal decisions stay internal; public rules governed openly"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={{
                      padding: "12px 16px", borderBottom: "1px solid #E5E7EB",
                      background: i % 2 === 0 ? "#F9FAFB" : "#fff",
                      fontWeight: j === 0 ? 700 : 400, color: j === 0 ? "#1A3C6B" : "#374151"
                    }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Subsection>

      <Subsection title="3. Cost vs Control">
        <TwoCol
          leftTitle="Public L1"
          rightTitle="Private Chain"
          left={["Lower infrastructure cost", "Higher coordination overhead", "Community alignment required for governance decisions", "No validator infrastructure to own or maintain"]}
          right={["Higher infrastructure responsibility", "Full operational control", "Upgrades happen on your own schedule", "SLA responsibility belongs entirely to the enterprise"]}
        />
        <Note>Neither model is cheaper by default. The right choice depends on what your organization is equipped to own and operate.</Note>
      </Subsection>

      <Subsection title="4. Security Posture">
        <BulletList items={[
          "Public L1: design for adversarial conditions. Unknown validators, public visibility, manipulation-resistant governance.",
          "Private Chain: design for internal accountability. Identity controls, audit logging, least-privilege access, compliance enforcement.",
        ]} />
      </Subsection>
    </section>
  );
}

function StudioSection() {
  return (
    <section id="studio" style={{ marginBottom: 80 }}>
      <SectionHeader num="III" title="Cerulea Studio" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 24 }}>
        Cerulea Studio is the core environment through which all blockchain systems on Cerulea are created, configured, and deployed. It is not a companion interface. It is the only way to build on Cerulea.
      </p>

      <Subsection title="1. Studio Overview">
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 14 }}>
          Cerulea Studio replaces the fragmented engineering process of traditional blockchain development with a unified, no-code configuration environment. Smart contracts, validator configuration, runtime compilation, infrastructure provisioning, deployment pipelines, monitoring setup, and governance wiring are all handled here.
        </p>
      </Subsection>

      <Subsection title="2. Architecture Selection">
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 14 }}>
          The first decision inside Cerulea Studio defines the architectural topology of the system. This choice determines validator structure, governance mechanics, infrastructure ownership, compliance posture, and operational control boundaries.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 14 }}>
          Users must select one of two primary deployment models: Cerulea Public L1 or Cerulea Private Chain. This is not a cosmetic distinction. It defines how the system will exist in production.
        </p>
      </Subsection>

      <Subsection title="3. Module Configuration Framework">
        <TwoCol
          leftTitle="Infrastructure Modules"
          rightTitle="Application Modules"
          left={["Consensus configuration", "Validator management", "Upgrade orchestration", "Governance hooks"]}
          right={["Token systems", "Identity frameworks", "Payment logic", "Compliance enforcement", "Data management"]}
          accent
        />
        <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, marginTop: 12 }}>
          Modules cannot be arbitrarily extended through custom code. They represent the full set of validated capabilities available within the platform.
        </p>
      </Subsection>

      <Subsection title="4. Deployment Engine">
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 14 }}>
          Deployment is the materialization stage of the Cerulea lifecycle. It transforms structured configuration into a functioning blockchain environment in a single atomic activation:
        </p>
        <BulletList items={[
          "Provisioning infrastructure resources",
          "Initializing runtime configuration and genesis state",
          "Activating validator structures and enabling governance mechanisms",
          "Establishing API and RPC interfaces",
          "Connecting integrations and activating monitoring dashboards",
        ]} />
        <Note>Deployment is a full activation, not an incremental process. The blockchain environment becomes operational only after deployment completes successfully.</Note>
      </Subsection>
    </section>
  );
}

function LifecycleSection() {
  const stages = [
    { icon: "✦", title: "Create", body: "Intent becomes structured design. Scope, ownership boundaries, access controls, and architectural model are established. No resources are consumed." },
    { icon: "⚙", title: "Configure", body: "The system blueprint is built in full. All configuration is versioned and can be reverted to stable baselines before deployment." },
    { icon: "⬆", title: "Deploy", body: "Infrastructure, runtime, and governance layers are activated in a single atomic operation. The environment becomes live." },
    { icon: "◈", title: "Operate", body: "The blockchain environment is live. Validators are active, governance is enabled, and integrations are functioning." },
    { icon: "◎", title: "Govern", body: "All post-deployment changes to runtime, modules, validators, and infrastructure must pass through governance. No exceptions." },
    { icon: "↑", title: "Upgrade", body: "Runtime evolves through governance-approved upgrades only. Every change is deliberate, auditable, and reversible." },
    { icon: "✙", title: "Expand", body: "New validators, modules, integrations, or cross-chain capabilities are added. All expansion follows governance discipline." },
    { icon: "◉", title: "Monitor", body: "Continuous visibility into validator health, throughput, governance activity, and infrastructure across the full lifecycle." },
    { icon: "□", title: "Retire", body: "A structured, governance-led decommissioning. Audit history, governance records, and configuration lineage are preserved." },
  ];
  return (
    <section id="lifecycle" style={{ marginBottom: 80 }}>
      <SectionHeader num="IV" title="Build Lifecycle" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 28 }}>
        Every system built on Cerulea follows a defined lifecycle from creation through retirement. Each stage has clear boundaries, responsibilities, and operational implications.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {stages.map((s, i) => <Card key={i} icon={s.icon} title={s.title} body={s.body} delay={i * 60} />)}
      </div>
    </section>
  );
}

function ArchitectureSection() {
  const [ref, visible] = useReveal(0.05);
  return (
    <section id="architecture" style={{ marginBottom: 80 }}>
      <SectionHeader num="V" title="Architecture" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 24 }}>
        Cerulea supports two primary deployment architectures. Each has distinct validator models, governance structures, infrastructure ownership patterns, and operational characteristics.
      </p>

      <div ref={ref} style={{
        overflowX: "auto", marginBottom: 36,
        opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)",
        transition: "opacity 0.5s ease, transform 0.5s ease"
      }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr>
              {["Dimension", "Public L1", "Private Chain"].map((h, i) => (
                <th key={i} style={{
                  background: i === 0 ? "#374151" : "#1A3C6B",
                  color: "#fff", padding: "14px 18px", textAlign: "left",
                  fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.15)" : "none"
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Validator selection", "Hybrid onboarding, Proof-of-Stake weighted", "Enterprise-selected, fully controlled"],
              ["Participation", "Open, permissionless", "Permissioned, enterprise-defined"],
              ["Governance", "Token-weighted community voting", "Authority-based, role-defined"],
              ["Infrastructure ownership", "Network participants", "Deploying organization"],
              ["Data access", "Public visibility", "Enterprise-exclusive control"],
              ["Compliance posture", "Protocol-governed", "Enterprise-configured"],
              ["Upgrade authority", "Community governance", "Internal governance policy"],
            ].map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={{
                    padding: "12px 18px", borderBottom: "1px solid #E5E7EB",
                    background: i % 2 === 0 ? "#F9FAFB" : "#fff",
                    fontWeight: j === 0 ? 700 : 400, color: j === 0 ? "#374151" : "#4B5563",
                    borderRight: j < 2 ? "1px solid #E5E7EB" : "none"
                  }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Subsection title="Runtime Engine">
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 14 }}>
          The Runtime Engine defines how configured systems become executable blockchain environments. Runtime behavior is versioned - every deployment is associated with a specific runtime version that encapsulates how modules behave, how governance is enforced, and how validators interact with the chain.
        </p>
        <BulletList items={[
          "WASM-based execution for smart contracts and modules",
          "EVM compatibility for Solidity-based contracts on Public L1",
          "On-chain parameter adjustments via governance",
          "Runtime security sandboxing to prevent unauthorized execution",
          "Versioned upgrade orchestration with no hard forks required",
        ]} />
      </Subsection>

      <Subsection title="Cross-Chain & Interoperability">
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 14 }}>
          Cross-chain capabilities are defined during the configuration stage. Interoperability is configured, not assumed. For Private Chains, connectivity to the Public L1 is optional and must be explicitly enabled.
        </p>
        <BulletList items={[
          "Cross-chain message passing for blockchain-to-blockchain communication",
          "Asset bridging protocols for secure token transfers between networks",
          "Private Chain to Public L1 optional connectivity bridge",
          "Cross-chain transaction validation and finality synchronization",
          "Standardized cross-chain contract interfaces for compatibility",
        ]} />
      </Subsection>
    </section>
  );
}

function GovernanceSection() {
  return (
    <section id="governance" style={{ marginBottom: 80 }}>
      <SectionHeader num="VI" title="Governance" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 24 }}>
        Governance is the operational mechanism through which all post-deployment change occurs in Cerulea. Without governance, a deployed system remains static. With governance, it evolves in a controlled, auditable, and transparent way.
      </p>

      <Subsection title="Proposal Lifecycle">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            ["Creation", "A qualifying participant submits a proposal defining the change, rationale, and proposed parameters."],
            ["Review", "The proposal enters a defined review window during which participants can assess the change."],
            ["Voting", "Participants cast votes according to the governance model of the system."],
            ["Quorum Check", "The system verifies that minimum participation thresholds have been met."],
            ["Execution", "If approved and quorum is satisfied, the proposal is automatically executed on-chain."],
            ["Logging", "The governance action is permanently recorded on-chain for audit and transparency."],
          ].map(([tag, body], i) => <StrategyStep key={i} tag={tag} body={body} index={i} />)}
        </div>
      </Subsection>

      <Subsection title="Upgrade Governance">
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", marginBottom: 14 }}>
          No runtime change, module update, or infrastructure modification can occur outside the governance framework once a system is deployed.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            ["Rolling", "Changes applied incrementally across validator nodes. The network continues operating throughout the upgrade."],
            ["Canary", "Changes applied to a limited subset of nodes first to validate behavior under live conditions before proceeding."],
            ["Blue-Green", "Two parallel environments run simultaneously. Traffic is shifted at a defined point for near-zero downtime."],
          ].map(([tag, body], i) => <StrategyStep key={i} tag={tag} body={body} index={i} />)}
        </div>
      </Subsection>

      <Subsection title="Public L1 vs Private Chain Governance">
        <TwoCol
          leftTitle="Public L1"
          rightTitle="Private Chain"
          left={["Token-weighted voting", "Proposals open to any qualifying token holder", "Governance tokens locked during voting periods", "Automated on-chain execution upon approval"]}
          right={["Authority-based, role-defined", "Multi-signature approval for high-impact decisions", "Enterprise-defined thresholds and review windows", "Compliance-aligned upgrade scheduling"]}
        />
      </Subsection>
    </section>
  );
}

function InfrastructureSection() {
  return (
    <section id="infrastructure" style={{ marginBottom: 80 }}>
      <SectionHeader num="VII" title="Infrastructure & Deployment" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 24 }}>
        Infrastructure and deployment define where and how Cerulea systems physically exist and operate.
      </p>

      <Subsection title="Hosting Models">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[
            { icon: "☁", title: "Cloud", body: "Enterprise-managed nodes on AWS, Azure, or Google Cloud. Flexible scaling with cloud provider SLAs." },
            { icon: "◫", title: "On-Premise", body: "Validator infrastructure runs inside your own data centers. Common for government and regulated enterprise deployments." },
            { icon: "⇄", title: "Hybrid", body: "Cloud and on-premise infrastructure combined within the same Private Chain, with governance control over the full validator set." },
            { icon: "◉", title: "Public L1", body: "Infrastructure operated by independent network participants. No hosting model selection required from the deploying organization." },
          ].map((c, i) => <Card key={i} {...c} delay={i * 80} />)}
        </div>
      </Subsection>

      <Subsection title="Monitoring & Observability">
        <BulletList items={[
          "Validator uptime and participation tracking",
          "Transaction throughput and latency metrics",
          "Resource utilization across infrastructure nodes",
          "Governance activity logs and proposal status",
          "Integration event tracking and status",
          "Infrastructure health across all deployed nodes",
          "Alert and notification systems for threshold breaches",
        ]} />
      </Subsection>

      <Subsection title="Disaster Recovery & Rollback">
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify" }}>
          Because all Cerulea configurations are versioned, rollback to a prior stable state is possible through the governance process. For infrastructure-level failures, node auto-healing mechanisms detect and restart failing nodes automatically. The distributed validator model on Public L1 ensures no single point of failure.
        </p>
      </Subsection>
    </section>
  );
}

function SecuritySection() {
  return (
    <section id="security" style={{ marginBottom: 80 }}>
      <SectionHeader num="VIII" title="Security Model" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 24 }}>
        Security in Cerulea is structured across runtime, governance, infrastructure, and operational layers. The security posture of a system depends on its deployment type and the configuration decisions made during the build lifecycle.
      </p>

      <Subsection title="Operational vs Data Control Boundary">
        <TwoCol
          leftTitle="Cerulea manages"
          rightTitle="Enterprise owns"
          left={["Deployment orchestration", "Upgrade management", "Monitoring surface provisioning", "Lifecycle control tooling"]}
          right={["Transaction execution and state", "Smart contract state", "Validator key management", "All enterprise data within the deployed system"]}
        />
        <Note>Cerulea does not read transaction payloads, access smart contract state, or control enterprise validator keys. This boundary is enforced architecturally, not contractually.</Note>
      </Subsection>

      <Subsection title="Enterprise Data Sovereignty">
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 14 }}>
          Organizations retain exclusive control over transaction content, validator key management, network exposure boundaries, governance participation, and all infrastructure decisions. Cerulea systems are built so that the platform cannot access data it has no operational need to touch.
        </p>
      </Subsection>

      <Subsection title="Compliance Positioning">
        <BulletList items={[
          "Role-based access control for permissioned participation",
          "Governance-controlled upgrade and change management",
          "Audit trails for all governance actions and configuration changes",
          "Enterprise-defined compliance rule enforcement at the module level",
          "Cross-border governance adaptability for multi-jurisdiction deployments",
        ]} />
        <Note>Cerulea does not provide legal compliance certifications. It provides the structural controls through which organizations can implement and enforce their own compliance requirements.</Note>
      </Subsection>
    </section>
  );
}

function IntelligenceSection() {
  return (
    <section id="intelligence" style={{ marginBottom: 80 }}>
      <SectionHeader num="IX" title="Cerulea Intelligence" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 24 }}>
        Cerulea Intelligence is an embedded guidance layer inside Cerulea Studio that provides contextual recommendations, configuration insights, and risk-aware signals while users design and deploy blockchain systems. It operates only during the configuration phase. Every action remains under explicit user and governance control.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {[
          { icon: "◎", title: "Configuration Guidance", body: "Explains configuration implications, highlights structural gaps, and suggests governance alignment based on architecture intent." },
          { icon: "△", title: "Risk Signals", body: "Surfaces missing configuration, conflicting governance settings, incomplete integrations, and infrastructure issues before deployment." },
          { icon: "◉", title: "Use Case Example", body: "A Private Chain user with compliance modules enabled receives governance suggestions tailored to authority-based models, integration readiness signals, and regulated infrastructure recommendations." },
          { icon: "✗", title: "Intentionally Constrained", body: "Cannot deploy systems, change config without user action, execute governance proposals, manage validators, or access transaction data. Advisory only." },
        ].map((c, i) => <Card key={i} {...c} delay={i * 80} />)}
      </div>
    </section>
  );
}

function IntegrationsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const cat = INTEGRATION_CATEGORIES[activeTab];
  return (
    <section id="integrations" style={{ marginBottom: 80 }}>
      <SectionHeader num="X" title="Integrations" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 28 }}>
        Integrations allow Cerulea deployments to interact with external systems at the operational boundary. They do not override governance or runtime behavior.
      </p>

      {/* Tab strip */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
        {INTEGRATION_CATEGORIES.map((c, i) => (
          <button key={i} onClick={() => setActiveTab(i)} style={{
            padding: "7px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600,
            border: `1.5px solid ${activeTab === i ? "#1A3C6B" : "#E5E7EB"}`,
            background: activeTab === i ? "#1A3C6B" : "#fff",
            color: activeTab === i ? "#fff" : "#6B7280",
            cursor: "pointer", transition: "all 0.2s ease", fontFamily: "'DM Sans', sans-serif"
          }}>
            {c.title.replace(" Integrations", "")}
          </button>
        ))}
      </div>

      {/* Category content */}
      <div key={activeTab} style={{ animation: "fadeSlideIn 0.3s ease" }}>
        <p style={{ fontSize: 14.5, lineHeight: 1.75, color: "#374151", marginBottom: 20, textAlign: "justify" }}>{cat.desc}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {cat.providers.map((p, i) => <Provider key={i} {...p} index={i} />)}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

function ApisSection() {
  return (
    <section id="apis" style={{ marginBottom: 80 }}>
      <SectionHeader num="XI" title="APIs & Platform Access" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 28 }}>
        Cerulea exposes controlled platform interfaces so deployed systems can be used, integrated, and operated in real environments without compromising runtime determinism or governance integrity.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {[
          { icon: "◎", title: "REST APIs", body: "Orchestration and operational layer interfaces. Support deployment lifecycle, monitoring, governance visibility, and enterprise automation. Do not bypass consensus." },
          { icon: "◈", title: "RPC Endpoints", body: "Primary interaction surface for submitting transactions, querying state, and observing network behavior. Public L1 is open; Private Chain access is enterprise-controlled." },
          { icon: "◉", title: "Webhooks", body: "Event-driven notifications for governance actions, upgrade execution, validator changes, and deployment lifecycle transitions. Operate outside consensus execution." },
          { icon: "✦", title: "No SDK Required", body: "Cerulea is fully no-code. Build with Studio. Integrate with standard RPC, REST, and webhook surfaces. No SDK required at any stage." },
        ].map((c, i) => <Card key={i} {...c} delay={i * 80} />)}
      </div>
      <Note>Cerulea's interface philosophy: build with Studio, integrate with standard surfaces.</Note>
    </section>
  );
}

function EnterpriseSection() {
  return (
    <section id="enterprise" style={{ marginBottom: 80 }}>
      <SectionHeader num="XII" title="Enterprise Operating Model" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 24 }}>
        The Enterprise Operating Model defines how organizations own, operate, license, and evolve Cerulea Private Chain deployments in production. Private Chain deployments are sovereign blockchain environments. The enterprise owns what is built. Cerulea operates the tooling used to build and maintain it.
      </p>

      <TwoCol
        leftTitle="Enterprise Controls"
        rightTitle="Cerulea Provides"
        left={["All validator nodes and hosting environment", "Governance authority and participant roles", "Infrastructure scaling, redundancy, and uptime", "Exclusive access to transaction data and chain state", "Network exposure and API access policies"]}
        right={["Configuration framework and Studio environment", "Deployment orchestration and lifecycle tooling", "Upgrade coordination support", "Monitoring surfaces and observability", "Usage metering (usage data only, no payload access)"]}
      />

      <Subsection title="Validator Ownership">
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 14 }}>
          Validator node ownership and operation belongs entirely to the enterprise. Cerulea may deploy a limited number of nodes for licensing enforcement and usage metering only. These nodes have no access to transaction payloads, smart contract state, or enterprise data.
        </p>
        <Note>Enterprises retain the right to audit and verify the behavior of any Cerulea-operated nodes within their network at any time.</Note>
      </Subsection>

      <Subsection title="Enterprise Upgrade Model">
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify" }}>
          Enterprise upgrades follow a controlled process aligned with internal governance policy and organizational readiness. No upgrade can be applied by Cerulea without the deploying organization triggering the process through their own governance. Upgrade proposals include version details, expected behavior changes, and rollback options before execution is approved.
        </p>
      </Subsection>
    </section>
  );
}

function GlossarySection({ searchQuery }) {
  const filtered = GLOSSARY.filter(([term, def]) =>
    !searchQuery || term.toLowerCase().includes(searchQuery.toLowerCase()) || def.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <section id="glossary" style={{ marginBottom: 80 }}>
      <SectionHeader num="XIII" title="Glossary" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", marginBottom: 24 }}>
        Technical terms defined for enterprise decision-makers, compliance teams, and readers without deep blockchain engineering backgrounds.
      </p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {filtered.map(([term, def], i) => {
          const [ref, visible] = [useRef(null), true];
          return (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "180px 1fr", gap: 20,
              padding: "16px 0", borderBottom: "1px solid #F3F4F6", alignItems: "baseline"
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#1A3C6B", fontFamily: "'DM Serif Display', Georgia, serif" }}>{term}</div>
              <div style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, textAlign: "justify" }}>{def}</div>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: 40, color: "#9CA3AF", fontSize: 15 }}>No matching terms found.</div>
        )}
      </div>
    </section>
  );
}

// ─── Sidebar ───────────────────────────────────────────────────────────────────

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
      {/* Brand */}
      <div style={{ padding: "24px 18px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ overflow: "hidden" }}>
            {!collapsed && <>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: "0.1em", fontFamily: "'DM Serif Display', Georgia, serif" }}>CERULEA</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>Platform Documentation v1.0</div>
            </>}
          </div>
          <button onClick={() => setCollapsed(!collapsed)} style={{
            background: "rgba(255,255,255,0.08)", border: "none", color: "rgba(255,255,255,0.6)",
            width: 28, height: 28, borderRadius: 6, cursor: "pointer", fontSize: 12,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
          }}>{collapsed ? "›" : "‹"}</button>
        </div>
      </div>

      {/* Search */}
      {!collapsed && (
        <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search documentation..."
            style={{
              width: "100%", padding: "8px 12px",
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 8, color: "#fff", fontSize: 12.5, outline: "none",
              fontFamily: "'DM Sans', sans-serif"
            }}
          />
        </div>
      )}

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: "auto", padding: "12px 0", scrollbarWidth: "none" }}>
        {SECTIONS.map(s => {
          const isActive = activeSection === s.id;
          return (
            <a key={s.id} href={`#${s.id}`} onClick={e => { e.preventDefault(); onNavigate(s.id); }}
              title={collapsed ? `${s.num}. ${s.title}` : ""}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: collapsed ? "10px 18px" : "9px 18px",
                textDecoration: "none", fontSize: 12.5, fontFamily: "'DM Sans', sans-serif",
                color: isActive ? "#fff" : "rgba(255,255,255,0.55)",
                background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
                borderLeft: `3px solid ${isActive ? "#60A5FA" : "transparent"}`,
                transition: "all 0.15s ease", whiteSpace: "nowrap", overflow: "hidden"
              }}
            >
              <span style={{
                fontSize: 10, fontWeight: 800, color: isActive ? "#93C5FD" : "rgba(255,255,255,0.3)",
                letterSpacing: "0.06em", minWidth: 22, flexShrink: 0
              }}>{s.num}</span>
              {!collapsed && <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{s.title}</span>}
            </a>
          );
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div style={{ padding: "12px 18px", borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: 11, color: "rgba(255,255,255,0.3)", flexShrink: 0 }}>
          February 2026 &nbsp;·&nbsp; Version 1.0
        </div>
      )}
    </aside>
  );
}

// ─── App ────────────────────────────────────────────────────────────────────────

export default function CeruleaDocs() {
  const [activeSection, setActiveSection] = useActiveSection();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const progress = useScrollProgress();
  const sidebarWidth = sidebarCollapsed ? 64 : 272;

  const navigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: "#fff", minHeight: "100vh" }}>
      {/* Google Fonts */}
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
      <div style={{
        position: "fixed", top: 64, left: 0, height: 3, zIndex: 200,
        background: "linear-gradient(90deg, #2E75B6, #60A5FA)",
        width: `${progress}%`, transition: "width 0.1s linear"
      }} />

      <Sidebar
        activeSection={activeSection}
        onNavigate={navigate}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main content */}
      <main style={{
        marginLeft: sidebarWidth, transition: "margin-left 0.3s ease",
        minHeight: "100vh", paddingBottom: 80
      }}>
        {/* Top bar */}
        <div style={{
          position: "sticky", top: 64,
          background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)",
          borderBottom: "1px solid #F3F4F6", padding: "14px 52px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          zIndex: 50
        }}>
          <div style={{ fontSize: 13, color: "#9CA3AF" }}>
            Cerulea &rsaquo; <span style={{ color: "#1A3C6B", fontWeight: 600 }}>
              {SECTIONS.find(s => s.id === activeSection)?.title || "Platform Documentation"}
            </span>
          </div>
          <div style={{ fontSize: 12, color: "#9CA3AF" }}>Version 1.0 &nbsp;·&nbsp; February 2026</div>
        </div>

        <div style={{ maxWidth: 860, padding: "60px 52px 0", width: "100%" }}>
          {/* Hero */}
          <div style={{
            background: "linear-gradient(135deg, #0f2544 0%, #1A3C6B 55%, #2563ab 100%)",
            borderRadius: 20, padding: "56px 52px", marginBottom: 72,
            position: "relative", overflow: "hidden"
          }}>
            <div style={{
              position: "absolute", top: -80, right: -80, width: 320, height: 320,
              background: "radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)",
              borderRadius: "50%", pointerEvents: "none"
            }} />
            <Tag>Platform Documentation</Tag>
            <h1 style={{
              fontSize: 54, fontWeight: 700, color: "#fff", margin: "18px 0 12px",
              letterSpacing: "-0.03em", lineHeight: 1.05,
              fontFamily: "'DM Serif Display', Georgia, serif"
            }}>Cerulea</h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 500, lineHeight: 1.65, marginBottom: 36 }}>
              A fully no-code blockchain infrastructure platform. Build, deploy, and operate complete blockchain systems without writing a single line of code.
            </p>
            <div style={{ display: "flex", gap: 28, fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
              {[["13", "Sections"], ["35+", "Subsections"], ["20", "Glossary Terms"]].map(([n, l]) => (
                <div key={l}>
                  <span style={{ fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.85)", display: "block", fontFamily: "'DM Serif Display', serif" }}>{n}</span>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sections */}
          <FoundationSection />
          <DecisionSection />
          <StudioSection />
          <LifecycleSection />
          <ArchitectureSection />
          <GovernanceSection />
          <InfrastructureSection />
          <SecuritySection />
          <IntelligenceSection />
          <IntegrationsSection />
          <ApisSection />
          <EnterpriseSection />
          <GlossarySection searchQuery={searchQuery} />
        </div>
      </main>
    </div>
  );
}
