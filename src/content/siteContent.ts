// Define your environments so links work locally and in production
const IS_DEV = process.env.NODE_ENV === 'development';
// Add an override flag for local production testing
const IS_LOCAL_TEST = process.env.NEXT_PUBLIC_TEST_LOCAL === 'true';

const USE_LOCAL = IS_DEV || IS_LOCAL_TEST;
const BASE_DOMAIN = USE_LOCAL ? 'localhost:3000' : 'cerulea.io';
const PROTOCOL = USE_LOCAL ? 'http://' : 'https://';

export const getSubdomainUrl = (subdomain: string) => `${PROTOCOL}${subdomain}.${BASE_DOMAIN}`;
export const getMainUrl = (path: string) => `${PROTOCOL}${BASE_DOMAIN}${path}`;

export const brand = {
  name: 'Cerulea',
  eyebrow: 'Cerulea',
  homeUrl: getMainUrl('/'),
  heroTitle: 'Build and run blockchain-backed applications and private chains without the infrastructure overhead.',
  heroSubtitle:
    'Cerulea is an AI-enabled, modular Layer-1 blockchain infrastructure platform that enables developers, enterprises, and governments to build, deploy, and manage customizable public and private blockchain-powered applications.',
  primaryCTA: { label: 'Talk to us', href: getMainUrl('/company/contact') },
  secondaryCTA: { label: 'Explore capabilities', href: getMainUrl('/product') },
};

export type MegaItem = {
  label: string;
  description: string;
  href: string;
  tag?: string;
};

export type MegaSection = {
  title: string;
  items: MegaItem[];
};

export type MegaMenu = {
  label: string;
  sections: MegaSection[];
  featured?: {
    title: string;
    subtitle: string;
    ctas: { label: string; href: string; variant: 'contained' | 'outlined' }[];
  };
};

export const headerNav: Array<
  | { type: 'link'; label: string; href: string }
  | { type: 'mega'; menu: MegaMenu }
