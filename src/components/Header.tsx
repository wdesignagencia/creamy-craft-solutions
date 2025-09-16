import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      {/* Contact Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">(19) 3227-7077</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden lg:inline">WhatsApp: (19) 9804-6675</span>
            </div>
          </div>
          <div className="text-secondary-foreground/80 hidden lg:block">
            Segunda a Sexta: 8h às 18h | Sábado: 9h às 13h
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold text-primary">
              ACOUSTIC AUDIO
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#hero" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">
              Produtos
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Serviços
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre Nós
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hidden sm:inline-flex text-sm px-4 py-2 lg:px-6 lg:py-3 lg:text-base font-semibold">
              <span className="hidden md:inline">Solicitar </span>Orçamento
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#hero" className="text-foreground hover:text-primary transition-colors py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
                Produtos
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
                Serviços
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
                Sobre Nós
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
                Contato
              </a>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 sm:hidden mt-4 font-semibold">
                Solicitar Orçamento
              </Button>
            </div>
          </div>}
      </nav>
    </div>;
};
export default Header;