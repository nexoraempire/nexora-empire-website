'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  ChevronDown, 
  GraduationCap, 
  ShieldCheck, 
  BookOpen, 
  Video, 
  Server, 
  Users, 
  Database,
  Award,
  CheckCircle2
} from 'lucide-react';

interface EducationPageProps {
  setView?: (view: any) => void;
}

export const EducationPage: React.FC<EducationPageProps> = ({ setView }) => {
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
      q: "What is education software solutions development?",
      a: "Education software solutions development is the process of creating customized learning management systems (LMS), administrative portals, and mobile application experiences designed for educational institutes, corporate training programs, and e-learning startups."
    },
    {
      q: "Can you build custom learning management systems (LMS)?",
      a: "Yes! We build highly customized, interactive LMS platforms from scratch, including video lectures streaming, assignments submission vaults, auto-graded quizzes, and progress reporting tracking panels."
    },
    {
      q: "How do you handle student records database security?",
      a: "We deploy secure relational databases (like PostgreSQL) protected by strict authorization rules, server-side parameter checks, and user-role access permissions to guarantee student data privacy."
    },
    {
      q: "Can your systems integrate with external video API tools?",
      a: "We support integrations with Zoom API, Microsoft Teams, and custom WebRTC streaming solutions for seamless virtual classrooms hosting."
    }
  ];

  return (
    <div className="relative w-full bg-white text-slate-900 overflow-hidden min-h-screen" id="education-page-root">
      {/* Visual background grid accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none -z-10" />

      {/* Hero Wrapper */}
      <div className="relative w-full overflow-hidden border-b border-slate-900/10 bg-[#060814]" id="education-hero-wrapper">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 scale-105 pointer-events-none"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop')" }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060814] via-[#060814]/85 to-[#020205]/95 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28 z-10 text-left">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-300 tracking-wider uppercase font-sans mb-6">
            <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
            Education Technology Solutions
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Education Software <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">
              Development Solutions
            </span>
          </h1>
          <p className="font-sans text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-8">
            Nexora Empire delivers custom education software solutions development. We design responsive learning management systems, e-learning platform development architectures, and education management software to automate academic workflows.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/237677079559?text=Hello%20Nexora%20Empire!%20I%20would%20like%20to%20discuss%20custom%20education%20software%20solutions%20for%2520my%20school.', '_blank')}
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-sans text-sm font-semibold tracking-wide rounded-2xl transition-all duration-300 shadow-lg shadow-blue-600/15"
          >
            Consult Our EdTech Experts
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Row 1: Left/Right Narrative */}
      <section className="relative py-20 md:py-28 border-t border-slate-100 bg-[#fafbfc]/30" id="education-dna-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/50 text-xs font-bold text-blue-600 tracking-wider uppercase font-sans">
                <span className="w-1.5 h-1.5 rounded-full border border-blue-600 bg-transparent" />
                Specialized Digital Solutions
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#0e1629] leading-tight tracking-tight">
                Custom Education Management <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Software & Apps</span>
              </h2>
              <p className="font-sans text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl">
                We design and construct interactive virtual classrooms, mobile learning applications, and student record software systems. Our systems are built around your school curriculum workflows to manage online learning seamlessly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-600">Custom LMS Dashboard Portals</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-600">Interactive Quiz Engines</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-600">Unified Student Grade Ledgers</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-600">Automated Performance Reports</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-50">
              <div className="absolute inset-0 bg-cover bg-center filter brightness-[0.95] contrast-[1.05]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                  <BookOpen className="w-5 h-5 animate-pulse" />
                </div>
                <span className="font-mono text-xs text-white tracking-widest uppercase font-bold">Interactive Learning Hub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Cards */}
      <section className="relative py-20 md:py-28 border-t border-slate-100 bg-[#fafbfc]/30" id="education-cards-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/50 text-xs font-bold text-blue-600 tracking-wider uppercase font-sans mb-4">
            <span className="w-1.5 h-1.5 rounded-full border border-blue-600 bg-transparent" />
            Our Offerings
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0e1629] leading-tight tracking-tight mb-16">
            What We Build for Academic Institutions
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="p-6 sm:p-8 rounded-[32px] bg-white border border-slate-150 shadow-[0_15px_30px_rgba(15,23,42,0.012)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.05)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center relative"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-50/60 flex items-center justify-center text-indigo-600 mb-5 border border-indigo-100/30">
                <BookOpen className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="font-display text-base font-bold text-[#0e1629] mb-3">
                LMS Architectures
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                Custom course managers, video hosting systems, and visual timelines mapping syllabus progression.
              </p>
              <div className="mt-auto w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-xs font-mono font-bold text-slate-400 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                01
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-6 sm:p-8 rounded-[32px] bg-white border border-slate-150 shadow-[0_15px_30px_rgba(15,23,42,0.012)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.05)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center relative"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-50/60 flex items-center justify-center text-indigo-600 mb-5 border border-indigo-100/30">
                <Video className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="font-display text-base font-bold text-[#0e1629] mb-3">
                Virtual Classrooms
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                Secure real-time audio/video links integrated directly with class calendars and student rosters.
              </p>
              <div className="mt-auto w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-xs font-mono font-bold text-slate-400 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                02
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="p-6 sm:p-8 rounded-[32px] bg-white border border-slate-150 shadow-[0_15px_30px_rgba(15,23,42,0.012)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.05)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center relative"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-50/60 flex items-center justify-center text-indigo-600 mb-5 border border-indigo-100/30">
                <Award className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="font-display text-base font-bold text-[#0e1629] mb-3">
                Grading Engines
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                Interactive auto-graded questionnaire files and customizable digital certificates issuance pipelines.
              </p>
              <div className="mt-auto w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-xs font-mono font-bold text-slate-400 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                03
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="p-6 sm:p-8 rounded-[32px] bg-white border border-slate-150 shadow-[0_15px_30px_rgba(15,23,42,0.012)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.05)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center relative"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-50/60 flex items-center justify-center text-indigo-600 mb-5 border border-indigo-100/30">
                <Database className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="font-display text-base font-bold text-[#0e1629] mb-3">
                Admissions Portals
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                Automated student registry systems, tuition payment channels, and school statistics trackers.
              </p>
              <div className="mt-auto w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-xs font-mono font-bold text-slate-400 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                04
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ Section (Always Dark Mode) */}
      <section className="relative py-20 md:py-28 border-t border-indigo-950/20 bg-[#060814] text-white" id="education-faq-section">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060814] via-[#060814]/90 to-[#020205]/95 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-300 tracking-wider uppercase font-sans mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              FAQ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border-b border-indigo-950/40 pb-4"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full py-4 flex justify-between items-center text-left text-base sm:text-lg font-bold text-white hover:text-indigo-400 transition-colors focus:outline-none"
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
        </div>
      </section>

      {/* CTA (Always Dark Mode) */}
      <section className="relative py-20 md:py-28 border-t border-indigo-950/20 bg-[#020205] text-white text-center" id="education-cta-section">
        <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/95 to-[#060814]/80 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 z-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            Ready to Build Your E-Learning Platform?
          </h2>
          <p className="font-sans text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Partner with our software development agency to build custom, secure, and modern education technology solutions.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/237677079559?text=Hello%20Nexora%20Empire!%2520I%2520am%2520interested%2520in%2520your%2520education%2520software%2520solutions.', '_blank')}
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-sans text-sm font-semibold tracking-wide rounded-2xl transition-all duration-300 shadow-lg shadow-blue-600/15"
          >
            Initiate Discovery Call
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};
