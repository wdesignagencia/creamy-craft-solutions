import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IceCreamCone, CakeSlice, Truck, ChevronRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { Helmet } from "react-helmet-async";

const segments = [
  {
    icon: IceCreamCone,
    title: "Sorveterias",
    subtitle: "Coberturas, esquimós e pastas exclusivas",
    description:
      "Produza coberturas esquimós, trufas, ganaches especiais e pastas de oleaginosas para suas receitas exclusivas.",
    benefits: [
      "Coberturas esquimó com receita própria",
      "Trufas e ganaches com granulometria fina",
      "Pastas de amendoim, avelã e castanhas",
      "Controle total de ingredientes e qualidade",
    ],
  },
  {
    icon: CakeSlice,
    title: "Confeitarias e Panificação",
    subtitle: "Recheios, coberturas e chocolates em barra",
    description:
      "Coberturas, recheios forneáveis e chocolates em barra para doces e sobremesas premium.",
    benefits: [
      "Recheios forneáveis personalizados",
      "Coberturas de chocolate com identidade própria",
      "Barras e tabletes artesanais",
      "Economia de até 40% em insumos",
    ],
  },
  {
    icon: Truck,
    title: "Distribuidores",
    subtitle: "Produção em escala para revenda",
    description:
      "Produção em escala industrial para revenda.",
    benefits: [
      "Alta capacidade produtiva (até 500 kg/batelada)",
      "Consistência entre lotes",
      "Menor custo por kg produzido",
      "Suporte técnico e formulações inclusas",
    ],
  },
];

const Segmentos = () => {
  return (
    <>
      <Helmet>
        <title>Segmentos Atendidos — Newtech Moinhos de Esferas</title>
        <meta
          name="description"
          content="Soluções Newtech para sorveterias, confeitarias, panificação e distribuidores. Moinhos de esferas para produção de chocolates, coberturas e pastas."
        />
      </Helmet>

      {/* Header */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-foreground">
              Segmentos <span className="text-primary">Atendidos</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Nossos moinhos de esferas atendem diferentes segmentos da indústria alimentícia, com soluções sob medida para cada tipo de operação.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Segments Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-20">
          {segments.map((seg, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  i % 2 !== 0 ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Icon card */}
                <div className={`${i % 2 !== 0 ? "md:[direction:ltr]" : ""}`}>
                  <div className="bg-secondary rounded-2xl p-12 flex flex-col items-center justify-center min-h-[280px]">
                    <seg.icon className="h-24 w-24 text-primary mb-4" />
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      {seg.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 !== 0 ? "md:[direction:ltr]" : ""}`}>
                  <h2 className="text-3xl font-black uppercase tracking-wide text-foreground mb-4">
                    {seg.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {seg.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {seg.benefits.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contato">
                    <Button className="bg-primary hover:bg-newtech-gold-dark text-primary-foreground font-semibold rounded-lg">
                      Solicitar Orçamento
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider mb-4">
              Não encontrou seu segmento?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Nossos moinhos são versáteis e podem atender diferentes aplicações. Fale com um especialista.
            </p>
            <a
              href="https://wa.me/5581994185453?text=Olá! Gostaria de saber mais sobre os moinhos Newtech para o meu segmento."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 font-bold rounded-lg text-base px-8"
              >
                Fale pelo WhatsApp
              </Button>
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Segmentos;
