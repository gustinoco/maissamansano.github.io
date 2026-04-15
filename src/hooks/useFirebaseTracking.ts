import { useEffect, useCallback } from "react";
import { analytics, logEvent } from "@/lib/firebase";

/**
 * Hook que rastreia automaticamente:
 * - page_view ao montar
 * - tempo na página (engagement_time a cada 30s)
 * - cliques em links/botões
 * - scroll depth (25%, 50%, 75%, 100%)
 * - seções visíveis (section_view)
 */
export const useFirebaseTracking = () => {
  // Page view + engagement time
  useEffect(() => {
    logEvent(analytics, "page_view", {
      page_title: document.title,
      page_location: window.location.href,
    });

    const startTime = Date.now();
    const interval = setInterval(() => {
      const seconds = Math.round((Date.now() - startTime) / 1000);
      logEvent(analytics, "engagement_time", { seconds });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Scroll depth tracking
  useEffect(() => {
    const thresholds = [25, 50, 75, 100];
    const reached = new Set<number>();

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const percent = Math.round((window.scrollY / scrollHeight) * 100);

      for (const t of thresholds) {
        if (percent >= t && !reached.has(t)) {
          reached.add(t);
          logEvent(analytics, "scroll_depth", { percent: t });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section visibility tracking
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            logEvent(analytics, "section_view", {
              section_id: (entry.target as HTMLElement).id,
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Click tracking helper
  const trackClick = useCallback((eventName: string, params?: Record<string, string>) => {
    logEvent(analytics, eventName, params);
  }, []);

  return { trackClick };
};

/**
 * Auto-track all clicks on interactive elements
 */
export const useAutoClickTracking = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const el = target.closest("a, button, [role='button']") as HTMLElement | null;
      if (!el) return;

      const label =
        el.getAttribute("aria-label") ||
        el.textContent?.trim().slice(0, 50) ||
        "unknown";

      const href = el.getAttribute("href") || "";

      logEvent(analytics, "element_click", {
        element_type: el.tagName.toLowerCase(),
        element_label: label,
        element_href: href,
        page_section: el.closest("section[id]")?.id || "unknown",
      });

      // Track WhatsApp clicks specifically
      if (href.includes("wa.me") || label.toLowerCase().includes("whatsapp")) {
        logEvent(analytics, "whatsapp_click", {
          element_label: label,
          page_section: el.closest("section[id]")?.id || "unknown",
        });
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);
};
