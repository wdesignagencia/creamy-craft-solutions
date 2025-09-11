import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrendingUp, Target, Users } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-bright/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white/90 text-sm font-medium mb-8"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Proposta Comercial Exclusiva
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Estratégia Digital para{' '}
            <span className="text-transparent bg-gradient-to-r from-white to-blue-100 bg-clip-text">
              Captação de Construtoras
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto px-4"
          >
            Transforme sua expertise técnica em <strong>leads qualificados</strong> através de marketing digital estratégico
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">85%</div>
              <div className="text-white/80 text-sm sm:text-base">Empresas dependem de indicações</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">40%</div>
              <div className="text-white/80 text-sm sm:text-base">Crescimento em buscas anuais</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-white/80 text-sm sm:text-base">Anos de experiência B2B</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection('#metodologia')}
              size="lg"
              className="bg-gradient-cta hover:shadow-cta text-white font-bold px-8 py-4 text-lg rounded-modern w-full sm:w-auto transition-all duration-300 hover:scale-105"
            >
              <Target className="w-5 h-5 mr-2" />
              Quero Ver a Proposta Completa
            </Button>
            <Button
              onClick={() => scrollToSection('#investimento')}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-professional font-semibold px-8 py-4 text-lg rounded-modern w-full sm:w-auto transition-all duration-300"
            >
              <Users className="w-5 h-5 mr-2" />
              Ver Investimento
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/70 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;