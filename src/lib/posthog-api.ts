/**
 * Server-side PostHog API helper.
 * Requires env vars: POSTHOG_PERSONAL_API_KEY, POSTHOG_PROJECT_ID
 * These are SERVER-ONLY (no NEXT_PUBLIC_ prefix).
 */

const PROJECT_ID = process.env.POSTHOG_PROJECT_ID ?? '';
const API_KEY    = process.env.POSTHOG_PERSONAL_API_KEY ?? '';
const BASE       = `https://us.posthog.com/api/projects/${PROJECT_ID}`;

export const isConfigured = () => Boolean(PROJECT_ID && API_KEY);

export async function checkApiHealth(): Promise<{ ok: boolean; status?: number; error?: string }> {
  try {
    const res = await fetch(`${BASE}/query`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: { kind: 'HogQLQuery', query: 'SELECT 1' } }),
      cache: 'no-store',
    });
    if (res.ok) return { ok: true };
    const text = await res.text();
    return { ok: false, status: res.status, error: text.slice(0, 200) };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

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

// ── Overview (current period) ─────────────────────────────────────────────────

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

// ── Overview (previous period, for % change) ──────────────────────────────────

export async function getPreviousOverview(days: number) {
  const [views, visitors, sessions, contacts] = await Promise.all([
    hql<[[number]]>(`
      SELECT count() FROM events
      WHERE event = '$pageview'
        AND timestamp > now() - interval ${days * 2} day
        AND timestamp <= now() - interval ${days} day`),
    hql<[[number]]>(`
      SELECT count(distinct person_id) FROM events
      WHERE event = '$pageview'
        AND timestamp > now() - interval ${days * 2} day
        AND timestamp <= now() - interval ${days} day`),
    hql<[[number]]>(`
      SELECT count(distinct properties.$session_id) FROM events
      WHERE timestamp > now() - interval ${days * 2} day
        AND timestamp <= now() - interval ${days} day
        AND properties.$session_id IS NOT NULL`),
    hql<[[number]]>(`
      SELECT count() FROM events
      WHERE event = 'contact_form_submitted'
        AND timestamp > now() - interval ${days * 2} day
        AND timestamp <= now() - interval ${days} day`),
  ]);

  return {
    pageViews:      views[0]?.[0]    ?? 0,
    uniqueVisitors: visitors[0]?.[0] ?? 0,
    sessions:       sessions[0]?.[0] ?? 0,
    contacts:       contacts[0]?.[0] ?? 0,
  };
}

// ── Bounce rate ───────────────────────────────────────────────────────────────

export async function getBounceRate(days: number) {
  const rows = await hql<[number, number][]>(`
    SELECT countIf(pv = 1) as bounces, count() as total
    FROM (
      SELECT properties.$session_id, count() as pv
      FROM events
      WHERE event = '$pageview'
        AND timestamp > now() - interval ${days} day
        AND properties.$session_id IS NOT NULL
      GROUP BY properties.$session_id
    )`);
  const [bounces, total] = rows[0] ?? [0, 0];
  return total ? Math.round((bounces / total) * 100) : 0;
}

export async function getPreviousBounceRate(days: number) {
  const rows = await hql<[number, number][]>(`
    SELECT countIf(pv = 1) as bounces, count() as total
    FROM (
      SELECT properties.$session_id, count() as pv
      FROM events
      WHERE event = '$pageview'
        AND timestamp > now() - interval ${days * 2} day
        AND timestamp <= now() - interval ${days} day
        AND properties.$session_id IS NOT NULL
      GROUP BY properties.$session_id
    )`);
  const [bounces, total] = rows[0] ?? [0, 0];
  return total ? Math.round((bounces / total) * 100) : 0;
}

// ── Session quality ───────────────────────────────────────────────────────────

