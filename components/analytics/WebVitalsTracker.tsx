'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { usePostHog } from 'posthog-js/react';

export default function WebVitalsTracker() {
  const posthog = usePostHog();

  useReportWebVitals((metric) => {
    posthog?.capture('web_vitals', {
      metric_name: metric.name,
      value: metric.value,
      rating: metric.rating,
    });
  });

  return null;
}
