'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { PricingPage } from '../../src/components/PricingPage';

export default function Pricing() {
  const router = useRouter();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return <PricingPage setView={handleSetView} />;
}
