import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Microscope, DollarSign, Award, ShieldCheck, Cog, HeartHandshake, Wrench, IceCreamCone, CakeSlice, Truck } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { products } from "@/data/products";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Newtech — Moinhos de Esferas para Chocolate</title>
        <meta name="description" content="Fabricante brasileira de moinhos de esferas verticais. Produza seu próprio chocolate com tecnologia patenteada, processo em 60 minutos." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Newtech Máquinas Industriais",
          "legalName": "Newtech Engenharia Ltda",
          "description": "Fabricante brasileira de moinhos de esferas verticais para produção e refino de chocolates, pastas de oleaginosas e derivados.",
          "url": "https://www.newtechengenharia.com",
          "telephone": "+55-81-99418-5453",
          "email": "comercial@newtechengenharia.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Jerônimo Heráclio, 1700A",
            "addressLocality": "Limoeiro",
            "addressRegion": "PE",
            "postalCode": "55700-000",
            "addressCountry": "BR"
          },
          "foundingDate": "2020",
          "areaServed": ["BR", "Mercosul"],
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[600px] flex items-end bg-newtech-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=1920&q=80')] bg-cover bg-center" />
        <div className="relative z-20 container mx-auto px-4 pb-20 pt-40">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider text-white max-w-2xl leading-tight">
              <span className="text-primary">Produza</span> Seu Próprio Chocolate
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-white/80 mt-6 max-w-xl leading-relaxed">
              Moinhos de alta performance com tecnologia patenteada. Dos ingredientes básicos brutos ao chocolate fino em 60 minutos.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/produtos">
                <Button size="lg" className="bg-primary hover:bg-newtech-gold-dark text-primary-foreground font-bold rounded-lg text-base px-8">
                  Ver Moinhos
                </Button>
              </Link>
              <Link to="/contato">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-lg text-base px-8">
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Credibility Numbers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, number: "60 min", label: "Processo por batelada" },
              { icon: Microscope, number: "<25μm", label: "Granulometria final" },
              { icon: DollarSign, number: "1/3", label: "Do preço importado" },
              { icon: Award, number: "40 anos", label: "De experiência técnica" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="text-center p-6 rounded-xl border bg-card shadow-card">
                  <item.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="text-3xl md:text-4xl font-black text-foreground">{item.number}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn>
              <div className="p-8 bg-background rounded-xl shadow-card">
                <h2 className="text-2xl font-black uppercase tracking-wide text-foreground mb-6">
                  Hoje você <span className="text-destructive">compra</span> chocolate pronto?
                </h2>
                <ul className="space-y-4 text-muted-foreground">
                  {["Custo alto por kg", "Dependência de fornecedores", "Qualidade variável entre lotes"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="p-8 bg-background rounded-xl shadow-card border-2 border-primary">
                <h2 className="text-2xl font-black uppercase tracking-wide text-foreground mb-6">
                  Com a <span className="text-primary">Newtech</span> você produz
                </h2>
                <ul className="space-y-4 text-muted-foreground">
                  {["Controle total da receita e qualidade", "Economia de até 40% no custo", "Qualidade superior e consistente"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="section-title text-center mb-4">
              <span>Linha</span> de Produtos
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Moinhos de esferas verticais de 10 a 500 kg por batelada
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 100}>
                <div className="bg-card rounded-xl shadow-card border overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-secondary flex items-center justify-center">
                    <Cog className="h-16 w-16 text-muted-foreground/30" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
                    <div className="text-sm text-muted-foreground mt-2 space-y-1">
                      <p>Capacidade: {p.capacity}</p>
                      <p>Produção: {p.dailyProduction}</p>
                    </div>
                    <Link to={`/produtos/${p.slug}`}>
                      <Button className="w-full mt-4 bg-primary hover:bg-newtech-gold-dark text-primary-foreground font-semibold rounded-lg">
                        Ver Detalhes
                      </Button>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Newtech */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="section-title text-center mb-12">
              Por que <span>Newtech</span>?
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Tecnologia de Última Geração", desc: "Alta performance com mínima complexidade. Design aberto sem pressurização, painel de controle objetivo junto à máquina, mecânica operacional elementar de alta eficiência, eliminando manutenção de alto custo e complexa." },
              { icon: Clock, title: "60 Minutos de Processo", desc: "Dos ingredientes básicos às coberturas, esquimós e trufas com granulometria inferior a 25 microns em uma única batelada." },
              { icon: Wrench, title: "Suporte Técnico Incluso", desc: "Todas as formulações necessárias, assistência técnica completa e peças de reposição." },
              { icon: ShieldCheck, title: "Sem Manutenção de Alto Custo", desc: "Mecânica simples e robusta, projetada para operar com o mínimo de intervenção técnica e máxima disponibilidade." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="text-center p-6">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Segments */}
      <section id="segmentos" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="section-title text-center mb-12">
              <span>Segmentos</span> Atendidos
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: IceCreamCone, title: "Sorveterias", desc: "Produza coberturas esquimós, trufas, ganaches especiais e pastas de oleaginosas para suas receitas exclusivas." },
              { icon: CakeSlice, title: "Confeitarias e Panificação", desc: "Coberturas, recheios forneáveis e chocolates em barra para doces e sobremesas premium." },
              { icon: Truck, title: "Distribuidores", desc: "Produção em escala industrial para revenda." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-card rounded-xl shadow-card border p-6 text-center hover:border-primary transition-colors">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                  <Link to="/contato" className="text-sm font-semibold text-primary hover:underline">
                    Ver soluções →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="section-title mb-6">
                Nossa <span>História</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Com mais de 40 anos de desenvolvimento industrial, a Newtech nasceu da experiência em engenharia química aplicada à indústria alimentícia, resultando na patente brasileira de moinhos de esferas verticais.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sediada em Limoeiro, PE, a Newtech atende todo o Brasil e o Mercosul, levando tecnologia de ponta para a indústria alimentícia.
              </p>
              <Link to="/sobre">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-lg">
                  Conheça Nossa História
                </Button>
              </Link>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="h-80 bg-muted rounded-xl flex items-center justify-center">
                <Award className="h-20 w-20 text-muted-foreground/30" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider mb-4">
              Pronto para produzir seu próprio chocolate?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Fale com um especialista hoje e descubra qual moinho é ideal para o seu negócio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/5581994185453?text=Olá! Gostaria de saber mais sobre os moinhos Newtech."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold rounded-lg text-base px-8">
                  WhatsApp
                </Button>
              </a>
              <Link to="/contato">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-bold rounded-lg text-base px-8">
                  Formulário de Contato
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

// X icon for problem list
const X = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

export default Home;
