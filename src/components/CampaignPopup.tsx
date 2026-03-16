import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const campaignTexts = {
  pt: {
    badge: "OFERTA EXCLUSIVA",
    title: "15% de Desconto",
    subtitle: "em qualquer procedimento",
    description:
      "Você chegou através da nossa campanha especial! Aproveite 15% de desconto na sua primeira avaliação ou sessão.",
    cta: "Agendar com Desconto",
    whatsappMessage:
      "Olá, Dra. Maissa! Vim pela campanha especial e gostaria de agendar minha sessão com o desconto de 15%. Podemos conversar?",
    dismiss: "Talvez depois",
    valid: "Válido por tempo limitado",
  },
  es: {
    badge: "OFERTA EXCLUSIVA",
    title: "15% de Descuento",
    subtitle: "en cualquier procedimiento",
    description:
      "¡Llegaste a través de nuestra campaña especial! Aprovecha un 15% de descuento en tu primera evaluación o sesión.",
    cta: "Agendar con Descuento",
    whatsappMessage:
      "¡Hola, Dra. Maissa! Vine por la campaña especial y me gustaría agendar mi sesión con el descuento del 15%. ¿Podemos conversar?",
    dismiss: "Tal vez después",
    valid: "Válido por tiempo limitado",
  },
};

const WHATSAPP_NUMBER = "5567996569500";

const CampaignPopup = () => {
  const [searchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = campaignTexts[language];

  useEffect(() => {
    const campaign = searchParams.get("campanha") || searchParams.get("utm_campaign");
    if (campaign) {
      // Small delay so the page loads first
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappMessage)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={() => setIsOpen(false)}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md bg-background border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 p-1 rounded-full bg-muted/80 hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              {/* Top accent bar */}
              <div className="h-1.5 bg-primary w-full" />

              <div className="p-8 text-center space-y-5">
                {/* Icon */}
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Gift className="w-8 h-8 text-primary" />
                </div>

                {/* Badge */}
                <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                  {t.badge}
                </span>

                {/* Title */}
                <div>
                  <h2
                    className="text-3xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mt-1">
                    {t.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t.description}
                </p>

                {/* CTA */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t.cta}
                </button>

                {/* Dismiss */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
                >
                  {t.dismiss}
                </button>

                {/* Valid note */}
                <p className="text-xs text-muted-foreground/60">{t.valid}</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CampaignPopup;
