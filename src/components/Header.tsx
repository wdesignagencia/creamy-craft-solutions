import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      {/* Contact Bar */}
      <div className="bg-coffee-dark text-coffee-cream py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp: (11) 88888-8888</span>
            </div>
          </div>
          <div className="text-coffee-cream/80">
            Segunda a Sexta: 8h às 18h | Finais de Semana: 10h às 19h
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-coffee bg-clip-text text-transparent">
              CoffeeEquip Pro
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-coffee-primary transition-colors">
              Home
            </a>
            <a href="#produtos" className="text-foreground hover:text-coffee-primary transition-colors">
              Produtos
            </a>
            <a href="#solucoes" className="text-foreground hover:text-coffee-primary transition-colors">
              Soluções
            </a>
            <a href="#sobre" className="text-foreground hover:text-coffee-primary transition-colors">
              Sobre Nós
            </a>
            <a href="#contato" className="text-foreground hover:text-coffee-primary transition-colors">
              Contato
            </a>
          </div>

          <Button className="bg-gradient-caramel hover:shadow-caramel-glow transition-all duration-300">
            Solicitar Demonstração
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;