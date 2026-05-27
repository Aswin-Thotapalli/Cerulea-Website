'use client';

import { useEffect, useRef } from 'react';
import { usePostHog } from 'posthog-js/react';
import { usePathname } from 'next/navigation';

/**
 * Fires scroll_depth_reached events at 25 / 50 / 75 / 90 / 100% milestones.
 * Resets on every page navigation. Mount once in the root layout.
 */
export default function ScrollDepthTracker() {
  const posthog = usePostHog();
  const pathname = usePathname();
  const reported = useRef(new Set<number>());
  const maxPct = useRef(0);

  // Reset milestones on navigation
  useEffect(() => {
    reported.current.clear();
    maxPct.current = 0;
  }, [pathname]);

  useEffect(() => {
    const MILESTONES = [25, 50, 75, 90, 100];

    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;

      const pct = Math.min(100, Math.round((scrolled / total) * 100));
      if (pct <= maxPct.current) return;
      maxPct.current = pct;

      MILESTONES.forEach(milestone => {
        if (pct >= milestone && !reported.current.has(milestone)) {
          reported.current.add(milestone);
          posthog?.capture('scroll_depth_reached', {
            depth_percent: milestone,
            page: pathname,
          });
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [posthog, pathname]);

  return null;
}
