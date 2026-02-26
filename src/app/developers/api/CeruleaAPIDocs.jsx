'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight, Book, Code, Zap, Shield, Database, GitBranch, Users, Lock, Webhook, Settings, BarChart3, Rocket, AlertCircle, Menu, X, Search, ExternalLink, Copy, Check } from 'lucide-react';

const CeruleaAPIDocs = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [copied, setCopied] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(''), 2000);
  };

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: Book },
    { id: 'authentication', title: 'Authentication', icon: Lock },
    { id: 'rest-api', title: 'REST API', icon: Code },
    { id: 'rpc-methods', title: 'RPC Methods', icon: Zap },
    { id: 'webhooks', title: 'Webhooks', icon: Webhook },
    { id: 'workspaces', title: 'Workspaces', icon: Users },
    { id: 'dapp-builder', title: 'dApp Builder', icon: Rocket },
    { id: 'blockchains', title: 'Private Blockchains', icon: Database },
    { id: 'contracts', title: 'Smart Contracts', icon: GitBranch },
    { id: 'validators', title: 'Validators', icon: Shield },
    { id: 'governance', title: 'Governance', icon: Users },
    { id: 'modules', title: 'Modules', icon: Settings },
    { id: 'tokens', title: 'Tokens', icon: Code },
    { id: 'monitoring', title: 'Monitoring', icon: BarChart3 },
    { id: 'errors', title: 'Error Handling', icon: AlertCircle },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const CodeBlock = ({ code, language = 'bash', id }) => (
    <div className="code-block">
      <div className="code-header">
        <span className="language-tag">{language}</span>
        <button 
          className="copy-btn"
          onClick={() => copyToClipboard(code, id)}
        >
          {copied === id ? <Check size={16} /> : <Copy size={16} />}
          {copied === id ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  );

  const EndpointCard = ({ method, path, description, children }) => (
    <div className="endpoint-card">
      <div className="endpoint-header">
        <span className={`method-badge ${method.toLowerCase()}`}>{method}</span>
        <code className="endpoint-path">{path}</code>
      </div>
      <p className="endpoint-description">{description}</p>
      {children}
    </div>
  );

  const Table = ({ headers, rows }) => (
    <div className="table-wrapper">
      <table className="custom-table">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="docs-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Unbounded:wght@300;400;600;700;900&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #0066FF;
          --primary-dark: #0052CC;
          --primary-light: #3385FF;
          --secondary: #00D9FF;
          --accent: #FF3366;
          --bg-dark: #0A0E27;
          --bg-darker: #050812;
          --bg-card: #131929;
          --bg-hover: #1a2138;
          --text-primary: #FFFFFF;
          --text-secondary: #A0AEC0;
          --text-muted: #718096;
          --border: #2D3748;
          --success: #00FF88;
          --warning: #FFB800;
          --error: #FF3366;
          --code-bg: #1a1f3a;
        }

        body {
          font-family: 'Space Mono', monospace;
          background: var(--bg-darker);
          color: var(--text-primary);
          line-height: 1.7;
          overflow-x: hidden;
        }

        .docs-container {
          display: flex;
          min-height: 100vh;
          position: relative;
        }

        /* Animated Background */
        .docs-container::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(0, 102, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(0, 217, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255, 51, 102, 0.06) 0%, transparent 50%);
          z-index: 0;
          pointer-events: none;
          animation: bgShift 20s ease-in-out infinite;
        }

        @keyframes bgShift {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        /* Sidebar */
        .sidebar {
          position: fixed;
          left: 0;
          top: 0;
          width: 320px;
          height: 100vh;
          background: var(--bg-card);
          border-right: 1px solid var(--border);
          overflow-y: auto;
          z-index: 100;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(20px);
        }

        .sidebar.closed {
          transform: translateX(-100%);
        }

        .sidebar-header {
          padding: 2rem;
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          background: var(--bg-card);
          z-index: 10;
          backdrop-filter: blur(20px);
        }

        .logo {
          font-family: 'Unbounded', sans-serif;
          font-size: 2rem;
          font-weight: 900;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }

        .version-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: var(--primary);
          color: white;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .base-url {
          margin-top: 1rem;
          padding: 1rem;
          background: var(--code-bg);
          border-radius: 8px;
          border: 1px solid var(--border);
          font-size: 0.875rem;
          color: var(--secondary);
          word-break: break-all;
        }

        .search-box {
          padding: 0 2rem 1rem;
          position: sticky;
          top: 140px;
          background: var(--bg-card);
          z-index: 9;
          backdrop-filter: blur(20px);
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          background: var(--bg-dark);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text-primary);
          font-family: 'Space Mono', monospace;
          font-size: 0.875rem;
          transition: all 0.2s;
          position: relative;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
        }

        .search-icon {
          position: absolute;
          left: 2.75rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .nav-section {
          padding: 1rem 0;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 2rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.2s;
          border-left: 3px solid transparent;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .nav-item:hover {
          background: var(--bg-hover);
          color: var(--text-primary);
        }

        .nav-item.active {
          background: var(--bg-hover);
          color: var(--primary);
          border-left-color: var(--primary);
        }

        .nav-item svg {
          width: 18px;
          height: 18px;
        }

        /* Mobile Toggle */
        .mobile-toggle {
          position: fixed;
          top: 1rem;
          left: 1rem;
          z-index: 101;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 0.75rem;
          cursor: pointer;
          display: none;
          transition: all 0.2s;
        }

        .mobile-toggle:hover {
          background: var(--bg-hover);
          border-color: var(--primary);
        }

        @media (max-width: 768px) {
          .mobile-toggle {
            display: block;
          }

          .sidebar {
            width: 100%;
            max-width: 320px;
          }

          .main-content {
            margin-left: 0 !important;
            padding: 2rem 1rem !important;
          }
        }

        /* Main Content */
        .main-content {
          flex: 1;
          margin-left: 320px;
          padding: 4rem 6rem;
          max-width: 1400px;
          position: relative;
          z-index: 1;
        }

        .hero-section {
          margin-bottom: 4rem;
          padding: 3rem 0;
          border-bottom: 1px solid var(--border);
        }

        .hero-title {
          font-family: 'Unbounded', sans-serif;
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 8s ease-in-out infinite;
          background-size: 200% 200%;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-weight: 400;
        }

        .hero-badges {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .badge {
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: transform 0.2s;
        }

        .badge:hover {
          transform: translateY(-2px);
        }

        .badge.primary {
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          color: white;
        }

        .badge.secondary {
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-primary);
        }

        /* Section Styles */
        .section {
          margin-bottom: 6rem;
          scroll-margin-top: 2rem;
        }

        .section-title {
          font-family: 'Unbounded', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .section-title::before {
          content: '';
          width: 4px;
          height: 2.5rem;
          background: linear-gradient(180deg, var(--primary), var(--secondary));
          border-radius: 2px;
        }

        .section-subtitle {
          font-size: 1.75rem;
          font-weight: 600;
          margin: 3rem 0 1.5rem;
          color: var(--text-primary);
          font-family: 'Unbounded', sans-serif;
        }

        .section-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        /* Code Blocks */
        .code-block {
          background: var(--code-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          margin: 2rem 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .code-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          background: var(--bg-darker);
          border-bottom: 1px solid var(--border);
        }

        .language-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--secondary);
          letter-spacing: 0.05em;
        }

        .copy-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .copy-btn:hover {
          background: var(--bg-hover);
          border-color: var(--primary);
          color: var(--primary);
        }

        .code-block pre {
          padding: 1.5rem;
          overflow-x: auto;
          font-size: 0.875rem;
          line-height: 1.6;
        }

        .code-block code {
          color: var(--text-primary);
          font-family: 'Space Mono', monospace;
        }

        /* Endpoint Cards */
        .endpoint-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          margin: 2rem 0;
          transition: all 0.3s;
        }

        .endpoint-card:hover {
          border-color: var(--primary);
          box-shadow: 0 8px 30px rgba(0, 102, 255, 0.15);
          transform: translateY(-2px);
        }

        .endpoint-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .method-badge {
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 700;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .method-badge.get {
          background: rgba(0, 255, 136, 0.1);
          color: var(--success);
          border: 1px solid var(--success);
        }

        .method-badge.post {
          background: rgba(0, 102, 255, 0.1);
          color: var(--primary);
          border: 1px solid var(--primary);
        }

        .method-badge.put {
          background: rgba(255, 184, 0, 0.1);
          color: var(--warning);
          border: 1px solid var(--warning);
        }

        .method-badge.delete {
          background: rgba(255, 51, 102, 0.1);
          color: var(--error);
          border: 1px solid var(--error);
        }

        .endpoint-path {
          font-family: 'Space Mono', monospace;
          font-size: 1rem;
          color: var(--secondary);
          background: var(--code-bg);
          padding: 0.5rem 1rem;
          border-radius: 6px;
          flex: 1;
        }

        .endpoint-description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        /* Tables */
        .table-wrapper {
          overflow-x: auto;
          margin: 2rem 0;
          border-radius: 12px;
          border: 1px solid var(--border);
        }

        .custom-table {
          width: 100%;
          border-collapse: collapse;
          background: var(--bg-card);
        }

        .custom-table thead {
          background: var(--bg-darker);
        }

        .custom-table th {
          padding: 1rem 1.5rem;
          text-align: left;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
          color: var(--secondary);
          border-bottom: 1px solid var(--border);
        }

        .custom-table td {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--border);
          color: var(--text-secondary);
        }

        .custom-table tbody tr:hover {
          background: var(--bg-hover);
        }

        .custom-table code {
          background: var(--code-bg);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.875rem;
          color: var(--primary);
        }

        /* Feature Grid */
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .feature-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          transition: all 0.3s;
        }

        .feature-card:hover {
          border-color: var(--primary);
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 102, 255, 0.15);
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .feature-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        /* Lists */
        .custom-list {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
        }

        .custom-list li {
          padding: 0.75rem 0 0.75rem 2rem;
          position: relative;
          color: var(--text-secondary);
        }

        .custom-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: 700;
          font-size: 1.25rem;
        }

        /* Links */
        a {
          color: var(--primary);
          text-decoration: none;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }

        a:hover {
          color: var(--primary-light);
          text-decoration: underline;
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: var(--bg-darker);
        }

        ::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 6px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: var(--primary);
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section {
          animation: fadeInUp 0.6s ease-out;
        }

        /* Alert Boxes */
        .alert {
          padding: 1.5rem;
          border-radius: 12px;
          margin: 2rem 0;
          border-left: 4px solid;
          display: flex;
          gap: 1rem;
        }

        .alert.info {
          background: rgba(0, 102, 255, 0.1);
          border-color: var(--primary);
          color: var(--text-secondary);
        }

        .alert.warning {
          background: rgba(255, 184, 0, 0.1);
          border-color: var(--warning);
          color: var(--text-secondary);
        }

        .alert.success {
          background: rgba(0, 255, 136, 0.1);
          border-color: var(--success);
          color: var(--text-secondary);
        }
      `}</style>

      {/* Mobile Toggle */}
      <button className="mobile-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${!sidebarOpen ? 'closed' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">CERULEA</div>
          <span className="version-badge">v1.0</span>
          <div className="base-url">api.cerulea.app/v1</div>
        </div>

        <div className="search-box" style={{ position: 'relative' }}>
          <Search className="search-icon" size={18} />
          <input
            type="text"
            className="search-input"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <nav className="nav-section">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => {
                  scrollToSection(section.id);
                  if (window.innerWidth <= 768) setSidebarOpen(false);
                }}
              >
                <Icon />
                <span>{section.title}</span>
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="hero-title">API Documentation</h1>
          <p className="hero-subtitle">
            Build complete dApps and private blockchains with no code required
          </p>
          <div className="hero-badges">
            <span className="badge primary">
              <Zap size={16} />
              Production Ready
            </span>
            <span className="badge secondary">
              <Shield size={16} />
              Enterprise Grade
            </span>
            <span className="badge secondary">
              <Rocket size={16} />
              No Code Required
            </span>
          </div>
        </div>

        {/* Introduction */}
        <section id="introduction" className="section">
          <h2 className="section-title">Introduction</h2>
          <p className="section-description">
            Welcome to the Cerulea API documentation. Cerulea is a production-grade, no-code blockchain 
            infrastructure platform that enables developers and enterprises to build fully functional 
            decentralized applications (dApps) and private blockchain networks without writing a single 
            line of blockchain code.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Code color="white" size={24} />
              </div>
              <h3 className="feature-title">Complete dApps</h3>
              <p className="feature-description">
                Build full-stack dApps with smart contracts, tokens, and frontends
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Database color="white" size={24} />
              </div>
              <h3 className="feature-title">Private Blockchains</h3>
              <p className="feature-description">
                Deploy custom blockchain networks with configurable consensus
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Shield color="white" size={24} />
              </div>
              <h3 className="feature-title">Validator Management</h3>
              <p className="feature-description">
                Manage validators, governance, and network parameters
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Settings color="white" size={24} />
              </div>
              <h3 className="feature-title">Modular Architecture</h3>
              <p className="feature-description">
                Configure modules for DeFi, NFTs, DAOs, and more
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <BarChart3 color="white" size={24} />
              </div>
              <h3 className="feature-title">Real-time Monitoring</h3>
              <p className="feature-description">
                Monitor and analyze blockchain performance in real-time
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Rocket color="white" size={24} />
              </div>
              <h3 className="feature-title">CI/CD Integration</h3>
              <p className="feature-description">
                Automated deployments with GitHub integration
              </p>
            </div>
          </div>

          <h3 className="section-subtitle">API Architecture</h3>
          <p className="section-description">
            The Cerulea API follows a hybrid architecture combining RESTful endpoints for resource 
            management and JSON-RPC for blockchain interactions. This provides intuitive REST APIs 
            for infrastructure management and powerful RPC methods for blockchain operations.
          </p>
        </section>

        {/* Authentication */}
        <section id="authentication" className="section">
          <h2 className="section-title">Authentication & Authorization</h2>
          <p className="section-description">
            Cerulea uses a dual authentication system for maximum security and flexibility:
          </p>

          <h3 className="section-subtitle">API Key Authentication</h3>
          <p className="section-description">
            For server-to-server communication and automated workflows.
          </p>

          <EndpointCard 
            method="POST" 
            path="/auth/api-keys"
            description="Create a new API key with custom scopes and expiration"
          >
            <CodeBlock 
              id="api-key-create"
              language="bash"
              code={`curl -X POST https://api.cerulea.app/v1/auth/api-keys \\
  -H "Authorization: Bearer <your_oauth_token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Production API Key",
    "scopes": ["workspace:read", "workspace:write", "blockchain:deploy"],
    "expiresIn": "90d"
  }'`}
            />
          </EndpointCard>

          <div className="alert info">
            <AlertCircle size={24} />
            <div>
              <strong>Security Best Practice:</strong> Include the API key in the <code>X-API-Key</code> header 
              for all requests. Never expose API keys in client-side code.
            </div>
          </div>

          <CodeBlock 
            id="api-key-usage"
            language="bash"
            code={`curl -X GET https://api.cerulea.app/v1/workspaces \\
  -H "X-API-Key: crla_live_xxxxxxxxxxxxxxxxxxx"`}
          />

          <h3 className="section-subtitle">OAuth 2.0</h3>
          <p className="section-description">
            For user-facing applications and third-party integrations.
          </p>

          <CodeBlock 
            id="oauth-flow"
            language="bash"
            code={`# Step 1: Redirect user to authorization endpoint
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
  -d "client_secret=YOUR_CLIENT_SECRET"`}
          />

          <h3 className="section-subtitle">Available Scopes</h3>
          <Table 
            headers={['Scope', 'Description']}
            rows={[
              [<code>workspace:read</code>, 'Read workspace data'],
              [<code>workspace:write</code>, 'Create/modify workspaces'],
              [<code>blockchain:read</code>, 'Query blockchain data'],
              [<code>blockchain:write</code>, 'Deploy/manage blockchains'],
              [<code>blockchain:deploy</code>, 'Deploy smart contracts'],
              [<code>validator:read</code>, 'View validators'],
              [<code>validator:write</code>, 'Manage validators'],
              [<code>governance:read</code>, 'View proposals'],
              [<code>governance:write</code>, 'Create/vote on proposals'],
              [<code>admin</code>, 'Full administrative access'],
            ]}
          />
        </section>

        {/* REST API */}
        <section id="rest-api" className="section">
          <h2 className="section-title">Core REST API</h2>

          <h3 className="section-subtitle">Standard Response Format</h3>
          <CodeBlock 
            id="response-format"
            language="json"
            code={`{
  "success": true,
  "data": { /* resource data */ },
  "meta": {
    "requestId": "req_xxxxxxxx",
    "timestamp": "2025-02-25T10:30:00Z"
  }
}`}
          />

          <h3 className="section-subtitle">Pagination</h3>
          <EndpointCard 
            method="GET" 
            path="/resources?page=1&limit=50&sort=created_at:desc"
            description="List resources with pagination and sorting"
          >
            <CodeBlock 
              id="pagination-response"
              language="json"
              code={`{
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
}`}
            />
          </EndpointCard>

          <h3 className="section-subtitle">Health Check</h3>
          <EndpointCard 
            method="GET" 
            path="/health"
            description="Check API health and service status"
          >
            <CodeBlock 
              id="health-check"
              language="json"
              code={`{
  "status": "operational",
  "version": "1.0.0",
  "uptime": 99.99,
  "services": {
    "database": "healthy",
    "blockchain": "healthy",
    "storage": "healthy"
  }
}`}
            />
          </EndpointCard>
        </section>

        {/* RPC Methods */}
        <section id="rpc-methods" className="section">
          <h2 className="section-title">RPC Methods</h2>
          <p className="section-description">
            JSON-RPC 2.0 endpoint for direct blockchain interactions
          </p>

          <EndpointCard 
            method="POST" 
            path="/rpc"
            description="Execute JSON-RPC methods"
          >
            <CodeBlock 
              id="rpc-request"
              language="json"
              code={`{
  "jsonrpc": "2.0",
  "method": "blockchain.getBlock",
  "params": {
    "blockchainId": "bc_xxxxxxxx",
    "blockNumber": "latest"
  },
  "id": 1
}`}
            />
          </EndpointCard>

          <h3 className="section-subtitle">Available Methods</h3>
          <ul className="custom-list">
            <li><code>blockchain.getBlock</code> - Get block by number or hash</li>
            <li><code>blockchain.getTransaction</code> - Get transaction details</li>
            <li><code>blockchain.getBalance</code> - Get account balance</li>
            <li><code>transaction.send</code> - Send signed transaction</li>
            <li><code>transaction.simulate</code> - Simulate transaction execution</li>
            <li><code>contract.call</code> - Read-only contract call</li>
            <li><code>contract.execute</code> - Execute contract method</li>
          </ul>
        </section>

        {/* Webhooks */}
        <section id="webhooks" className="section">
          <h2 className="section-title">Webhooks</h2>
          <p className="section-description">
            Receive real-time notifications when events occur in your blockchain infrastructure
          </p>

          <EndpointCard 
            method="POST" 
            path="/webhooks"
            description="Create a new webhook"
          >
            <CodeBlock 
              id="webhook-create"
              language="json"
              code={`{
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
}`}
            />
          </EndpointCard>

          <h3 className="section-subtitle">Webhook Events</h3>
          <Table 
            headers={['Event Type', 'Description']}
            rows={[
              [<code>blockchain.block.created</code>, 'New block mined'],
              [<code>blockchain.transaction.confirmed</code>, 'Transaction confirmed'],
              [<code>contract.deployed</code>, 'Smart contract deployed'],
              [<code>contract.event.emitted</code>, 'Contract event emitted'],
              [<code>validator.status.changed</code>, 'Validator status changed'],
              [<code>governance.proposal.created</code>, 'New proposal created'],
            ]}
          />

          <h3 className="section-subtitle">Webhook Signature Verification</h3>
          <CodeBlock 
            id="webhook-verify"
            language="javascript"
            code={`const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(payload).digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(digest)
  );
}`}
          />
        </section>

        {/* Workspaces */}
        <section id="workspaces" className="section">
          <h2 className="section-title">Workspace & Project Management</h2>
          <p className="section-description">
            Organize your blockchain infrastructure into workspaces and projects
          </p>

          <EndpointCard 
            method="POST" 
            path="/workspaces"
            description="Create a new workspace"
          >
            <CodeBlock 
              id="workspace-create"
              language="json"
              code={`{
  "name": "Production Environment",
  "description": "Production blockchain infrastructure",
  "settings": {
    "defaultNetwork": "mainnet",
    "billingPlan": "enterprise"
  },
  "members": [
    {
      "email": "admin@company.com",
      "role": "admin"
    }
  ]
}`}
            />
          </EndpointCard>

          <EndpointCard 
            method="POST" 
            path="/workspaces/:workspaceId/projects"
            description="Create a new project within a workspace"
          >
            <CodeBlock 
              id="project-create"
              language="json"
              code={`{
  "name": "DeFi Exchange",
  "type": "dapp",
  "description": "Decentralized exchange platform",
  "template": "defi-dex",
  "config": {
    "blockchain": "ethereum",
    "network": "mainnet",
    "features": ["swap", "liquidity-pools", "staking"]
  }
}`}
            />
          </EndpointCard>
        </section>

        {/* dApp Builder */}
        <section id="dapp-builder" className="section">
          <h2 className="section-title">dApp Builder API</h2>
          <p className="section-description">
            Build complete decentralized applications with no code required
          </p>

          <EndpointCard 
            method="POST" 
            path="/dapps"
            description="Create a new dApp"
          >
            <CodeBlock 
              id="dapp-create"
              language="json"
              code={`{
  "name": "MyDeFi Platform",
  "workspaceId": "ws_xxxxxxxx",
  "template": "defi-platform",
  "components": [
    {
      "type": "token",
      "config": {
        "name": "Platform Token",
        "symbol": "PLAT",
        "totalSupply": "1000000000",
        "decimals": 18,
        "features": ["burnable", "mintable", "pausable"]
      }
    },
    {
      "type": "staking",
      "config": {
        "stakingToken": "PLAT",
        "rewardRate": "5",
        "lockPeriod": "30d"
      }
    },
    {
      "type": "governance",
      "config": {
        "votingToken": "PLAT",
        "proposalThreshold": "100000",
        "votingPeriod": "7d"
      }
    }
  ],
  "frontend": {
    "theme": "modern-dark",
    "customDomain": "mydefi.com"
  }
}`}
            />
          </EndpointCard>

          <h3 className="section-subtitle">Available Components</h3>
          <Table 
            headers={['Component', 'Description']}
            rows={[
              [<code>token</code>, 'Fungible or non-fungible tokens'],
              [<code>staking</code>, 'Token staking mechanism'],
              [<code>liquidity-pool</code>, 'DEX liquidity pools'],
              [<code>lending</code>, 'Lending/borrowing protocol'],
              [<code>governance</code>, 'DAO governance system'],
              [<code>nft-marketplace</code>, 'NFT marketplace'],
              [<code>auction</code>, 'Auction mechanism'],
              [<code>multisig</code>, 'Multi-signature wallet'],
            ]}
          />
        </section>

        {/* Private Blockchains */}
        <section id="blockchains" className="section">
          <h2 className="section-title">Private Blockchain Networks</h2>
          <p className="section-description">
            Deploy and manage custom private blockchain networks with full control
          </p>

          <EndpointCard 
            method="POST" 
            path="/blockchains"
            description="Create a new private blockchain"
          >
            <CodeBlock 
              id="blockchain-create"
              language="json"
              code={`{
  "name": "Enterprise Blockchain",
  "type": "private",
  "consensus": "proof-of-authority",
  "chainId": 12345,
  "config": {
    "blockTime": "5s",
    "blockGasLimit": "30000000",
    "nativeToken": {
      "name": "Enterprise Coin",
      "symbol": "ENT",
      "premine": "1000000000"
    }
  },
  "validators": [
    {
      "address": "0x1234...",
      "name": "Validator Node 1"
    }
  ],
  "features": ["smart-contracts", "permissions", "privacy"]
}`}
            />
          </EndpointCard>

          <h3 className="section-subtitle">Consensus Mechanisms</h3>
          <ul className="custom-list">
            <li><code>proof-of-authority (PoA)</code> - Permissioned validators</li>
            <li><code>proof-of-stake (PoS)</code> - Stake-based validation</li>
            <li><code>delegated-proof-of-stake (DPoS)</code> - Elected validators</li>
            <li><code>pbft</code> - Practical Byzantine Fault Tolerance</li>
            <li><code>raft</code> - Raft consensus for private networks</li>
          </ul>
        </section>

        {/* Smart Contracts */}
        <section id="contracts" className="section">
          <h2 className="section-title">Smart Contract Management</h2>

          <EndpointCard 
            method="POST" 
            path="/contracts/deploy"
            description="Deploy a smart contract from template"
          >
            <CodeBlock 
              id="contract-deploy"
              language="json"
              code={`{
  "blockchainId": "bc_abc123",
  "template": "erc20-token",
  "params": {
    "name": "My Token",
    "symbol": "MTK",
    "totalSupply": "1000000",
    "decimals": 18
  },
  "from": "0x1234...",
  "gasLimit": "2000000"
}`}
            />
          </EndpointCard>

          <h3 className="section-subtitle">Contract Templates</h3>
          <Table 
            headers={['Template', 'Description']}
            rows={[
              [<code>erc20-token</code>, 'Standard fungible token'],
              [<code>erc721-nft</code>, 'Non-fungible token'],
              [<code>erc1155-multi</code>, 'Multi-token standard'],
              [<code>governance-dao</code>, 'DAO with voting'],
              [<code>staking-pool</code>, 'Staking rewards'],
              [<code>marketplace</code>, 'NFT marketplace'],
            ]}
          />
        </section>

        {/* Validators */}
        <section id="validators" className="section">
          <h2 className="section-title">Validator Management</h2>

          <EndpointCard 
            method="POST" 
            path="/blockchains/:blockchainId/validators"
            description="Add a new validator to the network"
          >
            <CodeBlock 
              id="validator-add"
              language="json"
              code={`{
  "address": "0xabcdef123456...",
  "name": "Node-US-East-1",
  "stake": "100000",
  "commission": "5",
  "metadata": {
    "location": "US-East",
    "provider": "AWS"
  }
}`}
            />
          </EndpointCard>

          <h3 className="section-subtitle">Validator Operations</h3>
          <ul className="custom-list">
            <li><code>GET /validators/:id/status</code> - Get validator status</li>
            <li><code>PUT /validators/:id/stake</code> - Update stake amount</li>
            <li><code>POST /validators/:id/slash</code> - Slash validator (penalty)</li>
            <li><code>DELETE /validators/:id</code> - Remove validator</li>
          </ul>
        </section>

        {/* Governance */}
        <section id="governance" className="section">
          <h2 className="section-title">Governance Proposals</h2>

          <EndpointCard 
            method="POST" 
            path="/governance/proposals"
            description="Create a new governance proposal"
          >
            <CodeBlock 
              id="proposal-create"
              language="json"
              code={`{
  "blockchainId": "bc_abc123",
  "title": "Increase Block Size",
  "description": "Proposal to increase block size from 2MB to 4MB",
  "type": "parameter-change",
  "changes": {
    "blockSize": "4MB"
  },
  "votingPeriod": "7d",
  "quorum": "50",
  "threshold": "66.67"
}`}
            />
          </EndpointCard>

          <EndpointCard 
            method="POST" 
            path="/governance/proposals/:proposalId/vote"
            description="Vote on a proposal"
          >
            <CodeBlock 
              id="proposal-vote"
              language="json"
              code={`{
  "vote": "yes",
  "weight": "1000000",
  "reason": "This change will improve network throughput"
}`}
            />
          </EndpointCard>
        </section>

        {/* Modules */}
        <section id="modules" className="section">
          <h2 className="section-title">Module Configuration</h2>
          <p className="section-description">
            Enable and configure blockchain modules for specific functionality
          </p>

          <EndpointCard 
            method="POST" 
            path="/blockchains/:blockchainId/modules"
            description="Enable a module on your blockchain"
          >
            <CodeBlock 
              id="module-enable"
              language="json"
              code={`{
  "module": "defi",
  "config": {
    "features": ["dex", "lending", "staking"],
    "swapFee": "0.3",
    "liquidationThreshold": "75"
  }
}`}
            />
          </EndpointCard>

          <h3 className="section-subtitle">Available Modules</h3>
          <Table 
            headers={['Module', 'Features']}
            rows={[
              [<code>defi</code>, 'DeFi protocols (DEX, lending, staking)'],
              [<code>nft</code>, 'NFT minting and marketplace'],
              [<code>dao</code>, 'DAO governance and voting'],
              [<code>bridge</code>, 'Cross-chain bridge functionality'],
              [<code>oracle</code>, 'Price oracle integration'],
              [<code>identity</code>, 'Decentralized identity (DID)'],
              [<code>privacy</code>, 'Zero-knowledge proofs'],
              [<code>storage</code>, 'Decentralized storage (IPFS)'],
            ]}
          />
        </section>

        {/* Tokens */}
        <section id="tokens" className="section">
          <h2 className="section-title">Token Management</h2>

          <EndpointCard 
            method="POST" 
            path="/tokens"
            description="Create a new token"
          >
            <CodeBlock 
              id="token-create"
              language="json"
              code={`{
  "blockchainId": "bc_abc123",
  "standard": "ERC20",
  "name": "Platform Token",
  "symbol": "PLAT",
  "decimals": 18,
  "totalSupply": "1000000000",
  "features": {
    "mintable": true,
    "burnable": true,
    "pausable": true
  },
  "distribution": [
    {
      "address": "0x1234...",
      "amount": "500000000",
      "vesting": {
        "duration": "24m",
        "cliff": "6m"
      }
    }
  ]
}`}
            />
          </EndpointCard>

          <h3 className="section-subtitle">Token Standards</h3>
          <ul className="custom-list">
            <li><code>ERC20</code> - Fungible tokens</li>
            <li><code>ERC721</code> - Non-fungible tokens (NFTs)</li>
            <li><code>ERC1155</code> - Multi-token standard</li>
            <li><code>ERC4626</code> - Tokenized vaults</li>
          </ul>
        </section>

        {/* Monitoring */}
        <section id="monitoring" className="section">
          <h2 className="section-title">Monitoring & Analytics</h2>

          <EndpointCard 
            method="GET" 
            path="/blockchains/:blockchainId/metrics"
            description="Get real-time blockchain metrics"
          >
            <CodeBlock 
              id="metrics"
              language="json"
              code={`{
  "currentBlock": 123456,
  "blockTime": 5.2,
  "transactionsPerSecond": 150,
  "activeValidators": 21,
  "totalTransactions": 5000000,
  "networkHashrate": "500 TH/s",
  "averageGasPrice": "25 gwei"
}`}
            />
          </EndpointCard>

          <EndpointCard 
            method="GET" 
            path="/analytics/timeseries"
            description="Query historical data"
          >
            <p className="endpoint-description">
              Example: <code>?blockchainId=bc_abc123&metric=transactions&from=2025-02-01&to=2025-02-25&granularity=1h</code>
            </p>
          </EndpointCard>
        </section>

        {/* Error Handling */}
        <section id="errors" className="section">
          <h2 className="section-title">Error Handling</h2>

          <h3 className="section-subtitle">Error Response Format</h3>
          <CodeBlock 
            id="error-format"
            language="json"
            code={`{
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
}`}
          />

          <h3 className="section-subtitle">Common Error Codes</h3>
          <Table 
            headers={['HTTP Code', 'Error Code', 'Description']}
            rows={[
              ['400', <code>BAD_REQUEST</code>, 'Invalid request parameters'],
              ['401', <code>UNAUTHORIZED</code>, 'Invalid or missing authentication'],
              ['403', <code>FORBIDDEN</code>, 'Insufficient permissions'],
              ['404', <code>NOT_FOUND</code>, 'Resource not found'],
              ['422', <code>VALIDATION_ERROR</code>, 'Validation failed'],
              ['429', <code>RATE_LIMITED</code>, 'Rate limit exceeded'],
              ['500', <code>INTERNAL_ERROR</code>, 'Internal server error'],
            ]}
          />
        </section>

        {/* Support & Resources */}
        <section id="support" className="section">
          <h2 className="section-title">Support & Resources</h2>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Book color="white" size={24} />
              </div>
              <h3 className="feature-title">API Reference</h3>
              <p className="feature-description">
                <a href="https://api.cerulea.app" target="_blank">
                  api.cerulea.app <ExternalLink size={14} />
                </a>
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Book color="white" size={24} />
              </div>
              <h3 className="feature-title">Documentation</h3>
              <p className="feature-description">
                <a href="https://docs.cerulea.app" target="_blank">
                  docs.cerulea.app <ExternalLink size={14} />
                </a>
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Book color="white" size={24} />
              </div>
              <h3 className="feature-title">Whitepaper</h3>
              <p className="feature-description">
                <a href="https://whitepaper.cerulea.app" target="_blank">
                  whitepaper.cerulea.app <ExternalLink size={14} />
                </a>
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Code color="white" size={24} />
              </div>
              <h3 className="feature-title">Examples</h3>
              <p className="feature-description">
                <a href="https://github.com/cerulea/examples" target="_blank">
                  github.com/cerulea/examples <ExternalLink size={14} />
                </a>
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Shield color="white" size={24} />
              </div>
              <h3 className="feature-title">Support Email</h3>
              <p className="feature-description">
                support@cerulea.app
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <BarChart3 color="white" size={24} />
              </div>
              <h3 className="feature-title">Status Page</h3>
              <p className="feature-description">
                <a href="https://status.cerulea.app" target="_blank">
                  status.cerulea.app <ExternalLink size={14} />
                </a>
              </p>
            </div>
          </div>

          <div className="alert success" style={{ marginTop: '3rem' }}>
            <AlertCircle size={24} />
            <div>
              <strong>Ready to start building?</strong> Check out our examples repository and start 
              creating your blockchain infrastructure today.
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ 
          marginTop: '6rem', 
          paddingTop: '3rem', 
          borderTop: `1px solid var(--border)`,
          textAlign: 'center',
          color: 'var(--text-muted)',
          paddingBottom: '3rem'
        }}>
          <p>© 2025 Cerulea. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
            Version 1.0.0 • Last updated February 2025
          </p>
        </footer>
      </main>
    </div>
  );
};

export default CeruleaAPIDocs;