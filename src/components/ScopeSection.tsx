import { motion } from 'framer-motion';
import { Settings, Megaphone, FileBarChart, Zap, CheckCircle2 } from 'lucide-react';

const ScopeSection = () => {
  const setupItems = [
    "Otimização LinkedIn + Instagram",
    "Identidade visual digital",
    "Campanhas Google Ads",
    "Landing pages de conversão",
    "Setup de tracking e analytics"
  ];

  const monthlyItems = [
    "12 posts estratégicos por mês",
    "Gestão completa de tráfego pago",
    "Relatórios com insights acionáveis",
    "Otimizações baseadas em dados",
    "Suporte prioritário via WhatsApp"
  ];

  return (
    <section id="escopo" className="py-16 lg:py-24 bg-gray-50">
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
              Escopo Completo
            </h2>
            <p className="text-xl text-gray-modern leading-relaxed max-w-3xl mx-auto">
              Tudo que você precisa para <strong className="text-blue-professional">dominar o digital</strong> e 
              <strong className="text-orange-cta"> captar construtoras</strong> de forma consistente
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Setup Inicial */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-modern shadow-card p-8 hover:shadow-professional transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-professional rounded-modern flex items-center justify-center mr-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-professional">Setup Inicial</h3>
                  <p className="text-gray-modern">Estruturação completa</p>
                </div>
              </div>

              <div className="space-y-4">
                {setupItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orange-cta mr-3 flex-shrink-0" />
                    <span className="text-gray-modern">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-modern">
                <p className="text-sm text-blue-professional font-semibold">
                  <Zap className="w-4 h-4 inline mr-2" />
                  Taxa única de R$ 600,00
                </p>
              </div>
            </motion.div>

            {/* Produção Mensal */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-modern shadow-card p-8 hover:shadow-professional transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-cta rounded-modern flex items-center justify-center mr-4">
                  <Megaphone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-professional">Produção Mensal</h3>
                  <p className="text-gray-modern">Execução contínua</p>
                </div>
              </div>

              <div className="space-y-4">
                {monthlyItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orange-cta mr-3 flex-shrink-0" />
                    <span className="text-gray-modern">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-modern">
                <p className="text-sm text-orange-cta font-semibold">
                  <FileBarChart className="w-4 h-4 inline mr-2" />
                  Mensalidade de R$ 1.200,00
                </p>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-hero rounded-modern p-8 lg:p-12 text-center text-white"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Informações Necessárias para Máximos Resultados
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h4 className="text-xl font-semibold mb-4 text-orange-300">Para personalizar sua estratégia:</h4>
                <ul className="space-y-2 text-white/90">
                  <li>• Ticket médio dos projetos</li>
                  <li>• Principais tipos de clientes</li>
                  <li>• Meta de leads qualificados/mês</li>
                  <li>• Orçamento disponível para investir</li>
                </ul>
              </div>
              
              <div className="text-left">
                <h4 className="text-xl font-semibold mb-4 text-orange-300">Por que isso é crítico:</h4>
                <p className="text-white/90 leading-relaxed">
                  "Cada estratégia digital é personalizada. Estes dados nos permitem criar campanhas mais assertivas 
                  e calcular o ROI esperado para seu negócio específico."
                </p>
              </div>
            </div>

            <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-lg font-semibold">
              <Settings className="w-5 h-5 mr-2" />
              Estratégia 100% personalizada
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScopeSection;