import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import photoMaissa from "@/assets/photo-maissa.jpeg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-end pt-20 pb-12 relative overflow-hidden">
      {/* Background editorial pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-background to-secondary/30" />
      <div className="absolute top-20 right-0 w-1/2 h-full opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, currentColor 60px, currentColor 61px)',
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end">
          {/* Left: Editorial typography */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="editorial-label">{t.hero.badge}</span>
              <div className="editorial-divider mt-4" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[0.95] tracking-tight"
            >
              {t.hero.title}
              <br />
              <span className="italic text-primary font-medium">{t.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg" className="text-sm uppercase tracking-widest px-8 py-6" asChild>
                <a href="#contato">{t.hero.cta}</a>
              </Button>
              <Button size="lg" variant="outline" className="text-sm uppercase tracking-widest px-8 py-6" asChild>
                <a href="#servicos">{t.hero.ctaSecondary}</a>
              </Button>
            </motion.div>
          </div>

          {/* Right: Photo + editorial overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] max-h-[70vh] rounded-sm overflow-hidden">
              <img
                src={photoMaissa}
                alt="Dra. Maissa Mansano"
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

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid grid-cols-3 gap-px mt-12 bg-border rounded-sm overflow-hidden"
        >
          {[
            { title: t.hero.benefit1Title, desc: t.hero.benefit1Desc },
            { title: t.hero.benefit2Title, desc: t.hero.benefit2Desc },
            { title: t.hero.benefit3Title, desc: t.hero.benefit3Desc },
          ].map((item, i) => (
            <div key={i} className="bg-card p-5 md:p-6 text-center">
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">{item.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-8"
        >
          <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
