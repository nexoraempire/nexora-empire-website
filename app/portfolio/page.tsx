'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { PortfolioPage } from '../../src/components/PortfolioPage';

export default function Portfolio() {
  const router = useRouter();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return <PortfolioPage setView={handleSetView} />;
}
