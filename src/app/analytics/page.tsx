import * as React from 'react';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { isAdmin } from '@/lib/auth';
import AnalyticsDashboard from '@/components/analytics/AnalyticsDashboard';
import {
  isConfigured,
  getOverview, getPreviousOverview,
  getBounceRate, getPreviousBounceRate,
  getAvgSessionDuration, getPagesPerSession,
  getNewVsReturning,
  getTopPages, getTopPagesWithTime,
  getEntryPages, getExitPages,
  getTopBlogPosts, getTopCTAs, getNavClicks,
  getCountries, getDevices, getOS, getBrowsers,
  getSources, getUTMSources,
  getLeads, getTopEvents,
  getDailyViews, getHourlyTraffic, getDayOfWeek,
  getScrollDepth, getConversionFunnel, getWebVitals,
  getProductBreakdown, getSessionRecordings,
} from '@/lib/posthog-api';

export const metadata: Metadata = {
  title: 'Analytics | Cerulea',
  robots: { index: false, follow: false },
};
export const revalidate = 0;

function SetupRequired() {
  return (
    <div style={{ minHeight: '100vh', background: '#F5F5F8', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', fontFamily: 'var(--font-jakarta, system-ui, sans-serif)' }}>
      <div style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 16, padding: '32px 36px', maxWidth: 520, width: '100%', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(82,84,200,0.1)', border: '1px solid rgba(82,84,200,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(82,84,200,0.9)" strokeWidth="2" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
        </div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111118', margin: '0 0 8px', letterSpacing: '-0.02em' }}>PostHog not configured</h2>
        <p style={{ color: '#52526A', lineHeight: 1.7, margin: '0 0 20px', fontSize: 14 }}>Add these to Vercel → Environment Variables and redeploy:</p>
        <div style={{ background: '#F5F5F8', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 10, padding: '16px 20px', fontFamily: 'monospace', fontSize: 13, color: '#111118', lineHeight: 2.4 }}>
          <div style={{ color: '#8080A0' }}>{'# PostHog → Avatar → Personal API Keys'}</div>
          <div>POSTHOG_PERSONAL_API_KEY=phx_...</div>
          <div style={{ marginTop: 8, color: '#8080A0' }}>{'# PostHog URL → /project/{number}'}</div>
          <div>POSTHOG_PROJECT_ID=123456</div>
        </div>
        <p style={{ color: '#8080A0', fontSize: 12, marginTop: 12 }}>Server-only — no NEXT_PUBLIC_ prefix needed.</p>
      </div>
    </div>
  );
}

export default async function AnalyticsPage({ searchParams }: { searchParams: Promise<{ days?: string }> }) {
  const admin = await isAdmin();
  if (!admin) redirect('/');
  if (!isConfigured()) return <SetupRequired />;

  const { days: dp } = await searchParams;
  const days = Number(dp) || 7;

  const [
    ov, prev, bounce, prevBounce, dur, pps, nvr,
    topPages, pagesTime, entryPages, exitPages,
    topBlog, topCTAs, navClicks,
    countries, devices, os, browsers, sources, utmSources,
    leads, events, daily, hourly, dow, scroll,
    funnel, vitals, productBreakdown, sessions,
  ] = await Promise.all([
    getOverview(days).catch(() => ({ pageViews: 0, uniqueVisitors: 0, sessions: 0, contacts: 0 })),
    getPreviousOverview(days).catch(() => ({ pageViews: 0, uniqueVisitors: 0, sessions: 0, contacts: 0 })),
    getBounceRate(days).catch(() => 0),
    getPreviousBounceRate(days).catch(() => 0),
    getAvgSessionDuration(days).catch(() => 0),
    getPagesPerSession(days).catch(() => 0),
    getNewVsReturning(days).catch(() => []),
    getTopPages(days).catch(() => []),
    getTopPagesWithTime(days).catch(() => []),
    getEntryPages(days).catch(() => []),
    getExitPages(days).catch(() => []),
    getTopBlogPosts(days).catch(() => []),
    getTopCTAs(days).catch(() => []),
    getNavClicks(days).catch(() => []),
    getCountries(days).catch(() => []),
    getDevices(days).catch(() => []),
    getOS(days).catch(() => []),
    getBrowsers(days).catch(() => []),
    getSources(days).catch(() => []),
    getUTMSources(days).catch(() => []),
    getLeads(days).catch(() => []),
    getTopEvents(days).catch(() => []),
    getDailyViews(days).catch(() => []),
    getHourlyTraffic(days).catch(() => []),
    getDayOfWeek(days).catch(() => []),
    getScrollDepth(days).catch(() => []),
    getConversionFunnel(days).catch(() => ({ visitors: 0, ctaClicks: 0, formStarts: 0, formSubmits: 0 })),
    getWebVitals(days).catch(() => []),
    getProductBreakdown(days).catch(() => []),
    getSessionRecordings(20).catch(() => []),
  ]);

  const phBase = `https://us.posthog.com/project/${process.env.POSTHOG_PROJECT_ID}`;

  return (
    <AnalyticsDashboard
      data={{
        ov, prev, bounce, prevBounce, dur, pps, nvr,
        topPages, pagesTime, entryPages, exitPages,
        topBlog, topCTAs, navClicks,
        countries, devices, os, browsers, sources, utmSources,
        leads, events, daily, hourly, dow, scroll,
        funnel, vitals, productBreakdown, sessions,
      }}
      days={days}
      phBase={phBase}
    />
  );
}
