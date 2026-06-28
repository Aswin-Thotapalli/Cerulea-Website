'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '@/lib/track';

export default function ProductPageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const segment = pathname.split('/').filter(Boolean).pop() ?? 'overview';
    const featureMap: Record<string, string> = {
      studio: 'Cerulea Studio',
      ai: 'AI Engine',
      dashboard: 'Dashboard',
      'data-models': 'Data Models',
      'deployment-engine': 'Deployment Engine',
      governance: 'Governance',
      modules: 'Modules',
      'private-chains': 'Private Chains',
      'public-l1': 'Public L1',
      api: 'API',
      product: 'Overview',
    };
    const feature = featureMap[segment] ?? segment;
    track.productFeatureViewed(feature, pathname);
  }, [pathname]);

  return null;
}
