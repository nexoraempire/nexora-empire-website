'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { EcommercePage } from '../../../src/components/industries/EcommercePage';

export default function Ecommerce() {
  const router = useRouter();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return <EcommercePage setView={handleSetView} />;
}
