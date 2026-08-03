import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  async redirects() {
    return [
      // Developer section index routes -> first page in each
      { source: "/developers", destination: "/developers/docs/foundation", permanent: true },
      { source: "/developers/docs", destination: "/developers/docs/foundation", permanent: true },
      { source: "/developers/api", destination: "/developers/api/introduction", permanent: true },
      { source: "/developers/whitepaper", destination: "/developers/whitepaper/abstract", permanent: true },
      // Legacy legal URLs -> merged legal page
      { source: "/legal", destination: "/company/legal", permanent: true },
      { source: "/legal/privacy", destination: "/company/legal?tab=privacy", permanent: true },
      { source: "/legal/terms", destination: "/company/legal?tab=terms", permanent: true },
      // Solutions index sub-paths -> solutions landing
      { source: "/solutions", destination: "/industries", permanent: true },
      { source: "/solutions/industry/:slug", destination: "/industries/:slug", permanent: true },
      { source: "/solutions/industries", destination: "/industries", permanent: true },
      { source: "/solutions/use-cases", destination: "/industries", permanent: true },
      // Legacy short paths
      { source: "/about", destination: "/company/about", permanent: true },
      { source: "/contact", destination: "/company/contact", permanent: true },
      { source: "/docs", destination: "/developers/docs/foundation", permanent: true },
    ]
  },
}

export default nextConfig