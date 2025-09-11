import { motion } from 'framer-motion';
import { FileText, Search, PenTool, Zap, Rocket, BarChart3 } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Briefing Estratégico",
      description: "Imersão no seu negócio e análise de oportunidades",
      duration: "Semana 1"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Pesquisa de Mercado", 
      description: "Análise detalhada de concorrentes e palavras-chave",
      duration: "Semana 2"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Planejamento",
      description: "Estratégia de conteúdo e cronograma personalizado",
      duration: "Semana 3"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Execução Criativa",
      description: "Produção de materiais e configuração de campanhas",
      duration: "Semana 4"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Lançamento",
      description: "Ativação coordenada de todas as campanhas",
      duration: "Semana 5"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Otimização",
      description: "Análise de dados e melhorias contínuas",
      duration: "Ongoing"
    }
  ];

  return (
    <section id="processo" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-professional mb-6">
              Processo em 6 Etapas
            </h2>
            <p className="text-xl text-gray-modern leading-relaxed max-w-3xl mx-auto">
              Um roadmap estruturado para transformar sua presença digital em 
              <strong className="text-orange-cta"> resultados concretos</strong>
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-professional to-orange-cta rounded-full"></div>
            
            {/* Mobile Timeline Line */}
            <div className="lg:hidden absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-professional to-orange-cta rounded-full"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Step Number Circle */}
                  <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center text-white font-bold text-xl shadow-cta z-10">
                    {index + 1}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ml-24 lg:ml-0 ${
                    index % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'
                  }`}>
                    <div className="bg-card rounded-modern shadow-card p-6 lg:p-8 hover:shadow-professional transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="text-orange-cta mr-4">
                          {step.icon}
                        </div>
                        <span className="text-sm font-semibold text-blue-bright bg-blue-50 px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-blue-professional mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-modern leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-modern p-8 lg:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-professional mb-4">
                Cronograma Transparente
              </h3>
              <p className="text-lg text-gray-modern mb-6 max-w-2xl mx-auto">
                Você acompanha cada etapa do processo com relatórios semanais e tem acesso total aos resultados em tempo real
              </p>
              <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-card">
                <BarChart3 className="w-5 h-5 text-orange-cta mr-2" />
                <span className="font-semibold text-blue-professional">Dashboard exclusivo para acompanhamento</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;