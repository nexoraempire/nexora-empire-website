'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { NotFoundPage } from '../src/components/NotFoundPage';

export default function NotFound() {
  const router = useRouter();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return <NotFoundPage setView={handleSetView} />;
}
