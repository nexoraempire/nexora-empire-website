'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MobileDevPage } from '../../src/components/MobileDevPage';

export default function MobileDev() {
  const router = useRouter();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return <MobileDevPage setView={handleSetView} />;
}
