import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { products } from "@/data/products";
import { Helmet } from "react-helmet-async";

const Downloads = () => (
  <>
    <Helmet>
      <title>Downloads — Fichas Técnicas Newtech</title>
      <meta name="description" content="Baixe as fichas técnicas em PDF dos moinhos de esferas verticais Newtech. Modelos J10 a J500 e tanque T1000D." />
      <link rel="canonical" href="https://www.newtechengenharia.com/downloads" />
    </Helmet>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h1 className="section-title text-center mb-4">
            <span>Downloads</span>
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Fichas técnicas em PDF para consulta e impressão.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {products.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 80}>
              <div className="bg-card rounded-xl shadow-card border p-6 flex flex-col items-center text-center">
                <Download className="h-10 w-10 text-primary mb-4" />
                <h2 className="font-bold text-foreground text-lg">{p.name}</h2>
                <p className="text-sm text-muted-foreground mt-1 mb-4">Ficha Técnica — {p.capacity}</p>
                <a href={p.pdfUrl} download className="w-full">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg w-full font-semibold">
                    <Download className="h-4 w-4 mr-2" /> Baixar PDF
                  </Button>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Downloads;
