import { motion } from 'framer-motion';
import { Share2, Target, Search, BarChart3 } from 'lucide-react';

const MethodologySection = () => {
  const strategies = [
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Redes Sociais Estratégicas",
      subtitle: "Conteúdo educativo, não vendas diretas",
      points: [
        "LinkedIn para decisores B2B",
        "Instagram para autoridade técnica", 
        "SEO otimizado para palavras-chave do setor",
        "Posicionamento como especialista"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Tráfego Pago Direcionado",
      subtitle: "Campanhas segmentadas para construtoras",
      points: [
        "Gestão de tráfego para melhor distribuição dos conteúdos",
        "Campanhas segmentadas para construtoras",
        "Landing pages de alta conversão",
        "Remarketing para leads mornos"
      ]
    }
  ];

  return (
    <section id="metodologia" className="py-16 lg:py-24 bg-white">
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
              Nossa Metodologia Comprovada
            </h2>
            <p className="text-xl text-gray-modern leading-relaxed max-w-3xl mx-auto">
              Uma estratégia digital integrada que combina <strong className="text-blue-professional">autoridade técnica</strong> 
              {" "}com <strong className="text-orange-cta">resultados mensuráveis</strong>
            </p>
          </motion.div>

          {/* Strategy Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="bg-card rounded-modern shadow-card p-8 hover:shadow-professional transition-all duration-300"
              >
                <div className="text-orange-cta mb-6">
                  {strategy.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-professional mb-3">
                  {strategy.title}
                </h3>
                <p className="text-lg text-gray-modern mb-6">
                  {strategy.subtitle}
                </p>
                <ul className="space-y-3">
                  {strategy.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-cta rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-modern">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Results Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-modern p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Search className="w-12 h-12 text-blue-professional mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-blue-professional mb-2">Visibilidade</h4>
                <p className="text-gray-modern">Apareça quando construtoras procuram por análise acústica</p>
              </div>
              <div>
                <Target className="w-12 h-12 text-orange-cta mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-blue-professional mb-2">Precisão</h4>
                <p className="text-gray-modern">Campanhas direcionadas para seu público ideal</p>
              </div>
              <div>
                <BarChart3 className="w-12 h-12 text-blue-bright mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-blue-professional mb-2">Resultados</h4>
                <p className="text-gray-modern">ROI mensurável e leads qualificados</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;