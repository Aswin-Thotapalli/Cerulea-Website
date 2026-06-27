import { MetadataRoute } from 'next';

const BASE = 'https://cerulea.io';

const url = (path: string, priority: number, freq: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly') => ({
  url: `${BASE}${path}`,
  lastModified: new Date(),
  changeFrequency: freq,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core
    url('/', 1.0, 'weekly'),
    url('/pricing', 0.9, 'weekly'),
    url('/pricing/addons', 0.7),

    // Product
    url('/product', 0.9, 'weekly'),
    url('/product/studio', 0.8),
    url('/product/ai', 0.8),
    url('/product/modules', 0.8),
    url('/product/dashboard', 0.7),
    url('/product/data-models', 0.7),
    url('/product/deployment-engine', 0.7),
    url('/product/governance', 0.7),
    url('/product/private-chains', 0.7),
    url('/product/public-l1', 0.7),
    url('/product/api', 0.7),

    // Solutions
    url('/solutions', 0.9, 'weekly'),
    url('/solutions/industries', 0.8, 'weekly'),

    // Industries
    url('/solutions/industries/agriculture', 0.7),
    url('/solutions/industries/art', 0.7),
    url('/solutions/industries/aviation', 0.7),
    url('/solutions/industries/cybersecurity', 0.7),
    url('/solutions/industries/education', 0.7),
    url('/solutions/industries/energy', 0.7),
    url('/solutions/industries/enterprise-it', 0.7),
    url('/solutions/industries/financial-services', 0.7),
    url('/solutions/industries/gaming', 0.7),
    url('/solutions/industries/government', 0.7),
    url('/solutions/industries/healthcare', 0.7),
    url('/solutions/industries/hr', 0.7),
    url('/solutions/industries/insurance', 0.7),
    url('/solutions/industries/legal', 0.7),
    url('/solutions/industries/manufacturing', 0.7),
    url('/solutions/industries/media', 0.7),
    url('/solutions/industries/mining', 0.7),
    url('/solutions/industries/philanthropy', 0.7),
    url('/solutions/industries/real-estate', 0.7),
    url('/solutions/industries/retail', 0.7),
    url('/solutions/industries/sports', 0.7),
    url('/solutions/industries/supply-chain', 0.7),
    url('/solutions/industries/telecom', 0.7),
    url('/solutions/industries/travel', 0.7),

    // Use Cases
    url('/solutions/use-cases', 0.8),
    url('/solutions/use-cases/carbon-credit-trading', 0.6),
    url('/solutions/use-cases/cbdcs-stablecoins', 0.6),
    url('/solutions/use-cases/compliance-audit', 0.6),
    url('/solutions/use-cases/cross-border-settlements', 0.6),
    url('/solutions/use-cases/cryptographic-voting', 0.6),
    url('/solutions/use-cases/daos-governance', 0.6),
    url('/solutions/use-cases/decentralized-ai', 0.6),
    url('/solutions/use-cases/decentralized-identity', 0.6),
    url('/solutions/use-cases/decentralized-storage', 0.6),
    url('/solutions/use-cases/desci-research', 0.6),
    url('/solutions/use-cases/fractional-ownership', 0.6),
    url('/solutions/use-cases/healthcare-data', 0.6),
    url('/solutions/use-cases/interoperability-oracles', 0.6),
    url('/solutions/use-cases/iot-depin', 0.6),
    url('/solutions/use-cases/ip-royalties', 0.6),
    url('/solutions/use-cases/loyalty-rewards', 0.6),
    url('/solutions/use-cases/microtransactions', 0.6),
    url('/solutions/use-cases/parametric-insurance', 0.6),
    url('/solutions/use-cases/smart-legal-escrow', 0.6),
    url('/solutions/use-cases/supply-chain-traceability', 0.6),
    url('/solutions/use-cases/tokenized-assets', 0.6),
    url('/solutions/use-cases/treasury-yield', 0.6),
    url('/solutions/use-cases/workflow-automation', 0.6),
    url('/solutions/use-cases/zero-trust-access', 0.6),

    // Developers
    url('/developers', 0.8),
    url('/developers/api', 0.7),
    url('/developers/docs', 0.7),
    url('/developers/whitepaper', 0.6),

    // Showcase
    url('/showcase/agrotrace', 0.7, 'weekly'),

    // Blog
    url('/blog', 0.7, 'daily'),

    // Company
    url('/company', 0.7),
    url('/company/about', 0.7),
    url('/company/careers', 0.6),
    url('/company/contact', 0.6),
    url('/company/contact-sales', 0.6),

    // Legal
    url('/legal', 0.3),
    url('/legal/privacy', 0.3),
    url('/legal/terms', 0.3),
  ];
}
