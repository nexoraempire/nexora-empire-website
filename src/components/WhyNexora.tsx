"use client";

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  Check
} from 'lucide-react';
import { LazyVideo } from './LazyVideo';

// Import generated portrait images
// @ts-ignore
import foffeAvatar from '../assets/images/foffe_lili_profile.webp';
// @ts-ignore
import tundeAvatar from '../assets/images/gemon_yeseh.webp';
// @ts-ignore
import aishaAvatar from '../assets/images/marcus_avatar_1782241668323.webp';
// @ts-ignore
import marcusAvatar from '../assets/images/bright.webp';
// @ts-ignore
import sarahAvatar from '../assets/images/yemeli-maela.webp';
// @ts-ignore
import davidAvatar from '../assets/images/foffe-alladin.webp';

// Import work/mockup images
// @ts-ignore
import weBuildWebsites from '../assets/images/we-build-websites.webp';
// @ts-ignore
import seoTraining from '../assets/images/seo_training.webp';
// @ts-ignore
import goodDesign from '../assets/images/good-design-vs-bad-design.webp';
const techTrainingVideo = '/assets/images/nexora-empire-student-ai-video.mp4';
const kidsBootcampVideo = '/assets/images/nexora-empire-kids-bootcamp-ai-video.mp4';
import nexoraTechEmpire from '../assets/images/nexora-tech-empire.webp';

const getSrc = (img: any): string => {
  if (typeof img === 'string') return img;
  if (img && typeof img === 'object' && img.src) return img.src;
  return '';
};

interface CardData {
  id: string;
  indexStr: string;
  name: string;
  role: string;
  avatar: any;
  workImage: any;
  topic: string;
  bio1: React.ReactNode;
  bio2: React.ReactNode;
  bio3: React.ReactNode;
  whatsappMsg: string;
  problem: {
    title: string;
    desc: React.ReactNode;
  };
  solution: {
    title: string;
    desc: React.ReactNode;
  };
  ctaText: string;
}

