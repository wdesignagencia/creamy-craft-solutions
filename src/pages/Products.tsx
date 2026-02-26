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

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="section-title text-center mb-4">
              Nossos <span>Produtos</span>
            </h1>
            <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
              Moinhos de esferas verticais e tanques de armazenamento para todas as escalas de produção.
            </p>
          </FadeIn>

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

          {/* Comparison Table */}
          <FadeIn>
            <div className="mt-20">
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
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Products;
