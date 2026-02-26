import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-newtech-dark text-white/80">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-black text-primary uppercase tracking-wider mb-4">Newtech</h3>
          <p className="text-sm leading-relaxed">
            Fabricante brasileira de moinhos de esferas verticais para produção de chocolate e pastas oleaginosas.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/produtos" className="hover:text-primary transition-colors">Produtos</Link></li>
            <li><Link to="/tecnologia" className="hover:text-primary transition-colors">Tecnologia</Link></li>
            <li><Link to="/sobre" className="hover:text-primary transition-colors">Quem Somos</Link></li>
            <li><Link to="/downloads" className="hover:text-primary transition-colors">Downloads</Link></li>
            <li><Link to="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Produtos</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/produtos/j10" className="hover:text-primary transition-colors">Moinho J10</Link></li>
            <li><Link to="/produtos/j60" className="hover:text-primary transition-colors">Moinho J60</Link></li>
            <li><Link to="/produtos/j120" className="hover:text-primary transition-colors">Moinho J120</Link></li>
            <li><Link to="/produtos/j240" className="hover:text-primary transition-colors">Moinho J240</Link></li>
            <li><Link to="/produtos/j500" className="hover:text-primary transition-colors">Moinho J500</Link></li>
            <li><Link to="/produtos/t1000d" className="hover:text-primary transition-colors">Tanque T1000D</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" />(81) 99418-5453</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" />comercial@newtechengenharia.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5" />Rua Jerônimo Heráclio, 1700A — Limoeiro, PE</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Newtech Engenharia Ltda. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
