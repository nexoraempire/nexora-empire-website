'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  imageUrl: string;
  bullets: string[];
  gradient: string;      // Tailwind class gradient from
  accentColor: string;   // Tailwind hover text color
  bulletColor: string;   // Tailwind list bullet bg
  iconBgActive: string;  // Tailwind class active circle icon bg
  numHoverColor: string; // Tailwind translucent step number hover color
}

interface OurProvenProcessProps {
  idPrefix?: string;
  badgeText?: string;
  titleText?: string;
  subheadingText?: string;
  steps: ProcessStep[];
}

export const OurProvenProcess: React.FC<OurProvenProcessProps> = ({
  idPrefix = 'proven-process',
  badgeText = 'OUR PROCESS',
  titleText = 'Our Proven Process',
  subheadingText = "Have a project in mind? Let's turn your ideas into powerful digital solutions that drive results and help your business grow.",
  steps,
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id={`${idPrefix}-section`}
      className="relative py-28 md:py-36 bg-[#020205] text-white overflow-hidden border-t border-white/5"
    >
      {/* Background elements to match previous premium cosmic dark pages */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-[#050510] to-[#020205]" />
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute top-1/4 left-1/4 w-[45vw] h-[45vw] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-violet-500/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Section Badge */}
        <div className="mb-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 select-none"
            id={`${idPrefix}-subtitle-badge`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.2em] font-bold text-blue-300 uppercase">
              {badgeText}
            </span>
          </motion.div>
        </div>

        {/* Section Title & Subheading */}
        <div className="max-w-3xl mx-auto text-center mb-20 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight mt-6 mb-6 leading-none"
            id={`${idPrefix}-heading`}
          >
            {titleText.split(' ').map((word, i, arr) => (
              <React.Fragment key={i}>
                {i === arr.length - 1 ? (
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : (
                  word + ' '
                )}
              </React.Fragment>
            ))}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-md text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal"
            id={`${idPrefix}-subheading`}
          >
            {subheadingText}
          </motion.p>
        </div>

        {/* Interactive Process Cards Container */}
        <div 
          className="flex flex-col lg:flex-row gap-4.5 lg:gap-5 max-w-6xl mx-auto items-stretch h-auto lg:h-[500px] w-full"
          id={`${idPrefix}-cards-container`}
        >
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            const isHovered = hoveredIdx === idx;
            
            // Layout flex computation for smooth desktop expansion:
            const flexVal = hoveredIdx === null
              ? '1'
              : isHovered
                ? '3'
                : '0.6';

            return (
              <div
                key={step.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setHoveredIdx(hoveredIdx === idx ? null : idx)}
                style={{
                  flex: `${flexVal} 1 0%`,
                  transition: 'all 600ms cubic-bezier(0.25, 1, 0.5, 1)'
                }}
                className="group relative rounded-[32px] overflow-hidden border border-white/5 bg-[#07070c] flex flex-col justify-end p-8 cursor-pointer h-[480px] lg:h-full select-none"
                id={`${idPrefix}-card-${step.id}`}
              >
                {/* Background gradient overlay on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${step.gradient} to-[#07070c] transition-opacity duration-500 pointer-events-none`}
                  style={{ opacity: isHovered ? 1 : 0 }}
                />

                {/* Background image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 mix-blend-luminosity pointer-events-none"
                  style={{ 
                    backgroundImage: `url('${step.imageUrl}')`,
                    opacity: isHovered ? 0.3 : 0.1 
                  }}
                />

                {/* Top Section: Large Translucent Number and floating round icon */}
                <div className="absolute top-8 left-8 right-8 flex items-center justify-between pointer-events-none z-10">
                  <span className={`text-6xl font-black transition-colors duration-500 font-display select-none ${
                    isHovered ? step.numHoverColor : 'text-white/5'
                  }`}>
                    {step.stepNumber}
                  </span>
                  
                  <div className={`w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
                    isHovered 
                      ? `${step.iconBgActive} text-white scale-110 shadow-lg` 
                      : 'text-white/60 group-hover:text-white'
                  }`}>
                    <IconComponent className="w-5 h-5 transition-transform duration-500 group-hover:rotate-6" />
                  </div>
                </div>

                {/* Bottom Section: Title, Description, and Bullet List */}
                <div className="relative z-10 text-left w-full">
                  <div className={`transition-transform duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-2 lg:translate-y-4'}`}>
                    <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 font-display select-none ${
                      isHovered ? step.accentColor : 'text-white'
                    }`}>
                      {step.title}
                    </h3>

                    {/* Expandable Content Area using Framer Motion */}
                    <div className="overflow-hidden">
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                      >
                        <p className="font-sans text-slate-300 text-sm leading-relaxed mt-4 min-w-[280px]">
                          {step.description}
                        </p>

                        <ul className="mt-5 space-y-2 text-sm text-slate-400">
                          {step.bullets.map((bullet, bulletIdx) => (
                            <motion.li
                              key={bulletIdx}
                              initial={{ x: -10, opacity: 0 }}
                              animate={isHovered ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                              transition={{ duration: 0.3, delay: 0.12 + bulletIdx * 0.05 }}
                              className="flex items-center gap-2"
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${step.bulletColor}`} />
                              <span>{bullet}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    {/* Standard non-hovered mobile helper text or simple helper hint */}
                    {!isHovered && (
                      <div className="block lg:hidden mt-3">
                        <p className="text-slate-500 text-xs font-medium">Tap to expand and see details</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
