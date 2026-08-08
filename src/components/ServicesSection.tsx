import { Home, Heart, Activity, Accessibility, Sparkles, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { openUrlWithConversion } from "@/lib/conversion";

const serviceIcons = [Home, Heart, Activity, Accessibility, Sparkles];

const ServicesSection = () => {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/5567992219746?text=${encodeURIComponent(t.contact.whatsappMessage)}`;

  const handleWhatsApp = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    openUrlWithConversion(whatsappUrl, {
      source: "servicos",
      cta_label: t.services.cta,
    });
  };

  return (
    <section id="servicos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mb-10 md:mb-14">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-6xl mx-auto rounded-sm overflow-hidden">
          {t.services.items.map((service, index) => {
            const IconComponent = serviceIcons[index] ?? Home;
            return (
              <ScrollReveal key={index} delay={index * 0.06}>
                <div className="bg-card p-6 md:p-8 group hover:bg-accent/30 transition-colors h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-primary/30 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors">
                      <IconComponent className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <p className="text-muted-foreground italic" style={{ fontFamily: 'var(--font-display)' }}>
              {t.services.notFound}
            </p>
            <Button size="lg" className="mt-6 w-full sm:w-auto text-sm uppercase tracking-widest px-8 py-6" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleWhatsApp}>
                <MessageCircle className="h-5 w-5" />
                {t.services.cta}
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
