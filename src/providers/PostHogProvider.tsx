'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react';
import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Tracks page views on every client-side navigation
function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const client = usePostHog();

  useEffect(() => {
    if (pathname && client) {
      let url = window.location.origin + pathname;
      if (searchParams.toString()) url += `?${searchParams.toString()}`;
      client.capture('$pageview', { $current_url: url });
    }
  }, [pathname, searchParams, client]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;

    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      ui_host: 'https://us.posthog.com',

      // Page views — handled manually below so App Router navigations are tracked
      capture_pageview: false,
      capture_pageleave: true,

      // Autocapture: every click, link, button, and form interaction
      autocapture: true,

      // Session recordings — watch real user sessions
      session_recording: {
        maskInputOptions: { password: true }, // never record passwords
      },

      // Always create person profiles so geo/device data is attached
      person_profiles: 'always',

      persistence: 'localStorage',
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      {/* useSearchParams requires Suspense in App Router */}
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  );
}
