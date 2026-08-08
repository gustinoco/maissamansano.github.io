import { trackEvent } from "@/lib/analytics";
import { trackWhatsappConversion } from "@/googleAdsTracking.js";

interface ConversionParams {
  source: string;
  cta_label?: string;
}

export const openUrlWithConversion = (url: string, params: ConversionParams) => {
  const eventParams = {
    method: "whatsapp",
    value: 1,
    currency: "BRL",
    link_url: url.split("?")[0],
    ...params,
  };

  trackEvent("generate_lead", eventParams);
  trackEvent("click_whatsapp", {
    event_category: "engagement",
    event_label: "whatsapp",
    ...eventParams,
  });
  // Keep the existing event for continuity with current analytics reports.
  trackEvent("whatsapp_click", eventParams);

  trackWhatsappConversion(url);
};
