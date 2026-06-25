import { trackEvent } from "@/lib/analytics";

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

  const reportConversion = window.gtag_report_conversion;

  if (typeof reportConversion === "function") {
    reportConversion(url);
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
};
