import { Heart, Baby, ShieldCheck, Activity, Flower2, Sun, Sparkles, Target, Clock, CheckCircle2, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";
import laserpulse480 from "@/assets/laserpulse-480.jpeg";
import laserpulse760 from "@/assets/laserpulse-760.jpeg";

const pelvicIcons = [ShieldCheck, Baby, Heart, Activity, Sun];
const laserFeatureIcons = [Baby, Target, Clock];

const PelvicSection = () => {
  const { t } = useLanguage();

  return (
    <section id="pelvica" className="py-24 bg-accent/20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mb-6">
            <span className="editorial-label">{t.pelvic.label}</span>
            <div className="editorial-divider mt-3 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              {t.pelvic.title}
            </h2>
            <p className="text-xl text-primary font-medium italic mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              {t.pelvic.subtitle}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.pelvic.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Expertise badge */}
        <ScrollReveal delay={0.1}>
          <div className="bg-primary/10 border border-primary/20 rounded-sm p-6 mb-12 max-w-3xl">
            <div className="flex items-start gap-4">
              <Flower2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground font-medium leading-relaxed">
                {t.pelvic.expertise}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Laser therapy feature */}
        <ScrollReveal delay={0.12}>
          <div id="laserterapia" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-px bg-border max-w-6xl mx-auto rounded-sm overflow-hidden mb-12">
            <span id="laserterapia-pos-parto" className="sr-only scroll-mt-28" aria-hidden="true" />
            <div className="lg:col-span-5 bg-card p-6 md:p-8 flex items-center justify-center">
              <img
                src={laserpulse760}
                srcSet={`${laserpulse480} 478w, ${laserpulse760} 757w`}
                sizes="(min-width: 1024px) 34vw, 88vw"
                alt={t.pelvic.laser.imageAlt}
                width="757"
                height="760"
                className="w-full max-w-md object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="lg:col-span-7 bg-card p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 border border-primary/30 rounded-sm flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <span className="editorial-label">{t.pelvic.laser.label}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4">
                {t.pelvic.laser.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.pelvic.laser.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
                {t.pelvic.laser.features.map((feature, index) => {
                  const IconComponent = laserFeatureIcons[index];
                  return (
                    <div key={feature} className="bg-background p-4">
                      <IconComponent className="h-5 w-5 text-primary mb-3" />
                      <p className="text-sm font-semibold text-foreground leading-snug">
                        {feature}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="text-sm uppercase tracking-[0.15em] font-semibold text-foreground mb-3">
                    {t.pelvic.laser.conditionsTitle}
                  </h4>
                  <ul className="space-y-2">
                    {t.pelvic.laser.conditions.map((condition) => (
                      <li key={condition} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-l border-border pl-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Stethoscope className="h-4 w-4 text-primary" />
                    <h4 className="text-sm uppercase tracking-[0.15em] font-semibold text-foreground">
                      {t.pelvic.laser.approachTitle}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.pelvic.laser.approach}
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground/70 leading-relaxed mt-5">
                {t.pelvic.laser.note}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Why section */}
        <ScrollReveal delay={0.15}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              {t.pelvic.whyTitle}
            </h3>
            <p className="text-muted-foreground mb-8">
              {t.pelvic.whyDescription}
            </p>
          </div>
        </ScrollReveal>

        {/* Pelvic services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-6xl mx-auto rounded-sm overflow-hidden">
          {t.pelvic.items.map((item, index) => {
            const IconComponent = pelvicIcons[index];
            return (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div className="bg-card p-8 group hover:bg-primary/5 transition-colors h-full">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 border border-primary/30 rounded-sm flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                      <IconComponent className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <p className="text-sm text-muted-foreground/70 leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <Button size="lg" className="text-sm uppercase tracking-widest px-8 py-6" asChild>
              <a href="#contato">{t.pelvic.cta}</a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PelvicSection;
