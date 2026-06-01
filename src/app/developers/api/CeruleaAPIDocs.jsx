'use client';
import { useState, useEffect, useRef, useCallback } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: "introduction",   num: "I",    title: "Introduction" },
  { id: "authentication", num: "II",   title: "Authentication" },
  { id: "rest-api",       num: "III",  title: "Core REST API" },
  { id: "rpc-methods",    num: "IV",   title: "RPC Methods" },
  { id: "webhooks",       num: "V",    title: "Webhooks" },
  { id: "workspaces",     num: "VI",   title: "Workspaces" },
  { id: "dapp-builder",   num: "VII",  title: "dApp Builder" },
  { id: "blockchains",    num: "VIII", title: "Private Blockchains" },
  { id: "contracts",      num: "IX",   title: "Smart Contracts" },
  { id: "validators",     num: "X",    title: "Validators" },
  { id: "governance",     num: "XI",   title: "Governance" },
  { id: "modules",        num: "XII",  title: "Modules" },
  { id: "tokens",         num: "XIII", title: "Tokens" },
  { id: "monitoring",     num: "XIV",  title: "Monitoring" },
  { id: "errors",         num: "XV",   title: "Error Handling" },
];

// ─── Hooks ─────────────────────────────────────────────────────────────────────

function useActiveSection() {
  const [active, setActive] = useState("introduction");
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

// ─── API-specific components ───────────────────────────────────────────────────

const METHOD_COLORS = {
  GET:    { bg: "#DCFCE7", color: "#166534", border: "#BBF7D0" },
  POST:   { bg: "#DBEAFE", color: "#1E40AF", border: "#BFDBFE" },
  PUT:    { bg: "#FEF3C7", color: "#92400E", border: "#FDE68A" },
  DELETE: { bg: "#FEE2E2", color: "#991B1B", border: "#FECACA" },
};

function IC({ children }) {
  return (
    <code style={{
      background: "rgba(46,117,182,0.12)", color: "#2E75B6",
      padding: "2px 7px", borderRadius: 4,
      fontFamily: '"Fira Code","Fira Mono",ui-monospace,monospace',
      fontSize: "0.88em", fontWeight: 600
    }}>{children}</code>
  );
}

function CodeBlock({ code, language = "bash" }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", margin: "20px 0", border: "1px solid #1E3A5F" }}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "10px 18px", background: "#0a1929", borderBottom: "1px solid #1E3A5F"
      }}>
        <span style={{ color: "#60A5FA", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
          {language}
        </span>
        <button onClick={copy} style={{
          display: "flex", alignItems: "center", gap: 6,
          background: "transparent", border: `1px solid ${copied ? "#22C55E" : "#2E75B6"}`,
          color: copied ? "#22C55E" : "#60A5FA",
          padding: "3px 12px", borderRadius: 6, fontSize: 12, cursor: "pointer",
          transition: "all 0.2s", fontFamily: "'DM Sans', sans-serif"
        }}>
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>
      <div style={{ background: "#0f2544", padding: "20px 22px", overflowX: "auto" }}>
        <pre style={{
          color: "#CBD5E1",
          fontFamily: '"Fira Code","Fira Mono",ui-monospace,monospace',
          fontSize: 13.5, lineHeight: 1.75, margin: 0, whiteSpace: "pre"
        }}>{code}</pre>
      </div>
    </div>
  );
}

function EndpointCard({ method, path, description, children }) {
  const [ref, visible] = useReveal(0.1);
  const [hovered, setHovered] = useState(false);
  const mc = METHOD_COLORS[method] || METHOD_COLORS.GET;
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#fff" : "#F9FAFB",
        border: `1px solid ${hovered ? "#BFDBF7" : "#E5E7EB"}`,
        borderRadius: 12, padding: "20px 22px", margin: "20px 0",
        transition: "all 0.25s ease",
        boxShadow: hovered ? "0 8px 24px rgba(26,60,107,0.1)" : "none",
        opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
        <span style={{
          padding: "3px 10px", borderRadius: 6, fontSize: 11, fontWeight: 800,
          letterSpacing: "0.08em", textTransform: "uppercase", flexShrink: 0,
          background: mc.bg, color: mc.color, border: `1px solid ${mc.border}`
        }}>{method}</span>
        <span style={{
          fontFamily: '"Fira Code","Fira Mono",ui-monospace,monospace',
          fontSize: 13, color: "#2E75B6", background: "rgba(46,117,182,0.08)",
          padding: "3px 10px", borderRadius: 6, wordBreak: "break-all"
        }}>{path}</span>
      </div>
      <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6, margin: children ? "0 0 4px" : 0 }}>{description}</p>
      {children}
    </div>
  );
}

