import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PixelTransition from "./PixelTransition";
import espressoMachine from "@/assets/espresso-machine.jpg";
import creamDispenser from "@/assets/cream-dispenser.jpg";
import iceCreamMachine from "@/assets/ice-cream-machine.jpg";
import coffeeShopInterior from "@/assets/coffee-shop-interior.jpg";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "Sistemas para Chantilly Premium",
      description: "Equipamentos profissionais para chantilly perfeito em segundos",
      features: ["Textura cremosa garantida", "Operação simples", "Alta durabilidade"],
      image: creamDispenser,
      demoImage: creamDispenser
    },
    {
      id: 2,
      title: "Equipamentos de Gaseificação",
      description: "Tecnologia avançada para bebidas com gás que surpreendem",
      features: ["Gaseificação controlada", "Sabor preservado", "Apresentação impecável"],
      image: espressoMachine,
      demoImage: espressoMachine
    },
    {
      id: 3,
      title: "Máquinas para Cremes Especiais",
      description: "Crie texturas cremosas irresistíveis para seus clientes",
      features: ["Múltiplas texturas", "Controle de temperatura", "Design moderno"],
      image: iceCreamMachine,
      demoImage: iceCreamMachine
    },
    {
      id: 4,
      title: "Acessórios Profissionais",
      description: "Complete sua operação com acessórios de alta qualidade",
      features: ["Material premium", "Fácil manutenção", "Garantia estendida"],
      image: coffeeShopInterior,
      demoImage: coffeeShopInterior
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-gradient-to-b from-coffee-cream/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-coffee bg-clip-text text-transparent">
            Produtos em Destaque
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça nossa linha premium de equipamentos que estão revolucionando cafeterias e sorveterias em todo o país.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id}
              className="group overflow-hidden border-coffee-cream/20 hover:shadow-coffee-glow transition-all duration-300"
            >
              <CardHeader className="p-0">
                <PixelTransition
                  aspectRatio="75%"
                  pixelColor="hsl(var(--coffee-primary))"
                  firstContent={
                    <div className="w-full h-full bg-gradient-coffee flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  }
                  secondContent={
                    <div className="w-full h-full bg-gradient-caramel flex items-center justify-center p-4">
                      <div className="text-center text-coffee-cream">
                        <h4 className="font-bold text-lg mb-2">Em Funcionamento</h4>
                        <img 
                          src={product.demoImage} 
                          alt={`${product.title} em ação`}
                          className="w-full h-32 object-cover rounded mb-2"
                        />
                        <p className="text-sm opacity-90">
                          Veja o resultado final
                        </p>
                      </div>
                    </div>
                  }
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 text-coffee-dark">
                  {product.title}
                </CardTitle>
                <CardDescription className="mb-4 text-base">
                  {product.description}
                </CardDescription>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-gradient-caramel rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-gradient-coffee hover:bg-gradient-caramel hover:shadow-coffee-glow transition-all duration-300"
                >
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-coffee-primary text-coffee-primary hover:bg-coffee-primary hover:text-coffee-cream px-8"
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;