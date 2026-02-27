import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  const { t } = useLanguage();
  const whatsappNumber = "595981345476";
  const whatsappMessage = encodeURIComponent(t.contact.whatsappMessage);

  return (
    <section id="contato" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <span className="editorial-label">Contato</span>
              <div className="editorial-divider mt-3 mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                {t.contact.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                {t.contact.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact details — editorial list */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-border rounded-sm overflow-hidden">
                {[
                  { icon: Phone, title: t.contact.phone, lines: ["+595 981 345476"] },
                  { icon: MapPin, title: t.contact.area, lines: ["Ponta Porã - MS (Brasil)", "Pedro Juan Caballero (Paraguai)"] },
                  { icon: Clock, title: t.contact.hours, lines: [t.contact.hoursWeekday, t.contact.hoursSaturday] },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="p-6 border-b sm:odd:border-r border-border last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <item.icon className="h-4 w-4 text-primary" />
                        <h3 className="text-xs uppercase tracking-[0.15em] font-semibold text-muted-foreground">{item.title}</h3>
                      </div>
                      {item.lines.map((line, j) => (
                        <p key={j} className="text-sm text-foreground font-medium">{line}</p>
                      ))}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-primary text-primary-foreground p-8 md:p-10 rounded-sm h-full flex flex-col justify-center">
                  <MessageCircle className="h-10 w-10 mb-6 opacity-80" />
                  <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    {t.contact.whatsappTitle}
                  </h3>
                  <p className="mb-8 opacity-85 leading-relaxed">
                    {t.contact.whatsappDesc}
                  </p>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full text-sm uppercase tracking-widest"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.contact.whatsappButton}
                    </a>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
