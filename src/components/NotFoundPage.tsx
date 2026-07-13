import React from 'react';
import { motion } from 'motion/react';
import { Compass, Home, ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  setView: (view: 'home' | 'about-us' | 'portfolio' | 'pricing' | 'training-internship' | 'contact' | 'web-dev' | 'mobile-dev' | 'branding-design' | 'seo-growth' | 'ai-video' | 'social-media-management' | '404') => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ setView }) => {
  const handleGoHome = () => {
    setView('home');
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      setView('home');
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Dynamic Cosmic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-violet/20 rounded-full filter blur-3xl animate-cosmic-1" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple-vibrant/25 rounded-full filter blur-3xl animate-cosmic-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-electric/10 rounded-full filter blur-[120px] animate-pulse-glow" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f1d_1px,transparent_1px),linear-gradient(to_bottom,#0f0f1d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 z-0" />

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Floating Animated Compass Icon Container */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-block relative mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-violet to-brand-electric opacity-30 blur-xl animate-pulse" />
          <div className="relative p-6 bg-brand-dark/60 border border-white/10 rounded-full backdrop-blur-xl">
            <Compass className="w-16 h-16 text-brand-electric animate-spin-slow" />
          </div>
        </motion.div>

        {/* Animated Error Code */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-8xl sm:text-9xl font-display font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/40 drop-shadow-[0_0_35px_rgba(0,190,250,0.15)] select-none"
        >
          404
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-4 space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Lost in the Digital Abyss
          </h2>
          <p className="text-gray-400 font-sans max-w-md mx-auto text-base sm:text-lg leading-relaxed">
            The page you are looking for has been relocated to another coordinate or doesn't exist in our empire.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <button
            onClick={handleGoHome}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-brand-violet to-brand-purple-vibrant hover:from-brand-purple-vibrant hover:to-brand-violet text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(109,40,217,0.3)] hover:shadow-[0_4px_25px_rgba(109,40,217,0.5)] hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
          >
            <Home className="w-5 h-5 mr-2.5 transition-transform group-hover:scale-110" />
            Return to Empire
          </button>

          <button
            onClick={handleGoBack}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 mr-2.5 transition-transform group-hover:-translate-x-1" />
            Previous Coordinate
          </button>
        </motion.div>

        {/* Tech Stack Coordinates Footer Accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-xs font-mono tracking-widest text-gray-500 uppercase select-none"
        >
          SYS.LOC.COORD // 404_NOT_FOUND
        </motion.div>
      </div>
    </section>
  );
};
