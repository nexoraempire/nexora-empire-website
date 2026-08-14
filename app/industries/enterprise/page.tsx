'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { EnterprisePage } from '../../../src/components/industries/EnterprisePage';

export default function Enterprise() {
  const router = useRouter();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return <EnterprisePage setView={handleSetView} />;
}
