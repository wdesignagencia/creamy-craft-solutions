import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, ShieldCheck, Wrench, ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { products } from "@/data/products";
import { Helmet } from "react-helmet-async";
import Balatro from "@/components/Balatro";

import segSorveterias from "@/assets/segment-sorveterias.png";
import segConfeitarias from "@/assets/segment-confeitarias.png";
import segDistribuidores from "@/assets/segment-distribuidores.png";

// Progressive sizing: bigger model number = taller image
// J10 increased 30% (was h-36, now h-44 ~ equivalent)
const productImageHeight: Record<string, string> = {
  j10: "h-44",
  j60: "h-40",
  j120: "h-44",
  j240: "h-48",
  j500: "h-56",
  t1000d: "h-48",
};

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
      <section className="relative min-h-[90vh] flex items-end bg-newtech-dark overflow-hidden">
        <Balatro />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
        <div className="relative z-20 container mx-auto px-4 pb-24 pt-40">
          <FadeIn>
            <p className="label-uppercase text-background/50 mb-4">Moinhos de Esferas Verticais</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white max-w-3xl leading-[1.05] tracking-tight">
               Produza seu próprio{" "}
              <span className="font-display italic text-white/80">chocolate</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg text-white/60 mt-6 max-w-lg leading-relaxed">
              Dos ingredientes brutos ao chocolate fino em 60 minutos. Tecnologia patenteada, fabricação brasileira.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link to="/produtos">
                <Button size="lg" className="rounded-full px-8 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary border border-primary">
                  Conheça os moinhos
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
              <Link to="/contato">
                <Button size="lg" variant="outline" className="rounded-full px-8 text-sm font-medium border-white/20 text-white hover:bg-white hover:text-foreground hover:border-white">
                  Fale conosco
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Numbers — minimal strip */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "60 min", label: "por batelada" },
              { value: "<25μm", label: "granulometria" },
              { value: "⅓", label: "do preço importado" },
              { value: "40+", label: "anos de expertise" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <FadeIn>
              <p className="label-uppercase text-destructive mb-4">O problema</p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
                Comprar chocolate pronto custa caro e limita sua produção.
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                {["Custo alto por kg", "Dependência de fornecedores", "Qualidade variável entre lotes"].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive shrink-0 mt-2" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="label-uppercase text-primary mb-4">A solução</p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
                Com a Newtech, você produz com autonomia e economia.
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                {["Controle total da receita e qualidade", "Economia de até 40% no custo", "Consistência superior entre lotes"].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Products — floating PNG cards */}
      <section className="py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="flex items-end justify-between mb-20">
              <div>
                <p className="label-uppercase mb-3">Equipamentos</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  Linha de <span className="font-display italic">Produtos</span>
                </h2>
              </div>
              <Link to="/produtos" className="hidden md:inline-flex text-sm font-medium text-primary hover:underline underline-offset-4">
                Ver todos →
              </Link>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20">
            {products.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 60} className="h-full">
                <Link to={`/produtos/${p.slug}`} className="group block relative h-full">
                  <div className="bg-card rounded-2xl pt-4 pb-6 px-6 border border-border/50 hover:border-primary/30 transition-all hover:shadow-elevated overflow-visible relative h-full flex flex-col">
                    {/* Floating product image */}
                    <div className="flex items-end justify-center -mt-16 mb-4 flex-1">
                      <img
                        src={p.image}
                        alt={p.name}
                        className={`${productImageHeight[p.slug] || "h-44"} w-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500`}
                      />
                    </div>
                    <div className="text-center mt-auto">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{p.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{p.capacity} · {p.dailyProduction}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        Ver detalhes <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <Link to="/produtos" className="md:hidden block text-center text-sm font-medium text-primary hover:underline underline-offset-4 mt-8">
            Ver todos os produtos →
          </Link>
        </div>
      </section>

      {/* Why Newtech */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="label-uppercase mb-3">Diferenciais</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Por que <span className="font-display italic">Newtech</span>?
              </h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Award, title: "Tecnologia de ponta", desc: "Design aberto sem pressurização, painel de controle junto à máquina, mecânica de alta eficiência." },
              { icon: Clock, title: "60 min por batelada", desc: "Dos ingredientes brutos a coberturas, esquimós e trufas com granulometria <25μm." },
              { icon: Wrench, title: "Suporte completo", desc: "Formulações inclusas, assistência técnica e peças de reposição garantidas." },
              { icon: ShieldCheck, title: "Baixa manutenção", desc: "Mecânica simples e robusta. Máxima disponibilidade com mínima intervenção." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/8 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="label-uppercase mb-3">Aplicações</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Segmentos <span className="font-display italic">Atendidos</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { image: segSorveterias, title: "Sorveterias", desc: "Coberturas esquimós, trufas e pastas de oleaginosas.", size: "h-44" },
              { image: segConfeitarias, title: "Confeitarias", desc: "Recheios, coberturas e chocolates em barra.", size: "h-44" },
              { image: segDistribuidores, title: "Distribuidores", desc: "Produção em escala industrial para revenda.", size: "h-40" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <Link to="/segmentos" className="group block text-center">
                  <div className="mx-auto mb-5 flex items-center justify-center h-52">
                    <img src={item.image} alt={item.title} className={`${item.size} w-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="label-uppercase mb-3">Nossa história</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                40 anos de <span className="font-display italic">engenharia</span> aplicada
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Newtech nasceu da experiência em engenharia química aplicada à indústria alimentícia, resultando na patente brasileira de moinhos de esferas verticais.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Sediada em Limoeiro, PE, atendemos todo o Brasil e o Mercosul com tecnologia de ponta.
              </p>
              <Link to="/sobre">
                <Button variant="outline" className="rounded-full px-6 text-sm font-medium border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Conheça nossa história
                </Button>
              </Link>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="rounded-2xl overflow-hidden">
                <video
                  autoPlay loop muted playsInline
                  className="w-full aspect-[4/3] object-cover"
                >
                  <source src="/videos/j50.mp4" type="video/mp4" />
                </video>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <p className="label-uppercase text-background/40 mb-4">Próximo passo</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 max-w-2xl mx-auto">
              Pronto para produzir seu próprio{" "}
              <span className="font-display italic text-background/80">chocolate</span>?
            </h2>
            <p className="text-background/50 mb-10 max-w-md mx-auto">
              Fale com um especialista e descubra o moinho ideal para seu negócio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/5581994185453?text=Olá! Gostaria de saber mais sobre os moinhos Newtech."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary border border-primary text-sm font-medium">
                  WhatsApp
                </Button>
              </a>
              <Link to="/contato">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-background/20 text-background hover:bg-background hover:text-foreground text-sm font-medium">
                  Formulário de contato
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Home;
