import React from 'react';
import dynamic from 'next/dynamic';
import { Hero } from '../src/components/Hero';
import { About } from '../src/components/About';
import { Services } from '../src/components/Services';

// Dynamic imports for below-the-fold components to optimize initial JS bundle chunk sizes
const FeaturedProjects = dynamic(() => import('../src/components/FeaturedProjects').then(mod => mod.FeaturedProjects), { ssr: true });
const TechStack = dynamic(() => import('../src/components/TechStack').then(mod => mod.TechStack), { ssr: true });
const WhyNexora = dynamic(() => import('../src/components/WhyNexora').then(mod => mod.WhyNexora), { ssr: true });
const Testimonials = dynamic(() => import('../src/components/Testimonials').then(mod => mod.Testimonials), { ssr: true });
const FAQ = dynamic(() => import('../src/components/FAQ').then(mod => mod.FAQ), { ssr: true });
const ReadyToBuild = dynamic(() => import('../src/components/ReadyToBuild').then(mod => mod.ReadyToBuild), { ssr: true });

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <TechStack />
      <WhyNexora />
      <Testimonials />
      <FAQ />
      <ReadyToBuild />
    </>
  );
}