> = [
  {
    type: 'mega',
    menu: {
      label: 'Product',
      sections: [
        {
          title: 'Core Platform',
          items: [
            {
              label: 'Cerulea Studio',
              description: 'The visual architecture environment to design data models, governance, and blockchain mechanics. Translating business intent directly into deployable network state.',
              href: getMainUrl('/product/studio'),
              tag: 'No-code',
            },
            {
              label: 'Cerulea AI',
              description: 'Context-aware intelligence embedded within Studio to validate architectural decisions, enforce security policies, and ensure structural integrity prior to deployment.',
              href: getMainUrl('/product/ai'),
              tag: 'AI-Enabled',
            },
            {
              label: 'Cerulea Dashboard',
              description: 'The unified control plane to monitor network telemetry, manage cryptographic keys, execute live governance actions, monitor node health, and oversee live app and chain deployments.',
              href: getMainUrl('/product/dashboard'),
            },
          ],
        },
        {
          title: 'Infrastructure & Execution',
          items: [
            {
              label: 'Cerulea Public L1',
              description: 'Our high-throughput public Layer-1 blockchain. Deploy dApps here to leverage immutable, shared state and native decentralized security.',
              href: getMainUrl('/product/public-l1'),
              tag: 'Public',
            },
            {
              label: 'Cerulea Private Chains',
              description: 'Dedicated, permissioned networks designed for enterprise. Maintain total control over node hosting, governance, and participant access.',
              href: getMainUrl('/product/private-chains'),
              tag: 'Enterprise',
            },
            {
              label: 'Cerulea Deployment Engine',
              description: 'The core execution layer that seamlessly provisions your Studio configurations into live, production-ready networks.',
              href: getMainUrl('/product/deployment-engine'),
            },
          ],
        },
        {
          title: 'Capabilities & Access',
          items: [
            {
              label: 'Granular Governance',
              description: 'Define and enforce strict on-chain roles, access controls, and multi-party policy boundaries.',
              href: getMainUrl('/product/governance'),
            },
            {
              label: 'Verifiable Data Models',
              description: 'Map your complex business logic into structured, tamper-evident entities and relationships.',
              href: getMainUrl('/product/data-models'),
            },
            {
              label: 'Cerulea API',
              description: 'Programmatic interfaces to connect your deployed networks and decentralized apps directly into existing enterprise systems and frontends.',
              href: getMainUrl('/product/api'),
              tag: 'Integration',
            },
          ],
        },
      ]
    },
  },
  {
    type: 'mega',
    menu: {
      label: 'Solutions',
      sections: [
        {
          title: 'BY INDUSTRY',
          items: [
            { label: 'Financial Services', href: getMainUrl('/solutions/industries/financial-services'), description: 'Institutional DeFi and interbank clearing.' },
            { label: 'Supply Chain & Logistics', href: getMainUrl('/solutions/industries/supply-chain'), description: 'Tamper-proof transit and customs tracking.' },
            { label: 'Government & Public Sector', href: getMainUrl('/solutions/industries/government'), description: 'Sovereign citizen identity and registries.' },
            { label: 'Healthcare & Life Sciences', href: getMainUrl('/solutions/industries/healthcare'), description: 'HIPAA compliant patient record networks.' },
            { label: 'Energy & Utilities', href: getMainUrl('/solutions/industries/energy'), description: 'Carbon offset tracking and grid telemetry.' },
          ],
        },
        {
          title: 'BY USE CASE',
          items: [
            { label: 'Tokenized Assets (RWA)', href: getMainUrl('/solutions/use-cases/tokenized-assets'), description: 'Digitize physical assets and real estate.' },
            { label: 'Decentralized Identity', href: getMainUrl('/solutions/use-cases/decentralized-identity'), description: 'Zero-trust Web2 to Web3 authentication.' },
            { label: 'Cross-Border Settlements', href: getMainUrl('/solutions/use-cases/cross-border-settlements'), description: 'Bypass SWIFT for instant global payments.' },
            { label: 'Compliance & Audit', href: getMainUrl('/solutions/use-cases/compliance-audit'), description: 'Automated SOC2 and GDPR pruning.' },
            { label: 'IoT & DePIN', href: getMainUrl('/solutions/use-cases/iot-depin'), description: 'Secure machine-to-machine data layers.' },
          ],
        },
      ],
    },
  },
  {
    type: 'mega',
    menu: {
      label: 'Developers',
      sections: [
        {
          title: 'RESOURCES',
          items: [
            {
              label: 'Cerulea Docs',
              description: 'Structured documentation mapping the Cerulea build, deploy, and operate workflow.',
              href: getMainUrl('/developers/docs'),
            },
            {
              label: 'API Reference',
              description: 'REST and RPC endpoints for system integration and enterprise automation.',
              href: getMainUrl('/developers/api'),
              tag: 'API',
            },
            {
              label: 'Whitepaper',
              description: 'Architectural, cryptographic, and economic design rationale for the network.',
              href: getMainUrl('/developers/whitepaper'),
            },
          ],
        },
      ],
    },
  },
  { type: 'link', label: 'Blog', href: getMainUrl('/blog') },
  { type: 'link', label: 'Pricing', href: getMainUrl('/pricing') },
  {
    type: 'mega',
    menu: {
      label: 'Company',
      sections: [
        {
          title: 'Company',
          items: [
            {
              label: 'About',
              description: 'Who we are and what Cerulea is built to enable.',
              href: getMainUrl('/company/about'),
            },
            {
              label: 'Contact',
              description: 'Reach out for evaluation, pilots, or private chain deployments.',
              href: getMainUrl('/company/contact'),
            },
            {
              label: 'Legal',
              description: 'Privacy policy and terms.',
              href: getMainUrl('/legal'),
            },
          ],
        },
      ],
    },
  },
];


