import { Home, ShieldCheck, Bone, Hand, Target, Zap, Move, Dumbbell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

const serviceIcons = [Home, ShieldCheck, Bone, Hand, Target, Zap, Move, Dumbbell];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.services.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.services.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {t.services.items.map((service, index) => {
            const IconComponent = serviceIcons[index];
            return (
              <ScrollReveal key={index} delay={index * 0.08}>
                <Card className="group hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.details}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              {t.services.notFound}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
