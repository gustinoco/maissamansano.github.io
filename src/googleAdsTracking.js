const GOOGLE_ADS_SESSION_KEY = "google_ads_visitor";
const GOOGLE_ADS_CLICK_IDS = ["gclid", "gbraid", "wbraid"];
const WHATSAPP_HOSTS = new Set(["wa.me", "api.whatsapp.com"]);

let isInitialized = false;

/**
 * Persists only the fact that this session started from a Google Ads URL.
 * The click identifier itself is intentionally not stored.
 */
function rememberGoogleAdsVisit() {
  const searchParams = new URLSearchParams(window.location.search);
  const hasGoogleAdsClickId = GOOGLE_ADS_CLICK_IDS.some((id) =>
    searchParams.has(id),
  );

  if (hasGoogleAdsClickId) {
    sessionStorage.setItem(GOOGLE_ADS_SESSION_KEY, "true");
  }
}

/** Returns whether a Google Ads click ID was found during this tab session. */
export function isGoogleAdsVisitor() {
  return sessionStorage.getItem(GOOGLE_ADS_SESSION_KEY) === "true";
}

/**
 * Reports the Ads conversion only for Google Ads visitors. In every other
 * situation, including when gtag is unavailable, it opens WhatsApp normally.
 */
export function trackWhatsappConversion(url) {
  const reportConversion = window.gtag_report_conversion;

  if (isGoogleAdsVisitor() && typeof reportConversion === "function") {
    reportConversion(url);
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
}

function isWhatsappUrl(url) {
  try {
    return WHATSAPP_HOSTS.has(new URL(url, window.location.href).hostname);
  } catch {
    return false;
  }
}

function handleWhatsappLinkClick(event) {
  // Preserve handlers already owned by React and native browser shortcuts.
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  if (!(event.target instanceof Element)) {
    return;
  }

  const link = event.target.closest("a[href]");
  if (!link || !isWhatsappUrl(link.href)) {
    return;
  }

  event.preventDefault();
  trackWhatsappConversion(link.href);
}

/** Initializes session detection and one delegated listener for all links. */
export function initGoogleAdsTracking() {
  if (isInitialized) {
    return;
  }

  rememberGoogleAdsVisit();
  document.addEventListener("click", handleWhatsappLinkClick);
  isInitialized = true;
}
