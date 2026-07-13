import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Mail, 
  Phone, 
  Globe, 
  MessageSquare, 
  ArrowUpRight, 
  CheckCircle2 
} from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'fullstack',
    budgetRange: 'medium',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    { id: 'fullstack', name: 'Full-Stack Web Engineering' },
    { id: 'mobile', name: 'Native Mobile App' },
    { id: 'uiux', name: 'UI/UX Product Design' },
    { id: 'ai-agents', name: 'AI Agent & Automation Systems' },
    { id: 'academy', name: 'Training / Academy' },
    { id: 'custom', name: 'Other Custom Solution' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
    } catch (err) {
      console.error("Contact form submission failed:", err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Auto reset form state
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceInterest: 'fullstack',
        budgetRange: 'medium',
        message: ''
      });
      setIsSubmitted(false);
    }, 5000);
  };

  const handleWhatsAppInstant = () => {
    const serviceName = servicesList.find(s => s.id === formState.serviceInterest)?.name || 'Software Project';
    const msgText = `Hi Nexora, my name is ${formState.name || 'Visitor'}. I am interested in building a ${serviceName} with you. Let's discuss details!`;
    window.open(`https://wa.me/237677079559?text=${encodeURIComponent(msgText)}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" id="light-contact-form">
      {/* 2-Column Grid for Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-purple-vibrant/50" />
          <input
            type="text"
            required
            placeholder="Your Name"
            aria-label="Your Full Name"
            autoComplete="name"
            value={formState.name}
            onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200/80 focus:bg-white focus:border-brand-purple-vibrant focus:ring-1 focus:ring-brand-purple-vibrant/20 rounded-xl font-sans text-xs text-zinc-800 placeholder-slate-400 focus:outline-none transition-all duration-300"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-purple-vibrant/50" />
          <input
            type="email"
            required
            placeholder="Your Email"
            aria-label="Your Email Address"
            autoComplete="email"
            value={formState.email}
            onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200/80 focus:bg-white focus:border-brand-purple-vibrant focus:ring-1 focus:ring-brand-purple-vibrant/20 rounded-xl font-sans text-xs text-zinc-800 placeholder-slate-400 focus:outline-none transition-all duration-300"
          />
        </div>
      </div>

      {/* 2-Column Grid for Phone & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-purple-vibrant/50" />
          <input
            type="tel"
            placeholder="Your Phone No."
            aria-label="Your Phone Number"
            autoComplete="tel"
            value={formState.phone}
            onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200/80 focus:bg-white focus:border-brand-purple-vibrant focus:ring-1 focus:ring-brand-purple-vibrant/20 rounded-xl font-sans text-xs text-zinc-800 placeholder-slate-400 focus:outline-none transition-all duration-300"
          />
        </div>

        <div className="relative">
          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-purple-vibrant/50" />
          <input
            type="text"
            placeholder="Your Company Name"
            aria-label="Your Company Name"
            autoComplete="organization"
            value={formState.company}
            onChange={(e) => setFormState(prev => ({ ...prev, company: e.target.value }))}
            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200/80 focus:bg-white focus:border-brand-purple-vibrant focus:ring-1 focus:ring-brand-purple-vibrant/20 rounded-xl font-sans text-xs text-zinc-800 placeholder-slate-400 focus:outline-none transition-all duration-300"
          />
        </div>
      </div>

      {/* Service of Interest */}
      <div className="space-y-2">
        <label htmlFor="contact-service-interest" className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-wider block text-left">
          Service of Interest
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5" role="radiogroup">
          {servicesList.map(srv => {
            const isSelected = formState.serviceInterest === srv.id;
            return (
              <button
                key={srv.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setFormState(prev => ({ ...prev, serviceInterest: srv.id }))}
                className={`p-3 rounded-xl border text-[11px] font-sans font-bold text-center transition-all duration-300 cursor-pointer focus:outline-none active:scale-95 ${
                  isSelected
                    ? 'bg-brand-purple-vibrant/10 border-brand-purple-vibrant text-brand-purple-vibrant shadow-[0_0_15px_rgba(90,79,243,0.08)]'
                    : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700'
                }`}
              >
                {srv.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Message / Inquiry text area */}
      <div className="relative">
        <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-brand-purple-vibrant/50" />
        <textarea
          required
          rows={4}
          placeholder="Tell us about your project or Inquiry"
          aria-label="Tell us about your project or Inquiry"
          value={formState.message}
          onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
          className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200/80 focus:bg-white focus:border-brand-purple-vibrant focus:ring-1 focus:ring-brand-purple-vibrant/20 rounded-xl font-sans text-xs text-zinc-800 placeholder-slate-400 focus:outline-none transition-all duration-300 resize-none"
        />
      </div>

      {/* Submit & WhatsApp triggers */}
      <div className="pt-2 flex flex-col sm:flex-row gap-4">
        <button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4.5 bg-gradient-to-r from-blue-600 to-brand-purple-vibrant text-white rounded-xl font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-indigo-600/20 hover:brightness-110 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer focus:outline-none"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              SENDING REQUEST...
            </>
          ) : isSubmitted ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-white" />
              REQUEST SENT
            </>
          ) : (
            <>
              <span>SEND REQUEST</span>
              <ArrowUpRight className="w-4 h-4" />
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleWhatsAppInstant}
          className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-emerald-600/10 hover:scale-[1.01] active:scale-[0.99] cursor-pointer focus:outline-none"
        >
          <MessageSquare className="w-4 h-4" />
          Instant WhatsApp
        </button>
      </div>

      {/* Status Banner */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 bg-violet-50 border border-violet-100 rounded-xl"
          >
            <p className="font-sans text-xs text-slate-600 leading-relaxed text-center">
              🌟 Thank you, <span className="text-zinc-900 font-bold">{formState.name}</span>. Your technical request is registered. A Nexora development lead will contact you within 2-4 hours to organize your proposal.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};
