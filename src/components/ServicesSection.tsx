import { Activity, Brain, Baby, Bone, Heart, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Bone,
    title: "Fisioterapia Ortopédica",
    description: "Tratamento de lesões musculoesqueléticas, pós-operatórios, fraturas, entorses e dores crônicas.",
    details: "Através de técnicas manuais, exercícios terapêuticos e recursos físicos, trabalhamos para restaurar a função e aliviar a dor."
  },
  {
    icon: Brain,
    title: "Fisioterapia Neurológica",
    description: "Reabilitação para pacientes com AVC, Parkinson, esclerose múltipla e outras condições neurológicas.",
    details: "Foco na recuperação de movimentos, equilíbrio, coordenação e independência funcional."
  },
  {
    icon: Heart,
    title: "Fisioterapia Cardiorrespiratória",
    description: "Reabilitação pulmonar e cardíaca, pré e pós-operatório de cirurgias torácicas.",
    details: "Exercícios respiratórios, técnicas de higiene brônquica e condicionamento cardiovascular."
  },
  {
    icon: Activity,
    title: "Fisioterapia Geriátrica",
    description: "Atendimento especializado para idosos, focando em mobilidade, equilíbrio e prevenção de quedas.",
    details: "Programa personalizado para manter a autonomia e qualidade de vida na terceira idade."
  },
  {
    icon: Baby,
    title: "Fisioterapia Pediátrica",
    description: "Estimulação do desenvolvimento motor em bebês e crianças com atrasos ou condições especiais.",
    details: "Abordagem lúdica e acolhedora, respeitando o ritmo de cada criança."
  },
  {
    icon: Zap,
    title: "Pilates Terapêutico",
    description: "Exercícios de fortalecimento e alongamento adaptados para reabilitação e condicionamento.",
    details: "Método seguro e eficaz para fortalecer o core, melhorar postura e prevenir lesões."
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serviços Especializados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de tratamentos fisioterapêuticos, todos realizados 
            no conforto da sua casa com equipamentos profissionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{service.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Não encontrou o serviço que precisa? Entre em contato para uma avaliação personalizada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
