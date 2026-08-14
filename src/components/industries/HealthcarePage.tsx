'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronDown, 
  Heart, 
  Shield, 
  Activity, 
  Lock, 
  Server, 
  Users, 
  Database,
  CheckCircle2
} from 'lucide-react';

interface HealthcarePageProps {
  setView?: (view: any) => void;
}

export const HealthcarePage: React.FC<HealthcarePageProps> = ({ setView }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is custom healthcare software development?",
      a: "Custom healthcare software development is the process of building digital solutions (such as EHRs, telemedicine apps, and medical portals) designed specifically for a healthcare organization's unique workflows, clinical requirements, and patient care models."
    },
    {
      q: "How does Nexora Empire ensure HIPAA compliance and data security?",
      a: "We implement advanced encryption protocols (AES-256 for data at rest and TLS for data in transit), secure role-based access controls, detailed audit logs, and compliant database infrastructures to guarantee patient data protection."
    },
    {
      q: "What types of healthcare software solutions can you build?",
      a: "We build Electronic Health Record (EHR) systems, custom patient portals, telemedicine applications, medical billing software, and custom CRM platforms tailored for healthcare clinics and laboratories."
    },
    {
      q: "How long does healthcare software solutions development take?",
      a: "A standard telemedicine platform or clinic management MVP typically takes 8 to 12 weeks to design, develop, test, and securely deploy. We provide detailed milestone timelines before launch."
    }
  ];

  return (
    <div className="relative w-full bg-slate-950 text-white overflow-hidden min-h-screen">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#0f172a_0%,#020617_100%)]" />
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-violet-900/10 blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 z-10 max-w-7xl mx-auto flex flex-col items-start text-left">
        <span className="font-mono text-xs tracking-[0.2em] text-indigo-400 font-bold uppercase mb-6 flex items-center gap-2">
          <Heart className="w-4 h-4 text-indigo-400 animate-pulse" />
          Healthcare Software Solutions
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Custom Healthcare <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">
            Software Development
          </span>
        </h1>
        <p className="font-sans text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
          Nexora Empire is a custom healthcare software development company. We engineer secure, HIPAA-compliant healthcare software solutions, telemedicine applications, and healthcare management software designed to improve patient care and streamline clinical operations.
        </p>
        <button 
          onClick={() => window.open('https://wa.me/237677079559?text=Hello%20Nexora%20Empire!%20I%20would%20like%20to%20discuss%20custom%20healthcare%20software%20development%20solutions%20for%20my%20organization.', '_blank')}
          className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-brand-violet text-white font-sans text-sm font-semibold tracking-wide hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 active:scale-[0.97]"
        >
          Consult Our Healthcare Tech Experts
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
        </button>
      </section>

      {/* Left/Right Visual Section */}
      <section className="relative py-20 px-6 md:px-12 z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Enterprise Healthcare Digital Solutions
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
              We understand that healthcare providers require secure, reliable, and high-performance digital platforms. Our customized software solutions integrate seamlessly with existing hospital infrastructure, allowing doctors and medical staff to focus on delivering quality care.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="font-sans text-xs sm:text-sm text-slate-300">HIPAA & GDPR Data Compliance</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="font-sans text-xs sm:text-sm text-slate-300">Secure HL7/FHIR Integrations</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="font-sans text-xs sm:text-sm text-slate-300">Robust Patient Portal Security</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="font-sans text-xs sm:text-sm text-slate-300">Real-time Lab Analytics Dashboard</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-[320px] sm:h-[400px] rounded-3xl bg-slate-900 border border-indigo-950/40 overflow-hidden flex items-center justify-center">
            {/* Visual fallback/abstract mockup */}
            <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop')" }} />
            <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
              <Activity className="w-12 h-12 text-indigo-400 animate-pulse" />
              <span className="font-mono text-xs text-indigo-300 tracking-wider">SECURE PATIENT MANAGEMENT</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="relative py-20 px-6 md:px-12 z-10 max-w-7xl mx-auto text-left">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-12 text-center">
          What We Build for Healthcare Providers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-indigo-950/30 flex flex-col justify-between">
            <div>
              <Database className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-display text-lg font-bold text-white mb-2">EHR/EMR Systems</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Custom electronic health records software designed for secure charts management and laboratory access control.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-indigo-950/30 flex flex-col justify-between">
            <div>
              <Users className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-display text-lg font-bold text-white mb-2">Telemedicine Apps</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Web and mobile app solutions built with secure WebRTC video, calendar bookings, and encrypted messaging.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-indigo-950/30 flex flex-col justify-between">
            <div>
              <Lock className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-display text-lg font-bold text-white mb-2">Healthcare Portals</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Self-service patient dashboards offering secure medical history access, invoice records, and prescription renewals.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-indigo-950/30 flex flex-col justify-between">
            <div>
              <Server className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-display text-lg font-bold text-white mb-2">Clinical Management</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Robust hospital enterprise systems built to streamline staff rosters, inventory tracking, and billing integrations.
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
          Ready to Build Your Healthcare Platform?
        </h2>
        <p className="font-sans text-sm sm:text-base text-slate-400 mb-8 max-w-xl mx-auto">
          Partner with our software development agency to build custom, secure, and performant healthcare digital products.
        </p>
        <button 
          onClick={() => window.open('https://wa.me/237677079559?text=Hello%20Nexora%20Empire!%2520I%2520am%2520interested%2520in%2520your%2520healthcare%2520software%2520development%2520services.', '_blank')}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-brand-violet text-white font-sans text-sm font-semibold tracking-wide hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] transition-all cursor-pointer"
        >
          Initiate Discovery Call
        </button>
      </section>
    </div>
  );
};
