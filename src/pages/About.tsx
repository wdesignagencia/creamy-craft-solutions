import FadeIn from "@/components/FadeIn";
import { MapPin, Users, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";

const timeline = [
  { year: "1970s", text: "Jair Garcia inicia pesquisas em engenharia química aplicada à indústria alimentícia." },
  { year: "1990s", text: "Desenvolvimento do primeiro protótipo de moinho de esferas vertical." },
  { year: "2010s", text: "Obtenção da patente brasileira para o design de moinho vertical sem vedação hidráulica." },
  { year: "2020", text: "Fundação da Newtech Engenharia Ltda em Limoeiro, PE." },
  { year: "Hoje", text: "Linha completa de moinhos de 10 a 500 kg, atendendo Brasil e Mercosul." },
];

const team = [
  { name: "Alex Garcia", role: "Engenheiro de Alimentos", exp: "23 anos de experiência em processos industriais alimentícios e desenvolvimento de produtos." },
  { name: "Jair Garcia", role: "Engenheiro Químico", exp: "50 anos de experiência. Desenvolvedor da patente brasileira de moinhos de esferas verticais." },
];

const About = () => (
  <>
    <Helmet>
      <title>Quem Somos — Newtech Máquinas Industriais</title>
      <meta name="description" content="Conheça a história da Newtech, seus fundadores e a patente brasileira de moinhos de esferas verticais. 50 anos de experiência industrial." />
      <link rel="canonical" href="https://www.newtechengenharia.com/sobre" />
    </Helmet>

    <section className="py-24 bg-newtech-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-4">
            Quem <span className="text-primary">Somos</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Mais de 50 anos de desenvolvimento industrial, patente brasileira, feito no Nordeste.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn>
          <h2 className="section-title text-center mb-12">
            Nossa <span>Trajetória</span>
          </h2>
        </FadeIn>
        <div className="space-y-6">
          {timeline.map((t, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="flex gap-6 items-start">
                <span className="text-xl font-black text-primary min-w-[80px]">{t.year}</span>
                <div className="border-l-2 border-primary pl-6 pb-2">
                  <p className="text-muted-foreground">{t.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="section-title text-center mb-12">
            Nossa <span>Equipe</span>
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((person, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="bg-background rounded-xl shadow-card p-8 text-center">
                <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-muted-foreground/40" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{person.name}</h3>
                <p className="text-sm text-primary font-semibold uppercase tracking-wide mt-1">{person.role}</p>
                <p className="text-sm text-muted-foreground mt-3">{person.exp}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Coverage */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <FadeIn>
          <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="section-title mb-6">
            <span>Atendemos</span> todo o Brasil e Mercosul
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Com sede em Limoeiro, PE, a Newtech atende clientes em todo o território nacional e países do Mercosul. Nosso parceiro comercial ArtGel / Amadeu Gonçalves atua como representante comercial.
          </p>
        </FadeIn>
      </div>
    </section>
  </>
);

export default About;
