'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
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

  const isConnectPage = pathname === '/connect';

  return (
    <div className="relative min-h-screen bg-brand-dark text-white select-none">
      <CursorSpotlight />
      {!isConnectPage && <Header view={currentView} setView={handleSetView} />}
      <main className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      {!isConnectPage && <Footer view={currentView} setView={handleSetView} />}
      <BackToTop />
    </div>
  );
};
