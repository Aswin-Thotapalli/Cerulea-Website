'use client';
import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';
import {
  Book, Code, Zap, Shield, Database, GitBranch, Users, Lock,
  Webhook, Settings, BarChart3, Rocket, AlertCircle, Menu, X,
  Search, ExternalLink, Copy, Check,
} from 'lucide-react';

// ─── Helper components (defined outside to avoid remount) ──────────────────────

function SectionTitle({ children }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, mt: 1 }}>
      <Box sx={{ width: 4, height: 28, bgcolor: '#2563eb', borderRadius: 0.5, flexShrink: 0 }} />
      <Typography sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 800, color: '#172554', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
        {children}
      </Typography>
    </Box>
  );
}

function SubTitle({ children }) {
  return (
    <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, color: '#172554', mt: 4, mb: 1.5 }}>
      {children}
    </Typography>
  );
}

function Description({ children }) {
  return (
    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.8, mb: 2 }}>
      {children}
    </Typography>
  );
}

function BulletList({ items }) {
  return (
    <Box sx={{ pl: 0, m: 0, my: 2 }}>
      {items.map((item, i) => (
        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, py: 0.75 }}>
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#2563eb', mt: '7px', flexShrink: 0 }} />
          <Typography sx={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>{item}</Typography>
        </Box>
      ))}
    </Box>
  );
}

