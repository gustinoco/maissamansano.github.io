import { Award, GraduationCap, Heart, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import photoMaissa from "@/assets/photo-maissa.jpeg";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.about.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.about.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border">
                <img src={photoMaissa} alt="Dra. Maissa Mansano" className="w-full h-full object-cover" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-xl -z-10"></div>
            </div>

            {/* Content */}
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

              {/* Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t.about.experience}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t.about.experienceValue}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t.about.registration}</h4>
                    <p className="text-sm text-muted-foreground">
                      CREFITO 13/438865-F
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t.about.specialty}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t.about.specialtyValue}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t.about.location}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t.about.locationValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
