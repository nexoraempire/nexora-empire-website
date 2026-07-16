'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Github, 
  Phone, 
  MessageSquare, 
  Compass, 
  ExternalLink, 
  Copy, 
  Check, 
  Mail, 
  ArrowUpRight, 
  Send,
  Sparkles,
  Smartphone,
  Video,
  Linkedin,
  Facebook,
  Instagram
} from 'lucide-react';
import Image from 'next/image';
import nexoraLogo from '../../src/assets/images/nexora-empire-logo.png';

// Social links list
const quickLinks = [
  {
    icon: <Globe className="w-5 h-5 text-[#1F39C4]" />,
    title: "Nexora Empire Website",
    desc: "Visit our official website for digital services & solutions.",
    url: "https://www.nexoraempire.com",
    badge: "Official",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    icon: <Compass className="w-5 h-5 text-[#8B1DCA]" />,
    title: "DevLili Portfolio",
    desc: "Explore our software engineering portfolio and case studies.",
    url: "https://devlili.com",
    badge: "Creator",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    icon: <Github className="w-5 h-5 text-white" />,
    title: "GitHub Organization",
    desc: "Browse our open-source repositories and engineering tools.",
    url: "https://github.com/nexoraempire",
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-[#25D366]" />,
    title: "WhatsApp Chat",
    desc: "Start a real-time conversation directly with our engineering desk.",
    url: "https://wa.me/237677079559",
    badge: "Fast Reply",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-[#FDDC00]" />,
    title: "WhatsApp Community",
    desc: "Join our active tech community for code sharing and jobs.",
    url: "https://chat.whatsapp.com/HWEYrEWu372LLSYSkVOs9J",
  },
  {
    icon: <Send className="w-5 h-5 text-sky-400" />,
    title: "WhatsApp Broadcast Channel",
    desc: "Follow our broadcast channel for tech updates and tutorials.",
    url: "https://whatsapp.com/channel/0029Vb6zcHtGufItCndVcg0u",
  }
];

const brands = [
  {
    name: "Nexora Empire",
    icon: <Smartphone className="w-6 h-6 text-[#1F39C4]" />,
    desc: "Software-first digital company helping businesses grow through high-performance software, custom AI systems, and search optimization.",
    socials: [
      { name: "TikTok", url: "https://www.tiktok.com/@nexorae_hq?_r=1&_t=ZS-984yUgbdWsf", icon: <span className="text-xs font-bold font-mono">T</span> },
      { name: "LinkedIn", url: "https://www.linkedin.com/company/110421026/", icon: <Linkedin className="w-4 h-4" /> },
      { name: "Facebook", url: "https://www.facebook.com/share/1AjZ7Lo9Ww/", icon: <Facebook className="w-4 h-4" /> },
      { name: "Instagram", url: "#", icon: <Instagram className="w-4 h-4" />, placeholder: true }
    ],
    primaryLink: "https://www.nexoraempire.com"
  },
  {
    name: "Nexora Studio",
    icon: <Sparkles className="w-6 h-6 text-[#8B1DCA]" />,
    desc: "Creative agency specialized in vector visual identities, responsive UI/UX system layouts, and high-conversion brand guidelines.",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/showcase/116071004/", icon: <Linkedin className="w-4 h-4" /> },
      { name: "TikTok", url: "https://www.tiktok.com/@nexorae_studio?_r=1&_t=ZS-984xklkYs5M", icon: <span className="text-xs font-bold font-mono">T</span> },
      { name: "Instagram", url: "https://www.instagram.com/nexorae_studio?igsh=MTFqZG14YXFreWx5dw==", icon: <Instagram className="w-4 h-4" /> },
      { name: "Facebook", url: "https://www.facebook.com/share/1BLqf6PAG9/", icon: <Facebook className="w-4 h-4" /> }
    ],
    primaryLink: "https://www.nexoraempire.com/branding-design"
  },
  {
    name: "Nexora Motion",
    icon: <Video className="w-6 h-6 text-[#FDDC00]" />,
    desc: "AI-accelerated motion media studio producing premium commercials, custom digital avatars, explainers, and high-impact social video sequences.",
    socials: [
      { name: "LinkedIn", url: "#", icon: <Linkedin className="w-4 h-4" />, placeholder: true },
      { name: "TikTok", url: "https://www.tiktok.com/@nexora.motion?_r=1&_t=ZS-984bOu0IOur", icon: <span className="text-xs font-bold font-mono">T</span> },
      { name: "Instagram", url: "https://www.instagram.com/nexorae_motion?igsh=MXVnZGl5eG44MGlnbA==", icon: <Instagram className="w-4 h-4" /> },
      { name: "Facebook", url: "https://www.facebook.com/share/1JiAwi9sqW/", icon: <Facebook className="w-4 h-4" /> }
    ],
    primaryLink: "https://www.nexoraempire.com/ai-video"
  }
];

export default function ConnectPage() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#020205] text-slate-100 overflow-x-hidden font-sans select-none pb-20">
      
      {/* Background Glow System */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#1F39C4]/10 blur-[130px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#8B1DCA]/10 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 pt-20">
        
        {/* Profile Card Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-14"
        >
          {/* Logo Wrapper */}
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-indigo-500/20 p-1.5 bg-slate-900/60 shadow-[0_0_30px_rgba(99,102,241,0.2)] mb-5">
            <Image 
              src={nexoraLogo} 
              alt="Nexora Empire Logo" 
              className="w-full h-full object-contain rounded-full"
            />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none mb-3">
            Nexora Empire
          </h1>
          <p className="font-display text-sm font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-brand-electric via-[#3b82f6] to-[#8B1DCA] uppercase mb-4">
            Powering the Future of Innovation
          </p>

          <div className="flex flex-col items-center text-center max-w-xl mb-9">
            <p className="text-base sm:text-[17px] font-bold text-zinc-100 mb-4">
              A software-first digital company
            </p>
            <ul className="flex flex-col items-start gap-2.5 text-zinc-300 text-sm sm:text-[14.5px] bg-zinc-950/20 border border-zinc-900/30 p-4 sm:p-5 rounded-2xl w-full">
              <li className="flex items-start gap-2 text-left">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>High-converting, SEO-friendly websites</span>
              </li>
              <li className="flex items-start gap-2 text-left">
                <Check className="w-4 h-4 text-[#8B1DCA] shrink-0 mt-0.5" />
                <span>Apps • Branding • AI Solutions</span>
              </li>
              <li className="flex items-start gap-2 text-left">
                <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>Video creation with AI</span>
              </li>
              <li className="flex items-start gap-2 text-left">
                <Check className="w-4 h-4 text-[#FDDC00] shrink-0 mt-0.5" />
                <span>Social Media Management</span>
              </li>
              <li className="flex items-start gap-2 text-left">
                <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Graphic design</span>
              </li>
              <li className="flex items-start gap-2 text-left">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Training & Internship</span>
              </li>
            </ul>
            <p className="text-[13px] sm:text-sm font-bold text-zinc-400 tracking-wide mt-4">
              Connect to grow your business
            </p>
            <motion.span 
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-lg mt-2 block"
            >
              👇
            </motion.span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <a 
              href="https://www.nexoraempire.com"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#1F39C4] to-[#8B1DCA] text-white font-bold text-sm tracking-wide shadow-[0_4px_20px_rgba(99,102,241,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_25px_rgba(99,102,241,0.45)] active:scale-[0.98]"
            >
              Visit Our Website <ArrowUpRight className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/237677079559"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold text-sm tracking-wide transition-all duration-300 hover:bg-slate-800/80 hover:scale-[1.02] active:scale-[0.98]"
            >
              Chat on WhatsApp <MessageSquare className="w-4 h-4 text-[#25D366]" />
            </a>
          </div>
        </motion.div>

        {/* Quick Links Section */}
        <div className="mb-16">
          <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {quickLinks.map((link, idx) => (
              <motion.a 
                key={idx}
                href={link.url}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative flex items-center justify-between p-5 rounded-2xl bg-zinc-950/40 border border-zinc-900/60 backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-zinc-800 hover:bg-zinc-900/20 active:scale-[0.99] text-left"
              >
                <div className="flex items-center gap-4 min-w-0 pr-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-zinc-900 border border-zinc-800 shrink-0">
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-extrabold text-sm sm:text-base text-white truncate">
                        {link.title}
                      </span>
                      {link.badge && (
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${link.badgeColor}`}>
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-[13px] text-zinc-500 line-clamp-1 leading-normal">
                      {link.desc}
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-900/50 border border-zinc-800/80 flex items-center justify-center transition-all duration-300 group-hover:bg-indigo-600 group-hover:border-indigo-500 shrink-0">
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 transition-colors duration-300 group-hover:text-white" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Our Brands Section */}
        <div className="mb-16">
          <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">
            Our Brands
          </h2>
          <div className="grid grid-cols-1 gap-5">
            {brands.map((brand, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-zinc-950/40 border border-zinc-900/60 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                        {brand.icon}
                      </div>
                      <h3 className="font-display font-extrabold text-base sm:text-lg text-white">
                        {brand.name}
                      </h3>
                    </div>
                    <a 
                      href={brand.primaryLink}
                      className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                    >
                      Visit <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed mb-6 text-left">
                    {brand.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-zinc-900/80 pt-4 mt-2">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                    Follow Brand
                  </span>
                  <div className="flex items-center gap-2">
                    {brand.socials.map((soc, sIdx) => (
                      <a 
                        key={sIdx}
                        href={soc.url}
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${
                          soc.placeholder 
                            ? "border-zinc-900 bg-zinc-900/20 opacity-30 cursor-not-allowed" 
                            : "border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
                        }`}
                        title={soc.placeholder ? "Coming soon" : `${brand.name} on ${soc.name}`}
                        onClick={(e) => soc.placeholder && e.preventDefault()}
                      >
                        {soc.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Info Clipboard Section */}
        <div className="border-t border-zinc-900/80 pt-10">
          <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6 text-center">
            Official Directory
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Email Contact Card */}
            <div className="p-4 rounded-2xl bg-zinc-950/20 border border-zinc-900/40 text-center flex flex-col items-center justify-center">
              <Mail className="w-5 h-5 text-indigo-500 mb-2" />
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Email support</span>
              <button 
                onClick={() => handleCopy("nexoraempirehq@gmail.com", "Email copied")}
                className="font-mono text-xs text-white hover:text-indigo-400 flex items-center gap-1.5 transition-colors duration-200"
              >
                nexoraempirehq... <Copy className="w-3 h-3 text-zinc-400" />
              </button>
            </div>

            {/* Phone Contact Card */}
            <div className="p-4 rounded-2xl bg-zinc-950/20 border border-zinc-900/40 text-center flex flex-col items-center justify-center">
              <Phone className="w-5 h-5 text-emerald-500 mb-2" />
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">WhatsApp line</span>
              <button 
                onClick={() => handleCopy("+237677079559", "Phone copied")}
                className="font-mono text-xs text-white hover:text-emerald-400 flex items-center gap-1.5 transition-colors duration-200"
              >
                +237 677 079 559 <Copy className="w-3 h-3 text-zinc-400" />
              </button>
            </div>

            {/* Web Contact Card */}
            <div className="p-4 rounded-2xl bg-zinc-950/20 border border-zinc-900/40 text-center flex flex-col items-center justify-center">
              <Globe className="w-5 h-5 text-amber-500 mb-2" />
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Direct website</span>
              <a 
                href="https://www.nexoraempire.com"
                className="font-mono text-xs text-white hover:text-amber-400 flex items-center gap-1.5 transition-colors duration-200"
              >
                nexoraempire.com <ArrowUpRight className="w-3 h-3 text-zinc-400" />
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Copy Alert Toast */}
      <AnimatePresence>
        {copiedText && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-white shadow-2xl text-xs font-bold font-mono tracking-wide"
          >
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            {copiedText}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Floating Action Pulse WhatsApp button */}
      <a 
        href="https://wa.me/237677079559"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-110 active:scale-95"
        title="Direct Support"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <MessageSquare className="w-6 h-6 fill-current relative z-10" />
      </a>

    </div>
  );
}
