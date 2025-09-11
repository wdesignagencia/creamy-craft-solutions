import { motion } from 'framer-motion';
import { DollarSign, Zap, TrendingUp, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const InvestmentSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="investimento" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-professional mb-6">
              Investimento
            </h2>
            <p className="text-xl text-gray-modern leading-relaxed max-w-3xl mx-auto">
              Valores transparentes para resultados <strong className="text-orange-cta">mensuráveis</strong> e 
              <strong className="text-blue-professional"> ROI comprovado</strong>
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="space-y-8 mb-12">
            {/* Mensalidade */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-modern p-8 border-2 border-blue-200">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center mb-2">
                    <DollarSign className="w-8 h-8 text-blue-professional mr-3" />
                    <h3 className="text-2xl font-bold text-blue-professional">Mensalidade</h3>
                  </div>
                  <p className="text-gray-modern mb-2">Todo o escopo mencionado incluído</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-blue-professional">R$ 1.750</span>
                    <span className="text-lg text-gray-modern ml-1">/mês</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-professional">
                  <CheckCircle2 className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Gestão Completa</span>
                </div>
              </div>
            </motion.div>

            {/* Setup Inicial */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-modern p-8 border-2 border-orange-200">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center mb-2">
                    <Zap className="w-8 h-8 text-orange-cta mr-3" />
                    <h3 className="text-2xl font-bold text-blue-professional">Setup Inicial</h3>
                  </div>
                  <p className="text-gray-modern mb-2">Taxa única para estruturação</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-orange-cta">R$ 600</span>
                    <span className="text-lg text-gray-modern ml-1">taxa única</span>
                  </div>
                </div>
                <div className="flex items-center text-orange-cta">
                  <CheckCircle2 className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Implementação</span>
                </div>
              </div>
            </motion.div>

            {/* Orçamento de Mídia */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} viewport={{
            once: true
          }} className="bg-gradient-to-r from-green-50 to-green-100 rounded-modern p-8 border-2 border-green-200">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="text-2xl font-bold text-blue-professional">Orçamento de Mídia</h3>
                  </div>
                  <p className="text-gray-modern mb-2">Investimento nas plataformas (Google/Meta)</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-green-600">R$ 800-1.500</span>
                    <span className="text-lg text-gray-modern ml-1">/mês</span>
                  </div>
                </div>
                <div className="flex items-center text-green-600">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Sugerido</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Urgency */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} viewport={{
          once: true
        }} className="bg-gradient-hero rounded-modern p-8 text-center text-white mb-12">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-orange-300 mr-3" />
              <h3 className="text-2xl sm:text-3xl font-bold">Validade: 7 Dias</h3>
            </div>
            <p className="text-xl mb-6 opacity-90">
              Esta proposta tem <strong>validade limitada</strong> para garantir seu posicionamento 
              no mercado antes dos concorrentes
            </p>
            <div className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-full font-semibold">
              <AlertCircle className="w-5 h-5 mr-2" />
              Oportunidade por tempo limitado
            </div>
          </motion.div>

          {/* ROI Info */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }} viewport={{
          once: true
        }} className="bg-gray-50 rounded-modern p-8 lg:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-professional mb-6">
              Retorno do Investimento
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-orange-cta mb-2">3x</div>
                <p className="text-gray-modern">ROI médio após 6 meses</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-professional mb-2">15+</div>
                <p className="text-gray-modern">Leads qualificados/mês</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                <p className="text-gray-modern">Taxa de conversão média</p>
              </div>
            </div>
            
            <Button onClick={() => scrollToSection('#cta')} size="lg" className="bg-gradient-cta hover:shadow-cta text-white font-bold px-8 py-4 text-lg rounded-modern transition-all duration-300 hover:scale-105">
              <DollarSign className="w-5 h-5 mr-2" />
              Aceitar Proposta Agora
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default InvestmentSection;