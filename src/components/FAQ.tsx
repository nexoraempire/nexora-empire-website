import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Headphones, 
  ArrowRight
} from 'lucide-react';

interface FAQItem {
  id: string;
  indexStr: string;
  question: string;
  answer: React.ReactNode;
}

interface FAQProps {
  setView?: (view: 'home' | 'about-us' | 'portfolio' | 'pricing' | 'academy' | 'training-internship' | 'contact' | 'web-dev' | 'mobile-dev' | 'branding-design' | 'seo-growth' | 'ai-video' | 'social-media-management') => void;
}

export const FAQ: React.FC<FAQProps> = ({ setView }) => {
  const [activeId, setActiveId] = useState<string | null>('faq-1');

  const faqItems: FAQItem[] = [
    {
      id: 'faq-1',
      indexStr: '01',
      question: 'What services does Nexora Empire offer?',
      answer: <span>We offer a complete range of digital services including <span className="font-semibold text-zinc-200">website development</span>, mobile app development, branding & graphic design, AI solutions, <span className="font-semibold text-zinc-200">AI video creation & editing</span>, digital growth services, and training & internship programs.</span>
    },
    {
      id: 'faq-2',
      indexStr: '02',
      question: 'How long does it take to complete a project?',
      answer: <span>The timeline depends on complexity. A standard professional website typically takes <span className="font-semibold text-zinc-200">2–4 weeks</span>, while complex web or mobile applications can take <span className="font-semibold text-zinc-200">6–12 weeks</span>. We provide clear milestone schedules for every project.</span>
    },
    {
      id: 'faq-3',
      indexStr: '03',
      question: 'Do you offer ongoing support after project delivery?',
      answer: <span>Yes, we provide flexible support and maintenance packages. This includes <span className="font-semibold text-zinc-200">regular updates, security monitoring, content edits</span>, performance optimization, and immediate troubleshooting to ensure your platform runs flawlessly.</span>
    },
    {
      id: 'faq-4',
      indexStr: '04',
      question: 'Can you work with our existing brand or team?',
      answer: <span>Absolutely! We can seamlessly integrate with your existing brand guidelines, designs, or working team. Whether you need us to build on top of an existing codebase or collaborate with your internal developers, <span className="font-semibold text-zinc-200">we adapt to your workflow</span>.</span>
    },
    {
      id: 'faq-5',
      indexStr: '05',
      question: 'What is your pricing structure?',
      answer: <span>We work with both fixed-price projects and monthly retainer models, depending on the scope. After an initial consultation, we provide a <span className="font-semibold text-zinc-200">transparent, detailed proposal</span> with no hidden costs so you know exactly what is included.</span>
    },
    {
      id: 'faq-6',
      indexStr: '06',
      question: 'How do we get started with Nexora Empire?',
      answer: <span>Getting started is simple! Click the "Start a Project" button below to fill out our briefing form, or reach out directly <span className="font-semibold text-zinc-200">via WhatsApp</span>. We will schedule a free discovery call to discuss your goals and lay out a strategic plan.</span>
    }
  ];

  const toggleAccordion = (id: string) => {
    setActiveId(prev => prev === id ? null : id);
  };

  const handleWhatsAppRedirect = (msg: string) => {
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/237677079559?text=${encodedMsg}`, '_blank');
  };

  const handleTalkToTeam = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(contactSection, { offset: -90 });
      } else {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (setView) {
      setView('contact');
      window.scrollTo({ top: 0, behavior: 'instant' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0, { immediate: true });
      }
    }
  };

  return (
    <section 
      id="faq"
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
            className="flex flex-col items-center"
          >
            {/* Center-aligned Badge */}
            <span className="text-[11px] sm:text-xs font-mono font-extrabold uppercase tracking-[0.25em] text-[#6366f1] bg-indigo-950/20 px-4 py-1.5 rounded-full border border-indigo-500/10" id="faq-badge">
              FAQ
            </span>

            {/* Glowing Header Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mt-6 mb-6 leading-none" id="faq-heading">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Questions</span>
            </h2>

            {/* Standard Description */}
            <p className="text-sm sm:text-base md:text-md text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal mb-10" id="faq-description">
              Got questions? We've got answers. Explore our frequently asked questions to learn more about how we work.
            </p>
          </motion.div>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {faqItems.map((item, idx) => {
            const isActive = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  isActive 
                    ? "bg-gradient-to-r from-brand-electric/50 via-indigo-500/50 to-brand-violet/50 p-[1px] shadow-[0_4px_30px_rgba(109,40,217,0.12)]" 
                    : "bg-[#05050a]/60 border border-zinc-900 hover:border-zinc-800"
                }`}
              >
                <div className={`w-full rounded-[15px] bg-[#05050a] ${isActive ? 'p-5 sm:p-6' : 'p-4 sm:p-5'}`}>
                  {/* Question Header */}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      {/* Index Badge */}
                      <div className="shrink-0 flex items-center justify-center w-10 h-8 rounded-lg bg-indigo-950/35 border border-indigo-500/10 text-[#818cf8] font-mono text-[13px] font-bold">
                        {item.indexStr}
                      </div>
                      
                      {/* Question Text */}
                      <span className="font-display font-bold text-white text-sm sm:text-base md:text-[17px] tracking-tight leading-tight">
                        {item.question}
                      </span>
                    </div>

                    {/* Chevron Indicator */}
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-zinc-950/60 border border-zinc-900 text-zinc-400 transition-transform duration-300 ${isActive ? 'rotate-180 text-brand-electric border-brand-violet/30 bg-violet-950/20' : ''}`}>
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  {/* Expandable Answer (with dynamic slide & fade) */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 sm:pl-14 text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed font-normal">
                          {item.answer}
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
              onClick={handleTalkToTeam}
              className="group w-full sm:w-auto relative py-2.5 px-5 rounded-full bg-gradient-to-r from-blue-600 to-brand-violet text-white font-sans text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-1.5 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:brightness-110 active:scale-[0.98] cursor-pointer"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* WhatsApp Us */}
            <button
              onClick={() => handleWhatsAppRedirect("Hi, I have a few questions about Nexora Empire and how we can work together!")}
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
  );
};
