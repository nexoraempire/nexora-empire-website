'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { HealthcarePage } from '../../../src/components/industries/HealthcarePage';

export default function Healthcare() {
  const router = useRouter();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return <HealthcarePage setView={handleSetView} />;
}
