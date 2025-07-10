import React from 'react';
import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import ProjectsGallery from '../components/home/ProjectsGallery';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-darker">
      <Hero />
      <ServicesPreview />
      <ProjectsGallery />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;