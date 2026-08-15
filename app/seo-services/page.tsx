'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { SEOGrowthPage } from '../../src/components/SEOGrowthPage';

export default function SEOGrowth() {
  const router = useRouter();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return <SEOGrowthPage setView={handleSetView} />;
}
