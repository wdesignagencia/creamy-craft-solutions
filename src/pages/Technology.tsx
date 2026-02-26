import FadeIn from "@/components/FadeIn";
import { ShieldCheck, ArrowRightLeft, Cog, Clock, Microscope, HelpCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const steps = [
  { num: "01", title: "Matéria-prima", desc: "Cacau, açúcar e ingredientes são adicionados ao moinho." },
  { num: "02", title: "Cisalhamento", desc: "Esferas de cromo duro refinam as partículas por cisalhamento." },
  { num: "03", title: "Recirculação", desc: "Bomba recircula o produto para refinamento uniforme." },
  { num: "04", title: "Temperatura", desc: "Sistema mantém temperatura controlada durante o processo." },
  { num: "05", title: "Produto Final", desc: "Chocolate refinado com granulometria <25 microns em 60 min." },
];

const Technology = () => (
  <>
    <Helmet>
      <title>Tecnologia — Moinhos de Esferas Newtech</title>
      <meta name="description" content="Conheça a tecnologia patenteada dos moinhos de esferas verticais Newtech. Processo em 60 minutos, granulometria inferior a 25 microns." />
      <link rel="canonical" href="https://www.newtechengenharia.com/tecnologia" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "O que é um moinho de esferas vertical?", "acceptedAnswer": { "@type": "Answer", "text": "É um equipamento que refina partículas sólidas através de esferas de cromo duro em um cilindro vertical, sem necessidade de vedação hidráulica." }},
          { "@type": "Question", "name": "Quanto tempo leva para produzir chocolate com a Newtech?", "acceptedAnswer": { "@type": "Answer", "text": "60 minutos por batelada, com granulometria inferior a 25 microns." }},
        ]
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-24 bg-newtech-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-4">
            <span className="text-primary">Tecnologia</span> Patenteada
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Entenda como nossos moinhos de esferas verticais revolucionam a produção de chocolate.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Vertical vs Horizontal */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="section-title text-center mb-12">
            Moinho <span>Vertical</span> vs Horizontal
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn>
            <div className="p-8 bg-card rounded-xl shadow-card border-2 border-primary">
              <h3 className="text-xl font-bold text-primary mb-4 uppercase">Vertical (Newtech)</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                {["Sem pressão interna", "Sem vedação hidráulica cara", "Manutenção simples e barata", "Operação aberta e acessível", "Troca de esferas facilitada"].map((t, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="p-8 bg-card rounded-xl shadow-card border">
              <h3 className="text-xl font-bold text-muted-foreground mb-4 uppercase">Horizontal (Convencional)</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                {["Alta pressão interna", "Vedação hidráulica de alto custo", "Manutenção complexa e cara", "Sistema fechado", "Troca de esferas trabalhosa"].map((t, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ArrowRightLeft className="h-4 w-4 text-muted-foreground/50 shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* Process Steps */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="section-title text-center mb-12">
            Como <span>Funciona</span>
          </h2>
        </FadeIn>
        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="flex gap-6 items-start p-6 bg-background rounded-xl shadow-card">
                <span className="text-3xl font-black text-primary">{s.num}</span>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Patent */}
    <section id="patente" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn>
          <h2 className="section-title text-center mb-8">
            <span>Patente</span> Brasileira
          </h2>
          <div className="p-8 bg-card rounded-xl shadow-card border text-center">
            <Cog className="h-16 w-16 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground leading-relaxed">
              A Newtech possui patente brasileira exclusiva para moinhos de esferas verticais. Nosso design elimina a necessidade de vedação hidráulica, reduzindo custos de manutenção em até 70% comparado a modelos horizontais tradicionais como o Netzsch.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* Granulometry */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <FadeIn>
          <Microscope className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="section-title mb-6">
            Granulometria <span>&lt;25 microns</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A granulometria inferior a 25 microns garante textura ultra-suave, imperceptível ao paladar humano. Essencial para chocolates finos, recheios premium e sorvetes artesanais de alta qualidade.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn>
          <h2 className="section-title text-center mb-12">
            Perguntas <span>Frequentes</span>
          </h2>
        </FadeIn>
        {[
          { q: "O que é um moinho de esferas vertical?", a: "É um equipamento que refina partículas sólidas através de esferas de cromo duro em um cilindro vertical, sem necessidade de vedação hidráulica, permitindo operação mais simples e econômica." },
          { q: "Quanto tempo leva para produzir chocolate?", a: "60 minutos por batelada. O processo completo de refinamento produz chocolate com granulometria inferior a 25 microns." },
          { q: "Qual a diferença para moinhos importados?", a: "Além do custo até 1/3 menor, nossos moinhos verticais não utilizam vedação hidráulica, reduzindo drasticamente o custo de manutenção." },
        ].map((faq, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div className="p-6 bg-card rounded-xl shadow-card border mb-4">
              <div className="flex items-start gap-3">
                <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  </>
);

export default Technology;
