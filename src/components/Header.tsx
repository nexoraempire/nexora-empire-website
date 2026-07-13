import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BrandLogo } from './BrandLogo.tsx';
import { Globe, Smartphone, Palette, Cpu, TrendingUp, Video, GraduationCap, Share2 } from 'lucide-react';

const IconMap: Record<string, React.FC<any>> = {
  Globe,
  Smartphone,
  Palette,
  Cpu,
  TrendingUp,
  Video,
  GraduationCap,
  Share2
};

interface HeaderProps {
  view: 'home' | 'about-us' | 'portfolio' | 'pricing' | 'training-internship' | 'contact' | 'web-dev' | 'mobile-dev' | 'branding-design' | 'seo-growth' | 'ai-video' | 'social-media-management' | '404';
  setView: (view: 'home' | 'about-us' | 'portfolio' | 'pricing' | 'training-internship' | 'contact' | 'web-dev' | 'mobile-dev' | 'branding-design' | 'seo-growth' | 'ai-video' | 'social-media-management' | '404') => void;
}

export const Header: React.FC<HeaderProps> = ({ view, setView }) => {
  const [activeLink, setActiveLink] = useState(
    view === 'about-us' ? 'About' : (view === 'web-dev' || view === 'mobile-dev' || view === 'branding-design' || view === 'seo-growth' || view === 'ai-video' || view === 'social-media-management') ? 'Services' : view === 'portfolio' ? 'Portfolio' : view === 'pricing' ? 'Pricing' : view === 'training-internship' ? 'Training & Internship' : view === 'contact' ? 'Contact' : 'Home'
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  React.useEffect(() => {
    const lenis = (window as any).lenis;
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    }
    return () => {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    'Home',
    'About',
    'Services',
    'Portfolio',
    'Pricing',
    'Training & Internship',
    'Contact'
  ];

  const serviceOptions = [
    { label: 'Web Development', id: 'service-card-01', iconName: 'Globe' },
    { label: 'Mobile App Development', id: 'service-card-02', iconName: 'Smartphone' },
    { label: 'Branding & Graphic Design', id: 'service-card-03', iconName: 'Palette' },
    { label: 'Social Media Management', id: 'service-card-08', iconName: 'Share2' },
    { label: 'SEO & Digital Growth', id: 'service-card-06', iconName: 'TrendingUp' },
    { label: 'AI Video Production & Editing', id: 'service-card-05', iconName: 'Video' }
  ];

  const idMap: Record<string, string> = {
    'Home': 'home',
    'About': 'about',
    'Services': 'services',
    'Portfolio': 'work',
    'Pricing': 'pricing',
    'Training & Internship': 'training-internship',
    'Contact': 'contact'
  };

  const handleServiceClick = (serviceId: string, isAcademy: boolean) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    
    if (serviceId === 'service-card-01') {
      setView('web-dev');
      window.scrollTo({ top: 0, behavior: 'instant' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (serviceId === 'service-card-02') {
      setView('mobile-dev');
      window.scrollTo({ top: 0, behavior: 'instant' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (serviceId === 'service-card-03') {
      setView('branding-design');
      window.scrollTo({ top: 0, behavior: 'instant' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (serviceId === 'service-card-08') {
      setView('social-media-management');
      window.scrollTo({ top: 0, behavior: 'instant' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (serviceId === 'service-card-06') {
      setView('seo-growth');
      window.scrollTo({ top: 0, behavior: 'instant' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (serviceId === 'service-card-05') {
      setView('ai-video');
      window.scrollTo({ top: 0, behavior: 'instant' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (isAcademy) {
      setView('training-internship');
      window.scrollTo({ top: 0, behavior: 'instant' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    setView('home');
    setTimeout(() => {
      const element = document.getElementById('services');
      if (element) {
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(element, { offset: -90 });
        } else {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 150);
  };

  const handleScroll = (link: string) => {
    setActiveLink(link);
    if (link === 'About') {
      setView('about-us');
      window.scrollTo({ top: 0, behavior: 'instant' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (link === 'Services') {
      if (view !== 'home') {
        setView('home');
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
      } else {
        const element = document.getElementById('services');
        if (element) {
          if ((window as any).lenis) {
            (window as any).lenis.scrollTo(element, { offset: -90 });
          } else {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
      return;
    }

    if (link === 'Portfolio') {
      setView('portfolio');
      window.scrollTo({ top: 0, behavior: 'instant' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (link === 'Pricing') {
      setView('pricing');
      window.scrollTo({ top: 0, behavior: 'instant' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (link === 'Training & Internship') {
      setView('training-internship');
      window.scrollTo({ top: 0, behavior: 'instant' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (link === 'Contact') {
      setView('contact');
      window.scrollTo({ top: 0, behavior: 'instant' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
      return;
    }

    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        const targetId = idMap[link] || link.toLowerCase();
        const element = document.getElementById(targetId);
        if (element) {
          if ((window as any).lenis) {
            (window as any).lenis.scrollTo(element, { offset: -90 });
          } else {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 80);
    } else {
      const targetId = idMap[link] || link.toLowerCase();
      const element = document.getElementById(targetId);
      if (element) {
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(element, { offset: -90 });
        } else {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <header id="app-header" className="fixed top-0 left-0 w-full z-50 bg-brand-dark/30 backdrop-blur-xl border-b border-indigo-950/20 px-6 py-4 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo and Brand Name */}
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            handleScroll('Home');
          }}
          className="flex items-center gap-3 group transition-transform duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-lg px-2 py-1" 
          id="header-logo-link"
        >
          <BrandLogo size={46} />
          <div className="flex flex-col">
            <span className="font-display text-xl md:text-2xl font-black tracking-widest text-white leading-none">
              NEXORA
            </span>
            <span className="font-mono text-[10px] tracking-[0.25em] text-brand-electric font-bold uppercase mt-0.5 opacity-90 group-hover:text-white transition-colors duration-300">
              EMPIRE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
          {navLinks.map((link) => {
            const isCurrentActive = view === 'about-us' ? link === 'About' : (view === 'web-dev' || view === 'mobile-dev' || view === 'branding-design' || view === 'seo-growth' || view === 'ai-video') ? link === 'Services' : view === 'portfolio' ? link === 'Portfolio' : view === 'pricing' ? link === 'Pricing' : activeLink === link;
            
            if (link === 'Services') {
              return (
                <div
                  key={link}
                  className="relative group/services-dropdown py-1"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setServicesDropdownOpen(!servicesDropdownOpen);
                    }}
                    className="flex items-center gap-1.5 text-sm font-sans font-medium tracking-wide text-gray-300/90 hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-lg px-2 py-0.5 active:scale-95 cursor-pointer"
                  >
                    <span>{link}</span>
                    <span className="text-[9px] text-gray-400 transform group-hover/services-dropdown:rotate-180 transition-transform duration-300">
                      ▼
                    </span>
                    {isCurrentActive && (
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-electric shadow-[0_0_8px_rgba(0,190,250,0.8)]" />
                    )}
                  </button>

                  {/* Dropdown Card */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#05050c]/95 backdrop-blur-3xl border border-indigo-950/70 rounded-2xl shadow-2xl p-3 flex flex-col gap-1.5 transition-all duration-300 z-50 origin-top ${
                      servicesDropdownOpen
                        ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    {/* Transparent bridge to prevent mouseleave when moving to dropdown */}
                    <div className="absolute -top-3 left-0 right-0 h-3 bg-transparent pointer-events-auto" />

                    {serviceOptions.map((opt) => {
                      const IconComponent = IconMap[opt.iconName];
                      return (
                        <button
                          key={opt.label}
                          onClick={() => handleServiceClick(opt.id, false)}
                          className="w-full text-left px-4 py-2.5 rounded-xl font-sans text-xs font-semibold text-slate-300 hover:text-white hover:bg-indigo-950/40 border border-transparent hover:border-indigo-900/35 transition-all duration-200 cursor-pointer flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:border-transparent active:scale-[0.98]"
                        >
                          <div className="flex items-center gap-3">
                            {IconComponent && <IconComponent className="w-4 h-4 text-indigo-400 group-hover:text-brand-electric transition-colors duration-200" />}
                            <span className="tracking-wide">{opt.label}</span>
                          </div>
                          <span className="text-[10px] text-brand-electric opacity-0 group-hover:opacity-100 transform translate-x-[-4px] group-hover:translate-x-0 transition-all duration-200">
                            →
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <a
                key={link}
                href={`#${idMap[link] || link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link);
                }}
                className="relative text-sm font-sans font-medium tracking-wide text-gray-300/90 hover:text-white transition-colors duration-300 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-lg px-2 active:scale-95"
              >
                {link}
                {isCurrentActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-electric shadow-[0_0_8px_rgba(0,190,250,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden lg:block" id="header-action-container">
          <button
            id="start-project bg-btn"
            onClick={() => window.open('https://wa.me/237677079559?text=Hello%20Nexora%20Empire!%20I%20would%20like%20to%20start%20a%20project%20with%20you.%20I%20am%20interested%20in%20your%20digital%20solutions.', '_blank')}
            className="group relative px-6 py-2.5 rounded-full bg-indigo-950/20 text-white font-sans text-sm font-semibold tracking-wide border border-indigo-500/30 overflow-hidden transition-all duration-300 hover:border-brand-electric hover:shadow-[0_0_20px_rgba(0,190,250,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-1.5 group-hover:text-brand-electric transition-colors duration-300">
              Start a Project 
              <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </span>
            {/* Ambient hover gradient fill */}
            <span className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 to-brand-electric/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-white p-2 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric rounded-lg active:scale-95"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#020205]/95 backdrop-blur-2xl border-b border-indigo-950/40 p-6 flex flex-col gap-4 animate-fade-in max-h-[calc(100vh-80px)] overflow-y-auto" id="mobile-dropdown-menu" data-lenis-prevent>
          {navLinks.map((link) => {
            const isCurrentActive = view === 'about-us' ? link === 'About' : (view === 'web-dev' || view === 'mobile-dev' || view === 'branding-design' || view === 'seo-growth' || view === 'ai-video') ? link === 'Services' : view === 'portfolio' ? link === 'Portfolio' : view === 'pricing' ? link === 'Pricing' : view === 'training-internship' ? link === 'Training & Internship' : activeLink === link;
            
            if (link === 'Services') {
              return (
                <div key={link} className="flex flex-col border-b border-indigo-950/20">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`w-full text-base font-medium py-2 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric rounded-lg px-2 py-1 active:scale-[0.99] transition-all cursor-pointer ${
                      isCurrentActive ? 'text-brand-electric font-semibold' : 'text-gray-300'
                    }`}
                  >
                    <span>{link}</span>
                    <span className={`text-[10px] text-slate-500 transform transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  
                  {mobileServicesOpen && (
                    <div className="pl-4 py-2 flex flex-col gap-3 bg-indigo-950/10 rounded-xl my-2 border border-indigo-950/30">
                      {serviceOptions.map((opt) => {
                        const IconComponent = IconMap[opt.iconName];
                        return (
                          <button
                            key={opt.label}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              handleServiceClick(opt.id, false);
                            }}
                            className="w-full text-left py-2 text-xs font-semibold text-slate-400 hover:text-white transition-all cursor-pointer flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric rounded-lg px-2 active:scale-[0.98]"
                          >
                            {IconComponent && <IconComponent className="w-3.5 h-3.5 text-indigo-400 shrink-0" />}
                            <span>{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link}
                href={`#${idMap[link] || link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  handleScroll(link);
                }}
                className={`text-base font-medium py-2 border-b border-indigo-950/20 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric rounded-lg px-2 active:scale-[0.99] transition-all ${
                  isCurrentActive ? 'text-brand-electric' : 'text-gray-300'
                }`}
              >
                {link}
                {isCurrentActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-electric" />}
              </a>
            );
          })}
          <button
            className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-brand-violet to-indigo-600 text-white font-sans text-sm font-semibold tracking-wide shadow-lg hover:shadow-indigo-500/25 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 hover:brightness-110 active:scale-[0.98] transition-all duration-200"
            onClick={() => {
              setMobileMenuOpen(false);
              window.open('https://wa.me/237677079559?text=Hello%20Nexora%20Empire!%20I%20would%20like%20to%20start%20a%20project%20with%20you.%20I%20am%20interested%20in%20your%20digital%20solutions.', '_blank');
            }}
          >
            Start a Project ↗
          </button>
        </div>
      )}
    </header>
  );
};
