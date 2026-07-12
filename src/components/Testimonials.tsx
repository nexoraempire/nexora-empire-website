import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Users, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Globe
} from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  location: string;
  flag: string;
  photo: string;
  rating: number;
  headline: string;
  quote: React.ReactNode;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Grace Lesly",
    role: "CEO",
    company: "ThinkPros Bookkeeping",
    location: "USA",
    flag: "🇺🇸",
    photo: "/assets/images/client_lesly_grace.webp",
    rating: 5,
    headline: "Nexora Empire exceeded our expectations.",
    quote: <span>They built a <span className="font-semibold text-slate-800">fast, secure, and visually stunning website</span> that perfectly represents our brand. The team was professional, responsive, and delivered on time. Their solutions have helped us <span className="font-semibold text-slate-800">improve our online presence</span> and <span className="font-semibold text-slate-800">attract more clients</span>.</span>
  },
  {
    id: 2,
    name: "jordan",
    role: "Full-Stack Developer",
    location: "Russia",
    flag: "RU",
    photo: "/assets/images/jordan.webp",
    rating: 5,
    headline: "Professionalism and unmatched code quality.",
    quote: <span>Collaborating with the Nexora development team was an absolute pleasure. Their professionalism, <span className="font-semibold text-slate-800">strict adherence to high code quality</span>, and exceptional teamwork stood out from day one. They engineer <span className="font-semibold text-slate-800">clean, scalable solutions</span> with absolute precision.</span>
  },
  {
    id: 3,
    name: "Ambe Blessing",
    role: "AI Video Creation Graduate",
    location: "Cameroon",
    flag: "🇨🇲",
    photo: "/assets/images/student_blessing.webp",
    rating: 5,
    headline: "Gained incredible confidence and video skills.",
    quote: <span>Completing Nexora Empire's AI Video Creation Training was a turning point for me. I went from having zero video skills to actively <span className="font-semibold text-slate-800">creating and posting high-quality videos</span>. The training was incredibly practical, giving me the <span className="font-semibold text-slate-800">confidence and tools</span> to share my voice.</span>
  },
  {
    id: 4,
    name: "Mansah",
    role: "Founder & CEO",
    company: "Soluty Agency",
    location: "Cameroon",
    flag: "🇨🇲",
    photo: "/assets/images/mansha.webp",
    rating: 5,
    headline: "Earning steady income from freelance projects.",
    quote: <span>Nexora Empire is a direct reflection of <span className="font-semibold text-slate-800">true teamwork, professionalism, and consistency</span>. As an entrepreneur, I've seen how difficult it is to build something that lasts, but this team is led by people who <span className="font-semibold text-slate-800">don't give up when challenges arise</span>. If you're looking for a <span className="font-semibold text-slate-800">reliable digital agency</span> that genuinely delivers on its promises, Nexora Empire is one you can trust.</span>
  },
  {
    id: 5,
    name: "Manas",
    role: "Web & Mobile App Developer",
    location: "Cameroon",
    flag: "🇨🇲",
    photo: "/assets/images/photo_1_2026-07-12_09-29-53.jpg",
    rating: 5,
    headline: "Unmatched developer confidence and structure.",
    quote: <span>I started with the <span className="font-semibold text-slate-800">Web Development course</span> to master full-stack engineering, and then immediately completed the <span className="font-semibold text-slate-800">Mobile App Development course</span>. Building real-world commercial platforms under expert mentors gave me unmatched developer confidence!</span>
  },
  {
    id: 6,
    name: "Tenyiyim Bright",
    role: "AI Video Creation Expert",
    location: "Cameroon",
    flag: "🇨🇲",
    photo: "/assets/images/bright.webp",
    rating: 5,
    headline: "Offered the opportunity to join the team.",
    quote: <span>Taking the <span className="font-semibold text-slate-800">Video Creation with AI course</span> completely upgraded my skillset. Thanks to my outstanding performance during the training and internship, <span className="font-semibold text-slate-800">I was offered the opportunity to join the Nexora team full-time</span> as a video editor!</span>
  },
  {
    id: 7,
    name: "Mbekenyui Favor",
    role: "Graphic Designer",
    location: "Cameroon",
    flag: "🇨🇲",
    photo: "/assets/images/favor.png",
    rating: 5,
    headline: "From student internship to a full-time career.",
    quote: <span>Enrolling in the <span className="font-semibold text-slate-800">Graphic Design course</span> was the turning point in my career. Because of my high-quality layout submissions and strong portfolio, <span className="font-semibold text-slate-800">I was hired full-time by Nexora Empire</span> directly after completing my internship!</span>
  }
];

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    icon: Briefcase,
    lightBg: "bg-[#eef2ff]"
  },
  {
    value: "20+",
    label: "Clients Served",
    icon: Users,
    lightBg: "bg-[#faf5ff]"
  },
  {
    value: "100%",
    label: "Commitment to Quality",
    icon: ShieldCheck,
    lightBg: "bg-[#f0fdf4]"
  },
  {
    value: "5+",
    label: "Service Areas",
    icon: Globe,
    lightBg: "bg-[#eff6ff]"
  }
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8500);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[activeIndex];
  const nextIndex1 = (activeIndex + 1) % testimonials.length;
  const nextIndex2 = (activeIndex + 2) % testimonials.length;

  const currentNext1 = testimonials[nextIndex1];
  const currentNext2 = testimonials[nextIndex2];

  // Slide variants for active testimonial transitions
  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -50 : 50,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }
    })
  };

  return (
    <section 
      id="testimonials" 
      className="relative w-full py-24 px-6 md:px-12 lg:px-16 bg-[#f8faff] overflow-hidden"
    >
      {/* Decorative radial gradients matching SaaS design language */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-indigo-100/40 blur-[130px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-purple-100/30 blur-[130px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* HEADER CONTAINER */}
        <div className="relative w-full mb-16 flex flex-col items-center text-center">
          
          {/* Centered Badge with Blue Circle */}
          <div className="inline-flex items-center gap-2 mb-4" id="testimonials-badge">
            <span className="w-2 h-2 rounded-full bg-[#1f39c4]" />
            <span className="text-[#1f39c4] text-xs font-mono font-extrabold uppercase tracking-[0.25em]">
              Client Feedback
            </span>
          </div>
          
          {/* Centered Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight mt-6 mb-6 leading-none max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto" id="testimonials-heading">
            Results That Speak for <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Themselves</span>
          </h2>
          
          {/* Centered Description */}
          <p className="text-sm sm:text-base md:text-md text-slate-500 max-w-3xl mx-auto leading-relaxed font-normal" id="testimonials-description">
            We're proud to help businesses and individuals launch, grow, and strengthen their digital presence through technology, design, and innovation.
          </p>

          {/* Floating Satisfaction Card (Exact match of "Average Client Satisfaction 98%") */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-8 lg:mt-0 lg:absolute lg:top-1 lg:right-0 bg-[#f1f3fe]/90 backdrop-blur-md border border-[#dce2ff] py-4 px-6 rounded-2xl flex items-center gap-4 shadow-[0_8px_30px_rgba(31,57,196,0.03)]"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1f39c4] to-[#8b1dca] flex items-center justify-center text-white shrink-0 shadow-md">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div className="text-left leading-tight">
              <div className="text-[10px] text-slate-500 font-mono font-extrabold uppercase tracking-wider">Average Client Satisfaction</div>
              <div className="text-3xl font-display font-black text-[#1f39c4] mt-1">98%</div>
            </div>
          </motion.div>

        </div>

        {/* MAIN ROW GRAPHICS DISPLAY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* COLUMN 1: LEFT SIDE STATS PANELS */}
          <div className="lg:col-span-4 flex flex-col gap-5 justify-between">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group flex items-center gap-5 bg-white border border-slate-100 p-6 rounded-2xl shadow-[0_10px_35px_rgba(31,57,196,0.02)] hover:shadow-[0_15px_45px_rgba(31,57,196,0.05)] hover:border-slate-200/80 transition-all duration-300 text-left relative overflow-hidden"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${stat.lightBg} transition-transform duration-300 group-hover:scale-105`}>
                    <IconComponent className="w-6 h-6 text-[#1f39c4]" />
                  </div>
                  <div>
                    <div className="font-display text-2xl lg:text-3xl font-black text-[#1f39c4] tracking-tight leading-none">
                      {stat.value}
                    </div>
                    <div className="font-sans text-xs md:text-sm text-slate-500 font-semibold mt-1.5">
                      {stat.label}
                    </div>
                  </div>
                  {/* Subtle hover accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#1f39c4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </div>

          {/* COLUMN 2: RIGHT SIDE TESTIMONIALS 3D CARD STACK */}
          <div className="lg:col-span-8 flex flex-col gap-6 justify-between overflow-visible">
            
            {/* The outer container leaves right padding for peeking cards on large screens */}
            <div className="relative min-h-[500px] sm:min-h-[440px] md:min-h-[420px] lg:min-h-[380px] w-full pr-0 lg:pr-14 overflow-visible flex items-stretch">
              
              {/* CARD 3 (Deepest Background Card, peeking on far right) */}
              <div 
                className="absolute inset-y-0 right-0 w-full z-10 opacity-30 scale-[0.92] translate-x-12 bg-white border border-slate-100/60 rounded-[32px] shadow-[0_8px_30px_rgba(31,57,196,0.015)] pointer-events-none select-none hidden lg:flex items-stretch overflow-hidden"
                style={{ transformOrigin: 'right center' }}
              >
                {/* Visual filler content peeking */}
                <div className="w-full flex p-10 items-center gap-8 text-left">
                  <div className="w-[38%] rounded-2xl bg-slate-100 h-full shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[#1f39c4]/5 text-6xl leading-none mb-4 font-serif">“</div>
                    <div className="h-4 bg-slate-50 rounded w-3/4 mb-2" />
                    <div className="h-4 bg-slate-50 rounded w-1/2" />
                  </div>
                </div>
              </div>

              {/* CARD 2 (Middle Background Card, peeking on mid right) */}
              <div 
                className="absolute inset-y-0 right-0 w-full z-20 opacity-70 scale-[0.96] translate-x-6 bg-white border border-slate-100/80 rounded-[32px] shadow-[0_12px_40px_rgba(31,57,196,0.03)] pointer-events-none select-none hidden lg:flex items-stretch overflow-hidden"
                style={{ transformOrigin: 'right center' }}
              >
                {/* Visual content peeking */}
                <div className="w-full flex p-10 items-center gap-8 text-left">
                  <div className="w-[38%] rounded-2xl overflow-hidden h-full shrink-0 bg-slate-50">
                    <img 
                      src={currentNext1.photo} 
                      alt="" 
                      className="w-full h-full object-cover opacity-15 blur-[1px]"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-[#1f39c4]/10 text-6xl leading-none mb-2 font-serif">“</div>
                      <h3 className="font-display text-lg font-bold text-slate-900/60 leading-snug line-clamp-1 mb-2">
                        {currentNext1.headline}
                      </h3>
                      <p className="font-sans text-slate-600 text-xs line-clamp-2 leading-relaxed">
                        {currentNext1.quote}
                      </p>
                    </div>
                    <div className="border-t border-slate-100/50 pt-4 mt-4 flex items-center justify-between opacity-40">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-100" />
                        <div className="h-3 bg-slate-50 rounded w-16" />
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-slate-200 text-slate-200" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 1 (Active Front Testimonial Card with sliding transition) */}
              <div className="w-full relative z-30 bg-white border border-slate-100 rounded-[32px] shadow-[0_20px_50px_rgba(31,57,196,0.04)] hover:shadow-[0_25px_60px_rgba(31,57,196,0.07)] transition-all duration-500 overflow-hidden flex items-stretch">
                
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={current.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full min-w-0 flex flex-col md:flex-row items-stretch p-6 sm:p-8 md:p-10 lg:p-11 gap-8 md:gap-10 text-left"
                  >
                    
                    {/* Left Side: Client Portrait Photo */}
                    <div className="w-full md:w-[38%] aspect-[4/5] rounded-2xl overflow-hidden shrink-0 relative bg-slate-50 shadow-inner">
                      <img 
                        src={current.photo} 
                        alt={current.name} 
                        className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      {/* Dark overlay gradient on mobile */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent md:hidden" />
                      <div className="absolute bottom-4 left-4 md:hidden text-white drop-shadow-md z-10 text-left">
                        <span className="font-display font-extrabold text-base leading-tight block">{current.name}</span>
                        <span className="text-[10px] text-white/80 font-medium mt-0.5">{current.role}</span>
                      </div>
                    </div>

                    {/* Right Side: Copy Content */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between relative bg-white">
                      
                      {/* Giant Double Quote */}
                      <div className="text-[#1f39c4]/10 select-none absolute -top-3 right-0 font-serif text-[100px] leading-none pointer-events-none">
                        “
                      </div>

                      <div className="flex flex-col relative z-10">
                        {/* Double Quote Mini Icon Indicator */}
                        <span className="text-[#1f39c4] font-serif text-[60px] leading-none -mt-4 select-none">“</span>

                        {/* Title Headline - STRICTLY ON A SINGLE LINE with responsive sizing, padding to avoid overlaps */}
                        <h3 className="font-display text-base sm:text-lg lg:text-[21px] font-extrabold text-[#1f39c4] tracking-tight leading-snug whitespace-nowrap truncate mb-3 pr-8">
                          {current.headline}
                        </h3>

                        {/* Quote Body Text */}
                        <p className="font-sans text-slate-600 text-xs sm:text-[13.5px] lg:text-[14.5px] leading-relaxed font-normal italic pr-2">
                          “{current.quote}”
                        </p>
                      </div>

                      {/* Footer Profile Row (Flag & Country directly below Name & Description next to Avatar, Stars on Far Right) */}
                      <div className="border-t border-slate-100 pt-5 mt-6 flex items-center justify-between z-10">
                        
                        <div className="flex items-center gap-3">
                          {/* Circular Avatar */}
                          <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-100 shadow-sm shrink-0">
                            <img 
                              src={current.photo} 
                              alt={current.name} 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          
                          {/* Profile Details with Country Flag below Name and Title */}
                          <div className="flex flex-col text-left">
                            <h4 className="font-display font-extrabold text-sm text-slate-900 leading-tight">
                              {current.name}
                            </h4>
                            <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                              {current.role} {current.company && `at ${current.company}`}
                            </p>
                            
                            {/* Country Flag Capsule located DIRECTLY below name & description */}
                            <div className="flex items-center gap-1.5 mt-1.5">
                              <span className="text-sm leading-none shrink-0">{current.flag}</span>
                              <span className="text-[10px] text-slate-600 font-bold tracking-wider uppercase">{current.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Rating Stars on the Far Right */}
                        <div className="flex gap-0.5 shrink-0 items-center">
                          {[...Array(current.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                      </div>

                    </div>

                  </motion.div>
                </AnimatePresence>

              </div>

            </div>

            {/* CAROUSEL CONTROLS BAR */}
            <div className="flex items-center justify-between px-2 w-full pr-0 lg:pr-14 mt-2">
              
              {/* Dots Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? 'right' : 'left');
                      setActiveIndex(index);
                    }}
                    className="w-6 h-6 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full cursor-pointer"
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    <span className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'w-7 bg-gradient-to-r from-[#1f39c4] to-[#8b1dca]' 
                        : 'w-1.5 bg-slate-200'
                    }`} />
                  </button>
                ))}
              </div>

              {/* Action Circle Chevrons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-[#1f39c4] hover:border-[#1f39c4]/30 hover:shadow-[0_4px_12px_rgba(31,57,196,0.08)] flex items-center justify-center transition-all duration-200 active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-[#e2e8f0] bg-white text-slate-600 hover:text-[#1f39c4] hover:border-[#1f39c4]/30 hover:shadow-[0_4px_12px_rgba(31,57,196,0.08)] flex items-center justify-center transition-all duration-200 active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM ACTION CTA BAR */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white border border-slate-100 px-6 py-4 rounded-2xl shadow-[0_15px_35px_rgba(31,57,196,0.03)]">
            <span className="font-sans text-slate-600 text-sm font-medium">Ready to achieve remarkable results for your project?</span>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactEl = document.getElementById('contact');
                if (contactEl) {
                  if ((window as any).lenis) {
                    (window as any).lenis.scrollTo(contactEl, { offset: -90 });
                  } else {
                    contactEl.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  // Fallback to whatsapp if no contact section exists
                  window.open("https://wa.me/237677079559", "_blank");
                }
              }}
              className="group relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#1f39c4] to-[#8b1dca] text-white font-sans text-xs tracking-wide font-semibold shadow-[0_4px_15px_rgba(31,57,196,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(31,57,196,0.35)] active:scale-[0.98] flex items-center gap-1"
            >
              <span className="relative z-10 flex items-center gap-1 text-white">
                Work With Nexora Empire
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
