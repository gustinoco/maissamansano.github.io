import { Award, ShieldCheck, Home, BriefcaseMedical, UserRoundCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

const CredentialsStrip = () => {
  const { t } = useLanguage();

  const credentials = [
    {
      icon: ShieldCheck,
      title: t.credentials.crefitoTitle,
      desc: t.credentials.crefitoDesc,
    },
    {
      icon: Award,
      title: t.credentials.abfpTitle,
      desc: t.credentials.abfpDesc,
    },
    {
      icon: Home,
      title: t.credentials.homeTitle,
      desc: t.credentials.homeDesc,
    },
    {
      icon: BriefcaseMedical,
      title: t.credentials.equipmentTitle,
      desc: t.credentials.equipmentDesc,
    },
    {
      icon: UserRoundCheck,
      title: t.credentials.individualTitle,
      desc: t.credentials.individualDesc,
    },
  ];

  return (
    <section
      className="py-8 md:py-10 bg-primary/5 border-y border-primary/10"
      aria-label="Credenciais profissionais"
    >
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
            {credentials.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 bg-card rounded-sm border border-border hover:border-primary/40 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-sm border border-primary/30 bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-snug mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CredentialsStrip;
