/**
 * Cerulea analytics event helpers.
 * Import `track` anywhere in the app to fire typed PostHog events.
 *
 * Usage:
 *   import { track } from '@/lib/track';
 *   track.ctaClick('Talk to us', '/company/contact', 'hero');
 */

import posthog from 'posthog-js';

export const track = {
  // ── Navigation ──────────────────────────────────────────────────────────
  navClick(label: string, href: string) {
    posthog.capture('nav_clicked', { label, href });
  },

  // ── CTA buttons ─────────────────────────────────────────────────────────
  ctaClick(label: string, href: string, location: string) {
    posthog.capture('cta_clicked', { label, href, location });
  },

  // ── Blog ─────────────────────────────────────────────────────────────────
  blogPostViewed(slug: string, title: string, category?: string) {
    posthog.capture('blog_post_viewed', { slug, title, category });
  },

  // ── Contact form ─────────────────────────────────────────────────────────
  contactFormStarted() {
    posthog.capture('contact_form_started');
  },

  /** Call this on successful form submit to permanently link the visitor to a name/email. */
  contactFormSubmitted(data: { name: string; email: string; company: string; message: string }) {
    // Identify the person — all past + future events get linked to this identity
    if (data.email) {
      posthog.identify(data.email, {
        name: data.name,
        email: data.email,
        company: data.company,
      });
    }
    posthog.capture('contact_form_submitted', {
      name: data.name,
      email: data.email,
      company: data.company,
      has_message: data.message.length > 0,
      message_length: data.message.length,
    });
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricingPlanViewed(plan: string, currency: string) {
    posthog.capture('pricing_plan_viewed', { plan, currency });
  },

  // ── Product pages ────────────────────────────────────────────────────────
  productFeatureViewed(feature: string, page: string) {
    posthog.capture('product_feature_viewed', { feature, page });
  },

  // ── Solutions ────────────────────────────────────────────────────────────
  solutionViewed(slug: string, title: string) {
    posthog.capture('solution_page_viewed', { slug, title });
  },

  // ── Generic event (fallback) ─────────────────────────────────────────────
  event(name: string, props?: Record<string, unknown>) {
    posthog.capture(name, props);
  },
};