function Table({ headers, rows }) {
  return (
    <Box sx={{ overflowX: 'auto', my: 3, border: '1px solid #E2E8F0', borderRadius: 2, bgcolor: '#FFFFFF' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{ padding: '10px 16px', textAlign: 'left', fontSize: '0.7rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: i < rows.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: '10px 16px', fontSize: '0.875rem', color: '#475569', verticalAlign: 'top' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
}

const METHOD_STYLES = {
  GET:    { bg: '#DCFCE7', color: '#166534', border: '#BBF7D0' },
  POST:   { bg: '#DBEAFE', color: '#1E40AF', border: '#BFDBFE' },
  PUT:    { bg: '#FEF3C7', color: '#92400E', border: '#FDE68A' },
  DELETE: { bg: '#FEE2E2', color: '#991B1B', border: '#FECACA' },
};

function EndpointCard({ method, path, description, children }) {
  const ms = METHOD_STYLES[method] || METHOD_STYLES.GET;
  return (
    <Box sx={{ border: '1px solid #E2E8F0', borderRadius: 3, p: 3, my: 3, bgcolor: '#FFFFFF', transition: 'all 0.2s', '&:hover': { borderColor: '#BFDBFE', boxShadow: '0 4px 16px rgba(37,99,235,0.08)' } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, flexWrap: 'wrap' }}>
        <Typography sx={{ px: 1.25, py: 0.4, borderRadius: 1, bgcolor: ms.bg, color: ms.color, border: `1px solid ${ms.border}`, fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', flexShrink: 0 }}>
          {method}
        </Typography>
        <Typography sx={{ fontFamily: 'monospace', fontSize: '0.875rem', color: '#2563eb', bgcolor: '#EFF6FF', px: 1.5, py: 0.4, borderRadius: 1, flex: 1, minWidth: 0, wordBreak: 'break-all' }}>
          {path}
        </Typography>
      </Box>
      <Typography sx={{ color: '#64748B', fontSize: '0.9rem', mb: children ? 1 : 0 }}>{description}</Typography>
      {children}
    </Box>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: 'introduction',  title: 'Introduction',        icon: Book },
  { id: 'authentication',title: 'Authentication',       icon: Lock },
  { id: 'rest-api',      title: 'REST API',             icon: Code },
  { id: 'rpc-methods',   title: 'RPC Methods',          icon: Zap },
  { id: 'webhooks',      title: 'Webhooks',             icon: Webhook },
  { id: 'workspaces',    title: 'Workspaces',           icon: Users },
  { id: 'dapp-builder',  title: 'dApp Builder',         icon: Rocket },
  { id: 'blockchains',   title: 'Private Blockchains',  icon: Database },
  { id: 'contracts',     title: 'Smart Contracts',      icon: GitBranch },
  { id: 'validators',    title: 'Validators',           icon: Shield },
  { id: 'governance',    title: 'Governance',           icon: Users },
  { id: 'modules',       title: 'Modules',              icon: Settings },
  { id: 'tokens',        title: 'Tokens',               icon: Code },
  { id: 'monitoring',    title: 'Monitoring',           icon: BarChart3 },
  { id: 'errors',        title: 'Error Handling',       icon: AlertCircle },
];

const CeruleaAPIDocs = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copied, setCopied] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(''), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (typeof window !== 'undefined' && window.innerWidth < 1024) setSidebarOpen(false);
  };

  // Code block — needs copyToClipboard + copied state so defined here
  const CodeBlock = ({ code, language = 'bash', id }) => (
    <Box sx={{ bgcolor: '#0F172A', borderRadius: 2, overflow: 'hidden', my: 3, border: '1px solid #1E293B' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2.5, py: 1.25, bgcolor: '#020617', borderBottom: '1px solid #1E293B' }}>
        <Typography sx={{ color: '#38BDF8', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {language}
        </Typography>
        <Box
          component="button"
          onClick={() => copyToClipboard(code, id)}
          sx={{ display: 'flex', alignItems: 'center', gap: 0.75, bgcolor: 'transparent', border: '1px solid', borderColor: copied === id ? '#22C55E' : '#334155', color: copied === id ? '#22C55E' : '#94A3B8', px: 1.5, py: 0.5, borderRadius: 1, fontSize: '0.75rem', cursor: 'pointer', transition: 'all 0.2s', '&:hover': { borderColor: '#64748B', color: '#E2E8F0' }, fontFamily: 'inherit' }}
        >
          {copied === id ? <Check size={13} /> : <Copy size={13} />}
          <span style={{ marginLeft: 2 }}>{copied === id ? 'Copied' : 'Copy'}</span>
        </Box>
      </Box>
      <Box sx={{ p: 3, overflowX: 'auto' }}>
        <Typography component="pre" sx={{ color: '#E2E8F0', fontFamily: '"Fira Code", "Fira Mono", ui-monospace, monospace', fontSize: '0.875rem', lineHeight: 1.7, m: 0, whiteSpace: 'pre' }}>
          {code}
        </Typography>
      </Box>
    </Box>
  );

  const filtered = SECTIONS.filter(s => !searchQuery || s.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Box className="cerulea-api-docs" sx={{ display: 'flex', bgcolor: '#FAFAFA', minHeight: '100vh', position: 'relative' }}>

      {/* Scoped style for inline <code> elements in tables/lists */}
      <style>{`
        .cerulea-api-docs code {
          background: #EFF6FF;
          color: #1D4ED8;
          padding: 2px 7px;
          border-radius: 4px;
          font-family: "Fira Code", "Fira Mono", ui-monospace, monospace;
          font-size: 0.84em;
          font-weight: 600;
        }
      `}</style>

      {/* Mobile toggle */}
      <Box
        component="button"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        sx={{ display: { xs: 'flex', lg: 'none' }, position: 'fixed', top: 72, left: 12, zIndex: 200, alignItems: 'center', justifyContent: 'center', width: 40, height: 40, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 2, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', color: '#475569', '&:hover': { bgcolor: '#F8FAFC' } }}
      >
        {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
      </Box>

      {/* ── SIDEBAR ── */}
      <Box sx={{
        position: 'fixed', left: 0, top: 64,
        width: 260, height: 'calc(100vh - 64px)',
        bgcolor: '#FFFFFF', borderRight: '1px solid #E2E8F0',
        overflowY: 'auto', zIndex: 100,
        transform: { xs: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)', lg: 'translateX(0)' },
        transition: 'transform 0.25s ease',
        '&::-webkit-scrollbar': { width: 5 },
        '&::-webkit-scrollbar-track': { background: 'transparent' },
        '&::-webkit-scrollbar-thumb': { background: '#CBD5E1', borderRadius: 10 },
      }}>

        {/* Sidebar header */}
        <Box sx={{ p: 2.5, pb: 2, borderBottom: '1px solid #F1F5F9' }}>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
            <Box sx={{ width: 22, height: 22, borderRadius: 0.75, background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', boxShadow: '0 0 10px rgba(59,130,246,0.35)' }} />
            <Typography sx={{ fontWeight: 800, color: '#0A192F', fontSize: '0.95rem', letterSpacing: '-0.01em' }}>Cerulea</Typography>
          </Stack>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', bgcolor: '#EFF6FF', color: '#2563eb', px: 1.25, py: 0.35, borderRadius: 10, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', border: '1px solid #BFDBFE', mb: 2 }}>
            API v1.0
          </Box>
          <Box sx={{ px: 1.5, py: 0.875, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 1.5 }}>
            <Typography sx={{ fontFamily: 'monospace', fontSize: '0.77rem', color: '#2563eb', wordBreak: 'break-all' }}>
              api.cerulea.app/v1
            </Typography>
          </Box>
        </Box>

        {/* Search */}
        <Box sx={{ px: 2.5, py: 1.5, borderBottom: '1px solid #F1F5F9' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 1.5, py: 0.75, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 1.5, transition: 'all 0.15s', '&:focus-within': { borderColor: '#2563eb', bgcolor: '#FFFFFF', boxShadow: '0 0 0 3px rgba(37,99,235,0.08)' } }}>
            <Search size={14} color="#94A3B8" style={{ flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Search docs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '0.85rem', color: '#475569', width: '100%', fontFamily: 'inherit' }}
            />
          </Box>
        </Box>

        {/* Nav items */}
        <Box sx={{ py: 1 }}>
          {filtered.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <Box
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2.5, py: 0.875, cursor: 'pointer', borderLeft: '2px solid', borderLeftColor: isActive ? '#2563eb' : 'transparent', bgcolor: isActive ? '#EFF6FF' : 'transparent', color: isActive ? '#2563eb' : '#475569', transition: 'all 0.15s', '&:hover': { bgcolor: isActive ? '#EFF6FF' : '#F8FAFC', color: isActive ? '#2563eb' : '#172554' } }}
              >
                <Icon size={14} style={{ flexShrink: 0 }} />
                <Typography sx={{ fontSize: '0.875rem', fontWeight: isActive ? 600 : 400, color: 'inherit', lineHeight: 1.4 }}>
                  {section.title}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* ── MAIN CONTENT ── */}
      <Box sx={{ ml: { xs: 0, lg: '260px' }, flex: 1, minWidth: 0, px: { xs: 3, sm: 5, md: 8 }, pt: { xs: 10, md: 14 }, pb: 16 }}>
        <Box sx={{ maxWidth: 860 }}>

          {/* HERO */}
          <Box sx={{ mb: 8, pb: 6, borderBottom: '1px solid #E2E8F0' }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: '#EFF6FF', border: '1px solid #BFDBFE', px: 1.5, py: 0.5, borderRadius: 10, mb: 3 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#2563eb' }} />
              <Typography sx={{ color: '#2563eb', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>API Reference</Typography>
            </Box>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, color: '#172554', letterSpacing: '-0.03em', lineHeight: 1.1, mb: 2 }}>
              API Documentation
            </Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 680, mb: 4 }}>
              Build complete dApps and private blockchains. The Cerulea API combines REST endpoints for resource management and JSON-RPC for direct blockchain interactions.
            </Typography>
            <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
              {[
                { label: 'Production Ready', color: '#059669', bg: '#DCFCE7', border: '#BBF7D0' },
                { label: 'Enterprise Grade', color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE' },
                { label: 'REST + JSON-RPC',  color: '#2563eb', bg: '#EFF6FF', border: '#BFDBFE' },
              ].map(({ label, color, bg, border }) => (
                <Box key={label} sx={{ display: 'inline-flex', alignItems: 'center', px: 1.5, py: 0.6, bgcolor: bg, border: `1px solid ${border}`, borderRadius: 10, color, fontSize: '0.8rem', fontWeight: 700 }}>
                  {label}
                </Box>
              ))}
            </Stack>
          </Box>

          {/* INTRODUCTION */}
          <Box component="section" id="introduction" sx={{ mb: 8, scrollMarginTop: '5rem' }}>
            <SectionTitle>Introduction</SectionTitle>
            <Description>
              Welcome to the Cerulea API documentation. Cerulea is a production-grade, no-code blockchain
              infrastructure platform that enables developers and enterprises to build fully functional
              decentralised applications and private blockchain networks without writing blockchain code.
            </Description>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2, my: 4 }}>
              {[
                { title: 'Complete dApps',        desc: 'Build full-stack dApps with smart contracts, tokens, and frontends.' },
                { title: 'Private Blockchains',   desc: 'Deploy custom blockchain networks with configurable consensus.' },
                { title: 'Validator Management',  desc: 'Manage validators, governance, and network parameters.' },
                { title: 'Modular Architecture',  desc: 'Configure modules for DeFi, NFTs, DAOs, and more.' },
                { title: 'Real-time Monitoring',  desc: 'Monitor and analyse blockchain performance in real-time.' },
                { title: 'CI/CD Integration',     desc: 'Automated deployments with GitHub integration.' },
              ].map(({ title, desc }) => (
                <Box key={title} sx={{ p: 2.5, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 2.5, transition: 'all 0.2s', '&:hover': { borderColor: '#BFDBFE', boxShadow: '0 4px 12px rgba(37,99,235,0.06)' } }}>
                  <Box sx={{ width: 32, height: 32, borderRadius: 1.5, bgcolor: '#EFF6FF', border: '1px solid #BFDBFE', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1.5 }}>
                    <Box sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: '#2563eb' }} />
                  </Box>
                  <Typography sx={{ fontWeight: 700, color: '#172554', fontSize: '0.875rem', mb: 0.5 }}>{title}</Typography>
                  <Typography sx={{ color: '#64748B', fontSize: '0.825rem', lineHeight: 1.55 }}>{desc}</Typography>
                </Box>
              ))}
            </Box>

            <SubTitle>API Architecture</SubTitle>
            <Description>
              The Cerulea API follows a hybrid architecture combining RESTful endpoints for resource
              management with JSON-RPC for blockchain interactions — intuitive REST for infrastructure
              management, and powerful RPC methods for blockchain operations.
            </Description>
          </Box>

          {/* AUTHENTICATION */}
          <Box component="section" id="authentication" sx={{ mb: 8, scrollMarginTop: '5rem' }}>
            <SectionTitle>Authentication & Authorization</SectionTitle>
            <Description>Cerulea uses a dual authentication system for maximum security and flexibility.</Description>

            <SubTitle>API Key Authentication</SubTitle>
            <Description>For server-to-server communication and automated workflows.</Description>

            <EndpointCard method="POST" path="/auth/api-keys" description="Create a new API key with custom scopes and expiration">
              <CodeBlock id="api-key-create" language="bash" code={`curl -X POST https://api.cerulea.app/v1/auth/api-keys \\
  -H "Authorization: Bearer <your_oauth_token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Production API Key",
    "scopes": ["workspace:read", "workspace:write", "blockchain:deploy"],
    "expiresIn": "90d"
  }'`} />
            </EndpointCard>

            <Box sx={{ display: 'flex', gap: 1.5, p: 2.5, bgcolor: '#EFF6FF', border: '1px solid #BFDBFE', borderLeft: '4px solid #2563eb', borderRadius: 2, my: 3 }}>
              <AlertCircle size={18} color="#2563eb" style={{ flexShrink: 0, marginTop: 2 }} />
              <Typography sx={{ fontSize: '0.875rem', color: '#1E40AF', lineHeight: 1.6 }}>
                <strong>Security Best Practice:</strong> Include the API key in the <code>X-API-Key</code> header
                for all requests. Never expose API keys in client-side code.
              </Typography>
            </Box>

            <CodeBlock id="api-key-usage" language="bash" code={`curl -X GET https://api.cerulea.app/v1/workspaces \\
  -H "X-API-Key: crla_live_xxxxxxxxxxxxxxxxxxx"`} />

            <SubTitle>OAuth 2.0</SubTitle>
            <Description>For user-facing applications and third-party integrations.</Description>

            <CodeBlock id="oauth-flow" language="bash" code={`# Step 1: Redirect user to authorization endpoint
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

            <SubTitle>Available Scopes</SubTitle>
            <Table headers={['Scope', 'Description']} rows={[
              [<code>workspace:read</code>,    'Read workspace data'],
              [<code>workspace:write</code>,   'Create/modify workspaces'],
              [<code>blockchain:read</code>,   'Query blockchain data'],
              [<code>blockchain:write</code>,  'Deploy/manage blockchains'],
              [<code>blockchain:deploy</code>, 'Deploy smart contracts'],
              [<code>validator:read</code>,    'View validators'],
              [<code>validator:write</code>,   'Manage validators'],
              [<code>governance:read</code>,   'View proposals'],
              [<code>governance:write</code>,  'Create/vote on proposals'],
              [<code>admin</code>,             'Full administrative access'],
            ]} />
          </Box>

          {/* REST API */}
          <Box component="section" id="rest-api" sx={{ mb: 8, scrollMarginTop: '5rem' }}>
            <SectionTitle>Core REST API</SectionTitle>

            <SubTitle>Standard Response Format</SubTitle>
            <CodeBlock id="response-format" language="json" code={`{
  "success": true,
  "data": { /* resource data */ },
  "meta": {
    "requestId": "req_xxxxxxxx",
    "timestamp": "2025-02-25T10:30:00Z"
  }
}`} />

            <SubTitle>Pagination</SubTitle>
            <EndpointCard method="GET" path="/resources?page=1&limit=50&sort=created_at:desc" description="List resources with pagination and sorting">
              <CodeBlock id="pagination-response" language="json" code={`{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 250,
    "totalPages": 5,
    "hasNext": true,
    "hasPrev": false
  }
}`} />
            </EndpointCard>

            <SubTitle>Health Check</SubTitle>
            <EndpointCard method="GET" path="/health" description="Check API health and service status">
              <CodeBlock id="health-check" language="json" code={`{
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
          </Box>

          {/* RPC METHODS */}
          <Box component="section" id="rpc-methods" sx={{ mb: 8, scrollMarginTop: '5rem' }}>
            <SectionTitle>RPC Methods</SectionTitle>
            <Description>JSON-RPC 2.0 endpoint for direct blockchain interactions.</Description>

            <EndpointCard method="POST" path="/rpc" description="Execute JSON-RPC methods">
              <CodeBlock id="rpc-request" language="json" code={`{
  "jsonrpc": "2.0",
  "method": "blockchain.getBlock",
  "params": {
    "blockchainId": "bc_xxxxxxxx",
    "blockNumber": "latest"
  },
  "id": 1
}`} />
            </EndpointCard>

            <SubTitle>Available Methods</SubTitle>
            <BulletList items={[
              <><code>blockchain.getBlock</code> — Get block by number or hash</>,
              <><code>blockchain.getTransaction</code> — Get transaction details</>,
              <><code>blockchain.getBalance</code> — Get account balance</>,
              <><code>transaction.send</code> — Send signed transaction</>,
              <><code>transaction.simulate</code> — Simulate transaction execution</>,
              <><code>contract.call</code> — Read-only contract call</>,
              <><code>contract.execute</code> — Execute contract method</>,
            ]} />
          </Box>

          {/* WEBHOOKS */}
          <Box component="section" id="webhooks" sx={{ mb: 8, scrollMarginTop: '5rem' }}>
            <SectionTitle>Webhooks</SectionTitle>
            <Description>Receive real-time notifications when events occur in your blockchain infrastructure.</Description>

            <EndpointCard method="POST" path="/webhooks" description="Create a new webhook">
              <CodeBlock id="webhook-create" language="json" code={`{
  "url": "https://your-domain.com/webhook",
  "events": [
    "blockchain.block.created",
    "blockchain.transaction.confirmed",
    "contract.event.emitted",
    "validator.status.changed"
  ],
  "secret": "whsec_xxxxxxxxxxxxxxxx",
  "enabled": true,
  "filters": {
    "blockchainId": "bc_abc123"
  }
}`} />
            </EndpointCard>

            <SubTitle>Webhook Events</SubTitle>
            <Table headers={['Event Type', 'Description']} rows={[
              [<code>blockchain.block.created</code>,         'New block mined'],
              [<code>blockchain.transaction.confirmed</code>, 'Transaction confirmed'],
              [<code>contract.deployed</code>,                'Smart contract deployed'],
              [<code>contract.event.emitted</code>,           'Contract event emitted'],
              [<code>validator.status.changed</code>,         'Validator status changed'],
              [<code>governance.proposal.created</code>,      'New proposal created'],
            ]} />

            <SubTitle>Signature Verification</SubTitle>
            <CodeBlock id="webhook-verify" language="javascript" code={`const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(payload).digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(digest)
  );
}`} />
          </Box>

          {/* WORKSPACES */}
          <Box component="section" id="workspaces" sx={{ mb: 8, scrollMarginTop: '5rem' }}>
            <SectionTitle>Workspace & Project Management</SectionTitle>
            <Description>Organise your blockchain infrastructure into workspaces and projects.</Description>

            <EndpointCard method="POST" path="/workspaces" description="Create a new workspace">
              <CodeBlock id="workspace-create" language="json" code={`{
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
              <CodeBlock id="project-create" language="json" code={`{
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
          </Box>

          {/* DAPP BUILDER */}
          <Box component="section" id="dapp-builder" sx={{ mb: 8, scrollMarginTop: '5rem' }}>
            <SectionTitle>dApp Builder API</SectionTitle>
            <Description>Build complete decentralised applications with no code required.</Description>

            <EndpointCard method="POST" path="/dapps" description="Create a new dApp">
              <CodeBlock id="dapp-create" language="json" code={`{
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

            <SubTitle>Available Components</SubTitle>
            <Table headers={['Component', 'Description']} rows={[
              [<code>token</code>,         'Fungible or non-fungible tokens'],
              [<code>staking</code>,       'Token staking mechanism'],
              [<code>liquidity-pool</code>,'DEX liquidity pools'],
              [<code>lending</code>,       'Lending/borrowing protocol'],
              [<code>governance</code>,    'DAO governance system'],
              [<code>nft-marketplace</code>,'NFT marketplace'],
              [<code>auction</code>,       'Auction mechanism'],
              [<code>multisig</code>,      'Multi-signature wallet'],
            ]} />
          </Box>

          {/* PRIVATE BLOCKCHAINS */}
          <Box component="section" id="blockchains" sx={{ mb: 8, scrollMarginTop: '5rem' }}>
            <SectionTitle>Private Blockchain Networks</SectionTitle>
            <Description>Deploy and manage custom private blockchain networks with full control.</Description>

            <EndpointCard method="POST" path="/blockchains" description="Create a new private blockchain">
              <CodeBlock id="blockchain-create" language="json" code={`{
  "name": "Enterprise Blockchain",
  "type": "private",
  "consensus": "proof-of-authority",
  "chainId": 12345,
  "config": {
    "blockTime": "5s",
    "blockGasLimit": "30000000",
    "nativeToken": { "name": "Enterprise Coin", "symbol": "ENT", "premine": "1000000000" }
  },
  "validators": [{ "address": "0x1234...", "name": "Validator Node 1" }],
  "features": ["smart-contracts", "permissions", "privacy"]
}`} />
            </EndpointCard>

            <SubTitle>Consensus Mechanisms</SubTitle>
            <BulletList items={[
              <><code>proof-of-authority (PoA)</code> — Permissioned validators</>,
              <><code>proof-of-stake (PoS)</code> — Stake-based validation</>,
              <><code>delegated-proof-of-stake (DPoS)</code> — Elected validators</>,
              <><code>pbft</code> — Practical Byzantine Fault Tolerance</>,
              <><code>raft</code> — Raft consensus for private networks</>,
            ]} />
          </Box>

          {/* SMART CONTRACTS */}
          <Box component="section" id="contracts" sx={{ mb: 8, scrollMarginTop: '5rem' }}>
            <SectionTitle>Smart Contract Management</SectionTitle>

            <EndpointCard method="POST" path="/contracts/deploy" description="Deploy a smart contract from template">
              <CodeBlock id="contract-deploy" language="json" code={`{
  "blockchainId": "bc_abc123",
  "template": "erc20-token",
  "params": { "name": "My Token", "symbol": "MTK", "totalSupply": "1000000", "decimals": 18 },
  "from": "0x1234...",
  "gasLimit": "2000000"
}`} />
            </EndpointCard>

            <SubTitle>Contract Templates</SubTitle>
            <Table headers={['Template', 'Description']} rows={[
              [<code>erc20-token</code>,    'Standard fungible token'],
              [<code>erc721-nft</code>,     'Non-fungible token'],
              [<code>erc1155-multi</code>,  'Multi-token standard'],
              [<code>governance-dao</code>, 'DAO with voting'],
              [<code>staking-pool</code>,   'Staking rewards'],
              [<code>marketplace</code>,    'NFT marketplace'],
            ]} />
          </Box>

          {/* VALIDATORS */}
          <Box component="section" id="validators" sx={{ mb: 8, scrollMarginTop: '5rem' }}>
            <SectionTitle>Validator Management</SectionTitle>

            <EndpointCard method="POST" path="/blockchains/:blockchainId/validators" description="Add a new validator to the network">
              <CodeBlock id="validator-add" language="json" code={`{
  "address": "0xabcdef123456...",
  "name": "Node-US-East-1",
  "stake": "100000",
  "commission": "5",
  "metadata": { "location": "US-East", "provider": "AWS" }
}`} />
            </EndpointCard>

            <SubTitle>Validator Operations</SubTitle>
            <BulletList items={[
              <><code>GET /validators/:id/status</code> — Get validator status</>,
              <><code>PUT /validators/:id/stake</code> — Update stake amount</>,
              <><code>POST /validators/:id/slash</code> — Slash validator (penalty)</>,
              <><code>DELETE /validators/:id</code> — Remove validator</>,
            ]} />
          </Box>

          {/* GOVERNANCE */}
          <Box component="section" id="governance" sx={{ mb: 8, scrollMarginTop: '5rem' }}>
            <SectionTitle>Governance Proposals</SectionTitle>

            <EndpointCard method="POST" path="/governance/proposals" description="Create a new governance proposal">
              <CodeBlock id="proposal-create" language="json" code={`{
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

            <EndpointCard method="POST" path="/governance/proposals/:proposalId/vote" description="Vote on a proposal">
              <CodeBlock id="proposal-vote" language="json" code={`{
  "vote": "yes",
  "weight": "1000000",
  "reason": "This change will improve network throughput"
}`} />
            </EndpointCard>
          </Box>

          {/* MODULES */}
          <Box component="section" id="modules" sx={{ mb: 8, scrollMarginTop: '5rem' }}>
            <SectionTitle>Module Configuration</SectionTitle>
            <Description>Enable and configure blockchain modules for specific functionality.</Description>

            <EndpointCard method="POST" path="/blockchains/:blockchainId/modules" description="Enable a module on your blockchain">
              <CodeBlock id="module-enable" language="json" code={`{
  "module": "defi",
  "config": {
    "features": ["dex", "lending", "staking"],
    "swapFee": "0.3",
    "liquidationThreshold": "75"
  }
}`} />
            </EndpointCard>

            <SubTitle>Available Modules</SubTitle>
            <Table headers={['Module', 'Features']} rows={[
              [<code>defi</code>,     'DeFi protocols (DEX, lending, staking)'],
              [<code>nft</code>,      'NFT minting and marketplace'],
              [<code>dao</code>,      'DAO governance and voting'],
              [<code>bridge</code>,   'Cross-chain bridge functionality'],
              [<code>oracle</code>,   'Price oracle integration'],
              [<code>identity</code>, 'Decentralised identity (DID)'],
              [<code>privacy</code>,  'Zero-knowledge proofs'],
              [<code>storage</code>,  'Decentralised storage (IPFS)'],
            ]} />
          </Box>

          {/* TOKENS */}
          <Box component="section" id="tokens" sx={{ mb: 8, scrollMarginTop: '5rem' }}>
            <SectionTitle>Token Management</SectionTitle>

            <EndpointCard method="POST" path="/tokens" description="Create a new token">
              <CodeBlock id="token-create" language="json" code={`{
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

            <SubTitle>Token Standards</SubTitle>
            <BulletList items={[
              <><code>ERC20</code> — Fungible tokens</>,
              <><code>ERC721</code> — Non-fungible tokens (NFTs)</>,
              <><code>ERC1155</code> — Multi-token standard</>,
              <><code>ERC4626</code> — Tokenised vaults</>,
            ]} />
          </Box>

          {/* MONITORING */}
          <Box component="section" id="monitoring" sx={{ mb: 8, scrollMarginTop: '5rem' }}>
            <SectionTitle>Monitoring & Analytics</SectionTitle>

            <EndpointCard method="GET" path="/blockchains/:blockchainId/metrics" description="Get real-time blockchain metrics">
              <CodeBlock id="metrics" language="json" code={`{
  "currentBlock": 123456,
  "blockTime": 5.2,
  "transactionsPerSecond": 150,
  "activeValidators": 21,
  "totalTransactions": 5000000,
  "networkHashrate": "500 TH/s",
  "averageGasPrice": "25 gwei"
}`} />
            </EndpointCard>

            <EndpointCard method="GET" path="/analytics/timeseries" description="Query historical data">
              <Typography sx={{ fontSize: '0.875rem', color: '#64748B' }}>
                Example: <code>?blockchainId=bc_abc123&metric=transactions&from=2025-02-01&to=2025-02-25&granularity=1h</code>
              </Typography>
            </EndpointCard>
          </Box>

          {/* ERRORS */}
          <Box component="section" id="errors" sx={{ mb: 8, scrollMarginTop: '5rem' }}>
            <SectionTitle>Error Handling</SectionTitle>

            <SubTitle>Error Response Format</SubTitle>
            <CodeBlock id="error-format" language="json" code={`{
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

            <SubTitle>Common Error Codes</SubTitle>
            <Table headers={['HTTP Code', 'Error Code', 'Description']} rows={[
              ['400', <code>BAD_REQUEST</code>,       'Invalid request parameters'],
              ['401', <code>UNAUTHORIZED</code>,      'Invalid or missing authentication'],
              ['403', <code>FORBIDDEN</code>,         'Insufficient permissions'],
              ['404', <code>NOT_FOUND</code>,         'Resource not found'],
              ['422', <code>VALIDATION_ERROR</code>,  'Validation failed'],
              ['429', <code>RATE_LIMITED</code>,      'Rate limit exceeded'],
              ['500', <code>INTERNAL_ERROR</code>,    'Internal server error'],
            ]} />
          </Box>

          {/* FOOTER */}
          <Box sx={{ pt: 6, borderTop: '1px solid #E2E8F0', textAlign: 'center' }}>
            <Typography sx={{ color: '#94A3B8', fontSize: '0.875rem' }}>
              © 2025 Cerulea · API v1.0.0 · Last updated February 2025
            </Typography>
            <Stack direction="row" spacing={3} justifyContent="center" sx={{ mt: 2 }}>
              {[
                { label: 'Docs',       href: '/developers/docs' },
                { label: 'Whitepaper', href: '/developers/whitepaper' },
                { label: 'Contact',    href: '/company/contact' },
              ].map(({ label, href }) => (
                <Box key={label} component="a" href={href} sx={{ color: '#2563eb', fontSize: '0.875rem', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                  {label}
                </Box>
              ))}
            </Stack>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default CeruleaAPIDocs;
