'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ContactPage } from '../../src/components/ContactPage';

export default function Contact() {
  const router = useRouter();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return <ContactPage setView={handleSetView} />;
}
