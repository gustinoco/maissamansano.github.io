import { Heart, Baby, ShieldCheck, Activity, ArrowDown, Flower2, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

const pelvicIcons = [ShieldCheck, Baby, Heart, Activity, ArrowDown, Sun];

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
