import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Phone, Mail } from 'lucide-react';
import { AnimatedText } from '@/components/ui/animated-shiny-text';
import logoAcoustic from '@/assets/logo-acoustic.png';
import heroBackground from '@/assets/hero-audio-background.png';
const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Professional audio equipment" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-8 z-20"
      >
        <div className="flex items-center space-x-3">
          <img src={logoAcoustic} alt="Acoustic Audio" className="h-12 w-12" />
          <span className="text-white text-xl font-bold">ACOUSTIC AUDIO</span>
        </div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Animated Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatedText 
              text="Transformamos espaços em experiências sonoras perfeitas"
              gradientColors="linear-gradient(90deg, #ffffff, #3b82f6, #ffffff)"
              gradientAnimationDuration={3}
              hoverEffect={true}
              textClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto px-4"
          >
            Há mais de <strong>25 anos</strong> criando soluções em áudio profissional para eventos, igrejas, teatros e espaços corporativos
          </motion.p>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 max-w-3xl mx-auto"
          >
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-white/90 text-sm sm:text-base">Anos de experiência</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-white/90 text-sm sm:text-base">Projetos realizados</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-white/90 text-sm sm:text-base">Satisfação garantida</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              onClick={() => scrollToSection('#products')} 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg rounded-lg w-full sm:w-auto transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Ver Nossos Produtos
            </Button>
            <Button 
              onClick={() => scrollToSection('#contact')} 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/60 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-secondary text-white font-semibold px-8 py-4 text-lg rounded-lg w-full sm:w-auto transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80"
          >
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>(19) 3227-7077</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>contato@acousticaudio.com.br</span>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
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