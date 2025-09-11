import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, MapPin, Calendar, Target } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "10+ Anos",
      description: "De experiência em marketing B2B técnico"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Especialização",
      description: "Em engenharia e construção civil"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "ROI Mensurável",
      description: "Foco em resultados concretos e dados"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Suporte Local",
      description: "Atendimento presencial Campinas/SP"
    }
  ];

  const values = [
    {
      title: "Transparência Total",
      description: "Acesso completo a dados, métricas e resultados em tempo real"
    },
    {
      title: "Especialização Técnica",
      description: "Entendemos profundamente o mercado de engenharia e construção"
    },
    {
      title: "Resultados Mensuráveis",
      description: "Cada real investido é rastreado e otimizado para máximo ROI"
    },
    {
      title: "Parceria de Longo Prazo",
      description: "Não vendemos serviços, construímos parcerias estratégicas"
    }
  ];

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-gray-50">
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
              Sobre a Wijngaarde Design
            </h2>
            <p className="text-xl text-gray-modern leading-relaxed max-w-3xl mx-auto">
              Somos especialistas em <strong className="text-blue-professional">marketing digital B2B técnico</strong>, 
              com foco em empresas de engenharia e construção civil
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-modern shadow-card p-6 text-center hover:shadow-professional transition-all duration-300"
              >
                <div className="text-orange-cta mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-professional mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-modern text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-modern shadow-card p-8 lg:p-12 mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-professional mb-6">
                  Nossa Missão
                </h3>
                <p className="text-lg text-gray-modern leading-relaxed mb-6">
                  <strong>Elevar o padrão</strong> de empresas técnicas especializadas através de estratégias 
                  digitais que realmente funcionam no mercado B2B.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-modern p-4">
                  <p className="text-blue-professional font-semibold text-center">
                    "Ser a primeira escolha para estabelecimentos que buscam excelência digital"
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-professional mb-6">
                  Por que Escolher a Wijngaarde?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-orange-cta mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-professional">Expertise Comprovada</h4>
                      <p className="text-gray-modern text-sm">Já ajudamos dezenas de empresas técnicas a crescer digitalmente</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-orange-cta mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-professional">Atendimento Personalizado</h4>
                      <p className="text-gray-modern text-sm">Cada cliente tem estratégia única e acompanhamento dedicado</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp className="w-6 h-6 text-orange-cta mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-professional">Resultados Garantidos</h4>
                      <p className="text-gray-modern text-sm">ROI mensurável com relatórios detalhados mensais</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-professional text-center mb-12">
              Nossos Valores
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-modern shadow-card p-6 hover:shadow-professional transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-blue-professional mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-modern leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;