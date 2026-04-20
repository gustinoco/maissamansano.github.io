import { Award, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

const CredentialsStrip = () => {
  const { t } = useLanguage();

  const credentials = [
    {
      icon: Award,
      title: t.credentials.abfpTitle,
      desc: t.credentials.abfpDesc,
    },
    {
      icon: ShieldCheck,
      title: t.credentials.crefitoTitle,
      desc: t.credentials.crefitoDesc,
    },
    {
      icon: Sparkles,
      title: t.credentials.pilatesTitle,
      desc: t.credentials.pilatesDesc,
    },
  ];

  return (
    <section
      className="py-12 bg-primary/5 border-y border-primary/10"
      aria-label="Credenciais profissionais"
    >
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {credentials.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-card rounded-sm border border-border hover:border-primary/40 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-sm border border-primary/30 bg-primary/10 flex items-center justify-center">
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