function DataTable({ headers, rows }) {
  return (
    <div style={{ overflowX: "auto", margin: "16px 0" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr>
            {headers.map(h => (
              <th key={h} style={{
                background: "#1A3C6B", color: "#fff", padding: "12px 16px",
                textAlign: "left", fontWeight: 600, fontFamily: "'DM Sans', sans-serif"
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} style={{
                  padding: "12px 16px", borderBottom: "1px solid #E5E7EB",
                  background: i % 2 === 0 ? "#F9FAFB" : "#fff",
                  color: j === 0 ? "#1A3C6B" : "#374151",
                  fontWeight: j === 0 ? 700 : 400, verticalAlign: "top"
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function IntroductionSection() {
  return (
    <section id="introduction" style={{ marginBottom: 80 }}>
      <SectionHeader num="I" title="Introduction" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 14 }}>
        The Cerulea API provides programmatic access to all platform capabilities — from deploying blockchain networks and managing smart contracts to querying real-time metrics and configuring governance. The API combines RESTful endpoints for resource management with JSON-RPC 2.0 for direct blockchain interaction.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginBottom: 32 }}>
        {[
          { icon: "⬡", title: "Complete dApps",       body: "Build full-stack dApps with smart contracts, tokens, and frontend interfaces." },
          { icon: "⛓", title: "Private Blockchains",  body: "Deploy custom blockchain networks with configurable consensus mechanisms." },
          { icon: "◈", title: "Validator Management", body: "Manage validators, governance, and network parameters programmatically." },
          { icon: "◉", title: "Real-time Monitoring", body: "Query and stream live blockchain performance data and analytics." },
          { icon: "⚙", title: "Modular Architecture", body: "Enable and configure DeFi, NFT, DAO, and identity modules via API." },
          { icon: "↑", title: "CI/CD Integration",    body: "Automate deployments and upgrades with GitHub integration support." },
        ].map((c, i) => <Card key={i} {...c} delay={i * 70} />)}
      </div>

      <Subsection title="API Architecture">
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", marginBottom: 14 }}>
          Cerulea uses a hybrid architecture combining RESTful endpoints for resource management with JSON-RPC 2.0 for blockchain interactions — intuitive REST for infrastructure management, powerful RPC for direct blockchain operations.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
          <div style={{ background: "#EFF6FF", border: "1px solid #BFDBF7", borderRadius: 10, padding: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#1A3C6B", marginBottom: 10, letterSpacing: "0.04em" }}>REST API</div>
            <BulletList items={["Resource creation and management", "Authentication and access control", "Workspace and project operations", "Webhook registration"]} />
          </div>
          <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 10, padding: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#065F46", marginBottom: 10, letterSpacing: "0.04em" }}>JSON-RPC 2.0</div>
            <BulletList items={["Direct blockchain interaction", "Block and transaction queries", "Contract execution and calls", "Transaction simulation"]} />
          </div>
        </div>
        <Note>Base URL: <strong>https://api.cerulea.app/v1</strong> — All REST endpoints are prefixed with this base. The RPC endpoint is <IC>POST /rpc</IC>.</Note>
      </Subsection>
    </section>
  );
}

function AuthenticationSection() {
  return (
    <section id="authentication" style={{ marginBottom: 80 }}>
      <SectionHeader num="II" title="Authentication" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", textAlign: "justify", marginBottom: 24 }}>
        Cerulea uses a dual authentication system — API keys for server-to-server communication and OAuth 2.0 for user-facing applications and third-party integrations.
      </p>

      <Subsection title="API Key Authentication">
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", marginBottom: 14 }}>For server-to-server communication and automated workflows.</p>
        <EndpointCard method="POST" path="/auth/api-keys" description="Create a new API key with custom scopes and expiration">
          <CodeBlock language="bash" code={`curl -X POST https://api.cerulea.app/v1/auth/api-keys \\
  -H "Authorization: Bearer <your_oauth_token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Production API Key",
    "scopes": ["workspace:read", "workspace:write", "blockchain:deploy"],
    "expiresIn": "90d"
  }'`} />
        </EndpointCard>
        <Note><strong>Security Best Practice:</strong> Include the API key in the <IC>X-API-Key</IC> header for all requests. Never expose API keys in client-side code.</Note>
        <CodeBlock language="bash" code={`curl -X GET https://api.cerulea.app/v1/workspaces \\
  -H "X-API-Key: crla_live_xxxxxxxxxxxxxxxxxxx"`} />
      </Subsection>

      <Subsection title="OAuth 2.0">
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", marginBottom: 14 }}>For user-facing applications and third-party integrations.</p>
        <CodeBlock language="bash" code={`# Step 1: Redirect user to authorization endpoint
https://api.cerulea.app/v1/oauth/authorize?
  client_id=YOUR_CLIENT_ID&
  redirect_uri=YOUR_CALLBACK_URL&
  response_type=code&
  scope=workspace:read blockchain:write&
  state=RANDOM_STATE_STRING

# Step 2: Exchange code for access token
curl -X POST https://api.cerulea.app/v1/oauth/token \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "grant_type=authorization_code" \\
  -d "code=AUTHORIZATION_CODE" \\
  -d "redirect_uri=YOUR_CALLBACK_URL" \\
  -d "client_id=YOUR_CLIENT_ID" \\
  -d "client_secret=YOUR_CLIENT_SECRET"`} />
      </Subsection>

      <Subsection title="Available Scopes">
        <DataTable headers={["Scope", "Description"]} rows={[
          [<IC>workspace:read</IC>,    "Read workspace data"],
          [<IC>workspace:write</IC>,   "Create and modify workspaces"],
          [<IC>blockchain:read</IC>,   "Query blockchain data"],
          [<IC>blockchain:write</IC>,  "Deploy and manage blockchains"],
          [<IC>blockchain:deploy</IC>, "Deploy smart contracts"],
          [<IC>validator:read</IC>,    "View validators"],
          [<IC>validator:write</IC>,   "Manage validators"],
          [<IC>governance:read</IC>,   "View governance proposals"],
          [<IC>governance:write</IC>,  "Create and vote on proposals"],
          [<IC>admin</IC>,             "Full administrative access"],
        ]} />
      </Subsection>
    </section>
  );
}

function RestApiSection() {
  return (
    <section id="rest-api" style={{ marginBottom: 80 }}>
      <SectionHeader num="III" title="Core REST API" />

      <Subsection title="Standard Response Format">
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", marginBottom: 14 }}>All API responses follow a consistent envelope structure.</p>
        <CodeBlock language="json" code={`{
  "success": true,
  "data": { /* resource data */ },
  "meta": {
    "requestId": "req_xxxxxxxx",
    "timestamp": "2025-02-25T10:30:00Z"
  }
}`} />
      </Subsection>

      <Subsection title="Pagination">
        <EndpointCard method="GET" path="/resources?page=1&limit=50&sort=created_at:desc" description="List resources with pagination and sorting">
          <CodeBlock language="json" code={`{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1, "limit": 50, "total": 250,
    "totalPages": 5, "hasNext": true, "hasPrev": false
  }
}`} />
        </EndpointCard>
      </Subsection>

      <Subsection title="Health Check">
        <EndpointCard method="GET" path="/health" description="Check API health and service status">
          <CodeBlock language="json" code={`{
  "status": "operational",
  "version": "1.0.0",
  "uptime": 99.99,
  "services": {
    "database": "healthy",
    "blockchain": "healthy",
    "storage": "healthy"
  }
}`} />
        </EndpointCard>
      </Subsection>
    </section>
  );
}

function RpcMethodsSection() {
  return (
    <section id="rpc-methods" style={{ marginBottom: 80 }}>
      <SectionHeader num="IV" title="RPC Methods" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", marginBottom: 24 }}>
        JSON-RPC 2.0 endpoint for direct blockchain interactions. All RPC calls are sent as <IC>POST /rpc</IC> with a JSON body.
      </p>

      <EndpointCard method="POST" path="/rpc" description="Execute a JSON-RPC 2.0 method">
        <CodeBlock language="json" code={`{
  "jsonrpc": "2.0",
  "method": "blockchain.getBlock",
  "params": {
    "blockchainId": "bc_xxxxxxxx",
    "blockNumber": "latest"
  },
  "id": 1
}`} />
      </EndpointCard>

      <Subsection title="Available Methods">
        <BulletList items={[
          <><IC>blockchain.getBlock</IC> — Get block by number or hash</>,
          <><IC>blockchain.getTransaction</IC> — Get transaction details and status</>,
          <><IC>blockchain.getBalance</IC> — Get account balance at a given block</>,
          <><IC>transaction.send</IC> — Broadcast a signed transaction</>,
          <><IC>transaction.simulate</IC> — Dry-run a transaction without broadcasting</>,
          <><IC>contract.call</IC> — Read-only contract call (no gas)</>,
          <><IC>contract.execute</IC> — Execute a state-changing contract method</>,
        ]} />
      </Subsection>
    </section>
  );
}

function WebhooksSection() {
  return (
    <section id="webhooks" style={{ marginBottom: 80 }}>
      <SectionHeader num="V" title="Webhooks" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", marginBottom: 24 }}>
        Receive real-time signed payloads when events occur in your blockchain infrastructure. Cerulea delivers <IC>HTTP POST</IC> requests to your endpoint with a HMAC-SHA256 signature for verification.
      </p>

      <EndpointCard method="POST" path="/webhooks" description="Register a new webhook subscription">
        <CodeBlock language="json" code={`{
  "url": "https://your-domain.com/webhook",
  "events": [
    "blockchain.block.created",
    "blockchain.transaction.confirmed",
    "contract.event.emitted",
    "validator.status.changed"
  ],
  "secret": "whsec_xxxxxxxxxxxxxxxx",
  "enabled": true,
  "filters": { "blockchainId": "bc_abc123" }
}`} />
      </EndpointCard>

      <Subsection title="Webhook Events">
        <DataTable headers={["Event Type", "Description"]} rows={[
          [<IC>blockchain.block.created</IC>,         "New block added to the chain"],
          [<IC>blockchain.transaction.confirmed</IC>, "Transaction confirmed on-chain"],
          [<IC>contract.deployed</IC>,                "Smart contract successfully deployed"],
          [<IC>contract.event.emitted</IC>,           "Contract event emitted"],
          [<IC>validator.status.changed</IC>,         "Validator joined, left, or changed status"],
          [<IC>governance.proposal.created</IC>,      "New governance proposal submitted"],
        ]} />
      </Subsection>

      <Subsection title="Signature Verification">
        <CodeBlock language="javascript" code={`const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(payload).digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(digest)
  );
}`} />
      </Subsection>
    </section>
  );
}

function WorkspacesSection() {
  return (
    <section id="workspaces" style={{ marginBottom: 80 }}>
      <SectionHeader num="VI" title="Workspaces" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", marginBottom: 24 }}>
        Organise your blockchain infrastructure into workspaces and projects. A workspace is the top-level container for all resources, team members, and billing.
      </p>

      <EndpointCard method="POST" path="/workspaces" description="Create a new workspace">
        <CodeBlock language="json" code={`{
  "name": "Production Environment",
  "description": "Production blockchain infrastructure",
  "settings": {
    "defaultNetwork": "mainnet",
    "billingPlan": "enterprise"
  },
  "members": [
    { "email": "admin@company.com", "role": "admin" }
  ]
}`} />
      </EndpointCard>

      <EndpointCard method="POST" path="/workspaces/:workspaceId/projects" description="Create a new project within a workspace">
        <CodeBlock language="json" code={`{
  "name": "DeFi Exchange",
  "type": "dapp",
  "template": "defi-dex",
  "config": {
    "blockchain": "ethereum",
    "network": "mainnet",
    "features": ["swap", "liquidity-pools", "staking"]
  }
}`} />
      </EndpointCard>
    </section>
  );
}

function DappBuilderSection() {
  return (
    <section id="dapp-builder" style={{ marginBottom: 80 }}>
      <SectionHeader num="VII" title="dApp Builder" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", marginBottom: 24 }}>
        Build complete decentralised applications with no code required. The dApp Builder API composes components into a fully deployable application with frontend, contracts, and backend logic.
      </p>

      <EndpointCard method="POST" path="/dapps" description="Create and configure a new dApp">
        <CodeBlock language="json" code={`{
  "name": "MyDeFi Platform",
  "workspaceId": "ws_xxxxxxxx",
  "template": "defi-platform",
  "components": [
    {
      "type": "token",
      "config": {
        "name": "Platform Token", "symbol": "PLAT",
        "totalSupply": "1000000000", "decimals": 18,
        "features": ["burnable", "mintable", "pausable"]
      }
    },
    {
      "type": "staking",
      "config": { "stakingToken": "PLAT", "rewardRate": "5", "lockPeriod": "30d" }
    }
  ],
  "frontend": { "theme": "modern-dark", "customDomain": "mydefi.com" }
}`} />
      </EndpointCard>

      <Subsection title="Available Components">
        <DataTable headers={["Component", "Description"]} rows={[
          [<IC>token</IC>,          "Fungible or non-fungible tokens"],
          [<IC>staking</IC>,        "Token staking mechanism with configurable rewards"],
          [<IC>liquidity-pool</IC>, "DEX liquidity pools"],
          [<IC>lending</IC>,        "Lending and borrowing protocol"],
          [<IC>governance</IC>,     "DAO governance system"],
          [<IC>nft-marketplace</IC>,"NFT marketplace with royalty support"],
          [<IC>auction</IC>,        "Auction mechanism"],
          [<IC>multisig</IC>,       "Multi-signature wallet"],
        ]} />
      </Subsection>
    </section>
  );
}

function BlockchainsSection() {
  return (
    <section id="blockchains" style={{ marginBottom: 80 }}>
      <SectionHeader num="VIII" title="Private Blockchains" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", marginBottom: 24 }}>
        Deploy and manage custom private blockchain networks with full control over consensus, validators, and runtime configuration.
      </p>

      <EndpointCard method="POST" path="/blockchains" description="Create a new private blockchain network">
        <CodeBlock language="json" code={`{
  "name": "Enterprise Blockchain",
  "type": "private",
  "consensus": "proof-of-authority",
  "chainId": 12345,
  "config": {
    "blockTime": "5s",
    "blockGasLimit": "30000000",
    "nativeToken": {
      "name": "Enterprise Coin", "symbol": "ENT", "premine": "1000000000"
    }
  },
  "validators": [{ "address": "0x1234...", "name": "Validator Node 1" }],
  "features": ["smart-contracts", "permissions", "privacy"]
}`} />
      </EndpointCard>

      <Subsection title="Consensus Mechanisms">
        <BulletList items={[
          <><IC>proof-of-authority (PoA)</IC> — Permissioned validators; standard for enterprise deployments</>,
          <><IC>proof-of-stake (PoS)</IC> — Stake-based validator selection</>,
          <><IC>delegated-proof-of-stake (DPoS)</IC> — Community-elected validator set</>,
          <><IC>pbft</IC> — Practical Byzantine Fault Tolerance for high-throughput private networks</>,
          <><IC>raft</IC> — Raft consensus for private networks requiring simple, stable leader election</>,
        ]} />
      </Subsection>
    </section>
  );
}

function ContractsSection() {
  return (
    <section id="contracts" style={{ marginBottom: 80 }}>
      <SectionHeader num="IX" title="Smart Contracts" />

      <EndpointCard method="POST" path="/contracts/deploy" description="Deploy a smart contract from a managed template">
        <CodeBlock language="json" code={`{
  "blockchainId": "bc_abc123",
  "template": "erc20-token",
  "params": {
    "name": "My Token", "symbol": "MTK",
    "totalSupply": "1000000", "decimals": 18
  },
  "from": "0x1234...",
  "gasLimit": "2000000"
}`} />
      </EndpointCard>

      <Subsection title="Contract Templates">
        <DataTable headers={["Template", "Description"]} rows={[
          [<IC>erc20-token</IC>,    "Standard fungible token (ERC-20)"],
          [<IC>erc721-nft</IC>,     "Non-fungible token (ERC-721)"],
          [<IC>erc1155-multi</IC>,  "Multi-token standard (ERC-1155)"],
          [<IC>governance-dao</IC>, "DAO with on-chain voting"],
          [<IC>staking-pool</IC>,   "Token staking with reward distribution"],
          [<IC>marketplace</IC>,    "NFT marketplace with royalties"],
        ]} />
      </Subsection>
    </section>
  );
}

function ValidatorsSection() {
  return (
    <section id="validators" style={{ marginBottom: 80 }}>
      <SectionHeader num="X" title="Validators" />

      <EndpointCard method="POST" path="/blockchains/:blockchainId/validators" description="Add a new validator to the network">
        <CodeBlock language="json" code={`{
  "address": "0xabcdef123456...",
  "name": "Node-US-East-1",
  "stake": "100000",
  "commission": "5",
  "metadata": { "location": "US-East", "provider": "AWS" }
}`} />
      </EndpointCard>

      <Subsection title="Validator Operations">
        <BulletList items={[
          <><IC>GET /validators/:id/status</IC> — Get real-time validator status and uptime</>,
          <><IC>PUT /validators/:id/stake</IC> — Update validator stake amount</>,
          <><IC>POST /validators/:id/slash</IC> — Apply slash penalty for misbehaviour</>,
          <><IC>DELETE /validators/:id</IC> — Remove a validator from the active set</>,
        ]} />
      </Subsection>
    </section>
  );
}

function GovernanceSection() {
  return (
    <section id="governance" style={{ marginBottom: 80 }}>
      <SectionHeader num="XI" title="Governance" />

      <EndpointCard method="POST" path="/governance/proposals" description="Create a new on-chain governance proposal">
        <CodeBlock language="json" code={`{
  "blockchainId": "bc_abc123",
  "title": "Increase Block Size",
  "description": "Proposal to increase block size from 2MB to 4MB",
  "type": "parameter-change",
  "changes": { "blockSize": "4MB" },
  "votingPeriod": "7d",
  "quorum": "50",
  "threshold": "66.67"
}`} />
      </EndpointCard>

      <EndpointCard method="POST" path="/governance/proposals/:proposalId/vote" description="Submit a vote on an active proposal">
        <CodeBlock language="json" code={`{
  "vote": "yes",
  "weight": "1000000",
  "reason": "This change will improve network throughput"
}`} />
      </EndpointCard>
    </section>
  );
}

function ModulesSection() {
  return (
    <section id="modules" style={{ marginBottom: 80 }}>
      <SectionHeader num="XII" title="Modules" />
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#374151", marginBottom: 24 }}>
        Enable and configure blockchain modules to add specific capabilities to a deployed network. Modules are provisioned at genesis or via governance upgrade.
      </p>

      <EndpointCard method="POST" path="/blockchains/:blockchainId/modules" description="Enable a module on your blockchain">
        <CodeBlock language="json" code={`{
  "module": "defi",
  "config": {
    "features": ["dex", "lending", "staking"],
    "swapFee": "0.3",
    "liquidationThreshold": "75"
  }
}`} />
      </EndpointCard>

      <Subsection title="Available Modules">
        <DataTable headers={["Module", "Features"]} rows={[
          [<IC>defi</IC>,     "DeFi protocols — DEX, lending, staking"],
          [<IC>nft</IC>,      "NFT minting and marketplace infrastructure"],
          [<IC>dao</IC>,      "DAO governance and on-chain voting"],
          [<IC>bridge</IC>,   "Cross-chain bridge functionality"],
          [<IC>oracle</IC>,   "Price oracle integration (Chainlink-compatible)"],
          [<IC>identity</IC>, "Decentralised identity (DID) framework"],
          [<IC>privacy</IC>,  "Zero-knowledge proof support"],
          [<IC>storage</IC>,  "Decentralised storage (IPFS-compatible)"],
        ]} />
      </Subsection>
    </section>
  );
}

function TokensSection() {
  return (
    <section id="tokens" style={{ marginBottom: 80 }}>
      <SectionHeader num="XIII" title="Tokens" />

      <EndpointCard method="POST" path="/tokens" description="Create and configure a new token on a deployed blockchain">
        <CodeBlock language="json" code={`{
  "blockchainId": "bc_abc123",
  "standard": "ERC20",
  "name": "Platform Token",
  "symbol": "PLAT",
  "decimals": 18,
  "totalSupply": "1000000000",
  "features": { "mintable": true, "burnable": true, "pausable": true },
  "distribution": [
    {
      "address": "0x1234...",
      "amount": "500000000",
      "vesting": { "duration": "24m", "cliff": "6m" }
    }
  ]
}`} />
      </EndpointCard>

      <Subsection title="Token Standards">
        <BulletList items={[
          <><IC>ERC20</IC> — Fungible tokens; standard for utility and governance tokens</>,
          <><IC>ERC721</IC> — Non-fungible tokens (NFTs); unique digital assets</>,
          <><IC>ERC1155</IC> — Multi-token standard; fungible and non-fungible in a single contract</>,
          <><IC>ERC4626</IC> — Tokenised vault standard for yield-bearing assets</>,
        ]} />
      </Subsection>
    </section>
  );
}

function MonitoringSection() {
  return (
    <section id="monitoring" style={{ marginBottom: 80 }}>
      <SectionHeader num="XIV" title="Monitoring" />

      <EndpointCard method="GET" path="/blockchains/:blockchainId/metrics" description="Get real-time blockchain metrics">
        <CodeBlock language="json" code={`{
  "currentBlock": 123456,
  "blockTime": 5.2,
  "transactionsPerSecond": 150,
  "activeValidators": 21,
  "totalTransactions": 5000000,
  "networkHashrate": "500 TH/s",
  "averageGasPrice": "25 gwei"
}`} />
      </EndpointCard>

      <EndpointCard method="GET" path="/analytics/timeseries" description="Query historical time-series blockchain data">
        <Note>Example: <IC>?blockchainId=bc_abc123&metric=transactions&from=2025-02-01&to=2025-02-25&granularity=1h</IC></Note>
      </EndpointCard>
    </section>
  );
}

function ErrorsSection() {
  return (
    <section id="errors" style={{ marginBottom: 80 }}>
      <SectionHeader num="XV" title="Error Handling" />

      <Subsection title="Error Response Format">
        <CodeBlock language="json" code={`{
  "success": false,
  "error": {
    "code": "INSUFFICIENT_BALANCE",
    "message": "Insufficient balance to complete transaction",
    "details": {
      "required": "1000000000000000000",
      "available": "500000000000000000"
    },
    "requestId": "req_abc123",
    "timestamp": "2025-02-25T10:30:00Z"
  }
}`} />
      </Subsection>

      <Subsection title="Common Error Codes">
        <DataTable headers={["HTTP Code", "Error Code", "Description"]} rows={[
          ["400", <IC>BAD_REQUEST</IC>,      "Invalid request parameters"],
          ["401", <IC>UNAUTHORIZED</IC>,     "Invalid or missing authentication"],
          ["403", <IC>FORBIDDEN</IC>,        "Insufficient permissions for the requested operation"],
          ["404", <IC>NOT_FOUND</IC>,        "Resource not found"],
          ["422", <IC>VALIDATION_ERROR</IC>, "Request body failed validation"],
          ["429", <IC>RATE_LIMITED</IC>,     "Rate limit exceeded — retry after the indicated delay"],
          ["500", <IC>INTERNAL_ERROR</IC>,   "Internal server error"],
        ]} />
      </Subsection>
    </section>
  );
}

// ─── Sidebar ───────────────────────────────────────────────────────────────────

function Sidebar({ activeSection, onNavigate, searchQuery, setSearchQuery, collapsed, onCollapse }) {
  const filtered = SECTIONS.filter(s =>
    !searchQuery || s.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>API Reference v1.0</div>
            </>}
          </div>
          <button onClick={() => onCollapse(!collapsed)} style={{
            background: "rgba(255,255,255,0.08)", border: "none", color: "rgba(255,255,255,0.6)",
            width: 28, height: 28, borderRadius: 6, cursor: "pointer", fontSize: 12,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
          }}>{collapsed ? "›" : "‹"}</button>
        </div>
      </div>

      {/* Base URL */}
      {!collapsed && (
        <div style={{ padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
          <div style={{
            background: "rgba(46,117,182,0.2)", border: "1px solid rgba(96,165,250,0.25)",
            borderRadius: 8, padding: "6px 12px",
            fontFamily: '"Fira Code","Fira Mono",ui-monospace,monospace',
            fontSize: 11, color: "#93C5FD"
          }}>api.cerulea.app/v1</div>
        </div>
      )}

      {/* Search */}
      {!collapsed && (
        <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search API docs..."
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
        {filtered.map(s => {
          const isActive = activeSection === s.id;
          return (
            <a key={s.id} href={`#${s.id}`}
              onClick={e => { e.preventDefault(); onNavigate(s.id); }}
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
          June 2026 &nbsp;·&nbsp; API v1.0
        </div>
      )}
    </aside>
  );
}

// ─── App ────────────────────────────────────────────────────────────────────────

export default function CeruleaAPIDocs() {
  const [activeSection, setActiveSection] = useActiveSection();
  const [collapsed, setCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const progress = useScrollProgress();
  const sidebarWidth = collapsed ? 64 : 272;

  const navigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans','Segoe UI',sans-serif", background: "#fff", minHeight: "100vh" }}>
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
        collapsed={collapsed}
        onCollapse={setCollapsed}
      />

      {/* Main content */}
      <main style={{ marginLeft: sidebarWidth, transition: "margin-left 0.3s ease", minHeight: "100vh", paddingBottom: 80 }}>
        {/* Breadcrumb bar */}
        <div style={{
          position: "sticky", top: 64,
          background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)",
          borderBottom: "1px solid #F3F4F6", padding: "14px 52px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          zIndex: 50
        }}>
          <div style={{ fontSize: 13, color: "#9CA3AF" }}>
            Cerulea &rsaquo; <span style={{ color: "#1A3C6B", fontWeight: 600 }}>
              {SECTIONS.find(s => s.id === activeSection)?.title || "API Reference"}
            </span>
          </div>
          <div style={{ fontSize: 12, color: "#9CA3AF" }}>API v1.0 &nbsp;·&nbsp; June 2026</div>
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
            <Tag>API Reference</Tag>
            <h1 style={{
              fontSize: 54, fontWeight: 700, color: "#fff", margin: "18px 0 12px",
              letterSpacing: "-0.03em", lineHeight: 1.05,
              fontFamily: "'DM Serif Display', Georgia, serif"
            }}>API Documentation</h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 500, lineHeight: 1.65, marginBottom: 36 }}>
              Full programmatic access to the Cerulea platform. REST for resource management, JSON-RPC 2.0 for direct blockchain interaction.
            </p>
            <div style={{ display: "flex", gap: 28, fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
              {[["15", "Sections"], ["REST + RPC", "Protocols"], ["Enterprise", "Grade"]].map(([n, l]) => (
                <div key={l}>
                  <span style={{ fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.85)", display: "block", fontFamily: "'DM Serif Display', serif" }}>{n}</span>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sections */}
          <IntroductionSection />
          <AuthenticationSection />
          <RestApiSection />
          <RpcMethodsSection />
          <WebhooksSection />
          <WorkspacesSection />
          <DappBuilderSection />
          <BlockchainsSection />
          <ContractsSection />
          <ValidatorsSection />
          <GovernanceSection />
          <ModulesSection />
          <TokensSection />
          <MonitoringSection />
          <ErrorsSection />
        </div>
      </main>
    </div>
  );
}
