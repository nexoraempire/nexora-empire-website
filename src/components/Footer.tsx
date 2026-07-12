import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';

interface FooterProps {
  view?: 'home' | 'about-us' | 'portfolio' | 'pricing' | 'training-internship' | 'contact' | 'web-dev' | 'mobile-dev' | 'branding-design' | 'seo-growth' | 'ai-video' | 'social-media-management';
  setView?: (view?: 'home' | 'about-us' | 'portfolio' | 'pricing' | 'training-internship' | 'contact' | 'web-dev' | 'mobile-dev' | 'branding-design' | 'seo-growth' | 'ai-video' | 'social-media-management') => void;
}

export const Footer: React.FC<FooterProps> = ({ view, setView }) => {
  // Smooth scroll helper
  const handleScroll = (id: string) => {
    const targetId = (id === 'portfolio' || id === 'projects') ? 'work' : id;

    if (id === 'social-media-management') {
      setView?.('social-media-management');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (id === 'web-dev') {
      setView?.('web-dev');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (id === 'mobile-dev') {
      setView?.('mobile-dev');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (id === 'branding-design') {
      setView?.('branding-design');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (id === 'seo-growth') {
      setView?.('seo-growth');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (id === 'ai-video') {
      setView?.('ai-video');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (id === 'academy') {
      setView?.('training-internship');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (id === 'contact') {
      setView?.('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (targetId === 'about') {
      setView?.('about-us');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (targetId === 'services') {
      setView?.('home');
      setTimeout(() => {
        const element = document.getElementById('services');
        if (element) {
          if ((window as any).lenis) {
            (window as any).lenis.scrollTo(element, { offset: -90 });
          } else {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100);
      return;
    }

    if (id === 'portfolio') {
      setView?.('portfolio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (id === 'pricing') {
      setView?.('pricing');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (view !== 'home') {
      setView?.('home');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          if ((window as any).lenis) {
            (window as any).lenis.scrollTo(el, { offset: -90 });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 80);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(el, { offset: -90 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Social media icon SVGs
  const socialLinks = [
    {
      name: 'X',
      url: 'https://x.com',
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com',
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    }
  ];

  // Company list links
  const companyLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Training & Internship', id: 'training-internship' },
    { name: 'Contact Us', id: 'contact' }
  ];

  // Services list links
  const serviceLinks = [
    { name: 'Website Development', id: 'web-dev' },
    { name: 'Mobile App Development', id: 'mobile-dev' },
    { name: 'Branding & Graphic Design', id: 'branding-design' },
    { name: 'Social Media Management', id: 'social-media-management' },
    { name: 'SEO & Digital Growth', id: 'seo-growth' },
    { name: 'AI Video Creation & Editing', id: 'ai-video' },
    { name: 'Training Programs', id: 'training-internship' }
  ];

  // Resources list links
  const resourceLinks = [
    { name: 'Featured Projects', id: 'projects' },
    { name: 'Technology Stack', id: 'tech-stack' },
    { name: 'Client Testimonials', id: 'testimonials' },
    { name: 'Pricing', id: 'pricing' }
  ];

  return (
    <footer 
      id="footer" 
      className="relative w-full bg-[#020205] text-white pt-24 pb-0 overflow-hidden border-t border-indigo-950/20"
    >
      {/* Decorative cosmic background features matching the Hero section */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:32px_32px]" />
        {/* Soft glowing trail waves */}
        <div className="absolute bottom-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-violet/10 blur-[130px] animate-cosmic-1" />
        <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-brand-electric/5 blur-[120px]" />
        
        {/* Large "N" Logo watermark on upper-right screen */}
        <div className="absolute right-[5%] top-[10%] opacity-[0.03] text-brand-violet shrink-0 select-none hidden lg:block">
          <BrandLogo size={420} />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* TOP FIVE-COLUMN FOOTER ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 items-start text-left">
          
          {/* COLUMN 1: BRAND BIO (Grid span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            {/* Header Brand Logo */}
            <button 
              onClick={() => handleScroll('home')} 
              className="flex items-center gap-3.5 mb-6 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-xl px-2 py-1 active:scale-[0.98] transition-transform"
            >
              <BrandLogo size={42} />
              <span className="font-display text-xl tracking-[0.18em] font-black uppercase text-white">
                Nexora <span className="text-brand-electric text-opacity-90">Empire</span>
              </span>
            </button>

            {/* Slogan with colorful gradient and thin underline */}
            <div className="relative mb-5">
              <h3 className="font-display text-2xl font-extrabold text-white leading-tight tracking-tight">
                Powering the Future <br />
                of <span className="bg-gradient-to-r from-brand-electric via-[#3b82f6] to-brand-violet bg-clip-text text-transparent">Innovation</span>
              </h3>
              {/* Sleek Underline Indicator */}
              <div className="w-24 h-[3px] bg-gradient-to-r from-brand-electric via-[#3b82f6] to-brand-violet rounded-full mt-3.5" />
            </div>

            {/* Paragraph Bio */}
            <p className="font-sans text-gray-400 text-xs sm:text-[13px] leading-relaxed mb-6 font-normal">
              Building websites, mobile applications, branding systems, AI solutions, video content, and digital experiences that help businesses grow.
            </p>

            {/* Social Links Row */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-indigo-950/30 border border-indigo-500/10 hover:border-brand-electric hover:text-brand-electric text-gray-400 hover:shadow-[0_0_15px_rgba(0,190,250,0.25)] flex items-center justify-center transition-all duration-300 hover:scale-[1.08] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  aria-label={`Connect with Nexora Empire on ${social.name}`}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: COMPANY LINKS (Grid span 2) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="font-display text-xs font-black tracking-[0.2em] text-white uppercase mb-4 relative">
              Company
              <div className="absolute -bottom-1.5 left-0 w-8 h-[2px] bg-gradient-to-r from-[#1f39c4] to-[#8b1dca]" />
            </h4>
            <ul className="space-y-3.5 mt-4">
              {companyLinks.map((link) => (
                <li key={link.name} className="flex items-center">
                  <span className="text-[#1f39c4] text-sm mr-2 select-none">•</span>
                  <button
                    onClick={() => handleScroll(link.id)}
                    className="font-sans text-[13px] text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1 text-left flex items-center gap-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded px-1 active:scale-[0.98]"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SERVICES LINKS (Grid span 2) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="font-display text-xs font-black tracking-[0.2em] text-white uppercase mb-4 relative">
              Services
              <div className="absolute -bottom-1.5 left-0 w-8 h-[2px] bg-gradient-to-r from-[#1f39c4] to-[#8b1dca]" />
            </h4>
            <ul className="space-y-3.5 mt-4">
              {serviceLinks.map((link) => (
                <li key={link.name} className="flex items-start">
                  <span className="text-[#1f39c4] text-sm mr-2 select-none mt-0.5">•</span>
                  <button
                    onClick={() => handleScroll(link.id)}
                    className="font-sans text-[13px] text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1 text-left flex items-center gap-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded px-1 active:scale-[0.98]"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: RESOURCES LINKS (Grid span 2) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="font-display text-xs font-black tracking-[0.2em] text-white uppercase mb-4 relative">
              Resources
              <div className="absolute -bottom-1.5 left-0 w-8 h-[2px] bg-gradient-to-r from-[#1f39c4] to-[#8b1dca]" />
            </h4>
            <ul className="space-y-3.5 mt-4">
              {resourceLinks.map((link) => (
                <li key={link.name} className="flex items-center">
                  <span className="text-[#1f39c4] text-sm mr-2 select-none">•</span>
                  <button
                    onClick={() => handleScroll(link.id)}
                    className="font-sans text-[13px] text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1 text-left flex items-center gap-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded px-1 active:scale-[0.98]"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 5: CONTACT INFORMATION (Grid span 2) */}
          <div className="lg:col-span-2 flex flex-col items-start w-full">
            <h4 className="font-display text-xs font-black tracking-[0.2em] text-white uppercase mb-4 relative">
              Contact
              <div className="absolute -bottom-1.5 left-0 w-8 h-[2px] bg-gradient-to-r from-[#1f39c4] to-[#8b1dca]" />
            </h4>
            
            {/* Contact Cards Grid Container */}
            <div className="space-y-3 mt-4 w-full">
              
              {/* Location Card */}
              <div className="group flex items-center gap-3 bg-[#0a0a16]/40 border border-indigo-500/5 p-3 rounded-xl transition-all duration-300 hover:border-indigo-500/15">
                <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-500/20 flex items-center justify-center text-brand-electric group-hover:scale-105 transition-transform">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-gray-500 font-mono font-bold uppercase tracking-wider">Location</div>
                  <div className="text-[11.5px] text-gray-300 font-medium font-sans mt-0.5">Before slaughterhouse, Buea Town</div>
                </div>
              </div>

              {/* Phone Card (WhatsApp Action) */}
              <a 
                href="https://wa.me/237677079559" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-3 bg-[#0a0a16]/40 border border-indigo-500/5 p-3 rounded-xl transition-all duration-300 hover:border-indigo-500/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98] block"
              >
                {/* Custom glowing green/blue whatsapp circular frame */}
                <div className="w-8 h-8 rounded-lg bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-gray-500 font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                    WhatsApp 
                    <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-[11.5px] text-gray-300 font-medium font-sans mt-0.5">+237 677 079 559</div>
                </div>
              </a>

              {/* Hours Card */}
              <div className="group flex items-center gap-3 bg-[#0a0a16]/40 border border-indigo-500/5 p-3 rounded-xl transition-all duration-300 hover:border-indigo-500/15">
                <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-500/20 flex items-center justify-center text-brand-electric group-hover:scale-105 transition-transform">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-gray-500 font-mono font-bold uppercase tracking-wider">Business Hours</div>
                  <div className="text-[11.5px] text-gray-300 font-medium font-sans mt-0.5 leading-tight">
                    Mon - Sat: 9AM - 6PM <span className="text-[9.5px] text-gray-500">(WAT)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* GEOMETRIC SLANTED COPYRIGHT BAR PANEL (Exactly matching reference design layout & styles) */}
        <div className="relative w-full overflow-visible pb-0 mt-20">
          
          {/* Slanted container background wrapper with clip-path */}
          <div 
            className="w-full bg-white text-slate-900 px-6 sm:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4 select-none relative z-10 border border-slate-200/40 shadow-2xl"
            style={{
              clipPath: 'polygon(6% 0%, 94% 0%, 100% 100%, 0% 100%)', // Angled trapezoidal layout matching reference
            }}
          >
            {/* Left Portion: Brand Title with Icon */}
            <button 
              onClick={() => handleScroll('home')} 
              className="flex items-center gap-2 cursor-pointer shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-lg px-2 active:scale-95"
            >
              {/* Render small dark version of nexora logo for high contrast */}
              <BrandLogo size={24} className="brightness-[0.25]" />
              <span className="font-display text-sm tracking-[0.16em] font-black uppercase text-slate-950">
                Nexora <span className="text-[#1f39c4]">Empire</span>
              </span>
            </button>

            {/* Middle Portion: Copyright notice */}
            <div className="font-sans text-xs text-slate-600 font-medium">
              © 2026 <span className="font-semibold text-slate-900">Nexora Empire</span>. All Rights Reserved.
            </div>

            {/* Right Portion: Policy documentation links */}
            <div className="flex items-center gap-4 text-xs font-sans text-slate-600 font-medium">
              <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-slate-950 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded px-1 active:scale-95">Terms of Use</a>
              <span className="text-slate-300 font-bold select-none">•</span>
              <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-slate-950 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded px-1 active:scale-95">Privacy Policy</a>
            </div>

          </div>

        </div>

      </div>

      <motion.a
        href="https://wa.me/237677079559"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1, rotate: 4 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] z-50 transition-colors cursor-pointer group"
        aria-label="Chat with Nexora Empire on WhatsApp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>

    </footer>
  );
};
