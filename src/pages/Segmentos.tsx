import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { Helmet } from "react-helmet-async";

import segSorveterias from "@/assets/segment-sorveterias.png";
import segConfeitarias from "@/assets/segment-confeitarias.png";
import segDistribuidores from "@/assets/segment-distribuidores.png";

const segments = [
  {
    image: segSorveterias,
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
    image: segConfeitarias,
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
    image: segDistribuidores,
    title: "Distribuidores",
    subtitle: "Produção em escala para revenda",
    description:
      "Produção em escala industrial para revenda com consistência e economia.",
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
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <p className="label-uppercase mb-4">Aplicações</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground max-w-3xl leading-[1.1]">
              Para quem é a{" "}
              <span className="font-display italic">Newtech</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-lg leading-relaxed">
              Equipamentos sob medida para cada tipo de operação na indústria alimentícia.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Segments */}
      <section className="pb-28">
        <div className="container mx-auto px-4">
          {segments.map((seg, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div
                className={`grid md:grid-cols-2 gap-8 md:gap-20 items-center py-20 ${
                  i !== segments.length - 1 ? "border-b border-border" : ""
                } ${i % 2 !== 0 ? "md:[direction:rtl]" : ""}`}
              >
                {/* Image */}
                <div className={`${i % 2 !== 0 ? "md:[direction:ltr]" : ""} flex items-center justify-center`}>
                  <img
                    src={seg.image}
                    alt={seg.title}
                    className="w-full max-w-[340px] h-auto object-contain drop-shadow-xl"
                  />
                </div>

                {/* Content */}
                <div className={`${i % 2 !== 0 ? "md:[direction:ltr]" : ""}`}>
                  <p className="label-uppercase text-primary mb-3">
                    {seg.subtitle}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                    {seg.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {seg.description}
                  </p>
                  <ul className="space-y-3 mb-10">
                    {seg.benefits.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contato">
                    <Button variant="outline" className="rounded-full px-6 text-sm font-medium border-primary text-primary hover:bg-primary hover:text-primary-foreground">
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
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
              Não encontrou seu segmento?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Nossos moinhos são versáteis e atendem diferentes aplicações. Fale com um especialista.
            </p>
            <a
              href="https://wa.me/5581994185453?text=Olá! Gostaria de saber mais sobre os moinhos Newtech para o meu segmento."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-full px-8 text-sm font-medium">
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
