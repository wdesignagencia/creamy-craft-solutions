import { useParams, Link } from "react-router-dom";
import { getProduct, products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { Helmet } from "react-helmet-async";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProduct(slug || "");

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
        <Link to="/produtos"><Button className="rounded-full">Ver todos os produtos</Button></Link>
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

      <section className="pt-32 pb-28">
        <div className="container mx-auto px-4">
          <Link to="/produtos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-10 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Produtos
          </Link>

          <div className="grid md:grid-cols-2 gap-16">
            <FadeIn>
              <div className="aspect-square bg-secondary rounded-2xl flex items-center justify-center p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain drop-shadow-xl"
                />
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div>
                <p className="label-uppercase text-primary mb-3">
                  {product.type === 'moinho' ? 'Moinho de Esferas Vertical' : 'Tanque de Armazenamento'}
                </p>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-10">{product.description}</p>

                <div className="flex gap-3 mb-12">
                  <Link to="/contato">
                    <Button size="lg" className="rounded-full px-8 text-sm font-medium">
                      Solicitar Orçamento
                    </Button>
                  </Link>
                  <a href={product.pdfUrl} download>
                    <Button size="lg" variant="outline" className="rounded-full px-6 text-sm font-medium border-border hover:border-primary hover:text-primary">
                      <Download className="h-4 w-4 mr-2" /> PDF
                    </Button>
                  </a>
                </div>

                {/* Specs */}
                <div className="border-t border-border pt-8">
                  <p className="label-uppercase mb-5">Especificações</p>
                  <div className="space-y-0">
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
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between py-3 border-b border-border/50 text-sm">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="font-medium text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
