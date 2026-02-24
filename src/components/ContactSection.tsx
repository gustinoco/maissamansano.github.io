import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  const { t } = useLanguage();
  const whatsappNumber = "595981345476";
  const whatsappMessage = encodeURIComponent(t.contact.whatsappMessage);

  return (
    <section id="contato" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.contact.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.contact.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                { icon: Phone, title: t.contact.phone, lines: ["+595 981 345476"] },
                { icon: Mail, title: t.contact.email, lines: ["contato@fisiohomecare.com.br"] },
                { icon: MapPin, title: t.contact.area, lines: ["Ponta Porã - MS (Brasil)", "Pedro Juan Caballero (Paraguai)"] },
                { icon: Clock, title: t.contact.hours, lines: [t.contact.hoursWeekday, t.contact.hoursSaturday] },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="left">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                          {item.lines.map((line, j) => (
                            <p key={j} className="text-muted-foreground">{line}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex flex-col justify-center h-full">
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <MessageCircle className="h-16 w-16 mx-auto mb-6 opacity-90" />
                      <h3 className="text-2xl font-bold mb-4">
                        {t.contact.whatsappTitle}
                      </h3>
                      <p className="mb-6 opacity-90">
                        {t.contact.whatsappDesc}
                      </p>
                      <Button 
                        size="lg" 
                        variant="secondary"
                        className="w-full text-base"
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
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
