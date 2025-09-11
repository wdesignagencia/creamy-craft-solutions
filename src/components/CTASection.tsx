import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Globe, Phone, Clock, Users } from 'lucide-react';

const CTASection = () => {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+55 19 99156-3761",
      href: "https://wa.me/5519991563761",
      primary: true
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "comercial@wdesignagencia.com.br",
      href: "mailto:comercial@wdesignagencia.com.br",
      primary: false
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website",
      value: "www.wdesignagencia.com.br",
      href: "https://www.wdesignagencia.com.br",
      primary: false
    }
  ];

  return (
    <section id="cta" className="py-16 lg:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6">
              Pronto para Transformar sua{' '}
              <span className="text-transparent bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text">
                Presença Digital?
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-8">
              Entre em contato agora e comece a captar construtoras de forma estratégica e mensurável
            </p>
            
            {/* Urgency */}
            <div className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-full font-semibold mb-8">
              <Clock className="w-5 h-5 mr-2" />
              Proposta válida por apenas 7 dias
            </div>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`block bg-white/10 backdrop-blur-md rounded-modern p-6 hover:bg-white/20 transition-all duration-300 border-2 ${
                  method.primary 
                    ? 'border-orange-300 hover:border-orange-200 hover:scale-105' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                <div className={`${method.primary ? 'text-orange-300' : 'text-white'} mb-4 flex justify-center`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {method.title}
                </h3>
                <p className={`${method.primary ? 'text-orange-200' : 'text-white/80'} break-all`}>
                  {method.value}
                </p>
                {method.primary && (
                  <div className="mt-3 inline-flex items-center text-orange-300 text-sm font-semibold">
                    Resposta imediata →
                  </div>
                )}
              </motion.a>
            ))}
          </div>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-cta hover:shadow-cta text-white font-bold px-12 py-6 text-xl rounded-modern transition-all duration-300 hover:scale-105"
            >
              <a 
                href="https://wa.me/5519991563761?text=Olá! Tenho interesse na proposta de marketing digital para a Ruído do Solo. Gostaria de saber mais detalhes."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Iniciar Conversa no WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/80"
          >
            <div className="flex items-center justify-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>Resposta em até 2 horas úteis</span>
            </div>
            <div className="flex items-center justify-center">
              <Users className="w-5 h-5 mr-2" />
              <span>Consulta inicial sem compromisso</span>
            </div>
          </motion.div>

          {/* Footer Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-modern p-8">
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                "Não perca a oportunidade de ser pioneiro no marketing digital do seu setor. 
                Seus concorrentes ainda vão demorar para descobrir essas estratégias."
              </p>
              <div className="text-orange-300 font-semibold">
                — Equipe Wijngaarde Design
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;