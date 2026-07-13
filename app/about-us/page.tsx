'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { AboutUsPage } from '../../src/components/AboutUsPage';

export default function AboutUs() {
  const router = useRouter();
  
  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return <AboutUsPage setView={handleSetView} />;
}
