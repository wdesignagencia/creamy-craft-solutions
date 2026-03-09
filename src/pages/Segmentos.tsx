import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { Helmet } from "react-helmet-async";

import segmentSorveterias from "@/assets/segment-sorveterias.png";
import segmentConfeitarias from "@/assets/segment-confeitarias.png";
import segmentDistribuidores from "@/assets/segment-distribuidores-branded.png";

const segments = [
  {
    image: segmentSorveterias,
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
    imageStyle: "w-48 h-48 md:w-56 md:h-56 -rotate-12 drop-shadow-2xl",
  },
  {
    image: segmentConfeitarias,
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
    imageStyle: "w-48 h-48 md:w-56 md:h-56 rotate-3 drop-shadow-2xl",
  },
  {
    image: segmentDistribuidores,
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
    imageStyle: "w-56 h-44 md:w-72 md:h-56 drop-shadow-2xl",
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

      {/* Segments — Card Layout with Floating Images */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {segments.map((seg, i) => (
              <FadeIn key={i} delay={i * 150}>
                <div className="relative group">
                  {/* Floating image container */}
                  <div className="relative z-10 flex justify-center -mb-16 md:-mb-20">
                    <div className="relative">
                      {/* Main image */}
                      <img
                        src={seg.image}
                        alt={seg.title}
                        className={`${seg.imageStyle} object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2`}
                      />
                      {/* Reflection */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[85%] w-[80%] h-[40%] pointer-events-none">
                        <img
                          src={seg.image}
                          alt=""
                          className={`${seg.imageStyle} object-contain [transform:scaleY(-1)] opacity-[0.12] blur-[2px]`}
                          aria-hidden="true"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
                      </div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="relative bg-secondary rounded-2xl pt-20 md:pt-24 pb-8 px-6 shadow-card border border-border/50 overflow-hidden transition-shadow duration-300 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
                    {/* Subtle gradient accent at top */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

                    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 text-center">
                      {seg.subtitle}
                    </p>
                    <h2 className="text-2xl font-black uppercase tracking-wide text-foreground mb-3 text-center">
                      {seg.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 text-center">
                      {seg.description}
                    </p>

                    <ul className="space-y-2.5 mb-6">
                      {seg.benefits.map((b, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-center">
                      <Link to="/contato">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg text-sm">
                          Solicitar Orçamento
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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
