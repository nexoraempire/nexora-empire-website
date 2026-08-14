'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FintechPage } from '../../../src/components/industries/FintechPage';

export default function Fintech() {
  const router = useRouter();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return <FintechPage setView={handleSetView} />;
}