export const WhyNexora: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const cards: CardData[] = [
    {
      id: 'foffe',
      indexStr: '01',
      name: 'Foffe Lili Fideline',
      role: 'Founder & CEO & CTO',
      avatar: foffeAvatar,
      workImage: weBuildWebsites,
      topic: 'Websites & Applications',
      bio1: <span>Hi, I'm Foffe — <span className="font-semibold text-white">Founder, CEO & CTO</span> at Nexora Empire.</span>,
      bio2: <span>Outdated, slow, or poorly developed websites are the <span className="font-semibold text-white">silent killers of business growth</span>. A modern brand needs <span className="font-semibold text-white">lightning-fast, secure, and beautiful systems</span> to compete.</span>,
      bio3: <span>Let's craft an <span className="font-semibold text-white">elite digital experience</span> that elevates your business above the competition and <span className="font-semibold text-white">converts visitors into customers</span>.</span>,
      whatsappMsg: "Hi Foffe, I'd like to discuss starting a modern website or application project with Nexora Empire!",
      problem: {
        title: 'No Professional Presence',
        desc: <span>Outdated websites or no website at all makes your business look <span className="font-semibold text-zinc-300">untrustworthy</span> and <span className="font-semibold text-zinc-300">drives potential customers away</span>.</span>
      },
      solution: {
        title: 'Modern Websites That Convert',
        desc: <span>We build <span className="font-semibold text-white">fast, responsive, and high-converting websites</span> that establish trust, reflect your brand, and turn visitors into loyal customers.</span>
      },
      ctaText: 'Ready to elevate your digital presence?'
    },
    {
      id: 'yeseh',
      indexStr: '02',
      name: 'Gemon Yeseh',
      role: 'Co-founder & SEO Expert',
      avatar: tundeAvatar,
      workImage: seoTraining,
      topic: 'SEO & Growth Strategy',
      bio1: <span>Hi, I'm Gemon — <span className="font-semibold text-white">Co-founder & SEO Expert</span> at Nexora Empire.</span>,
      bio2: <span>We help businesses cut through the noise and build strategies that position them for <span className="font-semibold text-white">visibility, authority, and sustainable growth</span>.</span>,
      bio3: <span>Let's make sure your business <span className="font-semibold text-white">gets seen by the right people</span>, for the right reasons.</span>,
      whatsappMsg: "Hi Gemon, I'd like to talk about SEO and marketing strategy for my business!",
      problem: {
        title: 'Invisible Online',
        desc: <span>No Google presence, low traffic, and zero visibility means no growth. Your potential customers <span className="font-semibold text-zinc-300">can't find what they can't see</span>.</span>
      },
      solution: {
        title: 'Visibility That Drives Growth',
        desc: <span>We implement <span className="font-semibold text-white">SEO, branding, and digital strategies</span> that rank you higher, increase visibility, and attract the right audience.</span>
      },
      ctaText: 'Ready to get found by the right people?'
    },
    {
      id: 'Marcus',
      indexStr: '03',
      name: 'Marcus Tunde',
      role: 'Lead UI/UX Designer',
      avatar: aishaAvatar,
      workImage: goodDesign,
      topic: 'Product & UI/UX Design',
      bio1: <span>Hi, I'm Marcus — <span className="font-semibold text-white">Lead UI/UX Designer</span> at Nexora Empire.</span>,
      bio2: <span>A digital product is only as good as its user experience. Confusing flows, cluttered layouts, and friction lead to <span className="font-semibold text-white">high bounce rates</span> and <span className="font-semibold text-white">lost conversions</span>.</span>,
      bio3: <span>Let's design <span className="font-semibold text-white">beautiful, highly intuitive interfaces</span> that make users fall in love with your product from the very first click.</span>,
      whatsappMsg: "Hi Favor, I'd like to talk about UI/UX design for our digital product!",
      problem: {
        title: 'Poor Digital Products',
        desc: <span>Slow, buggy, and confusing experiences <span className="font-semibold text-zinc-300">drive users away</span> and damage your reputation.</span>
      },
      solution: {
        title: 'Products People Love',
        desc: <span>Beautiful UI/UX with <span className="font-semibold text-white">clean code</span> and <span className="font-semibold text-white">modern tech</span> that users actually enjoy using daily.</span>
      },
      ctaText: 'Ready to build products people love?'
    },
    {
      id: 'bright',
      indexStr: '04',
      name: 'Tenyiyim Bright',
      role: 'AI Video Production Expert',
      avatar: marcusAvatar,
      workImage: techTrainingVideo,
      topic: 'Content & Media Engine',
      bio1: <span>Hi, I'm Bright — <span className="font-semibold text-white">AI Video Production Expert</span> at Nexora Empire.</span>,
      bio2: <span>In today's digital landscape, attention is the ultimate currency. If your brand content is inconsistent, generic, or slow to publish, <span className="font-semibold text-white">you lose the narrative</span>.</span>,
      bio3: <span>Our <span className="font-semibold text-white">automated media engine</span> produces premium videos, graphics, and messaging at scale, ensuring your business stays top-of-mind.</span>,
      whatsappMsg: "Hi Bright, I'm interested in scaling my content and video creation!",
      problem: {
        title: 'Slow Content Creation',
        desc: <span>Inconsistent content, poor quality, and long turnaround times <span className="font-semibold text-zinc-300">hurt your brand presence</span> and engagement.</span>
      },
      solution: {
        title: 'AI-Powered Content Engine',
        desc: <span>We create <span className="font-semibold text-white">engaging content, videos, and visuals faster</span> with AI and creative excellence.</span>
      },
      ctaText: 'Ready to scale your content?'
    },
    {
      id: 'Yemeli',
      indexStr: '05',
      name: 'Yemeli Maela',
      role: 'Head of Education & Talent',
      avatar: sarahAvatar,
      workImage: kidsBootcampVideo,
      topic: 'Training & Skills Academy',
      bio1: <span>Hi, I'm Maela — <span className="font-semibold text-white">Head of Education</span> at Nexora Empire.</span>,
      bio2: <span>Bridging the gap between theory and practical development is crucial. Companies suffer from a <span className="font-semibold text-white">lack of ready-to-deploy tech talent</span>.</span>,
      bio3: <span>Our academy and internship programs train <span className="font-semibold text-white">high-caliber builders under real production conditions</span>, powering your team with elite talent.</span>,
      whatsappMsg: "Hi Maela, I want to learn more about training and development services!",
      problem: {
        title: 'Skills Gap',
        desc: <span>Lack of skilled talent and practical knowledge <span className="font-semibold text-zinc-300">slows down your team</span>, causes mistakes, and delays business growth.</span>
      },
      solution: {
        title: 'Training, Mentorship & Internships',
        desc: <span>We build the next generation of talent through <span className="font-semibold text-white">real-world training</span>, targeted mentorship, and hands-on experience.</span>
      },
      ctaText: 'Invest in talent. Build your future.'
    },
    {
      id: 'david',
      indexStr: '06',
      name: 'David Chen',
      role: 'Operations Manager',
      avatar: davidAvatar,
      workImage: nexoraTechEmpire,
      topic: 'Operations & Consolidation',
      bio1: <span>Hi, I'm David — <span className="font-semibold text-white">Operations Manager</span> at Nexora Empire.</span>,
      bio2: <span>Coordinating multiple vendors used to be a constant challenge. Different processes, miscommunication, and overlapping work created <span className="font-semibold text-white">delays and unnecessary costs</span>.</span>,
      bio3: <span>I believe in <span className="font-semibold text-white">one partner, one process, and full transparency</span> — so you can focus on growing your business while we handle the rest.</span>,
      whatsappMsg: "Hi David, I want to discuss streamlining my business operations with Nexora!",
      problem: {
        title: 'Multiple Vendors',
        desc: <span>Managing multiple agencies, developers, and freelancers leads to constant <span className="font-semibold text-zinc-300">miscommunication, confusion, and massive project delays</span>.</span>
      },
      solution: {
        title: 'One Partner. Everything Covered.',
        desc: <span>Web, app, AI, branding, marketing, and more — <span className="font-semibold text-white">all under one roof</span>, guided by a single unified growth strategy.</span>
      },
      ctaText: 'Simplify your business. Partner with us.'
    }
  ];

  const handleWhatsAppRedirect = (msg: string) => {
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/237677079559?text=${encodedMsg}`, '_blank');
  };

  return (
    <section 
      ref={containerRef}
      id="why-nexora"
      className="relative w-full bg-[#020205] text-white py-24 md:py-32 overflow-visible border-b border-zinc-900/40"
    >
      {/* Immersive Dark Cosmic Background Accents matching Hero section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-brand-violet/10 blur-[150px] z-0" />
        <div className="absolute bottom-[15%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-brand-electric/5 blur-[130px] z-0" />
        {/* Subtle dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#1e1b4b_1.2px,transparent_1.2px)] [background-size:28px_28px] z-0" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Header Block matching the premium custom style of Nexora Empire */}
        <div className="text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Center-aligned Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/40 border border-violet-800/50 text-[11px] font-semibold text-brand-electric uppercase tracking-[0.2em] font-mono" id="why-nexora-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-violet animate-pulse" />
              Why Choose Nexora Empire
            </span>

            {/* Glowing Header Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mt-6 mb-6 leading-none" id="why-nexora-heading">
              Real Problems. <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Real Solutions.</span>
            </h2>

            {/* Premium, sleek Subtitle Description */}
            <p className="text-sm sm:text-base md:text-md text-zinc-400 max-w-3xl mx-auto leading-relaxed font-normal" id="why-nexora-description">
              We don’t just deliver services. We solve real business problems with strategy, technology, and creativity.
            </p>
          </motion.div>
        </div>

          {cards.map((card, idx) => {
            return (
              <div
                key={card.id}
                className="lg:sticky relative w-full h-auto transition-all duration-500 lg:top-[var(--sticky-top)] top-0"
                style={{ 
                  '--sticky-top': `${90 + idx * 8}px`,
                  zIndex: 10 + idx
                } as React.CSSProperties}
              >
                <div className="bg-[#05050a]/95 backdrop-blur-xl border border-zinc-850 rounded-3xl p-5 md:p-6 lg:p-8 relative group shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:border-brand-violet/30 transition-colors duration-500">
                  {/* Subtle card radial gradient overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.02)_0%,transparent_100%)] pointer-events-none" />

                  {/* Large decorative index marker top-right */}
                  <div className="absolute top-4 right-6 text-right select-none pointer-events-none">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-indigo-950/70 tracking-tighter block leading-none">
                      {card.indexStr}
                    </span>
                    <div className="w-6 h-[1.5px] bg-brand-violet/40 ml-auto mt-0.5" />
                  </div>

                  <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch text-left">
                    
                    {/* Left side: Mockup Image or Lazy Video */}
                    <div className="w-full lg:w-[35%] relative overflow-hidden h-[340px] sm:h-[400px] lg:h-auto border border-zinc-900 rounded-2xl shrink-0 min-h-[340px] lg:min-h-[420px]">
                      {getSrc(card.workImage).endsWith('.mp4') ? (
                        <LazyVideo 
                          src={getSrc(card.workImage)} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onMouseEnter={(e) => { e.currentTarget.muted = false; }}
                          onMouseLeave={(e) => { e.currentTarget.muted = true; }}
                        />
                      ) : (
                        <img 
                          src={getSrc(card.workImage)} 
                          alt={card.topic} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                      {/* Clean gradient overlay on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020205]/80 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Right side: Topic, Problem/Solution side-by-side, and CTA */}
                    <div className="flex-1 flex flex-col justify-between gap-6">
                      
                      <div className="space-y-4">
                        {/* Header Topic */}
                        <div className="border-b border-zinc-900 pb-3">
                          <span className="text-xs font-mono font-bold text-brand-electric uppercase tracking-widest">
                            {card.topic}
                          </span>
                        </div>

                        {/* Side-by-side layout for Problem & Solution */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 relative">
                          
                          {/* PROBLEM SECTION */}
                          <div className="space-y-2 bg-red-950/5 border border-red-900/10 rounded-2xl p-4 sm:p-5 hover:border-red-900/25 transition-all duration-300">
                            <div className="flex items-center gap-1.5 text-red-500">
                              <span className="w-4 h-4 rounded-full bg-red-950/40 border border-red-800/40 flex items-center justify-center shrink-0">
                                <X className="w-2 h-2 stroke-[2.5]" />
                              </span>
                              <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase">
                                PROBLEM
                              </span>
                            </div>
                            <h4 className="font-display font-extrabold text-sm text-white leading-tight">
                              {card.problem.title}
                            </h4>
                            <p className="font-sans text-xs text-zinc-400 leading-relaxed font-normal">
                              {card.problem.desc}
                            </p>
                          </div>

                          {/* Divider line for larger screens */}
                          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-zinc-900/80 -translate-x-1/2" />

                          {/* SOLUTION SECTION */}
                          <div className="space-y-2 bg-emerald-950/5 border border-emerald-900/10 rounded-2xl p-4 sm:p-5 hover:border-emerald-900/25 transition-all duration-300">
                            <div className="flex items-center gap-1.5 text-emerald-400">
                              <span className="w-4 h-4 rounded-full bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center shrink-0">
                                <Check className="w-2 h-2 stroke-[2.5]" />
                              </span>
                              <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase">
                                SOLUTION
                              </span>
                            </div>
                            <h4 className="font-display font-extrabold text-sm text-white leading-tight">
                              {card.solution.title}
                            </h4>
                            <p className="font-sans text-xs text-zinc-300 leading-relaxed font-normal">
                              {card.solution.desc}
                            </p>
                          </div>

                        </div>
                      </div>

                      {/* Bottom CTA Action Button */}
                      <div className="flex justify-start">
                        <button
                          onClick={() => handleWhatsAppRedirect(card.whatsappMsg)}
                          className="group relative w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-brand-violet text-white font-sans text-xs font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_4px_25px_rgba(99,102,241,0.3)] hover:brightness-110 active:scale-[0.98] cursor-pointer"
                        >
                          <span className="relative z-10 font-medium">
                            {card.ctaText}
                          </span>
                          <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};
