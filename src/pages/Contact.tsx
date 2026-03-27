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

const inputClass = "w-full mt-1.5 px-4 py-3 border border-border rounded-xl bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

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
    const lines = [
      `*Solicitação de Orçamento — Newtech*`,
      ``,
      `👤 *Nome:* ${form.name}`,
      form.company ? `🏢 *Empresa:* ${form.company}` : '',
      `📦 *Segmento:* ${form.segment}`,
      form.capacity ? `⚙️ *Capacidade desejada:* ${form.capacity}` : '',
      form.region ? `📍 *Região:* ${form.region}` : '',
      form.timeline ? `📅 *Prazo:* ${form.timeline}` : '',
      form.budget ? `💰 *Orçamento:* ${form.budget}` : '',
      ``,
      form.message ? `💬 *Mensagem:*\n${form.message}` : '',
    ].filter(Boolean).join('\n');
    const text = encodeURIComponent(lines);
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

      <section className="pt-40 pb-28">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="label-uppercase mb-3">Contato</p>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                Solicitar <span className="font-display italic">Orçamento</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-md mx-auto">
                Preencha o formulário e nossa equipe entrará em contato rapidamente.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <FadeIn>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground">Nome completo *</label>
                      <input className={inputClass} value={form.name} onChange={e => update("name", e.target.value)} />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Empresa</label>
                      <input className={inputClass} value={form.company} onChange={e => update("company", e.target.value)} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground">Segmento *</label>
                      <select className={inputClass} value={form.segment} onChange={e => update("segment", e.target.value)}>
                        <option value="">Selecione...</option>
                        {segments.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.segment && <p className="text-destructive text-xs mt-1">{errors.segment}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Capacidade desejada</label>
                      <input className={inputClass} placeholder="Ex: 60 kg/batelada" value={form.capacity} onChange={e => update("capacity", e.target.value)} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground">Região</label>
                      <input className={inputClass} placeholder="Cidade / Estado" value={form.region} onChange={e => update("region", e.target.value)} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Prazo</label>
                      <input className={inputClass} placeholder="Ex: 3 meses" value={form.timeline} onChange={e => update("timeline", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Orçamento disponível</label>
                    <select className={inputClass} value={form.budget} onChange={e => update("budget", e.target.value)}>
                      <option value="">Selecione...</option>
                      {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Mensagem</label>
                    <textarea className={`${inputClass} h-28 resize-none`} value={form.message} onChange={e => update("message", e.target.value)} />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-xl text-sm font-medium bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary border border-primary">
                    Enviar via WhatsApp
                  </Button>
                </form>
              </FadeIn>
            </div>

            {/* Info */}
            <div>
              <FadeIn delay={200}>
                <div className="space-y-4">
                  {[
                    { icon: Phone, label: "WhatsApp", value: "(81) 99418-5453", href: "https://wa.me/5581994185453" },
                    { icon: Mail, label: "Email", value: "comercial@newtechengenharia.com", href: "mailto:comercial@newtechengenharia.com" },
                  ].map((item, i) => (
                    <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="block p-5 bg-secondary rounded-2xl hover:bg-muted transition-colors group">
                      <item.icon className="h-5 w-5 text-primary mb-2" />
                      <p className="font-medium text-foreground text-sm">{item.label}</p>
                      <p className="text-sm text-primary group-hover:underline underline-offset-2">{item.value}</p>
                    </a>
                  ))}
                  <div className="p-5 bg-secondary rounded-2xl">
                    <MapPin className="h-5 w-5 text-primary mb-2" />
                    <p className="font-medium text-foreground text-sm">Endereço</p>
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
