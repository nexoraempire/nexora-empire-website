import React from 'react';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';
import { 
  Briefcase, 
  Users, 
  Globe, 
  ShieldCheck, 
  Code, 
  ArrowUpRight, 
  TrendingUp, 
  Activity, 
  Heart, 
  Laptop,
  ArrowRight,
  Gem,
  Rocket,
  Eye
} from 'lucide-react';
// @ts-ignore
import dashboardImg from '../assets/images/nexora_dashboard_1782086692344.jpg';

interface AboutProps {
  setView: (view: 'home' | 'about-us') => void;
}

export const About: React.FC<AboutProps> = ({ setView }) => {
  const stats = [
    {
      id: 'stat-delivered',
      value: '50+',
      label: 'Projects Delivered',
      icon: Briefcase,
      color: 'bg-indigo-50 border-indigo-100 text-indigo-600',
    },
    {
      id: 'stat-served',
      value: '20+',
      label: 'Clients Served',
      icon: Users,
      color: 'bg-blue-50 border-blue-100 text-blue-600',
    },
    {
      id: 'stat-areas',
      value: '5+',
      label: 'Service Areas',
      icon: Globe,
      color: 'bg-purple-50 border-purple-100 text-purple-600',
    },
    {
      id: 'stat-quality',
      value: '100%',
      label: 'Commitment to Quality',
      icon: ShieldCheck,
      color: 'bg-emerald-50 border-emerald-100 text-emerald-600',
    },
  ];

  return (
    <section 
      id="about" 
      className="relative w-full bg-white text-slate-900 py-24 md:py-32 overflow-hidden border-t border-slate-100"
    >
      {/* Structural Max-Width container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Hero Intro + Stats (Grid Setup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text Content & Stats Bento (Moved to Right on Desktop) */}
          <div className="lg:col-span-5 lg:order-2 flex flex-col items-start text-left space-y-8" id="about-left-col">
            
            {/* Badge: ABOUT NEXORA EMPIRE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/80 text-xs font-semibold text-indigo-700 tracking-wider uppercase font-sans"
              id="about-badge"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
              About Nexora Empire
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              id="about-heading-wrapper"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#0e1629] tracking-tight mt-6 mb-6 leading-none">
                Building Digital Solutions That <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Drive Growth</span>
              </h2>
            </motion.div>

            {/* Paragraph copy description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base md:text-md text-slate-500 max-w-xl leading-relaxed font-normal"
              id="about-description"
            >
              Nexora Empire is a <span className="font-semibold text-slate-900">premier technology agency</span> that helps <span className="font-semibold text-slate-900">ambitious businesses</span> and <span className="font-semibold text-slate-900">visionary creators</span> build their digital presence through <span className="font-semibold text-slate-900">high-performance websites</span>, <span className="font-semibold text-slate-900">premium mobile apps</span>, <span className="font-semibold text-slate-900">bespoke artificial intelligence solutions</span>, and <span className="font-semibold text-slate-900">data-backed scaling strategies</span>.
            </motion.p>

            {/* Action link button to the full About Us Page / Our DNA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <button
                onClick={() => setView('about-us')}
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0e1629] text-white font-sans text-sm font-semibold tracking-wide hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-600/15 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-95"
              >
                Explore Our DNA & Meet Team
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 text-brand-electric" />
              </button>
            </motion.div>

            {/* Metric Stats Bento Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 w-full"
              id="about-stats-bento"
            >
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={stat.id}
                    id={stat.id}
                    className="p-5 bg-[#fafbfc] border border-slate-200/60 rounded-xl hover:translate-y-[-2px] hover:shadow-md hover:border-indigo-100 transition-all duration-300 group flex flex-col justify-between min-h-[120px]"
                  >
                    <div className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 ${stat.color} transition-transform group-hover:scale-105 duration-300`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="mt-4">
                      <div className="font-display text-2xl font-black text-[#0e1629] leading-none mb-1">
                        <AnimatedCounter value={stat.value} />
                      </div>
                      <div className="font-sans text-xs text-slate-400 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

          </div>

          {/* Right Column: Overlapping 3D visual collage of mockups (Moved to Left on Desktop) */}
          <div className="lg:col-span-7 lg:order-1 relative w-full flex items-center justify-center min-h-[500px] lg:min-h-[600px]" id="about-right-col-collage">
            
            {/* Subtle circular grid backgrounds for visual interest */}
            <div className="absolute top-[10%] right-[10%] w-72 h-72 rounded-full bg-gradient-to-br from-indigo-500/5 to-purple-500/5 blur-3xl pointer-events-none -z-10" />
            <div className="absolute -bottom-[5%] left-[5%] w-80 h-80 rounded-full bg-gradient-to-tr from-brand-electric/5 to-transparent blur-3xl pointer-events-none -z-10" />
            
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none -z-10" />

            {/* Center Main Piece: The Dashboard Mockup Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="w-full max-w-[550px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-xl bg-white/70 backdrop-blur-md border border-slate-200 p-0.5 transform -rotate-1 relative z-10"
              id="about-collage-dashboard-scale"
            >
              {/* Interactive Code Badge */}
              <div
                className="absolute -top-8 right-4 sm:right-6 z-35 px-4 py-2.5 bg-white rounded-xl border border-slate-200 shadow-[0_10px_25px_rgba(0,0,0,0.08)] flex items-center gap-3 hover:scale-105 transition-all duration-300 select-none cursor-pointer whitespace-nowrap"
                id="about-floater-idea-card"
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                  <Code className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold text-slate-800 leading-tight">Interactive Code</span>
                  <span className="text-[9px] text-slate-400 font-sans mt-0.5 leading-none">Turning ideas into experiences</span>
                </div>
              </div>

              <img 
                src={dashboardImg} 
                alt="Nexora Empire SaaS Web CRM Dashboard" 
                width={1200}
                height={896}
                className="w-full h-auto object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Floater 1: Nexora Fitness Mobile App (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-[-20px] left-[-10px] sm:left-[30px] md:left-[60px] lg:left-[-15px] xl:left-[15px] z-20 w-44 sm:w-52 p-4 bg-slate-950 text-white rounded-xl border border-slate-800 shadow-[0_15px_30px_rgba(0,0,0,0.25)] flex flex-col gap-3 group hover:translate-y-[-4px] transition-transform duration-300 cursor-pointer"
              id="about-floater-fitness"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded bg-brand-violet/20 flex items-center justify-center">
                    <Activity className="w-3 h-3 text-brand-violet" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider font-mono">Nexora Fitness</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-electric transition-colors" />
              </div>
              
              <p className="text-[9px] text-slate-400 font-sans leading-none -mt-1.5">Mobile App</p>

              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-2 flex flex-col items-center">
                  <Heart className="w-4 h-4 text-rose-500 animate-pulse" />
                  <span className="block text-[9px] font-bold text-white mt-1.5">142 bpm</span>
                  <span className="block text-[8px] text-slate-500 font-sans text-center mt-0.5">Heart Rate</span>
                </div>
                
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-2 flex flex-col items-center">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span className="block text-[9px] font-bold text-white mt-1.5">6,400</span>
                  <span className="block text-[8px] text-slate-500 font-sans text-center mt-0.5">Steps Walked</span>
                </div>
              </div>

              <div className="h-1 bg-slate-900 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-gradient-to-r from-brand-violet to-brand-electric w-[75%]" />
              </div>
            </motion.div>

            {/* Floater 2: HyperGT Apex Website Showcase (Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-[-40px] right-[-10px] sm:right-[30px] md:right-[60px] lg:right-[-10px] xl:right-[20px] z-20 w-48 sm:w-56 p-3 bg-white rounded-xl border border-slate-200 shadow-[0_15px_35px_rgba(0,0,0,0.1)] flex flex-col gap-2 group hover:translate-y-[-4px] transition-transform duration-300 cursor-pointer"
              id="about-floater-hypergt"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Laptop className="w-3.5 h-3.5 text-[#0e1629]" />
                  <span className="text-[10px] font-bold text-slate-800 tracking-wider uppercase font-mono">HyperGT Apex</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
              </div>
              
              <p className="text-[9px] text-slate-400 font-sans leading-none -mt-1">Website</p>

              <div className="h-20 sm:h-24 w-full rounded-lg bg-slate-950 border border-slate-900 relative overflow-hidden flex flex-col justify-end p-2 sm:p-3">
                <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=400&auto=format&fit=crop')" }} />
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-950 to-transparent z-10" />
                
                <div className="relative z-20">
                  <span className="block text-[8px] font-semibold text-brand-electric uppercase tracking-widest leading-none mb-1">Precision. Power.</span>
                  <span className="block text-[7px] text-white font-sans font-medium line-clamp-2 leading-tight">
                    Next-generation automotive performance platform.
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Describing Nexora cards: Our Key Services, Mission, Vision (3 Premium white mode cards) */}
        <div className="mt-24 pt-12 border-t border-slate-100" id="about-us-white-cards-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Our Key Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 sm:p-10 rounded-[28px] bg-white border border-slate-200/80 shadow-[0_15px_30px_rgba(15,23,42,0.015)] hover:shadow-[0_30px_60px_rgba(15,23,42,0.06)] hover:border-blue-200 hover:-translate-y-1.5 transition-all duration-400 group relative overflow-hidden text-left"
              id="about-card-key-services"
            >
              {/* Subtle accent corner gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/20 group-hover:bg-blue-50/50 rounded-full blur-[30px] pointer-events-none transition-colors duration-300" />
              
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100/60 flex items-center justify-center text-blue-650 mb-6 transition-transform group-hover:scale-105 duration-300">
                <Gem className="w-6 h-6 text-blue-600" />
              </div>
              
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0e1629] mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                Our Key Services
              </h3>
              
              <p className="text-slate-500 text-sm sm:text-base font-sans leading-relaxed">
                Tailored <span className="font-semibold text-slate-950">tech solutions</span> for modern enterprises, focusing on <span className="font-semibold text-slate-950">architecture</span>, <span className="font-semibold text-slate-950">security</span>, and <span className="font-semibold text-slate-950">high-performance engineering</span>.
              </p>
            </motion.div>

            {/* Card 2: Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 sm:p-10 rounded-[28px] bg-white border border-slate-200/80 shadow-[0_15px_30px_rgba(15,23,42,0.015)] hover:shadow-[0_30px_60px_rgba(15,23,42,0.06)] hover:border-violet-200 hover:-translate-y-1.5 transition-all duration-400 group relative overflow-hidden text-left"
              id="about-card-mission"
            >
              {/* Subtle accent corner gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-50/20 group-hover:bg-violet-50/50 rounded-full blur-[30px] pointer-events-none transition-colors duration-300" />
              
              <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100/60 flex items-center justify-center text-violet-600 mb-6 transition-transform group-hover:scale-105 duration-300">
                <Rocket className="w-6 h-6 text-violet-600" />
              </div>
              
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0e1629] mb-3 tracking-tight group-hover:text-violet-600 transition-colors">
                Mission
              </h3>
              
              <p className="text-slate-500 text-sm sm:text-base font-sans leading-relaxed">
                To <span className="font-semibold text-slate-950">empower global talent</span> through <span className="font-semibold text-slate-950">continuous innovation</span> and <span className="font-semibold text-slate-950">hands-on learning</span> in the digital frontier.
              </p>
            </motion.div>

            {/* Card 3: Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 sm:p-10 rounded-[28px] bg-white border border-slate-200/80 shadow-[0_15px_30px_rgba(15,23,42,0.015)] hover:shadow-[0_30px_60px_rgba(15,23,42,0.06)] hover:border-cyan-200 hover:-translate-y-1.5 transition-all duration-400 group relative overflow-hidden text-left"
              id="about-card-vision"
            >
              {/* Subtle accent corner gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50/20 group-hover:bg-cyan-50/50 rounded-full blur-[30px] pointer-events-none transition-colors duration-300" />
              
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100/60 flex items-center justify-center text-cyan-600 mb-6 transition-transform group-hover:scale-105 duration-300">
                <Eye className="w-6 h-6 text-cyan-600" />
              </div>
              
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0e1629] mb-3 tracking-tight group-hover:text-cyan-600 transition-colors">
                Vision
              </h3>
              
              <p className="text-slate-500 text-sm sm:text-base font-sans leading-relaxed">
                Leading the <span className="font-semibold text-slate-950">digital transformation frontier</span> as the most <span className="font-semibold text-slate-950">trusted partner</span> for scaling businesses and careers.
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
