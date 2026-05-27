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
      capture_pageview: false,
      capture_pageleave: true,
      autocapture: true,
      session_recording: { maskInputOptions: { password: true } },
      person_profiles: 'always',
      persistence: 'localStorage',
    });

    // Track external link clicks
    const onLinkClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a');
      if (!a) return;
      const href = a.getAttribute('href') ?? '';
      if (href.startsWith('http') && !href.includes('cerulea')) {
        posthog.capture('external_link_clicked', {
          href,
          text: a.textContent?.trim().slice(0, 100),
          page: window.location.pathname,
        });
      }
    };

    // Track unhandled JS errors
    const onError = (e: ErrorEvent) => {
      posthog.capture('js_error', {
        message: e.message,
        filename: e.filename,
        line: e.lineno,
        page: window.location.pathname,
      });
    };
    const onRejection = (e: PromiseRejectionEvent) => {
      posthog.capture('js_error', {
        message: String(e.reason),
        type: 'unhandled_promise',
        page: window.location.pathname,
      });
    };

    document.addEventListener('click', onLinkClick);
    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onRejection);

    return () => {
      document.removeEventListener('click', onLinkClick);
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onRejection);
    };
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
