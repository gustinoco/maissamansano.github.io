import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <section id="duvidas" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: sticky title */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
              <ScrollReveal>
                <span className="editorial-label">FAQ</span>
                <div className="editorial-divider mt-3 mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                  {t.faq.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t.faq.description}
                </p>
                <div className="mt-6">
                  <p className="text-muted-foreground text-sm">
                    {t.faq.stillQuestions}{" "}
                    <a href="#contato" className="text-primary hover:underline font-semibold">
                      {t.faq.contactUs} →
                    </a>
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: accordion */}
            <div className="lg:col-span-8">
              <ScrollReveal delay={0.2}>
                <Accordion type="single" collapsible className="w-full">
                  {t.faq.items.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                      <AccordionTrigger className="text-left text-foreground hover:text-primary py-5 text-base font-semibold">
                        <span className="flex items-start gap-4">
                          <span className="text-primary/30 text-sm font-mono mt-0.5">{String(index + 1).padStart(2, '0')}</span>
                          <span>{faq.question}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pl-10 pb-5 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
