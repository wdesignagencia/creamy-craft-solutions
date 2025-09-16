import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Mic, 
  Truck, 
  Package,
  ArrowRight,
  Sparkles,
  CheckCircle
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: 'Projetos',
      description: 'Sonorização do seu espaço através de plantas do local ou visita técnica. Experiência e profissionalismo garantem a plenitude do projeto.',
      features: [
        'Análise técnica detalhada',
        'Plantas e dimensionamento',
        'Consultoria especializada',
        'Suporte pós-instalação'
      ],
      gradient: 'from-primary to-primary/70'
    },
    {
      icon: Mic,
      title: 'Instalações',
      description: 'Fornecemos todo sistema de som: amplificadores, processadores, mixers, microfones, pedestais e muito mais.',
      features: [
        'Sistemas completos',
        'Equipamentos profissionais',
        'Instalação especializada',
        'Garantia total'
      ],
      gradient: 'from-accent to-yellow-500'
    },
    {
      icon: Truck,
      title: 'Empresas de Locação',
      description: 'Com clientes em todo Brasil, nossos sistemas abrangem qualquer porte de evento. Fabricamos caixas line array, subwoofers, monitores e point sources.',
      features: [
        'Line arrays profissionais',
        'Subwoofers potentes',
        'Monitores de palco',
        'Point sources versáteis'
      ],
      gradient: 'from-secondary to-gray-500'
    },
    {
      icon: Package,
      title: 'Produtos',
      description: 'Fabricação com matéria prima de primeira linha: tinta PU, madeira multilaminado naval, ferragens impressas a laser e pintura epoxi.',
      features: [
        'Matéria prima premium',
        'Madeira multilaminado naval',
        'Ferragens de precisão',
        'Falantes e drivers italianos'
      ],
      gradient: 'from-primary/80 to-accent/80'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-br from-acoustic-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Nossos Serviços
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções Completas em
            <span className="text-primary"> Áudio Profissional</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Há mais de 40 anos fornecendo equipamentos e serviços de alta qualidade para todo o Brasil
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants} transition={{ duration: 0.6 }}>
              <Card className="h-full group hover:shadow-floating transition-all duration-500 border-0 bg-gradient-card backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8 lg:p-10">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`p-4 rounded-modern bg-gradient-to-br ${service.gradient} shadow-card group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    className="group/btn w-full justify-between hover:bg-primary/5 rounded-card p-4 h-auto"
                  >
                    <span className="font-semibold text-primary">Saiba mais</span>
                    <ArrowRight className="w-5 h-5 text-primary group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;