export const solutions = [
  {
    slug: 'tokenized-assets',
    href: getMainUrl('/solutions/use-cases/tokenized-assets'),
    title: 'Tokenized Assets & Registries',
    subtitle:
      'Systems for issuing, tracking, and managing registries and tokenized representations where integrity and shared verification matter.',
    whoItsFor: [
      'Asset issuers and registry operators',
      'Organizations needing shared verifiable state across stakeholders',
      'Teams modernizing registries with controlled governance',
    ],
    outcomes: [
      'Verifiable record of issuance and state changes',
      'Clear governance boundaries over who can modify what',
      'Operational visibility for deployed environments',
    ],
    painPoints: [
      'Disputes due to inconsistent sources of truth',
      'Manual reconciliation across stakeholders',
      'Unclear governance and operational ownership',
    ],
    howCeruleaHelps: [
      {
        title: 'Public or private deployment depending on participation',
        desc:
          'Use public deployments for broad verifiability, or private chains when participants must be controlled and owner-hosted.',
      },
      {
        title: 'No-code definition that becomes deployable configuration',
        desc:
          'Define the data model, permissions, and governance boundaries in Studio as deployable configuration rather than custom infra code.',
      },
      {
        title: 'Operate the system via Dashboard and automate via APIs',
        desc:
          'Run deployments from Cerulea Dashboard and integrate into existing systems via Cerulea API documentation.',
      },
    ],
    cta: { label: 'Talk to us', href: getMainUrl('/company/contact') },
  },
  {
    slug: 'supply-chain',
    href: getMainUrl('/solutions/industries/supply-chain'),
    title: 'Supply Chain & Traceability',
    subtitle:
      'Shared records across vendors and stakeholders to reduce disputes, improve provenance, and automate verification steps.',
    whoItsFor: ['Supply chain operators', 'Multi-party workflows', 'Compliance and traceability programs'],
    outcomes: ['Tamper-evident trace history', 'Reduced disputes', 'Automated verification milestones'],
    painPoints: ['Fragmented data across entities', 'Manual checks', 'Dispute resolution is slow'],
    howCeruleaHelps: [
      { title: 'Shared state across participants', desc: 'Deploy systems where participants can verify state without trusting one owner.' },
      { title: 'Controlled participation when needed', desc: 'Use private chains for controlled participant sets and governance boundaries.' },
      { title: 'Operations surface', desc: 'Operate deployments via Dashboard and integrate flows via documented APIs.' },
    ],
    cta: { label: 'Talk to us', href: getMainUrl('/company/contact') },
  },
  {
    slug: 'identity',
    href: getMainUrl('/solutions/use-cases/decentralized-identity'),
    title: 'Identity, Credentials & Access',
    subtitle:
      'Authorization and credential systems where governance boundaries and controlled participation are as important as the data itself.',
    whoItsFor: ['Organizations issuing credentials', 'Access control systems', 'Inter-org permission workflows'],
    outcomes: ['Clear governance policies', 'Verifiable issuance', 'Controlled participants where needed'],
    painPoints: ['Policy drift', 'Inconsistent identity sources', 'Hard to audit authorization changes'],
    howCeruleaHelps: [
      { title: 'Governance-friendly modeling', desc: 'Model roles, permissions, and governance intent in Studio.' },
      { title: 'Private chain option', desc: 'Deploy owner-hosted private chains when participation must be controlled.' },
      { title: 'Operational visibility', desc: 'Operate and audit deployments through Dashboard with API integration.' },
    ],
    cta: { label: 'Talk to us', href: getMainUrl('/company/contact') },
  },
  {
    slug: 'audit-integrity',
    href: getMainUrl('/solutions/use-cases/compliance-audit'),
    title: 'Audit Trails & Data Integrity',
    subtitle:
      'Tamper-evident records for compliance-heavy workflows where provenance, integrity, and dispute resistance matter.',
    whoItsFor: ['Compliance-heavy workflows', 'Internal audit programs', 'Regulated operations'],
    outcomes: ['Tamper-evident history', 'Clear ownership boundaries', 'Reduced disputes'],
    painPoints: ['Manual audit trail assembly', 'Conflicting logs', 'Hard to prove integrity'],
    howCeruleaHelps: [
      { title: 'Deployable integrity primitives', desc: 'Use public or private deployments depending on who must verify.' },
      { title: 'Operational surface', desc: 'Dashboard provides a stable operational surface for long-running systems.' },
      { title: 'Integration via APIs', desc: 'Integrate audit flows and reporting pipelines using documented APIs.' },
    ],
    cta: { label: 'Talk to us', href: getMainUrl('/company/contact') },
  },
  {
    slug: 'inter-org',
    href: getMainUrl('/solutions/use-cases/cross-border-settlements'),
    title: 'Inter-Organization Coordination Systems',
    subtitle:
      'Shared systems for partners and stakeholders when no single party should own the full truth or control state changes unilaterally.',
    whoItsFor: ['Partner ecosystems', 'Vendor coordination', 'Cross-department workflows'],
    outcomes: ['Shared verifiable state', 'Reduced reconciliation', 'Clear governance boundaries'],
    painPoints: ['Trust bottlenecks', 'Constant reconciliation', 'No shared ground truth'],
    howCeruleaHelps: [
      { title: 'Choose public/private/hybrid model', desc: 'Select deployment model based on participation and governance boundaries.' },
      { title: 'No-code definition', desc: 'Define data, roles, and deployment intent in Studio.' },
      { title: 'Operate and integrate', desc: 'Operate via Dashboard and integrate via API documentation.' },
    ],
    cta: { label: 'Talk to us', href: getMainUrl('/company/contact') },
  },
  {
    slug: 'government-systems',
    href: getMainUrl('/solutions/industries/government'),
    title: 'Government & Public Systems',
    subtitle:
      'Sovereign private chains for controlled participation and governance between authorized entities, designed for long-running public infrastructure.',
    whoItsFor: ['Government departments', 'Inter-agency workflows', 'Public registries and authorized networks'],
    outcomes: ['Sovereign operational ownership', 'Controlled participants', 'Clear governance boundaries'],
    painPoints: ['Disputes due to fragmented systems', 'Trust bottlenecks', 'Inconsistent operational ownership'],
    howCeruleaHelps: [
      { title: 'Owner-hosted private chains', desc: 'Private chain deployments are hosted by the private chain owner.' },
      { title: 'Operational surface', desc: 'Dashboard provides visibility and governance actions.' },
      { title: 'Integration via APIs', desc: 'Integrate existing systems with documented APIs.' },
    ],
    cta: { label: 'Talk to us', href: getMainUrl('/company/contact') },
  },
];

