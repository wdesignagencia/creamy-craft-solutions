import { motion } from 'framer-motion';
import { TrendingDown, Search, Users, AlertTriangle } from 'lucide-react';

const ProblemSection = () => {
  const stats = [
    {
      icon: <TrendingDown className="w-8 h-8" />,
      percentage: "85%",
      description: "das empresas de engenharia civil ainda dependem de indicações",
      color: "text-red-500"
    },
    {
      icon: <Search className="w-8 h-8" />,
      percentage: "40%",
      description: "crescimento anual em busca por 'análise acústica construção'",
      color: "text-blue-bright"
    },
    {
      icon: <Users className="w-8 h-8" />,
      percentage: "70%",
      description: "dos decisores do setor estão cada vez mais no digital",
      color: "text-green-500"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      percentage: "90%",
      description: "dos concorrentes não estão no digital estrategicamente",
      color: "text-orange-cta"
    }
  ];

  return (
    <section id="problema" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-professional mb-6">
              O Cenário Atual do Mercado
            </h2>
            <p className="text-xl text-gray-modern leading-relaxed max-w-3xl mx-auto">
              Enquanto o mercado de construção civil cresce, muitas empresas especializadas ainda não aproveitam 
              <strong className="text-blue-professional"> as oportunidades digitais</strong>
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-modern shadow-card p-8 hover:shadow-professional transition-all duration-300"
              >
                <div className={`${stat.color} mb-4`}>
                  {stat.icon}
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-blue-professional mb-3">
                  {stat.percentage}
                </div>
                <p className="text-gray-modern leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Opportunity Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-hero rounded-modern p-8 lg:p-12 text-center text-white"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Oportunidade Única no Mercado
            </h3>
            <p className="text-xl leading-relaxed mb-6 opacity-90">
              Enquanto seus concorrentes dependem de métodos tradicionais, você pode se posicionar como 
              <strong> a referência digital</strong> em análise acústica e vibração
            </p>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-lg font-semibold">
              <TrendingDown className="w-5 h-5 mr-2" />
              É hora de agir antes que outros descubram
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;