"use client";

import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
} from 'lucide-react';
import { ContactForm } from './ContactForm.tsx';

export const FinalCTA: React.FC = () => {

  return (
    <section 
      id="contact" 
      className="relative w-full py-24 sm:py-28 md:py-32 px-6 bg-slate-50 overflow-hidden border-t border-slate-200 text-slate-800"
    >
      {/* Background Orbs & Radial Grids */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.8] bg-[radial-gradient(#e2e8f0_1.2px,transparent_1.2px)] [background-size:24px_24px] z-0" />
        
        {/* Soft, delicate glows */}
        <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-indigo-100/40 blur-[130px] pointer-events-none z-0" />
        <div className="absolute bottom-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-100/30 blur-[130px] pointer-events-none z-0" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* HEADER BLOCK */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3.5"
          >
            {/* Center-aligned Badge */}
            <span className="text-[11px] sm:text-xs font-mono font-extrabold uppercase tracking-[0.25em] text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100/50">
              CONTACT US
            </span>

            {/* Glowing Header Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 mt-3">
              Get in <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Touch</span>
            </h2>

            <p className="font-sans text-slate-500 text-sm sm:text-base mt-4 max-w-xl">
              We're here to help you bring your ideas to life.
            </p>

            {/* Delicate colored line divider */}
            <div className="w-14 h-[2px] bg-gradient-to-r from-blue-500 to-brand-violet rounded-full mt-4" />
          </motion.div>
        </div>

        {/* 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* LEFT COLUMN: Let's Start */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-white border border-slate-100 shadow-[0_15px_35px_rgba(0,0,0,0.02)] flex flex-col justify-between"
          >
            <div>
              {/* YOU ARE HERE Badge with graphic line */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-indigo-600 font-extrabold">
                  YOU ARE HERE
                </span>
                <div className="flex items-center">
                  <div className="w-14 h-[1.5px] bg-indigo-100" />
                  <div className="w-2 h-2 rounded-full bg-brand-violet shadow-[0_0_10px_rgba(139,92,246,0.4)]" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
                Let's Start
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-500 mb-8 leading-relaxed">
                Initiating Your Journey to Success and Growth.
              </p>

              {/* Contact Icons block */}
              <div className="space-y-4 mb-8">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-sans text-sm sm:text-base text-slate-700 hover:text-slate-900 transition-colors">
                    +237-677-079-559
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a 
                    href="mailto:contact@nexoraempire.com"
                    className="font-sans text-sm sm:text-base text-slate-700 hover:text-slate-900 hover:underline transition-all"
                  >
                    contact@nexoraempire.com
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-sans text-sm sm:text-base text-slate-700">
                    Before Slaughterhouse,Buea Town, Cameroon
                  </span>
                </div>
              </div>
            </div>

            {/* Separator line */}
            <div className="w-full h-[1px] bg-slate-100 my-4" />

            {/* Numbered Steps with Vertical connecting line */}
            <div className="relative pl-3 space-y-6">
              {/* Absolute running line */}
              <div className="absolute left-[27px] top-3 bottom-3 w-[1px] bg-indigo-100 z-0" />

              {/* Step 1 */}
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-indigo-100 bg-slate-50 flex items-center justify-center text-indigo-600 font-mono text-[11px] font-bold shrink-0">
                  01
                </div>
                <span className="font-sans text-xs sm:text-sm text-slate-600 font-medium">
                  Share Your Requirements
                </span>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-indigo-100 bg-slate-50 flex items-center justify-center text-indigo-600 font-mono text-[11px] font-bold shrink-0">
                  02
                </div>
                <span className="font-sans text-xs sm:text-sm text-slate-600 font-medium">
                  Discuss Them With Our Experts
                </span>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-indigo-100 bg-slate-50 flex items-center justify-center text-indigo-600 font-mono text-[11px] font-bold shrink-0">
                  03
                </div>
                <span className="font-sans text-xs sm:text-sm text-slate-600 font-medium">
                  Get A Free Quote
                </span>
              </div>

              {/* Step 4 */}
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-indigo-100 bg-slate-50 flex items-center justify-center text-indigo-600 font-mono text-[11px] font-bold shrink-0">
                  04
                </div>
                <span className="font-sans text-xs sm:text-sm text-slate-600 font-medium">
                  Start The Project
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Let's Connect */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl p-6 sm:px-8 sm:py-6 bg-white border border-slate-100 shadow-[0_15px_35px_rgba(0,0,0,0.02)] flex flex-col justify-start"
          >
            <div className="text-center mb-2">
              <h3 className="font-display text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">
                Let's Connect!
              </h3>
              <div className="w-10 h-[2px] bg-indigo-100 mx-auto mt-2" />
              <p className="font-sans text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                Send us a message, and we'll promptly discuss your project with you. We guarantee a response in less than 24 hours.
              </p>
            </div>
            <div className="mt-4">
              <ContactForm />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
