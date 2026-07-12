import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Users, GraduationCap, TrendingUp } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export const OurImpact: React.FC = () => {
  const stats = [
    {
      id: 'stat-projects',
      icon: Briefcase,
      number: '50+',
      label: 'Projects Delivered',
      color: 'from-blue-500/20 to-indigo-500/20',
      glowColor: 'rgba(59,130,246,0.15)',
      borderColor: 'group-hover:border-blue-500/50',
      iconColor: 'text-blue-400',
    },
    {
      id: 'stat-clients',
      icon: Users,
      number: '20+',
      label: 'Clients Served',
      color: 'from-indigo-500/20 to-violet-500/20',
      glowColor: 'rgba(99,102,241,0.15)',
      borderColor: 'group-hover:border-indigo-500/50',
      iconColor: 'text-indigo-400',
    },
    {
      id: 'stat-trained',
      icon: GraduationCap,
      number: '25+',
      label: 'People Trained',
      color: 'from-violet-500/20 to-purple-500/20',
      glowColor: 'rgba(139,92,246,0.15)',
      borderColor: 'group-hover:border-violet-500/50',
      iconColor: 'text-violet-400',
    },
    {
      id: 'stat-satisfaction',
      icon: TrendingUp,
      number: '98%',
      label: 'Client Satisfaction',
      color: 'from-blue-500/20 to-purple-500/20',
      glowColor: 'rgba(59,130,246,0.15)',
      borderColor: 'group-hover:border-blue-400/50',
      iconColor: 'text-blue-400',
    },
  ];

  return (
    <section
      id="impact"
      className="relative py-28 md:py-36 w-full overflow-hidden bg-[#020205] text-white"
    >
      {/* Immersive Dark Cosmic Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Deep background space gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-[#050510] to-[#020205]" />
        
        {/* Subtle starfield / dot pattern */}
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
        
        {/* Nebula Flows (floating ambient glows) */}
        <div className="absolute top-1/4 left-1/3 w-[50vw] h-[50vw] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-violet-600/5 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10 text-center">
        
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 select-none"
          id="impact-subtitle-badge"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.2em] font-bold text-blue-300 uppercase">
            Our Impact
          </span>
        </motion.div>

        {/* Section Title & Subheading */}
        <div className="max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight mt-6 mb-6 leading-none"
            id="impact-heading"
          >
            Numbers That Reflect Our Commitment to{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-md text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal"
            id="impact-description"
          >
            We take pride in the <span className="font-semibold text-white">results we deliver</span> and the <span className="font-semibold text-white">trust our clients place in us</span>. Here's a snapshot of our journey so far.
          </motion.p>
        </div>

        {/* Premium Grid of Glassmorphism Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto relative">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-[32px] bg-gradient-to-b from-slate-900/40 to-slate-950/60 backdrop-blur-xl border border-white/5 p-8 flex flex-col items-center justify-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-400 overflow-hidden"
                id={`impact-card-${idx}`}
                style={{
                  boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.03), 0 20px 50px rgba(0,0,0,0.5)`,
                }}
              >
                {/* Internal Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${stat.glowColor} 0%, transparent 70%)`
                  }}
                />

                {/* Glowing Top Border Accent line */}
                <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent group-hover:via-blue-500/50 transition-all duration-500" />

                {/* Circular Icon Container */}
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500 relative">
                  {/* Subtle inner radial glow on icon hover */}
                  <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <IconComponent className={`w-6 h-6 ${stat.iconColor} transition-transform duration-500 group-hover:rotate-6`} />
                </div>

                {/* Stat Big Number */}
                <h3 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 select-none">
                  <AnimatedCounter value={stat.number} />
                </h3>

                {/* Tiny accent horizontal underline */}
                <div className="w-8 h-[2px] rounded bg-gradient-to-r from-blue-500 to-indigo-500 mb-4 opacity-50 group-hover:w-12 transition-all duration-300" />

                {/* Label */}
                <p className="font-sans text-sm sm:text-base font-semibold text-slate-350 tracking-wide select-none">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>



      </div>
    </section>
  );
};
