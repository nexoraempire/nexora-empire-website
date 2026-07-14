import React from 'react';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';
import { Flag, Code, Cpu, Rocket } from 'lucide-react';

interface JourneyMilestone {
  id: string;
  year: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  imageUrl: string;
  accentColor: string;
  iconBg: string;
  iconTextColor: string;
}

export const OurJourney: React.FC = () => {
  const milestones: JourneyMilestone[] = [
    {
      id: 'founded',
      year: '2022',
      stepNumber: '01',
      title: 'Founded',
      description: 'Nexora Empire was founded with a vision to empower businesses and individuals through creative digital solutions.',
      icon: Flag,
      imageUrl: '/assets/images/modern-office-nexora-empire-workspace-office.png_202607121801.webp',
      accentColor: 'from-blue-600 to-indigo-600',
      iconBg: 'bg-blue-50/80 border-blue-150',
      iconTextColor: 'text-blue-600',
    },
    {
      id: 'fullstack',
      year: '2024',
      stepNumber: '02',
      title: 'Fullstack Expansion',
      description: 'Expanded our capabilities with end-to-end fullstack development, robust SaaS solutions, and scalable digital systems.',
      icon: Code,
      imageUrl: '/assets/images/web-development.webp',
      accentColor: 'from-indigo-600 to-violet-600',
      iconBg: 'bg-indigo-50/80 border-indigo-150',
      iconTextColor: 'text-indigo-600',
    },
    {
      id: 'ai-services',
      year: '2025',
      stepNumber: '03',
      title: 'AI Services Introduced',
      description: 'Embraced innovation by integrating AI-powered solutions to help clients automate, scale, and stay ahead of the curve.',
      icon: Cpu,
      imageUrl: '/assets/images/ai-powered-web-development-foffe-lili2.webp',
      accentColor: 'from-violet-600 to-purple-600',
      iconBg: 'bg-violet-50/80 border-violet-150',
      iconTextColor: 'text-violet-600',
    },
    {
      id: 'global-empire',
      year: '2026',
      stepNumber: '04',
      title: 'The Global Empire',
      description: 'Building a global presence and empowering businesses worldwide with future-ready digital solutions that drive real impact.',
      icon: Rocket,
      imageUrl: '/assets/images/global-empire.webp',
      accentColor: 'from-blue-600 to-violet-600',
      iconBg: 'bg-blue-50/80 border-blue-150',
      iconTextColor: 'text-blue-600',
    },
  ];

  return (
    <section
      id="about-us-journey-section"
      className="relative py-24 md:py-32 bg-white text-slate-900 overflow-hidden"
    >
      {/* Background aesthetic grid and subtle colors mapping */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      
      {/* Soft color ambient clouds */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-50/40 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full bg-violet-50/30 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Badge */}
        <div className="text-center mb-6">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-600 tracking-wider uppercase font-sans shadow-sm"
            id="journey-badge"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Our Journey
          </motion.span>
        </div>

        {/* Section Heading & Description */}
        <div className="max-w-3xl mx-auto text-center mb-24 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#0e1629] tracking-tight mt-6 mb-6 leading-none"
            id="journey-heading"
          >
            Our Journey of Growth <br className="hidden sm:inline" />
            and <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Innovation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-md text-slate-500 max-w-3xl mx-auto leading-relaxed font-normal"
            id="journey-subheading"
          >
            From a simple idea to a full-scale digital solutions company, here's how Nexora Empire has evolved over the years.
          </motion.p>
        </div>

        {/* Timeline Visualization */}
        <div className="relative" id="journey-timeline-wrapper">
          
          {/* Horizontal dotted connector line (hidden on mobile, visible on desktop) */}
          <div className="hidden lg:block absolute top-[68px] left-[12%] right-[12%] h-[1px] border-t border-dashed border-slate-200 -z-10" />

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
            {milestones.map((milestone, idx) => {
              const IconComponent = milestone.icon;
              return (
                <div key={milestone.id} className="flex flex-col items-center group relative text-center">
                  
                  {/* Timeline Year Indicator */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="font-mono text-sm font-bold text-blue-600 mb-4 bg-blue-50/50 px-3 py-1 rounded-full border border-blue-100/40"
                  >
                    <AnimatedCounter value={milestone.year} />
                  </motion.span>

                  {/* Circular Icon Container */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className={`w-14 h-14 rounded-full border ${milestone.iconBg} flex items-center justify-center ${milestone.iconTextColor} shadow-md group-hover:scale-110 transition-all duration-300 relative z-10 mb-8`}
                  >
                    {/* Tiny blinking timeline dot on bottom */}
                    <span className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                    <IconComponent className="w-5 h-5 transition-transform group-hover:rotate-6 duration-300" />
                  </motion.div>

                  {/* Milestone Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: idx * 0.2 }}
                    className="w-full bg-white rounded-[32px] border border-slate-150/80 p-6 sm:p-7 shadow-[0_15px_40px_rgba(15,23,42,0.012)] hover:shadow-[0_30px_60px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 transition-all duration-400 overflow-hidden flex flex-col justify-between min-h-[380px] text-left"
                  >
                    <div className="space-y-4">
                      {/* Step Number label */}
                      <span className="font-mono text-xs font-bold text-blue-600/80 bg-blue-50/60 px-2.5 py-1 rounded-lg">
                        {milestone.stepNumber}
                      </span>

                      {/* Milestone Title */}
                      <h4 className="font-display text-lg sm:text-xl font-bold text-[#0e1629] tracking-tight group-hover:text-blue-600 transition-colors duration-300 mt-2">
                        {milestone.title}
                      </h4>

                      {/* Milestone Description */}
                      <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Milestone Visual Image */}
                    <div className="w-full h-36 rounded-2xl overflow-hidden mt-6 shadow-inner border border-slate-100">
                      <img
                        src={milestone.imageUrl}
                        alt={milestone.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700 filter brightness-[0.98]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
