import { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import MethodologySection from '@/components/MethodologySection';
import ProcessSection from '@/components/ProcessSection';
import ScopeSection from '@/components/ScopeSection';
import InvestmentSection from '@/components/InvestmentSection';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import Navigation from '@/components/Navigation';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <MethodologySection />
        <ProcessSection />
        <ScopeSection />
        <InvestmentSection />
        <AboutSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;