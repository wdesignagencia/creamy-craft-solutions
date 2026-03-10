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

    <section className="pt-40 pb-28">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="label-uppercase mb-3">Documentos</p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Fichas <span className="font-display italic">Técnicas</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              PDFs para consulta e impressão com todas as especificações.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {products.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 60}>
              <a href={p.pdfUrl} download className="group block p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-elevated transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-semibold text-foreground group-hover:text-primary transition-colors">{p.name}</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">{p.capacity}</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Download className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Ficha técnica — PDF</p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Downloads;
