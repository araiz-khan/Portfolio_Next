'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/header';
import HeroSection from '@/components/sections/hero-section';
import Footer from '@/components/footer';

const AboutSection = dynamic(() => import('@/components/sections/about-section'));
const ServicesSection = dynamic(() => import('@/components/sections/services-section'));
const ProjectsSection = dynamic(() => import('@/components/sections/projects-section'));
const ContactSection = dynamic(() => import('@/components/sections/contact-section'));

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
