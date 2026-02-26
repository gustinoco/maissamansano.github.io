import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

const WhyHomeCareSection = () => {
  const { t } = useLanguage();

  const benefits = [
    { title: t.whyHomeCare.benefit1Title, description: t.whyHomeCare.benefit1Desc },
    { title: t.whyHomeCare.benefit2Title, description: t.whyHomeCare.benefit2Desc },
    { title: t.whyHomeCare.benefit3Title, description: t.whyHomeCare.benefit3Desc },
    { title: t.whyHomeCare.benefit4Title, description: t.whyHomeCare.benefit4Desc },
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute top-8 left-0 text-[12rem] font-bold text-primary/[0.03] leading-none select-none pointer-events-none" style={{ fontFamily: 'var(--font-display)' }}>
        HOME
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left column: headline */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <ScrollReveal>
                <span className="editorial-label">{t.whyHomeCare.title.includes("?") ? t.whyHomeCare.title.replace("?", "") : t.whyHomeCare.title}</span>
                <div className="editorial-divider mt-3 mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  {t.whyHomeCare.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.whyHomeCare.description}
                </p>
              </ScrollReveal>
            </div>

            {/* Right column: numbered items */}
            <div className="lg:col-span-7 space-y-0">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="group relative border-b border-border py-8 first:pt-0 last:border-b-0 pl-16 md:pl-20">
                    <span className="editorial-number">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-16 border-l-4 border-primary bg-accent/50 p-6 md:p-8 max-w-3xl mx-auto">
              <p className="text-foreground italic text-lg leading-relaxed" style={{ fontFamily: 'var(--font-display)' }}>
                <strong className="text-primary not-italic">{t.whyHomeCare.important}</strong>{" "}
                {t.whyHomeCare.importantText}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyHomeCareSection;
