import { Award, GraduationCap, Heart, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import photoMaissa from "@/assets/photo-maissa.jpeg";
import ScrollReveal from "@/components/ScrollReveal";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.about.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.about.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border">
                  <img src={photoMaissa} alt="Dra. Maissa Mansano" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-xl -z-10"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {t.about.greeting}
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>{t.about.bio1}</p>
                    <p>{t.about.bio2}</p>
                    <p>{t.about.bio3}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: GraduationCap, title: t.about.experience, value: t.about.experienceValue },
                    { icon: Award, title: t.about.registration, value: "CREFITO 13/438865-F" },
                    { icon: Heart, title: t.about.specialty, value: t.about.specialtyValue },
                    { icon: MapPin, title: t.about.location, value: t.about.locationValue },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
