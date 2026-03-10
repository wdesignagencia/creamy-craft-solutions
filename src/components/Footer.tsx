import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoNewtech from "@/assets/logo-newtech.svg";

const Footer = () => (
  <footer className="bg-foreground text-background/70">
    <div className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-4 gap-12">
        <div>
          <img src={logoNewtech} alt="Newtech" className="h-10 mb-5 brightness-0 invert" />
          <p className="text-sm leading-relaxed text-background/50">
            Fabricante brasileira de moinhos de esferas verticais para produção de chocolate e pastas oleaginosas.
          </p>
        </div>
        <div>
          <h4 className="font-medium text-background mb-5 text-[11px] uppercase tracking-[0.2em]">Navegação</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/produtos" className="hover:text-background transition-colors">Produtos</Link></li>
            <li><Link to="/tecnologia" className="hover:text-background transition-colors">Tecnologia</Link></li>
            <li><Link to="/sobre" className="hover:text-background transition-colors">Quem Somos</Link></li>
            <li><Link to="/downloads" className="hover:text-background transition-colors">Downloads</Link></li>
            <li><Link to="/contato" className="hover:text-background transition-colors">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-background mb-5 text-[11px] uppercase tracking-[0.2em]">Produtos</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/produtos/j10" className="hover:text-background transition-colors">Moinho J10</Link></li>
            <li><Link to="/produtos/j60" className="hover:text-background transition-colors">Moinho J60</Link></li>
            <li><Link to="/produtos/j120" className="hover:text-background transition-colors">Moinho J120</Link></li>
            <li><Link to="/produtos/j240" className="hover:text-background transition-colors">Moinho J240</Link></li>
            <li><Link to="/produtos/j500" className="hover:text-background transition-colors">Moinho J500</Link></li>
            <li><Link to="/produtos/t1000d" className="hover:text-background transition-colors">Tanque T1000D</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-background mb-5 text-[11px] uppercase tracking-[0.2em]">Contato</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-background/40" />(81) 99418-5453</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-background/40" />comercial@newtechengenharia.com</li>
            <li className="flex items-start gap-3"><MapPin className="h-4 w-4 text-background/40 mt-0.5" />Rua Jerônimo Heráclio, 1700A — Limoeiro, PE</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 mt-16 pt-8 text-center text-xs text-background/30">
        © {new Date().getFullYear()} Newtech Engenharia Ltda. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
