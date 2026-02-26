import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { Helmet } from "react-helmet-async";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100),
  company: z.string().trim().max(100).optional(),
  segment: z.string().min(1, "Selecione um segmento"),
  capacity: z.string().optional(),
  region: z.string().trim().max(100).optional(),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().trim().max(2000).optional(),
});

const segments = ["Sorveteria", "Confeitaria", "Panificadora", "Distribuidora", "Indústria", "Outro"];
const budgets = ["Até R$ 50 mil", "R$ 50–100 mil", "R$ 100–200 mil", "Acima de R$ 200 mil", "Não definido"];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", segment: "", capacity: "", region: "", timeline: "", budget: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => { fieldErrors[err.path[0] as string] = err.message; });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const text = encodeURIComponent(`Olá! Sou ${form.name}${form.company ? ` da ${form.company}` : ''}. Segmento: ${form.segment}. ${form.message || ''}`);
    window.open(`https://wa.me/5581994185453?text=${text}`, '_blank');
    toast({ title: "Mensagem preparada!", description: "Você será redirecionado para o WhatsApp." });
  };

  const update = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
  };

  return (
    <>
      <Helmet>
        <title>Contato — Solicitar Orçamento Newtech</title>
        <meta name="description" content="Entre em contato com a Newtech para solicitar orçamento de moinhos de esferas. WhatsApp, email ou formulário." />
        <link rel="canonical" href="https://www.newtechengenharia.com/contato" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Newtech Máquinas Industriais",
          "telephone": "+55-81-99418-5453",
          "email": "comercial@newtechengenharia.com",
          "address": { "@type": "PostalAddress", "streetAddress": "Rua Jerônimo Heráclio, 1700A", "addressLocality": "Limoeiro", "addressRegion": "PE", "postalCode": "55700-000", "addressCountry": "BR" }
        })}</script>
      </Helmet>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="section-title text-center mb-4">
              <span>Solicitar</span> Orçamento
            </h1>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Preencha o formulário e nossa equipe entrará em contato rapidamente.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <FadeIn>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-semibold text-foreground">Nome completo *</label>
                      <input className="w-full mt-1 p-3 border rounded-lg bg-background text-foreground text-sm" value={form.name} onChange={e => update("name", e.target.value)} />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground">Empresa</label>
                      <input className="w-full mt-1 p-3 border rounded-lg bg-background text-foreground text-sm" value={form.company} onChange={e => update("company", e.target.value)} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-semibold text-foreground">Segmento *</label>
                      <select className="w-full mt-1 p-3 border rounded-lg bg-background text-foreground text-sm" value={form.segment} onChange={e => update("segment", e.target.value)}>
                        <option value="">Selecione...</option>
                        {segments.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.segment && <p className="text-destructive text-xs mt-1">{errors.segment}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground">Capacidade desejada (kg)</label>
                      <input className="w-full mt-1 p-3 border rounded-lg bg-background text-foreground text-sm" placeholder="Ex: 60 kg/batelada" value={form.capacity} onChange={e => update("capacity", e.target.value)} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-semibold text-foreground">Região</label>
                      <input className="w-full mt-1 p-3 border rounded-lg bg-background text-foreground text-sm" placeholder="Cidade / Estado" value={form.region} onChange={e => update("region", e.target.value)} />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground">Prazo</label>
                      <input className="w-full mt-1 p-3 border rounded-lg bg-background text-foreground text-sm" placeholder="Ex: 3 meses" value={form.timeline} onChange={e => update("timeline", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground">Orçamento disponível</label>
                    <select className="w-full mt-1 p-3 border rounded-lg bg-background text-foreground text-sm" value={form.budget} onChange={e => update("budget", e.target.value)}>
                      <option value="">Selecione...</option>
                      {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground">Mensagem</label>
                    <textarea className="w-full mt-1 p-3 border rounded-lg bg-background text-foreground text-sm h-28 resize-none" value={form.message} onChange={e => update("message", e.target.value)} />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-newtech-gold-dark text-primary-foreground font-bold rounded-lg text-base">
                    Enviar via WhatsApp
                  </Button>
                </form>
              </FadeIn>
            </div>

            {/* Info */}
            <div>
              <FadeIn delay={200}>
                <div className="space-y-6">
                  <div className="p-6 bg-secondary rounded-xl">
                    <Phone className="h-6 w-6 text-primary mb-2" />
                    <h3 className="font-bold text-foreground">WhatsApp</h3>
                    <a href="https://wa.me/5581994185453" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">(81) 99418-5453</a>
                  </div>
                  <div className="p-6 bg-secondary rounded-xl">
                    <Mail className="h-6 w-6 text-primary mb-2" />
                    <h3 className="font-bold text-foreground">Email</h3>
                    <a href="mailto:comercial@newtechengenharia.com" className="text-sm text-primary hover:underline">comercial@newtechengenharia.com</a>
                  </div>
                  <div className="p-6 bg-secondary rounded-xl">
                    <MapPin className="h-6 w-6 text-primary mb-2" />
                    <h3 className="font-bold text-foreground">Endereço</h3>
                    <p className="text-sm text-muted-foreground">Rua Jerônimo Heráclio, 1700A<br />Limoeiro, PE — 55700-000</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
