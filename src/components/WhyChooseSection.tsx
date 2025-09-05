import { Button } from "@/components/ui/button";
import { Coffee, Award, Clock, Users } from "lucide-react";

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gradient-coffee">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-coffee-cream">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que Escolher Nossos Equipamentos?
            </h2>
            <p className="text-coffee-cream/90 text-lg mb-8 leading-relaxed">
              Mais de 15 anos de experiência no mercado, oferecendo soluções 
              inovadoras que transformam cafeterias em negócios de sucesso.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-caramel rounded-coffee flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Qualidade Premium</h4>
                  <p className="text-coffee-cream/80">Equipamentos certificados e duráveis</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-caramel rounded-coffee flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Suporte 24/7</h4>
                  <p className="text-coffee-cream/80">Assistência técnica especializada</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-caramel rounded-coffee flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Treinamento Completo</h4>
                  <p className="text-coffee-cream/80">Capacitação para sua equipe</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-caramel hover:bg-caramel-dark text-white px-8 py-6 text-lg font-semibold rounded-coffee"
            >
              Saiba Mais
            </Button>
          </div>

          {/* Right Content - Promotional */}
          <div className="bg-coffee-cream rounded-coffee p-8 text-center">
            <div className="mb-6">
              <Coffee className="h-16 w-16 text-coffee-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-coffee-dark mb-2">
                Oferta Especial
              </h3>
              <p className="text-coffee-primary font-medium">
                200 off from 10 am
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Desconto especial para novos clientes que agendarem 
                demonstração até o final do mês
              </p>
              <Button 
                className="bg-coffee-primary hover:bg-coffee-dark text-white px-8 py-3 rounded-coffee"
              >
                Agendar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;