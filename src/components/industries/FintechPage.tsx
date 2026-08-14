'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight,
  ChevronDown, 
  CreditCard, 
  ShieldCheck, 
  TrendingUp, 
  Wallet, 
  Server, 
  Users, 
  Database,
  Building,
  CheckCircle2,
  Headphones
} from 'lucide-react';

interface FintechPageProps {
  setView?: (view: any) => void;
}

export const FintechPage: React.FC<FintechPageProps> = ({ setView }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    }
  }, []);

  const faqs = [
    {
      q: "What is fintech software development?",
      a: "Fintech software development involves creating applications, payment systems, digital wallets, and platforms that streamline and automate financial operations for businesses, banks, and consumers."
    },
    {
      q: "How does Nexora Empire ensure financial-grade data security?",
      a: "We deploy state-of-the-art PCI-DSS compliant protocols, multi-factor authentication (MFA), end-to-end API encryption, and real-time transaction monitoring to safeguard all financial user data."
    },
    {
      q: "Can you build custom payment gateway integrations?",
      a: "Yes! We specialize in custom payment gateway integrations, cross-border remittance APIs, and connecting local mobile money services with international credit card processors."
    },
    {
      q: "What types of financial platforms do you engineer?",
      a: "We engineer customized digital wallets, peer-to-peer (P2P) lending portals, automated invoice management platforms, and microfinance operational tools."
    }
  ];

  return (
    <div className="relative w-full bg-[#030308] text-slate-100 overflow-hidden" id="fintech-page-root">
      
      {/* Background radial accent glows */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-brand-violet/10 rounded-full filter blur-[130px] pointer-events-none" />
      
      {/* Structural grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* Left-Aligned Premium Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 border-b border-indigo-950/40 bg-[#020205]/40" id="fintech-hero">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side text contents */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] font-black text-brand-electric uppercase px-3 py-1.5 rounded-full bg-brand-electric/5 border border-brand-electric/15 inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-electric animate-pulse" />
                Fintech Application Development
              </span>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
                Fintech Software <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">
                  Development Solutions
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
                Nexora Empire is a premier fintech software development company. We build custom financial technology solutions, payment software development systems, and secure fintech platforms designed to scale transactions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => {
                    window.open('https://wa.me/237677079559?text=Hello%20Nexora%20Empire!%20I%20would%20like%20to%20discuss%20custom%20fintech%20software%20development%20for%20my%20business.', '_blank');
                  }}
                  className="flex items-center justify-center px-8 py-4 rounded-2xl bg-[linear-gradient(90deg,#2F5BFF_0%,#4A47FF_35%,#6A38F8_70%,#8B1DCA_100%)] text-white font-sans text-sm font-semibold tracking-wide hover:brightness-110 hover:shadow-[0_0_20px_rgba(106,56,248,0.3)] transition-all cursor-pointer"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-5" />
          </div>
        </div>
      </section>

      {/* Services Section in Light Mode (What We Build Cards) */}
      <section className="relative py-28 sm:py-36 bg-[#fafbfc] border-t border-b border-slate-200/50 overflow-hidden" id="fintech-services-section">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-blue-50/40 to-indigo-50/40 rounded-full blur-[140px] pointer-events-none opacity-80" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
          
          {/* Section Header */}
          <div className="w-full mb-20 flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-[#2F5BFF]/5 border border-[#2F5BFF]/20 mb-6 select-none shadow-[0_2px_10px_rgba(47,91,255,0.03)]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#2F5BFF]" />
              <span className="font-mono text-xs tracking-[0.18em] font-extrabold text-[#2F5BFF]">
                WHAT WE BUILD
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-[64px] font-[900] text-slate-900 leading-[1.1] tracking-tight mb-6"
            >
              Fintech Solutions <br className="hidden sm:inline" />
              <span className="bg-[linear-gradient(90deg,#2F5BFF_0%,#4A47FF_35%,#6A38F8_70%,#8B1DCA_100%)] bg-clip-text text-transparent">Every Need</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-500 font-sans text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto"
            >
              We engineer custom fintech platforms capable of handling high-velocity transactions, API integrations, and robust database operations.
            </motion.p>
          </div>

          {/* Grid of services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="fintech-services-grid">
            {[
              {
                id: 'wallet',
                title: 'Digital Wallets',
                description: 'Custom peer-to-peer wallets, QR code transfer platforms, and localized remittance platforms.',
                icon: Wallet
              },
              {
                id: 'invest',
                title: 'Investment Platforms',
                description: 'Automated stock or digital asset trackers, real-time analytics portfolios, and micro-saving tools.',
                icon: TrendingUp
              },
              {
                id: 'microfinance',
                title: 'Microfinance Portals',
                description: 'Customer loan approval engines, savings records ledgers, and operational credit scoring databases.',
                icon: Building
              },
              {
                id: 'payment',
                title: 'Payment APIs',
                description: 'Developer API infrastructure to hook payment collection systems with enterprise CRMs and billing engines.',
                icon: Server
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: index * 0.05 }}
                  className="bg-white rounded-[24px] border border-slate-100/90 p-8 flex flex-col h-full justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_24px_50px_rgba(47,91,255,0.05)] hover:border-[#2F5BFF]/25 group cursor-pointer text-left"
                  id={service.id}
                >
                  <div>
                    {/* Icon Box */}
                    <div className="w-14 h-14 rounded-2xl bg-[#2F5BFF]/10 flex items-center justify-center mb-6 transition-all group-hover:bg-[#2F5BFF]/15">
                      <Icon className="w-7 h-7 text-[#2F5BFF]" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-[22px] font-bold text-slate-900 leading-snug tracking-tight mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-sm font-sans leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More link */}
                  <div className="inline-flex items-center gap-2 text-[#2F5BFF] hover:text-[#8B1DCA] font-semibold text-sm select-none group/btn transition-colors duration-200">
                    <span>Learn More</span>
                    <div className="w-5 h-5 rounded-full border border-[#2F5BFF] flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1.5">
                      <ChevronRight className="w-3 h-3 text-[#2F5BFF]" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Left/Right Narrative */}
      <section className="relative py-20 md:py-28 bg-[#020205] border-b border-indigo-950/20" id="fintech-dna-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1 relative w-full h-[320px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-indigo-950/40 bg-zinc-950/30">
              <div className="absolute inset-0 bg-cover bg-center filter brightness-[0.7] contrast-[1.05]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
                  <ShieldCheck className="w-5 h-5 animate-pulse text-indigo-400" />
                </div>
                <span className="font-mono text-xs text-white tracking-widest uppercase font-bold">Secure Digital Wallet Grid</span>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
              <span className="font-mono text-[10px] tracking-[0.25em] font-bold text-brand-electric uppercase px-3 py-1.5 rounded-full bg-brand-electric/5 border border-brand-electric/15 inline-flex items-center">
                Specialized Digital Solutions
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-[900] text-white leading-tight tracking-tight">
                Enterprise Financial <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Technology Solutions</span>
              </h2>
              <p className="font-sans text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
                We engineer custom fintech platforms capable of handling high-velocity transactions, API integrations, and robust database operations. Our financial software development team delivers security-first digital products matching international audit criteria.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-355">PCI-DSS Compliant Encryption</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-355">Instant Mobile Money Integrations</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-355">Real-time Transaction Auditing</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-355">Automated Accounting Pipelines</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-[#030308]/40 overflow-hidden border-t border-indigo-950/25" id="fintech-faq">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] tracking-[0.25em] font-bold text-indigo-400 uppercase">
              RELIABLE ANSWERS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              const indexStr = String(idx + 1).padStart(2, '0');
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? "bg-gradient-to-r from-brand-electric/50 via-indigo-500/50 to-brand-violet/50 p-[1px] shadow-[0_4px_30px_rgba(109,40,217,0.12)]" 
                      : "bg-[#05050a]/60 border border-zinc-900 hover:border-zinc-800"
                  }`}
                >
                  <div className={`w-full rounded-[15px] bg-[#05050a] ${isOpen ? 'p-5 sm:p-6' : 'p-4 sm:p-5'}`}>
                    {/* Question Header */}
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        {/* Index Badge */}
                        <div className="shrink-0 flex items-center justify-center w-10 h-8 rounded-lg bg-indigo-950/35 border border-indigo-500/10 text-[#818cf8] font-mono text-[13px] font-bold">
                          {indexStr}
                        </div>
                        
                        {/* Question Text */}
                        <span className="font-display font-bold text-white text-sm sm:text-base md:text-[17px] tracking-tight leading-tight">
                          {faq.q}
                        </span>
                      </div>

                      {/* Chevron Indicator */}
                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-zinc-950/60 border border-zinc-900 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-electric border-brand-violet/30 bg-violet-950/20' : ''}`}>
                        <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </button>

                    {/* Expandable Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 sm:pl-14 text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed font-normal">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mt-16 sm:mt-20 p-5 sm:p-6 rounded-2xl sm:rounded-full bg-zinc-950/30 border border-zinc-900 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
              <div className="w-12 h-12 rounded-full bg-violet-950/40 border border-brand-violet/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(109,40,217,0.2)]">
                <Headphones className="w-5.5 h-5.5 text-brand-violet" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base">
                  Still have questions?
                </h3>
                <p className="font-sans text-zinc-400 text-xs sm:text-sm mt-0.5">
                  We're just a message away and ready to help you.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  if (setView) setView('contact');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="group w-full sm:w-auto relative py-2.5 px-5 rounded-full bg-gradient-to-r from-blue-600 to-brand-violet text-white font-sans text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-1.5 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:brightness-110 active:scale-[0.98] cursor-pointer"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  const msg = encodeURIComponent("Hi, I have some questions about your Fintech Software Solutions.");
                  window.open(`https://wa.me/237677079559?text=${msg}`, '_blank');
                }}
                className="group w-full sm:w-auto relative py-2.5 px-5 rounded-full bg-[#020205] text-gray-200 hover:text-white font-sans text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 border border-zinc-800 hover:border-brand-violet/50 hover:bg-violet-950/10 active:scale-[0.98] cursor-pointer"
              >
                <svg className="w-4 h-4 fill-[#25d366] group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.588 1.976 14.113.953 11.5.953c-5.44 0-9.865 4.371-9.869 9.802-.001 1.736.463 3.429 1.343 4.92l-.996 3.639 3.737-.961c1.472.8 2.946 1.2 4.41.2zM17.15 14.92c-.284-.144-1.68-.823-1.94-.917-.26-.094-.449-.144-.638.144-.19.288-.731.917-.897 1.107-.165.19-.33.213-.614.07-.284-.144-1.2-.441-2.285-1.41-.845-.75-1.415-1.678-1.58-1.965-.165-.288-.018-.444.124-.585.129-.127.284-.33.427-.496.142-.165.19-.283.284-.472.094-.19.047-.354-.024-.496-.071-.142-.638-1.536-.874-2.107-.23-.554-.462-.48-.638-.49-.166-.008-.354-.01-.543-.01-.189 0-.496.071-.756.354-.26.283-.992.969-.992 2.364s1.015 2.738 1.157 2.926c.142.189 2.002 3.036 4.85 4.248.678.29 1.206.463 1.618.593.681.216 1.3.186 1.79.113.547-.081 1.68-.686 1.916-1.35.236-.663.236-1.231.165-1.35-.071-.12-.26-.19-.544-.334z" />
                </svg>
                <span>WhatsApp Us</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-[#020205] text-white text-center overflow-hidden border-t border-indigo-950/25" id="fintech-cta">
        <div className="max-w-4xl mx-auto px-6 space-y-8 relative z-10">
          <span className="font-mono text-[10px] tracking-[0.25em] font-bold text-indigo-400 uppercase">
            Let's Construct Your Web Presence
          </span>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white">
            Ready to Build Your <br />
            Fintech <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Digital Asset?</span>
          </h3>
          <p className="font-sans text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Configure a personalized project blueprint or request a dynamic web stack demonstration from our lead software engineers today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
            <button
              onClick={() => {
                if (setView) setView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if ((window as any).lenis) {
                  (window as any).lenis.scrollTo(0);
                }
              }}
              className="flex items-center justify-center px-8 py-4 rounded-2xl bg-[linear-gradient(90deg,#2F5BFF_0%,#4A47FF_35%,#6A38F8_70%,#8B1DCA_100%)] text-white font-sans text-sm font-semibold hover:brightness-110 hover:shadow-[0_0_25px_rgba(106,56,248,0.35)] transition-all cursor-pointer w-full sm:w-auto"
            >
              Get Custom Proposal
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button
              onClick={() => {
                if (setView) setView('home');
                window.scrollTo({ top: 0, behavior: 'instant' });
                if ((window as any).lenis) {
                  (window as any).lenis.scrollTo(0);
                }
              }}
              className="flex items-center justify-center px-8 py-4 rounded-2xl bg-[#080815]/60 border border-indigo-500/25 text-white font-sans text-sm font-semibold hover:border-indigo-400 hover:bg-indigo-500/5 transition-all cursor-pointer w-full sm:w-auto"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
