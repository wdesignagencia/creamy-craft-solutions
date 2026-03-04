import FadeIn from "@/components/FadeIn";
import { MapPin, HeartHandshake, Target, Eye } from "lucide-react";
import { Helmet } from "react-helmet-async";

const About = () => (
  <>
    <Helmet>
      <title>Quem Somos — Newtech Máquinas Industriais</title>
      <meta name="description" content="Conheça a Newtech, fabricante brasileira de moinhos de esferas verticais com tecnologia patenteada. Atendemos todo o Brasil e Mercosul." />
      <link rel="canonical" href="https://www.newtechengenharia.com/sobre" />
    </Helmet>

    <section className="py-24 bg-newtech-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-4">
            Quem <span className="text-primary">Somos</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Tecnologia patenteada, fabricação brasileira, feito no Nordeste.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Valores */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="section-title text-center mb-12">
            Nossos <span>Valores</span>
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Target, title: "Missão", text: "Fornecer equipamentos industriais de alta performance que permitam aos nossos clientes produzir com autonomia, qualidade e economia." },
            { icon: Eye, title: "Visão", text: "Ser referência nacional em moinhos de esferas verticais para a indústria alimentícia, expandindo para toda a América Latina." },
            { icon: HeartHandshake, title: "Compromisso", text: "Suporte técnico completo, formulações inclusas e assistência contínua para garantir o sucesso de cada cliente." },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="bg-card rounded-xl shadow-card border p-8 text-center">
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Coverage */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <FadeIn>
          <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="section-title mb-6">
            <span>Atendemos</span> todo o Brasil e Mercosul
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Com sede em Limoeiro, PE, a Newtech atende clientes em todo o território nacional e países do Mercosul. Nosso parceiro comercial ArtGel / Amadeu Gonzales atua como representante comercial.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider mb-4">
            Quer conhecer nossas soluções?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Fale com um especialista e descubra qual moinho é ideal para o seu negócio.
          </p>
          <a
            href="https://wa.me/5581994185453?text=Olá! Gostaria de saber mais sobre os moinhos Newtech."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-primary hover:bg-white/90 font-bold rounded-lg text-base px-8 py-3">
              Fale pelo WhatsApp
            </button>
          </a>
        </FadeIn>
      </div>
    </section>
  </>
);

export default About;
