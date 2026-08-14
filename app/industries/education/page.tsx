'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { EducationPage } from '../../../src/components/industries/EducationPage';

export default function Education() {
  const router = useRouter();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return <EducationPage setView={handleSetView} />;
}
