"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// SVG Brand Logos imported from assets/icons
// @ts-ignore
import nextjsIcon from '../assets/icons/nextjs.svg';
// @ts-ignore
import reactIcon from '../assets/icons/react.svg';
// @ts-ignore
import typescriptIcon from '../assets/icons/typescript.svg';
// @ts-ignore
import tailwindIcon from '../assets/icons/tailwind.svg';
// @ts-ignore
import javascriptIcon from '../assets/icons/javascript.svg';
// @ts-ignore
import nodejsIcon from '../assets/icons/nodejs.svg';
// @ts-ignore
import expressIcon from '../assets/icons/express.svg';
// @ts-ignore
import pythonIcon from '../assets/icons/python.svg';
// @ts-ignore
import laravelIcon from '../assets/icons/laravel.svg';
// @ts-ignore
import phpIcon from '../assets/icons/php.svg';
// @ts-ignore
import flutterIcon from '../assets/icons/flutter.svg';
// @ts-ignore
import reactNativeIcon from '../assets/icons/react-native.svg';
// @ts-ignore
import expoIcon from '../assets/icons/expo.svg';
// @ts-ignore
import kotlinIcon from '../assets/icons/kotlin.svg';
// @ts-ignore
import firebaseIcon from '../assets/icons/firebase.svg';
// @ts-ignore
import mongodbIcon from '../assets/icons/mongodb.svg';
// @ts-ignore
import mysqlIcon from '../assets/icons/mysql.svg';
// @ts-ignore
import postgresqlIcon from '../assets/icons/postgresql.svg';
// @ts-ignore
import wordpressIcon from '../assets/icons/wordpress.svg';
// @ts-ignore
import woocommerceIcon from '../assets/icons/woocommerce.svg';
// @ts-ignore
import shopifyIcon from '../assets/icons/shopify.svg';
// @ts-ignore
import figmaIcon from '../assets/icons/figma.svg';
// @ts-ignore
import photoshopIcon from '../assets/icons/photoshop.svg';
// @ts-ignore
import capcutIcon from '../assets/icons/capcut.svg';
// @ts-ignore
import googleAnalyticsIcon from '../assets/icons/google-analytics.svg';
// @ts-ignore
import searchConsoleIcon from '../assets/icons/search-console.svg';
// @ts-ignore
import ahrefsIcon from '../assets/icons/ahrefs.svg';
// @ts-ignore
import semrushIcon from '../assets/icons/semrush.svg';
// @ts-ignore
import githubIcon from '../assets/icons/github.svg';
// @ts-ignore
import gitIcon from '../assets/icons/git.svg';
// @ts-ignore
import dockerIcon from '../assets/icons/docker.svg';
// @ts-ignore
import nginxIcon from '../assets/icons/nginx.svg';
// @ts-ignore
import digitalOceanIcon from '../assets/icons/digital-ocean.svg';

// High-fidelity structures matching the exact row groups and premium neon animations
interface Technology {
  name: string;
  logo: React.ReactNode;
  shadowClass: string;
  borderColor: string;
}

