
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import OffersSection from '@/components/OffersSection';
import BenefitsSection from '@/components/BenefitsSection';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <OffersSection />
      <BenefitsSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
