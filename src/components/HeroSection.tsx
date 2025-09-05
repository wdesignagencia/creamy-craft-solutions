import { Button } from "@/components/ui/button";
import LiquidEther from "./LiquidEther";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Liquid Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#8B4513', '#D2691E', '#F5E6D3', '#CD853F']}
          mouseForce={25}
          cursorSize={120}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={1.8}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-dark/80 via-transparent to-coffee-primary/60 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-coffee-cream animate-fade-in">
            Transforme sua{" "}
            <span className="bg-gradient-caramel bg-clip-text text-transparent">
              Cafeteria
            </span>{" "}
            em um Sucesso
          </h1>
          
          <p className="text-xl md:text-2xl text-coffee-cream/90 mb-8 leading-relaxed animate-fade-in">
            Equipamentos premium que encantam seus clientes a cada xícara e cada colherada.
            Eleve o padrão do seu estabelecimento com tecnologia inovadora.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button size="lg" className="bg-gradient-caramel hover:shadow-caramel-glow px-8 py-6 text-lg">
              Descubra Nossas Soluções
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-coffee-cream text-coffee-cream hover:bg-coffee-cream hover:text-coffee-dark px-8 py-6 text-lg"
            >
              Agendar Demonstração
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-coffee-cream rounded-full flex justify-center">
            <div className="w-1 h-3 bg-coffee-cream rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;