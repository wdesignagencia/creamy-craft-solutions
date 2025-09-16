import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-acoustic-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fale conosco para projetos, orçamentos ou dúvidas técnicas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Phone, title: 'Telefone', info: '(19) 3227-7077', action: 'tel:+551932277077' },
            { icon: MessageCircle, title: 'WhatsApp', info: '(19) 9804-6675', action: 'https://wa.me/5519980466675' },
            { icon: Mail, title: 'E-mail', info: 'contato@acousticaudio.com.br', action: 'mailto:contato@acousticaudio.com.br' },
            { icon: MapPin, title: 'Endereço', info: 'Campinas - SP', action: '#' }
          ].map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-card transition-all duration-300 cursor-pointer" onClick={() => window.open(contact.action, '_blank')}>
                <CardContent className="p-6 text-center">
                  <contact.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{contact.title}</h3>
                  <p className="text-muted-foreground text-sm">{contact.info}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" className="bg-gradient-cta hover:shadow-glow text-acoustic-dark font-bold px-12 py-4 text-lg rounded-modern">
            <Phone className="w-5 h-5 mr-2" />
            Solicitar Orçamento
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;