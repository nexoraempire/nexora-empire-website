"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export const ReadyToBuild: React.FC = () => {
  // Smooth scroll helper to navigate to the contact form
  const handleStartProject = () => {
    window.open('https://wa.me/237677079559?text=Hello%20Nexora%20Empire!%20I%20would%20like%20to%20start%20a%20project%20with%20you.%20I%20am%20interested%20in%20your%20digital%20solutions.', '_blank');
  };

  // Redirect to WhatsApp for consultation
  const handleBookConsultation = () => {
    const msg = "Hi, I'd like to book a free consultation for my project with Nexora Empire!";
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/237677079559?text=${encodedMsg}`, '_blank');
  };

  return (
    <section 
      id="ready-to-build"
      className="relative w-full py-24 sm:py-28 md:py-32 px-6 bg-[#020205] text-white overflow-hidden border-t border-zinc-900/40"
    >
      {/* Dynamic Cosmic Background Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle radial light beam overlay */}
        <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(#1e1b4b_1.2px,transparent_1.2px)] [background-size:24px_24px] z-0" />
        
        {/* Glowing cosmic orbs mirroring reference design */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-brand-violet/5 blur-[160px] pointer-events-none z-0" />
        <div className="absolute bottom-[-10%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-brand-electric/5 blur-[120px] pointer-events-none z-0" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center">
        
        {/* Badge with gradient accent line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3.5 mb-8"
        >
          <span className="text-[11px] sm:text-xs font-mono font-extrabold uppercase tracking-[0.25em] text-[#6366f1] bg-indigo-950/20 px-4 py-1.5 rounded-full border border-indigo-500/10">
            Let's Build Something Great
          </span>
          {/* Subtle line underneath badge */}
          <div className="w-14 h-[2px] bg-gradient-to-r from-blue-500 to-brand-violet rounded-full" />
        </motion.div>

        {/* Immersive display heading mirroring reference perfectly */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-4xl"
        >
          Ready to Turn Your Ideas <br />
          <span className="block mt-1 sm:mt-2">
            Into{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">
              Digital Solutions?
            </span>
          </span>
        </motion.h2>

        {/* Clean, high contrast body description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-gray-400 text-sm sm:text-base md:text-md mt-6 sm:mt-8 max-w-2xl leading-relaxed"
        >
          Whether you're launching a new business, scaling an existing one, or looking for a technology partner, Nexora Empire is ready to help you build, grow, and succeed online.
        </motion.p>

        {/* Primary and Secondary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 sm:mt-12 w-full sm:w-auto"
        >
          {/* Button 1: Start a Project (Primary Filled Gradient with Active Glow) */}
          <button
            onClick={handleStartProject}
            className="group w-full sm:w-auto relative py-3.5 px-7 rounded-xl bg-gradient-to-r from-blue-600 to-brand-violet text-white font-sans text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_35px_rgba(99,102,241,0.35)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Button 2: Book a Free Consultation (Secondary Gradient Border Outline) */}
          <button
            onClick={handleBookConsultation}
            className="group w-full sm:w-auto relative py-3.5 px-7 rounded-xl bg-[#020205] text-white font-sans text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 border border-indigo-500/20 hover:border-brand-violet/50 hover:bg-violet-950/10 hover:scale-[1.03] active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            {/* Soft inner glow on hover */}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-gray-200 group-hover:text-white transition-colors">
              Book a Free Consultation
            </span>
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-transform transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

        {/* Trust Indicator badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-2 mt-12 sm:mt-14 text-xs font-sans text-gray-500/90 font-medium tracking-wide select-none"
        >
          <ShieldCheck className="w-4.5 h-4.5 text-blue-500/80" />
          <span>Trusted by Businesses & Individuals</span>
        </motion.div>

      </div>
    </section>
  );
};
