type AnalyticsValue = string | number | boolean | null | undefined;
type AnalyticsParams = Record<string, AnalyticsValue>;

const attributionKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
  "campanha",
] as const;

const cleanParam = (value: string | null) => {
  if (!value) return undefined;
  return value.slice(0, 120);
};

export const getAttributionParams = (): AnalyticsParams => {
  const searchParams = new URLSearchParams(window.location.search);

  return attributionKeys.reduce<AnalyticsParams>((params, key) => {
    const value = cleanParam(searchParams.get(key));
    if (value) params[key] = value;
    return params;
  }, {});
};

export const trackEvent = (eventName: string, params: AnalyticsParams = {}) => {
  const payload = {
    page_location: window.location.href,
    page_title: document.title,
    ...getAttributionParams(),
    ...params,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...payload });
};
