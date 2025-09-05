import { Button } from "@/components/ui/button";
import LiquidEther from "./LiquidEther";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Liquid Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#3C1810', '#8B4513', '#D2691E', '#F5E6D3', '#CD853F']}
          mouseForce={30}
          cursorSize={150}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={2.0}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-dark/80 via-transparent to-coffee-primary/60 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-coffee-cream animate-fade-in">
            Saboreie o{" "}
            <span className="bg-gradient-caramel bg-clip-text text-transparent">
              Equipamento
            </span>{" "}
            Perfeito!
          </h1>
          
          <p className="text-xl md:text-2xl text-coffee-cream/90 mb-12 leading-relaxed animate-fade-in max-w-3xl mx-auto">
            Equipamentos premium que transformam sua cafeteria em um sucesso. 
            Tecnologia inovadora para cada xícara perfeita.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
            <Button size="lg" className="bg-gradient-caramel hover:shadow-caramel-glow px-10 py-6 text-lg font-semibold rounded-coffee">
              Descubra Agora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-coffee-cream text-coffee-cream hover:bg-coffee-cream hover:text-coffee-dark px-10 py-6 text-lg font-semibold rounded-coffee"
            >
              Agendar Demo
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