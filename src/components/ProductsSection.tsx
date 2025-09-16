import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Volume2, Zap, Award, CheckCircle } from 'lucide-react';
import speakerSubwoofer from "@/assets/speaker-subwoofer.png";
import lineArray from "@/assets/line-array.png";
import columnSpeaker from "@/assets/column-speaker.png";
import subwooferStudio from "@/assets/subwoofer-studio.jpg";
import lineArrayVenue from "@/assets/line-array-venue.jpg";
import columnSpeakerModern from "@/assets/column-speaker-modern.jpg";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "Line Arrays Profissionais",
      description: "Sistemas line array de alto padrão para grandes eventos e venues",
      features: ["Cobertura uniforme", "Potência superior", "Design modular", "Drivers italianos"],
      image: lineArray,
      demoImage: lineArrayVenue,
      category: "Line Arrays"
    },
    {
      id: 2,
      title: "Subwoofers Studio",
      description: "Graves profundos e controlados para estúdios e instalações fixas",
      features: ["Resposta até 35Hz", "Madeira naval", "Alta potência", "Controle preciso"],
      image: speakerSubwoofer,
      demoImage: subwooferStudio,
      category: "Subwoofers"
    },
    {
      id: 3,
      title: "Caixas Coluna Premium",
      description: "Monitores de alta fidelidade para aplicações profissionais",
      features: ["Som cristalino", "Design elegante", "Versátil", "Acabamento premium"],
      image: columnSpeaker,
      demoImage: columnSpeakerModern,
      category: "Monitores"
    },
    {
      id: 4,
      title: "Point Sources Versáteis",
      description: "Soluções compactas para instalações que exigem qualidade",
      features: ["Tamanho compacto", "Som potente", "Múltiplas aplicações", "Fácil instalação"],
      image: columnSpeaker,
      demoImage: columnSpeakerModern,
      category: "Point Sources"
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
    <section id="produtos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <Volume2 className="w-4 h-4 mr-2" />
            Nossos Produtos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Equipamentos de
            <span className="text-primary"> Alto Padrão</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fabricamos sistemas de áudio profissionais com componentes premium e tecnologia italiana
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product, index) => (
            <motion.div key={product.id} variants={itemVariants} transition={{ duration: 0.6 }}>
              <Card className="group overflow-hidden hover:shadow-floating transition-all duration-500 border-0 bg-gradient-card backdrop-blur-sm h-full">
                <div className="relative overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group/btn hover:bg-primary/5 rounded-card border-primary/20"
                  >
                    <Award className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-semibold">Ver Detalhes</span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button size="lg" className="bg-gradient-cta hover:shadow-glow text-acoustic-dark font-bold px-12 py-4 rounded-modern">
            <Zap className="w-5 h-5 mr-2" />
            Catálogo Completo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;