export async function getAvgSessionDuration(days: number) {
  const rows = await hql<[[number]]>(`
    SELECT round(avg(dur)) FROM (
      SELECT
        properties.$session_id,
        dateDiff('second', min(timestamp), max(timestamp)) as dur
      FROM events
      WHERE timestamp > now() - interval ${days} day
        AND properties.$session_id IS NOT NULL
      GROUP BY properties.$session_id
      HAVING dur > 0 AND dur < 7200
    )`);
  return Math.round(rows[0]?.[0] ?? 0);
}

export async function getPagesPerSession(days: number) {
  const rows = await hql<[[number]]>(`
    SELECT avg(pv) FROM (
      SELECT properties.$session_id, count() as pv
      FROM events
      WHERE event = '$pageview'
        AND timestamp > now() - interval ${days} day
        AND properties.$session_id IS NOT NULL
      GROUP BY properties.$session_id
    )`);
  const val = rows[0]?.[0] ?? 0;
  return Math.round(val * 10) / 10;
}

// ── New vs Returning ──────────────────────────────────────────────────────────

export async function getNewVsReturning(days: number) {
  const rows = await hql<[string, number][]>(`
    SELECT
      if(person.created_at >= now() - interval ${days} day, 'New', 'Returning') as visitor_type,
      count(distinct person_id) as visitors
    FROM events
    WHERE event = '$pageview'
      AND timestamp > now() - interval ${days} day
    GROUP BY visitor_type`);
  return rows.map(([type, count]) => ({ type, count }));
}

// ── Top pages ─────────────────────────────────────────────────────────────────

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

// ── Geography ─────────────────────────────────────────────────────────────────

