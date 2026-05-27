import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // Orphaned stub pages → canonical product pages
      { source: '/apis',      destination: '/product/api',            permanent: true },
      { source: '/dashboard', destination: '/product/dashboard',      permanent: true },
      { source: '/studio',    destination: '/product/studio',         permanent: true },
      { source: '/private',   destination: '/product/private-chains', permanent: true },
    ];
  },
};

export default nextConfig;