export const pricing = {
  currencyToggle: ['INR', 'USD'] as const,
  plans: [
    {
      name: 'Developer',
      audience: 'Individuals and small teams starting production pilots',
      description:
        'Self-serve entry designed for teams that want to start using Cerulea quickly and scale usage as deployment needs grow.',
      included: [
        'Access to Cerulea Studio',
        'Public app deployments onto Cerulea (public Layer-1)',
        'Cerulea Dashboard for visibility and operations',
        'API Documentation for integration and automation',
      ],
      billing: {
        INR: {
          note: 'Usage-based pricing depends on environments, traffic, and operational requirements.',
          range: 'Typical early-stage usage: ₹25,000 to ₹1,50,000 per month.',
        },
        USD: {
          note: 'Usage-based pricing depends on environments, traffic, and operational requirements.',
          range: 'Typical early-stage usage: $300 to $1,800 per month.',
        },
      },
      cta: { label: 'Talk to us', href: getMainUrl('/company/contact') },
    },
    {
      name: 'Enterprise',
      audience: 'Organizations deploying private chains and long-running systems',
      description:
        'Enterprise deployments for private chains where the private chain owner hosts the chain and requires governance boundaries, operational control, and integrations.',
      included: [
        'Private chain deployment support (owner-hosted)',
        'Cerulea Dashboard for operations and governance workflows',
        'API Documentation for enterprise integrations',
        'Architecture review and onboarding support',
      ],
      billing: {
        INR: {
          note:
            'Pricing depends on number of private chains, expected participants, operational requirements, and integration needs.',
          range: 'Typical deployments: ₹8,00,000 to ₹35,00,000 per year.',
        },
        USD: {
          note:
            'Pricing depends on number of private chains, expected participants, operational requirements, and integration needs.',
          range: 'Typical deployments: $10,000 to $45,000 per year.',
        },
      },
      cta: { label: 'Talk to us', href: getMainUrl('/company/contact') },
    },
  ],
};