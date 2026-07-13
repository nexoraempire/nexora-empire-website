"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { PricingCards, Currency } from './PricingCards.tsx';

export const Pricing: React.FC = () => {
  const [currency, setCurrency] = useState<Currency>('XAF');

  return (
    <section 
      id="pricing" 
      className="relative w-full py-28 px-6 md:px-12 lg:px-16 bg-white overflow-hidden border-t border-slate-100"
    >
      {/* Light elegant blueprint grid design background overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1.2px,transparent_1.2px),linear-gradient(to_bottom,#f1f5f9_1.2px,transparent_1.2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,#000_70%,transparent_100%)] opacity-85 z-0" />
        
        {/* Ambient colored glowing highlights */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[450px] h-[450px] bg-indigo-200/15 rounded-full blur-[110px] opacity-75" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[550px] h-[550px] bg-blue-100/20 rounded-full blur-[130px] opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          
          <div className="max-w-2xl text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6 select-none shadow-[0_2px_8px_rgba(59,130,246,0.02)]">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span className="font-mono text-[10px] tracking-wider font-extrabold text-blue-600 uppercase">
                INVESTMENT PLANS
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-[900] text-slate-900 leading-[1.15] tracking-tight mb-5">
              Transparent Pricing,<br/>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">No Surprises.</span>
            </h2>
            <p className="text-slate-500 font-sans text-base sm:text-lg leading-relaxed font-medium">
              We deliver elite web engineering, pixel-perfect design, and hyper-scalable cloud applications under transparent, fixed-scope investment tiers.
            </p>
          </div>

          {/* CURRENCY TOGGLE */}
          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              SELECT CURRENCY
            </span>
            <div className="relative p-1 bg-slate-50 border border-slate-200/80 rounded-full flex gap-1 shadow-sm">
              <button
                onClick={() => setCurrency('XAF')}
                className={`px-5 py-2 rounded-full text-xs font-sans font-bold tracking-wider transition-all duration-300 relative cursor-pointer ${
                  currency === 'XAF' 
                    ? 'text-white bg-[linear-gradient(90deg,#2F5BFF_0%,#4A47FF_35%,#6A38F8_70%,#8B1DCA_100%)] shadow-md font-extrabold' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                XAF (FCFA)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-5 py-2 rounded-full text-xs font-sans font-bold tracking-wider transition-all duration-300 relative cursor-pointer ${
                  currency === 'USD' 
                    ? 'text-white bg-[linear-gradient(90deg,#2F5BFF_0%,#4A47FF_35%,#6A38F8_70%,#8B1DCA_100%)] shadow-md font-extrabold' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                USD ($)
              </button>
            </div>
            {currency === 'USD' && (
              <p className="text-[11px] text-slate-400 font-medium mt-1 text-left md:text-right max-w-xs leading-relaxed">
                * International pricing (USD $): 2×–4× the local price, depending on the service.
              </p>
            )}
          </div>

        </div>

        {/* PRICING PLANS GRID */}
        <PricingCards currency={currency} />

        {/* BOTTOM ACTION CTA BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-12 px-4"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50 border border-slate-100/80 px-8 py-5 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.01)] w-full">
            {/* Left Portion with Icon and Text */}
            <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                <ShieldCheck className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="text-left font-sans text-xs sm:text-sm">
                <span className="text-slate-500 font-medium mr-2">
                  Need something different? We create custom solutions tailored to your business.
                </span>
                <span className="text-[#1f39c4] font-bold">
                  Let's build something amazing together.
                </span>
              </div>
            </div>

            {/* Right Portion with Contact Us CTA Link */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactEl = document.getElementById('contact');
                if (contactEl) {
                  if ((window as any).lenis) {
                    (window as any).lenis.scrollTo(contactEl, { offset: -90 });
                  } else {
                    contactEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="group shrink-0 font-sans text-xs sm:text-sm font-bold text-[#1f39c4] hover:text-[#11248a] flex items-center gap-1.5 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 rounded-lg px-2 py-1 active:scale-95"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
