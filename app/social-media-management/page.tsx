'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { SocialMediaManagementPage } from '../../src/components/SocialMediaManagementPage';

export default function SocialMediaManagement() {
  const router = useRouter();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return <SocialMediaManagementPage setView={handleSetView} />;
}
