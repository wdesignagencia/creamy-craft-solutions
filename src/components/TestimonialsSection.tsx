import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const stats = [
    { number: "500+", label: "Cafeterias Atendidas" },
    { number: "1M+", label: "Produtos Servidos" },
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "15+", label: "Anos de Experiência" }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      business: "Café Aroma & Sabor",
      location: "São Paulo - SP",
      text: "Os equipamentos da CoffeeEquip Pro transformaram completamente meu negócio. O chantilly fica perfeito e meus clientes sempre comentam sobre a qualidade das bebidas.",
      rating: 5
    },
    {
      name: "João Santos",
      business: "Sorveteria Gelato Premium",
      location: "Rio de Janeiro - RJ",
      text: "Investir nos equipamentos foi a melhor decisão que tomei. O aumento no ticket médio foi de 40% e a qualidade dos produtos melhorou drasticamente.",
      rating: 5
    },
    {
      name: "Ana Costa",
      business: "Cafeteria Urban Coffee",
      location: "Belo Horizonte - MG",
      text: "Além da excelente qualidade dos equipamentos, o suporte técnico é excepcional. Sempre prontos para ajudar e orientar nossa equipe.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-coffee-dark/5">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-coffee bg-clip-text text-transparent">
            Seu Negócio Merece o Melhor
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
            Nossos equipamentos elevam o padrão do seu estabelecimento, proporcionando experiências únicas 
            que geram resultados comprovados e clientes fiéis.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-caramel bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-coffee-dark">
            O que Nossos Clientes Dizem
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-coffee-cream/20 hover:shadow-coffee-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-coffee-primary mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-coffee-cream/20 pt-4">
                    <div className="font-bold text-coffee-dark">{testimonial.name}</div>
                    <div className="text-coffee-primary font-medium">{testimonial.business}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-coffee rounded-coffee p-12">
          <h3 className="text-3xl font-bold text-coffee-cream mb-4">
            Pronto para Transformar seu Negócio?
          </h3>
          <p className="text-coffee-cream/90 text-lg mb-8 max-w-2xl mx-auto">
            Agende uma demonstração gratuita e descubra como nossos equipamentos podem 
            revolucionar sua cafeteria ou sorveteria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-caramel hover:bg-caramel-dark text-white px-8 py-4 rounded-coffee font-semibold transition-all duration-300 hover:shadow-caramel-glow">
              Agendar Demonstração
            </button>
            <button className="border-2 border-coffee-cream text-coffee-cream hover:bg-coffee-cream hover:text-coffee-dark px-8 py-4 rounded-coffee font-semibold transition-all duration-300">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;