export const TechStack: React.FC = () => {
  const renderLogo = (logo: React.ReactNode) => {
    if (React.isValidElement(logo)) {
      const src = (logo.props as any).src;
      return React.cloneElement(logo, {
        src: typeof src === 'string' ? src : src?.src || ''
      } as any);
    }
    return logo;
  };

  const [activeRow1Duration, setActiveRow1Duration] = useState('50s');
  const [activeRow2Duration, setActiveRow2Duration] = useState('50s');

  const row1: Technology[] = [
    { name: 'Next.js', logo: <img src={nextjsIcon} className="w-8 h-8 object-contain" alt="Next.js" />, borderColor: 'hover:border-zinc-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)]' },
    { name: 'React', logo: <img src={reactIcon} className="w-8 h-8 object-contain animate-spin-slow" alt="React" />, borderColor: 'hover:border-cyan-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(6,182,212,0.15)]' },
    { name: 'TypeScript', logo: <img src={typescriptIcon} className="w-8 h-8 object-contain" alt="TypeScript" />, borderColor: 'hover:border-blue-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(37,99,235,0.15)]' },
    { name: 'Tailwind CSS', logo: <img src={tailwindIcon} className="w-8 h-8 object-contain" alt="Tailwind CSS" />, borderColor: 'hover:border-cyan-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(6,182,212,0.15)]' },
    { name: 'JavaScript', logo: <img src={javascriptIcon} className="w-8 h-8 object-contain" alt="JavaScript" />, borderColor: 'hover:border-yellow-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(234,179,8,0.15)]' },
    { name: 'Node.js', logo: <img src={nodejsIcon} className="w-8 h-8 object-contain" alt="Node.js" />, borderColor: 'hover:border-green-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(34,197,94,0.15)]' },
    { name: 'Express.js', logo: <img src={expressIcon} className="w-8 h-8 object-contain" alt="Express.js" />, borderColor: 'hover:border-slate-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)]' },
    { name: 'Python', logo: <img src={pythonIcon} className="w-8 h-8 object-contain" alt="Python" />, borderColor: 'hover:border-sky-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(55,118,171,0.15)]' },
    { name: 'Laravel', logo: <img src={laravelIcon} className="w-8 h-8 object-contain" alt="Laravel" />, borderColor: 'hover:border-red-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(255,45,32,0.15)]' },
    { name: 'PHP', logo: <img src={phpIcon} className="w-8 h-8 object-contain" alt="PHP" />, borderColor: 'hover:border-indigo-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(119,123,180,0.15)]' },
    { name: 'Flutter', logo: <img src={flutterIcon} className="w-8 h-8 object-contain" alt="Flutter" />, borderColor: 'hover:border-cyan-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(2,86,155,0.15)]' },
    { name: 'React Native', logo: <img src={reactNativeIcon} className="w-8 h-8 object-contain animate-spin-slow" alt="React Native" />, borderColor: 'hover:border-cyan-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(0,216,255,0.15)]' },
    { name: 'Expo', logo: <img src={expoIcon} className="w-8 h-8 object-contain" alt="Expo" />, borderColor: 'hover:border-slate-800', shadowClass: 'hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)]' },
    { name: 'Kotlin', logo: <img src={kotlinIcon} className="w-8 h-8 object-contain" alt="Kotlin" />, borderColor: 'hover:border-purple-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(173,44,128,0.15)]' },
    { name: 'Firebase', logo: <img src={firebaseIcon} className="w-8 h-8 object-contain" alt="Firebase" />, borderColor: 'hover:border-amber-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(255,160,0,0.15)]' },
    { name: 'MongoDB', logo: <img src={mongodbIcon} className="w-8 h-8 object-contain" alt="MongoDB" />, borderColor: 'hover:border-emerald-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(19,170,82,0.15)]' },
    { name: 'MySQL', logo: <img src={mysqlIcon} className="w-8 h-8 object-contain" alt="MySQL" />, borderColor: 'hover:border-cyan-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(0,117,143,0.15)]' },
    { name: 'PostgreSQL', logo: <img src={postgresqlIcon} className="w-8 h-8 object-contain" alt="PostgreSQL" />, borderColor: 'hover:border-blue-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(51,103,145,0.15)]' },
    { name: 'WordPress', logo: <img src={wordpressIcon} className="w-8 h-8 object-contain" alt="WordPress" />, borderColor: 'hover:border-sky-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(33,117,155,0.15)]' },
    { name: 'WooCommerce', logo: <img src={woocommerceIcon} className="w-8 h-8 object-contain" alt="WooCommerce" />, borderColor: 'hover:border-pink-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(150,88,138,0.15)]' }
  ];

  const row2: Technology[] = [
    { name: 'Shopify', logo: <img src={shopifyIcon} className="w-8 h-8 object-contain" alt="Shopify" />, borderColor: 'hover:border-lime-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(150,191,72,0.15)]' },
    { name: 'Figma', logo: <img src={figmaIcon} className="w-8 h-8 object-contain" alt="Figma" />, borderColor: 'hover:border-orange-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(242,78,30,0.15)]' },
    { name: 'Photoshop', logo: <img src={photoshopIcon} className="w-8 h-8 object-contain" alt="Photoshop" />, borderColor: 'hover:border-blue-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(0,28,61,0.12)]' },
    { name: 'CapCut', logo: <img src={capcutIcon} className="w-8 h-8 object-contain" alt="CapCut" />, borderColor: 'hover:border-emerald-300', shadowClass: 'hover:shadow-[0_15px_30px_rgba(0,254,252,0.15)]' },
    { name: 'Google Analytics', logo: <img src={googleAnalyticsIcon} className="w-8 h-8 object-contain" alt="Google Analytics" />, borderColor: 'hover:border-yellow-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(244,180,0,0.15)]' },
    { name: 'Search Console', logo: <img src={searchConsoleIcon} className="w-8 h-8 object-contain" alt="Search Console" />, borderColor: 'hover:border-blue-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(66,133,244,0.15)]' },
    { name: 'Ahrefs', logo: <img src={ahrefsIcon} className="w-8 h-8 object-contain" alt="Ahrefs" />, borderColor: 'hover:border-orange-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(255,78,0,0.15)]' },
    { name: 'SEMrush', logo: <img src={semrushIcon} className="w-8 h-8 object-contain" alt="SEMrush" />, borderColor: 'hover:border-red-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(255,100,46,0.15)]' },
    { name: 'GitHub', logo: <img src={githubIcon} className="w-8 h-8 object-contain" alt="GitHub" />, borderColor: 'hover:border-slate-800', shadowClass: 'hover:shadow-[0_15px_30px_rgba(24,23,23,0.12)]' },
    { name: 'Git', logo: <img src={gitIcon} className="w-8 h-8 object-contain" alt="Git" />, borderColor: 'hover:border-red-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(240,80,50,0.15)]' },
    { name: 'Docker', logo: <img src={dockerIcon} className="w-8 h-8 object-contain" alt="Docker" />, borderColor: 'hover:border-blue-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(36,150,237,0.15)]' },
    { name: 'Nginx', logo: <img src={nginxIcon} className="w-8 h-8 object-contain" alt="Nginx" />, borderColor: 'hover:border-green-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(0,150,57,0.15)]' },
    { name: 'DigitalOcean', logo: <img src={digitalOceanIcon} className="w-8 h-8 object-contain" alt="DigitalOcean" />, borderColor: 'hover:border-blue-400', shadowClass: 'hover:shadow-[0_15px_30px_rgba(0,128,255,0.15)]' }
  ];

  // Manual speed adjustment buttons
  const speedUpRow1 = () => {
    setActiveRow1Duration('25s');
    setTimeout(() => setActiveRow1Duration('50s'), 1200);
  };

  const speedUpRow2 = () => {
    setActiveRow2Duration('25s');
    setTimeout(() => setActiveRow2Duration('50s'), 1200);
  };

  return (
    <section 
      id="tech-stack-section"
      className="relative py-28 bg-white overflow-hidden border-y border-slate-100 select-none"
    >
      {/* Dynamic light blueprint grid design background overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1.5px,transparent_1.5px),linear-gradient(to_bottom,#f1f5f9_1.5px,transparent_1.5px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,#000_70%,transparent_100%)] opacity-85 z-0"
        id="stack-grid-bg"
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="tech-stack-header"
          className="flex flex-col items-center"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100/50" id="tech-badge">
            Technology Stack
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight mt-6 mb-6 leading-none" id="tech-heading">
            Powering Scalable Modern <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Ecosystems</span>
          </h2>
          <p className="text-sm sm:text-base md:text-md text-slate-500 max-w-3xl mx-auto leading-relaxed font-normal" id="tech-description">
            We architect and build client platforms with <span className="font-semibold text-slate-900">bleeding-edge libraries</span> and <span className="font-semibold text-slate-900">reliable framework choices</span>. Speed, security, and aesthetics, custom-tailored into <span className="font-semibold text-slate-900">every line of code</span>.
          </p>
        </motion.div>
      </div>

      {/* Counter-scrolling continuous double-carousels wrapper */}
      <div className="relative w-full overflow-hidden py-4 z-10 flex flex-col gap-6" id="dual-carousel-wrapper">
        
        {/* 3D Glass side masks covering edges for an organic fading perspective illusion */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" id="left-glass-mask" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" id="right-glass-mask" />

        {/* Interactive Floating Left/Right Sliding Navigation Arrows */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3" id="speed-left-btn-container">
          <button 
            onClick={speedUpRow1}
            className="w-11 h-11 rounded-full bg-white border border-slate-200/60 shadow-md flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-300 transition-all duration-300 active:scale-90"
            aria-label="Speed up clockwise scroll"
          >
            <ChevronLeft className="w-5 h-5 pointer-events-none" />
          </button>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3" id="speed-right-btn-container">
          <button 
            onClick={speedUpRow2}
            className="w-11 h-11 rounded-full bg-white border border-slate-200/60 shadow-md flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-300 transition-all duration-300 active:scale-90"
            aria-label="Speed up counter-clockwise scroll"
          >
            <ChevronRight className="w-5 h-5 pointer-events-none" />
          </button>
        </div>

        {/* TOP ROW: scrolling smoothly from left to right */}
        <div 
          className="relative w-full overflow-hidden flex" 
          id="row1-marquee-container"
          style={{ '--scroll-duration': activeRow1Duration } as React.CSSProperties}
        >
          <div className="flex gap-6 py-3 animate-scroll-right hover:[animation-play-state:paused] w-max" id="row1-marquee-inner">
            {/* Set 1 */}
            {row1.map((tech) => (
              <div
                key={`row1-1-${tech.name}`}
                className={`relative flex flex-col items-center justify-center bg-white border border-slate-100/90 rounded-2xl p-4 w-[110px] h-[95px] sm:w-[155px] sm:h-[125px] shadow-[0_5px_15px_-5px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-105 ${tech.borderColor} ${tech.shadowClass}`}
                id={`tech-tile-r1-1-${tech.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                <div className="flex items-center justify-center mb-2.5 sm:mb-3 p-1.5 rounded-xl bg-slate-50/50">
                  {renderLogo(tech.logo)}
                </div>
                <span className="text-[10px] sm:text-[13px] font-sans font-semibold text-slate-700 tracking-wide">
                  {tech.name}
                </span>
              </div>
            ))}
            {/* Set 2 (for perfect loop continuity) */}
            {row1.map((tech) => (
              <div
                key={`row1-2-${tech.name}`}
                className={`relative flex flex-col items-center justify-center bg-white border border-slate-100/90 rounded-2xl p-4 w-[110px] h-[95px] sm:w-[155px] sm:h-[125px] shadow-[0_5px_15px_-5px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-105 ${tech.borderColor} ${tech.shadowClass}`}
                id={`tech-tile-r1-2-${tech.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                <div className="flex items-center justify-center mb-2.5 sm:mb-3 p-1.5 rounded-xl bg-slate-50/50">
                  {renderLogo(tech.logo)}
                </div>
                <span className="text-[10px] sm:text-[13px] font-sans font-semibold text-slate-700 tracking-wide">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW: scrolling in the opposite direction */}
        <div 
          className="relative w-full overflow-hidden flex" 
          id="row2-marquee-container"
          style={{ '--scroll-duration': activeRow2Duration } as React.CSSProperties}
        >
          <div className="flex gap-6 py-3 animate-scroll-left hover:[animation-play-state:paused] w-max" id="row2-marquee-inner">
            {/* Set 1 */}
            {row2.map((tech) => (
              <div
                key={`row2-1-${tech.name}`}
                className={`relative flex flex-col items-center justify-center bg-white border border-slate-100/90 rounded-2xl p-4 w-[110px] h-[95px] sm:w-[155px] sm:h-[125px] shadow-[0_5px_15px_-5px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-105 ${tech.borderColor} ${tech.shadowClass}`}
                id={`tech-tile-r2-1-${tech.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                <div className="flex items-center justify-center mb-2.5 sm:mb-3 p-1.5 rounded-xl bg-slate-50/50">
                  {renderLogo(tech.logo)}
                </div>
                <span className="text-[10px] sm:text-[13px] font-sans font-semibold text-slate-700 tracking-wide">
                  {tech.name}
                </span>
              </div>
            ))}
            {/* Set 2 (for perfect loop continuity) */}
            {row2.map((tech) => (
              <div
                key={`row2-2-${tech.name}`}
                className={`relative flex flex-col items-center justify-center bg-white border border-slate-100/90 rounded-2xl p-4 w-[110px] h-[95px] sm:w-[155px] sm:h-[125px] shadow-[0_5px_15px_-5px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-105 ${tech.borderColor} ${tech.shadowClass}`}
                id={`tech-tile-r2-2-${tech.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                <div className="flex items-center justify-center mb-2.5 sm:mb-3 p-1.5 rounded-xl bg-slate-50/50">
                  {renderLogo(tech.logo)}
                </div>
                <span className="text-[10px] sm:text-[13px] font-sans font-semibold text-slate-700 tracking-wide">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
};
