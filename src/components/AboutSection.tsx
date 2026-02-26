import { Award, GraduationCap, Heart, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import photoMaissa from "@/assets/photo-maissa.jpeg";
import ScrollReveal from "@/components/ScrollReveal";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <span className="editorial-label">{t.about.title}</span>
              <div className="editorial-divider mt-3 mb-6" />
              <p className="text-lg text-muted-foreground max-w-lg">
                {t.about.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Photo — editorial crop */}
            <ScrollReveal direction="left" className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden rounded-sm">
                  <img src={photoMaissa} alt="Dra. Maissa Mansano" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                {/* Caption strip */}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Fisioterapeuta</p>
                  <p className="text-sm font-semibold text-foreground">CREFITO 13/438865-F</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Bio — editorial text layout */}
            <ScrollReveal direction="right" delay={0.2} className="lg:col-span-7">
              <div className="space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {t.about.greeting}
                </h3>

                <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                  <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1" style={{ fontFamily: 'var(--font-body)' }}>
                    {t.about.bio1}
                  </p>
                  <p>{t.about.bio2}</p>
                  <p>{t.about.bio3}</p>
                </div>

                {/* Info grid */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                  {[
                    { icon: GraduationCap, title: t.about.experience, value: t.about.experienceValue },
                    { icon: Award, title: t.about.registration, value: "CREFITO 13/438865-F" },
                    { icon: Heart, title: t.about.specialty, value: t.about.specialtyValue },
                    { icon: MapPin, title: t.about.location, value: t.about.locationValue },
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon className="h-4 w-4 text-primary" />
                        <h4 className="text-xs uppercase tracking-[0.15em] font-semibold text-muted-foreground">{item.title}</h4>
                      </div>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
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
