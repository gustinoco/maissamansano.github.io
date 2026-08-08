import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import photoMaissa520 from "@/assets/photo-maissa-520.jpeg";
import photoMaissa760 from "@/assets/photo-maissa-760.jpeg";
import { openUrlWithConversion } from "@/lib/conversion";

const HeroSection = () => {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/5567992219746?text=${encodeURIComponent(t.contact.whatsappMessage)}`;

  const handleWhatsApp = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    openUrlWithConversion(whatsappUrl, {
      source: "hero",
      cta_label: t.hero.cta,
    });
  };

  return (
    <section id="home" className="pt-24 md:pt-28 pb-10 md:pb-14 relative overflow-hidden">
      {/* Background editorial pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-background to-secondary/30" />
      <div className="absolute top-20 right-0 w-1/2 h-full opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, currentColor 60px, currentColor 61px)',
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Editorial typography */}
          <div className="lg:col-span-7 space-y-5 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="editorial-label">{t.hero.badge}</span>
              <div className="editorial-divider mt-3" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.02] tracking-tight"
            >
              {t.hero.title}{" "}<span className="italic text-primary font-medium">{t.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52 }}
              className="text-sm md:text-base font-semibold text-foreground"
            >
              {t.hero.trustLine}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-1"
            >
              <Button size="lg" className="w-full sm:w-auto text-sm uppercase tracking-widest px-8 py-6 shadow-lg" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleWhatsApp}>
                  <MessageCircle className="h-5 w-5" />
                  {t.hero.cta}
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right: Photo + editorial overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4] max-h-[32rem] lg:max-h-[70vh] rounded-sm overflow-hidden">
              <img
                src={photoMaissa760}
                srcSet={`${photoMaissa520} 403w, ${photoMaissa760} 590w`}
                sizes="(min-width: 1024px) 40vw, 92vw"
                alt="Dra. Maissa Mansano"
                width="590"
                height="760"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </div>

            {/* Editorial caption overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
              <p className="text-xs uppercase tracking-[0.2em] opacity-80">CREFITO 13/438865-F</p>
              <p className="text-lg font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                Dra. Maissa Mansano
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
