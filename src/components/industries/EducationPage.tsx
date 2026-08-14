'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronDown, 
  GraduationCap, 
  ShieldCheck, 
  BookOpen, 
  Video, 
  Server, 
  Users, 
  Database,
  Award
} from 'lucide-react';

interface EducationPageProps {
  setView?: (view: any) => void;
}

export const EducationPage: React.FC<EducationPageProps> = ({ setView }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
    <div className="relative w-full bg-slate-950 text-white overflow-hidden min-h-screen">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#0f172a_0%,#020617_100%)]" />
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-violet-900/10 blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 z-10 max-w-7xl mx-auto flex flex-col items-start text-left">
        <span className="font-mono text-xs tracking-[0.2em] text-indigo-400 font-bold uppercase mb-6 flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-indigo-400" />
          Education Technology Solutions
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Education Software <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">
            Development Solutions
          </span>
        </h1>
        <p className="font-sans text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
          Nexora Empire delivers custom education software solutions development. We design responsive learning management systems, e-learning platform development architectures, and education management software to automate academic workflows.
        </p>
        <button 
          onClick={() => window.open('https://wa.me/237677079559?text=Hello%20Nexora%20Empire!%20I%20would%20like%20to%20discuss%20custom%20education%20software%20solutions%20for%20my%20school.', '_blank')}
          className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-brand-violet text-white font-sans text-sm font-semibold tracking-wide hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 active:scale-[0.97]"
        >
          Consult Our EdTech Experts
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
        </button>
      </section>

      {/* Left/Right Visual Section (Education layout: Content on the Left, Image on the Right) */}
      <section className="relative py-20 px-6 md:px-12 z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Custom Education Management Software & Apps
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
              We design and construct interactive virtual classrooms, mobile learning applications, and student record software systems. Our systems are built around your school curriculum workflows to manage online learning seamlessly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="font-sans text-xs sm:text-sm text-slate-300">Custom LMS Dashboard Portals</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="font-sans text-xs sm:text-sm text-slate-300">Interactive Quiz Engines</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="font-sans text-xs sm:text-sm text-slate-300">Unified Student Grade Ledgers</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="font-sans text-xs sm:text-sm text-slate-300">Automated Performance Reports</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-[320px] sm:h-[400px] rounded-3xl bg-slate-900 border border-indigo-950/40 overflow-hidden flex items-center justify-center">
            {/* Visual fallback/abstract mockup */}
            <div className="absolute inset-0 bg-cover bg-center opacity-45" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop')" }} />
            <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
              <BookOpen className="w-12 h-12 text-indigo-400 animate-bounce" />
              <span className="font-mono text-xs text-indigo-300 tracking-wider">E-LEARNING DASHBOARD</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="relative py-20 px-6 md:px-12 z-10 max-w-7xl mx-auto text-left">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-12 text-center">
          What We Build for Academic Institutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-indigo-950/30 flex flex-col justify-between">
            <div>
              <BookOpen className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-display text-lg font-bold text-white mb-2">LMS Architectures</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Custom course managers, video hosting systems, and visual timelines mapping syllabus progression.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-indigo-950/30 flex flex-col justify-between">
            <div>
              <Video className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-display text-lg font-bold text-white mb-2">Virtual Classrooms</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Secure real-time audio/video links integrated directly with class calendars and student rosters.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-indigo-950/30 flex flex-col justify-between">
            <div>
              <Award className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-display text-lg font-bold text-white mb-2">Grading Engines</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Interactive auto-graded questionnaire files and customizable digital certificates issuance pipelines.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-indigo-950/30 flex flex-col justify-between">
            <div>
              <Database className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-display text-lg font-bold text-white mb-2">Admissions Portals</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Automated student registry systems, tuition payment channels, and school statistics trackers.
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
          Ready to Build Your E-Learning Platform?
        </h2>
        <p className="font-sans text-sm sm:text-base text-slate-400 mb-8 max-w-xl mx-auto">
          Partner with our software development agency to build custom, secure, and modern education technology solutions.
        </p>
        <button 
          onClick={() => window.open('https://wa.me/237677079559?text=Hello%20Nexora%20Empire!%2520I%2520am%2520interested%2520in%2520your%2520education%2520software%2520solutions.', '_blank')}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-brand-violet text-white font-sans text-sm font-semibold tracking-wide hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] transition-all cursor-pointer"
        >
          Initiate Discovery Call
        </button>
      </section>
    </div>
  );
};
