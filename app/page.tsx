'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return (
    <>
      <Hero />
      <About setView={handleSetView} />
      <Services setView={handleSetView} />
      <FeaturedProjects setView={handleSetView} />
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
