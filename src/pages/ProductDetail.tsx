import { useParams, Link } from "react-router-dom";
import { getProduct, products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Cog, ArrowLeft, Download } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { Helmet } from "react-helmet-async";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProduct(slug || "");

  if (!product) {
    return (
      <div className="py-24 text-center container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
        <Link to="/produtos"><Button>Ver todos os produtos</Button></Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} — Moinho de Esferas Newtech</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`https://www.newtechengenharia.com/produtos/${product.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": `${product.name} — Moinho de Esferas Vertical ${product.capacity}`,
          "description": product.description,
          "brand": { "@type": "Brand", "name": "Newtech" },
          "manufacturer": { "@type": "Organization", "name": "Newtech Engenharia Ltda" },
          "category": "Equipamentos Industriais / Indústria Alimentícia",
          "additionalProperty": [
            { "@type": "PropertyValue", "name": "Capacidade", "value": product.capacity },
            { "@type": "PropertyValue", "name": "Produção diária", "value": product.dailyProduction },
            { "@type": "PropertyValue", "name": "Tempo de processo", "value": "60min" },
            { "@type": "PropertyValue", "name": "Granulometria", "value": "<25 microns" },
          ],
        })}</script>
      </Helmet>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/produtos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" /> Voltar para Produtos
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn>
              <div className="h-80 md:h-[450px] bg-secondary rounded-xl flex items-center justify-center shadow-card">
                <Cog className="h-24 w-24 text-muted-foreground/30" />
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-primary font-semibold uppercase text-sm tracking-wider mb-6">
                {product.type === 'moinho' ? 'Moinho de Esferas Vertical' : 'Tanque de Armazenamento'}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              <div className="flex gap-4 mb-8">
                <Link to="/contato">
                  <Button size="lg" className="bg-primary hover:bg-newtech-gold-dark text-primary-foreground font-bold rounded-lg">
                    Solicitar Orçamento
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg">
                  <Download className="h-4 w-4 mr-2" /> Ficha PDF
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Specs Table */}
          <FadeIn>
            <div className="mt-16">
              <h2 className="section-title mb-8">
                <span>Ficha</span> Técnica
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full max-w-2xl text-sm">
                  <tbody>
                    {[
                      ["Capacidade", product.capacity],
                      ["Produção/Dia", product.dailyProduction],
                      ["Motor", product.motor || "—"],
                      ["Voltagem", product.voltage],
                      ["Dimensões", product.dimensions || "—"],
                      ["Peso", product.weight || "—"],
                      ["Material", "Aço Inox 304"],
                      ["Esferas", "Cromo duro 3,9mm"],
                      ["Tempo/Batelada", "60 minutos"],
                      ["Granulometria", "< 25 microns"],
                    ].map(([label, value], i) => (
                      <tr key={label} className={i % 2 === 0 ? "bg-secondary" : "bg-background"}>
                        <td className="p-3 font-semibold text-foreground w-48">{label}</td>
                        <td className="p-3 text-muted-foreground">{value}</td>
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

export default ProductDetail;
