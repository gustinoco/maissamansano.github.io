import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FloatingWhatsApp = () => {
  const { t } = useLanguage();
  const whatsappNumber = "5567992219746";
  const whatsappMessage = encodeURIComponent(t.contact.whatsappMessage);

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-7 w-7 fill-current" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        {t.contact.whatsappButton}
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
