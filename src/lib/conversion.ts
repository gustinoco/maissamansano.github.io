import { trackEvent } from "@/lib/analytics";
import { trackWhatsappConversion } from "@/googleAdsTracking.js";

interface ConversionParams {
  cta_location: string;
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
  trackEvent("whatsapp_click", eventParams);

  trackWhatsappConversion(url);
};
