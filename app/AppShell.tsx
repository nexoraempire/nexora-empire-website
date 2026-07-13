'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';
import { CursorSpotlight } from '../src/components/CursorSpotlight';
import { BackToTop } from '../src/components/BackToTop';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  // Get active view name from the pathname
  const getViewFromPath = (): any => {
    const path = pathname.replace(/^\//, '').replace(/\/$/, '');
    if (path === '' || path === 'home') {
      return 'home';
    }
    return path;
  };

  const currentView = getViewFromPath();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-dark text-white select-none">
      <CursorSpotlight />
      <Header view={currentView} setView={handleSetView} />
      <main className="relative w-full">
        {children}
      </main>
      <Footer view={currentView} setView={handleSetView} />
      <BackToTop />
    </div>
  );
};
