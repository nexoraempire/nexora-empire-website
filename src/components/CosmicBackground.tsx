import React from 'react';

interface CosmicBackgroundProps {
  showOrbit?: boolean;
}

export const CosmicBackground: React.FC<CosmicBackgroundProps> = ({ showOrbit = true }) => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
      {/* Google Labs VideoFX Loop/Autoplay Video Background */}
      {/* TODO: replace with self-hosted asset at /public/videos/hero-cosmic.mp4 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-55 transition-opacity duration-1000"
        style={{ mixBlendMode: 'screen' }}
      >
        <source 
          src="/assets/images/nexora-empire-hero-bg.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Ambient Darkened Tint Overlay */}
      <div className="absolute inset-0 bg-brand-dark/40 backdrop-brightness-[0.75] z-0" />

      {/* Starfields / Subtle dot particles */}
      <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:24px_24px] z-10" />
      
      {/* Ambient Nebula Flows (Capped blur at 60px max for GPU repaint performance) */}
      <div className="absolute top-[10%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-brand-violet/15 blur-[60px] motion-safe:animate-cosmic-1 z-10" />
      <div className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-brand-electric/10 blur-[60px] motion-safe:animate-pulse-glow z-10" />
      
      {/* Soft glowing trail waves */}
      <svg className="absolute bottom-0 left-0 w-full h-[65%] opacity-35" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M -100 650 Q 300 450 700 580 T 1540 400" 
          stroke="url(#bg-wave-grad-1)" 
          strokeWidth="2" 
          fill="none" 
        />
        <path 
          d="M -100 550 Q 400 350 800 650 T 1540 300" 
          stroke="url(#bg-wave-grad-2)" 
          strokeWidth="1.5" 
          strokeDasharray="4 8"
          fill="none" 
        />
        <defs>
          <linearGradient id="bg-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00befa" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="bg-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00befa" stopOpacity="0" />
            <stop offset="50%" stopColor="#6d28d9" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00befa" stopOpacity="0.7" />
          </linearGradient>
        </defs>
      </svg>

      {/* Orbit Path Silhouette */}
      {showOrbit && (
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full border border-indigo-950/20 hidden lg:block">
          <div className="absolute inset-0 rounded-full border border-dashed border-indigo-500/10 motion-safe:animate-spin-slow" style={{ animationDuration: '80s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-indigo-950/25 blur-[60px] motion-safe:animate-pulse-glow" />
        </div>
      )}
    </div>
  );
};
