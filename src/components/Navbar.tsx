import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoNewtech from "@/assets/logo-newtech.svg";

const navLinks = [
  { label: "Produtos", href: "/produtos" },
  { label: "Tecnologia", href: "/tecnologia" },
  { label: "Quem Somos", href: "/sobre" },
  { label: "Segmentos", href: "/segmentos" },
  { label: "Downloads", href: "/downloads" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-nav" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logoNewtech} alt="Newtech Máquinas Industriais" className="h-9" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-[13px] font-medium tracking-wide transition-colors hover:text-primary ${
                location.pathname === l.href ? "text-primary" : "text-foreground/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/contato">
            <Button className="hidden sm:inline-flex rounded-full px-6 text-[13px] font-medium">
              Solicitar Orçamento
            </Button>
          </Link>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile */}
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md px-4 pb-6 pt-4 space-y-3 border-t border-border/50">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="block text-sm font-medium py-2 hover:text-primary text-foreground/80"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contato" onClick={() => setOpen(false)}>
            <Button className="w-full rounded-full mt-2 text-sm font-medium">
              Solicitar Orçamento
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
