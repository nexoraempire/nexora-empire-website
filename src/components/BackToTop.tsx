import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down more than 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 15 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-24 w-12 h-12 bg-zinc-950/80 hover:bg-[#090915] text-white rounded-full flex items-center justify-center border border-indigo-500/20 hover:border-brand-violet/60 shadow-[0_8px_30px_rgba(99,102,241,0.15)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.35)] z-50 transition-colors backdrop-blur-md cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          aria-label="Back to top"
        >
          {/* Subtle glowing halo behind button on hover */}
          <div className="absolute inset-0 rounded-full bg-brand-violet/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <ArrowUp className="w-5 h-5 text-indigo-400 group-hover:text-brand-electric transition-colors stroke-[2.5] transform group-hover:-translate-y-0.5 transition-transform duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
