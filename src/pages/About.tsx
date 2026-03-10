import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { MapPin, Target, Eye, HeartHandshake } from "lucide-react";
import { Helmet } from "react-helmet-async";

const About = () => (
  <>
    <Helmet>
      <title>Quem Somos — Newtech Máquinas Industriais</title>
      <meta name="description" content="Conheça a Newtech, fabricante brasileira de moinhos de esferas verticais com tecnologia patenteada. Atendemos todo o Brasil e Mercosul." />
      <link rel="canonical" href="https://www.newtechengenharia.com/sobre" />
    </Helmet>

    {/* Hero */}
    <section className="pt-40 pb-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <p className="label-uppercase mb-4">Quem somos</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground max-w-3xl leading-[1.1]">
            Tecnologia patenteada,{" "}
            <span className="font-display italic">feita no Brasil</span>
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-lg">
            Mais de 40 anos de engenharia química aplicada à indústria alimentícia.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Values */}
    <section className="py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="label-uppercase mb-3">Princípios</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Nossos <span className="font-display italic">Valores</span>
            </h2>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Target, title: "Missão", text: "Fornecer equipamentos de alta performance que permitam produzir com autonomia, qualidade e economia." },
            { icon: Eye, title: "Visão", text: "Ser referência nacional em moinhos de esferas verticais para a indústria alimentícia." },
            { icon: HeartHandshake, title: "Compromisso", text: "Suporte técnico completo, formulações inclusas e assistência contínua." },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/8 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Coverage */}
    <section className="py-28">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <FadeIn>
          <div className="w-14 h-14 rounded-full bg-primary/8 flex items-center justify-center mx-auto mb-6">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Todo o Brasil e <span className="font-display italic">Mercosul</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Com sede em Limoeiro, PE, a Newtech atende clientes em todo o território nacional e países do Mercosul. Nosso parceiro comercial ArtGel / Amadeu Gonsales atua como representante comercial.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* CTA */}
    <section className="py-28 bg-foreground text-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Quer conhecer nossas <span className="font-display italic">soluções</span>?
          </h2>
          <p className="text-background/50 mb-10 max-w-md mx-auto">
            Fale com um especialista e descubra qual moinho é ideal para o seu negócio.
          </p>
          <a
            href="https://wa.me/5581994185453?text=Olá! Gostaria de saber mais sobre os moinhos Newtech."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="rounded-full px-8 bg-background text-foreground hover:bg-background/90 text-sm font-medium">
              Fale pelo WhatsApp
            </Button>
          </a>
        </FadeIn>
      </div>
    </section>
  </>
);

export default About;
