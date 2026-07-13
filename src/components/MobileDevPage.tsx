'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';
import { CardSpotlight } from './CardSpotlight.tsx';
import { OurProvenProcess, ProcessStep } from './OurProvenProcess.tsx';
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Smartphone,
  Briefcase,
  ShoppingCart,
  Layers,
  MapPin,
  Clock,
  Building2,
  Code2,
  ChevronRight,
  Box,
  Zap,
  Search,
  Users,
  Rocket,
  Check,
  Star,
  MessageSquare,
  Shield,
  Activity,
  Compass,
  Database,
  LifeBuoy,
  Headphones
} from 'lucide-react';

interface MobileDevPageProps {
  setView: (view: 'home' | 'about-us' | 'portfolio' | 'pricing' | 'academy' | 'contact' | 'web-dev' | 'mobile-dev') => void;
}

export const MobileDevPage: React.FC<MobileDevPageProps> = ({ setView }) => {
  const [currency, setCurrency] = useState<'XAF' | 'USD'>('XAF');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const mobileServices: { id: string; number: string; title: string; description: React.ReactNode; icon: any; glowColor: string; borderColor: string; iconColorClass: string }[] = [
    {
      id: 'mobile-service-card-01',
      number: '01',
      title: 'Business Apps',
      description: <span>Professional mobile applications to <span className="font-semibold text-slate-800">streamline your operations</span> and connect with users.</span>,
      icon: Briefcase,
      glowColor: 'rgba(106, 56, 248, 0.05)',
      borderColor: 'rgba(106, 56, 248, 0.1)',
      iconColorClass: 'text-[#6A38F8] bg-[#6A38F8]/10',
    },
    {
      id: 'mobile-service-card-02',
      number: '02',
      title: 'E-Commerce Apps',
      description: <span>Powerful shopping apps with <span className="font-semibold text-slate-800">secure mobile checkouts</span> and seamless touch interactions.</span>,
      icon: ShoppingCart,
      glowColor: 'rgba(106, 56, 248, 0.05)',
      borderColor: 'rgba(106, 56, 248, 0.1)',
      iconColorClass: 'text-[#6A38F8] bg-[#6A38F8]/10',
    },
    {
      id: 'mobile-service-card-03',
      number: '03',
      title: 'SaaS Applications',
      description: <span>Scalable cloud-connected mobile platforms built to <span className="font-semibold text-slate-800">scale your business</span> anywhere.</span>,
      icon: Layers,
      glowColor: 'rgba(106, 56, 248, 0.05)',
      borderColor: 'rgba(106, 56, 248, 0.1)',
      iconColorClass: 'text-[#6A38F8] bg-[#6A38F8]/10',
    },
    {
      id: 'mobile-service-card-04',
      number: '04',
      title: 'On-Demand Apps',
      description: <span>High-performance <span className="font-semibold text-slate-800">booking, logistics, and delivery solutions</span> with live GPS tracking.</span>,
      icon: MapPin,
      glowColor: 'rgba(106, 56, 248, 0.05)',
      borderColor: 'rgba(106, 56, 248, 0.1)',
      iconColorClass: 'text-[#6A38F8] bg-[#6A38F8]/10',
    },
    {
      id: 'mobile-service-card-05',
      number: '05',
      title: 'Enterprise Apps',
      description: <span>Internal business tools designed to <span className="font-semibold text-slate-800">boost workflow efficiency</span> and team productivity.</span>,
      icon: Building2,
      glowColor: 'rgba(106, 56, 248, 0.05)',
      borderColor: 'rgba(106, 56, 248, 0.1)',
      iconColorClass: 'text-[#6A38F8] bg-[#6A38F8]/10',
    },
    {
      id: 'mobile-service-card-06',
      number: '06',
      title: 'Custom Mobile Applications',
      description: <span>Tailor-made <span className="font-semibold text-slate-800">Android and iOS platforms</span> built for your unique workflows.</span>,
      icon: Code2,
      glowColor: 'rgba(106, 56, 248, 0.05)',
      borderColor: 'rgba(106, 56, 248, 0.1)',
      iconColorClass: 'text-[#6A38F8] bg-[#6A38F8]/10',
    }
  ];

  const mobileDevProcessSteps: ProcessStep[] = [
    {
      id: 'mobiledev-discovery',
      stepNumber: '01',
      title: 'Discovery & Strategy',
      description: 'We deep dive into your mobile goals, market competitors, and device ecosystems to build a rock-solid app strategy.',
      icon: Search,
      imageUrl: '/assets/images/Discovery_Strategy.jpeg',
      bullets: ['Ecosystem Strategy (iOS/Android)', 'Feature & Platform Roadmaps', 'API & Integration Requirements'],
      gradient: 'from-blue-950/40',
      accentColor: 'text-blue-400',
      bulletColor: 'bg-blue-500',
      iconBgActive: 'bg-blue-500',
      numHoverColor: 'text-blue-500/20',
    },
    {
      id: 'mobiledev-design',
      stepNumber: '02',
      title: 'Custom Mobile UI/UX Design',
      description: 'We architect intuitive, stunning, and responsive mobile interfaces crafted specifically for handheld device interactions.',
      icon: Compass,
      imageUrl: '/assets/images/Prototyping.jpeg',
      bullets: ['Mobile-First Screen Flows', 'Custom Gesture Prototypes', 'Dark & Light Mode Themes'],
      gradient: 'from-purple-950/40',
      accentColor: 'text-purple-400',
      bulletColor: 'bg-purple-500',
      iconBgActive: 'bg-purple-500',
      numHoverColor: 'text-purple-500/20',
    },
    {
      id: 'mobiledev-development',
      stepNumber: '03',
      title: 'Agile App Engineering',
      description: 'Our mobile team designs clean, high-performance hybrid or native code supporting fluid transitions and secure data syncs.',
      icon: Code2,
      imageUrl: '/assets/images/web-development.jpeg',
      bullets: ['Hybrid or Native Development', 'Secure Backend Integrations', 'Optimized Local Caching'],
      gradient: 'from-emerald-950/40',
      accentColor: 'text-emerald-400',
      bulletColor: 'bg-emerald-500',
      iconBgActive: 'bg-emerald-500',
      numHoverColor: 'text-emerald-500/20',
    },
    {
      id: 'mobiledev-launch',
      stepNumber: '04',
      title: 'Rigid QA & App Store Launch',
      description: 'We perform automated device testing and handle the complete submission and approval process for Google Play and Apple App Store.',
      icon: Rocket,
      imageUrl: '/assets/images/webdev-launch.jpeg',
      bullets: ['Multi-Device Testing', 'App Store Submission Assistance', 'Play Store Publishing Protocols'],
      gradient: 'from-orange-950/40',
      accentColor: 'text-orange-400',
      bulletColor: 'bg-orange-500',
      iconBgActive: 'bg-orange-500',
      numHoverColor: 'text-orange-500/20',
    },
    {
      id: 'mobiledev-support',
      stepNumber: '05',
      title: 'Support & Growth Maintenance',
      description: 'We support your mobile asset with OS updates, new push notification campaigns, and live analytics integration.',
      icon: LifeBuoy,
      imageUrl: '/assets/images/nexora-empire-tech-team-collaboration.png',
      bullets: ['OS Version Compatibility Updates', 'Direct Push Notification Setup', 'Live User Analytics Integration'],
      gradient: 'from-cyan-950/40',
      accentColor: 'text-cyan-400',
      bulletColor: 'bg-cyan-500',
      iconBgActive: 'bg-cyan-500',
      numHoverColor: 'text-cyan-500/20',
    },
  ];

  const faqs = [
    {
      q: 'How long does it take to build a mobile app?',
      a: 'Most mobile applications are completed within 6–16 weeks, depending on complexity and features.'
    },
    {
      q: 'Do you build both Android and iOS apps?',
      a: 'Yes. We build Android, iOS, and cross-platform applications from a single codebase when appropriate.'
    },
    {
      q: 'Can you redesign an existing mobile app?',
      a: 'Absolutely. We modernize existing apps with improved UI/UX, performance, and scalability.'
    },
    {
      q: 'Will my app be published on the App Store and Google Play?',
      a: 'Yes. We handle deployment and assist with publishing on both platforms.'
    },
    {
      q: 'Can my app connect to my website or existing system?',
      a: 'Yes. We integrate mobile applications with websites, APIs, CRMs, payment gateways, and third-party services.'
    },
    {
      q: 'Do you provide maintenance after launch?',
      a: 'Yes. We offer ongoing updates, bug fixes, monitoring, performance optimization, and long-term support.'
    }
  ];

  return (
    <div className="relative w-full bg-[#030308] text-slate-100 overflow-hidden" id="mobiledev-page-root">
      
      {/* Background radial accent glows */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-violet-900/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-brand-violet/10 rounded-full filter blur-[130px] pointer-events-none" />
      
      {/* Structural grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* Hero Section (Dark) */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 border-b border-indigo-950/40 bg-[#020205]/40" id="mobiledev-hero">
        <div className="max-w-7xl mx-auto">
          


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side text contents */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] font-black text-[#6A38F8] uppercase px-3 py-1.5 rounded-full bg-[#6A38F8]/5 border border-[#6A38F8]/15 inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6A38F8] animate-pulse" />
                APP DEVELOPMENT
              </span>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
                Elite Mobile App <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">
                  Development Company
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
                We are the top-rated mobile app development company in Cameroon. Our software engineers build secure, high-performance iOS, Android, and cross-platform (React Native/Expo) mobile applications tailored for businesses and startups globally.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => {
                    window.open('https://wa.me/237677079559?text=Hello%20Nexora%20Empire!%20I%20would%20like%20to%20start%20a%20mobile%20development%20project%20with%20you.%20I%20am%20interested%20in%20your%20digital%20solutions.', '_blank');
                  }}
                  className="flex items-center justify-center px-8 py-4 rounded-2xl bg-[linear-gradient(90deg,#2F5BFF_0%,#4A47FF_35%,#6A38F8_70%,#8B1DCA_100%)] text-white font-sans text-sm font-semibold tracking-wide hover:brightness-110 hover:shadow-[0_0_20px_rgba(106,56,248,0.35)] transition-all cursor-pointer"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button
                  onClick={() => {
                    setView('portfolio');
                    window.scrollTo({ top: 0, behavior: 'instant' });
                    if ((window as any).lenis) {
                      (window as any).lenis.scrollTo(0);
                    }
                  }}
                  className="flex items-center justify-center px-8 py-4 rounded-2xl bg-[#080815]/60 border border-indigo-500/25 text-white font-sans text-sm font-semibold hover:border-indigo-400 hover:bg-indigo-500/5 transition-all cursor-pointer"
                >
                  View Our Work
                </button>
              </div>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-indigo-950/20 max-w-xl">
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-black text-white"><AnimatedCounter value="99.9%" /></div>
                  <div className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">Crash-Free Rate</div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-black text-white"><AnimatedCounter value="100%" /></div>
                  <div className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">Native Feeling</div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-black text-white"><AnimatedCounter value="0+" /></div>
                  <div className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">Templates Used</div>
                </div>
              </div>
            </div>

            {/* Right side empty as reference */}
            <div className="lg:col-span-5" />
          </div>

        </div>
      </section>

      {/* What We Build (Light) */}
      <section className="relative py-28 sm:py-36 bg-[#fafbfc] border-t border-b border-slate-200/50 overflow-hidden" id="mobiledev-services-section">
        {/* Curved background gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-violet-50/40 to-indigo-50/40 rounded-full blur-[140px] pointer-events-none opacity-80" />
        
        {/* Floating accents */}
        <div className="absolute left-0 top-[20%] w-[350px] h-[350px] pointer-events-none opacity-80 hidden md:block">
          <div className="absolute top-[40%] left-12 w-4.5 h-4.5 rounded-full bg-[#6A38F8] shadow-[0_0_18px_rgba(106,56,248,0.45)] z-10" />
          <div className="absolute top-[40%] left-12 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border border-violet-100/35" />
          <div className="absolute top-[40%] left-12 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-violet-100/25" />
        </div>

        <div className="absolute right-0 top-[25%] w-[350px] h-[350px] pointer-events-none opacity-80 hidden md:block">
          <div className="absolute top-[30%] right-16 w-4.5 h-4.5 rounded-full bg-[#6A38F8] shadow-[0_0_18px_rgba(106,56,248,0.45)] z-10" />
          <div className="absolute top-[-10px] right-6 w-40 h-40 bg-[radial-gradient(#cbd5e1_2.5px,transparent_2.5px)] [background-size:16px_16px] opacity-70" />
          <div className="absolute top-[30%] right-16 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full border border-violet-100/25" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
          
          {/* Section Header */}
          <div className="w-full mb-20 flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-[#6A38F8]/5 border border-[#6A38F8]/20 mb-6 select-none shadow-[0_2px_10px_rgba(106,56,248,0.03)]"
              id="mobiledev-services-subtitle-badge"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#6A38F8]" />
              <span className="font-mono text-xs tracking-[0.18em] font-extrabold text-[#6A38F8]">
                WHAT WE BUILD
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-[64px] font-[900] text-slate-900 leading-[1.1] tracking-tight mb-6"
              id="mobiledev-services-main-title"
            >
              Mobile Apps Built<br className="hidden sm:inline" /> for <span className="bg-[linear-gradient(90deg,#2F5BFF_0%,#4A47FF_35%,#6A38F8_70%,#8B1DCA_100%)] bg-clip-text text-transparent">Every Business</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-500 font-sans text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto"
              id="mobiledev-services-head-desc"
            >
              From startup MVPs to enterprise mobile platforms, we build fast, secure, and scalable mobile applications tailored to your business goals.
            </motion.p>
          </div>

          {/* Grid of services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="mobiledev-services-grid">
            {mobileServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: index * 0.05 }}
                  className="bg-white rounded-[24px] border border-slate-100/90 p-8 flex flex-col h-full justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_24px_50px_rgba(106,56,248,0.05)] hover:border-[#6A38F8]/25 group cursor-pointer text-left"
                  id={service.id}
                >
                  <div>
                    {/* Icon Box */}
                    <div className="w-14 h-14 rounded-2xl bg-[#6A38F8]/10 flex items-center justify-center mb-6 transition-all group-hover:bg-[#6A38F8]/15">
                      <Icon className="w-7 h-7 text-[#6A38F8]" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-[22px] font-bold text-slate-900 leading-snug tracking-tight mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-sm font-sans leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More link */}
                  <div className="inline-flex items-center gap-2 text-[#6A38F8] hover:text-[#8B1DCA] font-semibold text-sm select-none group/btn transition-colors duration-200">
                    <span>Learn More</span>
                    <div className="w-5 h-5 rounded-full border border-[#6A38F8] flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1.5">
                      <ChevronRight className="w-3 h-3 text-[#6A38F8]" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Our Proven Process Section */}
      <OurProvenProcess 
        idPrefix="mobiledev-process"
        badgeText="OUR PROVEN PROCESS"
        titleText="A Mobile Process Designed for Growth"
        steps={mobileDevProcessSteps}
      />

      {/* Pricing Packages Section (Light) */}
      <section className="relative py-28 sm:py-36 bg-[#fafbfc] border-b border-slate-200/50 overflow-hidden" id="mobiledev-pricing-section">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-[#2F5BFF]/5 to-[#8B1DCA]/5 rounded-full blur-[140px] pointer-events-none opacity-80" />
        
        {/* Accents */}
        <div className="absolute left-0 top-[20%] w-[350px] h-[350px] pointer-events-none opacity-80 hidden md:block">
          <div className="absolute top-[40%] left-12 w-4.5 h-4.5 rounded-full bg-[#6A38F8] shadow-[0_0_18px_rgba(106,56,248,0.45)] z-10" />
          <div className="absolute top-[40%] left-12 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border border-blue-100/35" />
          <div className="absolute top-[40%] left-12 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-blue-100/25" />
        </div>

        <div className="absolute right-0 top-[25%] w-[350px] h-[350px] pointer-events-none opacity-80 hidden md:block">
          <div className="absolute top-[30%] right-16 w-4.5 h-4.5 rounded-full bg-[#6A38F8] shadow-[0_0_18px_rgba(106,56,248,0.45)] z-10" />
          <div className="absolute top-[-10px] right-6 w-40 h-40 bg-[radial-gradient(#cbd5e1_2.5px,transparent_2.5px)] [background-size:16px_16px] opacity-70" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans text-center">
          
          {/* Section Header */}
          <div className="w-full mb-16 flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-[#6A38F8]/5 border border-[#6A38F8]/20 mb-6 select-none shadow-[0_2px_10px_rgba(106,56,248,0.03)]"
              id="mobiledev-pricing-subtitle-badge"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#6A38F8]" />
              <span className="font-mono text-xs tracking-[0.18em] font-extrabold text-[#6A38F8] uppercase">
                PRICING PACKAGES
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-[900] text-slate-900 leading-[1.1] tracking-tight mb-6"
              id="mobiledev-pricing-main-title"
            >
              Simple, <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Transparent Pricing</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-500 font-sans text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto"
              id="mobiledev-pricing-head-desc"
            >
              Choose the perfect plan for your business needs.
            </motion.p>

            {/* Currency Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col items-center justify-center gap-3.5"
              id="mobiledev-pricing-currency-container"
            >
              <div className="relative p-1 bg-white border border-slate-200 rounded-full flex gap-1 z-10 shadow-sm">
                <button
                  onClick={() => setCurrency('XAF')}
                  className={`px-6 py-2 rounded-full text-xs font-sans font-bold tracking-wider transition-all duration-300 relative cursor-pointer ${
                    currency === 'XAF' ? 'bg-[#6A38F8] text-white' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  XAF (FCFA)
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-6 py-2 rounded-full text-xs font-sans font-bold tracking-wider transition-all duration-300 relative cursor-pointer ${
                    currency === 'USD' ? 'bg-[#6A38F8] text-white' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  USD ($)
                </button>
              </div>
              {currency === 'USD' && (
                <p className="text-[11px] text-slate-400 font-medium max-w-md leading-relaxed">
                  * International pricing (USD $): 2×–4× the local price, depending on the service.
                </p>
              )}
            </motion.div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-20" id="mobiledev-pricing-grid">
            
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl border border-slate-200/60 p-8 flex flex-col h-full justify-between transition-all duration-500 hover:scale-[1.02] hover:border-indigo-100 hover:shadow-[0_20px_45px_rgba(99,102,241,0.06)] group text-left"
              id="mobiledev-plan-starter"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 text-[#1f39c4] flex items-center justify-center mb-6">
                  <Rocket className="w-7 h-7" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-display text-[26px] font-black text-slate-900 tracking-tight leading-none mb-2">
                  Starter
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm font-sans mb-6 leading-relaxed">
                  Perfect for startups and MVPs.
                </p>

                {/* Divider */}
                <div className="h-px bg-slate-200/60 w-full mb-6" />

                {/* Price Display */}
                <div className="mb-6">
                  <span className="font-display text-4xl font-black text-[#1f39c4] tracking-tight block">
                    {currency === 'XAF' ? '350,000 XAF' : '$1,190'}
                  </span>
                  <span className="text-slate-400 text-xs font-sans block mt-1 font-medium">
                    One-time payment
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 mt-6">
                  {[
                    'Cross-platform Mobile App',
                    'Up to 5 Screens',
                    'User Authentication',
                    'Responsive UI',
                    'Firebase Integration',
                    '1 Month Support'
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                      </div>
                      <span className="font-sans text-sm text-slate-800 font-medium leading-relaxed">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  setView('contact');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="group relative w-full py-3.5 rounded-2xl font-sans text-sm font-bold tracking-wide transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 border border-blue-600 text-blue-600 bg-white hover:bg-blue-50/50 cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Business Plan (Highlighted Card) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#1f39c4] to-[#8b1dca] text-white shadow-[0_20px_50px_rgba(31,57,196,0.25)] md:scale-105 z-10 rounded-3xl p-8 flex flex-col h-full justify-between transition-all duration-500 relative text-left"
              id="mobiledev-plan-business"
            >
              {/* Most Popular Badge */}
              <div className="absolute top-6 right-6 bg-white text-[#1f39c4] text-xs font-sans font-bold py-1.5 px-3.5 rounded-full flex items-center gap-1 shadow-sm">
                <Star className="w-3.5 h-3.5 fill-current text-[#1f39c4]" />
                <span>Most Popular</span>
              </div>

              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white">
                  <Briefcase className="w-7 h-7" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-display text-[26px] font-black text-white tracking-tight leading-none mb-2">
                  Business
                </h3>

                {/* Description */}
                <p className="text-indigo-100 text-sm font-sans mb-6 leading-relaxed">
                  Ideal for growing businesses.
                </p>

                {/* Divider */}
                <div className="h-px bg-white/15 w-full mb-6" />

                {/* Price Display */}
                <div className="mb-6">
                  <span className="font-display text-4xl font-black text-white tracking-tight block">
                    {currency === 'XAF' ? '700,000 XAF' : '$2,390'}
                  </span>
                  <span className="text-indigo-100/80 text-xs font-sans block mt-1 font-medium">
                    One-time payment
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 mt-6">
                  {[
                    'Custom UI/UX Design',
                    'Unlimited Screens',
                    'Database Integration',
                    'Payment Gateway',
                    'Push Notifications',
                    'Admin Dashboard',
                    'API Integration',
                    'Advanced Security',
                    '3 Months Priority Support'
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-3.5 h-3.5 text-[#1f39c4] stroke-[3.5]" />
                      </div>
                      <span className="font-sans text-sm text-white font-medium leading-relaxed">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  setView('contact');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="group relative w-full py-3.5 rounded-2xl font-sans text-sm font-bold tracking-wide transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-slate-50 shadow-md cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-blue-700" />
              </button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl border border-slate-200/60 p-8 flex flex-col h-full justify-between transition-all duration-500 hover:scale-[1.02] hover:border-indigo-100 hover:shadow-[0_20px_45px_rgba(99,102,241,0.06)] group text-left"
              id="mobiledev-plan-enterprise"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 text-[#1f39c4] flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-display text-[26px] font-black text-slate-900 tracking-tight leading-none mb-2">
                  Enterprise
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm font-sans mb-6 leading-relaxed">
                  Tailored for large-scale applications.
                </p>

                {/* Divider */}
                <div className="h-px bg-slate-200/60 w-full mb-6" />

                {/* Price Display */}
                <div className="mb-6">
                  <span className="font-display text-4xl font-black text-[#1f39c4] tracking-tight block">
                    Custom Pricing
                  </span>
                  <span className="text-slate-400 text-xs font-sans block mt-1 font-medium">
                    Tailored to your unique requirements
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 mt-6">
                  {[
                    'Native iOS & Android Apps',
                    'Dedicated Development Team',
                    'Custom Backend Infrastructure',
                    'Enterprise Integrations',
                    'Advanced Security',
                    'Cloud Architecture',
                    'Performance Optimization',
                    '12 Months Premium Support'
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                      </div>
                      <span className="font-sans text-sm text-slate-800 font-medium leading-relaxed">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  setView('contact');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="group relative w-full py-3.5 rounded-2xl font-sans text-sm font-bold tracking-wide transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 border border-blue-600 text-blue-600 bg-white hover:bg-blue-50/50 cursor-pointer"
              >
                <span>Schedule A Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

          </div>

          {/* Bottom Custom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-4xl mx-auto bg-white border border-slate-100/90 rounded-[20px] p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_12px_30px_rgba(106,56,248,0.02)]"
            id="mobiledev-pricing-custom-bar"
          >
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-11 h-11 rounded-xl bg-[#6A38F8]/10 flex items-center justify-center text-[#6A38F8]">
                <MessageSquare className="w-5 h-5 text-[#6A38F8]" />
              </div>
              <p className="font-sans text-base text-slate-700 font-medium">
                Need something custom? Let's talk about your project.
              </p>
            </div>
            
            <button
              onClick={() => {
                setView('contact');
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className="inline-flex items-center gap-2 text-[#6A38F8] hover:text-[#8B1DCA] font-semibold text-sm group cursor-pointer shrink-0 transition-all duration-200"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* Frequently Asked Questions Section (Dark) */}
      <section 
        id="mobiledev-faq"
        className="relative w-full bg-[#020205] text-white py-24 md:py-32 overflow-hidden border-t border-zinc-900/40"
      >
        {/* Background Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-violet/5 blur-[140px] z-0" />
          <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-brand-electric/5 blur-[150px] z-0" />
        </div>

        <div className="container mx-auto max-w-5xl px-6 relative z-10">
          
          {/* Header Block */}
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-3.5"
            >
              {/* Center-aligned Badge */}
              <span className="text-[11px] sm:text-xs font-mono font-extrabold uppercase tracking-[0.25em] text-[#6366f1] bg-indigo-950/20 px-4 py-1.5 rounded-full border border-indigo-500/10">
                FAQ
              </span>

              {/* Glowing Header Title */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mt-3">
                Mobile App <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">FAQ</span>
              </h2>

              {/* Delicate colored line divider */}
              <div className="w-14 h-[2px] bg-gradient-to-r from-blue-500 to-brand-violet rounded-full mt-4" />
            </motion.div>
          </div>

          {/* Accordion List */}
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              const indexStr = (idx + 1).toString().padStart(2, '0');
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? "bg-gradient-to-r from-brand-electric/50 via-indigo-500/50 to-brand-violet/50 p-[1px] shadow-[0_4px_30px_rgba(109,40,217,0.12)]" 
                      : "bg-[#05050a]/60 border border-zinc-900 hover:border-zinc-800"
                  }`}
                >
                  <div className={`w-full rounded-[15px] bg-[#05050a] ${isOpen ? 'p-5 sm:p-6' : 'p-4 sm:p-5'}`}>
                    {/* Question Header */}
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        {/* Index Badge */}
                        <div className="shrink-0 flex items-center justify-center w-10 h-8 rounded-lg bg-indigo-950/35 border border-indigo-500/10 text-[#818cf8] font-mono text-[13px] font-bold">
                          {indexStr}
                        </div>
                        
                        {/* Question Text */}
                        <span className="font-display font-bold text-white text-sm sm:text-base md:text-[17px] tracking-tight leading-tight">
                          {faq.q}
                        </span>
                      </div>

                      {/* Chevron Indicator */}
                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-zinc-950/60 border border-zinc-900 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-electric border-brand-violet/30 bg-violet-950/20' : ''}`}>
                        <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </button>

                    {/* Expandable Answer (with dynamic slide & fade) */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 sm:pl-14 text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed font-normal">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mt-16 sm:mt-20 p-5 sm:p-6 rounded-2xl sm:rounded-full bg-zinc-950/30 border border-zinc-900 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            {/* Left Portion with Icon and Text */}
            <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
              <div className="w-12 h-12 rounded-full bg-violet-950/40 border border-brand-violet/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(109,40,217,0.2)]">
                <Headphones className="w-5.5 h-5.5 text-brand-violet" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base">
                  Still have questions?
                </h3>
                <p className="font-sans text-zinc-400 text-xs sm:text-sm mt-0.5">
                  We're just a message away and ready to help you.
                </p>
              </div>
            </div>

            {/* Right Portion with Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              {/* Talk to Our Team */}
              <button
                onClick={() => {
                  setView('contact');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="group w-full sm:w-auto relative py-2.5 px-5 rounded-full bg-gradient-to-r from-blue-600 to-brand-violet text-white font-sans text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-1.5 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:brightness-110 active:scale-[0.98] cursor-pointer"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* WhatsApp Us */}
              <button
                onClick={() => {
                  const msg = encodeURIComponent("Hi, I have some questions about your Mobile App Development services.");
                  window.open(`https://wa.me/237677079559?text=${msg}`, '_blank');
                }}
                className="group w-full sm:w-auto relative py-2.5 px-5 rounded-full bg-[#020205] text-gray-200 hover:text-white font-sans text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 border border-zinc-800 hover:border-brand-violet/50 hover:bg-violet-950/10 active:scale-[0.98] cursor-pointer"
              >
                <svg className="w-4 h-4 fill-[#25d366] group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.588 1.976 14.113.953 11.5.953c-5.44 0-9.865 4.371-9.869 9.802-.001 1.736.463 3.429 1.343 4.92l-.996 3.639 3.737-.961c1.472.8 2.946 1.2 4.41.2zM17.15 14.92c-.284-.144-1.68-.823-1.94-.917-.26-.094-.449-.144-.638.144-.19.288-.731.917-.897 1.107-.165.19-.33.213-.614.07-.284-.144-1.2-.441-2.285-1.41-.845-.75-1.415-1.678-1.58-1.965-.165-.288-.018-.444.124-.585.129-.127.284-.33.427-.496.142-.165.19-.283.284-.472.094-.19.047-.354-.024-.496-.071-.142-.638-1.536-.874-2.107-.23-.554-.462-.48-.638-.49-.166-.008-.354-.01-.543-.01-.189 0-.496.071-.756.354-.26.283-.992.969-.992 2.364s1.015 2.738 1.157 2.926c.142.189 2.002 3.036 4.85 4.248.678.29 1.206.463 1.618.593.681.216 1.3.186 1.79.113.547-.081 1.68-.686 1.916-1.35.236-.663.236-1.231.165-1.35-.071-.12-.26-.19-.544-.334z" />
                </svg>
                <span>WhatsApp Us</span>
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Final CTA (Dark) */}
      <section className="relative py-20 bg-[#020205] text-white text-center overflow-hidden border-t border-indigo-950/25" id="mobiledev-cta">
        <div className="max-w-4xl mx-auto px-6 space-y-8 relative z-10">
          <span className="font-mono text-[10px] tracking-[0.25em] font-bold text-[#6A38F8] uppercase">
            Ready to Build Your Mobile App?
          </span>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white">
            Let's turn your idea into a powerful <br />
            mobile application today.
          </h3>
          <p className="font-sans text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Let's turn your idea into a powerful mobile application that engages users and accelerates your business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
            <button
              onClick={() => {
                setView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if ((window as any).lenis) {
                  (window as any).lenis.scrollTo(0);
                }
              }}
              className="flex items-center justify-center px-8 py-4 rounded-2xl bg-[linear-gradient(90deg,#2F5BFF_0%,#4A47FF_35%,#6A38F8_70%,#8B1DCA_100%)] text-white font-sans text-sm font-semibold hover:brightness-110 hover:shadow-[0_0_25px_rgba(106,56,248,0.35)] transition-all cursor-pointer w-full sm:w-auto"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button
              onClick={() => {
                setView('contact');
                window.scrollTo({ top: 0, behavior: 'instant' });
                if ((window as any).lenis) {
                  (window as any).lenis.scrollTo(0);
                }
              }}
              className="flex items-center justify-center px-8 py-4 rounded-2xl bg-[#080815]/60 border border-indigo-500/25 text-white font-sans text-sm font-semibold hover:border-indigo-400 hover:bg-indigo-500/5 transition-all cursor-pointer w-full sm:w-auto"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
