import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProductShowcase from "@/components/ProductShowcase";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <WhyChooseSection />
      <ProductShowcase />
      <ProductsSection />
      <TestimonialsSection />
    </div>
  );
};

export default Index;
