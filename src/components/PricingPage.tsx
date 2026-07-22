'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CardSpotlight } from './CardSpotlight.tsx';
import { PricingCards } from './PricingCards.tsx';
import { 
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  Calculator,
  Layout,
  ShoppingCart,
  Boxes,
  Smartphone,
  Cpu,
  Database,
  Globe,
  Zap,
  ChevronDown,
  Info,
  DollarSign,
  TrendingUp,
  Award,
  Clock,
  Briefcase,
  Headphones,
  Star
} from 'lucide-react';

interface PricingPageProps {
  setView: (view: any) => void;
}

type Currency = 'XAF' | 'USD';

export const PricingPage: React.FC<PricingPageProps> = ({ setView }) => {
  const [currency, setCurrency] = useState<Currency>('XAF');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const [showInquiryModal, setShowInquiryModal] = useState<boolean>(false);
  const [inquiryName, setInquiryName] = useState<string>('');
  const [inquiryEmail, setInquiryEmail] = useState<string>('');
  const [inquiryPhone, setInquiryPhone] = useState<string>('');
  const [inquiryMessage, setInquiryMessage] = useState<string>('');
  const [inquirySubmitted, setInquirySubmitted] = useState<boolean>(false);

  // Pricing comparison matrix columns
  const comparisonPlans = [
    { name: 'Corporate Website', support: '1 Month SLA', pages: 'Up to 5', analytics: 'Basic Only', customDesign: 'Structured Template', db: '❌' },
    { name: 'E-Commerce Website', support: '1 Month Maintenance', pages: 'Up to 100 products', analytics: 'Google & Custom Pixels', customDesign: 'Fully Tailored', db: 'Product DB Included' },
    { name: 'Custom Enterprise Suite', support: '3 Month Dedicated Support SLA', pages: 'Unlimited Pages/Products', analytics: 'Advanced Telemetry Dashboard', customDesign: 'Elite Bespoke Concepting', db: 'Dynamic Clustered Database' }
  ];

  // FAQ contents
  const faqs = [
    {
      q: "What payment structures do you support for launching projects?",
      a: "To protect both sides, we work on a standard milestoned structure. Typically, this is a 50% down-payment to initiate visual concepts and architecture frameworks, and 50% upon successful live staging and training handover. For larger custom projects, we can split this into 3 or 4 milestones synced to specific sprint deliverables."
    },
    {
      q: "Are hosting fees and domain names included in the pricing plans?",
      a: "Yes! Both our Corporate and E-Commerce website plans come fully loaded with a free premium domain name (e.g. .com, .net, .org) and high-speed secure cloud SSD hosting for the entire first year. After Year 1, renewal fees are billed directly at base costs without markup."
    },
    {
      q: "Do I actually own the finished code and project database?",
      a: "Absolutely, 100%. Once final milestones are cleared, we transfer full repository rights, source files, system architectures, database credentials, and graphics directly to your team. We never keep your company locked into proprietary environments."
    },
    {
      q: "Can I upgrade my platform from a Corporate page to a full E-Commerce store later?",
      a: "Yes, we construct all digital products with extreme modular foresight. Our clean codebase allows us to seamlessly plug in dynamic inventory layers, secure checkout matrices, and payment routes onto your existing corporate portal at any time."
    },
    {
      q: "What does the Monthly Professional Maintenance SLA entail?",
      a: "Our SLA (Service Level Agreement) keeps your application lightning-fast and impenetrable. It includes weekly security patch installations, automated system backups, performance health audits, API token rotation, and up to 5 hours of visual or text content updates every month."
    }
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail) return;
    setInquirySubmitted(true);
    setTimeout(() => {
      setShowInquiryModal(false);
      setInquirySubmitted(false);
      setInquiryName('');
      setInquiryEmail('');
      setInquiryPhone('');
      setInquiryMessage('');
    }, 2800);
  };

  return (
    <div className="relative w-full bg-slate-950 text-slate-100 overflow-hidden min-h-screen" id="pricing-page-root">
      
      {/* Dynamic ambient gradients */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-950/20 via-transparent to-transparent pointer-events-none -z-10" />
      <div className="absolute top-[25%] right-[-10%] w-[550px] h-[550px] rounded-full bg-brand-violet/5 blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[20%] left-[-15%] w-[600px] h-[600px] rounded-full bg-brand-electric/5 blur-[150px] pointer-events-none -z-10" />

      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_75%,transparent_100%)] pointer-events-none -z-10" />

      {/* Pricing Hero with background image inspired by About Us page */}
      <div className="relative w-full overflow-hidden border-b border-indigo-950/20 bg-[#060814]" id="pricing-hero-wrapper">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 scale-105 pointer-events-none"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1600&auto=format&fit=crop')" }} 
        />
        {/* Soft elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-[#020205]/95 pointer-events-none" />
        
        {/* Ambient color blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-electric/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-violet/10 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28 z-10 animate-fade-in" id="pricing-hero">
          {/* Headings */}
          <div className="max-w-4xl text-left space-y-6" id="pricing-page-intro">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-electric/10 border border-brand-electric/20 text-xs font-semibold text-brand-electric tracking-wider uppercase font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-electric animate-pulse" />
              Transparent Pricing
            </span>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
              Software Development <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Pricing Cameroon</span>
            </h1>
            
            <p className="font-sans text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Find transparent custom software, website development, mobile app, and SEO services pricing options for businesses in Cameroon and globally.
            </p>
          </div>
        </div>
      </div>      {/* Pricing Cards Grid (LIGHT MODE matching the color skin of homepage pricing cards) */}
      <section className="py-24 px-6 md:px-12 relative bg-white overflow-hidden border-t border-slate-100" id="pricing-plans-section">
        {/* Light elegant blueprint grid design background overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1.2px,transparent_1.2px),linear-gradient(to_bottom,#f1f5f9_1.2px,transparent_1.2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,#000_70%,transparent_100%)] opacity-85 z-0" />
          
          {/* Ambient light glow */}
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-indigo-100/30 to-blue-50/20 blur-[130px] rounded-full z-0 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header row with badge, heading, description, and currency toggle */}
          <div className="text-center space-y-5 max-w-3xl mx-auto mb-16" id="pricing-plans-header">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-electric/10 border border-brand-electric/20 rounded-full select-none animate-fade-in" id="plans-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-electric animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.2em] font-bold text-brand-electric uppercase">Pricing Plans</span>
            </span>
            
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-[#0e1629] tracking-tight" id="plans-title">
              Clear Plans for <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Every Scale</span>
            </h2>
            
            <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed" id="plans-description">
              Choose a predefined baseline architecture tailored to your business model or calculate custom budgets matching your exact specifications.
            </p>

            {/* Currency Toggle Switch */}
            <div className="pt-4 flex items-center justify-center" id="pricing-currency-container">
              <div className="relative p-1 bg-slate-100 border border-slate-200/60 rounded-full flex gap-1 z-10 shadow-sm">
                <button
                  onClick={() => setCurrency('XAF')}
                  className={`px-6 py-2.5 rounded-full text-[11px] font-sans font-bold tracking-wider uppercase transition-all duration-300 relative cursor-pointer ${
                    currency === 'XAF' 
                      ? 'text-white bg-[#1f39c4] shadow-md font-extrabold' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  XAF (FCFA)
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-6 py-2.5 rounded-full text-[11px] font-sans font-bold tracking-wider uppercase transition-all duration-300 relative cursor-pointer ${
                    currency === 'USD' 
                      ? 'text-white bg-[#1f39c4] shadow-md font-extrabold' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  USD ($)
                </button>
              </div>
            </div>
          </div>
          
          <PricingCards currency={currency} setView={setView} />
 
        </div>
      </section>


      {/* Comparison Matrix Accordion Table */}
      <section className="py-20 md:py-28 px-6 md:px-12 relative bg-white border-t border-slate-100 overflow-hidden" id="pricing-matrix">
        {/* Light elegant blueprint grid design background overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1.2px,transparent_1.2px),linear-gradient(to_bottom,#f1f5f9_1.2px,transparent_1.2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,#000_70%,transparent_100%)] opacity-85 z-0" />
          
          {/* Ambient light glow */}
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-indigo-100/30 to-blue-50/20 blur-[130px] rounded-full z-0 pointer-events-none" />
        </div>

        <div className="max-w-6xl mx-auto text-center space-y-12 relative z-10">
          
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-electric/10 border border-brand-electric/20 rounded-full select-none animate-fade-in" id="matrix-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-electric animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.2em] font-bold text-brand-electric uppercase">Operational Matrix</span>
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Feature-by-Feature <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Comparison</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
              Compare technical deliverables, storage schemas, support protocols, and customization options across our modular standard plans.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.03)]" id="comparison-matrix-table-container">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/60 font-mono text-[10px] text-slate-500 uppercase font-bold">
                  <th className="p-5 font-bold">Plan Capability</th>
                  <th className="p-5 font-bold">Corporate Website</th>
                  <th className="p-5 font-bold">E-Commerce Website</th>
                  <th className="p-5 font-bold text-[#1f39c4]">Custom Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans text-xs sm:text-sm text-slate-600">
                <tr className="hover:bg-slate-50/30 transition-colors">
                  <td className="p-5 font-bold text-slate-900 font-sans">SLA Dedicated Support</td>
                  <td className="p-5 text-slate-500">1 Month Support</td>
                  <td className="p-5 text-slate-500">1 Month Maintenance</td>
                  <td className="p-5 font-bold text-[#1f39c4]">3 Months SLA Standard</td>
                </tr>
                <tr className="hover:bg-slate-50/30 transition-colors">
                  <td className="p-5 font-bold text-slate-900 font-sans">Pages & Inventory Space</td>
                  <td className="p-5 text-slate-500">Up to 5 Pages</td>
                  <td className="p-5 text-slate-500">Up to 100 Products</td>
                  <td className="p-5 font-bold text-[#1f39c4]">Unlimited Scale</td>
                </tr>
                <tr className="hover:bg-slate-50/30 transition-colors">
                  <td className="p-5 font-bold text-slate-900 font-sans">Telemetry & Analytics</td>
                  <td className="p-5 text-slate-500">Basic Only</td>
                  <td className="p-5 text-slate-500">Google & Meta Pixel Set</td>
                  <td className="p-5 font-bold text-[#1f39c4]">Custom BI Dashboards</td>
                </tr>
                <tr className="hover:bg-slate-50/30 transition-colors">
                  <td className="p-5 font-bold text-slate-900 font-sans">UI/UX Concepting Grid</td>
                  <td className="p-5 text-slate-500">Structured template design</td>
                  <td className="p-5 text-slate-500">Fully tailored concept</td>
                  <td className="p-5 font-bold text-[#1f39c4]">Bespoke Vector system</td>
                </tr>
                <tr className="hover:bg-slate-50/30 transition-colors">
                  <td className="p-5 font-bold text-slate-900 font-sans">Database Clustering</td>
                  <td className="p-5 text-slate-400">❌ None</td>
                  <td className="p-5 text-slate-500">Product schema included</td>
                  <td className="p-5 font-bold text-[#1f39c4]">PostgreSQL / MongoDB</td>
                </tr>
                <tr className="hover:bg-slate-50/30 transition-colors">
                  <td className="p-5 font-bold text-slate-900 font-sans">Payment Integration Routes</td>
                  <td className="p-5 text-slate-400">❌ Direct links only</td>
                  <td className="p-5 text-slate-500">Mobile Money & Cards</td>
                  <td className="p-5 font-bold text-[#1f39c4]">Multi-currencies, API</td>
                </tr>
                <tr className="hover:bg-slate-50/30 transition-colors">
                  <td className="p-5 font-bold text-slate-900 font-sans">Secure Source Code Handover</td>
                  <td className="p-5 text-emerald-600 font-medium">✓ Yes (Git Push)</td>
                  <td className="p-5 text-emerald-600 font-medium">✓ Yes (Git Push)</td>
                  <td className="p-5 font-bold text-[#1f39c4]">✓ Yes (Full repository)</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Structured FAQ Accordion Section */}
      <section 
        id="pricing-faq"
        className="relative w-full bg-[#020205] text-white py-24 md:py-32 overflow-hidden border-t border-zinc-900/40"
      >
        {/* Background Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-violet/5 blur-[140px] z-0" />
          <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-brand-electric/5 blur-[150px] z-0" />
        </div>

        <div className="container mx-auto max-w-5xl px-6 relative z-10">
          
          {/* Header Block */}
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-3.5"
            >
              {/* Center-aligned Badge */}
              <span className="text-[11px] sm:text-xs font-mono font-extrabold uppercase tracking-[0.25em] text-[#6366f1] bg-indigo-950/20 px-4 py-1.5 rounded-full border border-indigo-500/10">
                FAQ
              </span>

              {/* Glowing Header Title */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mt-3">
                Frequently Asked <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Questions</span>
              </h2>

              {/* Delicate colored line divider */}
              <div className="w-14 h-[2px] bg-gradient-to-r from-blue-500 to-brand-violet rounded-full mt-4" />
            </motion.div>
          </div>

          {/* Accordion List */}
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              const indexStr = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
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

                    {/* Expandable Answer (with dynamic slide & fade) */}
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
            {/* Left Portion with Icon and Text */}
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

            {/* Right Portion with Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              {/* Talk to Our Team */}
              <button
                onClick={() => {
                  setView('contact');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="group w-full sm:w-auto relative py-2.5 px-5 rounded-full bg-gradient-to-r from-blue-600 to-brand-violet text-white font-sans text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-1.5 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:brightness-110 active:scale-[0.98] cursor-pointer"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* WhatsApp Us */}
              <button
                onClick={() => {
                  const encodedMsg = encodeURIComponent("Hi, I have a few questions about Nexora Empire and how we can work together!");
                  window.open(`https://wa.me/237677079559?text=${encodedMsg}`, '_blank');
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

      {/* Ready to Build / CTA Section */}
      <section className="py-24 border-t border-indigo-950/20 bg-[#020205] relative overflow-hidden" id="pricing-page-cta">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3 mb-8"
          >
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-brand-electric bg-brand-electric/10 px-4 py-1.5 rounded-full border border-brand-electric/20">
              Start Your Engineering Journey
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-r from-brand-electric to-brand-violet rounded-full" />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Ready to Translate Your Vision Into <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">
              High-Performance Code?
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-sans text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            Don't compromise on speed, stability, or visual polish. Whether you need an elite presentation storefront or a tailored real-time cloud database system, we deliver with standard-setting precision.
          </motion.p>

          {/* Value Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left" id="pricing-cta-highlights">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5 rounded-xl border border-indigo-950/30 bg-[#04040a]/40 backdrop-blur-sm space-y-3"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-electric/10 border border-brand-electric/20 flex items-center justify-center text-brand-electric">
                <Clock className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-display text-sm font-bold text-white">Weekly Iterative Demos</h4>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Stay updated in real-time. We configure dedicated testing links so you interact with weekly builds and provide quick adjustments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="p-5 rounded-xl border border-indigo-950/30 bg-[#04040a]/40 backdrop-blur-sm space-y-3"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center text-brand-violet">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-display text-sm font-bold text-white">Full IP & Repo Handover</h4>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Zero vendor lock-in. Upon project completion, we push optimized code directly to your GitHub and hand over 100% of all credentials.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-5 rounded-xl border border-indigo-950/30 bg-[#04040a]/40 backdrop-blur-sm space-y-3"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Zap className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-display text-sm font-bold text-white">Risk-Free Payment Terms</h4>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Pay in structured milestones. Deposits are securely structured to protect your business budget and align with development speed.
              </p>
            </motion.div>
          </div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <button
              onClick={() => {
                const text = `Hi Nexora Empire, I've reviewed your pricing plans. I'd love to request a free consultation to initiate our project concept!`;
                window.open(`https://wa.me/237677079559?text=${encodeURIComponent(text)}`, '_blank');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4.5 bg-brand-electric hover:brightness-110 text-slate-950 rounded-xl font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-brand-electric/15 cursor-pointer hover:scale-[1.01]"
              id="pricing-cta-wa"
            >
              Consult with our Team
              <ArrowUpRight className="w-4.5 h-4.5 stroke-[2.5]" />
            </button>
            
            <button
              onClick={() => setShowInquiryModal(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4.5 bg-indigo-950/40 border border-indigo-800/30 text-indigo-300 hover:text-white hover:border-brand-electric/30 hover:bg-indigo-950/80 rounded-xl font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer"
              id="pricing-cta-pdf"
            >
              Request Custom Quote PDF
            </button>
          </motion.div>

        </div>
      </section>

      {/* Inquiry Proposal Modal */}
      <AnimatePresence>
        {showInquiryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowInquiryModal(false)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative max-w-md w-full bg-[#0a0a14] border border-indigo-950/60 rounded-2xl p-6 sm:p-8 text-left shadow-2xl z-10 overflow-hidden"
              id="calculator-inquiry-modal"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-electric to-brand-violet" />
              
              <button
                onClick={() => setShowInquiryModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-indigo-950/30 text-slate-400 hover:text-white hover:bg-indigo-950/60 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {inquirySubmitted ? (
                <div className="text-center py-10 space-y-4 animate-fade-in" id="modal-success-state">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                    <Check className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <h3 className="font-display text-xl font-black text-white">Proposal Request Transmitted</h3>
                  <p className="font-sans text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                    Thank you! We have logged your request. Our system architect will dispatch your full custom scope outline and quote in under 3 hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-black text-white">
                      Request Blueprint Scope
                    </h3>
                    <p className="font-sans text-xs text-slate-400 mt-1 leading-normal">
                      Specify your requirements below and we will prepare a detailed proposal and custom budget timeline.
                    </p>
                  </div>

                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-wider block">
                        Full Name / Company
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="John Doe / Acme Corp"
                        className="w-full bg-[#04040a] border border-indigo-950/50 hover:border-brand-electric/40 focus:border-brand-electric rounded-xl py-2.5 px-4 text-xs font-sans text-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-electric/25 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-wider block">
                        Direct Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        placeholder="john@yourdomain.com"
                        className="w-full bg-[#04040a] border border-indigo-950/50 hover:border-brand-electric/40 focus:border-brand-electric rounded-xl py-2.5 px-4 text-xs font-sans text-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-electric/25 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-wider block">
                        Phone Number (WhatsApp Optional)
                      </label>
                      <input
                        type="tel"
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="+237 6xx xxx xxx"
                        className="w-full bg-[#04040a] border border-indigo-950/50 hover:border-brand-electric/40 focus:border-brand-electric rounded-xl py-2.5 px-4 text-xs font-sans text-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-electric/25 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-wider block">
                        Project Details / Scope (Optional)
                      </label>
                      <textarea
                        value={inquiryMessage}
                        onChange={(e) => setInquiryMessage(e.target.value)}
                        placeholder="Tell us briefly about what you want to build..."
                        rows={3}
                        className="w-full bg-[#04040a] border border-indigo-950/50 hover:border-brand-electric/40 focus:border-brand-electric rounded-xl py-2.5 px-4 text-xs font-sans text-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-electric/25 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-brand-violet hover:bg-brand-violet/90 text-white font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md shadow-brand-violet/10 cursor-pointer block text-center"
                    >
                      Receive Scope Outline
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
