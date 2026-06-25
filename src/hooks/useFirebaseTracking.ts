import { useEffect, useCallback } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Hook que rastreia automaticamente:
 * - tempo na página em marcos de engajamento
 * - cliques em links/botões
 * - scroll depth (25%, 50%, 75%, 100%)
 * - seções visíveis uma vez por seção (section_view)
 */
export const useFirebaseTracking = () => {
  // Engagement milestones. The Google tag already collects page_view automatically.
  useEffect(() => {
    const startTime = Date.now();
    const milestones = [30, 60, 120];
    const reached = new Set<number>();

    const interval = setInterval(() => {
      const seconds = Math.round((Date.now() - startTime) / 1000);
      milestones.forEach((milestone) => {
        if (seconds >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          trackEvent("time_on_page_milestone", { seconds: milestone });
        }
      });
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
          trackEvent("scroll_depth", { percent: t });
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
    const seenSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = (entry.target as HTMLElement).id;
          if (entry.isIntersecting) {
            if (seenSections.has(sectionId)) return;
            seenSections.add(sectionId);
            trackEvent("section_view", { section_id: sectionId });
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
    trackEvent(eventName, params);
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

      trackEvent("element_click", {
        element_type: el.tagName.toLowerCase(),
        element_label: label,
        element_href: href,
        page_section: el.closest("section[id]")?.id || "unknown",
      });

    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);
};
