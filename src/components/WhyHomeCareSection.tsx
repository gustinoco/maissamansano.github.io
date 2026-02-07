import { CheckCircle, MapPin, Shield, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyHomeCareSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: MapPin,
      title: t.whyHomeCare.benefit1Title,
      description: t.whyHomeCare.benefit1Desc
    },
    {
      icon: Shield,
      title: t.whyHomeCare.benefit2Title,
      description: t.whyHomeCare.benefit2Desc
    },
    {
      icon: Users,
      title: t.whyHomeCare.benefit3Title,
      description: t.whyHomeCare.benefit3Desc
    },
    {
      icon: CheckCircle,
      title: t.whyHomeCare.benefit4Title,
      description: t.whyHomeCare.benefit4Desc
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.whyHomeCare.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.whyHomeCare.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
            <p className="text-center text-foreground">
              <strong className="text-primary">{t.whyHomeCare.important}</strong> {t.whyHomeCare.importantText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHomeCareSection;
