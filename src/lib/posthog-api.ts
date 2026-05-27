/**
 * Server-side PostHog API helper.
 * Requires env vars: POSTHOG_PERSONAL_API_KEY, POSTHOG_PROJECT_ID
 * These are SERVER-ONLY (no NEXT_PUBLIC_ prefix).
 */

const PROJECT_ID = process.env.POSTHOG_PROJECT_ID ?? '';
const API_KEY    = process.env.POSTHOG_PERSONAL_API_KEY ?? '';
const BASE       = `https://us.posthog.com/api/projects/${PROJECT_ID}`;

export const isConfigured = () => Boolean(PROJECT_ID && API_KEY);

async function hql<T = unknown[]>(query: string): Promise<T> {
  const res = await fetch(`${BASE}/query`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: { kind: 'HogQLQuery', query } }),
    cache: 'no-store',
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PostHog API ${res.status}: ${text.slice(0, 200)}`);
  }

  const json = await res.json();
  return (json.results ?? []) as T;
}

// ── Core metrics ──────────────────────────────────────────────────────────────

export async function getOverview(days: number) {
  const [views, visitors, sessions, contacts] = await Promise.all([
    hql<[[number]]>(`
      SELECT count() FROM events
      WHERE event = '$pageview'
        AND timestamp > now() - interval ${days} day`),
    hql<[[number]]>(`
      SELECT count(distinct person_id) FROM events
      WHERE event = '$pageview'
        AND timestamp > now() - interval ${days} day`),
    hql<[[number]]>(`
      SELECT count(distinct properties.$session_id) FROM events
      WHERE timestamp > now() - interval ${days} day
        AND properties.$session_id IS NOT NULL`),
    hql<[[number]]>(`
      SELECT count() FROM events
      WHERE event = 'contact_form_submitted'
        AND timestamp > now() - interval ${days} day`),
  ]);

  return {
    pageViews:      views[0]?.[0]    ?? 0,
    uniqueVisitors: visitors[0]?.[0] ?? 0,
    sessions:       sessions[0]?.[0] ?? 0,
    contacts:       contacts[0]?.[0] ?? 0,
  };
}

// ── Top pages ────────────────────────────────────────────────────────────────

export async function getTopPages(days: number) {
  const rows = await hql<[string, number][]>(`
    SELECT properties.$pathname as page, count() as views
    FROM events
    WHERE event = '$pageview'
      AND timestamp > now() - interval ${days} day
      AND properties.$pathname IS NOT NULL
    GROUP BY page
    ORDER BY views DESC
    LIMIT 15`);

  return rows.map(([page, views]) => ({ page, views }));
}

// ── Geography ────────────────────────────────────────────────────────────────

export async function getCountries(days: number) {
  const rows = await hql<[string, number][]>(`
    SELECT properties.$geoip_country_name as country, count() as count
    FROM events
    WHERE event = '$pageview'
      AND timestamp > now() - interval ${days} day
      AND country IS NOT NULL AND country != ''
    GROUP BY country
    ORDER BY count DESC
    LIMIT 10`);

  return rows.map(([country, count]) => ({ country, count }));
}

// ── Devices ───────────────────────────────────────────────────────────────────

export async function getDevices(days: number) {
  const rows = await hql<[string, number][]>(`
    SELECT properties.$device_type as device, count() as count
    FROM events
    WHERE event = '$pageview'
      AND timestamp > now() - interval ${days} day
      AND device IS NOT NULL
    GROUP BY device
    ORDER BY count DESC`);

  return rows.map(([device, count]) => ({ device: device || 'Unknown', count }));
}

// ── OS ────────────────────────────────────────────────────────────────────────

export async function getOS(days: number) {
  const rows = await hql<[string, number][]>(`
    SELECT properties.$os as os, count() as count
    FROM events
    WHERE event = '$pageview'
      AND timestamp > now() - interval ${days} day
      AND os IS NOT NULL
    GROUP BY os
    ORDER BY count DESC
    LIMIT 8`);

  return rows.map(([os, count]) => ({ os: os || 'Unknown', count }));
}

// ── Browsers ─────────────────────────────────────────────────────────────────

export async function getBrowsers(days: number) {
  const rows = await hql<[string, number][]>(`
    SELECT properties.$browser as browser, count() as count
    FROM events
    WHERE event = '$pageview'
      AND timestamp > now() - interval ${days} day
      AND browser IS NOT NULL
    GROUP BY browser
    ORDER BY count DESC
    LIMIT 6`);

  return rows.map(([browser, count]) => ({ browser: browser || 'Unknown', count }));
}

// ── Traffic sources ───────────────────────────────────────────────────────────

export async function getSources(days: number) {
  const rows = await hql<[string, number][]>(`
    SELECT
      multiIf(
        properties.$referrer = '' OR properties.$referrer IS NULL, 'Direct',
        properties.$referrer LIKE '%google%', 'Google',
        properties.$referrer LIKE '%linkedin%', 'LinkedIn',
        properties.$referrer LIKE '%twitter%' OR properties.$referrer LIKE '%t.co%', 'Twitter / X',
        properties.$referrer LIKE '%github%', 'GitHub',
        replaceRegexpOne(properties.$referring_domain, '^www\\.', '')
      ) as source,
      count() as count
    FROM events
    WHERE event = '$pageview'
      AND timestamp > now() - interval ${days} day
    GROUP BY source
    ORDER BY count DESC
    LIMIT 10`);

  return rows.map(([source, count]) => ({ source, count }));
}

// ── Contact leads (identified people) ────────────────────────────────────────

export async function getLeads(days: number) {
  const rows = await hql<[string, string, string, string][]>(`
    SELECT
      properties.name      as name,
      properties.email     as email,
      properties.company   as company,
      timestamp
    FROM events
    WHERE event = 'contact_form_submitted'
      AND timestamp > now() - interval ${days} day
    ORDER BY timestamp DESC
    LIMIT 50`);

  return rows.map(([name, email, company, timestamp]) => ({ name, email, company, timestamp }));
}

// ── Top custom events ─────────────────────────────────────────────────────────

export async function getTopEvents(days: number) {
  const rows = await hql<[string, number][]>(`
    SELECT event, count() as count
    FROM events
    WHERE event NOT IN ('$pageview', '$pageleave', '$autocapture',
                        '$feature_flag_called', '$identify', '$create_alias',
                        '$groupidentify', '$$client_ingestion_warning')
      AND timestamp > now() - interval ${days} day
    GROUP BY event
    ORDER BY count DESC
    LIMIT 12`);

  return rows.map(([event, count]) => ({ event, count }));
}

// ── Daily page views (sparkline data) ────────────────────────────────────────

export async function getDailyViews(days: number) {
  const rows = await hql<[string, number][]>(`
    SELECT toDate(timestamp) as date, count() as views
    FROM events
    WHERE event = '$pageview'
      AND timestamp > now() - interval ${days} day
    GROUP BY date
    ORDER BY date ASC`);

  return rows.map(([date, views]) => ({ date, views }));
}
