import { Home, ShieldCheck, Bone, Hand, Target, Zap, Move, Dumbbell } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

const serviceIcons = [Home, ShieldCheck, Bone, Hand, Target, Zap, Move, Dumbbell];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <span className="editorial-label">Especialidades</span>
            <div className="editorial-divider mt-3 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              {t.services.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.services.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Editorial grid — alternating large/small cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border max-w-6xl mx-auto">
          {t.services.items.map((service, index) => {
            const IconComponent = serviceIcons[index];
            const isLarge = index === 0 || index === 3 || index === 5 || index === 6;
            return (
              <ScrollReveal key={index} delay={index * 0.06}>
                <div className={`bg-card p-8 md:p-10 group hover:bg-accent/30 transition-colors h-full ${isLarge ? 'md:col-span-1' : ''}`}>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-primary/30 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors">
                      <IconComponent className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                      <p className="text-sm text-muted-foreground/70 leading-relaxed">{service.details}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground italic" style={{ fontFamily: 'var(--font-display)' }}>
              {t.services.notFound}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
