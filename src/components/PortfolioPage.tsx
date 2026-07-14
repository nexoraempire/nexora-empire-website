'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';
import { CardSpotlight } from './CardSpotlight.tsx';
import { LazyVideo } from './LazyVideo';
import { 
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Layers,
  TrendingUp,
  Clock,
  Sparkles,
  Check,
  Search,
  Briefcase,
  Dumbbell,
  Car,
  Smartphone,
  Activity,
  Cpu,
  Database,
  Code2,
  Award,
  X,
  FileText,
  BarChart3
} from 'lucide-react';

interface PortfolioPageProps {
  setView: (view: 'home' | 'about-us' | 'portfolio' | 'pricing' | 'training-internship' | 'contact' | 'web-dev' | 'mobile-dev' | 'branding-design' | 'seo-growth' | 'ai-video' | 'social-media-management') => void;
}

interface ProjectDetail {
  id: string;
  title: string;
  client: string;
  category: string;
  categoryId: string;
  categoryIcon: React.ComponentType<any>;
  categoryTheme: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  mockupBg: string;
  renderMockup: () => React.ReactNode;
  imageUrl: string;
  glowColor: string;
  borderColor: string;
  liveLink?: string;
  
  // Case study details
  metrics: { label: string; value: string; icon: React.ComponentType<any> }[];
  challenge: string;
  solution: string;
  keyFeatures: string[];
  scope: string[];
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ setView }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);

  const formatHighlights = (text: string, isLightBg: boolean = true) => {
    if (!text) return '';
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const clean = part.slice(2, -2);
        return (
          <strong key={i} className={`font-extrabold ${isLightBg ? 'text-slate-900' : 'text-white'}`}>
            {clean}
          </strong>
        );
      }
      return part;
    });
  };

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'website', label: 'Website' },
    { id: 'flyers', label: 'Flyers' },
    { id: 'branding', label: 'Branding' },
    { id: 'mobile-app', label: 'Mobile App' },
    { id: 'ai-video', label: 'AI Video' }
  ];

  const projects: ProjectDetail[] = useMemo(() => [
    {
      id: 'hypergt',
      title: 'HyperGT Apex',
      client: 'HyperGT Motorsports Inc.',
      category: 'Website',
      categoryId: 'website',
      categoryIcon: Sparkles,
      categoryTheme: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      description: 'Luxury **automotive website experience** designed with **immersive visuals**, modern animations, and a **premium user experience**.',
      fullDescription: '**HyperGT Apex** is a masterclass in **digital automotive storytelling**. We conceptualized and engineered an **ultra-premium web portal** featuring **interactive model visualizers**, full **60fps gestural transitions**, and a **highly secure pre-order architecture** that captures customer interest on contact.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
      mockupBg: 'bg-[#060608]',
      imageUrl: '/assets/images/modern-car-website-ui-design.webp',
      glowColor: 'rgba(99, 102, 241, 0.08)',
      borderColor: 'rgba(99, 102, 241, 0.3)',
      liveLink: 'https://hypergt-apex.vercel.app/',
      metrics: [
        { label: 'Initial Pre-orders', value: '450+', icon: Award },
        { label: 'Page Load Speed', value: '0.4s', icon: Clock },
        { label: 'User Retention', value: '+142%', icon: TrendingUp }
      ],
      challenge: 'Luxury automotive prospective buyers expect **absolute sensory perfection**. The client needed a platform that felt as **lightning-fast, smooth, and premium** as their real-world carbon-fiber hypercars, bypassing sluggish web standards.',
      solution: 'We built a custom rendering pipeline using **Next.js** and lightweight interactive motion vectors. By utilizing **server-side static rendering** paired with client-side canvas preloading, we achieved **instant page responses** while keeping interaction animations fluidly synced to scrolling velocity.',
      keyFeatures: [
        'Dynamic physical spec simulator sheet with 3D accents',
        'State-of-the-art immersive dark visual model showcase',
        'Instantaneous localized booking and secure down-payment processing',
        'Intelligent client inquiry routing via real-time CRM pipelines'
      ],
      scope: ['Creative Direction', 'UI/UX Visual Architecture', 'Next.js Frontend Engineering', 'CRM Sync Automation'],
      renderMockup: () => (
        <div className="relative w-full h-full p-4 flex flex-col justify-between overflow-hidden text-white font-sans select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12)_0%,transparent_75%)] opacity-80" />
          
          <div className="flex items-center justify-between text-[9px] opacity-70 z-10 border-b border-white/5 pb-1">
            <span className="font-display font-black text-red-500 tracking-wider">N HYPERGT</span>
            <div className="flex gap-2">
              <span>MODELS</span>
              <span>ABOUT</span>
              <span>GALLERY</span>
            </div>
          </div>
          
          <div className="my-auto flex flex-col items-center justify-center relative z-10 text-center">
            <h4 className="font-display text-[14px] sm:text-[16px] font-black tracking-wider text-white uppercase leading-none mb-0.5">
              DRIVE THE EXTRAORDINARY
            </h4>
            <p className="text-[7px] text-gray-400 font-light max-w-[150px] mb-2 leading-tight">
              Experience luxury, speed and innovation like never before.
            </p>
            
            <div className="w-full max-w-[210px] h-14 relative my-1">
              <svg className="w-full h-full drop-shadow-[0_0_15px_rgba(239,68,68,0.25)]" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="26" cy="27" rx="9" ry="9" fill="#ef4444" opacity="0.15" />
                <ellipse cx="94" cy="27" rx="9" ry="9" fill="#ef4444" opacity="0.15" />
                
                <circle cx="26" cy="27" r="5" fill="#0c0a09" stroke="#3f3f46" strokeWidth="1.5" />
                <circle cx="26" cy="27" r="2" fill="#ef4444" />
                <circle cx="94" cy="27" r="5" fill="#0c0a09" stroke="#3f3f46" strokeWidth="1.5" />
                <circle cx="94" cy="27" r="2" fill="#ef4444" />
                
                <path d="M12 25 L16 15 C18 10, 25 10, 32 10 L88 10 C93 10, 96 11, 100 15 L106 25 L108 27 L100 27 L99 26 L91 26 L90 27 L30 27 L29 26 L21 26 L20 27 L10 27 Z" fill="#ef4444" />
                <path d="M42 11 L58 11 C60 11, 62 12, 63 14 L68 20 L40 20 Z" fill="#1e1b4b" opacity="0.6" />
                <path d="M70 11 L84 11 C86 11, 88 12, 89 14 L93 20 L68 20 Z" fill="#1e1b4b" opacity="0.6" />
                
                <line x1="8" y1="23" x2="16" y2="23" stroke="#fca5a5" strokeWidth="1" />
                <line x1="102" y1="23" x2="112" y2="23" stroke="#f87171" strokeWidth="1" />
              </svg>
            </div>
            
            <span className="text-[6.5px] font-mono tracking-widest text-red-500 font-extrabold uppercase mt-1">
              APEX GENERATION V
            </span>
          </div>
          
          <div className="flex items-center justify-between text-[6px] text-gray-500 z-10">
            <span>PERFORMANCE DRIVEN</span>
            <span>0-100 KM/H IN 1.9S</span>
          </div>
        </div>
      )
    },
    {
      id: 'nexorafit',
      title: 'Nexora Fitness',
      client: 'Nexora Health Labs',
      category: 'Website',
      categoryId: 'website',
      categoryIcon: Sparkles,
      categoryTheme: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      description: '**Fitness platform** focused on health, workouts, **transformation programs**, and user engagement.',
      fullDescription: '**Nexora Fitness** is an intelligent **health tracking portal**. We engineered a smooth, lightweight application with integrated **progress metrics**, hydration targets, **personal achievement thresholds**, and a custom scheduling engine that keeps users motivated daily.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
      mockupBg: 'bg-[#0f0f12]',
      imageUrl: '/assets/images/modern-fitness-website-design-nexora-fitness.webp',
      glowColor: 'rgba(16, 185, 129, 0.08)',
      borderColor: 'rgba(16, 185, 129, 0.3)',
      liveLink: 'https://nexora-fitness-v2.vercel.app/',
      metrics: [
        { label: 'Active Users', value: '12,500+', icon: Activity },
        { label: 'Workout Check-ins', value: '430k+', icon: Check },
        { label: 'Engagement Rate', value: '88.4%', icon: TrendingUp }
      ],
      challenge: 'Fitness trackers often fail due to layout clutter and friction during active sessions. Nexora Health Labs wanted an **eye-safe, high-contrast dark layout** where users could log dynamic programs in **under three taps**.',
      solution: 'We engineered an **offline-first state synchronization engine** using Client React State. By caching activity telemetry locally on the client device, users can record workouts offline in isolated gym environments and **seamlessly sync to PostgreSQL** once connection re-establishes.',
      keyFeatures: [
        'Responsive workout tracker board featuring fluid gestures',
        'Custom interactive telemetry graphs with detailed performance metrics',
        'Integrated streak calculation engine supporting community badges',
        'Dynamic server-side PDF workout routine generation'
      ],
      scope: ['UX Wireframing', 'State Cache Architecture', 'PostgreSQL Schema Design', 'Tailwind Component Crafting'],
      renderMockup: () => (
        <div className="relative w-full h-full p-4 flex flex-col justify-between text-white font-sans overflow-hidden select-none">
          <div className="absolute top-[20%] right-[-10%] w-24 h-24 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between text-[8px] opacity-75 z-10 border-b border-white/5 pb-1">
            <span className="font-display font-black text-emerald-400 tracking-wider">NEXORA FITNESS</span>
            <div className="flex items-center gap-1.5">
              <span>Programs</span>
              <span className="px-1.5 py-0.5 bg-emerald-500 text-black font-bold rounded-[2px] text-[6px]">JOIN</span>
            </div>
          </div>
          
          <div className="my-auto grid grid-cols-12 gap-2 items-center relative z-10">
            <div className="col-span-7 flex flex-col items-start text-left">
              <h4 className="font-display text-[15px] font-black leading-[1.1] text-white tracking-tight uppercase">
                STRONGER<br />EVERYDAY
              </h4>
              <p className="text-[6.5px] text-gray-400 font-light mt-1 max-w-[100px] leading-tight">
                Personalized programs, expert coaching and real results.
              </p>
              <button className="px-2.5 py-0.5 mt-2 bg-emerald-400 hover:bg-emerald-500 text-black font-bold text-[6px] tracking-wide uppercase rounded-[2px] transition-colors">
                GET STARTED
              </button>
            </div>
            
            <div className="col-span-5 flex flex-col gap-1.5">
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-1">
                <span className="text-[5.5px] text-gray-400 font-mono">YOUR PROGRESS</span>
                <div className="flex items-center gap-1">
                  <div className="w-full bg-white/15 h-1 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[78%]" />
                  </div>
                  <span className="text-[6px] font-bold text-emerald-400">78%</span>
                </div>
              </div>
              
              <div className="p-1.5 rounded-lg bg-emerald-400 text-black flex flex-col gap-0.5">
                <span className="text-[5px] font-bold uppercase tracking-wider opacity-60">WORKOUT PLAN</span>
                <span className="text-[6.5px] font-black leading-none">Day 4 - Full Body</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-[5.5px] text-gray-500 font-mono">
            <span>ACTIVE ENGAGEMENT</span>
            <span>EMPOWER YOUR LIFESTYLE</span>
          </div>
        </div>
      )
    },

    {
      id: 'thinkpros',
      title: 'ThinkPros Accounting',
      client: 'ThinkPros Advisory LLC',
      category: 'Website',
      categoryId: 'website',
      categoryIcon: Briefcase,
      categoryTheme: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      description: 'Professional **accounting firm website** built for a U.S.-based company, focused on **credibility**, **lead generation**, and **client trust**.',
      fullDescription: '**ThinkPros** is an enterprise portal designed for **corporate tax consultancy**. We custom-developed a highly professional corporate platform utilizing **stable database models**, custom lead routing forms, and **visual ROI estimators**.',
      techStack: ['WordPress Core', 'PHP Engine', 'MySQL Database', 'Tailwind CSS'],
      mockupBg: 'bg-slate-50',
      imageUrl: '/assets/images/accounting-bookkeeping-website-ui-design.webp.webp',
      glowColor: 'rgba(59, 130, 246, 0.08)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
      liveLink: 'https://thinkpros-accounting.netlify.app/',
      metrics: [
        { label: 'Lead Inquiries', value: '+215%', icon: TrendingUp },
        { label: 'Database Speed', value: '180ms', icon: Clock },
        { label: 'Client Trust Rating', value: '100%', icon: Award }
      ],
      challenge: 'Corporate consultation sites frequently struggle with generic stock visual aesthetics and **slow load times** on heavy backend systems, damaging lead conversions.',
      solution: 'We streamlined the entire database pipeline with **structured query indexes** and built a **visual calculator element** that instantly outputs corporate saving estimates, captivating potential corporate clients.',
      keyFeatures: [
        'Advanced visual tax-saving estimation calculator panel',
        'Custom interactive questionnaire that funnels client qualifications',
        'Lightning-fast CDN deployment ensuring near-instant responsive layouts'
      ],
      scope: ['Strategic Database Indexing', 'Full-Stack Customization', 'Tax Calculator Development', 'Responsive Performance Audits'],
      renderMockup: () => (
        <div className="relative w-full h-full p-4 flex flex-col justify-between text-slate-800 font-sans overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_75%)] opacity-80" />
          
          <div className="flex items-center justify-between text-[8px] font-bold text-slate-900 z-10 border-b border-slate-200/80 pb-1">
            <span className="text-blue-700 font-display">ThinkPros</span>
            <div className="flex gap-2 text-[7px] text-slate-500 font-normal">
              <span>Services</span>
              <span>About Us</span>
              <span className="text-blue-600 font-semibold">Consultation</span>
            </div>
          </div>
          
          <div className="my-auto grid grid-cols-12 gap-2 items-center relative z-10">
            <div className="col-span-8 flex flex-col items-start text-left">
              <span className="text-[5px] font-mono tracking-widest text-blue-600 font-bold uppercase">FINANCIAL INTELLIGENCE</span>
              <h4 className="font-display text-[12.5px] font-extrabold leading-tight text-slate-900 mt-0.5 tracking-tight">
                Smart Accounting.<br />Stronger Business.
              </h4>
              <p className="text-[6px] text-slate-500 font-normal mt-0.5 leading-tight max-w-[130px]">
                Trusted financial solutions and advisory services across the USA.
              </p>
              <button className="px-2.5 py-0.5 mt-2 bg-blue-600 text-white font-bold text-[6px] tracking-wide rounded-[2px] shadow-sm">
                Schedule a Call
              </button>
            </div>
            
            <div className="col-span-4 flex flex-col gap-1 z-10">
              <div className="p-1 rounded-md bg-white border border-slate-200/60 shadow-sm flex flex-col gap-1">
                <span className="text-[5px] text-slate-400 font-mono uppercase leading-none">Annual Profit</span>
                <div className="h-5 flex items-end gap-[1.5px] pt-1">
                  <div className="w-1.5 h-2 bg-blue-300 rounded-[1px]" />
                  <div className="w-1.5 h-3 bg-blue-400 rounded-[1px]" />
                  <div className="w-1.5 h-2.5 bg-blue-300 rounded-[1px]" />
                  <div className="w-1.5 h-4 bg-blue-600 rounded-[1px]" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-[5.5px] text-slate-400 font-mono">
            <span>SECURE CLOUD PORTAL</span>
            <span>CREDIBILITY & TRUST</span>
          </div>
        </div>
      )
    },
    {
      id: 'nexapay',
      title: 'NexaPay Mobile App',
      client: 'NexaPay Solutions Ltd.',
      category: 'Mobile App',
      categoryId: 'web',
      categoryIcon: Smartphone,
      categoryTheme: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      description: 'Next-generation **mobile banking application** offering secure transfers, instant spend metrics, and smart card management.',
      fullDescription: '**NexaPay** is a fintech application crafted for **secure online banking**. We designed and engineered the mobile client from the ground up, implementing **biometric authentication**, real-time peer-to-peer transfers, and a **dynamic dashboard** summarizing financial health.',
      techStack: ['React Native', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Node.js'],
      mockupBg: 'bg-[#18142c]',
      imageUrl: '/assets/images/mobile-banking-app-ui-design.webp',
      glowColor: 'rgba(168, 85, 247, 0.08)',
      borderColor: 'rgba(168, 85, 247, 0.3)',
      metrics: [
        { label: 'Active Users', value: '80,000+', icon: Activity },
        { label: 'Transaction Speed', value: '<2s', icon: Check },
        { label: 'App Store Rating', value: '4.9/5', icon: Award }
      ],
      challenge: 'Users expect **instantaneous transaction processing** and absolute security on mobile platforms. Maintaining UI fluidness and zero lag while updating transaction lists in real-time was a major priority.',
      solution: 'We built a high-performance rendering system with **React Native** and virtualized list updates. By pairing it with a secure WebSocket API gateway, we achieved **sub-second transfer confirmations** while maintaining a solid 60fps render rate.',
      keyFeatures: [
        'Secure multi-factor biometric authentication pipeline',
        'Instant peer-to-peer digital transfers with live status telemetry',
        'Visual spend analysis charts summarizing monthly transaction metrics'
      ],
      scope: ['Fintech Client Architecture', 'Mobile UI/UX Implementation', 'WebSocket API Integration', 'Security Audits & Optimization'],
      renderMockup: () => (
        <div className="relative w-full h-full p-4 flex flex-col justify-between text-white font-sans overflow-hidden select-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#6d28d9]/20 to-[#020205]" />
          
          <div className="flex items-center justify-between text-[8px] font-bold text-slate-300 z-10 border-b border-white/5 pb-1">
            <span className="text-purple-400 font-display">NexaPay</span>
            <div className="flex gap-2 text-[7px] text-slate-400 font-normal">
              <span>Send</span>
              <span>Cards</span>
              <span className="text-purple-400 font-semibold">Activity</span>
            </div>
          </div>
          
          <div className="my-auto grid grid-cols-12 gap-2 items-center relative z-10">
            <div className="col-span-7 flex flex-col items-start text-left">
              <span className="text-[5px] font-mono tracking-widest text-purple-400 font-bold uppercase">SECURE MOBILE BANKING</span>
              <h4 className="font-display text-[12.5px] font-extrabold leading-tight text-white mt-0.5 tracking-tight">
                Secure Banking.<br />Smart Finances.
              </h4>
              <p className="text-[6px] text-slate-400 font-normal mt-0.5 leading-tight max-w-[120px]">
                Experience high-performance, secure transactions and smart spend logs.
              </p>
              
              <div className="mt-2 w-full p-1 bg-white/5 border border-white/10 shadow-sm rounded-md flex items-center gap-1">
                <div className="w-1/2 bg-white/10 h-2.5 rounded-[2px] px-1 flex items-center">
                  <span className="text-[4.5px] text-slate-400">Transfer amount...</span>
                </div>
                <div className="w-1/2 bg-purple-600 h-2.5 rounded-[2px] flex items-center justify-center">
                  <span className="text-[4.5px] text-white font-bold">Send Now</span>
                </div>
              </div>
            </div>
            
            <div className="col-span-5 flex items-center justify-center relative">
              <div className="absolute w-12 h-12 bg-purple-400/10 blur-xl rounded-full" />
              <svg className="w-12 h-12 drop-shadow-[0_3px_6px_rgba(0,0,0,0.15)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <path d="M12 18h.01" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-[5.5px] text-slate-400 font-mono">
            <span>BIOMETRICS SECURED</span>
            <span>REAL-TIME NOTIFICATIONS</span>
          </div>
        </div>
      )
    },
    {
      id: 'business_promotional_flyers',
      title: 'Business & Promotional Flyers',
      client: 'Various Businesses',
      category: 'Flyer',
      categoryId: 'flyers',
      categoryIcon: FileText,
      categoryTheme: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      description: 'High-impact **marketing & promotional campaigns** featuring **strong visual hierarchy**.',
      fullDescription: 'A collection of **promotional flyer designs** created for businesses across different industries, including corporate brands, social campaigns, weekend promotions, and product marketing. Each design focuses on **strong visual hierarchy**, modern layouts, and clear messaging to **maximize audience engagement** and brand awareness.',
      techStack: ['Photoshop', 'Figma', 'Illustrator'],
      mockupBg: 'bg-[#0a0f1d]',
      imageUrl: '/assets/images/Free_A4_Flyers_Grid_Mockup_pok0.webp',
      glowColor: 'rgba(59, 130, 246, 0.08)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
      metrics: [
        { label: 'Client Inquiries', value: '+45%', icon: TrendingUp },
        { label: 'Brand Recall', value: '92%', icon: Award },
        { label: 'Design Assets', value: '120+', icon: Clock }
      ],
      challenge: 'Many corporate campaigns fail to make an impact because of **cluttered layouts, poor hierarchy, and visual noise** that fail to capture the target audience\'s attention.',
      solution: 'We engineered **high-contrast layouts** utilizing clear grid systems, **bold display typography**, and a cohesive color palette designed to direct user attention directly to key calls-to-action.',
      keyFeatures: [
        'Asymmetric grid layouts for perfect visual flow',
        'Optimized for print-ready CMYK and high-resolution digital displays',
        'Cohesive branding integration with custom vector accents'
      ],
      scope: ['Graphic Design', 'Visual Hierarchy', 'Brand Alignment', 'Print Production'],
      renderMockup: () => (
        <div className="relative w-full h-full p-4 flex flex-col justify-between text-white font-sans overflow-hidden select-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/15 to-transparent opacity-80" />
          
          <div className="flex items-center justify-between text-[7px] font-bold text-blue-400 z-10 border-b border-white/5 pb-1">
            <span className="font-display tracking-widest">BUSINESS FLYERS</span>
            <span>2026 EDITION</span>
          </div>
          
          <div className="my-auto flex flex-col items-start text-left relative z-10 space-y-1.5">
            <span className="text-[5px] px-1.5 py-0.5 bg-blue-500/20 text-blue-300 rounded font-mono uppercase tracking-widest">PROMOTIONAL CAMPAIGNS</span>
            <h4 className="font-display text-[13px] font-black leading-tight tracking-tight text-white uppercase">
              STRATEGY /<br />EXECUTION
            </h4>
            
            <div className="w-full flex items-center gap-2 py-1 border-y border-white/5">
              <div className="flex flex-col">
                <span className="text-[8px] font-bold text-blue-400">98%</span>
                <span className="text-[4px] text-gray-400">SUCCESS RATE</span>
              </div>
              <div className="h-4 w-px bg-white/5" />
              <div className="flex flex-col">
                <span className="text-[8px] font-bold text-blue-400">2.5X</span>
                <span className="text-[4px] text-gray-400">AVG GROWTH</span>
              </div>
            </div>
            
            <p className="text-[5.5px] text-gray-400 font-light leading-snug max-w-[140px]">
              We empower ambitious enterprises with elite operational blueprints, custom risk modeling, and market expansions.
            </p>
          </div>
          
          <div className="flex justify-between items-center text-[5px] text-gray-500 font-mono">
            <span>SECURE STRATEGIC EXPANSION</span>
            <span>NEXORA-FLYERS.COM</span>
          </div>
        </div>
      )
    },
    {
      id: 'beauty_brand_collection',
      title: 'Beauty Brand Collection',
      client: 'Nexora Empire',
      category: 'Branding',
      categoryId: 'branding',
      categoryIcon: Sparkles,
      categoryTheme: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      description: 'Beauty & Salon Marketing Campaigns featuring **luxury aesthetics**.',
      fullDescription: 'A collection of **premium branding and promotional materials** designed for beauty salons, makeup artists, and cosmetic businesses. The designs emphasize **luxury aesthetics**, clean typography, and persuasive layouts that help brands **attract clients** and strengthen their **visual identity**.',
      techStack: ['Figma', 'Photoshop', 'Illustrator'],
      mockupBg: 'bg-[#0a0f1d]',
      imageUrl: '/assets/images/Free_A4_Flyers_Grid_Mockup_po.webp',
      glowColor: 'rgba(99, 102, 241, 0.08)',
      borderColor: 'rgba(99, 102, 241, 0.3)',
      metrics: [
        { label: 'Client Retention', value: '+85%', icon: Award },
        { label: 'Conversion Lift', value: '+28%', icon: TrendingUp },
        { label: 'Design Assets', value: '80+', icon: FileText }
      ],
      challenge: 'Beauty brands require a delicate balance of **sophistication and modern aesthetics**. Standard templates often feel clinical, lacking the **luxurious and personalized feeling** that builds authentic client relationships.',
      solution: 'We curated **high-end editorial layouts** utilizing elegant serif font pairings, **luxurious soft color palettes**, and **strategic whitespace** that evokes an immediate sense of **premium luxury**.',
      keyFeatures: [
        'Custom typographic styling guidelines for absolute visual consistency',
        'Bespoke color palettes tailored for high-end boutique brand representation',
        'High-resolution visual asset pack designed for cross-channel marketing campaigns'
      ],
      scope: ['Creative Direction', 'Brand Identity Systems', 'Visual Storytelling', 'Asset Pack Creation'],
      renderMockup: () => (
        <div className="relative w-full h-full p-4 flex flex-col justify-between text-white font-sans overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] opacity-80" />
          
          <div className="flex items-center justify-between text-[7px] text-gray-500 z-10 border-b border-white/5 pb-1">
            <span className="font-mono text-indigo-400">NEXORA EMPIRE v1.0</span>
            <span>BEAUTY BRANDING</span>
          </div>
          
          <div className="my-auto flex flex-col items-center justify-center relative z-10">
            <div className="relative w-16 h-16 border border-rose-500/20 rounded-full flex items-center justify-center mb-1">
              <div className="absolute inset-1.5 border border-dashed border-rose-500/10 rounded-full" />
              
              <div className="relative z-10 w-9 h-9 bg-gradient-to-br from-rose-400 via-pink-500 to-indigo-600 rounded-full shadow-lg flex items-center justify-center text-white font-serif italic text-lg">
                N
              </div>
            </div>
            
            <h4 className="font-serif text-[11px] font-bold text-white tracking-widest mt-1">
            BEAUTY BRAND
            </h4>
            <span className="text-[5px] text-rose-300 tracking-[0.15em] uppercase font-light mt-0.5">
              Premium Cosmetic Aesthetics
            </span>
          </div>
          
          <div className="flex justify-between items-center text-[5px] text-gray-600 font-mono">
            <span>LUXURY IDENTITY BLUEPRINTS</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
        </div>
      )
    },
    {
      id: 'nexora_academy_campaign',
      title: 'Nexora Academy Campaign',
      client: 'Nexora Empire',
      category: 'Branding',
      categoryId: 'branding',
      categoryIcon: Sparkles,
      categoryTheme: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      description: 'Training & Educational Marketing',
      fullDescription: 'A promotional campaign designed for Nexora Academy to advertise AI masterclasses, coding bootcamps, internships, and technology training programs. The designs combine modern visuals, clear information hierarchy, and engaging layouts to encourage registrations and build trust.',
      techStack: ['Figma', 'Photoshop', 'After Effects'],
      mockupBg: 'bg-[#0a0f1d]',
      imageUrl: '/assets/images/Free_A4_Flyers_Grid_Mockup_pok.webp',
      glowColor: 'rgba(244, 63, 94, 0.08)',
      borderColor: 'rgba(244, 63, 94, 0.3)',
      metrics: [
        { label: 'Course Enrollees', value: '1,200+', icon: TrendingUp },
        { label: 'Impression Reach', value: '2.5M', icon: Award },
        { label: 'Engagement Rate', value: '+18%', icon: Activity }
      ],
      challenge: 'Educational advertisements often struggle with info-overload, rendering complex training programs hard to comprehend quickly in fast-scrolling environments like Instagram and Twitter.',
      solution: 'We designed structured visual hierarchies that separate program benefits, curriculum steps, and pricing tiers into highly digestable, eye-catching infographic panels.',
      keyFeatures: [
        'Modular template cards optimized for quick visual scanning',
        'Dynamic social banner presets built for various device layouts',
        'Integrated energetic brand assets designed to drive immediate conversions'
      ],
      scope: ['Educational Art Direction', 'Social Asset Generation', 'Campaign Strategy Mapping'],
      renderMockup: () => (
        <div className="relative w-full h-full p-4 flex flex-col justify-between text-white font-sans overflow-hidden select-none">
          <div className="absolute inset-0 bg-gradient-to-t from-[#3a1c22] to-transparent opacity-40" />
          
          <div className="flex items-center justify-between text-[7px] text-rose-300 z-10 border-b border-white/5 pb-1">
            <span className="font-display font-black text-rose-100">NEXORA ACADEMY</span>
            <span>LEARNING SYSTEM</span>
          </div>
          
          <div className="my-auto flex flex-col items-center justify-center relative z-10 text-center">
            <div className="p-3 bg-white/5 border border-rose-500/20 rounded-xl backdrop-blur-md max-w-[180px] space-y-1 relative">
              <span className="text-[5px] font-mono tracking-widest text-rose-400 font-bold uppercase">AI MASTERCLASS</span>
              
              <h4 className="font-display text-[11px] font-extrabold text-rose-100 leading-tight uppercase">
                BOOTCAMP 2026
              </h4>
              
              <p className="text-[5px] text-rose-200/70 font-light leading-snug">
                Learn fullstack development &amp; AI integration from elite field engineers.
              </p>
              
              <div className="py-1 flex justify-center gap-1">
                <span className="text-[4px] px-1 py-0.5 bg-rose-500/10 text-rose-300 border border-rose-500/20 rounded">100% HANDS-ON</span>
                <span className="text-[4px] px-1 py-0.5 bg-rose-500/10 text-rose-300 border border-rose-500/20 rounded">MENTORSHIP</span>
              </div>
            </div>
            
            <button className="px-3 py-0.5 mt-2 bg-rose-400 hover:bg-rose-500 text-black font-extrabold text-[5.5px] tracking-widest uppercase rounded-full shadow-sm transition-colors">
              REGISTER TODAY
            </button>
          </div>
          
          <div className="flex justify-between items-center text-[5px] text-rose-400/40 font-mono">
            <span>EDU CAMPAIGN</span>
            <span>@NEXORA_ACADEMY</span>
          </div>
        </div>
      )
    },
    {
      id: 'nexora_empire_social_campaigns',
      title: 'Nexora Empire Social Campaigns',
      client: 'Nexora Empire',
      category: 'Branding',
      categoryId: 'branding',
      categoryIcon: Sparkles,
      categoryTheme: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      description: 'Brand Awareness & Weekly Content',
      fullDescription: 'Designed a series of social media campaigns for Nexora Empire to strengthen brand awareness, promote services, and engage audiences across digital platforms. Every design follows a consistent visual identity while combining modern layouts, compelling messaging, and strategic branding to increase recognition and support business growth.',
      techStack: ['Figma', 'Illustrator', 'Photoshop'],
      mockupBg: 'bg-[#0a0f1d]',
      imageUrl: '/assets/images/Free_A4_Flyers_Grid_Mockup_5.webp',
      glowColor: 'rgba(99, 102, 241, 0.08)',
      borderColor: 'rgba(99, 102, 241, 0.3)',
      metrics: [
        { label: 'Brand Awareness', value: '+120%', icon: TrendingUp },
        { label: 'Weekly Reach', value: '3.2M', icon: Award },
        { label: 'Lead Generation', value: '+45%', icon: Activity }
      ],
      challenge: 'Establishing regular, high-quality, and visually unified weekly content without exhausting internal design resources is a constant brand challenge.',
      solution: 'We established a structured weekly content asset system that utilizes responsive master templates. This keeps all weekly graphics, quotes, and announcements strictly on-brand with absolute font, logo, and grid spacing accuracy.',
      keyFeatures: [
        'Responsive graphic guidelines library mapping weekly announcements',
        'Unified asset library featuring clean custom grid layouts',
        'High-impact typographic styling to stop feed scroll-past'
      ],
      scope: ['Style Guide Formulation', 'Weekly Content Mapping', 'Asset System Assembly'],
      renderMockup: () => (
        <div className="relative w-full h-full p-4 flex flex-col justify-between text-white font-sans overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15)_0%,transparent_60%)] opacity-80" />
          
          <div className="flex items-center justify-between text-[7px] text-gray-500 z-10 border-b border-white/5 pb-1">
            <span className="font-mono text-indigo-400">NEXORA EMPIRE BRAND</span>
            <span>WEEKLY CAMPAIGN</span>
          </div>
          
          <div className="my-auto flex flex-col items-start relative z-10 text-left space-y-1.5 pl-2">
            <span className="text-[5px] px-1 py-0.5 bg-indigo-500/20 text-indigo-300 rounded font-mono uppercase tracking-widest">WEEKLY NEWSLETTER</span>
            
            <h4 className="font-display text-[12px] font-black leading-none text-white uppercase">
              HELLO MONDAY!
            </h4>
            
            <p className="text-[5px] text-slate-300 max-w-[130px] leading-relaxed">
               New week, new milestones. Kickstart your business goals with custom automated developer grids.
            </p>
            
            <div className="flex items-center gap-1.5 pt-1">
              <span className="text-[4.5px] text-indigo-300 font-bold uppercase tracking-wider">READ ARTICLE</span>
              <svg className="w-1.5 h-1.5 text-indigo-300 fill-current" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-[5px] text-gray-600 font-mono">
            <span>WEEKLY INSIGHTS</span>
            <span>@NEXORA_EMPIRE</span>
          </div>
        </div>
      )
    },
    {
      id: 'kids_bootcamp_video',
      title: 'Nexora Kids Bootcamp Video',
      client: 'Nexora Education',
      category: 'AI Video',
      categoryId: 'ai-video',
      categoryIcon: Cpu,
      categoryTheme: 'bg-purple-50/10 text-purple-400 border-purple-500/20',
      description: 'Holiday bootcamp video listing fundamentals, graphic design, and AI basics for kids.',
      fullDescription: 'An exciting kids technology bootcamp video presentation. Perfect for introducing youngsters to Computer Fundamentals, Programming Basics, PowerPoint, Graphic Design, and Artificial Intelligence (AI) through a fun, supportive learning environment.',
      techStack: ['CapCut', 'ChatGPT', 'Canva'],
      mockupBg: 'bg-[#0f0e15]',
      imageUrl: '/assets/images/nexora-empire-kids-bootcamp-ai-video.mp4',
      glowColor: 'rgba(168, 85, 247, 0.08)',
      borderColor: 'rgba(168, 85, 247, 0.3)',
      metrics: [
        { label: 'Bootcamp Registrants', value: '150+', icon: Activity },
        { label: 'Registration Fee', value: '1,000 FCFA', icon: Check },
        { label: 'Training Fee', value: '10,000 FCFA', icon: Award }
      ],
      challenge: 'Keeping kids engaged in educational technology during the holidays requires extremely colorful, fast-paced, and highly interactive instructional materials.',
      solution: 'We produced a vibrant promo video featuring friendly child avatars, game-like design badges, and clear, bold typographic overlays listing the curriculum.',
      keyFeatures: [
        'Vibrant graphic animation listing fundamentals like Scratch, PPT & AI',
        'Engaging kid-friendly voiceover and music tracks',
        'Clear pricing callouts: 1,000 FCFA registration and 10,000 FCFA tuition'
      ],
      scope: ['Video Editing', 'Scriptwriting', 'AI Voiceover Synthesis', 'Visual Effects Integration'],
      renderMockup: () => (
        <div className="relative w-full h-full p-4 flex flex-col justify-between text-white font-sans overflow-hidden select-none">
          <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(168,85,247,0.12)_0%,transparent_75%) opacity-80" />
          
          <div className="flex items-center justify-between text-[7px] text-purple-400 z-10 border-b border-white/5 pb-1">
            <span className="font-display font-black tracking-wider text-purple-300">VORTEX NEURAL STUDIO</span>
            <span>TEASER RENDER</span>
          </div>
          
          <div className="my-auto flex flex-col items-center justify-center relative z-10 w-full">
            {/* Cinematic player frame */}
            <div className="w-full max-w-[220px] aspect-video bg-black/60 border border-purple-500/30 rounded-lg relative overflow-hidden flex items-center justify-center shadow-lg">
              {/* Starry deep space simulation overlay */}
              <div className="absolute inset-0 opacity-45 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.4),transparent)]" />
              <div className="absolute w-8 h-8 rounded-full bg-purple-500/20 blur-md" />
              
              {/* Play symbol */}
              <div className="w-6 h-6 rounded-full bg-purple-500/80 hover:bg-purple-600 text-black flex items-center justify-center shadow-md cursor-pointer relative z-10">
                <svg className="w-2.5 h-2.5 fill-current ml-0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              
              {/* Simulated timeline */}
              <div className="absolute bottom-1.5 left-2 right-2 flex items-center gap-1 z-10">
                <span className="text-[4px] font-mono text-purple-300">0:14</span>
                <div className="flex-1 bg-white/20 h-0.5 rounded-full relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-[45%] bg-purple-500" />
                </div>
                <span className="text-[4px] font-mono text-gray-400">0:30</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              <span className="text-[5px] font-mono text-purple-300 uppercase tracking-widest">DIFFUSION PIPELINE ACTIVE</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-[5px] text-purple-500/40 font-mono">
            <span>SORA API POWERED</span>
            <span>FPS: 60 (UPSCALED)</span>
          </div>
        </div>
      )
    },
    {
      id: 'real_estate_app',
      title: 'Cameroon Real Estate Web App',
      client: 'Cameroon Housing Group',
      category: 'Website',
      categoryId: 'website',
      categoryIcon: Sparkles,
      categoryTheme: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      description: 'Real estate web app tailored for Cameroonian local market.',
      fullDescription: 'A custom-tailored real estate web application optimized for the Cameroonian local housing and land acquisition market. Designed to bridge the gap between local landlords, brokers, and property buyers with localized search, neighborhood directories, and broker verification.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
      mockupBg: 'bg-[#0b0c10]',
      imageUrl: '/assets/images/real-estate-website-ui-design.webp',
      glowColor: 'rgba(99, 102, 241, 0.08)',
      borderColor: 'rgba(99, 102, 241, 0.3)',
      metrics: [
        { label: 'User Registrations', value: '8,200+', icon: Activity },
        { label: 'Verified Properties', value: '1,500+', icon: Check },
        { label: 'Leads Generated', value: '12k+', icon: TrendingUp }
      ],
      challenge: 'The Cameroonian real estate market faces challenges with land ownership transparency, trust issues, and unverified brokers, leading to client security concerns and search inefficiencies.',
      solution: 'We built a secure real estate portal that integrates broker verification checks, interactive map-based listings, and localized search filters specifically optimized for Cameroon’s regions, cities, and neighborhoods.',
      keyFeatures: [
        'Secure broker verification and rating badges',
        'Localized property search by region, city, and neighborhood',
        'Interactive location mapping and instant WhatsApp contact routing'
      ],
      scope: ['UI/UX Design', 'Database Architecture', 'Frontend Development', 'Broker Verification Pipeline'],
      renderMockup: () => (
        <div className="relative w-full h-full p-4 flex flex-col justify-between text-white font-sans overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15)_0%,transparent_70%)] opacity-80" />
          
          <div className="flex items-center justify-between text-[7px] text-slate-400 z-10 border-b border-white/5 pb-1">
            <span className="font-bold text-indigo-400 tracking-wider">CAMERESTATE</span>
            <span>YAOUNDE / DOUALA</span>
          </div>
          
          <div className="my-auto flex flex-col items-start text-left space-y-1 z-10">
            <span className="text-[5px] font-mono tracking-widest text-indigo-400 font-bold uppercase">LOCAL REAL ESTATE PORTAL</span>
            <h4 className="font-display text-[12px] font-black text-white tracking-tight leading-none">
              FIND YOUR TRUSTED<br />HOME IN CAMEROON
            </h4>
            <p className="text-[5px] text-gray-400 max-w-[150px] leading-snug">
              Browse verified land parcels, apartments, and commercial spaces directly from local developers.
            </p>
            <div className="flex gap-1.5 mt-1.5">
              <span className="px-2 py-0.5 bg-indigo-600 text-[5px] font-bold rounded-[2px] uppercase">Search Douala</span>
              <span className="px-2 py-0.5 bg-white/10 text-[5px] font-bold rounded-[2px] uppercase">Search Yaounde</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-[5px] text-gray-600 font-mono">
            <span>VERIFIED BROKERS ONLY</span>
            <span>SECURE LAND SEARCH</span>
          </div>
        </div>
      )
    },
    {
      id: 'bootcamp_storytelling_video',
      title: 'Nexora Empire Bootcamp Story',
      client: 'Nexora Academy',
      category: 'AI Video',
      categoryId: 'ai-video',
      categoryIcon: Cpu,
      categoryTheme: 'bg-purple-50/10 text-purple-400 border-purple-500/20',
      description: 'A storytelling commercial depicting friends making a life-changing career pivot.',
      fullDescription: 'A narrative video campaign depicting a career-changing journey of two friends. It showcases how transitioning from passive screen time to professional tech training at Nexora Empire empowers beginner and intermediate students to land jobs and acquire high-paying clients.',
      techStack: ['Adobe Premiere Pro', 'ChatGPT', 'Photoshop'],
      mockupBg: 'bg-[#0e0a16]',
      imageUrl: '/assets/images/nexora-empire-web-devopment-tech-training.mp4',
      glowColor: 'rgba(168, 85, 247, 0.08)',
      borderColor: 'rgba(168, 85, 247, 0.3)',
      metrics: [
        { label: 'Video Shares', value: '12k+', icon: TrendingUp },
        { label: 'Bootcamp Applicants', value: '380+', icon: Award },
        { label: 'Enrollment Growth', value: '3.5x', icon: Activity }
      ],
      challenge: 'Conveying that complete beginners can learn complex tech skills like Web & Mobile development, SEO, and Digital Marketing without prior experience.',
      solution: 'We storyboarded a relatable friend-to-friend discussion, highlighting accountability, portfolio building, CV updates, and beginner-friendly mentorship paths.',
      keyFeatures: [
        'Emotional friend-to-friend career comparison dialog',
        'Detailed listing of taught tracks (Web Dev, Mobile App, Branding, SEO, SMM)',
        'Verification callout for online and on-site registration paths'
      ],
      scope: ['Scriptwriting & Storyboarding', 'AI Voice Synthesis', 'Video Direction', 'Motion Graphics editing'],
      renderMockup: () => (
        <div className="relative w-full h-full p-4 flex flex-col justify-between text-white font-sans overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15)_0%,transparent_70%)] opacity-80" />
          
          <div className="flex items-center justify-between text-[7px] text-purple-400 z-10 border-b border-white/5 pb-1">
            <span className="font-serif italic text-purple-300 font-bold">AETHERIA COUTURE</span>
            <span>SYSTEM RUNWAY v4</span>
          </div>
          
          <div className="my-auto flex flex-col items-center justify-center relative z-10 w-full space-y-1">
            {/* Elegant fashion frame mockup */}
            <div className="w-full max-w-[210px] aspect-[4/3] bg-black/70 border border-purple-500/20 rounded-lg relative overflow-hidden flex flex-col justify-between p-2 shadow-lg">
              <div className="flex justify-between items-center text-[4px] font-mono text-gray-400">
                <span>[AVATAR_ACTIVE: #09]</span>
                <span className="text-purple-400">92% SIMULATED</span>
              </div>
              
              <div className="my-auto flex flex-col items-center">
                <span className="text-[14px] font-light tracking-[0.25em] text-white">AETHERIA</span>
                <span className="text-[4px] font-mono tracking-widest text-purple-300 uppercase mt-1">GEN-3 SILK & CHROME FLUIDITY</span>
              </div>
              
              <div className="flex justify-between items-center text-[4px] text-purple-400">
                <span>ZOOM: 1.8X</span>
                <span>ISO: 400</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-[5px] text-purple-500/40 font-mono">
            <span>NEURAL GARMENT PROCESSOR</span>
            <span>FRAME RATE: 60 FPS</span>
          </div>
        </div>
      )
    },
    {
      id: 'coding_masterclass_promo',
      title: 'Coding Masterclass Promo',
      client: 'Nexora Academy',
      category: 'AI Video',
      categoryId: 'ai-video',
      categoryIcon: Cpu,
      categoryTheme: 'bg-purple-50/10 text-purple-400 border-purple-500/20',
      description: 'An intensive 2-month coding masterclass video campaign listing core web development modules.',
      fullDescription: 'A high-conversion 45-second promo video detailing the curriculum of the intensive 2-month Coding Masterclass. Highlights practical projects, flexible online/on-site schedules, and modern technology competencies.',
      techStack: ['Premiere Pro', 'ChatGPT'],
      mockupBg: 'bg-[#020205]',
      imageUrl: '/assets/images/nexora-empire-student-ai-video.mp4',
      glowColor: 'rgba(168, 85, 247, 0.08)',
      borderColor: 'rgba(168, 85, 247, 0.3)',
      metrics: [
        { label: 'Click-Through Rate', value: '8.4%', icon: TrendingUp },
        { label: 'Masterclass Graduates', value: '250+', icon: Check },
        { label: 'Avg. Course Rating', value: '4.9/5', icon: Award }
      ],
      challenge: 'Potential coding students often hesitate due to time constraints or fear of failing to grasp backend/database engineering.',
      solution: 'We structured a fast-paced feature breakdown highlighting flexible 2-month schedules, online/on-site options, and beginner-to-advanced project-based curricula.',
      keyFeatures: [
        'Dynamic typography slides highlighting HTML, JS, React, Node, and AI-assisted coding',
        'Call-to-action overlays displaying local Cameroon WhatsApp contact (+237 677 079 559)',
        'Verifiable project-based learning pathway showcases'
      ],
      scope: ['Dynamic Typography Styling', 'Promotional Video Assembly', 'AI-assisted Asset Generation', 'Audio Sync & Post-production'],
      renderMockup: () => (
        <div className="relative w-full h-full p-4 flex flex-col justify-between text-white font-sans overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(139,92,246,0.15)_0%,transparent_80%)] opacity-80" />
          
          <div className="flex items-center justify-between text-[7px] text-purple-400 z-10 border-b border-white/5 pb-1">
            <span className="font-mono text-purple-300 font-bold uppercase tracking-wider">NEBULA PICTURES</span>
            <span>CINEMATIC HUD v1.02</span>
          </div>
          
          <div className="my-auto flex flex-col items-center justify-center relative z-10 w-full space-y-1">
            {/* Sci-fi viewport frame */}
            <div className="w-full max-w-[210px] aspect-[16/9] bg-slate-950/80 border border-purple-500/30 rounded relative overflow-hidden flex flex-col justify-between p-1.5 shadow-md">
              <div className="flex justify-between items-center text-[3.5px] font-mono text-purple-300/60">
                <span>[SECURE LINK]</span>
                <span className="text-red-500 animate-pulse">● REC 4K</span>
              </div>
              
              <div className="my-auto flex flex-col items-center">
                <span className="text-[10px] font-black tracking-widest text-white leading-none">KEPLER-186</span>
                <span className="text-[3.5px] font-mono tracking-wide text-gray-400 mt-1">VOYAGE THROUGH NEBULAR STORM</span>
              </div>
              
              <div className="flex justify-between items-center text-[3.5px] text-purple-300/40 font-mono">
                <span>SYS_X: 49.201</span>
                <span>SYS_Y: -108.92</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-[5px] text-purple-500/30 font-mono">
            <span>NEURAL TEXT-TO-VIDEO</span>
            <span>COLOR SPACE: DCI-P3</span>
          </div>
        </div>
      )
    }
  ], []);

  // Filter logic
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Category matches
      const matchesCategory = 
        selectedCategory === 'all' ||
        project.categoryId === selectedCategory;

      // Search query matches
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, projects]);

  const activeProject = useMemo(() => {
    return projects.find(p => p.id === activeCaseStudyId) || null;
  }, [activeCaseStudyId, projects]);

  return (
    <div className="relative w-full bg-white text-slate-800 overflow-hidden min-h-screen" id="portfolio-page-root">

      {/* Portfolio Hero (DARK MODE) */}
      <section className="relative overflow-hidden border-b border-indigo-950/20 bg-[#060814]" id="portfolio-hero">
        {/* Hero Background Image reference matching About Us */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 scale-105 pointer-events-none"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop')" }} 
        />
        {/* Soft elegant gradient overlay matching About Us */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060814] via-[#060814]/85 to-[#020205]/95 pointer-events-none" />
        
        {/* Ambient color blobs matching About Us */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28 z-10">
          
          {/* Headings */}
          <div className="max-w-3xl text-left space-y-6" id="portfolio-page-intro">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-300 tracking-wider uppercase font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Proven Excellence
            </span>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight" id="portfolio-hero-title">
              Showcasing High-Impact <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Digital Solutions</span>
            </h1>
            
            <p className="font-sans text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl" id="portfolio-hero-desc">
              Explore our curated gallery of successful collaborations, where elite engineering standards meet pixel-perfect designs and scalable enterprise-level frameworks.
            </p>
          </div>

        </div>
      </section>

      {/* Grid of Projects (LIGHT MODE) */}
      <section className="py-24 px-6 md:px-12 relative bg-white text-slate-800 overflow-hidden" id="portfolio-grid-section">
        {/* Light Mode elegant decorative ambient elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-slate-50 to-transparent opacity-80" />
          <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
          {/* Subtle grid pattern matching light theme */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1.2px,transparent_1.2px),linear-gradient(to_bottom,#f1f5f9_1.2px,transparent_1.2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_75%,transparent_100%)] opacity-85" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-12">

          {/* Projects Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-6" 
            id="portfolio-grid-header"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/80 text-xs font-semibold text-indigo-700 tracking-wider uppercase font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
              Client Success
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#0e1629] tracking-tight leading-tight max-w-3xl" id="portfolio-grid-title">
              Selected <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto" id="portfolio-grid-desc">
              Explore our curated showcase of elite digital designs, custom assets, <br className="hidden sm:inline" /> and high-performance applications crafted to elevate your brand.
            </p>
          </motion.div>

          {/* Filtering and Search Controls */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-6 items-center justify-between pb-8 border-b border-slate-100"
            id="portfolio-controls"
          >
            {/* Category selection bar */}
            <div className="flex flex-wrap gap-2.5" id="portfolio-categories">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-sans font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_4px_15px_rgba(99,102,241,0.25)]'
                      : 'bg-slate-50 border border-slate-200/80 text-slate-500 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input field */}
            <div className="relative max-w-md w-full" id="portfolio-search-container">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search projects by name, technology or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 hover:border-indigo-400 focus:border-indigo-600 rounded-full py-2.5 pl-11 pr-5 text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500/20 shadow-sm transition-all"
                id="portfolio-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </motion.div>

          {/* Dynamic Service Navigation Banner */}
          <AnimatePresence mode="wait">
            {selectedCategory === 'mobile-app' && (
              <motion.div
                key="mobile-app-banner"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col md:flex-row items-center justify-between p-5 rounded-2xl bg-purple-500/5 border border-purple-500/10 text-left gap-4"
                id="portfolio-mobile-app-banner"
              >
                <div className="flex items-center gap-4">
                  <span className="p-3 rounded-xl bg-purple-500/10 text-purple-600 shadow-sm shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0e1629] font-sans">Looking for Bespoke Mobile Development?</h4>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">Explore our custom iOS and Android applications, React Native architectures, and flexible pricing plans.</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setView('mobile-dev');
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className="px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white text-xs font-sans font-bold rounded-xl flex items-center gap-2 shadow-sm hover:shadow-purple-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0 cursor-pointer"
                >
                  View Mobile Development Service &amp; Pricing
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {selectedCategory === 'branding' && (
              <motion.div
                key="branding-banner"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col md:flex-row items-center justify-between p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 text-left gap-4"
                id="portfolio-branding-banner"
              >
                <div className="flex items-center gap-4">
                  <span className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 shadow-sm shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0e1629] font-sans">Looking for Creative Brand Identity Design?</h4>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">Explore our comprehensive brand guideline kits, custom vector logos, and graphic design service tiers.</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setView('branding-design');
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-sans font-bold rounded-xl flex items-center gap-2 shadow-sm hover:shadow-indigo-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0 cursor-pointer"
                >
                  View Branding Service &amp; Pricing
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {selectedCategory === 'ai-video' && (
              <motion.div
                key="ai-video-banner"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col md:flex-row items-center justify-between p-5 rounded-2xl bg-purple-500/5 border border-purple-500/10 text-left gap-4"
                id="portfolio-ai-video-banner"
              >
                <div className="flex items-center gap-4">
                  <span className="p-3 rounded-xl bg-purple-500/10 text-purple-600 shadow-sm shrink-0">
                    <Cpu className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0e1629] font-sans">Looking for Advanced AI Video Production?</h4>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">Explore our custom neural asset pipelines, diffusion video renders, synthetic trailers, and production tiers.</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setView('ai-video');
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className="px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white text-xs font-sans font-bold rounded-xl flex items-center gap-2 shadow-sm hover:shadow-purple-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0 cursor-pointer"
                >
                  View AI Video Service &amp; Pricing
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 space-y-4" id="portfolio-empty-state">
              <Search className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <h3 className="font-display text-lg font-bold text-slate-900">No projects found matching your query</h3>
              <p className="font-sans text-xs text-slate-500 max-w-md mx-auto">
                Try clearing your search query or selecting another category filter tab above to view our records of excellence.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-600 hover:text-slate-950 transition-colors cursor-pointer font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="portfolio-grid">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => {
                  const CategoryIcon = project.categoryIcon;
                  const lightCategoryTheme = project.categoryTheme
                    .replace('text-emerald-400', 'text-emerald-700 bg-emerald-50 border-emerald-200/60')
                    .replace('text-cyan-400', 'text-cyan-700 bg-cyan-50 border-cyan-200/60')
                    .replace('text-amber-400', 'text-amber-700 bg-amber-50 border-amber-200/60')
                    .replace('text-orange-400', 'text-orange-700 bg-orange-50 border-orange-200/60')
                    .replace('text-blue-400', 'text-blue-700 bg-blue-50 border-blue-200/60')
                    .replace('border-emerald-500/20', '')
                    .replace('border-cyan-500/20', '')
                    .replace('border-amber-500/20', '')
                    .replace('border-orange-500/20', '')
                    .replace('border-blue-500/20', '')
                    .replace('bg-emerald-500/10', '')
                    .replace('bg-cyan-500/10', '')
                    .replace('bg-amber-500/10', '')
                    .replace('bg-orange-500/10', '')
                    .replace('bg-blue-500/10', '');

                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="rounded-3xl bg-white border border-slate-200/70 shadow-[0_15px_35px_rgba(0,0,0,0.02)] hover:border-indigo-100 hover:shadow-[0_20px_45px_rgba(99,102,241,0.06)] relative overflow-hidden group transition-all duration-500 flex flex-col h-full"
                      id={`project-card-${project.id}`}
                    >
                      <CardSpotlight
                        className="p-6 sm:p-8 flex flex-col justify-between h-full"
                        glowColor="rgba(31, 57, 196, 0.03)"
                        borderColor="rgba(31, 57, 196, 0.12)"
                      >
                        <div className="space-y-6">
                          
                          {/* Card Upper Info Row */}
                          <div className="flex items-center justify-between">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold font-sans uppercase border ${lightCategoryTheme}`}>
                              <CategoryIcon className="w-3.5 h-3.5" />
                              {project.category}
                            </span>
                            <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                              CLIENT: {project.client.split(' ')[0]}
                            </span>
                          </div>

                          {/* Render Mockup Showcase Box */}
                          <div className="w-full aspect-[16/13] rounded-xl overflow-hidden border border-slate-200/30 group-hover:border-indigo-200/50 transition-all duration-500 relative flex items-center justify-center">
                            {project.imageUrl.endsWith('.mp4') ? (
                              <LazyVideo
                                src={project.imageUrl}
                                className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                                onMouseEnter={(e) => { e.currentTarget.muted = false; }}
                                onMouseLeave={(e) => { e.currentTarget.muted = true; }}
                              />
                            ) : (
                              <img
                                src={project.imageUrl}
                                alt={project.title}
                                width={1200}
                                height={1040}
                                className="mockup-scroll-img"
                                referrerPolicy="no-referrer"
                                loading="lazy"
                                decoding="async"
                              />
                            )}
                            <div className="absolute inset-0 bg-slate-950/0 hover:bg-slate-950/30 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer pointer-events-auto"
                                 onClick={() => setActiveCaseStudyId(project.id)}>
                              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 text-white font-sans font-bold text-xs rounded-xl shadow-lg flex items-center gap-1.5 transition-all">
                                Explore Case Study
                                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                              </button>
                            </div>
                          </div>

                          {/* Content Details */}
                          <div className="space-y-2.5 text-left">
                            <h3 className="font-display text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                              {project.title}
                            </h3>
                            <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
                              {formatHighlights(project.description, true)}
                            </p>
                          </div>

                          {/* Key deliverables checklist mini */}
                          <div className="grid grid-cols-2 gap-2 text-left pt-1 border-t border-slate-100">
                            {project.scope.slice(0, 2).map((s, i) => (
                              <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-500 font-sans">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600/30" />
                                {s}
                              </div>
                            ))}
                            {project.scope.slice(2, 4).map((s, i) => (
                              <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-500 font-sans">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600/30" />
                                {s}
                              </div>
                            ))}
                          </div>

                        </div>

                        {/* Card Bottom Tech Tag & Button Row */}
                        <div className="border-t border-slate-150/60 pt-5 mt-6 flex items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-1">
                            {project.techStack.slice(0, 3).map(tech => (
                              <span 
                                key={tech}
                                className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200/50 text-[9px] font-mono font-medium text-slate-600"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 3 && (
                              <span className="px-2 py-0.5 rounded bg-slate-50 border border-slate-150 text-[9px] font-mono text-slate-400 font-bold">
                                +{project.techStack.length - 3} more
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            {project.liveLink && (
                              <a 
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 select-none transition-colors border border-blue-200 hover:bg-blue-50 px-2.5 py-1.5 rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                              >
                                Live Site
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                            <button
                              onClick={() => setActiveCaseStudyId(project.id)}
                              className="text-xs font-bold text-slate-700 hover:text-blue-600 flex items-center gap-1 cursor-pointer select-none shrink-0 transition-colors"
                            >
                              Read Case Study
                              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                            </button>
                          </div>
                        </div>
                      </CardSpotlight>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}

        </div>
      </section>

      {/* Dynamic System Telemetry Banner (LIGHT MODE matching selected projects section) */}
      <section className="py-20 md:py-24 border-t border-slate-100 bg-white text-slate-800 relative overflow-hidden" id="portfolio-telemetry">
        {/* Subtle grid pattern background matching light theme */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1.2px,transparent_1.2px),linear-gradient(to_bottom,#f1f5f9_1.2px,transparent_1.2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_75%,transparent_100%)] opacity-85" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
          {/* Heading at the top, not on the left */}
          {/* Heading at the top, not on the left */}
          <div className="text-center flex flex-col items-center space-y-3 max-w-3xl mx-auto" id="telemetry-header">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/80 text-xs font-semibold text-indigo-700 tracking-wider uppercase font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
              Optimization Performance
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0e1629] tracking-tight leading-tight">
              Active <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Telemetry</span>
            </h3>
            <p className="font-sans text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
              Real-time Google Lighthouse audit scores illustrating industry-leading optimization, performance, and accessibility metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" id="telemetry-grid">
            {[
              { 
                label: 'SEO', 
                value: '100', 
                sub: 'Search Engine Optimization', 
                color: 'text-emerald-500',
                imageUrl: '/assets/images/seo.webp'
              },
              { 
                label: 'Best Practices', 
                value: '100', 
                sub: 'Modern Web Standards', 
                color: 'text-emerald-500',
                imageUrl: '/assets/images/best-practices.webp'
              },
              { 
                label: 'Performance', 
                value: '96', 
                sub: 'Fast Loading & Interactivity', 
                color: 'text-emerald-500',
                imageUrl: '/assets/images/performance.webp'
              },
              { 
                label: 'Accessibility', 
                value: '100', 
                sub: 'Inclusive & Compliant Design', 
                color: 'text-emerald-500',
                imageUrl: '/assets/images/accessibility.webp'
              }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-slate-50/50 border border-slate-200/60 flex flex-col items-center justify-center p-6 text-center relative group hover:bg-white hover:shadow-xl transition-all duration-300 min-h-[220px]"
                id={`telemetry-card-${idx}`}
              >
                <div className="w-24 h-24 mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src={stat.imageUrl} 
                    alt={stat.label} 
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="space-y-1">
                  <div className="font-display text-lg font-bold text-slate-800">
                    {stat.label}
                  </div>
                  <div className="font-sans text-xs text-slate-500 leading-normal">
                    {stat.sub}
                  </div>
                  <div className={`font-mono text-xl font-black ${stat.color}`}>
                    <AnimatedCounter value={stat.value} />%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio CTA Block */}
      <section className="relative py-24 bg-[#020205] text-white text-center overflow-hidden border-t border-indigo-950/20" id="portfolio-cta">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-electric/5 blur-[130px] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-6 space-y-8">
          <h3 className="font-display text-4xl sm:text-5xl font-black leading-tight tracking-tight text-white max-w-3xl mx-auto" id="portfolio-page-cta-heading">
            Need an Elite Digital <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Platform Built?</span>
          </h3>
          <p className="font-sans text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From initial wireframe ideation layouts to live high-performance custom databases and integrations, we co-create premium solutions engineered to scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2">
            <button
              onClick={() => {
                setView('home');
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) {
                    if ((window as any).lenis) {
                      (window as any).lenis.scrollTo(el);
                    } else {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }, 100);
              }}
              className="flex items-center justify-center px-8 py-4.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-sans text-base font-semibold tracking-wide hover:brightness-110 hover:shadow-[0_0_25px_rgba(0,190,250,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer w-full sm:w-auto"
              id="portfolio-cta-btn"
            >
              <ArrowUpRight className="w-5 h-5 mr-2.5 stroke-[2.5]" />
              Start a Scoping Call
            </button>
            <button
              onClick={() => {
                setView('home');
                window.scrollTo({ top: 0, behavior: 'instant' });
                if ((window as any).lenis) {
                  (window as any).lenis.scrollTo(0);
                }
              }}
              className="flex items-center justify-center px-8 py-4.5 rounded-2xl bg-[#080815]/60 border border-indigo-500/35 text-white font-sans text-base font-semibold tracking-wide hover:border-brand-electric hover:bg-brand-electric/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer w-full sm:w-auto"
              id="portfolio-cta-back-home"
            >
              <ArrowLeft className="w-5 h-5 mr-2.5 text-brand-electric stroke-[2]" />
              Back to Home
            </button>
          </div>
        </div>
      </section>

      {/* Case Study Fullscreen Modal Dialog */}
      <AnimatePresence>
        {activeCaseStudyId && activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 text-left overflow-y-auto"
            id="case-study-modal-backdrop"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="bg-[#04040a] border border-indigo-500/15 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative scrollbar-none"
              id="case-study-modal-card"
            >
              
              {/* Modal Top Header Bar with Close Control */}
              <div className="sticky top-0 right-0 p-5 flex items-center justify-between border-b border-indigo-950/50 bg-[#04040a]/90 backdrop-blur-md z-20">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-brand-electric uppercase tracking-widest">Case Study Portfolio</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-xs text-slate-400 font-semibold">{activeProject.client}</span>
                </div>
                <button
                  onClick={() => setActiveCaseStudyId(null)}
                  className="p-1.5 rounded-lg bg-indigo-950/40 border border-indigo-950/40 text-slate-400 hover:text-white hover:border-indigo-500/20 transition-all cursor-pointer focus:outline-none"
                  id="close-case-study-btn"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Core Layout Content */}
              <div className="p-6 sm:p-10 space-y-10">
                
                {/* Hero section inside modal */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Visual Mockup Container (5 columns) */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="w-full aspect-video sm:aspect-[16/10] rounded-2xl overflow-hidden border border-indigo-950/40 shadow-inner flex items-center justify-center relative">
                      {activeProject.imageUrl.endsWith('.mp4') ? (
                        <LazyVideo
                          src={activeProject.imageUrl}
                          className="w-full h-full object-cover"
                          onMouseEnter={(e) => { e.currentTarget.muted = false; }}
                          onMouseLeave={(e) => { e.currentTarget.muted = true; }}
                        />
                      ) : (
                        <img
                          src={activeProject.imageUrl}
                          alt={activeProject.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                    </div>
                    
                    {/* Tech tag highlights */}
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {activeProject.techStack.map(tech => (
                        <span 
                          key={tech}
                          className="px-3 py-1 rounded bg-indigo-950/40 border border-indigo-950/30 text-[10px] font-mono font-bold text-indigo-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Key details (7 columns) */}
                  <div className="lg:col-span-7 space-y-5 text-left">
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                      <span className="font-mono text-[9px] font-bold text-indigo-400 tracking-wider uppercase">Project Launch</span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight">
                      {activeProject.title}
                    </h2>

                    <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                      {formatHighlights(activeProject.fullDescription, false)}
                    </p>

                    {/* Scope details list */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Nexora Project Scope</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.scope.map((item, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full bg-slate-950 border border-indigo-950/50 text-[11px] text-slate-400 font-sans">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Metrics highlights blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-indigo-950/50 py-8 text-center sm:text-left">
                  {activeProject.metrics.map((metric, idx) => {
                    const MetricIcon = metric.icon;
                    return (
                      <div key={idx} className="bg-slate-950/50 border border-indigo-950/30 p-5 rounded-xl flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-brand-electric/10 border border-brand-electric/25 flex items-center justify-center shrink-0 text-brand-electric">
                          <MetricIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-display text-2xl font-black text-white"><AnimatedCounter value={metric.value} /></div>
                          <div className="font-sans text-xs text-slate-500 leading-none mt-1">{metric.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Core Challenge vs Solution Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  
                  {/* Challenge */}
                  <div className="space-y-3.5 bg-red-500/5 border border-red-500/10 p-6 rounded-2xl">
                    <div className="flex items-center gap-2 text-red-400 font-display text-sm font-bold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      The Operational Challenge
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {formatHighlights(activeProject.challenge, false)}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-3.5 bg-emerald-500/5 border border-emerald-500/10 p-6 rounded-2xl">
                    <div className="flex items-center gap-2 text-emerald-400 font-display text-sm font-bold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      The Nexora Solution
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {formatHighlights(activeProject.solution, false)}
                    </p>
                  </div>

                </div>

                {/* Key Engineered Features */}
                <div className="space-y-4 text-left">
                  <h4 className="font-display text-xs font-black tracking-widest text-slate-200 uppercase">
                    Integrated System Features & Architectures
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {activeProject.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 bg-slate-950/40 border border-indigo-950/20 p-4 rounded-xl text-xs sm:text-sm text-slate-300 font-sans leading-normal">
                        <span className="p-0.5 rounded bg-brand-electric/15 border border-brand-electric/30 text-brand-electric mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="border-t border-indigo-950/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
                  <div>
                    <h5 className="font-display text-base font-bold text-white">Inspired by this case study?</h5>
                    <p className="font-sans text-xs text-slate-500">
                      We can customize, scale, and integrate a similar digital solution for your company.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveCaseStudyId(null);
                      setView('home');
                      setTimeout(() => {
                        const el = document.getElementById('contact');
                        if (el) {
                          if ((window as any).lenis) {
                            (window as any).lenis.scrollTo(el);
                          } else {
                            el.scrollIntoView({ behavior: 'smooth' });
                          }
                          
                          // Pre-fill form
                          const textarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
                          if (textarea) {
                            textarea.value = `Hello Nexora team, I would like to request a formal scoping call regarding a platform similar to your "${activeProject.title}" case study (${activeProject.client}). Let's discuss timelines and database options!`;
                            textarea.dispatchEvent(new Event('input', { bubbles: true }));
                          }
                        }
                      }, 120);
                    }}
                    className="flex items-center justify-center px-6 py-3.5 bg-brand-electric text-slate-950 font-sans text-xs sm:text-sm font-bold tracking-wide rounded-xl hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,190,250,0.3)] transition-all cursor-pointer select-none w-full sm:w-auto"
                  >
                    Request Similar Build Proposal
                    <ArrowUpRight className="w-4 h-4 ml-1.5 stroke-[2.5]" />
                  </button>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
