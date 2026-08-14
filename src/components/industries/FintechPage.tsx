'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronDown, 
  CreditCard, 
  ShieldCheck, 
  TrendingUp, 
  Wallet, 
  Server, 
  Users, 
  Database,
  Building
} from 'lucide-react';

interface FintechPageProps {
  setView?: (view: any) => void;
}

export const FintechPage: React.FC<FintechPageProps> = ({ setView }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
    <div className="relative w-full bg-slate-950 text-white overflow-hidden min-h-screen">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#0f172a_0%,#020617_100%)]" />
      <div className="absolute top-[15%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-violet-900/10 blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 z-10 max-w-7xl mx-auto flex flex-col items-start text-left">
        <span className="font-mono text-xs tracking-[0.2em] text-indigo-400 font-bold uppercase mb-6 flex items-center gap-2">
          <CreditCard className="w-4 h-4 text-indigo-400" />
          Fintech Application Development
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Fintech Software <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-brand-violet bg-clip-text text-transparent">
            Development Solutions
          </span>
        </h1>
        <p className="font-sans text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
          Nexora Empire is a premier fintech software development company. We build custom financial technology solutions, payment software development systems, and secure fintech platforms designed to scale transactions.
        </p>
        <button 
          onClick={() => window.open('https://wa.me/237677079559?text=Hello%20Nexora%20Empire!%20I%20would%20like%20to%20discuss%20custom%20fintech%20software%20development%20for%20my%20business.', '_blank')}
          className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-brand-violet text-white font-sans text-sm font-semibold tracking-wide hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 active:scale-[0.97]"
        >
          Consult Our Fintech Tech Experts
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
        </button>
      </section>

      {/* Left/Right Visual Section (Fintech layout: Image on the Left, Content on the Right) */}
      <section className="relative py-20 px-6 md:px-12 z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 relative h-[320px] sm:h-[400px] rounded-3xl bg-slate-900 border border-indigo-950/40 overflow-hidden flex items-center justify-center">
            {/* Visual fallback/abstract mockup */}
            <div className="absolute inset-0 bg-cover bg-center opacity-45" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop')" }} />
            <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
              <ShieldCheck className="w-12 h-12 text-indigo-400" />
              <span className="font-mono text-xs text-indigo-300 tracking-wider">SECURE DIGITAL WALLET</span>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Enterprise Financial Technology Solutions
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
              We engineer custom fintech platforms capable of handling high-velocity transactions, API integrations, and robust database operations. Our financial software development team delivers security-first digital products matching international audit criteria.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="font-sans text-xs sm:text-sm text-slate-300">PCI-DSS Compliant Encryption</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="font-sans text-xs sm:text-sm text-slate-300">Instant Mobile Money Integrations</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="font-sans text-xs sm:text-sm text-slate-300">Real-time Transaction Auditing</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="font-sans text-xs sm:text-sm text-slate-300">Automated Accounting Pipelines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="relative py-20 px-6 md:px-12 z-10 max-w-7xl mx-auto text-left">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-12 text-center">
          What We Build for Fintech Innovators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-indigo-950/30 flex flex-col justify-between">
            <div>
              <Wallet className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-display text-lg font-bold text-white mb-2">Digital Wallets</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Custom peer-to-peer wallets, QR code transfer platforms, and localized remittance platforms.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-indigo-950/30 flex flex-col justify-between">
            <div>
              <TrendingUp className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-display text-lg font-bold text-white mb-2">Investment Platforms</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Automated stock or digital asset trackers, real-time analytics portfolios, and micro-saving tools.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-indigo-950/30 flex flex-col justify-between">
            <div>
              <Building className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-display text-lg font-bold text-white mb-2">Microfinance Portals</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Customer loan approval engines, savings records ledgers, and operational credit scoring databases.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-indigo-950/30 flex flex-col justify-between">
            <div>
              <Server className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-display text-lg font-bold text-white mb-2">Payment APIs</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Developer API infrastructure to hook payment collection systems with enterprise CRMs and billing engines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-6 md:px-12 z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="border-b border-indigo-950/40 pb-4"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full py-4 flex justify-between items-center text-left text-base sm:text-lg font-medium text-white hover:text-indigo-400 transition-colors focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-500 transform transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {expandedFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
          Ready to Build Your Fintech Platform?
        </h2>
        <p className="font-sans text-sm sm:text-base text-slate-400 mb-8 max-w-xl mx-auto">
          Partner with our software development company to engineer custom fintech systems and payment architectures.
        </p>
        <button 
          onClick={() => window.open('https://wa.me/237677079559?text=Hello%20Nexora%20Empire!%2520I%2520am%2520interested%2520in%2520your%2520fintech%2520software%2520development%2520services.', '_blank')}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-brand-violet text-white font-sans text-sm font-semibold tracking-wide hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] transition-all cursor-pointer"
        >
          Initiate Discovery Call
        </button>
      </section>
    </div>
  );
};
