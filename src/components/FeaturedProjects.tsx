import React from 'react';
import { motion } from 'motion/react';
import { CardSpotlight } from './CardSpotlight.tsx';
import { LazyVideo } from './LazyVideo';
import { 
  Car, 
  Dumbbell, 
  Sparkles, 
  Video, 
  Briefcase, 
  Smartphone, 
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  categoryIcon: React.ReactNode;
  categoryTheme: string;
  description: React.ReactNode;
  techStack: string[];
  mockupBg: string;
  image: string;
  liveLink?: string;
}

interface FeaturedProjectsProps {
  setView?: (view: 'home' | 'about-us' | 'portfolio') => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ setView }) => {
  const projects: Project[] = [
    {
      id: 'hypergt',
      title: 'HyperGT Apex',
      category: 'Website',
      categoryIcon: <Sparkles className="w-3.5 h-3.5" />,
      categoryTheme: 'bg-indigo-50/80 text-indigo-600 border-indigo-100/50',
      description: <span>Luxury automotive website experience designed with <span className="font-semibold text-slate-800">immersive visuals</span>, <span className="font-semibold text-slate-800">modern animations</span>, and a <span className="font-semibold text-slate-800">premium user experience</span>.</span>,
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      mockupBg: 'bg-[#060608]',
      image: '/assets/images/modern-car-website-ui-design.webp',
      liveLink: 'https://hypergt-apex.vercel.app/'
    },
    {
      id: 'nexorafit',
      title: 'Nexora Fitness',
      category: 'Website',
      categoryIcon: <Sparkles className="w-3.5 h-3.5" />,
      categoryTheme: 'bg-emerald-50/80 text-emerald-600 border-emerald-100/50',
      description: <span>Fitness platform focused on <span className="font-semibold text-slate-800">health transformations</span>, customized workouts, and <span className="font-semibold text-slate-800">high user engagement</span>.</span>,
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      mockupBg: 'bg-[#0f0f12]',
      image: '/assets/images/modern-fitness-website-design-nexora-fitness.webp',
      liveLink: 'https://nexora-fitness-v2.vercel.app/'
    },
    {
      id: 'real_estate_app',
      title: 'Cameroon Real Estate Web App',
      category: 'Website',
      categoryIcon: <Sparkles className="w-3.5 h-3.5" />,
      categoryTheme: 'bg-indigo-50/80 text-indigo-600 border-indigo-100/50',
      description: <span>Real estate web application tailored for the <span className="font-semibold text-slate-800">Cameroonian local market</span>, optimized for local property discovery and <span className="font-semibold text-slate-800">trusted broker connections</span>.</span>,
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      mockupBg: 'bg-[#090b0e]',
      image: '/assets/images/real-estate-website-ui-design.webp'
    },
    {
      id: 'nexapay',
      title: 'NexaPay Mobile App',
      category: 'Mobile App',
      categoryIcon: <Smartphone className="w-3.5 h-3.5" />,
      categoryTheme: 'bg-purple-50/80 text-purple-600 border-purple-100/50',
      description: <span>Next-generation <span className="font-semibold text-slate-800">mobile banking application</span> offering secure transfers, instant spend metrics, and smart card management.</span>,
      techStack: ['React Native', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express'],
      mockupBg: 'bg-[#18142c]',
      image: '/assets/images/mobile-banking-app-ui-design.webp'
    },
    {
      id: 'beauty_brand_collection',
      title: 'Beauty Brand Collection',
      category: 'Branding',
      categoryIcon: <Sparkles className="w-3.5 h-3.5" />,
      categoryTheme: 'bg-indigo-50/80 text-indigo-700 border-indigo-100/50',
      description: <span>Beauty & Salon Marketing Campaigns featuring <span className="font-semibold text-slate-800">luxury aesthetics</span>.</span>,
      techStack: ['Creative Direction', 'Brand Identity Systems', 'Visual Storytelling', 'Asset Pack Creation'],
      mockupBg: 'bg-[#0a0f1d]',
      image: '/assets/images/Free_A4_Flyers_Grid_Mockup_po.webp'
    },
    {
      id: 'ai_video',
      title: 'Nexora Kids Bootcamp Video',
      category: 'AI Video',
      categoryIcon: <Video className="w-3.5 h-3.5" />,
      categoryTheme: 'bg-rose-50/80 text-rose-700 border-rose-100/50',
      description: <span>Turn holidays into a month of creativity and learning. At <span className="font-semibold text-slate-800">Nexora Kids Bootcamp</span>, children gain practical skills in coding, design, and AI basics.</span>,
      techStack: ['Premiere Pro', 'ChatGPT'],
      mockupBg: 'bg-[#020205]',
      image: '/assets/images/nexora-empire-kids-bootcamp-ai-video.mp4'
    }
  ];

  return (
    <section 
      id="work" 
      className="relative py-28 bg-[#fafbfc] overflow-hidden border-b border-slate-100 select-none"
    >
      {/* Ambient glowing radial light background circles matching user prompt */}
      <div 
        id="projects-ambient-glow"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-violet-100/30 to-blue-100/20 blur-[130px] rounded-full pointer-events-none -z-10" 
      />
      <div 
        id="projects-grid-pattern"
        className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1.2px,transparent_1.2px),linear-gradient(to_bottom,#f1f5f9_1.2px,transparent_1.2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="projects-header"
        >
          {/* Section badge mimicking the Technology Stack layout */}
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-brand-violet uppercase bg-violet-50/70 px-4 py-1.5 rounded-full border border-violet-100/50" id="projects-badge">
            OUR WORK
          </span>
          
          {/* Main Title paired with Space Grotesk header styling */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight mt-6 mb-6 leading-none" id="projects-heading">
            Projects We've Brought <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">to Life</span>
          </h2>
          
          {/* Elegant Subtitle Description with specific word styling requested */}
          <p className="text-sm sm:text-base md:text-md text-slate-500 max-w-3xl mx-auto leading-relaxed font-normal" id="projects-description">
            Explore some of the websites, applications, and digital experiences we've designed and developed for businesses across <span className="font-semibold text-slate-800">different industries</span>.
          </p>
        </motion.div>
      </div>

      {/* Grid of Projects We've Brought to Life */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" id="projects-grid-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10" id="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              id={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-[0_5px_15px_-5px_rgba(0,0,0,0.02)] hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(109,40,217,0.05)] transition-all duration-500"
            >
              <CardSpotlight
                className="w-full h-full flex flex-col"
                glowColor="rgba(109, 40, 217, 0.04)"
                borderColor="rgba(109, 40, 217, 0.18)"
              >
                {/* Mockup Container (Safari/Mac Minimalist Browser Frame Mock) */}
                <div className="relative w-full aspect-[4/3.8] p-1.5 bg-slate-100/80 border-b border-slate-200/50 flex flex-col">
                  
                  {/* Browser window top controls bar */}
                  <div className="flex items-center justify-between px-3.5 py-1.5 bg-slate-200/30 rounded-t-2xl border-b border-slate-200/20" id={`browser-bar-${project.id}`}>
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <div className="w-32 bg-white/60 h-3.5 rounded-md text-[5.5px] font-mono text-slate-400 flex items-center justify-center" id={`browser-url-${project.id}`}>
                      {project.id === 'beauty_brand_collection' ? 'beautybranding.design' : 
                       project.id === 'branding_flyers' ? 'nexorabranding.design' :
                       project.id === 'ai_video' ? 'nexoravideo.ai' :
                       `${project.id === 'nexorafit' ? 'nexorafitness' : project.id}.com`}
                    </div>
                    <div className="w-2" />
                  </div>
                  
                  {/* Inner actual website image rendering */}
                  <div className={`flex-1 w-full rounded-b-2xl overflow-hidden relative shadow-inner ${project.mockupBg}`} id={`browser-content-${project.id}`}>
                    {project.image.endsWith('.mp4') ? (
                      <LazyVideo 
                        src={project.image} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        onMouseEnter={(e) => { e.currentTarget.muted = false; }}
                        onMouseLeave={(e) => { e.currentTarget.muted = true; }}
                      />
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        width={1200}
                        height={1040}
                        className="mockup-scroll-img"
                        id={`project-img-${project.id}`}
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>
                </div>

                {/* Description Content and tech stacks */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between" id={`project-details-${project.id}`}>
                  <div className="flex flex-col items-start text-left">
                    
                    {/* Category Badge */}
                    <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-[11px] font-semibold tracking-wide uppercase mb-4 ${project.categoryTheme}`}>
                      {project.categoryIcon}
                      {project.category}
                    </span>
                    
                    {/* Title */}
                    <div className="flex items-center justify-between w-full mb-3">
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 group-hover:text-brand-violet transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      {project.liveLink && (
                        <a 
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 border border-slate-200 hover:border-brand-violet hover:bg-brand-violet/5 hover:text-brand-violet transition-all duration-300 text-slate-600 text-xs px-3.5 py-2 font-sans font-semibold rounded-xl group-hover:shadow-sm"
                          aria-label={`Visit live site of ${project.title}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Site
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                    
                    {/* Description Paragraph */}
                    <p className="font-sans text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>

        {/* View All Interactive Case Studies CTA */}
        {setView && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mt-16"
            id="featured-projects-view-all-container"
          >
            <button
              onClick={() => {
                setView('portfolio');
                window.scrollTo({ top: 0, behavior: 'instant' });
                if ((window as any).lenis) {
                  (window as any).lenis.scrollTo(0);
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-4.5 bg-white hover:bg-brand-violet/5 border border-slate-200 hover:border-brand-violet rounded-2xl text-slate-800 hover:text-brand-violet font-sans font-bold text-sm sm:text-base transition-all duration-300 shadow-sm cursor-pointer hover:shadow-lg hover:shadow-brand-violet/10 hover:scale-[1.02] active:scale-[0.98]"
              id="featured-projects-view-all-btn"
            >
              Explore Full Case Studies & Live Telemetry
              <ArrowUpRight className="w-4.5 h-4.5 stroke-[2.5]" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
