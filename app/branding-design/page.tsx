'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { BrandingDesignPage } from '../../src/components/BrandingDesignPage';

export default function BrandingDesign() {
  const router = useRouter();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return <BrandingDesignPage setView={handleSetView} />;
}
