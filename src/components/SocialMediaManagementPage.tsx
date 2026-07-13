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
  Share2,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Sparkles,
  Users,
  Target,
  BarChart3,
  Check,
  Star,
  MessageSquare,
  ChevronRight,
  Tv,
  Smartphone,
  Megaphone,
  Briefcase,
  Clock,
  TrendingUp,
  MessageCircle,
  HelpCircle,
  Search,
  Compass,
  LifeBuoy,
  Film,
  Rocket,
  Headphones,
  ShieldCheck
} from 'lucide-react';

interface SocialMediaManagementPageProps {
  setView: (view: 'home' | 'about-us' | 'portfolio' | 'pricing' | 'academy' | 'training-internship' | 'contact' | 'web-dev' | 'mobile-dev' | 'branding-design' | 'seo-growth' | 'ai-video' | 'social-media-management') => void;
}

export const SocialMediaManagementPage: React.FC<SocialMediaManagementPageProps> = ({ setView }) => {
  const [currency, setCurrency] = useState<'XAF' | 'USD'>('XAF');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const socialServices: { id: string; number: string; title: string; description: React.ReactNode; icon: any; glowColor: string; borderColor: string; iconColorClass: string }[] = [
    {
      id: 'social-service-card-01',
      number: '01',
      title: 'Strategy & Brand Positioning',
      description: <span>We research your target audience, identify the best channels, and define a <span className="font-semibold text-slate-800">consistent voice, tone, and visual style</span> for your brand.</span>,
      icon: Target,
      glowColor: 'rgba(0, 190, 250, 0.05)',
      borderColor: 'rgba(0, 190, 250, 0.1)',
      iconColorClass: 'text-brand-electric bg-brand-electric/10',
    },
    {
      id: 'social-service-card-02',
      number: '02',
      title: 'High-Converting Content Creation',
      description: <span>Stunning graphics, <span className="font-semibold text-slate-800">engaging reels/videos, and professional copywriting</span> optimized to capture attention and stop scrolling.</span>,
      icon: Sparkles,
      glowColor: 'rgba(168, 85, 247, 0.05)',
      borderColor: 'rgba(168, 85, 247, 0.1)',
      iconColorClass: 'text-purple-500 bg-purple-500/10',
    },
    {
      id: 'social-service-card-03',
      number: '03',
      title: 'Community & Engagement Management',
      description: <span>Building strong relationships with your audience by responding to comments, answers to queries, and nurturing <span className="font-semibold text-slate-800">active DMs 24/7</span>.</span>,
      icon: Users,
      glowColor: 'rgba(59, 130, 246, 0.05)',
      borderColor: 'rgba(59, 130, 246, 0.1)',
      iconColorClass: 'text-blue-500 bg-blue-500/10',
    },
    {
      id: 'social-service-card-04',
      number: '04',
      title: 'Social Media Advertising (Paid Ads)',
      description: <span>Targeted ad campaigns on Facebook, Instagram, LinkedIn, and TikTok designed to <span className="font-semibold text-slate-800">scale your reach and generate verified leads</span>.</span>,
      icon: Megaphone,
      glowColor: 'rgba(236, 72, 153, 0.05)',
      borderColor: 'rgba(236, 72, 153, 0.1)',
      iconColorClass: 'text-pink-500 bg-pink-500/10',
    },
    {
      id: 'social-service-card-05',
      number: '05',
      title: 'Hashtag & Trend Optimization',
      description: <span>Keeping your brand relevant by leveraging <span className="font-semibold text-slate-800">viral trends, optimized keywords</span>, and highly strategic tag configurations.</span>,
      icon: TrendingUp,
      glowColor: 'rgba(245, 158, 11, 0.05)',
      borderColor: 'rgba(245, 158, 11, 0.1)',
      iconColorClass: 'text-amber-500 bg-amber-500/10',
    },
    {
      id: 'social-service-card-06',
      number: '06',
      title: 'Detailed Analytics & Insights',
      description: <span>In-depth monthly reports highlighting <span className="font-semibold text-slate-800">audience growth, engagement rates, click-through actions</span>, and conversion values.</span>,
      icon: BarChart3,
      glowColor: 'rgba(16, 185, 129, 0.05)',
      borderColor: 'rgba(16, 185, 129, 0.1)',
      iconColorClass: 'text-emerald-500 bg-emerald-500/10',
    }
  ];

  const socialProcessSteps: ProcessStep[] = [
    {
      id: 'social-audit',
      stepNumber: '01',
      title: 'Audit & Competitive Discovery',
      description: 'We perform deep social profile auditing, target demographic discovery, and creative competitive analyses to map content pillars.',
      icon: Search,
      imageUrl: 'Discovery_Strategy.jpeg',
      bullets: ['Full Account Audits', 'Audience Demographics Scoping', 'Competitor Pillar Mapping'],
      gradient: 'from-blue-950/40',
      accentColor: 'text-blue-400',
      bulletColor: 'bg-blue-500',
      iconBgActive: 'bg-blue-500',
      numHoverColor: 'text-blue-500/20',
    },
    {
      id: 'social-calendar',
      stepNumber: '02',
      title: 'Content Curation & Calendar',
      description: 'Our team establishes custom monthly calendars featuring high-fidelity mockups, copywriting options, and exact scheduling times.',
      icon: Compass,
      imageUrl: '/assets/images/Prototyping.jpeg',
      bullets: ['Creative Visual Mockups', 'Direct Copywriting Options', 'Peak-Hour Scheduling Blueprints'],
      gradient: 'from-purple-950/40',
      accentColor: 'text-purple-400',
      bulletColor: 'bg-purple-500',
      iconBgActive: 'bg-purple-500',
      numHoverColor: 'text-purple-500/20',
    },
    {
      id: 'social-production',
      stepNumber: '03',
      title: 'Asset Creation & Production',
      description: 'We design stunning branded graphics and write compelling captions, optimizing every asset to maximize native reach.',
      icon: Sparkles,
      imageUrl: '/assets/images/web-development.jpeg',
      bullets: ['Branded Graphic Designs', 'High-Converting Copy Drafts', 'Short-Form Video Post-production'],
      gradient: 'from-emerald-950/40',
      accentColor: 'text-emerald-400',
      bulletColor: 'bg-emerald-500',
      iconBgActive: 'bg-emerald-500',
      numHoverColor: 'text-emerald-500/20',
    },
    {
      id: 'social-engagement',
      stepNumber: '04',
      title: 'Active Community Engagement',
      description: 'We queue posts for peak times, monitor all accounts closely, and interactively engage with comments and direct messages.',
      icon: MessageCircle,
      imageUrl: '/assets/images/webdev-launch.jpeg',
      bullets: ['Peak-Time Content Queues', 'Inbound Comment Interactions', 'DM Lead Nurturing Protocols'],
      gradient: 'from-orange-950/40',
      accentColor: 'text-orange-400',
      bulletColor: 'bg-orange-500',
      iconBgActive: 'bg-orange-500',
      numHoverColor: 'text-orange-500/20',
    },
    {
      id: 'social-reporting',
      stepNumber: '05',
      title: 'Reporting & Strategy Scaling',
      description: 'We compile monthly analytical reports tracking engagement, reach, and follower conversion rates to scale future campaign success.',
      icon: LifeBuoy,
      imageUrl: '/assets/images/nexora-empire-tech-team-collaboration.png',
      bullets: ['Detailed Analytical Auditing', 'Viewer Retention Optimization', 'Conversion Framework Updates'],
      gradient: 'from-cyan-950/40',
      accentColor: 'text-cyan-400',
      bulletColor: 'bg-cyan-500',
      iconBgActive: 'bg-cyan-500',
      numHoverColor: 'text-cyan-500/20',
    },
  ];

  const faqs = [
    {
      q: 'Which social media platforms do you manage?',
      a: 'We manage all major platforms, including Instagram, Facebook, TikTok, LinkedIn, YouTube, and X (Twitter). Our strategy is tailored to the channels where your audience is most active.'
    },
    {
      q: 'Do I need to provide images and videos?',
      a: 'While any original media you have is highly valuable, we offer end-to-end content creation. We can draft high-quality graphics, write copywriting, and produce professional Reels/videos for your brand from scratch.'
    },
    {
      q: 'How often do you post?',
      a: 'Posting frequency is aligned with your selected plan. It ranges from 10 high-value posts per month on our Starter plan to daily, highly optimized stories and posts on our Elite plan.'
    },
    {
      q: 'Is ad budget included in the monthly pricing?',
      a: 'No. The monthly packages cover our management, design, and optimization services. Any ad spend on platforms (Meta, TikTok, Google) is paid directly to the platforms based on your approved budget.'
    },
    {
      q: 'How do we communicate and approve content?',
      a: 'We set up an organized, easy-to-use content approval portal. You can review all graphics, captions, and videos ahead of time, leave feedback, and approve them before they go live.'
    },
    {
      q: 'Can I cancel or change plans anytime?',
      a: 'Yes, our recurring contracts are month-to-month. You can scale your package up or down, or cancel with a simple 15-day notice before your next billing cycle.'
    }
  ];

  const handleStartProject = () => {
    window.open('https://wa.me/237677079559?text=Hello%20Nexora%20Empire!%20I%20would%20like%20to%20start%20a%20project%20with%20you.%20I%20am%20interested%20in%20your%20digital%20solutions.', '_blank');
  };

  const handleConsultation = () => {
    const text = `Hi Nexora Empire, I'm interested in your Social Media Management services! I'd like to discuss scaling our social media presence and engagement.`;
    window.open(`https://wa.me/237677079559?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="relative w-full bg-[#020205] text-slate-100 overflow-hidden font-sans" id="smm-page-root">
      
      {/* Background radial accent glows */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-indigo-950/20 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-brand-electric/10 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-brand-violet/10 rounded-full filter blur-[130px] pointer-events-none" />
      
      {/* Dynamic Starfield Overlay */}
      <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* 1. HERO SECTION (Immersive Dark Theme matching the core Hero) */}
      <section className="relative min-h-[85vh] w-full flex items-center justify-center pt-32 pb-20 px-6 md:px-12 border-b border-indigo-950/30">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Headline */}
          <div className="lg:col-span-7 space-y-8 text-left">
            


            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-electric/10 border border-brand-electric/25 text-xs font-bold text-brand-electric tracking-widest uppercase font-mono">
                <Share2 className="w-3.5 h-3.5 text-brand-electric animate-pulse" />
                Social Media Marketing
              </span>
              
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
                Dominate Your <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">
                  Social Presence
                </span>
              </h1>
            </div>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Stop letting your social channels collect dust. We create breathtaking, high-converting social media content and target optimized ad campaigns to establish trust, capture leads, and scale your brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleStartProject}
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-brand-violet text-white font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_30px_rgba(99,102,241,0.45)] cursor-pointer text-center"
              >
                Start Your Campaign
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1 ml-1.5">
                  →
                </span>
              </button>
              <button
                onClick={handleConsultation}
                className="px-8 py-4 rounded-xl bg-slate-950 border border-indigo-950/60 hover:border-brand-electric/40 text-slate-300 hover:text-white font-semibold transition-all duration-300 cursor-pointer text-center"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-electric/10 to-brand-violet/10 rounded-full blur-3xl" />
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl bg-indigo-950/20 border border-indigo-900/30 p-8 flex flex-col justify-between shadow-2xl overflow-hidden backdrop-blur-md">
              <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="flex justify-between items-center relative z-10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">AUDIENCE ENGAGEMENT</div>
              </div>

              {/* Central Floating Graphic */}
              <div className="my-auto space-y-6 relative z-10 text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-electric/20 to-brand-violet/20 border border-indigo-500/35 flex items-center justify-center shadow-lg animate-pulse">
                  <Share2 className="w-10 h-10 text-brand-electric" />
                </div>
                <div className="space-y-1">
                  <div className="font-display font-black text-white text-3xl tracking-tight"><AnimatedCounter value="+387%" /></div>
                  <div className="font-sans font-medium text-[11px] text-emerald-400 tracking-wider uppercase">Organic Reach Growth</div>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="flex justify-around items-center pt-4 border-t border-indigo-950/60 relative z-10">
                <Instagram className="w-5 h-5 text-pink-400 opacity-70 hover:opacity-100 transition-opacity" />
                <Facebook className="w-5 h-5 text-blue-400 opacity-70 hover:opacity-100 transition-opacity" />
                <Twitter className="w-5 h-5 text-sky-400 opacity-70 hover:opacity-100 transition-opacity" />
                <Linkedin className="w-5 h-5 text-indigo-400 opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SERVICES SECTION in Light Mode */}
      <section className="relative py-24 sm:py-32 px-6 md:px-12 bg-[#fafbfc] border-t border-b border-slate-200/50 overflow-hidden" id="smm-services">
        {/* Light Mode optimized background gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-blue-50/40 to-indigo-50/40 rounded-full blur-[140px] pointer-events-none opacity-80" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          
          <div className="w-full mb-20 flex flex-col items-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F5BFF]/5 border border-[#2F5BFF]/15 text-[10px] tracking-[0.2em] font-extrabold text-[#2F5BFF] uppercase font-mono mb-4 shadow-[0_2px_8px_rgba(47,91,255,0.03)]">
              CAPABILITIES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-4">
              Social Media Solutions <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">That Convert</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base md:text-lg font-sans max-w-2xl leading-relaxed font-medium">
              We do not just create posts; we engineer full-funnel digital experiences to connect with users and spark action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialServices.map((service, index) => {
              const Icon = service.icon;
              
              // Light mode optimized color schemes for each service icon box
              let lightIconClass = 'text-slate-600 bg-slate-50 border border-slate-100';
              if (service.id === 'social-service-card-01') lightIconClass = 'text-blue-600 bg-blue-50 border border-blue-100/50';
              if (service.id === 'social-service-card-02') lightIconClass = 'text-purple-600 bg-purple-50 border border-purple-100/50';
              if (service.id === 'social-service-card-03') lightIconClass = 'text-indigo-600 bg-indigo-50 border border-indigo-100/50';
              if (service.id === 'social-service-card-04') lightIconClass = 'text-pink-600 bg-pink-50 border border-pink-100/50';
              if (service.id === 'social-service-card-05') lightIconClass = 'text-amber-600 bg-amber-50 border border-amber-100/50';
              if (service.id === 'social-service-card-06') lightIconClass = 'text-emerald-600 bg-emerald-50 border border-emerald-100/50';

              return (
                <CardSpotlight
                  key={service.id}
                  glowColor="rgba(99, 102, 241, 0.04)"
                  borderColor="rgba(99, 102, 241, 0.08)"
                  className="bg-white rounded-[24px] border border-slate-100 p-8 flex flex-col h-full justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_24px_50px_rgba(99,102,241,0.06)] hover:border-indigo-200 group cursor-pointer text-left"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${lightIconClass}`}>
                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <span className="font-mono text-xs font-black text-slate-300 tracking-wider">
                        {service.number}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-display text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm font-sans leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardSpotlight>
              );
            })}
          </div>

        </div>
      </section>

      {/* Our Proven Process Section */}
      <OurProvenProcess 
        idPrefix="social-process"
        badgeText="METHODOLOGY"
        titleText="Our Social Media Framework"
        steps={socialProcessSteps}
      />

      {/* 4. PRICING PACKAGES (Light Mode - styled exactly like the homepage) */}
      <section className="relative w-full py-24 sm:py-32 px-6 md:px-12 bg-white overflow-hidden border-t border-b border-slate-200/50" id="smm-pricing">
        {/* Light elegant blueprint grid design background overlay matching homepage */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1.2px,transparent_1.2px),linear-gradient(to_bottom,#f1f5f9_1.2px,transparent_1.2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,#000_70%,transparent_100%)] opacity-85 z-0" />
          
          {/* Ambient light glow */}
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-indigo-100/30 to-blue-50/20 blur-[130px] rounded-full z-0 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          
          <div className="w-full mb-16 flex flex-col items-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-[#2F5BFF]/5 border border-[#2F5BFF]/15 mb-6 select-none shadow-[0_2px_8px_rgba(47,91,255,0.03)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1f39c4]" />
              <span className="font-mono text-xs tracking-[0.18em] font-extrabold text-[#1f39c4] uppercase">
                SOCIAL PRICING
              </span>
            </span>
            
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-6">
              Simple, <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Transparent Pricing</span>
            </h2>
            
            <p className="text-slate-500 font-sans text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
              Select the optimal plan to scale your digital presence, grow your customer base, and maximize reach.
            </p>

            {/* Currency Toggle in Light Mode */}
            <div className="relative p-1 bg-slate-50 rounded-full border border-slate-200/60 flex gap-1 z-10">
              <button
                onClick={() => setCurrency('XAF')}
                className={`px-6 py-2 rounded-full text-xs font-sans font-bold tracking-wider uppercase transition-all duration-300 relative cursor-pointer ${
                  currency === 'XAF' 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-[#8b1dca] shadow-[0_4px_15px_rgba(99,102,241,0.25)]' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                XAF (FCFA)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-6 py-2 rounded-full text-xs font-sans font-bold tracking-wider uppercase transition-all duration-300 relative cursor-pointer ${
                  currency === 'USD' 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-[#8b1dca] shadow-[0_4px_15px_rgba(99,102,241,0.25)]' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>

          {/* Pricing Grid styled exactly like the homepage */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
            
            {/* Package 1: Starter Package */}
            <div className="bg-white border border-slate-200/60 shadow-[0_15px_35px_rgba(0,0,0,0.02)] hover:border-indigo-100 hover:shadow-[0_20px_45px_rgba(99,102,241,0.06)] rounded-3xl p-8 transition-all duration-500 relative flex flex-col h-full justify-between select-none text-left">
              <div>
                {/* Icon container */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 mb-6 bg-slate-100 border border-slate-200 text-[#1f39c4]">
                  <Rocket className="w-6 h-6" />
                </div>
                
                <h3 className="font-display text-[22px] sm:text-[24px] font-extrabold tracking-tight leading-snug mb-2 text-slate-900">
                  Starter Plan
                </h3>
                <p className="font-sans text-sm mb-6 leading-relaxed text-slate-400">
                  Perfect for small businesses getting started on social media.
                </p>

                <div className="h-px bg-slate-200/60 w-full mb-6" />

                <div className="mb-6">
                  <span className="font-display text-3xl sm:text-4xl font-black tracking-tight leading-none text-[#1f39c4]">
                    {currency === 'XAF' ? '30,000 XAF' : '$95'}
                  </span>
                  <span className="block text-xs font-sans mt-2.5 font-medium text-slate-400">
                    Per month
                  </span>
                </div>

                <ul className="space-y-3.5 mb-8 flex-1">
                  {[
                    '1 Platform',
                    '10 Posts',
                    'Basic Graphics',
                    'Content Calendar',
                    'Community Management',
                    'Monthly Report'
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-sans text-xs sm:text-[13px] text-slate-600 leading-tight">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={handleStartProject}
                className="group relative w-full py-3.5 rounded-2xl font-sans text-sm font-bold tracking-wide transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 border border-blue-600 text-blue-600 bg-white hover:bg-blue-50/50 cursor-pointer text-center"
              >
                Order Starter Now
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </button>
            </div>

            {/* Package 2: Growth Package (Popular / High Contrast Gradient) */}
            <div className="bg-gradient-to-br from-[#1f39c4] to-[#8b1dca] text-white shadow-[0_20px_50px_rgba(31,57,196,0.25)] rounded-3xl p-8 transition-all duration-500 relative flex flex-col h-full justify-between select-none text-left lg:scale-105 z-10">
              <div className="absolute top-6 right-6 bg-white text-[#1f39c4] text-xs font-sans font-bold py-1.5 px-3.5 rounded-full flex items-center gap-1 shadow-sm z-10">
                <Star className="w-3.5 h-3.5 fill-current text-[#1f39c4]" />
                <span>Most Popular</span>
              </div>

              <div>
                {/* Icon container */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 mb-6 bg-white/10 text-white">
                  <Sparkles className="w-6 h-6" />
                </div>
                
                <h3 className="font-display text-[22px] sm:text-[24px] font-extrabold tracking-tight leading-snug mb-2 text-white">
                  Growth Plan
                </h3>
                <p className="font-sans text-sm mb-6 leading-relaxed text-indigo-100/90">
                  Everything in Starter
                </p>

                <div className="h-px bg-white/15 w-full mb-6" />

                <div className="mb-6">
                  <span className="font-display text-3xl sm:text-4xl font-black tracking-tight leading-none text-white">
                    {currency === 'XAF' ? '50,000 XAF' : '$160'}
                  </span>
                  <span className="block text-xs font-sans mt-2.5 font-medium text-indigo-100/70">
                    Per month
                  </span>
                </div>

                <ul className="space-y-3.5 mb-8 flex-1">
                  {[
                    '2 Platforms',
                    '20 Posts',
                    'Premium Graphics',
                    'Short-form Videos',
                    'Hashtag Strategy',
                    'Analytics Dashboard'
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white text-[#1f39c4] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-sans text-xs sm:text-[13px] text-indigo-100/90 leading-tight">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={handleStartProject}
                className="group relative w-full py-3.5 rounded-2xl font-sans text-sm font-bold tracking-wide transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-slate-50 shadow-md cursor-pointer text-center"
              >
                Order Growth Now
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </button>
            </div>

            {/* Package 3: Enterprise Package */}
            <div className="bg-white border border-slate-200/60 shadow-[0_15px_35px_rgba(0,0,0,0.02)] hover:border-indigo-100 hover:shadow-[0_20px_45px_rgba(99,102,241,0.06)] rounded-3xl p-8 transition-all duration-500 relative flex flex-col h-full justify-between select-none text-left">
              <div>
                {/* Icon container */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 mb-6 bg-slate-100 border border-slate-200 text-[#1f39c4]">
                  <Star className="w-6 h-6" />
                </div>
                
                <h3 className="font-display text-[22px] sm:text-[24px] font-extrabold tracking-tight leading-snug mb-2 text-slate-900">
                  Enterprise Plan
                </h3>
                <p className="font-sans text-sm mb-6 leading-relaxed text-slate-400">
                  Everything in Growth.
                </p>

                <div className="h-px bg-slate-200/60 w-full mb-6" />

                <div className="mb-6">
                  <span className="font-display text-3xl sm:text-4xl font-black tracking-tight leading-none text-[#1f39c4]">
                    Custom Pricing
                  </span>
                  <span className="block text-xs font-sans mt-2.5 font-medium text-slate-400">
                    Includes:
                  </span>
                </div>

                <ul className="space-y-3.5 mb-8 flex-1">
                  {[
                    'Multi-platform Management',
                    'Daily Posting',
                    'Paid Ads Management',
                    'Dedicated Account Manager',
                    'Monthly Strategy Meeting'
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#1f39c4] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-sans text-xs sm:text-[13px] text-slate-600 leading-tight">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={handleStartProject}
                className="group relative w-full py-3.5 rounded-2xl font-sans text-sm font-bold tracking-wide transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 border border-blue-600 text-blue-600 bg-white hover:bg-blue-50/50 cursor-pointer text-center"
              >
                Order Enterprise Now
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </button>
            </div>

          </div>

          {/* BOTTOM ACTION CTA BANNER */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16 px-4"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50 border border-slate-100/80 px-8 py-5 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.01)] w-full">
              {/* Left Portion with Icon and Text */}
              <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <ShieldCheck className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="text-left font-sans text-xs sm:text-sm">
                  <span className="text-slate-500 font-medium mr-2">
                    Note: Custom social media packages can be curated based on your exact campaign objectives.
                  </span>
                  <span className="text-[#1f39c4] font-bold">
                    Let's craft a custom strategy for your business.
                  </span>
                </div>
              </div>

              {/* Right Portion with Contact Us CTA Link */}
              <button
                onClick={handleStartProject}
                className="group shrink-0 font-sans text-xs sm:text-sm font-bold text-[#1f39c4] hover:text-[#11248a] flex items-center gap-1.5 transition-all duration-300 cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section 
        id="smm-faq"
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
                Social Media <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">FAQ</span>
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
                  const msg = encodeURIComponent("Hi, I have some questions about your Social Media Management services.");
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

      {/* 6. FINAL CALL TO ACTION (Dark Mode) */}
      <section className="relative py-28 px-6 md:px-12 bg-[#03030c] border-t border-indigo-950/40 overflow-hidden" id="smm-cta">
        {/* Dark Mode optimized background gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-950/30 to-purple-950/20 rounded-full blur-[140px] pointer-events-none opacity-70" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4">
            <span className="inline-flex items-center px-6 py-2 rounded-full bg-indigo-950/40 border border-indigo-900/40 text-[10px] font-mono tracking-[0.25em] font-bold text-indigo-400 uppercase">
              Schedule Your Campaign
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-brand-violet rounded-full" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Ready to Dominate Your <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">
              Social Spaces?
            </span>
          </h2>

          <p className="font-sans text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Partner with Nexora Empire. We will handle the strategy, visual creation, daily community interaction, and optimization so you can focus entirely on running your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={handleStartProject}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-brand-violet text-white rounded-xl font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_25px_rgba(99,102,241,0.25)] hover:scale-[1.02] cursor-pointer text-center"
            >
              Start a Project Now
            </button>
            <button
              onClick={handleConsultation}
              className="w-full sm:w-auto px-8 py-4 bg-slate-950 border border-indigo-950 hover:border-indigo-900 text-slate-300 hover:text-white rounded-xl font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer text-center"
            >
              Consult on WhatsApp
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
