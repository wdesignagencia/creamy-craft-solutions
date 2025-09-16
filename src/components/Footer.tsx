import { motion } from 'framer-motion';
import logoAcoustic from '@/assets/logo-acoustic.png';

const Footer = () => {
  return (
    <footer className="bg-acoustic-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src={logoAcoustic} alt="Acoustic Audio" className="h-10 w-10" />
            <span className="text-2xl font-bold">ACOUSTIC AUDIO</span>
          </div>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Rua José Elias Jorge 46 - Jardim do Lago<br />
            Campinas - SP CEP: 13050-021<br />
            Tel: (19) 3227-7077 | 9.9804-6675<br />
            e-mail: contato@acousticaudio.com.br
          </p>
          <div className="border-t border-white/20 pt-6">
            <p className="text-white/60 text-sm">
              © 2024 Acoustic Audio. Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;