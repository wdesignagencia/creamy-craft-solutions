import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, MapPin, Calendar, Target, Volume2, Zap } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "40+ Anos",
      description: "De experiência em áudio profissional"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Especialização",
      description: "Em sistemas de som para eventos"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Qualidade Premium",
      description: "Componentes italianos e matéria prima de primeira"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Campinas - SP",
      description: "Atendimento em todo território nacional"
    }
  ];

  const values = [
    {
      title: "Qualidade Incomparável",
      description: "Utilizamos apenas componentes premium e madeira multilaminado naval"
    },
    {
      title: "Experiência Comprovada",
      description: "Mais de 4 décadas fornecendo sistemas de áudio para todo o Brasil"
    },
    {
      title: "Inovação Constante",
      description: "Sempre atualizados com as últimas tecnologias em áudio profissional"
    },
    {
      title: "Suporte Completo",
      description: "Da concepção do projeto até a instalação e manutenção"
    }
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-gradient-to-br from-acoustic-light to-white">
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
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
              <Volume2 className="w-4 h-4 mr-2" />
              Sobre Nós
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Acoustic Audio
              <span className="text-primary"> - Tradição em Som</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Há mais de <strong className="text-primary">40 anos</strong> desenvolvendo e fabricando 
              sistemas de áudio profissionais de alta qualidade para todo o Brasil
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
                className="bg-card rounded-modern shadow-card p-6 text-center hover:shadow-floating transition-all duration-300 group"
              >
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
            className="bg-card rounded-modern shadow-card p-8 lg:p-12 mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  Nossa História
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Fundada em Campinas/SP, a <strong className="text-primary">Acoustic Audio</strong> se consolidou como 
                  referência nacional em sistemas de áudio profissionais, atendendo desde pequenos eventos 
                  até grandes instalações.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-modern p-4">
                  <p className="text-foreground font-semibold text-center">
                    "Transformando sonhos em experiências sonoras inesquecíveis"
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  Por que Escolher a Acoustic Audio?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Tradição e Qualidade</h4>
                      <p className="text-muted-foreground text-sm">4 décadas de experiência em áudio profissional</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Atendimento Especializado</h4>
                      <p className="text-muted-foreground text-sm">Equipe técnica qualificada para projetos customizados</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Zap className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Tecnologia de Ponta</h4>
                      <p className="text-muted-foreground text-sm">Componentes italianos e matéria prima premium</p>
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
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
              Nossos Diferenciais
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-modern shadow-card p-6 hover:shadow-floating transition-all duration-300 group"
                >
                  <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
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