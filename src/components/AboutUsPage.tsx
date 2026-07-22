'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Cpu, 
  TrendingUp, 
  Award,
  Target,
  Eye,
  Compass,
  Linkedin,
  Github,
  Mail,
  ArrowLeft,
  ArrowUpRight,
  Code,
  Activity,
  Heart,
  Laptop,
  Users,
  Lightbulb,
  Rocket,
  Crown,
  PenTool,
  Layers,
  Video,
  Youtube,
  Instagram,
  MessageSquare,
  Figma,
  Dribbble,
  Sparkles
} from 'lucide-react';
// @ts-ignore
import dashboardImg from '../assets/images/dashboard.webp';
import { OurImpact } from './OurImpact';
import { OurJourney } from './OurJourney';
import { HowWeWork } from './HowWeWork';
import { FAQ } from './FAQ';

type TabType = 'mission' | 'vision' | 'approach';

interface AboutUsPageProps {
  setView: (view: 'home' | 'about-us' | 'portfolio' | 'pricing' | 'academy' | 'training-internship' | 'contact' | 'web-dev' | 'mobile-dev' | 'branding-design' | 'seo-growth' | 'ai-video' | 'social-media-management') => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ setView }) => {
  const [activeTab, setActiveTab] = useState<TabType>('mission');

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    }
  }, []);

  const values = [
    {
      title: 'Elite Craftsmanship',
      description: <span>We reject cookie-cutter templates. Every design, website, and mobile app is a <span className="font-semibold text-white">custom-coded masterpiece designed from scratch</span>.</span>,
      icon: Award,
      accentColor: 'from-violet-500 to-indigo-500',
      glowColor: 'rgba(139,92,246,0.15)',
      iconColor: 'text-violet-400',
      lineBg: 'bg-violet-500',
      cardId: 'value-elite-craftsmanship',
    },
    {
      title: 'Extreme Reliability',
      description: <span>We serve as your ultimate technical co-founder. We <span className="font-semibold text-white">deliver projects on schedule</span>, with zero compromise on stability or security.</span>,
      icon: ShieldCheck,
      accentColor: 'from-teal-400 to-cyan-500',
      glowColor: 'rgba(20,184,166,0.15)',
      iconColor: 'text-teal-400',
      lineBg: 'bg-teal-400',
      cardId: 'value-extreme-reliability',
    },
    {
      title: 'Continuous Innovation',
      description: <span>We actively engineer and integrate <span className="font-semibold text-white">next-generation AI pipelines</span>, modern APIs, and ultra-fast frameworks into our deliverables.</span>,
      icon: Cpu,
      accentColor: 'from-purple-500 to-pink-500',
      glowColor: 'rgba(168,85,247,0.15)',
      iconColor: 'text-purple-400',
      lineBg: 'bg-purple-500',
      cardId: 'value-continuous-innovation',
    },
    {
      title: 'Client-Centric Growth',
      description: <span>Our metrics are strictly aligned with your success: <span className="font-semibold text-white">increased traffic</span>, high-converting checkout funnels, and brand prestige.</span>,
      icon: TrendingUp,
      accentColor: 'from-pink-500 to-rose-500',
      glowColor: 'rgba(236,72,153,0.15)',
      iconColor: 'text-pink-400',
      lineBg: 'bg-pink-500',
      cardId: 'value-client-centric-growth',
    },
  ];

  const teamMembers = [
    {
      id: 'foffe',
      name: 'Foffe Lili Fideline',
      role: 'Founder & CEO & CTO',
      bio: 'Full stack developer with a passion for building scalable digital solutions and driving innovation.',
      image: '/assets/images/photo_2026-06-28_08-05-38.webp',
      badgeIcon: Crown,
      badgeColor: 'text-violet-500 bg-violet-50 border-violet-100',
      socials: [
        { name: 'linkedin', icon: Linkedin, url: '#' },
        { name: 'github', icon: Github, url: '#' },
        { name: 'whatsapp', icon: MessageSquare, url: '#' },
        { name: 'mail', icon: Mail, url: 'mailto:contact@nexoraempire.com' }
      ]
    },
    {
      id: 'yeseh',
      name: 'Gemon Yeseh',
      role: 'Co-founder & SEO Specialist',
      bio: 'Lead graphic designer and SEO specialist with an eye for detail and a passion for brand visibility.',
      image: '/assets/images/gemon_yeseh.webp',
      badgeIcon: PenTool,
      badgeColor: 'text-indigo-500 bg-indigo-50 border-indigo-100',
      socials: [
        { name: 'linkedin', icon: Linkedin, url: '#' },
        { name: 'dribbble', icon: Dribbble, url: '#' },
        { name: 'globe', icon: Compass, url: '#' },
        { name: 'mail', icon: Mail, url: 'mailto:contact@nexoraempire.com' }
      ]
    },


    {
      id: 'bright',
      name: 'Tenyiyim Bright',
      role: 'Video Editor',
      bio: 'Transforms raw footage into powerful visual stories that captivate and engage.',
      image: '/assets/images/bright.webp',
      badgeIcon: Video,
      badgeColor: 'text-purple-500 bg-purple-50 border-purple-100',
      socials: [
        { name: 'youtube', icon: Youtube, url: '#' },
        { name: 'instagram', icon: Instagram, url: '#' },
        { name: 'mail', icon: Mail, url: 'mailto:contact@nexoraempire.com' }
      ]
    },
    {
      id: 'remy',
      name: 'Remy Malick',
      role: 'Video Editor',
      bio: 'Creates compelling edits that bring ideas to life through creativity and precision.',
      image: '/assets/images/malick.webp',
      badgeIcon: Video,
      badgeColor: 'text-purple-500 bg-purple-50 border-purple-100',
      socials: [
        { name: 'youtube', icon: Youtube, url: '#' },
        { name: 'instagram', icon: Instagram, url: '#' },
        { name: 'mail', icon: Mail, url: 'mailto:contact@nexoraempire.com' }
      ]
    },
    {
      id: 'favor',
      name: 'Mbekenyui Favor',
      role: 'Graphic Designer',
      bio: 'Tells compelling brand stories through beautiful graphic designs and pixel-perfect layouts.',
      image: '/assets/images/favor.webp',
      badgeIcon: PenTool,
      badgeColor: 'text-pink-500 bg-pink-50 border-pink-100',
      socials: [
        { name: 'linkedin', icon: Linkedin, url: '#' },
        { name: 'dribbble', icon: Dribbble, url: '#' },
        { name: 'instagram', icon: Instagram, url: '#' },
        { name: 'mail', icon: Mail, url: 'mailto:contact@nexoraempire.com' }
      ]
    },
    {
      id: 'asaah',
      name: 'Marcus Tunde',
      role: 'UI/UX Designer',
      bio: 'Designs seamless and intuitive digital experiences that delight users and drive results.',
      image: '/assets/images/marcus_avatar_1782241668323.webp',
      badgeIcon: Layers,
      badgeColor: 'text-pink-500 bg-pink-50 border-pink-100',
      socials: [
        { name: 'linkedin', icon: Linkedin, url: '#' },
        { name: 'figma', icon: Figma, url: '#' },
        { name: 'dribbble', icon: Dribbble, url: '#' },
        { name: 'mail', icon: Mail, url: 'mailto:contact@nexoraempire.com' }
      ]
    }
  ];


  return (
    <div className="relative w-full bg-white text-slate-900 overflow-hidden" id="about-us-page-root">
      
      {/* Visual background grid accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none -z-10" />
      
      {/* Page Header banner with a beautiful background image */}
      <div className="relative w-full overflow-hidden border-b border-slate-900/10 bg-[#060814]" id="about-us-hero-wrapper">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 scale-105 pointer-events-none"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop')" }} 
        />
        {/* Soft elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060814] via-[#060814]/85 to-[#020205]/95 pointer-events-none" />
        
        {/* Ambient color blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28 z-10">
          
          {/* Headings */}
          <div className="max-w-3xl text-left space-y-6" id="about-us-page-intro">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-300 tracking-wider uppercase font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Discover Our Story
            </span>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
              About Nexora Empire | Technology Company Cameroon
            </h1>
            
            <p className="font-sans text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              Nexora Empire is a software company in Buea, Cameroon. We design, engineer, and optimize custom software architectures and web portals for global businesses.
            </p>
          </div>
        </div>
      </div>      {/* ROW 1: Our Story & DNA (Custom layout matching the design image) */}
      <section className="relative py-20 md:py-28 border-t border-slate-100 bg-[#fafbfc]/30" id="about-us-dna-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Heading and narrative text */}
            <div className="lg:col-span-5 space-y-6 text-left" id="about-us-dna-left">
              {/* Badge with empty dot circle */}
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/50 text-xs font-bold text-blue-600 tracking-wider uppercase font-sans">
                <span className="w-1.5 h-1.5 rounded-full border border-blue-600 bg-transparent" />
                Our Story
              </span>
              
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#0e1629] leading-tight tracking-tight">
                Custom software solutions that drive <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">local growth.</span>
              </h2>
              
              <p className="font-sans text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl">
                Nexora Empire was created to help businesses and individuals <span className="font-semibold text-slate-900">turn ideas into powerful digital products</span>. We combine creativity, technology, and strategy to deliver solutions that <span className="font-semibold text-slate-900">make an impact</span>.
              </p>

              {/* Our Journey Button */}
              <button
                onClick={() => {
                  const el = document.getElementById('about-us-journey-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-sans text-sm font-semibold tracking-wide rounded-2xl transition-all duration-300 shadow-lg shadow-blue-600/15"
                id="our-journey-story-btn"
              >
                Our Journey
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
            
            {/* Right Column: Premium overlapping image & mockup collage */}
            <div className="lg:col-span-7 relative w-full h-[480px] sm:h-[580px] lg:h-[620px] flex items-center justify-center" id="about-us-dna-right">
              
              {/* Wavy background styling curves & decorative loops */}
              <svg className="absolute inset-0 w-full h-full text-indigo-100/60 -z-10" fill="none" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <path d="M 50 400 C 120 300, 250 450, 380 200 C 420 120, 350 50, 480 30" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round" />
                <path d="M 20 250 C 150 150, 300 280, 450 120" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
              </svg>

              {/* Office Image (Top-Right Background Layer) */}
              <motion.div 
                initial={{ opacity: 0, x: 30, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute top-[8%] right-0 w-[46%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 z-0 bg-slate-50"
              >
                <img 
                  src="/assets/images/modern-office-nexora-empire-workspace-office.png_202607121801.webp" 
                  alt="Modern Nexora Empire Workspace Office" 
                  className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Good morning, Nexora Dashboard Mockup (Center-Left Layer) */}
              <motion.div 
                initial={{ opacity: 0, x: -30, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="absolute left-0 top-[18%] w-[56%] bg-white rounded-3xl shadow-[0_30px_70px_rgba(15,23,42,0.12)] border border-slate-150/80 z-10 text-left overflow-hidden"
              >
                <img 
                  src={typeof dashboardImg === 'string' ? dashboardImg : (dashboardImg as any).src} 
                  alt="Nexora Dashboard Mockup" 
                  width={1200}
                  height={896}
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Tech Team Collaborating (Bottom-Right Foreground Layer) */}
              <motion.div 
                initial={{ opacity: 0, x: 20, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-[8%] right-0 w-[46%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 z-20 bg-slate-50"
              >
                <img 
                  src="/assets/images/nexora-empire-tech-team-collaboration.webp" 
                  alt="Nexora Tech Team Collaborating" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Floating blue circular action button */}
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  const el = document.getElementById('about-us-journey-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="absolute bottom-[36%] right-[44%] w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 transition-colors duration-300 z-30"
                aria-label="Scroll to Journey"
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </div>

          </div>

          {/* Describing Nexora cards: Who We Are, Why We Exist, Our Mission, Our Vision */}
          <div className="mt-24 pt-8 relative" id="about-us-four-cards-wrapper">
            
            {/* Subtle horizontal dashed connector line behind cards on desktop */}
            <div className="hidden lg:block absolute left-12 right-12 top-[46%] h-[1px] border-t border-dashed border-slate-200 -z-10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Who We Are */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="p-6 sm:p-8 rounded-[32px] bg-white border border-slate-150 shadow-[0_15px_30px_rgba(15,23,42,0.012)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.05)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center relative"
                id="story-card-who-we-are"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-50/60 flex items-center justify-center text-indigo-600 mb-5 border border-indigo-100/30">
                  <Users className="w-5 h-5 text-indigo-600" />
                </div>
                
                <h4 className="font-display text-base font-bold text-[#0e1629] mb-3">
                  Who We Are
                </h4>
                
                <p className="text-slate-450 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                  A passionate team of <span className="font-semibold text-slate-800">developers, designers, and strategists</span>.
                </p>

                <div className="mt-auto w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-xs font-mono font-bold text-slate-400 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                  01
                </div>
              </motion.div>

              {/* Card 2: Why We Exist */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="p-6 sm:p-8 rounded-[32px] bg-white border border-slate-150 shadow-[0_15px_30px_rgba(15,23,42,0.012)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.05)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center relative"
                id="story-card-why-we-exist"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-50/60 flex items-center justify-center text-indigo-600 mb-5 border border-indigo-100/30">
                  <Lightbulb className="w-5 h-5 text-indigo-600" />
                </div>
                
                <h4 className="font-display text-base font-bold text-[#0e1629] mb-3">
                  Why We Exist
                </h4>
                
                <p className="text-slate-450 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                  To <span className="font-semibold text-slate-800">bridge the gap between ideas and execution</span> through innovative digital solutions.
                </p>

                <div className="mt-auto w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-xs font-mono font-bold text-slate-400 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                  02
                </div>
              </motion.div>

              {/* Card 3: Our Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="p-6 sm:p-8 rounded-[32px] bg-white border border-slate-150 shadow-[0_15px_30px_rgba(15,23,42,0.012)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.05)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center relative"
                id="story-card-our-mission"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-50/60 flex items-center justify-center text-indigo-600 mb-5 border border-indigo-100/30">
                  <Target className="w-5 h-5 text-indigo-600" />
                </div>
                
                <h4 className="font-display text-base font-bold text-[#0e1629] mb-3">
                  Our Mission
                </h4>
                
                <p className="text-slate-450 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                  To empower businesses and individuals with <span className="font-semibold text-slate-800">smart, scalable, high-quality solutions</span>.
                </p>

                <div className="mt-auto w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-xs font-mono font-bold text-slate-400 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                  03
                </div>
              </motion.div>

              {/* Card 4: Our Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="p-6 sm:p-8 rounded-[32px] bg-white border border-slate-150 shadow-[0_15px_30px_rgba(15,23,42,0.012)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.05)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center relative"
                id="story-card-our-vision"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-50/60 flex items-center justify-center text-indigo-600 mb-5 border border-indigo-100/30">
                  <Eye className="w-5 h-5 text-indigo-600" />
                </div>
                
                <h4 className="font-display text-base font-bold text-[#0e1629] mb-3">
                  Our Vision
                </h4>
                
                <p className="text-slate-450 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                  To be a <span className="font-semibold text-slate-800">leading digital company</span> recognized for innovation, excellence, and impact.
                </p>

                <div className="mt-auto w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-xs font-mono font-bold text-slate-400 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                  04
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>

      {/* Our Impact Section (placed immediately after our story section) */}
      <OurImpact />

      {/* Our Journey Section (placed immediately after our impact section) */}
      <OurJourney />

      {/* ROW 2: Core Values Grid */}
      <section className="relative py-28 md:py-36 bg-[#020205] text-white overflow-hidden" id="about-us-values-section">
        {/* Immersive Cosmic Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-[#050510] to-[#020205]" />
          <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-indigo-500/5 blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[35vw] h-[35vw] rounded-full bg-blue-500/5 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 select-none"
            id="values-subtitle-badge"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.2em] font-bold text-blue-300 uppercase">
              Our Core Values
            </span>
          </motion.div>

          <div className="max-w-3xl mx-auto mb-20 flex flex-col items-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight mt-6 mb-6 leading-none"
              id="values-heading"
            >
              The Principles That <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Drive Us</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-md text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal"
              id="values-description"
            >
              Our core values are the foundation of everything we do. They guide our decisions, shape our culture, and define our impact.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto relative text-left">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  key={v.title}
                  className="group relative rounded-[32px] bg-gradient-to-b from-slate-900/40 to-slate-950/60 backdrop-blur-xl border border-white/5 p-8 flex flex-col justify-start shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-400 overflow-hidden"
                  id={v.cardId}
                  style={{
                    boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.03), 0 20px 50px rgba(0,0,0,0.5)`,
                  }}
                >
                  {/* Internal Glow Effect on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${v.glowColor} 0%, transparent 70%)`
                    }}
                  />

                  {/* Decorative subtle top line accent */}
                  <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent group-hover:via-blue-500/50 transition-all duration-500" />

                  {/* Icon with beautiful outline/glow */}
                  <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500 relative">
                    <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon className={`w-6 h-6 ${v.iconColor} transition-transform duration-500 group-hover:rotate-6`} />
                  </div>

                  {/* Colored Dash */}
                  <div className={`w-8 h-[2px] rounded ${v.lineBg} mb-5 opacity-80 group-hover:w-12 transition-all duration-300`} />

                  <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-300 transition-colors duration-300">
                    {v.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-450 leading-relaxed">
                    {v.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROW 3: Our Team Section */}
      <section className="relative py-28 md:py-36 bg-[#f8fafc] text-slate-900 overflow-hidden border-t border-b border-slate-100" id="about-us-team-section">
        {/* Background mesh grid and soft ambient clouds */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-65 pointer-events-none z-0" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-50/40 blur-[130px] pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-indigo-50/40 blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          
          {/* Section Badge */}
          <div className="mb-6 flex justify-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-600 tracking-wider uppercase font-sans shadow-sm select-none"
              id="team-subtitle-badge"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Our Team
            </motion.span>
          </div>

          {/* Section Title & Subheading */}
          <div className="max-w-3xl mx-auto text-center mb-20 flex flex-col items-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#0e1629] tracking-tight mt-6 mb-6 leading-none"
              id="team-heading"
            >
              Meet the <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Team</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-md text-slate-500 max-w-3xl mx-auto leading-relaxed font-normal"
              id="team-description"
            >
              The talented and passionate individuals behind Nexora Empire. We build, design, secure, and create to bring ideas to life.
            </motion.p>
          </div>

          {/* Grid Layout - Row 1: Max 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-10 text-left">
            {teamMembers.slice(0, 3).map((member, idx) => {
              const BadgeIcon = member.badgeIcon;
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative rounded-[32px] bg-white p-4.5 flex flex-col justify-between shadow-[0_15px_40px_rgba(15,23,42,0.012)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.04)] border border-transparent transition-all duration-400 overflow-hidden"
                  id={`team-card-${member.id}`}
                >
                  <div>
                    {/* Portrait Frame holding slot */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-indigo-50/50 to-indigo-100/30 border border-slate-100/50 mb-3.5 flex items-end justify-center">
                      
                      {/* Floating Badge on top-right */}
                      <div className={`absolute top-3 right-3 w-8.5 h-8.5 rounded-full ${member.badgeColor} flex items-center justify-center shadow-sm border border-white/50 z-10 group-hover:scale-110 transition-transform duration-300`}>
                        <BadgeIcon className="w-4 h-4" />
                      </div>

                      {/* Headshot Image */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700 filter brightness-[0.98] contrast-[1.01]"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Member Name */}
                    <h4 className="font-display text-lg font-bold text-slate-900 mb-0.5 leading-tight tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                      {member.name}
                    </h4>

                    {/* Member Role */}
                    <p className="font-sans text-xs font-semibold text-indigo-600 tracking-wide mb-2">
                      {member.role}
                    </p>

                    {/* Accent divider line */}
                    <div className="w-8 h-[2px] rounded bg-gradient-to-r from-blue-500 to-indigo-500 mb-3 opacity-80 group-hover:w-12 transition-all duration-300" />

                    {/* Bio Description */}
                    <p className="font-sans text-slate-500 text-xs leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social Buttons row */}
                  <div className="flex items-center gap-2 mt-auto pt-1.5">
                    {member.socials.map((soc) => {
                      const SocIcon = soc.icon;
                      return (
                        <a
                          key={soc.name}
                          href={soc.url}
                          className="w-8.5 h-8.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white text-slate-400 hover:text-indigo-600 hover:border-indigo-150 hover:shadow-sm flex items-center justify-center transition-all duration-350 hover:scale-110"
                          aria-label={`${member.name} ${soc.name}`}
                        >
                          <SocIcon className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Grid Layout - Row 2: remaining 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto text-left">
            {teamMembers.slice(3).map((member, idx) => {
              const BadgeIcon = member.badgeIcon;
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: (idx + 3) * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative rounded-[32px] bg-white p-4.5 flex flex-col justify-between shadow-[0_15px_40px_rgba(15,23,42,0.012)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.04)] border border-transparent transition-all duration-400 overflow-hidden"
                  id={`team-card-${member.id}`}
                >
                  <div>
                    {/* Portrait Frame holding slot */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-indigo-50/50 to-indigo-100/30 border border-slate-100/50 mb-3.5 flex items-end justify-center">
                      
                      {/* Floating Badge on top-right */}
                      <div className={`absolute top-3 right-3 w-8.5 h-8.5 rounded-full ${member.badgeColor} flex items-center justify-center shadow-sm border border-white/50 z-10 group-hover:scale-110 transition-transform duration-300`}>
                        <BadgeIcon className="w-4 h-4" />
                      </div>

                      {/* Headshot Image */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700 filter brightness-[0.98] contrast-[1.01]"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Member Name */}
                    <h4 className="font-display text-lg font-bold text-slate-900 mb-0.5 leading-tight tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                      {member.name}
                    </h4>

                    {/* Member Role */}
                    <p className="font-sans text-xs font-semibold text-indigo-600 tracking-wide mb-2">
                      {member.role}
                    </p>

                    {/* Accent divider line */}
                    <div className="w-8 h-[2px] rounded bg-gradient-to-r from-blue-500 to-indigo-500 mb-3 opacity-80 group-hover:w-12 transition-all duration-300" />

                    {/* Bio Description */}
                    <p className="font-sans text-slate-500 text-xs leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social Buttons row */}
                  <div className="flex items-center gap-2 mt-auto pt-1.5">
                    {member.socials.map((soc) => {
                      const SocIcon = soc.icon;
                      return (
                        <a
                          key={soc.name}
                          href={soc.url}
                          className="w-8.5 h-8.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white text-slate-450 hover:text-indigo-600 hover:border-indigo-150 hover:shadow-sm flex items-center justify-center transition-all duration-350 hover:scale-110"
                          aria-label={`${member.name} ${soc.name}`}
                        >
                          <SocIcon className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ROW 3.5: Interactive How We Work Section */}
      <HowWeWork />

      {/* FAQ Section */}
      <FAQ setView={setView} />

      {/* Ready to Build / CTA bar */}
      <section className="relative py-24 bg-[#020205] text-white text-center overflow-hidden" id="about-us-cta-section">
        {/* Radial glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-900/15 blur-[130px] pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-6 space-y-10">
          <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white max-w-4xl mx-auto" id="about-us-cta-heading">
            Ready to Build Your Elite Digital <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Asset</span>?
          </h3>
          <p className="font-sans text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Let us partner with you to engineer highly scalable web systems, bespoke machine learning services, and high-converting brand platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4.5 items-center justify-center pt-2">
            <button
              onClick={() => {
                window.open('https://wa.me/237677079559?text=Hello%20Nexora%20Empire!%20I%20would%20like%20to%20start%20a%20project%20with%20you.%20I%20am%20interested%20in%20your%20digital%20solutions.', '_blank');
              }}
              className="flex items-center justify-center px-8 py-4.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-sans text-base font-semibold tracking-wide hover:brightness-110 hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer w-full sm:w-auto"
              id="cta-start-project-btn"
            >
              <ArrowUpRight className="w-5 h-5 mr-2.5 stroke-[2.5]" />
              Start a Project
            </button>
            <button
              onClick={() => {
                setView('contact');
                window.scrollTo({ top: 0, behavior: 'instant' });
                if ((window as any).lenis) {
                  (window as any).lenis.scrollTo(0);
                }
              }}
              className="flex items-center justify-center px-8 py-4.5 rounded-2xl bg-[#080815]/60 border border-indigo-500/35 text-white font-sans text-base font-semibold tracking-wide hover:border-indigo-400 hover:bg-indigo-500/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer w-full sm:w-auto"
              id="cta-contact-us-btn"
            >
              <MessageSquare className="w-5 h-5 mr-2.5 text-indigo-400 stroke-[2]" />
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
