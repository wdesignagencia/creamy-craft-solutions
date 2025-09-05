import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Coffee } from "lucide-react";
import espressoMachine from "@/assets/espresso-machine.jpg";
import creamDispenser from "@/assets/cream-dispenser.jpg";
import iceCreamMachine from "@/assets/ice-cream-machine.jpg";
import coffeeShopInterior from "@/assets/coffee-shop-interior.jpg";

const ProductShowcase = () => {
  const products = [
    {
      image: espressoMachine,
      title: "Cappuccino",
      description: "Sistema profissional completo"
    },
    {
      image: creamDispenser,
      title: "Espresso",
      description: "Máquina italiana premium"
    },
    {
      image: iceCreamMachine,
      title: "Frappé",
      description: "Bebidas geladas perfeitas"
    },
    {
      image: coffeeShopInterior,
      title: "Latte Art",
      description: "Equipamentos para decoração"
    }
  ];

  return (
    <section className="py-20 bg-coffee-cream/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="bg-coffee-primary/10 rounded-coffee p-2 w-fit mb-4">
              <Coffee className="h-6 w-6 text-coffee-primary" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-coffee-dark">
              Manhã Feliz -
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-coffee-primary">
              Equipamentos Premium
            </h3>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Descubra nossa linha completa de equipamentos profissionais. 
              Cada máquina é projetada para entregar a qualidade excepcional 
              que seus clientes merecem.
            </p>

            <Button 
              size="lg" 
              className="bg-coffee-primary hover:bg-coffee-dark text-white px-8 py-6 text-lg font-semibold rounded-coffee group"
            >
              Ver Catálogo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Products Grid */}
          <div className="grid grid-cols-2 gap-4">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer hover:shadow-coffee-glow transition-all duration-300 border-coffee-cream/20"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-coffee">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-coffee-dark mb-1">{product.title}</h4>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;