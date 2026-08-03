import { MetadataRoute } from "next"
import { products } from "@/const/product-details"
import { industries } from "@/const/industry-data"
import { solutions } from "@/const/soutations"

const BASE = "https://cerulea.io"

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"]

const url = (path: string, priority: number, changeFrequency: Freq = "monthly") => ({
  url: `${BASE}${path}`,
  lastModified: new Date(),
  changeFrequency,
  priority,
})

// Static routes (everything that is not a [slug] page)
const staticRoutes: MetadataRoute.Sitemap = [
  url("/", 1.0, "weekly"),
  url("/pricing", 0.9, "weekly"),
  url("/pricing/addons", 0.7),

  url("/product", 0.9, "weekly"),
  url("/industries", 0.9, "weekly"),

  url("/showcase/agrotrace", 0.7),

  // Company
  url("/company/about", 0.6),
  url("/company/contact", 0.6),
  url("/company/contact-sales", 0.6),
  url("/company/legal", 0.4),

  // Blog index
  url("/blog", 0.8, "weekly"),

  // Developer docs
  url("/developers/docs/foundation", 0.6),
  url("/developers/docs/architecture", 0.6),
  url("/developers/docs/cerulea-studio", 0.6),
  url("/developers/docs/intelligence", 0.6),
  url("/developers/docs/infrastructure", 0.6),
  url("/developers/docs/governance", 0.6),
  url("/developers/docs/security", 0.6),
  url("/developers/docs/enterprise", 0.6),
  url("/developers/docs/integrations", 0.6),
  url("/developers/docs/apis", 0.6),
  url("/developers/docs/build-lifecycle", 0.6),
  url("/developers/docs/decision-frameworks", 0.6),
  url("/developers/docs/glossary", 0.5),

  // API reference
  url("/developers/api/introduction", 0.6),
  url("/developers/api/authentication", 0.6),
  url("/developers/api/rest", 0.6),
  url("/developers/api/rpc-methods", 0.6),
  url("/developers/api/webhooks", 0.6),
  url("/developers/api/workspaces", 0.6),
  url("/developers/api/dapp-builder", 0.6),
  url("/developers/api/modules", 0.6),
  url("/developers/api/smart-contracts", 0.6),
  url("/developers/api/tokens", 0.6),
  url("/developers/api/validators", 0.6),
  url("/developers/api/governance", 0.6),
  url("/developers/api/monitoring", 0.6),
  url("/developers/api/private-blockchains", 0.6),
  url("/developers/api/error-handling", 0.5),

  // Whitepaper
  url("/developers/whitepaper/abstract", 0.6),
  url("/developers/whitepaper/problem", 0.6),
  url("/developers/whitepaper/philosophy", 0.6),
  url("/developers/whitepaper/solution", 0.6),
  url("/developers/whitepaper/architecture", 0.6),
  url("/developers/whitepaper/dual-chain", 0.6),
  url("/developers/whitepaper/dcf", 0.6),
  url("/developers/whitepaper/studio", 0.6),
  url("/developers/whitepaper/intelligence", 0.6),
  url("/developers/whitepaper/governance", 0.6),
  url("/developers/whitepaper/security", 0.6),
  url("/developers/whitepaper/enterprise", 0.6),
  url("/developers/whitepaper/integrations", 0.6),
  url("/developers/whitepaper/decision", 0.6),
  url("/developers/whitepaper/competitive", 0.6),
  url("/developers/whitepaper/for-whom", 0.6),
  url("/developers/whitepaper/summary", 0.6),
]

export default function sitemap(): MetadataRoute.Sitemap {
  const productRoutes = products.map((p) => url(`/product/${p.slug}`, 0.8))
  const industryRoutes = industries.map((i) => url(`/industries/${i.slug}`, 0.7))
  const useCaseRoutes = solutions.map((s) => url(`/solutions/use-case/${s.slug}`, 0.7))

  return [...staticRoutes, ...productRoutes, ...industryRoutes, ...useCaseRoutes]
}
