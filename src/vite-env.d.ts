/// <reference types="vite/client" />

interface Window {
  dataLayer?: Array<Record<string, unknown> | unknown[]>;
  gtag?: (command: "js" | "config" | "event" | "set" | "consent", target: string | Date, params?: Record<string, unknown>) => void;
  gtag_report_conversion?: (url?: string) => boolean;
}
