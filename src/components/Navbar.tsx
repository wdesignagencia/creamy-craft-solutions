import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Produtos", href: "/produtos" },
  { label: "Tecnologia", href: "/tecnologia" },
  { label: "Quem Somos", href: "/sobre" },
  { label: "Segmentos", href: "/#segmentos" },
  { label: "Downloads", href: "/downloads" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur shadow-nav">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="text-2xl font-black tracking-wider text-primary uppercase">Newtech</span>
          <span className="hidden sm:inline text-sm text-muted-foreground font-medium tracking-wide">Máquinas Industriais</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary ${
                location.pathname === l.href ? "text-primary" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/contato">
            <Button className="hidden sm:inline-flex bg-primary hover:bg-newtech-gold-dark text-primary-foreground font-semibold rounded-lg">
              Solicitar Orçamento
            </Button>
          </Link>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile */}
      {open && (
        <div className="lg:hidden border-t bg-background px-4 pb-6 pt-4 space-y-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="block text-sm font-semibold uppercase tracking-wide py-2 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contato" onClick={() => setOpen(false)}>
            <Button className="w-full bg-primary hover:bg-newtech-gold-dark text-primary-foreground font-semibold rounded-lg mt-2">
              Solicitar Orçamento
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
