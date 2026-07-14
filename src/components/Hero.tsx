"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export const Hero: React.FC = () => {

  const handleStartProject = () => {
    window.open('https://wa.me/237677079559?text=Hello%20Nexora%20Empire!%20I%20would%20like%20to%20start%20a%20project%20with%20you.%20I%20am%20interested%20in%20your%20digital%20solutions.', '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark px-6 pt-32 pb-20 md:px-12 md:pb-12"
    >
      {/* Immersive Cosmic Background matching the reference section */}
      <div id="cosmic-bg-overlay" className="absolute inset-0 pointer-events-none">
        {/* Google Labs VideoFX Loop/Autoplay Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-55 select-none pointer-events-none transition-opacity duration-1000"
          style={{ mixBlendMode: 'screen' }}
        >
          <source 
            src="/assets/images/nexora-empire-hero-bg.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Ambient Darkened Tint Overlay to ensure outstanding content contrast & legibility */}
        <div className="absolute inset-0 bg-brand-dark/40 backdrop-brightness-[0.75] z-0" />

        {/* Starfields / Subtle dot particles on top of the video */}
        <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:24px_24px] z-10" />
        
        {/* Ambient Nebula Flows (Floating glows) */}
        <div className="absolute top-[10%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-brand-violet/15 blur-[150px] animate-cosmic-1 z-10" />
        <div className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-brand-electric/10 blur-[130px] animate-pulse-glow z-10" />
        
        {/* Soft glowing trail waves (simulating cosmic lines) */}
        <svg className="absolute bottom-0 left-0 w-full h-[65%] opacity-35" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M -100 650 Q 300 450 700 580 T 1540 400" 
            stroke="url(#wave-grad-1)" 
            strokeWidth="2" 
            fill="none" 
          />
          <path 
            d="M -100 550 Q 400 350 800 650 T 1540 300" 
            stroke="url(#wave-grad-2)" 
            strokeWidth="1.5" 
            strokeDasharray="4 8"
            fill="none" 
          />
          <defs>
            <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00befa" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#6d28d9" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00befa" stopOpacity="0" />
              <stop offset="50%" stopColor="#6d28d9" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00befa" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Orbit Path Silhouette - centered surrounding the text structure */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full border border-indigo-950/20 pointer-events-none hidden lg:block">
          <div className="absolute inset-0 rounded-full border border-dashed border-indigo-500/10 animate-spin-slow" style={{ animationDuration: '80s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-indigo-950/25 blur-3xl animate-pulse-glow" />
        </div>
      </div>

      {/* Main Structural Container - Restored 2-Column Responsive Premium Grid Presentation */}
      <div className="container mx-auto max-w-7xl relative z-10" id="hero-main-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-160px)]" id="hero-grid">
          
          {/* Left Side Text Content Column (Grid span: 8 out of 12) */}
          <div className="lg:col-span-8 flex flex-col items-start text-left" id="hero-left-col">
            
            {/* Main Display Headlines */}
            <div
              className="mb-8"
              id="headline-container"
            >
              <h1 className="font-display text-[44px] sm:text-[58px] md:text-[72px] font-extrabold text-white leading-[1.05] tracking-tight lg:whitespace-nowrap flex flex-col">
                <span>Best Software & SEO</span>
                <span>Company in Cameroon</span>
                <span className="bg-gradient-to-r from-brand-electric via-[#3b82f6] to-brand-violet bg-clip-text text-transparent">
                  For Digital Solutions
                </span>
              </h1>
            </div>

            <p
              className="font-sans text-base sm:text-lg text-gray-400 font-normal leading-relaxed mb-10 max-w-xl"
              id="hero-subtitle"
            >
              Building digital products that help businesses and individuals <span className="font-semibold text-white">attract customers</span>, <span className="font-semibold text-white">increase sales</span>, <span className="font-semibold text-white">dominate search rankings</span>, and <span className="font-semibold text-white">strengthen their online presence</span>.
            </p>

            {/* Call to Actions Action bar */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
              id="hero-cta-wrapper"
            >
              {/* Primary Action */}
              <button
                id="cta-start-project"
                onClick={handleStartProject}
                className="group relative px-8 py-4.5 rounded-xl bg-gradient-to-r from-blue-600 to-brand-violet text-white font-sans text-semibold tracking-wide font-medium shadow-[0_4px_25px_rgba(99,102,241,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_35px_rgba(99,102,241,0.55)] active:scale-[0.98] w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <span className="relative z-10 flex items-center justify-center gap-1.5 text-base font-semibold">
                  Start a Project
                  <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </span>
                {/* Overlay glow */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-electric to-brand-violet opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

              {/* Secondary Action */}
              <a
                href="tel:+237677079559"
                id="cta-contact-phone"
                className="group flex items-center gap-3.5 py-2 hover:opacity-95 transition-all duration-300 w-full sm:w-auto shrink-0 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-xl px-2"
              >
                {/* Vibrant solid green circle with white phone icon */}
                <div className="relative w-12 h-12 rounded-full flex items-center justify-center bg-[#00c853] shadow-[0_0_15px_rgba(0,200,83,0.3)] transition-all duration-300 group-hover:scale-105 shrink-0">
                  <Phone className="w-5 h-5 text-white fill-current" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-sans text-[11px] font-bold text-gray-400 tracking-wider uppercase leading-none mb-1.5">
                    CONTACT US DAILY
                  </span>
                  <span className="font-sans text-lg sm:text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300 leading-none">
                    +237 677 079 559
                  </span>
                </div>
              </a>
            </motion.div>

          </div>

          {/* Right Side Content Column (Grid span: 4 out of 12) - Kept empty as requested */}
          <div className="hidden lg:block lg:col-span-4" id="hero-right-col-empty" />

        </div>
      </div>
    </section>
  );
};
