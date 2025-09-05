import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      {/* Contact Bar */}
      <div className="bg-coffee-dark text-coffee-cream py-2 px-4 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">(11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden lg:inline">WhatsApp: (11) 88888-8888</span>
            </div>
          </div>
          <div className="text-coffee-cream/80 hidden lg:block">
            Segunda a Sexta: 8h às 18h | Finais de Semana: 10h às 19h
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-coffee bg-clip-text text-transparent">
              CoffeeEquip Pro
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
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

          <div className="flex items-center gap-2">
            <Button className="bg-gradient-caramel hover:shadow-caramel-glow transition-all duration-300 hidden sm:inline-flex text-sm px-4 py-2 lg:px-6 lg:py-3 lg:text-base">
              <span className="hidden md:inline">Solicitar </span>Demonstração
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-coffee-cream/20">
            <div className="flex flex-col space-y-4 pt-4">
              <a 
                href="#home" 
                className="text-foreground hover:text-coffee-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#produtos" 
                className="text-foreground hover:text-coffee-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </a>
              <a 
                href="#solucoes" 
                className="text-foreground hover:text-coffee-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Soluções
              </a>
              <a 
                href="#sobre" 
                className="text-foreground hover:text-coffee-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </a>
              <a 
                href="#contato" 
                className="text-foreground hover:text-coffee-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <Button className="bg-gradient-caramel hover:shadow-caramel-glow transition-all duration-300 sm:hidden mt-4">
                Solicitar Demonstração
              </Button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;