import React from 'react';
import { motion } from 'motion/react';
import { CardSpotlight } from './CardSpotlight.tsx';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Sparkles, 
  Video, 
  TrendingUp, 
  GraduationCap
} from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: React.ReactNode;
  icon: React.ComponentType<any>;
  glowColor: string;
  borderColor: string;
  iconColorClass: string;
  gridClass: string;
}

interface ServicesProps {
  setView?: (view: 'home' | 'about-us' | 'portfolio' | 'pricing' | 'training-internship' | 'contact' | 'web-dev' | 'mobile-dev' | 'branding-design' | 'seo-growth' | 'ai-video' | 'social-media-management') => void;
}

export const Services: React.FC<ServicesProps> = ({ setView }) => {
  const services: ServiceItem[] = [
    {
      id: 'service-card-01',
      number: '01',
      title: 'Website Development',
      description: <span>Modern, responsive websites designed to <span className="font-semibold text-white">attract customers</span>, <span className="font-semibold text-white">build credibility</span>, and <span className="font-semibold text-white">strengthen your online presence</span>.</span>,
      icon: Globe,
      glowColor: 'rgba(0, 190, 250, 0.08)',
      borderColor: 'rgba(0, 190, 250, 0.3)',
      iconColorClass: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      gridClass: 'col-span-1 md:col-span-1 lg:col-span-1',
    },
    {
      id: 'service-card-02',
      number: '02',
      title: 'Mobile App Development',
      description: <span>Custom mobile applications built for <span className="font-semibold text-white">exceptional performance</span>, <span className="font-semibold text-white">scalability</span>, and <span className="font-semibold text-white">flawless user experiences</span>.</span>,
      icon: Smartphone,
      glowColor: 'rgba(6, 182, 212, 0.08)',
      borderColor: 'rgba(6, 182, 212, 0.3)',
      iconColorClass: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      gridClass: 'col-span-1 md:col-span-1 lg:col-span-1',
    },
    {
      id: 'service-card-03',
      number: '03',
      title: 'Branding & Graphic Design',
      description: <span>High-impact logos, brand identities, and custom visual systems that help brands <span className="font-semibold text-white">stand out</span> and <span className="font-semibold text-white">leave a lasting impression</span>.</span>,
      icon: Palette,
      glowColor: 'rgba(168, 85, 247, 0.08)',
      borderColor: 'rgba(168, 85, 247, 0.3)',
      iconColorClass: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      gridClass: 'col-span-1 md:col-span-1 lg:col-span-1',
    },
    {
      id: 'service-card-04',
      number: '04',
      title: 'AI Solutions',
      description: <span>AI-powered tools, intelligent automations, chatbots, and custom workflows that <span className="font-semibold text-white">improve operational efficiency</span> and <span className="font-semibold text-white">boost productivity</span>.</span>,
      icon: Sparkles,
      glowColor: 'rgba(16, 185, 129, 0.08)',
      borderColor: 'rgba(16, 185, 129, 0.3)',
      iconColorClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      gridClass: 'col-span-1 md:col-span-1 lg:col-span-1',
    },
    {
      id: 'service-card-05',
      number: '05',
      title: 'AI Video & Editing',
      description: <span>High-converting video content, AI-driven production, promotional showcases, and high-end editing designed to <span className="font-semibold text-white">inspire</span> and <span className="font-semibold text-white">convert viewers</span>.</span>,
      icon: Video,
      glowColor: 'rgba(236, 72, 153, 0.08)',
      borderColor: 'rgba(236, 72, 153, 0.3)',
      iconColorClass: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
      gridClass: 'col-span-1 md:col-span-1 lg:col-span-1',
    },
    {
      id: 'service-card-06',
      number: '06',
      title: 'Digital Growth & SEO',
      description: <span>Data-driven strategies that help businesses <span className="font-semibold text-white">increase organic visibility</span>, <span className="font-semibold text-white">rank higher</span>, and <span className="font-semibold text-white">generate qualified leads</span>.</span>,
      icon: TrendingUp,
      glowColor: 'rgba(245, 158, 11, 0.08)',
      borderColor: 'rgba(245, 158, 11, 0.3)',
      iconColorClass: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      gridClass: 'col-span-1 md:col-span-1 lg:col-span-1',
    },
    {
      id: 'service-card-07',
      number: '07',
      title: 'Training & Internships',
      description: <span>Hands-on professional training, mentorship, and real-world internships designed to <span className="font-semibold text-white">build practical digital skills</span> and <span className="font-semibold text-white">accelerate modern careers</span>.</span>,
      icon: GraduationCap,
      glowColor: 'rgba(99, 102, 241, 0.08)',
      borderColor: 'rgba(99, 102, 241, 0.3)',
      iconColorClass: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      gridClass: 'col-span-1 md:col-span-2 lg:col-span-3',
    },
  ];

  return (
    <section 
      id="services" 
      className="relative py-24 sm:py-32 bg-brand-dark overflow-hidden"
    >
      {/* Dynamic Cosmic Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-brand-violet/10 to-brand-electric/10 rounded-full blur-[140px] pointer-events-none opacity-30" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-50/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-violet/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern overlays to mimic premium SaaS background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
        
        {/* Section Header at the top, centered */}
        <div className="w-full mb-16 flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-violet/15 border border-indigo-500/10 mb-6 select-none"
            id="services-subtitle-badge"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-electric animate-pulse-glow" />
            <span className="font-mono text-[10px] tracking-[0.2em] font-bold text-violet-300 uppercase">
              Our Services
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight mt-6 mb-6 leading-none"
            id="services-main-title"
          >
            Solutions Designed for <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Modern Growth</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-md text-gray-400 max-w-3xl mx-auto leading-relaxed font-normal"
            id="services-head-desc"
          >
            From websites and mobile apps to branding, AI, video production, and training, we help businesses and individuals build a stronger digital presence.
          </motion.p>
        </div>

        {/* Clean, premium grid of services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-bento-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                onClick={() => {
                  if (setView) {
                    if (service.id === 'service-card-01') setView('web-dev');
                    else if (service.id === 'service-card-02') setView('mobile-dev');
                    else if (service.id === 'service-card-03') setView('branding-design');
                    else if (service.id === 'service-card-05') setView('ai-video');
                    else if (service.id === 'service-card-06') setView('seo-growth');
                    else if (service.id === 'service-card-07') setView('training-internship');
                    else setView('contact');
                    window.scrollTo({ top: 0, behavior: 'instant' });
                    if ((window as any).lenis) {
                      (window as any).lenis.scrollTo(0);
                    }
                  }
                }}
                className={`${service.gridClass} rounded-2xl bg-slate-950/40 border border-[#1e1b4b]/30 backdrop-blur-md relative overflow-hidden group hover:border-brand-electric/30 transition-all duration-500 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] cursor-pointer`}
                id={service.id}
              >
                <CardSpotlight
                  className="p-6 sm:p-8 flex flex-col h-full text-left"
                  glowColor={service.glowColor}
                  borderColor={service.borderColor}
                >
                  {/* Subtle circular background highlight on hover */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.01] group-hover:bg-brand-electric/5 rounded-full blur-[40px] pointer-events-none transition-colors duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Icon & Number Row */}
                      <div className="flex items-center justify-between mb-6 w-full">
                        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${service.iconColorClass}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs font-bold text-gray-500/80 tracking-widest uppercase">
                          {service.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl font-bold text-white tracking-tight mb-3">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm font-sans leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
