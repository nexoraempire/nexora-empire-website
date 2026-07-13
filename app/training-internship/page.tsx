'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { TrainingInternshipPage } from '../../src/components/TrainingInternshipPage';

export default function TrainingInternship() {
  const router = useRouter();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return <TrainingInternshipPage setView={handleSetView} />;
}
