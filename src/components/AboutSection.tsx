import { Award, BookOpen, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">👩‍⚕️</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Foto da Profissional</p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-xl -z-10"></div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sobre Mim
              </h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Olá! Sou fisioterapeuta apaixonada pelo cuidado humanizado e pela reabilitação 
                funcional. Escolhi dedicar minha carreira ao atendimento domiciliar porque 
                acredito que o ambiente do paciente é fundamental para uma recuperação efetiva.
              </p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Meu objetivo é proporcionar tratamentos de excelência no conforto do seu lar, 
                respeitando sua rotina e individualidade. Cada paciente é único, e cada 
                tratamento é personalizado para atender suas necessidades específicas.
              </p>

              {/* Credentials */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Formação Acadêmica</h4>
                    <p className="text-sm text-muted-foreground">
                      Graduação em Fisioterapia - [Nome da Universidade]
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Especializações</h4>
                    <p className="text-sm text-muted-foreground">
                      [Especializações e cursos relevantes]
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Registro Profissional</h4>
                    <p className="text-sm text-muted-foreground">
                      CREFITO 13/438865-F
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
