import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Compass, Code, Rocket, LifeBuoy } from 'lucide-react';

interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: React.ReactNode;
  icon: React.ComponentType<any>;
  imageUrl: string;
  bullets: string[];
  gradient: string;      // Tailwind class gradient from
  accentColor: string;   // Tailwind hover text color
  bulletColor: string;   // Tailwind list bullet bg
  iconBgActive: string;  // Tailwind class active circle icon bg
  numHoverColor: string; // Tailwind translucent step number hover color
}

export const HowWeWork: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const steps: ProcessStep[] = [
    {
      id: 'discovery',
      stepNumber: '01',
      title: 'Discovery',
      description: <span>We dive deep into your ecosystem. Through <span className="font-semibold text-white">stakeholder interviews</span> and <span className="font-semibold text-white">market analysis</span>, we identify the core challenges and opportunities to ensure a <span className="font-semibold text-white">strategic foundation</span>.</span>,
      icon: Search,
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
      bullets: [
        'Requirement Analysis',
        'Market Research',
        'Technical Feasibility',
      ],
      gradient: 'from-blue-950/40',
      accentColor: 'text-blue-400',
      bulletColor: 'bg-blue-500',
      iconBgActive: 'bg-blue-500',
      numHoverColor: 'text-blue-500/20',
    },
    {
      id: 'design',
      stepNumber: '02',
      title: 'Design',
      description: <span>Architecting the solution. We create <span className="font-semibold text-white">high-fidelity prototypes</span> and <span className="font-semibold text-white">robust system diagrams</span>, ensuring the user experience is intuitive and <span className="font-semibold text-white">brand-aligned</span> before code is written.</span>,
      icon: Compass,
      imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
      bullets: [
        'UI/UX Prototyping',
        'System Architecture',
        'Brand Integration',
      ],
      gradient: 'from-purple-950/40',
      accentColor: 'text-purple-400',
      bulletColor: 'bg-purple-500',
      iconBgActive: 'bg-purple-500',
      numHoverColor: 'text-purple-500/20',
    },
    {
      id: 'development',
      stepNumber: '03',
      title: 'Development',
      description: <span>Bringing ideas to life. Our engineers build with <span className="font-semibold text-white">clean, scalable code</span> using the latest tech stack. Continuous integration and <span className="font-semibold text-white">automated testing</span> ensure a bug-free, robust product.</span>,
      icon: Code,
      imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop',
      bullets: [
        'Agile Sprints',
        'Clean Code Standards',
        'QA & Testing',
      ],
      gradient: 'from-emerald-950/40',
      accentColor: 'text-emerald-400',
      bulletColor: 'bg-emerald-500',
      iconBgActive: 'bg-emerald-500',
      numHoverColor: 'text-emerald-500/20',
    },
    {
      id: 'launch',
      stepNumber: '04',
      title: 'Launch',
      description: <span>Ready for liftoff. We handle the complete <span className="font-semibold text-white">deployment</span>, configure <span className="font-semibold text-white">performance monitoring tools</span>, and provide seamless integration to ensure a flawless release.</span>,
      icon: Rocket,
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      bullets: [
        'Deployment',
        'Performance Monitoring',
        'Maintenance Support',
      ],
      gradient: 'from-orange-950/40',
      accentColor: 'text-orange-400',
      bulletColor: 'bg-orange-500',
      iconBgActive: 'bg-orange-500',
      numHoverColor: 'text-orange-500/20',
    },
    {
      id: 'support',
      stepNumber: '05',
      title: 'Support',
      description: <span>We don't leave you hanging. Our team provides <span className="font-semibold text-white">24/7 post-deployment support</span>, monitoring, and <span className="font-semibold text-white">regular security updates</span> to ensure your solution evolves with your business.</span>,
      icon: LifeBuoy,
      imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop',
      bullets: [
        '24/7 Monitoring',
        'Regular Updates',
        'Dedicated Team',
      ],
      gradient: 'from-cyan-950/40',
      accentColor: 'text-cyan-400',
      bulletColor: 'bg-cyan-500',
      iconBgActive: 'bg-cyan-500',
      numHoverColor: 'text-cyan-500/20',
    },
  ];

  return (
    <section
      id="approach"
      className="relative py-28 md:py-36 bg-[#020205] text-white overflow-hidden border-t border-white/5"
    >
      {/* Background elements to match previous premium cosmic dark pages */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-[#050510] to-[#020205]" />
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute top-1/4 left-1/4 w-[45vw] h-[45vw] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-violet-500/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Section Badge */}
        <div className="mb-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 select-none"
            id="process-subtitle-badge"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.2em] font-bold text-blue-300 uppercase">
              How We Work
            </span>
          </motion.div>
        </div>

        {/* Section Title & Subheading */}
        <div className="max-w-3xl mx-auto text-center mb-20 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight mt-6 mb-6 leading-none"
            id="process-heading"
          >
            Our Proven <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-md text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal"
            id="process-subheading"
          >
            Have a project in mind? Let's turn your ideas into powerful digital solutions that drive results and help your business grow.
          </motion.p>
        </div>

        {/* Interactive Process Cards Container */}
        <div 
          className="flex flex-col lg:flex-row gap-4.5 lg:gap-5 max-w-6xl mx-auto items-stretch h-auto lg:h-[500px] w-full"
          id="process-cards-container"
        >
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            const isHovered = hoveredIdx === idx;
            
            // Layout flex computation for smooth desktop expansion:
            // Non-hovered state: '1'
            // Hovered card state: '3'
            // Other cards state: '0.6'
            const flexVal = hoveredIdx === null
              ? '1'
              : isHovered
                ? '3'
                : '0.6';

            return (
              <div
                key={step.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setHoveredIdx(hoveredIdx === idx ? null : idx)}
                style={{
                  flex: `${flexVal} 1 0%`,
                  transition: 'all 600ms cubic-bezier(0.25, 1, 0.5, 1)'
                }}
                className="group relative rounded-[32px] overflow-hidden border border-white/5 bg-[#07070c] flex flex-col justify-end p-8 cursor-pointer h-[480px] lg:h-full select-none"
                id={`process-card-${step.id}`}
              >
                {/* Background gradient overlay on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${step.gradient} to-[#07070c] transition-opacity duration-500 pointer-events-none`}
                  style={{ opacity: isHovered ? 1 : 0 }}
                />

                {/* Background image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 mix-blend-luminosity pointer-events-none"
                  style={{ 
                    backgroundImage: `url('${step.imageUrl}')`,
                    opacity: isHovered ? 0.3 : 0.1 
                  }}
                />

                {/* Top Section: Large Translucent Number and floating round icon */}
                <div className="absolute top-8 left-8 right-8 flex items-center justify-between pointer-events-none z-10">
                  <span className={`text-6xl font-black transition-colors duration-500 font-display select-none ${
                    isHovered ? step.numHoverColor : 'text-white/5'
                  }`}>
                    {step.stepNumber}
                  </span>
                  
                  <div className={`w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
                    isHovered 
                      ? `${step.iconBgActive} text-white scale-110 shadow-lg` 
                      : 'text-white/60 group-hover:text-white'
                  }`}>
                    <IconComponent className="w-5 h-5 transition-transform duration-500 group-hover:rotate-6" />
                  </div>
                </div>

                {/* Bottom Section: Title, Description, and Bullet List */}
                <div className="relative z-10 text-left w-full">
                  <div className={`transition-transform duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-2 lg:translate-y-4'}`}>
                    <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 font-display select-none ${
                      isHovered ? step.accentColor : 'text-white'
                    }`}>
                      {step.title}
                    </h3>

                    {/* Expandable Content Area using Framer Motion */}
                    <div className="overflow-hidden">
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                      >
                        <p className="font-sans text-slate-300 text-sm leading-relaxed mt-4 min-w-[280px]">
                          {step.description}
                        </p>

                        <ul className="mt-5 space-y-2 text-sm text-slate-400">
                          {step.bullets.map((bullet, bulletIdx) => (
                            <motion.li
                              key={bulletIdx}
                              initial={{ x: -10, opacity: 0 }}
                              animate={isHovered ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                              transition={{ duration: 0.3, delay: 0.12 + bulletIdx * 0.05 }}
                              className="flex items-center gap-2"
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${step.bulletColor}`} />
                              <span>{bullet}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    {/* Standard non-hovered mobile helper text or simple helper hint */}
                    {!isHovered && (
                      <div className="block lg:hidden mt-3">
                        <p className="text-slate-500 text-xs font-medium">Tap to expand and see details</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
