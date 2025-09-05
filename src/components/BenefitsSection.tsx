import { Coffee, Zap, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Coffee,
      title: "Mais Sabor e Cremosidade",
      description: "Tecnologia avançada que preserva e intensifica o sabor autêntico do café, garantindo cremosidade perfeita em cada xícara."
    },
    {
      icon: Zap,
      title: "Praticidade na Operação",
      description: "Equipamentos intuitivos que simplificam o trabalho da sua equipe, reduzindo tempo de preparo e aumentando a eficiência."
    },
    {
      icon: Heart,
      title: "Encantamento dos Clientes",
      description: "Crie experiências memoráveis com apresentações impecáveis que transformam cada visita em um momento especial."
    },
    {
      icon: TrendingUp,
      title: "Aumento da Rentabilidade",
      description: "Maximize seus lucros com equipamentos que permitem maior ticket médio e fidelização de clientes."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-coffee-cream/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-coffee bg-clip-text text-transparent">
            Por que Escolher Nossos Equipamentos?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Descubra como nossos equipamentos premium podem revolucionar seu negócio e criar experiências únicas para seus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group hover:shadow-coffee-glow transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border-coffee-cream/20 bg-card/50 backdrop-blur"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="p-3 sm:p-4 bg-gradient-coffee rounded-full group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8 text-coffee-cream" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-coffee-dark">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;