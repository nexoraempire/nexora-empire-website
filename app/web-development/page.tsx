'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { WebDevPage } from '../../src/components/WebDevPage';

export default function WebDev() {
  const router = useRouter();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return <WebDevPage setView={handleSetView} />;
}
