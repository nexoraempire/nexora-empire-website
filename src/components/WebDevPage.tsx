import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';
import { CardSpotlight } from './CardSpotlight.tsx';
import { OurProvenProcess, ProcessStep } from './OurProvenProcess.tsx';
import { PricingCards } from './PricingCards.tsx';
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Globe,
  ShoppingCart,
  Layers,
  Target,
  User,
  Code2,
  ChevronRight,
  Box,
  Zap,
  Search,
  Users,
  Rocket,
  Briefcase,
  Building2,
  Check,
  Star,
  MessageSquare,
  Compass,
  LifeBuoy,
  Headphones
} from 'lucide-react';

interface WebDevPageProps {
  setView: (view: 'home' | 'about-us' | 'portfolio' | 'pricing' | 'academy' | 'contact' | 'web-dev' | 'mobile-dev') => void;
}

export const WebDevPage: React.FC<WebDevPageProps> = ({ setView }) => {
  const [currency, setCurrency] = useState<'XAF' | 'USD'>('XAF');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const webDevProcessSteps: ProcessStep[] = [
    {
      id: 'webdev-discovery',
      stepNumber: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business goals, target audience, and functional specifications to map out the perfect custom web architecture.',
      icon: Search,
      imageUrl: '/assets/images/Discovery_Strategy.jpeg',
      bullets: ['Requirements Scoping', 'Tech Stack Selection', 'Visual & Feature Mapping'],
      gradient: 'from-blue-950/40',
      accentColor: 'text-blue-400',
      bulletColor: 'bg-blue-500',
      iconBgActive: 'bg-blue-500',
      numHoverColor: 'text-blue-500/20',
    },
    {
      id: 'webdev-design',
      stepNumber: '02',
      title: 'UI/UX Prototyping',
      description: 'Our designers architect a responsive user experience with custom wireframes and interactive mockups before writing a single line of code.',
      icon: Compass,
      imageUrl: '/assets/images/Prototyping.jpeg',
      bullets: ['High-Fidelity UI Design', 'Responsive Layout Prototypes', 'Interactive User Flows'],
      gradient: 'from-purple-950/40',
      accentColor: 'text-purple-400',
      bulletColor: 'bg-purple-500',
      iconBgActive: 'bg-purple-500',
      numHoverColor: 'text-purple-500/20',
    },
    {
      id: 'webdev-development',
      stepNumber: '03',
      title: 'High-Performance Engineering',
      description: 'We engineer fast, secure, and custom full-stack solutions with clean code optimized for instant loading and scalability.',
      icon: Code2,
      imageUrl: '/assets/images/web-development.jpeg',
      bullets: ['Bespoke Frontend & Backend', 'API & Third-Party Integration', 'Rigid Performance Optimization'],
      gradient: 'from-emerald-950/40',
      accentColor: 'text-emerald-400',
      bulletColor: 'bg-emerald-500',
      iconBgActive: 'bg-emerald-500',
      numHoverColor: 'text-emerald-500/20',
    },
    {
      id: 'webdev-launch',
      stepNumber: '04',
      title: 'Quality Assurance & Launch',
      description: 'Our teams execute rigorous multi-device testing, SEO optimization, and secure server deployment for a perfect, live launch.',
      icon: Rocket,
      imageUrl: '/assets/images/webdev-launch.jpeg',
      bullets: ['Cross-Device Browser Audits', 'Full Core Web Vitals Optimization', 'Secure Live Deployment'],
      gradient: 'from-orange-950/40',
      accentColor: 'text-orange-400',
      bulletColor: 'bg-orange-500',
      iconBgActive: 'bg-orange-500',
      numHoverColor: 'text-orange-500/20',
    },
    {
      id: 'webdev-support',
      stepNumber: '05',
      title: 'Post-Launch Support',
      description: 'We provide 24/7 security monitoring, routine maintenance, and ongoing optimization to ensure your digital asset scales flawlessly.',
      icon: LifeBuoy,
      imageUrl: '/assets/images/nexora-empire-tech-team-collaboration.png',
      bullets: ['24/7 Server Monitoring', 'Regular Feature Updates', 'Dedicated Support Desk'],
      gradient: 'from-cyan-950/40',
      accentColor: 'text-cyan-400',
      bulletColor: 'bg-cyan-500',
      iconBgActive: 'bg-cyan-500',
      numHoverColor: 'text-cyan-500/20',
    },
  ];

  const webServices: { id: string; number: string; title: string; description: React.ReactNode; icon: any; glowColor: string; borderColor: string; iconColorClass: string }[] = [
    {
      id: 'web-service-card-01',
      number: '01',
      title: 'Business Websites',
      description: <span>Professional websites that <span className="font-semibold text-slate-800">represent your brand</span> and <span className="font-semibold text-slate-800">attract high-value customers</span>.</span>,
      icon: Globe,
      glowColor: 'rgba(59, 130, 246, 0.05)',
      borderColor: 'rgba(59, 130, 246, 0.1)',
      iconColorClass: 'text-blue-600 bg-blue-50/70',
    },
    {
      id: 'web-service-card-02',
      number: '02',
      title: 'E-commerce Stores',
      description: <span>Powerful online stores that <span className="font-semibold text-slate-800">drive sales</span> and deliver seamless shopping experiences.</span>,
      icon: ShoppingCart,
      glowColor: 'rgba(59, 130, 246, 0.05)',
      borderColor: 'rgba(59, 130, 246, 0.1)',
      iconColorClass: 'text-blue-600 bg-blue-50/70',
    },
    {
      id: 'web-service-card-03',
      number: '03',
      title: 'SaaS Platforms',
      description: <span>Scalable SaaS solutions built to <span className="font-semibold text-slate-800">streamline operations</span> and grow with your business.</span>,
      icon: Layers,
      glowColor: 'rgba(59, 130, 246, 0.05)',
      borderColor: 'rgba(59, 130, 246, 0.1)',
      iconColorClass: 'text-blue-600 bg-blue-50/70',
    },
    {
      id: 'web-service-card-04',
      number: '04',
      title: 'Landing Pages',
      description: <span>High-converting landing pages designed to <span className="font-semibold text-slate-800">capture leads</span> and <span className="font-semibold text-slate-800">boost sales conversions</span>.</span>,
      icon: Target,
      glowColor: 'rgba(59, 130, 246, 0.05)',
      borderColor: 'rgba(59, 130, 246, 0.1)',
      iconColorClass: 'text-blue-600 bg-blue-50/70',
    },
    {
      id: 'web-service-card-05',
      number: '05',
      title: 'Portfolio Websites',
      description: <span>Stunning portfolio websites that <span className="font-semibold text-slate-800">highlight your work</span> and impress potential clients.</span>,
      icon: User,
      glowColor: 'rgba(59, 130, 246, 0.05)',
      borderColor: 'rgba(59, 130, 246, 0.1)',
      iconColorClass: 'text-blue-600 bg-blue-50/70',
    },
    {
      id: 'web-service-card-06',
      number: '06',
      title: 'Custom Web Applications',
      description: <span>Tailored web applications built to <span className="font-semibold text-slate-800">solve your unique business challenges</span>.</span>,
      icon: Code2,
      glowColor: 'rgba(59, 130, 246, 0.05)',
      borderColor: 'rgba(59, 130, 246, 0.1)',
      iconColorClass: 'text-blue-600 bg-blue-50/70',
    }
  ];

  const faqs = [
    {
      q: 'How long does it take to build a website?',
      a: 'Most projects are completed within 2–8 weeks, depending on the size, features, and complexity of your website.'
    },
    {
      q: 'Do you redesign existing websites?',
      a: 'Yes. We can redesign your current website with a modern, high-performance, and user-focused experience while preserving your brand identity.'
    },
    {
      q: 'Will my website be mobile-friendly?',
      a: 'Absolutely. Every website we build is fully responsive and optimized for desktops, tablets, and mobile devices.'
    },
    {
      q: 'Do you provide hosting and domain setup?',
      a: 'Yes. We can help you register your domain, configure hosting, deploy your website, and ensure everything runs smoothly.'
    },
    {
      q: 'Is my website optimized for search engines (SEO)?',
      a: 'Yes. Every website includes technical SEO best practices, fast loading speeds, clean code, and a solid foundation for higher search rankings.'
    },
    {
      q: 'Do you offer website maintenance after launch?',
      a: 'Yes. We provide ongoing maintenance, security updates, performance optimization, bug fixes, and technical support to keep your website running at its best.'
    }
  ];

  return (
    <div className="relative w-full bg-[#030308] text-slate-100 overflow-hidden" id="webdev-page-root">
      
      {/* Background radial accent glows */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-brand-violet/10 rounded-full filter blur-[130px] pointer-events-none" />
      
      {/* Structural grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* Left-Aligned Premium Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 border-b border-indigo-950/40 bg-[#020205]/40" id="webdev-hero">
        <div className="max-w-7xl mx-auto">
          


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side text contents */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] font-black text-brand-electric uppercase px-3 py-1.5 rounded-full bg-brand-electric/5 border border-brand-electric/15 inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-electric animate-pulse" />
                WEB DEVELOPMENT
              </span>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
                High-Performance Custom <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">
                  Web Architecture
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
                We engineer scalable custom storefronts, SaaS backends, corporate marketing hubs, and decoupled headless CMS infrastructures built to load instantly, rank flawlessly on search engines, and scale with absolute stability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => {
                    window.open('https://wa.me/237677079559?text=Hello%20Nexora%20Empire!%20I%20would%20like%20to%20start%20a%20web%20development%20project%20with%20you.%20I%20am%20interested%20in%20your%20digital%20solutions.', '_blank');
                  }}
                  className="flex items-center justify-center px-8 py-4 rounded-2xl bg-[linear-gradient(90deg,#2F5BFF_0%,#4A47FF_35%,#6A38F8_70%,#8B1DCA_100%)] text-white font-sans text-sm font-semibold tracking-wide hover:brightness-110 hover:shadow-[0_0_20px_rgba(106,56,248,0.3)] transition-all cursor-pointer"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-indigo-950/20 max-w-xl">
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-black text-white"><AnimatedCounter value="0.4s" /></div>
                  <div className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">Avg LCP speed</div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-black text-white"><AnimatedCounter value="100%" /></div>
                  <div className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">Custom Codebase</div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-black text-white"><AnimatedCounter value="0+" /></div>
                  <div className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">Templates Used</div>
                </div>
              </div>
            </div>

            {/* Right side left empty as requested */}
            <div className="lg:col-span-5" />
          </div>

        </div>
      </section>

      {/* Services Section in Light Mode */}
      <section className="relative py-28 sm:py-36 bg-[#fafbfc] border-t border-b border-slate-200/50 overflow-hidden" id="webdev-services-section">
        {/* Curved blue background gradients (Light Mode optimized) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-blue-50/40 to-indigo-50/40 rounded-full blur-[140px] pointer-events-none opacity-80" />
        
        {/* Left Side Floating Accent Indicator */}
        <div className="absolute left-0 top-[20%] w-[350px] h-[350px] pointer-events-none opacity-80 hidden md:block">
          <div className="absolute top-[40%] left-12 w-4.5 h-4.5 rounded-full bg-[#2F5BFF] shadow-[0_0_18px_rgba(47,91,255,0.45)] z-10" />
          <div className="absolute top-[40%] left-12 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border border-blue-100/35" />
          <div className="absolute top-[40%] left-12 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-blue-100/25" />
          <div className="absolute top-[40%] left-12 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-blue-100/15" />
        </div>

        {/* Right Side Floating Accent Indicator */}
        <div className="absolute right-0 top-[25%] w-[350px] h-[350px] pointer-events-none opacity-80 hidden md:block">
          <div className="absolute top-[30%] right-16 w-4.5 h-4.5 rounded-full bg-[#2F5BFF] shadow-[0_0_18px_rgba(47,91,255,0.45)] z-10" />
          {/* Elegant grid dot pattern */}
          <div className="absolute top-[-10px] right-6 w-40 h-40 bg-[radial-gradient(#cbd5e1_2.5px,transparent_2.5px)] [background-size:16px_16px] opacity-70" />
          <div className="absolute top-[30%] right-16 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full border border-blue-100/25" />
          <div className="absolute top-[30%] right-16 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-blue-100/15" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
          
          {/* Section Header */}
          <div className="w-full mb-20 flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-[#2F5BFF]/5 border border-[#2F5BFF]/20 mb-6 select-none shadow-[0_2px_10px_rgba(47,91,255,0.03)]"
              id="webdev-services-subtitle-badge"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#2F5BFF]" />
              <span className="font-mono text-xs tracking-[0.18em] font-extrabold text-[#2F5BFF]">
                WHAT WE BUILD
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-[64px] font-[900] text-slate-900 leading-[1.1] tracking-tight mb-6"
              id="webdev-services-main-title"
            >
              Web Solutions Built<br className="hidden sm:inline" /> for <span className="bg-[linear-gradient(90deg,#2F5BFF_0%,#4A47FF_35%,#6A38F8_70%,#8B1DCA_100%)] bg-clip-text text-transparent">Every Need</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-500 font-sans text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto"
              id="webdev-services-head-desc"
            >
              From simple websites to complex web applications, we build solutions that help your business grow.
            </motion.p>
          </div>

          {/* Grid of services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="webdev-services-grid">
            {webServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: index * 0.05 }}
                  className="bg-white rounded-[24px] border border-slate-100/90 p-8 flex flex-col h-full justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_24px_50px_rgba(47,91,255,0.05)] hover:border-[#2F5BFF]/25 group cursor-pointer text-left"
                  id={service.id}
                >
                  <div>
                    {/* Icon Box */}
                    <div className="w-14 h-14 rounded-2xl bg-[#2F5BFF]/10 flex items-center justify-center mb-6 transition-all group-hover:bg-[#2F5BFF]/15">
                      <Icon className="w-7 h-7 text-[#2F5BFF]" strokeWidth={1.5} />
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
                  <div className="inline-flex items-center gap-2 text-[#2F5BFF] hover:text-[#8B1DCA] font-semibold text-sm select-none group/btn transition-colors duration-200">
                    <span>Learn More</span>
                    <div className="w-5 h-5 rounded-full border border-[#2F5BFF] flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1.5">
                      <ChevronRight className="w-3 h-3 text-[#2F5BFF]" />
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
        idPrefix="webdev-process"
        badgeText="OUR PROVEN PROCESS"
        titleText="A Web Process Designed for Conversion"
        steps={webDevProcessSteps}
      />

      {/* Why Choose Nexora Section (Dark mode) */}
      <section className="relative py-28 sm:py-36 bg-[#020205] border-t border-b border-indigo-950/20 overflow-hidden" id="webdev-why-choose-section">
        {/* Background wavy visual accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Left Side purple/indigo wave lines using absolute elements with borders & rotation */}
          <div className="absolute left-[-150px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-40">
            <div className="absolute inset-0 rounded-full border border-violet-500/10 rotate-12 scale-[1.1]" />
            <div className="absolute inset-0 rounded-full border border-violet-500/15 rotate-45 scale-[0.9]" />
            <div className="absolute inset-0 rounded-full border border-indigo-500/10 -rotate-12 scale-[0.7]" />
            <div className="absolute inset-0 rounded-full border border-indigo-500/5 rotate-90 scale-[1.3]" />
          </div>

          {/* Right Side purple/indigo wave lines */}
          <div className="absolute right-[-150px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-40">
            <div className="absolute inset-0 rounded-full border border-violet-500/10 -rotate-12 scale-[1.1]" />
            <div className="absolute inset-0 rounded-full border border-violet-500/15 -rotate-45 scale-[0.9]" />
            <div className="absolute inset-0 rounded-full border border-indigo-500/10 rotate-12 scale-[0.7]" />
            <div className="absolute inset-0 rounded-full border border-indigo-500/5 -rotate-90 scale-[1.3]" />
          </div>

          {/* Ambient glow in center and sides */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-950/20 rounded-full blur-[120px] opacity-60" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans text-center">
          {/* Header */}
          <div className="w-full mb-20 flex flex-col items-center max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-violet-950/40 border border-violet-800/40 mb-6 select-none"
              id="webdev-why-badge"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
              <span className="font-mono text-xs tracking-[0.18em] font-extrabold text-violet-400 uppercase">
                WHY CHOOSE NEXORA
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-[900] text-white leading-tight tracking-tight mb-4"
              id="webdev-why-title"
            >
              Your Success, Our Priority
            </motion.h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center" id="webdev-why-grid">
            {[
              {
                id: 'why-custom',
                title: 'Custom-Built Solutions',
                description: 'Every website we build is unique, tailored to your business goals and requirements.',
                icon: Box,
                iconColor: 'text-indigo-400',
                iconBg: 'bg-indigo-500/10 border-indigo-500/20',
              },
              {
                id: 'why-perf',
                title: 'High Performance',
                description: 'We build fast, secure, and optimized websites that deliver the best user experience.',
                icon: Zap,
                iconColor: 'text-violet-400',
                iconBg: 'bg-violet-500/10 border-violet-500/20',
              },
              {
                id: 'why-seo',
                title: 'SEO Optimized',
                description: 'Our websites are built with SEO best practices to help you rank higher and get found.',
                icon: Search,
                iconColor: 'text-indigo-400',
                iconBg: 'bg-indigo-500/10 border-indigo-500/20',
              },
              {
                id: 'why-partner',
                title: 'Long-Term Partnership',
                description: "We don't just build websites. We partner with you for long-term growth and support.",
                icon: Users,
                iconColor: 'text-violet-400',
                iconBg: 'bg-violet-500/10 border-violet-500/20',
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-[24px] bg-[#070714]/80 border border-indigo-950/40 hover:border-violet-500/35 hover:bg-[#09091b]/80 transition-all duration-300 flex flex-col items-center justify-start text-center group"
                  id={item.id}
                >
                  {/* Icon container */}
                  <div className={`w-14 h-14 rounded-2xl ${item.iconBg} border flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className={`w-7 h-7 ${item.iconColor}`} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-white tracking-tight mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm font-sans leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Simple, Transparent Pricing Section */}
      <section className="relative py-28 sm:py-36 bg-[#fafbfc] border-t border-b border-slate-200/50 overflow-hidden" id="webdev-pricing-section">
        {/* Curved blue background gradients (Light Mode optimized) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-[#2F5BFF]/5 to-[#8B1DCA]/5 rounded-full blur-[140px] pointer-events-none opacity-80" />
        
        {/* Left Side Floating Accent Indicator */}
        <div className="absolute left-0 top-[20%] w-[350px] h-[350px] pointer-events-none opacity-80 hidden md:block">
          <div className="absolute top-[40%] left-12 w-4.5 h-4.5 rounded-full bg-[#2F5BFF] shadow-[0_0_18px_rgba(47,91,255,0.45)] z-10" />
          <div className="absolute top-[40%] left-12 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border border-blue-100/35" />
          <div className="absolute top-[40%] left-12 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-blue-100/25" />
          <div className="absolute top-[40%] left-12 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-blue-100/15" />
        </div>

        {/* Right Side Floating Accent Indicator */}
        <div className="absolute right-0 top-[25%] w-[350px] h-[350px] pointer-events-none opacity-80 hidden md:block">
          <div className="absolute top-[30%] right-16 w-4.5 h-4.5 rounded-full bg-[#2F5BFF] shadow-[0_0_18px_rgba(47,91,255,0.45)] z-10" />
          {/* Elegant grid dot pattern */}
          <div className="absolute top-[-10px] right-6 w-40 h-40 bg-[radial-gradient(#cbd5e1_2.5px,transparent_2.5px)] [background-size:16px_16px] opacity-70" />
          <div className="absolute top-[30%] right-16 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full border border-blue-100/25" />
          <div className="absolute top-[30%] right-16 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-blue-100/15" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans text-center">
          
          {/* Section Header */}
          <div className="w-full mb-16 flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-[#2F5BFF]/5 border border-[#2F5BFF]/20 mb-6 select-none shadow-[0_2px_10px_rgba(47,91,255,0.03)]"
              id="webdev-pricing-subtitle-badge"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#2F5BFF]" />
              <span className="font-mono text-xs tracking-[0.18em] font-extrabold text-[#2F5BFF] uppercase">
                PRICING PACKAGES
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-[900] text-slate-900 leading-[1.1] tracking-tight mb-6"
              id="webdev-pricing-main-title"
            >
              Simple, <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Transparent Pricing</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-500 font-sans text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto"
              id="webdev-pricing-head-desc"
            >
              Choose the perfect plan for your business needs.
            </motion.p>

            {/* Currency Toggle switch */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col items-center justify-center gap-3.5"
              id="webdev-pricing-currency-container"
            >
              <div className="relative p-1 bg-white border border-slate-200 rounded-full flex gap-1 z-10 shadow-sm">
                <button
                  onClick={() => setCurrency('XAF')}
                  className={`px-6 py-2 rounded-full text-xs font-sans font-bold tracking-wider transition-all duration-300 relative cursor-pointer ${
                    currency === 'XAF' 
                      ? 'text-white bg-[linear-gradient(90deg,#2F5BFF_0%,#4A47FF_35%,#6A38F8_70%,#8B1DCA_100%)] shadow-md font-extrabold' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  XAF (FCFA)
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-6 py-2 rounded-full text-xs font-sans font-bold tracking-wider transition-all duration-300 relative cursor-pointer ${
                    currency === 'USD' 
                      ? 'text-white bg-[linear-gradient(90deg,#2F5BFF_0%,#4A47FF_35%,#6A38F8_70%,#8B1DCA_100%)] shadow-md font-extrabold' 
                      : 'text-slate-500 hover:text-slate-900'
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

          <PricingCards currency={currency} setView={setView} />

          {/* Bottom custom horizontal bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-4xl mx-auto bg-white border border-slate-100/90 rounded-[20px] p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_12px_30px_rgba(47,91,255,0.02)]"
            id="webdev-pricing-custom-bar"
          >
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-11 h-11 rounded-xl bg-[#2F5BFF]/10 flex items-center justify-center text-[#2F5BFF]">
                <MessageSquare className="w-5 h-5 text-[#2F5BFF]" />
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
              className="inline-flex items-center gap-2 text-[#2F5BFF] hover:text-[#8B1DCA] font-semibold text-sm group cursor-pointer shrink-0 transition-all duration-200"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* Custom FAQs Accordion */}
      <section 
        id="webdev-faq"
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
                Web Development <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">FAQ</span>
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
                  const msg = encodeURIComponent("Hi, I have some questions about your Web Development services.");
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

      {/* Call to action bar before the footer */}
      <section className="relative py-20 bg-[#020205] text-white text-center overflow-hidden border-t border-indigo-950/25" id="webdev-cta">
        <div className="max-w-4xl mx-auto px-6 space-y-8 relative z-10">
          <span className="font-mono text-[10px] tracking-[0.25em] font-bold text-indigo-400 uppercase">
            Let's Construct Your Web Presence
          </span>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white">
            Ready to Build an Elite <br />
            Next-Gen <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Digital Asset?</span>
          </h3>
          <p className="font-sans text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Configure a personalized project blueprint or request a dynamic web stack demonstration from our lead software engineers today.
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
              Get Custom Proposal
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button
              onClick={() => {
                setView('home');
                window.scrollTo({ top: 0, behavior: 'instant' });
                if ((window as any).lenis) {
                  (window as any).lenis.scrollTo(0);
                }
              }}
              className="flex items-center justify-center px-8 py-4 rounded-2xl bg-[#080815]/60 border border-indigo-500/25 text-white font-sans text-sm font-semibold hover:border-indigo-400 hover:bg-indigo-500/5 transition-all cursor-pointer w-full sm:w-auto"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
