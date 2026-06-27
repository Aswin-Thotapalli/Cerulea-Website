'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react';
import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

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

    // ── Session context: capture UTMs + device info at session start ──────────
    const params = new URLSearchParams(window.location.search);
    const utmProps: Record<string, string> = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(k => {
      const v = params.get(k);
      if (v) utmProps[k] = v;
    });

    // Network & device context
    const nav = navigator as Navigator & { connection?: { effectiveType?: string; downlink?: number } };
    const networkType = nav.connection?.effectiveType;

    posthog.capture('session_started', {
      ...utmProps,
      network_type: networkType ?? null,
      screen: `${screen.width}×${screen.height}`,
      pixel_ratio: window.devicePixelRatio,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
      page: window.location.pathname,
      referrer: document.referrer || '(direct)',
    });

    // ── IP-to-company enrichment ──────────────────────────────────────────────
    fetch('/api/enrich')
      .then(r => r.json())
      .then((d) => {
        if (d.local || d.error) return;
        posthog.setPersonProperties({
          ip_address:  d.ip       ?? undefined,
          ip_company:  d.company  ?? undefined,
          ip_org:      d.org      ?? undefined,
          ip_city:     d.city     ?? undefined,
          ip_region:   d.region   ?? undefined,
          ip_country:  d.country  ?? undefined,
          ip_timezone: d.timezone ?? undefined,
        });
        if (d.company) {
          // PostHog Groups API — groups ALL events from this visitor under the company
          posthog.group('company', d.company, {
            name:    d.company,
            org:     d.org ?? undefined,
            city:    d.city ?? undefined,
            region:  d.region ?? undefined,
            country: d.country ?? undefined,
          });
          posthog.capture('company_identified', {
            company:  d.company,
            org:      d.org,
            city:     d.city,
            region:   d.region,
            country:  d.country,
          });
        }
        posthog.capture('ip_identified', {
          ip:      d.ip,
          company: d.company,
          org:     d.org,
          city:    d.city,
          region:  d.region,
          country: d.country,
        });
      })
      .catch(() => {});

    // ── Rage click detection ──────────────────────────────────────────────────
    const clicks: { x: number; y: number; time: number }[] = [];
    const onRageClick = (e: MouseEvent) => {
      const now = Date.now();
      clicks.push({ x: e.clientX, y: e.clientY, time: now });
      // Keep only clicks in last 500ms
      const recent = clicks.filter(c => now - c.time < 500);
      clicks.length = 0;
      clicks.push(...recent);
      if (recent.length >= 3) {
        const el = e.target as HTMLElement;
        posthog.capture('rage_click', {
          element_tag: el.tagName,
          element_text: el.textContent?.trim().slice(0, 80),
          element_class: el.className?.toString().slice(0, 80),
          page: window.location.pathname,
          click_count: recent.length,
        });
        clicks.length = 0;
      }
    };

    // ── Copy tracking ─────────────────────────────────────────────────────────
    const onCopy = () => {
      const selection = window.getSelection()?.toString().trim() ?? '';
      if (selection.length > 2) {
        posthog.capture('text_copied', {
          char_count: selection.length,
          preview: selection.slice(0, 80),
          page: window.location.pathname,
        });
      }
    };

    // ── Tab visibility ────────────────────────────────────────────────────────
    let tabHideTime = 0;
    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        tabHideTime = Date.now();
        posthog.capture('tab_hidden', { page: window.location.pathname });
      } else {
        const awaySeconds = tabHideTime ? Math.round((Date.now() - tabHideTime) / 1000) : 0;
        posthog.capture('tab_visible', { away_seconds: awaySeconds, page: window.location.pathname });
      }
    };

    // ── Time-on-site milestones ───────────────────────────────────────────────
    const MILESTONES = [30, 60, 120, 300, 600]; // seconds
    const fired = new Set<number>();
    const startTime = Date.now();
    const milestoneTimer = setInterval(() => {
      const elapsed = Math.round((Date.now() - startTime) / 1000);
      for (const m of MILESTONES) {
        if (elapsed >= m && !fired.has(m)) {
          fired.add(m);
          posthog.capture('time_on_site', { seconds: m, page: window.location.pathname });
        }
      }
    }, 5000);

    // ── Idle detection (5 min of no interaction) ──────────────────────────────
    let idleTimer: ReturnType<typeof setTimeout>;
    const IDLE_MS = 5 * 60 * 1000;
    let isIdle = false;
    const resetIdle = () => {
      if (isIdle) {
        isIdle = false;
        posthog.capture('user_active_again', { page: window.location.pathname });
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        posthog.capture('user_idle', { idle_after_seconds: IDLE_MS / 1000, page: window.location.pathname });
      }, IDLE_MS);
    };
    const idleEvents = ['mousemove', 'keydown', 'scroll', 'click', 'touchstart'];
    idleEvents.forEach(ev => window.addEventListener(ev, resetIdle, { passive: true }));
    resetIdle();

    // ── External link clicks ──────────────────────────────────────────────────
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

    // ── JS error tracking ─────────────────────────────────────────────────────
    const onError = (e: ErrorEvent) => {
      posthog.capture('js_error', {
        message: e.message,
        filename: e.filename?.split('/').pop(),
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

    // ── Print tracking ────────────────────────────────────────────────────────
    const onPrint = () => posthog.capture('page_printed', { page: window.location.pathname });

    // ── Attach all listeners ──────────────────────────────────────────────────
    document.addEventListener('click', onRageClick);
    document.addEventListener('copy', onCopy);
    document.addEventListener('visibilitychange', onVisibilityChange);
    document.addEventListener('click', onLinkClick);
    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onRejection);
    window.addEventListener('beforeprint', onPrint);

    return () => {
      clearInterval(milestoneTimer);
      clearTimeout(idleTimer);
      document.removeEventListener('click', onRageClick);
      document.removeEventListener('copy', onCopy);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      document.removeEventListener('click', onLinkClick);
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onRejection);
      window.removeEventListener('beforeprint', onPrint);
      idleEvents.forEach(ev => window.removeEventListener(ev, resetIdle));
    };
  }, []);

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  );
}
