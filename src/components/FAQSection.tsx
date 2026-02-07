import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o atendimento domiciliar?",
    answer: "Após o primeiro contato, agendamos uma avaliação inicial na sua residência. Nessa avaliação, analisamos sua condição, definimos objetivos e elaboramos um plano de tratamento personalizado. As sessões seguintes são agendadas conforme a frequência recomendada para seu caso."
  },
  {
    question: "Quais equipamentos são utilizados no atendimento?",
    answer: "Utilizo equipamentos portáteis profissionais de alta qualidade, incluindo eletroterapia (TENS, FES), ultrassom terapêutico, laser, materiais para cinesioterapia (faixas elásticas, bolas, rolos) e recursos para terapia manual. Tudo é higienizado antes e após cada atendimento."
  },
  {
    question: "O atendimento domiciliar tem a mesma eficácia de uma clínica?",
    answer: "Sim! O atendimento Home Care segue os mesmos protocolos e padrões de qualidade de uma clínica. Além disso, o ambiente familiar pode potencializar a recuperação, pois o paciente se sente mais confortável e relaxado."
  },
  {
    question: "Qual a área de atendimento?",
    answer: "Atendo em [Cidade/Região]. Para verificar se sua localização está na área de cobertura, entre em contato pelo WhatsApp ou formulário de contato."
  },
  {
    question: "Como é feito o pagamento?",
    answer: "Aceito pagamento via PIX, transferência bancária ou dinheiro. O pagamento pode ser feito por sessão ou em pacotes mensais com condições especiais. Também emito recibo para reembolso de planos de saúde que oferecem essa opção."
  },
  {
    question: "Preciso de espaço específico em casa para o atendimento?",
    answer: "Não é necessário um espaço especial. Uma área com cerca de 2x2 metros é suficiente. Pode ser a sala, quarto ou qualquer ambiente confortável. Avaliamos o espaço na primeira visita e adaptamos os exercícios conforme necessário."
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer: "As sessões têm duração média de 50 a 60 minutos, podendo variar conforme o tratamento e necessidades específicas do paciente."
  },
  {
    question: "Atende convênios ou planos de saúde?",
    answer: "Atualmente trabalho como particular, mas emito recibo detalhado que pode ser utilizado para solicitar reembolso junto ao seu plano de saúde, caso ele ofereça essa opção."
  }
];

const FAQSection = () => {
  return (
    <section id="duvidas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Encontre respostas para as principais perguntas sobre o atendimento domiciliar.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Ainda tem dúvidas?{" "}
              <a href="#contato" className="text-primary hover:underline font-medium">
                Entre em contato
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
