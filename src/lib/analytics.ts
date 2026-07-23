export type AnalyticsValue = string | number | boolean;

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

export const isAnalyticsEnabled = /^G-[A-Z0-9]+$/i.test(measurementId);

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getAnalyticsMeasurementId() {
  return isAnalyticsEnabled ? measurementId : null;
}

export function trackAnalyticsEvent(
  name: string,
  parameters: Record<string, AnalyticsValue> = {},
) {
  if (!isAnalyticsEnabled || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", name, parameters);
}
