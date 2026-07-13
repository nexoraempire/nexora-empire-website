'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { AIVideoPage } from '../../src/components/AIVideoPage';

export default function AIVideo() {
  const router = useRouter();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return <AIVideoPage setView={handleSetView} />;
}
