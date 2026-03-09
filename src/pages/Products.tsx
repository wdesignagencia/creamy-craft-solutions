import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cog, Download } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { products } from "@/data/products";
import { Helmet } from "react-helmet-async";

const filters = ["Todos", "Sorveterias", "Confeitarias", "Panificadoras", "Distribuidores"];

const Products = () => {
  const [filter, setFilter] = useState("Todos");

  const filtered = filter === "Todos"
    ? products
    : products.filter(p => p.segments.includes(filter));

  return (
    <>
      <Helmet>
        <title>Moinhos de Esferas — Produtos Newtech</title>
        <meta name="description" content="Linha completa de moinhos de esferas verticais de 10 a 500 kg. Compare modelos e encontre o ideal para sua produção." />
        <link rel="canonical" href="https://www.newtechengenharia.com/produtos" />
      </Helmet>

      {/* Video Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/j500.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-newtech-dark/70" />
        <div className="relative z-10 text-center px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-4">
              Nossos <span className="text-primary">Produtos</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl mx-auto">
              Moinhos de esferas verticais e tanques de armazenamento para todas as escalas de produção.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 80}>
                <div className="bg-card rounded-xl shadow-card border overflow-hidden">
                  <div className="h-48 bg-secondary flex items-center justify-center">
                    <Cog className="h-16 w-16 text-muted-foreground/30" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-foreground">{p.name}</h2>
                    <div className="text-sm text-muted-foreground mt-2 space-y-1">
                      <p>Capacidade: {p.capacity}</p>
                      <p>Produção: {p.dailyProduction}</p>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Link to={`/produtos/${p.slug}`} className="flex-1">
                        <Button className="w-full bg-primary hover:bg-newtech-gold-dark text-primary-foreground font-semibold rounded-lg">
                          Ver Ficha
                        </Button>
                      </Link>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Veja em Ação */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="section-title text-center mb-4">
              Veja Nossos Moinhos <span>em Ação</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Acompanhe o funcionamento dos nossos equipamentos em operação real na indústria.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn>
              <div className="rounded-xl overflow-hidden shadow-card border">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-video object-cover"
                >
                  <source src="/videos/j002.mp4" type="video/mp4" />
                </video>
                <div className="p-4 bg-card">
                  <p className="text-sm font-semibold text-foreground">Moinho de Laboratório</p>
                  <p className="text-xs text-muted-foreground">Ideal para testes e pequenas bateladas</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="rounded-xl overflow-hidden shadow-card border">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-video object-cover"
                >
                  <source src="/videos/j50.mp4" type="video/mp4" />
                </video>
                <div className="p-4 bg-card">
                  <p className="text-sm font-semibold text-foreground">Moinho Industrial</p>
                  <p className="text-xs text-muted-foreground">Produção contínua com alta eficiência</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="section-title text-center mb-8">
              <span>Comparativo</span> de Modelos
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-newtech-dark text-white">
                    <th className="p-3 text-left font-bold">Modelo</th>
                    <th className="p-3 text-left font-bold">Capacidade</th>
                    <th className="p-3 text-left font-bold">Produção/Dia</th>
                    <th className="p-3 text-left font-bold">Motor</th>
                    <th className="p-3 text-left font-bold">Voltagem</th>
                    <th className="p-3 text-left font-bold">Peso</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p, i) => (
                    <tr key={p.slug} className={i % 2 === 0 ? "bg-background" : "bg-secondary"}>
                      <td className="p-3 font-semibold text-primary">{p.shortName}</td>
                      <td className="p-3">{p.capacity}</td>
                      <td className="p-3">{p.dailyProduction}</td>
                      <td className="p-3">{p.motor || "—"}</td>
                      <td className="p-3">{p.voltage}</td>
                      <td className="p-3">{p.weight || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Products;
