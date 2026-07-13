import React from 'react';
import { Hero } from '../src/components/Hero';
import { About } from '../src/components/About';
import { Services } from '../src/components/Services';
import { FeaturedProjects } from '../src/components/FeaturedProjects';
import { TechStack } from '../src/components/TechStack';
import { WhyNexora } from '../src/components/WhyNexora';
import { Pricing } from '../src/components/Pricing';
import { Testimonials } from '../src/components/Testimonials';
import { FAQ } from '../src/components/FAQ';
import { FinalCTA } from '../src/components/FinalCTA';
import { ReadyToBuild } from '../src/components/ReadyToBuild';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <TechStack />
      <WhyNexora />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <ReadyToBuild />
    </>
  );
}
