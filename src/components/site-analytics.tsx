"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getAnalyticsMeasurementId, trackAnalyticsEvent } from "@/lib/analytics";

const measurementId = getAnalyticsMeasurementId();

function safeLabel(value: string | null) {
  return value?.replace(/\s+/g, " ").trim().slice(0, 80) || undefined;
}

export function SiteAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!measurementId) return;

    const sendPageView = () => {
      trackAnalyticsEvent("page_view", {
        page_path: pathname || "/",
        page_location: `${window.location.origin}${pathname || "/"}`,
        page_title: document.title,
      });
    };

    if (typeof window.gtag === "function") {
      sendPageView();
    } else {
      window.addEventListener("hong-phuc-ga-ready", sendPageView, { once: true });
    }

    return () => window.removeEventListener("hong-phuc-ga-ready", sendPageView);
  }, [pathname]);

  useEffect(() => {
    if (!measurementId) return;

    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const explicitTarget = target.closest<HTMLElement>("[data-analytics-event]");
      if (explicitTarget) {
        const eventName = explicitTarget.dataset.analyticsEvent;
        if (eventName) {
          trackAnalyticsEvent(eventName, {
            link_text: safeLabel(explicitTarget.textContent) ?? "unknown",
            link_path: window.location.pathname,
          });
        }
        return;
      }

      const anchor = target.closest<HTMLAnchorElement>("a");
      if (!anchor) return;

      const url = new URL(anchor.href, window.location.href);
      const label = safeLabel(anchor.textContent);
      if (url.protocol === "tel:") {
        trackAnalyticsEvent("call_click", { link_text: label ?? "phone", page_path: window.location.pathname });
      } else if (url.origin === window.location.origin && url.pathname === "/dat-lich") {
        trackAnalyticsEvent("booking_click", { link_text: label ?? "booking", page_path: window.location.pathname });
      } else if (url.origin === window.location.origin && url.pathname === "/tim-bac-si") {
        trackAnalyticsEvent("find_doctor_click", { link_text: label ?? "find_doctor", page_path: window.location.pathname });
      } else if (url.origin === window.location.origin && url.pathname.startsWith("/kien-thuc/")) {
        trackAnalyticsEvent("article_open", { link_text: label ?? "article", article_path: url.pathname });
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="hong-phuc-ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
window.gtag('js', new Date());
window.gtag('config', '${measurementId}', { send_page_view: false });
window.dispatchEvent(new Event('hong-phuc-ga-ready'));`}
      </Script>
    </>
  );
}
