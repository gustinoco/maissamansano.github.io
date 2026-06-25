import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { openUrlWithConversion } from "@/lib/conversion";

const MobileWhatsAppBar = () => {
  const { t } = useLanguage();
  const whatsappNumber = "5567992219746";
  const whatsappMessage = encodeURIComponent(t.contact.whatsappMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openUrlWithConversion(whatsappUrl, {
      cta_location: "mobile_whatsapp_bar",
      cta_label: t.contact.whatsappButton,
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href={whatsappUrl}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-6 font-bold text-base uppercase tracking-wide shadow-[0_-4px_20px_rgba(0,0,0,0.15)] active:bg-[#20BA5C] transition-colors"
      >
        <MessageCircle className="h-6 w-6 fill-current flex-shrink-0" />
        <span>{t.contact.whatsappButton}</span>
      </a>
    </div>
  );
};

export default MobileWhatsAppBar;
