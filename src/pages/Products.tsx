import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cog, Download, ArrowRight } from "lucide-react";
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

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/j500.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-16">
          <FadeIn>
            <p className="label-uppercase text-white/40 mb-3">Equipamentos</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Nossos <span className="font-display italic">Produtos</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-14">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 60}>
                <div className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 transition-all hover:shadow-elevated">
                  <div className="h-48 bg-secondary flex items-center justify-center">
                    <Cog className="h-14 w-14 text-muted-foreground/15 group-hover:text-primary/20 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{p.name}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{p.capacity} · {p.dailyProduction}</p>
                    <div className="flex gap-2 mt-5">
                      <Link to={`/produtos/${p.slug}`} className="flex-1">
                        <Button className="w-full rounded-full text-sm font-medium">
                          Ver detalhes
                          <ArrowRight className="h-3.5 w-3.5 ml-1" />
                        </Button>
                      </Link>
                      <a href={p.pdfUrl} download>
                        <Button variant="outline" size="icon" className="rounded-full border-border hover:border-primary hover:text-primary">
                          <Download className="h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="label-uppercase mb-3">Em operação</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Veja em <span className="font-display italic">ação</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FadeIn>
              <div className="rounded-2xl overflow-hidden bg-card border border-border/50">
                <video autoPlay loop muted playsInline className="w-full aspect-video object-cover">
                  <source src="/videos/j002.mp4" type="video/mp4" />
                </video>
                <div className="p-5">
                  <p className="font-medium text-foreground text-sm">Moinho de Laboratório</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Ideal para testes e pequenas bateladas</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="rounded-2xl overflow-hidden bg-card border border-border/50">
                <video autoPlay loop muted playsInline className="w-full aspect-video object-cover">
                  <source src="/videos/j50.mp4" type="video/mp4" />
                </video>
                <div className="p-5">
                  <p className="font-medium text-foreground text-sm">Moinho Industrial</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Produção contínua com alta eficiência</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="label-uppercase mb-3">Especificações</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Comparativo de <span className="font-display italic">Modelos</span>
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-foreground">
                    <th className="p-4 text-left font-semibold text-foreground text-xs uppercase tracking-wider">Modelo</th>
                    <th className="p-4 text-left font-semibold text-foreground text-xs uppercase tracking-wider">Capacidade</th>
                    <th className="p-4 text-left font-semibold text-foreground text-xs uppercase tracking-wider">Produção/Dia</th>
                    <th className="p-4 text-left font-semibold text-foreground text-xs uppercase tracking-wider">Motor</th>
                    <th className="p-4 text-left font-semibold text-foreground text-xs uppercase tracking-wider">Voltagem</th>
                    <th className="p-4 text-left font-semibold text-foreground text-xs uppercase tracking-wider">Peso</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.slug} className="border-b border-border hover:bg-secondary/50 transition-colors">
                      <td className="p-4 font-medium text-primary">{p.shortName}</td>
                      <td className="p-4 text-muted-foreground">{p.capacity}</td>
                      <td className="p-4 text-muted-foreground">{p.dailyProduction}</td>
                      <td className="p-4 text-muted-foreground">{p.motor || "—"}</td>
                      <td className="p-4 text-muted-foreground">{p.voltage}</td>
                      <td className="p-4 text-muted-foreground">{p.weight || "—"}</td>
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