export async function getCountries(days: number) {
  const rows = await hql<[string, number][]>(`
    SELECT properties.$geoip_country_name as country, count() as count
    FROM events
    WHERE event = '$pageview'
      AND timestamp > now() - interval ${days} day
      AND country IS NOT NULL AND country != ''
    GROUP BY country
    ORDER BY count DESC
    LIMIT 12`);

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

// ── Browsers ──────────────────────────────────────────────────────────────────

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
        properties.$referrer LIKE '%bing%', 'Bing',
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

// ── Blog post leaderboard ─────────────────────────────────────────────────────

export async function getTopBlogPosts(days: number) {
  const rows = await hql<[string, string, string, number][]>(`
    SELECT
      properties.slug    as slug,
      properties.title   as title,
      properties.category as category,
      count()            as views
    FROM events
    WHERE event = 'blog_post_viewed'
      AND timestamp > now() - interval ${days} day
      AND slug IS NOT NULL
    GROUP BY slug, title, category
    ORDER BY views DESC
    LIMIT 10`);
  return rows.map(([slug, title, category, views]) => ({ slug, title, category, views }));
}

// ── CTA click breakdown ───────────────────────────────────────────────────────

export async function getTopCTAs(days: number) {
  const rows = await hql<[string, string, number][]>(`
    SELECT
      properties.label    as label,
      properties.location as location,
      count()             as clicks
    FROM events
    WHERE event = 'cta_clicked'
      AND timestamp > now() - interval ${days} day
    GROUP BY label, location
    ORDER BY clicks DESC
    LIMIT 12`);
  return rows.map(([label, location, clicks]) => ({ label, location, clicks }));
}

// ── Nav click breakdown ───────────────────────────────────────────────────────

export async function getNavClicks(days: number) {
  const rows = await hql<[string, number][]>(`
    SELECT properties.label as label, count() as clicks
    FROM events
    WHERE event = 'nav_clicked'
      AND timestamp > now() - interval ${days} day
    GROUP BY label
    ORDER BY clicks DESC
    LIMIT 10`);
  return rows.map(([label, clicks]) => ({ label, clicks }));
}

// ── Hourly traffic ────────────────────────────────────────────────────────────

export async function getHourlyTraffic(days: number) {
  const rows = await hql<[number, number][]>(`
    SELECT toHour(toTimeZone(timestamp, 'Asia/Kolkata')) as hour, count() as views
    FROM events
    WHERE event = '$pageview'
      AND timestamp > now() - interval ${days} day
    GROUP BY hour
    ORDER BY hour ASC`);
  const map: Record<number, number> = Object.fromEntries(rows.map(([h, v]) => [h, v]));
  return Array.from({ length: 24 }, (_, i) => ({ hour: i, views: map[i] ?? 0 }));
}

// ── Day-of-week traffic ───────────────────────────────────────────────────────

export async function getDayOfWeek(days: number) {
  const rows = await hql<[number, number][]>(`
    SELECT toDayOfWeek(timestamp) as dow, count() as views
    FROM events
    WHERE event = '$pageview'
      AND timestamp > now() - interval ${days} day
    GROUP BY dow
    ORDER BY dow ASC`);
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const map: Record<number, number> = Object.fromEntries(rows.map(([d, v]) => [d, v]));
  return labels.map((day, i) => ({ day, views: map[i + 1] ?? 0 }));
}

// ── Scroll depth ──────────────────────────────────────────────────────────────

export async function getScrollDepth(days: number) {
  const rows = await hql<[number, number][]>(`
    SELECT
      toInt32OrNull(properties.depth_percent) as depth,
      count(distinct properties.$session_id)  as sessions
    FROM events
    WHERE event = 'scroll_depth_reached'
      AND timestamp > now() - interval ${days} day
      AND depth IS NOT NULL
    GROUP BY depth
    ORDER BY depth ASC`);
  const milestones = [25, 50, 75, 90, 100];
  const map: Record<number, number> = Object.fromEntries(rows.map(([d, v]) => [d, v]));
  return milestones.map(m => ({ depth: m, sessions: map[m] ?? 0 }));
}

// ── Contact leads ─────────────────────────────────────────────────────────────

export async function getLeads(days: number) {
  const rows = await hql<[string, string, string, string][]>(`
    SELECT
      properties.name    as name,
      properties.email   as email,
      properties.company as company,
      timestamp
    FROM events
    WHERE event = 'contact_form_submitted'
      AND timestamp > now() - interval ${days} day
    ORDER BY timestamp DESC
    LIMIT 50`);

  return rows.map(([name, email, company, timestamp]) => ({ name, email, company, timestamp }));
}

// ── Per-IP visitor intelligence ───────────────────────────────────────────────

export async function getVisitorsByIP(days: number) {
  const rows = await hql<[string, string, string, string, string, number, number, string][]>(`
    SELECT
      coalesce(person.properties.ip_address, '')   as ip,
      coalesce(person.properties.ip_company, '')   as company,
      coalesce(person.properties.ip_city, '')      as city,
      coalesce(person.properties.ip_country, '')   as country,
      coalesce(person.properties.ip_region, '')    as region,
      count()                                       as page_views,
      count(distinct properties.$session_id)        as sessions,
      toString(max(timestamp))                      as last_seen
    FROM events
    WHERE event = '$pageview'
      AND timestamp > now() - interval ${days} day
      AND person.properties.ip_address IS NOT NULL
      AND person.properties.ip_address != ''
    GROUP BY ip, company, city, country, region
    ORDER BY max(timestamp) DESC
    LIMIT 200`);
  return rows.map(([ip, company, city, country, region, pageViews, sessions, lastSeen]) => ({
    ip, company, city, country, region, pageViews, sessions, lastSeen,
  }));
}

// ── Company / IP visitor identification ───────────────────────────────────────

export async function getCompanyVisitors(days: number) {
  const rows = await hql<[string, string, string, string, number, string][]>(`
    SELECT
      properties.company                    as company,
      coalesce(properties.org, '')          as org,
      coalesce(properties.city, '')         as city,
      coalesce(properties.country, '')      as country,
      count(distinct person_id)             as visitors,
      toString(max(timestamp))              as last_seen
    FROM events
    WHERE event = 'company_identified'
      AND timestamp > now() - interval ${days} day
      AND isNotNull(properties.company)
      AND properties.company != ''
    GROUP BY company, org, city, country
    ORDER BY max(timestamp) DESC
    LIMIT 100`);
  return rows.map(([company, org, city, country, visitors, lastSeen]) => ({
    company, org, city, country, visitors, lastSeen,
  }));
}

// ── Top custom events ─────────────────────────────────────────────────────────

export async function getTopEvents(days: number) {
  const rows = await hql<[string, number][]>(`
    SELECT event, count() as count
    FROM events
    WHERE event NOT IN (
        '$pageview', '$pageleave', '$autocapture',
        '$feature_flag_called', '$identify', '$create_alias',
        '$groupidentify', '$$client_ingestion_warning',
        'nav_clicked', 'cta_clicked', 'blog_post_viewed',
        'scroll_depth_reached', 'contact_form_started',
        'company_identified', 'ip_identified'
      )
      AND timestamp > now() - interval ${days} day
    GROUP BY event
    ORDER BY count DESC
    LIMIT 12`);

  return rows.map(([event, count]) => ({ event, count }));
}

// ── Daily page views (area chart) ─────────────────────────────────────────────

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

// ── Entry pages (first page of each session) ─────────────────────────────────

export async function getEntryPages(days: number) {
  const rows = await hql<[string, number][]>(`
    SELECT first_page as page, count() as sessions
    FROM (
      SELECT
        properties.$session_id,
        argMin(properties.$pathname, timestamp) as first_page
      FROM events
      WHERE event = '$pageview'
        AND timestamp > now() - interval ${days} day
        AND properties.$session_id IS NOT NULL
      GROUP BY properties.$session_id
    )
    WHERE first_page IS NOT NULL
    GROUP BY page
    ORDER BY sessions DESC
    LIMIT 10`);
  return rows.map(([page, sessions]) => ({ page, sessions }));
}

// ── Exit pages (last page of each session) ────────────────────────────────────

export async function getExitPages(days: number) {
  const rows = await hql<[string, number][]>(`
    SELECT last_page as page, count() as sessions
    FROM (
      SELECT
        properties.$session_id,
        argMax(properties.$pathname, timestamp) as last_page
      FROM events
      WHERE event = '$pageview'
        AND timestamp > now() - interval ${days} day
        AND properties.$session_id IS NOT NULL
      GROUP BY properties.$session_id
    )
    WHERE last_page IS NOT NULL
    GROUP BY page
    ORDER BY sessions DESC
    LIMIT 10`);
  return rows.map(([page, sessions]) => ({ page, sessions }));
}

// ── UTM campaigns ─────────────────────────────────────────────────────────────

export async function getUTMSources(days: number) {
  const rows = await hql<[string, string, string, number][]>(`
    SELECT
      coalesce(properties.$utm_source, '(none)')   as source,
      coalesce(properties.$utm_medium, '(none)')   as medium,
      coalesce(properties.$utm_campaign, '(none)') as campaign,
      count()                                      as sessions
    FROM events
    WHERE event = '$pageview'
      AND timestamp > now() - interval ${days} day
      AND (
        properties.$utm_source IS NOT NULL
        OR properties.$utm_medium IS NOT NULL
        OR properties.$utm_campaign IS NOT NULL
      )
    GROUP BY source, medium, campaign
    ORDER BY sessions DESC
    LIMIT 15`);
  return rows.map(([source, medium, campaign, sessions]) => ({ source, medium, campaign, sessions }));
}

// ── Product page + feature breakdown ─────────────────────────────────────────

export async function getProductBreakdown(days: number) {
  const rows = await hql<[string, string, number][]>(`
    SELECT
      coalesce(properties.page, '(unknown)')    as page,
      coalesce(properties.feature, '(unknown)') as feature,
      count()                                   as views
    FROM events
    WHERE event = 'product_feature_viewed'
      AND timestamp > now() - interval ${days} day
    GROUP BY page, feature
    ORDER BY views DESC
    LIMIT 20`);
  return rows.map(([page, feature, views]) => ({ page, feature, views }));
}

// ── Top pages with avg time on page ──────────────────────────────────────────

export async function getTopPagesWithTime(days: number) {
  const rows = await hql<[string, number, number][]>(`
    SELECT
      properties.$pathname                                   as page,
      count()                                                as exits,
      round(avg(toFloat64OrNull(properties.$time_on_page))) as avg_time
    FROM events
    WHERE event = '$pageleave'
      AND timestamp > now() - interval ${days} day
      AND properties.$pathname IS NOT NULL
      AND toFloat64OrNull(properties.$time_on_page) > 0
      AND toFloat64OrNull(properties.$time_on_page) < 7200
    GROUP BY page
    ORDER BY exits DESC
    LIMIT 12`);
  return rows.map(([page, exits, avgTime]) => ({ page, exits, avgTime: Math.round(avgTime ?? 0) }));
}

// ── Conversion funnel ─────────────────────────────────────────────────────────

export async function getConversionFunnel(days: number) {
  const [visitors, ctaClicks, formStarts, formSubmits] = await Promise.all([
    hql<[[number]]>(`
      SELECT count(distinct person_id) FROM events
      WHERE event = '$pageview'
        AND timestamp > now() - interval ${days} day`),
    hql<[[number]]>(`
      SELECT count(distinct person_id) FROM events
      WHERE event = 'cta_clicked'
        AND timestamp > now() - interval ${days} day`),
    hql<[[number]]>(`
      SELECT count(distinct person_id) FROM events
      WHERE event = 'contact_form_started'
        AND timestamp > now() - interval ${days} day`),
    hql<[[number]]>(`
      SELECT count(distinct person_id) FROM events
      WHERE event = 'contact_form_submitted'
        AND timestamp > now() - interval ${days} day`),
  ]);
  return {
    visitors:    visitors[0]?.[0]    ?? 0,
    ctaClicks:   ctaClicks[0]?.[0]   ?? 0,
    formStarts:  formStarts[0]?.[0]  ?? 0,
    formSubmits: formSubmits[0]?.[0] ?? 0,
  };
}

// ── Web Vitals ────────────────────────────────────────────────────────────────

export async function getWebVitals(days: number) {
  const rows = await hql<[string, number, number][]>(`
    SELECT
      properties.metric_name                              as metric,
      round(avg(toFloat64OrNull(properties.value)))       as avg_val,
      round(quantile(0.75)(toFloat64OrNull(properties.value))) as p75
    FROM events
    WHERE event = 'web_vitals'
      AND timestamp > now() - interval ${days} day
      AND metric IS NOT NULL
    GROUP BY metric
    ORDER BY metric ASC`);
  return rows.map(([metric, avg, p75]) => ({ metric, avg: avg ?? 0, p75: p75 ?? 0 }));
}

// ── Session recordings (REST, not HogQL) ──────────────────────────────────────

export interface SessionRec {
  id: string;
  duration: number;
  start_time: string;
  click_count: number;
  keypress_count: number;
  active_seconds: number;
  console_error_count: number;
  viewed: boolean;
  person?: {
    name?: string;
    properties?: {
      email?: string;
      $geoip_country_name?: string;
      $geoip_country_code?: string;
      $browser?: string;
      $device_type?: string;
      $os?: string;
    };
  };
}

export async function getSessionRecordings(limit = 20): Promise<SessionRec[]> {
  const res = await fetch(
    `${BASE}/session_recordings/?order=-start_time&limit=${limit}`,
    {
      headers: { Authorization: `Bearer ${API_KEY}` },
      cache: 'no-store',
    }
  );
  if (!res.ok) throw new Error(`PostHog recordings API ${res.status}`);
  const json = await res.json();
  return json.results ?? [];
}
