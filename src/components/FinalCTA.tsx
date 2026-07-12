import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  User, 
  Briefcase, 
  MessageSquare,
  CheckCircle,
  Globe
} from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after a delay
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const handleWhatsAppRedirect = (msg: string) => {
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/237677079559?text=${encodedMsg}`, '_blank');
  };

  return (
    <section 
      id="contact" 
      className="relative w-full py-24 sm:py-28 md:py-32 px-6 bg-slate-50 overflow-hidden border-t border-slate-200 text-slate-800"
    >
      {/* Background Orbs & Radial Grids */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.8] bg-[radial-gradient(#e2e8f0_1.2px,transparent_1.2px)] [background-size:24px_24px] z-0" />
        
        {/* Soft, delicate glows */}
        <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-indigo-100/40 blur-[130px] pointer-events-none z-0" />
        <div className="absolute bottom-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-100/30 blur-[130px] pointer-events-none z-0" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* HEADER BLOCK */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3.5"
          >
            {/* Center-aligned Badge */}
            <span className="text-[11px] sm:text-xs font-mono font-extrabold uppercase tracking-[0.25em] text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100/50">
              CONTACT US
            </span>

            {/* Glowing Header Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 mt-3">
              Get in <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Touch</span>
            </h2>

            <p className="font-sans text-slate-500 text-sm sm:text-base mt-4 max-w-xl">
              We're here to help you bring your ideas to life.
            </p>

            {/* Delicate colored line divider */}
            <div className="w-14 h-[2px] bg-gradient-to-r from-blue-500 to-brand-violet rounded-full mt-4" />
          </motion.div>
        </div>

        {/* 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* LEFT COLUMN: Let's Start */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-white border border-slate-100 shadow-[0_15px_35px_rgba(0,0,0,0.02)] flex flex-col justify-between"
          >
            <div>
              {/* YOU ARE HERE Badge with graphic line */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-indigo-600 font-extrabold">
                  YOU ARE HERE
                </span>
                <div className="flex items-center">
                  <div className="w-14 h-[1.5px] bg-indigo-100" />
                  <div className="w-2 h-2 rounded-full bg-brand-violet shadow-[0_0_10px_rgba(139,92,246,0.4)]" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
                Let's Start
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-500 mb-8 leading-relaxed">
                Initiating Your Journey to Success and Growth.
              </p>

              {/* Contact Icons block */}
              <div className="space-y-4 mb-8">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-sans text-sm sm:text-base text-slate-700 hover:text-slate-900 transition-colors">
                    +237-677-079-559
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a 
                    href="mailto:contact@nexoraempire.com"
                    className="font-sans text-sm sm:text-base text-slate-700 hover:text-slate-900 hover:underline transition-all"
                  >
                    contact@nexoraempire.com
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-sans text-sm sm:text-base text-slate-700">
                    Before Slaughterhouse,Buea Town, Cameroon
                  </span>
                </div>
              </div>
            </div>

            {/* Separator line */}
            <div className="w-full h-[1px] bg-slate-100 my-4" />

            {/* Numbered Steps with Vertical connecting line */}
            <div className="relative pl-3 space-y-6">
              {/* Absolute running line */}
              <div className="absolute left-[27px] top-3 bottom-3 w-[1px] bg-indigo-100 z-0" />

              {/* Step 1 */}
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-indigo-100 bg-slate-50 flex items-center justify-center text-indigo-600 font-mono text-[11px] font-bold shrink-0">
                  01
                </div>
                <span className="font-sans text-xs sm:text-sm text-slate-600 font-medium">
                  Share Your Requirements
                </span>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-indigo-100 bg-slate-50 flex items-center justify-center text-indigo-600 font-mono text-[11px] font-bold shrink-0">
                  02
                </div>
                <span className="font-sans text-xs sm:text-sm text-slate-600 font-medium">
                  Discuss Them With Our Experts
                </span>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-indigo-100 bg-slate-50 flex items-center justify-center text-indigo-600 font-mono text-[11px] font-bold shrink-0">
                  03
                </div>
                <span className="font-sans text-xs sm:text-sm text-slate-600 font-medium">
                  Get A Free Quote
                </span>
              </div>

              {/* Step 4 */}
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-indigo-100 bg-slate-50 flex items-center justify-center text-indigo-600 font-mono text-[11px] font-bold shrink-0">
                  04
                </div>
                <span className="font-sans text-xs sm:text-sm text-slate-600 font-medium">
                  Start The Project
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Let's Connect */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl p-6 sm:px-8 sm:py-6 bg-white border border-slate-100 shadow-[0_15px_35px_rgba(0,0,0,0.02)] flex flex-col justify-start"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                  
                  {/* Inner Form Header */}
                  <div className="text-center mb-2">
                    <h3 className="font-display text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">
                      Let's Connect!
                    </h3>
                    <div className="w-10 h-[2px] bg-indigo-100 mx-auto mt-2" />
                    <p className="font-sans text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                      Send us a message, and we'll promptly discuss your project with you. We guarantee a response in less than 24 hours.
                    </p>
                  </div>

                  {/* Grid of 4 input fields + Dropdown + Textarea */}
                  <div className="space-y-4">
                    
                    {/* Row 1: Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="relative text-left">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:border-indigo-500 focus:bg-white focus:outline-none font-sans text-sm text-slate-900 placeholder-slate-400 transition-all duration-300"
                        />
                      </div>

                      {/* Email */}
                      <div className="relative text-left">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="Your Email"
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:border-indigo-500 focus:bg-white focus:outline-none font-sans text-sm text-slate-900 placeholder-slate-400 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone and Company Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone No */}
                      <div className="relative text-left">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                          type="tel"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          placeholder="Your Phone No."
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:border-indigo-500 focus:bg-white focus:outline-none font-sans text-sm text-slate-900 placeholder-slate-400 transition-all duration-300"
                        />
                      </div>

                      {/* Company Name */}
                      <div className="relative text-left">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                          type="text"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          placeholder="Your Company Name"
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:border-indigo-500 focus:bg-white focus:outline-none font-sans text-sm text-slate-900 placeholder-slate-400 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Project Type Dropdown */}
                    <div className="relative text-left">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                      <select
                        required
                        id="cta-project-type"
                        aria-label="Select Project Type"
                        value={formState.projectType}
                        onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                        className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:border-indigo-500 focus:bg-white focus:outline-none font-sans text-sm text-slate-900 transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="text-slate-400">Select Project Type</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile Application</option>
                        <option value="e-commerce">E-Commerce Solution</option>
                        <option value="custom-software">Custom Software Engineering</option>
                        <option value="ui-ux-design">UI/UX Design & Branding</option>
                        <option value="digital-marketing">Digital Strategy & Growth</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                      {/* Chevron down arrow icon */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                           <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Full Width Textarea */}
                    <div className="relative text-left">
                      <MessageSquare className="absolute left-4 top-5 text-slate-400 w-4 h-4" />
                      <textarea
                        required
                        rows={6}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tell us about your project or inquiry"
                        className="w-full pl-11 pr-4 py-5 rounded-xl bg-slate-50 border border-slate-200/80 focus:border-indigo-500 focus:bg-white focus:outline-none font-sans text-sm text-slate-900 placeholder-slate-400 transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>

                  {/* Style block for flying send request button animation effect */}
                  <style dangerouslySetInnerHTML={{__html: `
                    @keyframes fly-1 {
                      from {
                        transform: translateY(0.08em);
                      }
                      to {
                        transform: translateY(-0.08em);
                      }
                    }

                    .uiverse-send-btn {
                      font-family: inherit;
                      overflow: hidden;
                      position: relative;
                      transition: all 0.3s ease-in-out;
                    }

                    .uiverse-send-btn span {
                      display: inline-block;
                      max-width: 150px;
                      opacity: 1;
                      margin-left: 0.5rem;
                      white-space: nowrap;
                      transform: translateX(0);
                      transition: max-width 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                                  opacity 0.3s ease-in-out, 
                                  transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                                  margin-left 0.4s cubic-bezier(0.25, 1, 0.5, 1);
                    }

                    .uiverse-send-btn .svg-wrapper-1 {
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    }

                    .uiverse-send-btn .svg-wrapper {
                      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
                    }

                    .uiverse-send-btn svg {
                      display: block;
                      transform-origin: center center;
                      transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
                    }

                    .uiverse-send-btn:hover:not(:disabled) .svg-wrapper {
                      animation: fly-1 0.6s ease-in-out infinite alternate;
                    }

                    .uiverse-send-btn:hover:not(:disabled) svg {
                      transform: rotate(45deg) scale(1.15);
                    }

                    .uiverse-send-btn:hover:not(:disabled) span {
                      max-width: 0;
                      opacity: 0;
                      margin-left: 0;
                      transform: translateX(40px);
                    }

                    .uiverse-send-btn:active:not(:disabled) {
                      transform: scale(0.96);
                    }
                  `}} />

                  {/* Send Request Interactive Button */}
                  <div className="flex justify-start pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="uiverse-send-btn group py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-brand-violet text-white font-sans text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_4px_25px_rgba(99,102,241,0.3)] hover:brightness-110 disabled:opacity-50 flex items-center justify-center cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Processing Request...</span>
                        </>
                      ) : (
                        <>
                          <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                className="fill-current text-white"
                              >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                              </svg>
                            </div>
                          </div>
                          <span>SEND REQUEST</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              ) : (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-16 h-full space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Message Received!</h3>
                    <p className="font-sans text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-slate-900 font-medium">{formState.name}</span>. We have successfully received your inquiry. One of our digital growth specialists will contact you shortly.
                    </p>
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    Resetting form screen...
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
