import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  Building,
  ChevronRight,
  FileText,
  Video,
  Globe,
  Plus,
  Minus,
  Check,
  ChevronDown,
  ArrowRight,
  Headphones,
  User
} from 'lucide-react';
import { ContactForm } from './ContactForm.tsx';

interface ContactPageProps {
  setView: (view: 'home' | 'about-us' | 'portfolio' | 'pricing' | 'academy' | 'contact') => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ setView }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Meeting Schedule Modal States
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [meetingName, setMeetingName] = useState('');
  const [meetingEmail, setMeetingEmail] = useState('');
  const [meetingSubmitted, setMeetingSubmitted] = useState(false);

  const contactFaqs: { q: string; a: React.ReactNode }[] = [
    {
      q: "How fast will I receive a reply after submitting my inquiry?",
      a: <span>Our core engineering support desk replies to all direct inquiries within <span className="font-semibold text-zinc-200">2 to 4 business hours</span>. For urgent requests, you can leverage our <span className="font-semibold text-zinc-200">instant WhatsApp link</span> to connect with a technology specialist immediately.</span>
    },
    {
      q: "Do you sign Non-Disclosure Agreements (NDAs) before discussing project specifics?",
      a: <span>Yes, absolutely. We prioritize your IP and confidential business ideas. We can sign our <span className="font-semibold text-zinc-200">standard mutual NDA</span> or review your team's custom NDA before sharing complex engineering specs or database models.</span>
    },
    {
      q: "Can I schedule a real-time virtual screen share call?",
      a: <span>Of course! You can use our interactive <span className="font-semibold text-zinc-200">Virtual Meeting Scheduler</span> directly on this page to pick a convenient Google Meet or Zoom slot. A calendar invite and conference link will be dispatched to your email automatically.</span>
    },
    {
      q: "Where is the Nexora headquarters located?",
      a: <span>We operate as a high-efficiency global development hub with physical offices in <span className="font-semibold text-zinc-200">Douala, Cameroon</span>. This strategic hub powers both local client systems and international offshore development pipelines across Europe and North America.</span>
    }
  ];

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!meetingDate || !meetingTime || !meetingName || !meetingEmail) return;

    setMeetingSubmitted(true);
    setTimeout(() => {
      setShowMeetingModal(false);
      setMeetingSubmitted(false);
      setMeetingDate('');
      setMeetingTime('');
      setMeetingName('');
      setMeetingEmail('');
    }, 3000);
  };

  return (
    <div className="relative w-full bg-[#020205] text-slate-100 overflow-hidden min-h-screen font-sans" id="contact-page-root">
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:32px_32px] opacity-60 pointer-events-none -z-10" />

      {/* Page Header banner with a beautiful background image from About Us Hero */}
      <div className="relative w-full overflow-hidden border-b border-slate-900/10 bg-[#060814]" id="contact-hero-wrapper">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 scale-105 pointer-events-none"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop')" }} 
        />
        {/* Soft elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060814] via-[#060814]/85 to-[#020205]/95 pointer-events-none" />
        
        {/* Ambient color blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 md:pt-40 md:pb-20 z-10" id="contact">
        
        {/* Header Title Section / Hero Section customized to Nexora style, referencing About Us Page Hero */}
        <div className="max-w-3xl text-left space-y-6 md:space-y-8 mb-16 md:mb-24 animate-fade-in" id="contact-hero-section">
          
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple-vibrant/10 border border-brand-purple-vibrant/20 text-xs font-semibold text-brand-electric tracking-wider uppercase font-sans select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-electric animate-pulse" />
            Let's Build Your Digital Empire
          </span>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6.5xl font-black text-white leading-[1.1] tracking-tight">
            Get In <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Touch</span>
          </h1>
          
          <p className="font-sans text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
            Have a project in mind or need expert guidance? Get in touch with our team. we're here to help you build, grow, and strengthen your online presence.
          </p>
          
          {/* Call to Actions Action bar */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4" id="contact-hero-actions">
            
            {/* WhatsApp Button with dynamic glow */}
            <button
              onClick={handleWhatsAppInstant}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white rounded-xl font-sans font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.2)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.35)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.588 1.976 14.113.953 11.5.953c-5.44 0-9.865 4.371-9.869 9.802-.001 1.736.463 3.429 1.343 4.92l-.996 3.639 3.737-.961c1.472.8 2.946 1.2 4.41.2zM17.15 14.92c-.284-.144-1.68-.823-1.94-.917-.26-.094-.449-.144-.638.144-.19.288-.731.917-.897 1.107-.165.19-.33.213-.614.07-.284-.144-1.2-.441-2.285-1.41-.845-.75-1.415-1.678-1.58-1.965-.165-.288-.018-.444.124-.585.129-.127.284-.33.427-.496.142-.165.19-.283.284-.472.094-.19.047-.354-.024-.496-.071-.142-.638-1.536-.874-2.107-.23-.554-.462-.48-.638-.49-.166-.008-.354-.01-.543-.01-.189 0-.496.071-.756.354-.26.283-.992.969-.992 2.364s1.015 2.738 1.157 2.926c.142.189 2.002 3.036 4.85 4.248.678.29 1.206.463 1.618.593.681.216 1.3.186 1.79.113.547-.081 1.68-.686 1.916-1.35.236-.663.236-1.231.165-1.35-.071-.12-.26-.19-.544-.334z" />
              </svg>
              <span>Direct WhatsApp</span>
            </button>
            
            {/* Call Us Button (Deep Space Metallic Theme) */}
            <a
              href="tel:+237677079559"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-slate-900 hover:bg-slate-800 active:scale-[0.98] border border-slate-700/60 hover:border-slate-500 text-slate-100 rounded-xl font-sans font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.3)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <Phone className="w-4 h-4 text-brand-electric fill-current" />
              <span>Voice Consultation</span>
            </a>
                   </div>
        </div>
      </div>
    </div> {/* Closes contact-hero-wrapper */}

      {/* Immersive Contact Info & Interactive Form Section */}
      <div className="w-full bg-[#f8fafc] border-y border-slate-200/80 py-20 px-6 md:px-12 relative overflow-hidden text-zinc-900" id="contact-interactive-section">
        
        {/* Soft grid overlay for light theme */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        {/* Ambient very soft light glows */}
        <div className="absolute top-[20%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-brand-purple-vibrant/2 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-brand-electric/2 blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Top 4 Cards Grid with Premium Light Glass Styling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" id="top-info-cards">
            
            {/* Card 1: Location */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_10px_35px_rgba(15,23,42,0.03)] border border-slate-200/60 hover:border-brand-purple-vibrant/30 text-center flex flex-col items-center justify-center space-y-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(90,79,243,0.06)]">
              <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-brand-purple-vibrant shrink-0 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-zinc-800 text-sm tracking-tight">Location</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-sans">
                Before slaughterhouse, Buea Town<br />Buea, Cameroon
              </p>
            </div>

            {/* Card 2: Contact */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_10px_35px_rgba(15,23,42,0.03)] border border-slate-200/60 hover:border-brand-purple-vibrant/30 text-center flex flex-col items-center justify-center space-y-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(90,79,243,0.06)]">
              <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-brand-purple-vibrant shrink-0 shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-zinc-800 text-sm tracking-tight">Contact</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-sans">
                +237 677 079 559
              </p>
            </div>

            {/* Card 3: Email */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_10px_35px_rgba(15,23,42,0.03)] border border-slate-200/60 hover:border-brand-purple-vibrant/30 text-center flex flex-col items-center justify-center space-y-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(90,79,243,0.06)]">
              <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-brand-purple-vibrant shrink-0 shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-zinc-800 text-sm tracking-tight">Email</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-sans break-all max-w-[200px]">
                contact@nexoraempire.com
              </p>
            </div>

            {/* Card 4: Office Hours */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_10px_35px_rgba(15,23,42,0.03)] border border-slate-200/60 hover:border-brand-purple-vibrant/30 text-center flex flex-col items-center justify-center space-y-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(90,79,243,0.06)]">
              <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-brand-purple-vibrant shrink-0 shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-zinc-800 text-sm tracking-tight">Office Hours</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-sans">
                Mon - Sat: 8.00-17.00<br />Sunday: Closed
              </p>
            </div>

          </div>

          {/* 2-Column Bento Grid: Left Let's Start Card, Right Let's Connect Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="interactive-content-grid">
            
            {/* Left Card: Let's Start with Premium Light Theme */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 shadow-[0_15px_45px_rgba(15,23,42,0.04)] border border-slate-200/60 hover:border-brand-purple-vibrant/20 flex flex-col justify-between text-left relative overflow-hidden" id="lets-start-card">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-purple-vibrant/2 blur-2xl pointer-events-none" />
              
              <div>
                {/* YOU ARE HERE Ribbon Badge matching the reference branding */}
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="font-sans text-[11px] font-extrabold tracking-widest text-brand-purple-vibrant uppercase">
                    YOU ARE HERE
                  </span>
                  <div className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple-vibrant animate-pulse" />
                    <span className="w-8 h-[1px] bg-brand-purple-vibrant/20" />
                  </div>
                </div>

                <h2 className="font-display text-4xl font-black text-zinc-900 tracking-tight leading-none">
                  Let's <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Start</span>
                </h2>
                
                <p className="font-sans text-xs sm:text-sm text-slate-500 mt-3 mb-8 leading-relaxed">
                  Initiating Your Journey to Success and Growth.
                </p>

                {/* Contact List with premium brand violet circles */}
                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-purple-vibrant flex items-center justify-center text-white shrink-0 shadow-md shadow-brand-purple-vibrant/20">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] font-extrabold text-slate-400 uppercase tracking-widest">Phone Number</span>
                      <a href="tel:+237677079559" className="font-display text-sm font-bold text-zinc-800 hover:text-brand-purple-vibrant transition-colors">+237 677 079 559</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-purple-vibrant flex items-center justify-center text-white shrink-0 shadow-md shadow-brand-purple-vibrant/20">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] font-extrabold text-slate-400 uppercase tracking-widest">Secure Email</span>
                      <a href="mailto:contact@nexoraempire.com" className="font-display text-sm font-bold text-zinc-800 hover:text-brand-purple-vibrant transition-colors break-all">contact@nexoraempire.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-purple-vibrant flex items-center justify-center text-white shrink-0 shadow-md shadow-brand-purple-vibrant/20">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] font-extrabold text-slate-400 uppercase tracking-widest">Headquarters</span>
                      <span className="font-display text-sm font-bold text-zinc-800">Before slaughterhouse, Buea Town</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical Process Steps timeline matching light presentation */}
              <div className="border-t border-slate-100 pt-8 mt-4">
                <div className="relative border-l border-slate-100 ml-4 pl-8 space-y-6">
                  {[
                    { num: '01', text: 'Share Your Requirements' },
                    { num: '02', text: 'Discuss Them With Our Experts' },
                    { num: '03', text: 'Get A Free Quote' },
                    { num: '04', text: 'Start The Project' },
                  ].map((step, idx) => (
                    <div key={idx} className="relative flex items-center">
                       <div className="absolute -left-[41px] w-6 h-6 rounded-full border border-brand-purple-vibrant/30 bg-white flex items-center justify-center text-[10px] font-bold text-brand-purple-vibrant font-sans shadow-sm">
                        {step.num}
                      </div>
                      <span className="font-sans text-xs font-semibold text-slate-600">{step.text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Card: Let's Connect Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-[0_15px_45px_rgba(15,23,42,0.04)] border border-slate-200/60 text-left relative overflow-hidden" id="lets-connect-form">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-brand-purple-vibrant/2 blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-1 h-6 bg-brand-purple-vibrant rounded-full" />
                <h3 className="font-display text-2xl font-black text-zinc-900 tracking-tight">
                  Let's Connect!
                </h3>
              </div>
              
              <p className="font-sans text-xs sm:text-sm text-slate-500 mb-8 leading-relaxed">
                Send us a message, and we'll promptly discuss your project with you.
              </p>

              <ContactForm />
            </div>

          </div>

          {/* Interactive Google Map Section - styled in gorgeous light glass */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/60 text-left shadow-[0_15px_45px_rgba(15,23,42,0.03)]"
            id="interactive-google-map-section"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6" id="map-header-block">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-brand-purple-vibrant shrink-0 shadow-sm" id="map-icon-container">
                  <MapPin className="w-6 h-6" />
                </div>
                <div id="map-text-container">
                  <span className="font-mono text-[9px] font-extrabold text-brand-purple-vibrant uppercase tracking-widest block">
                    Our Location
                  </span>
                  <h3 className="font-display font-black text-zinc-900 text-xl sm:text-2xl tracking-tight mt-0.5">
                    Nexora Empire, Buea
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 mt-1">
                    Plus Code: <strong className="text-slate-700 font-bold">5733+99R, Buea, Cameroon</strong>
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3" id="map-actions-container">
                <a
                  href="https://maps.google.com/?q=5733%2B99R%20Buea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-brand-purple-vibrant hover:brightness-110 text-white rounded-xl font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-indigo-600/20 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple-vibrant focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-95"
                  id="open-maps-btn"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Interactive Map IFrame with unique ID and zero border */}
            <div className="w-full h-[380px] sm:h-[450px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner relative bg-slate-100" id="map-iframe-container">
              <iframe
                id="google-maps-live-iframe"
                title="Nexora Empire Buea Location Map"
                src="https://maps.google.com/maps?q=5733%2B99R%2C%20Buea&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-90"
              />
            </div>
          </motion.div>

          {/* Quick Contact Cards (Exactly as requested by the screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12" id="quick-contact-cards-section">
            
            {/* Card 1: WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/60 text-center flex flex-col items-center justify-between min-h-[340px] transition-all duration-300 hover:scale-[1.02] hover:border-brand-purple-vibrant/20 hover:shadow-[0_20px_50px_rgba(90,79,243,0.06)] shadow-[0_10px_35px_rgba(15,23,42,0.02)]"
              id="whatsapp-card-block"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#25D366] shadow-sm mb-6" id="whatsapp-icon-bg">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-zinc-900 text-xl tracking-tight mb-2">
                  WhatsApp
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed max-w-[220px]">
                  Quick responses via WhatsApp
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const encodedMsg = encodeURIComponent("Hi Nexora Empire, I'm reaching out from the Contact Us page!");
                  window.open(`https://wa.me/237677079559?text=${encodedMsg}`, '_blank');
                }}
                className="w-full max-w-[200px] py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-sans font-bold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-md shadow-emerald-600/10 hover:shadow-emerald-600/20 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-95"
                id="whatsapp-chat-btn"
              >
                Chat Now
              </button>
            </motion.div>

            {/* Card 2: Schedule a Call */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/60 text-center flex flex-col items-center justify-between min-h-[340px] transition-all duration-300 hover:scale-[1.02] hover:border-brand-purple-vibrant/20 hover:shadow-[0_20px_50px_rgba(90,79,243,0.06)] shadow-[0_10px_35px_rgba(15,23,42,0.02)]"
              id="schedule-call-card-block"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-brand-purple-vibrant shadow-sm mb-6" id="calendar-icon-bg">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-zinc-900 text-xl tracking-tight mb-2">
                  Schedule a Call
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed max-w-[220px]">
                  Book a consultation session
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowMeetingModal(true)}
                className="w-full max-w-[200px] py-3.5 px-6 bg-gradient-to-r from-blue-600 to-brand-purple-vibrant hover:brightness-110 text-white rounded-xl font-sans font-bold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-md shadow-indigo-600/15 hover:shadow-indigo-600/25 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-95"
                id="schedule-booking-btn"
              >
                Book Now
              </button>
            </motion.div>

            {/* Card 3: Email Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/60 text-center flex flex-col items-center justify-between min-h-[340px] transition-all duration-300 hover:scale-[1.02] hover:border-brand-purple-vibrant/20 hover:shadow-[0_20px_50px_rgba(90,79,243,0.06)] shadow-[0_10px_35px_rgba(15,23,42,0.02)]"
              id="email-card-block"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 shadow-sm mb-6" id="email-icon-bg">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-zinc-900 text-xl tracking-tight mb-2">
                  Email Support
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed max-w-[220px]">
                  Get detailed responses via email
                </p>
              </div>
              <a
                href="mailto:nexoraempire0@gmail.com"
                className="w-full max-w-[200px] py-3.5 px-6 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-sans font-bold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-md shadow-rose-600/10 hover:shadow-rose-600/20 text-center block focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-95"
                id="send-email-btn"
              >
                Send Email
              </a>
            </motion.div>

          </div>



        </div>

      </div>

      {/* Dark-themed FAQ accordion segment */}
      <div className="w-full bg-[#020205] text-slate-100 py-24 px-6 md:px-12 relative overflow-hidden" id="faq-interactive-section">
        
        {/* Ambient background glows for the FAQ section */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-purple-vibrant/5 blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-electric/5 blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto" id="contact-faq-section">
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
              <span className="text-[11px] sm:text-xs font-mono font-extrabold uppercase tracking-[0.25em] text-brand-electric bg-indigo-950/20 px-4 py-1.5 rounded-full border border-brand-purple-vibrant/10">
                FAQ
              </span>

              {/* Glowing Header Title */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mt-3">
                Frequently Asked <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Questions</span>
              </h2>

              {/* Delicate colored line divider */}
              <div className="w-14 h-[2px] bg-gradient-to-r from-blue-500 to-brand-purple-vibrant rounded-full mt-4" />
            </motion.div>
          </div>

          {/* Accordion List */}
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {contactFaqs.map((faq, idx) => {
              const isExpanded = activeFaq === idx;
              const indexStr = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                    isExpanded 
                      ? "bg-gradient-to-r from-brand-electric/50 via-indigo-500/50 to-brand-purple-vibrant/50 p-[1px] shadow-[0_4px_30px_rgba(90,79,243,0.12)]" 
                      : "bg-[#05050a]/60 border border-zinc-900 hover:border-zinc-800"
                  }`}
                >
                  <div className={`w-full rounded-[15px] bg-[#05050a] ${isExpanded ? 'p-5 sm:p-6' : 'p-4 sm:p-5'}`}>
                    {/* Question Header */}
                    <button
                      onClick={() => setActiveFaq(isExpanded ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-xl px-2 py-1 active:scale-[0.99] transition-transform duration-200"
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
                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-zinc-950/60 border border-zinc-900 text-zinc-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-brand-electric border-brand-purple-vibrant/30 bg-violet-950/20' : ''}`}>
                        <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </button>

                    {/* Expandable Answer (with dynamic slide & fade) */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
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
              <div className="w-12 h-12 rounded-full bg-indigo-950/40 border border-brand-purple-vibrant/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(90,79,243,0.2)]">
                <Headphones className="w-5.5 h-5.5 text-brand-purple-vibrant" />
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
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group w-full sm:w-auto relative py-2.5 px-5 rounded-full bg-gradient-to-r from-blue-600 to-brand-purple-vibrant text-white font-sans text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-1.5 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:brightness-110 active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* WhatsApp Us */}
              <button
                onClick={() => {
                  const encodedMsg = encodeURIComponent("Hi Nexora Empire, I have a few questions and would like to talk!");
                  window.open(`https://wa.me/237677079559?text=${encodedMsg}`, '_blank');
                }}
                className="group w-full sm:w-auto relative py-2.5 px-5 rounded-full bg-[#020205] text-[#25d366] hover:text-white font-sans text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 border border-zinc-800 hover:border-brand-purple-vibrant/50 hover:bg-violet-950/10 active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <svg className="w-4 h-4 fill-[#25d366] group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.588 1.976 14.113.953 11.5.953c-5.44 0-9.865 4.371-9.869 9.802-.001 1.736.463 3.429 1.343 4.92l-.996 3.639 3.737-.961c1.472.8 2.946 1.2 4.41.2zM17.15 14.92c-.284-.144-1.68-.823-1.94-.917-.26-.094-.449-.144-.638.144-.19.288-.731.917-.897 1.107-.165.19-.33.213-.614.07-.284-.144-1.2-.441-2.285-1.41-.845-.75-1.415-1.678-1.58-1.965-.165-.288-.018-.444.124-.585.129-.127.284-.33.427-.496.142-.165.19-.283.284-.472.094-.19.047-.354-.024-.496-.071-.142-.638-1.536-.874-2.107-.23-.554-.462-.48-.638-.49-.166-.008-.354-.01-.543-.01-.189 0-.496.071-.756.354-.26.283-.992.969-.992 2.364s1.015 2.738 1.157 2.926c.142.189 2.002 3.036 4.85 4.248.678.29 1.206.463 1.618.593.681.216 1.3.186 1.79.113.547-.081 1.68-.686 1.916-1.35.236-.663.236-1.231.165-1.35-.071-.12-.26-.19-.544-.334z" />
              </svg>
              <span>WhatsApp Us</span>
            </button>
          </div>
        </motion.div>
      </div>     </div>

      {/* Virtual Meeting Scheduler Modal */}
      <AnimatePresence>
        {showMeetingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6" id="scheduler-modal-root">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMeetingModal(false)}
              className="absolute inset-0 bg-[#010103]/90 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-[#05050c] border border-indigo-950/60 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative z-10 text-left overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-purple-vibrant/5 blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-indigo-950/40 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-purple-vibrant animate-pulse" />
                  <span className="font-mono text-xs font-bold tracking-widest text-slate-300 uppercase">
                    Virtual Meeting Scheduler
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowMeetingModal(false)}
                  className="text-slate-500 hover:text-white transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric rounded-lg p-1 active:scale-90"
                >
                  <Plus className="w-5 h-5 rotate-45" />
                </button>
              </div>

              {!meetingSubmitted ? (
                <form onSubmit={handleScheduleSubmit} className="space-y-4">
                  <p className="font-sans text-xs text-slate-400 leading-relaxed mb-4">
                    Book an exclusive screen share demo. A secure Google Meet calendar invite link will be dispatched automatically upon confirmation.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] font-bold text-slate-400 uppercase">
                        Select Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={meetingDate}
                        onChange={(e) => setMeetingDate(e.target.value)}
                        className="w-full px-3 py-2.5 bg-[#030307] border border-indigo-950/40 rounded-xl font-sans text-xs text-white focus:border-brand-purple-vibrant focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:border-transparent"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="meeting-time" className="font-mono text-[9px] font-bold text-slate-400 uppercase">
                        Select Time Slot *
                      </label>
                      <select
                        required
                        id="meeting-time"
                        aria-label="Select Time Slot"
                        value={meetingTime}
                        onChange={(e) => setMeetingTime(e.target.value)}
                        className="w-full px-3 py-2.5 bg-[#030307] border border-indigo-950/40 rounded-xl font-sans text-xs text-white focus:border-brand-purple-vibrant focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:border-transparent cursor-pointer"
                      >
                        <option value="">Choose Slot</option>
                        <option value="09:00">09:00 AM WAT</option>
                        <option value="11:00">11:00 AM WAT</option>
                        <option value="14:00">02:00 PM WAT</option>
                        <option value="16:00">04:00 PM WAT</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] font-bold text-slate-400 uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={meetingName}
                      onChange={(e) => setMeetingName(e.target.value)}
                      placeholder="e.g. Jean Dupont"
                      className="w-full px-3 py-2.5 bg-[#030307] border border-indigo-950/40 rounded-xl font-sans text-xs text-white focus:border-brand-purple-vibrant focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:border-transparent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] font-bold text-slate-400 uppercase">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={meetingEmail}
                      onChange={(e) => setMeetingEmail(e.target.value)}
                      placeholder="e.g. jean@company.com"
                      className="w-full px-3 py-2.5 bg-[#030307] border border-indigo-950/40 rounded-xl font-sans text-xs text-white focus:border-brand-purple-vibrant focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-6 py-3.5 bg-brand-purple-vibrant hover:bg-brand-purple-vibrant/90 text-white rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98]"
                  >
                    Confirm Meeting Booking
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto animate-pulse">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="font-display text-base font-bold text-white">Meeting Registered!</h4>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
                    Outstanding, <span className="text-white font-bold">{meetingName}</span>. Your virtual screenshare demo is securely booked for <span className="text-white">{meetingDate}</span> at <span className="text-white">{meetingTime}</span>. A calendar invite link has been dispatched to your email address.
                  </p>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
      


    </div>
  );
};
