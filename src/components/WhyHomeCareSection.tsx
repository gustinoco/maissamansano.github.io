import { CheckCircle, MapPin, Shield, Users } from "lucide-react";

const WhyHomeCareSection = () => {
  const benefits = [
    {
      icon: MapPin,
      title: "Sem Deslocamento",
      description: "Você não precisa enfrentar trânsito, estacionamento ou transporte público. O tratamento vem até você."
    },
    {
      icon: Shield,
      title: "Ambiente Seguro",
      description: "Seu lar oferece um ambiente familiar e confortável, ideal para a recuperação e tratamento contínuo."
    },
    {
      icon: Users,
      title: "Família Presente",
      description: "Familiares podem acompanhar o tratamento, aprender exercícios e participar ativamente da recuperação."
    },
    {
      icon: CheckCircle,
      title: "Equipamentos Adaptados",
      description: "Utilizamos equipamentos portáteis profissionais, garantindo a mesma qualidade de uma clínica."
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que escolher o Home Care?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O atendimento domiciliar oferece vantagens únicas que potencializam 
              os resultados do seu tratamento fisioterapêutico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
            <p className="text-center text-foreground">
              <strong className="text-primary">Importante:</strong> O atendimento Home Care não é uma alternativa inferior 
              à clínica — é uma escolha inteligente para quem busca conveniência, conforto e resultados. 
              Todos os protocolos e técnicas utilizados seguem os mesmos padrões de excelência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHomeCareSection;
