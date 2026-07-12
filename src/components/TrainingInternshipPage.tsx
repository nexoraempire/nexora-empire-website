import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';
import { 
  GraduationCap, 
  Code, 
  Smartphone, 
  Layout, 
  Award, 
  BookOpen, 
  Users, 
  Layers, 
  Briefcase, 
  Check, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Star,
  TrendingUp, 
  Video, 
  Palette, 
  Laptop, 
  MapPin, 
  School, 
  Globe, 
  Calendar, 
  DollarSign, 
  Clock, 
  ArrowLeft, 
  Mail, 
  Phone, 
  User, 
  CheckCircle,
  X,
  Play,
  Headphones
} from 'lucide-react';

interface TrainingInternshipPageProps {
  setView: (view: 'home' | 'about-us' | 'portfolio' | 'pricing' | 'academy' | 'training-internship' | 'contact' | 'web-dev' | 'mobile-dev' | 'branding-design' | 'seo-growth' | 'ai-video' | 'social-media-management') => void;
}

export const TrainingInternshipPage: React.FC<TrainingInternshipPageProps> = ({ setView }) => {
  const formatHighlights = (text: string, isLightBg: boolean = true) => {
    if (!text) return '';
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const clean = part.slice(2, -2);
        return (
          <strong key={i} className={`font-extrabold ${isLightBg ? 'text-slate-900' : 'text-white'}`}>
            {clean}
          </strong>
        );
      }
      return part;
    });
  };

  // Modal State for application form
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [currency, setCurrency] = useState<'XAF' | 'USD'>('XAF');
  const [selectedProgramTab, setSelectedProgramTab] = useState<string>('frontend');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    program: 'Full-Stack Web Development',
    plan: 'Online Training',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Active Program Details modal state for "Learn More"
  const [activeProgramModal, setActiveProgramModal] = useState<any | null>(null);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Learning Timeline active step hover state
  const [activeTimelineStep, setActiveTimelineStep] = useState<number | null>(null);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    }
  }, []);

  const handleApplyClick = (programName?: string, planName?: string) => {
    setFormData(prev => ({
      ...prev,
      program: programName || prev.program,
      plan: planName || prev.plan
    }));
    setShowApplyModal(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      if (data.emailPreviewUrl) {
        console.log("📨 [Development Mode] Email dispatched! View preview at:", data.emailPreviewUrl);
      }
      
      setTimeout(() => {
        setIsSubmitted(false);
        setShowApplyModal(false);
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          program: 'Full-Stack Web Development',
          plan: 'Online Training',
          message: ''
        });
      }, 3500);
    } catch (err) {
      console.error("Real-time submission failed:", err);
      // Seamless graceful degradation if API route has temporary connectivity issues
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setShowApplyModal(false);
      }, 3000);
    }
  };

  // 2. Why Choose feature list
  const whyChooseFeatures = [
    {
      title: 'Project-Based Learning',
      description: 'Ditch boring slides. Write **actual code**, design **real interfaces**, and build **industry-grade applications** from day one.',
      icon: Code,
      accentColor: 'from-violet-500 to-indigo-500',
      iconColor: 'text-violet-500',
      bgColor: 'bg-violet-50'
    },
    {
      title: 'Industry Mentorship',
      description: 'Learn directly from active, **battle-tested software engineers**, lead designers, and **tech growth experts** who work on real projects.',
      icon: Users,
      accentColor: 'from-blue-500 to-teal-500',
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Portfolio Development',
      description: 'Exit with more than a certificate. Build a robust, **production-ready portfolio** of real-world apps that **command respect** from employers.',
      icon: Briefcase,
      accentColor: 'from-indigo-500 to-purple-500',
      iconColor: 'text-indigo-500',
      bgColor: 'bg-indigo-50'
    },
    {
      title: 'Internship Opportunities',
      description: 'Transition directly from learner to coworker. Top performers qualify for **hands-on, 2-month client internships** within Nexora Empire.',
      icon: Award,
      accentColor: 'from-emerald-500 to-teal-500',
      iconColor: 'text-emerald-500',
      bgColor: 'bg-emerald-50'
    }
  ];

  // 3. Learning Paths Programs (Comprehensive, non-brief detailed 8 tracks)
  const programs = [
    {
      id: 'frontend',
      title: 'Front End Web Development',
      icon: Code,
      duration: '3 Months',
      hours: '150+ Study Hours',
      level: 'Beginner Friendly',
      certificate: 'Verifiable Certificate',
      priceXAF: '75,000 XAF',
      priceUSD: '$125',
      monthlyPriceXAF: '30,000 XAF',
      monthlyPriceUSD: '$50',
      crossedPriceXAF: '90,000 XAF',
      crossedPriceUSD: '$150',
      shortDesc: 'Master **UI rendering**, responsive browser workflows, and advanced **React components**.',
      longDesc: 'Ditch static layouts. Learn how to engineer **responsive web client experiences** from scratch. You will build **actual design components**, integrate robust **state management systems** with React hooks, and code **pixel-perfect digital portals** that run fast across mobile and desktop devices.',
      technologies: ['HTML5 & CSS3', 'Tailwind CSS', 'JavaScript (ES6+)', 'TypeScript', 'React (Vite)', 'Framer Motion', 'Git & GitHub'],
      skillsGained: [
        'Build responsive, touch-friendly UI grids from layout wireframes',
        'Master state engines, state lifting, and customized React hooks',
        'Utilize Framer Motion to craft high-fidelity interface animations',
        'Consume standard REST APIs and handle dynamic network states',
        'Verify visual code using Google Chrome Developer Tools'
      ],
      careerRoles: ['Frontend Developer', 'UI Engineer', 'React Specialist', 'Web Integration Lead'],
      accentColor: 'text-brand-electric',
      borderColor: 'rgba(0, 190, 250, 0.25)',
      glowColor: 'rgba(0, 190, 250, 0.08)'
    },
    {
      id: 'backend',
      title: 'Back End Systems Engineering',
      icon: Layers,
      duration: '3 Months',
      hours: '150+ Study Hours',
      level: 'Intermediate',
      certificate: 'Verifiable Certificate',
      priceXAF: '75,000 XAF',
      priceUSD: '$125',
      monthlyPriceXAF: '30,000 XAF',
      monthlyPriceUSD: '$50',
      crossedPriceXAF: '90,000 XAF',
      crossedPriceUSD: '$150',
      shortDesc: 'Design robust **server logic**, transactional databases, and **secure RESTful APIs**.',
      longDesc: 'Master the unseen power of software. This curriculum teaches you **server-side programming**, relational schemas, **user authorization cycles**, transactional integrity, and containerized deployments. You will construct **bulletproof backend APIs** that handle high transaction rates securely.',
      technologies: ['Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Prisma ORM', 'JWT Security', 'Docker', 'RESTful APIs'],
      skillsGained: [
        'Design highly secured database schemas and relational indexes',
        'Implement token-based access controls and secure route gates',
        'Build automated tests to verify back-end integrity',
        'Integrate third-party systems like Stripe and Mobile Money payments',
        'Deploy microservices using Docker containers and cloud environments'
      ],
      careerRoles: ['Backend API Engineer', 'Database Administrator', 'Server Systems Developer', 'Cloud Infrastructure Engineer'],
      accentColor: 'text-brand-violet',
      borderColor: 'rgba(139, 92, 246, 0.25)',
      glowColor: 'rgba(139, 92, 246, 0.08)'
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Web Engineering',
      icon: Laptop,
      duration: '6 Months',
      hours: '300+ Study Hours',
      level: 'Beginner to Professional',
      certificate: 'Verifiable Certificate',
      priceXAF: '150,000 XAF',
      priceUSD: '$250',
      monthlyPriceXAF: '30,000 XAF',
      monthlyPriceUSD: '$50',
      crossedPriceXAF: '180,000 XAF',
      crossedPriceUSD: '$300',
      shortDesc: 'Master both client interface grids and server systems to construct complete web software.',
      longDesc: 'Our most exhaustive curriculum designed to turn you into a fully independent tech creator. By blending front-end interactivity with robust server-side engineering, you will gain the complete toolset required to architecture, build, test, secure, and deploy modern software systems.',
      technologies: ['React (Vite)', 'Node.js', 'Express', 'TypeScript', 'Tailwind CSS', 'PostgreSQL / MongoDB', 'Docker & Cloud Run', 'CI/CD Pipelines'],
      skillsGained: [
        'Engineer complete responsive client-to-server systems single-handedly',
        'Manage complex state synchronizations and real-time socket connections',
        'Implement and protect high-frequency API routes with route guards',
        'Integrate custom database clustering and optimize query performance',
        'Set up automated CI/CD pipelines to build and deploy to production'
      ],
      careerRoles: ['Full-Stack Engineer', 'Software Developer', 'Technical Architect', 'Startup CTO'],
      accentColor: 'text-fuchsia-400',
      borderColor: 'rgba(232, 121, 249, 0.25)',
      glowColor: 'rgba(232, 121, 249, 0.08)'
    },
    {
      id: 'mobile',
      title: 'Mobile App Engineering',
      icon: Smartphone,
      duration: '4 Months',
      hours: '200+ Study Hours',
      level: 'Intermediate',
      certificate: 'Verifiable Certificate',
      priceXAF: '100,000 XAF',
      priceUSD: '$165',
      monthlyPriceXAF: '30,000 XAF',
      monthlyPriceUSD: '$50',
      crossedPriceXAF: '120,000 XAF',
      crossedPriceUSD: '$200',
      shortDesc: 'Deploy fluid native iOS and Android applications with cross-platform React Native.',
      longDesc: 'The market has shifted entirely to touch-first devices. This curriculum focuses on compiling cross-platform code, creating smooth 60FPS UI transitions, storing local database states, utilizing phone sensors, and shipping release-ready binaries directly to Apple and Google Play stores.',
      technologies: ['React Native', 'Expo Core', 'Tailwind NativeWind', 'React Navigation', 'Redux Toolkit', 'SQLite & Local Storage', 'Google Maps API'],
      skillsGained: [
        'Build rich interactive touch layouts with native interface performance',
        'Design robust offline-first caching and on-device database systems',
        'Integrate hardware sensors including GPS, Camera, and Push Alerts',
        'Authenticate users via biometric systems like FaceID and Fingerprint',
        'Configure pipeline commands to deploy to Apple & Google Play stores'
      ],
      careerRoles: ['Mobile App Developer', 'React Native Developer', 'iOS Developer', 'Android Engineer'],
      accentColor: 'text-blue-400',
      borderColor: 'rgba(96, 165, 250, 0.25)',
      glowColor: 'rgba(96, 165, 250, 0.08)'
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      icon: Layout,
      duration: '3 Months',
      hours: '150+ Study Hours',
      level: 'Beginner Friendly',
      certificate: 'Verifiable Certificate',
      priceXAF: '75,000 XAF',
      priceUSD: '$125',
      monthlyPriceXAF: '30,000 XAF',
      monthlyPriceUSD: '$50',
      crossedPriceXAF: '90,000 XAF',
      crossedPriceUSD: '$150',
      shortDesc: 'Design pixel-perfect interactive wireframes, custom design systems, and visual flows.',
      longDesc: 'Exceptional style and cognitive hierarchy separate elite software from low-quality builds. Master the rules of typography, margin grids, visual patterns, and smart design systems. You will build high-fidelity interactive mockups and smooth animations that guide and delight users.',
      technologies: ['Figma Professional', 'Design System variables', 'Wireframing', 'High-Fidelity Prototyping', 'User Research', 'A/B Testing Tools'],
      skillsGained: [
        'Build robust Figma component systems with responsive layout variables',
        'Map customer visual paths using thorough UX wireframe blueprints',
        'Animate complex page transitions using smart-animates and scroll actions',
        'Evaluate user flow and visual clarity via direct usability user testing',
        'Package files into flawless code assets for direct developer handoff'
      ],
      careerRoles: ['Product Designer', 'UI/UX Designer', 'Interaction Specialist', 'Information Architect'],
      accentColor: 'text-pink-400',
      borderColor: 'rgba(244, 114, 182, 0.25)',
      glowColor: 'rgba(244, 114, 182, 0.08)'
    },
    {
      id: 'graphic',
      title: 'Graphic Design',
      icon: Palette,
      duration: '3 Months',
      hours: '150+ Study Hours',
      level: 'Beginner Friendly',
      certificate: 'Verifiable Certificate',
      priceXAF: '75,000 XAF',
      priceUSD: '$125',
      monthlyPriceXAF: '30,000 XAF',
      monthlyPriceUSD: '$50',
      crossedPriceXAF: '90,000 XAF',
      crossedPriceUSD: '$150',
      shortDesc: 'Craft modern commercial identities, high-fidelity vector illustrations, and brand systems.',
      longDesc: 'Unleash your visual creativity. In this program, you will learn standard brand identity, corporate style guides, logo composition rules, and graphic illustration pipelines. You will master Adobe Illustrator and Photoshop to produce beautiful visuals that command attention and boost sales.',
      technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Vector Design', 'Typography Rules', 'Color Theory', 'Print Layouts'],
      skillsGained: [
        'Draw professional vector shapes and compound custom logo assets',
        'Restore and manipulate commercial photography using advanced lighting curves',
        'Structure unified corporate identity books and brand guide systems',
        'Design high-converting marketing print, banners, and digital ads',
        'Prepare layout files perfectly matching printing press specifications'
      ],
      careerRoles: ['Brand Graphic Designer', 'Vector Illustrator', 'Visual Asset Creator', 'Print Production Specialist'],
      accentColor: 'text-emerald-400',
      borderColor: 'rgba(52, 211, 153, 0.25)',
      glowColor: 'rgba(52, 211, 153, 0.08)'
    },
    {
      id: 'seo',
      title: 'SEO & Digital Marketing',
      icon: TrendingUp,
      duration: '3 Months',
      hours: '150+ Study Hours',
      level: 'Beginner Friendly',
      certificate: 'Verifiable Certificate',
      priceXAF: '75,000 XAF',
      priceUSD: '$125',
      monthlyPriceXAF: '30,000 XAF',
      monthlyPriceUSD: '$50',
      crossedPriceXAF: '90,000 XAF',
      crossedPriceUSD: '$150',
      shortDesc: 'Rank sites on Google, instrument web analytics, and run ad campaigns.',
      longDesc: 'Creating beautiful software is only half the battle—it needs visitors. Learn how to optimize search engine visibility, analyze user tracking data, write high-converting copy, and launch structured advertising funnels across Google and social media to drive profitable business growth.',
      technologies: ['Google Search Console', 'Google Analytics 4', 'Screaming Frog SEO', 'Meta Ads Manager', 'Email Funnels', 'Copywriting Rules'],
      skillsGained: [
        'Conduct comprehensive keyword audits and optimize on-page HTML tags',
        'Run advanced crawlers to audit and resolve technical site speed blocks',
        'Design behavioral web goals using Google Analytics event tags',
        'Deploy target-focused marketing budget grids on Facebook and Google Ads',
        'Write premium commercial landing pages that convert cold traffic'
      ],
      careerRoles: ['SEO Specialist', 'Growth Marketing Manager', 'Ad Campaign Lead', 'Content Strategist'],
      accentColor: 'text-amber-400',
      borderColor: 'rgba(251, 191, 36, 0.25)',
      glowColor: 'rgba(251, 191, 36, 0.08)'
    },
    {
      id: 'aivideo',
      title: 'AI Video Production',
      icon: Video,
      duration: '3 Months',
      hours: '150+ Study Hours',
      level: 'Beginner Friendly',
      certificate: 'Verifiable Certificate',
      priceXAF: '10,000 XAF',
      priceUSD: '$17',
      crossedPriceXAF: '25,000 XAF',
      crossedPriceUSD: '$42',
      shortDesc: 'Combine generative AI models with video editors to synthesize cinematic ads.',
      longDesc: 'The content industry has been completely disrupted by machine learning. Learn how to bridge generative AI generators (image, voice, video) with powerful video editors (Premiere Pro, CapCut Pro) to write scripts, synthesize dynamic vocals, generate video cuts, and craft ultra-premium commercial media.',
      technologies: ['Generative AI Models', 'CapCut Pro', 'Adobe Premiere Pro', 'Voice Synthesizers', 'AI Script Writing', 'B-Roll Generators'],
      skillsGained: [
        'Prompt advanced neural networks to create stunning cinematic clips',
        'Synthesize and pair realistic, multi-lingual commercial voice narrations',
        'Master keyframing, speed ramping, and color grading inside video software',
        'Compose high-impact short-form commercial scripts designed to go viral',
        'Produce completed advertising media in less than 20% of standard production times'
      ],
      careerRoles: ['AI Content Producer', 'Digital Video Editor', 'Multimedia Ad Creator', 'Social Media Video Lead'],
      accentColor: 'text-cyan-400',
      borderColor: 'rgba(34, 211, 238, 0.25)',
      glowColor: 'rgba(34, 211, 238, 0.08)'
    }
  ];

  // 4. Learning Journey Roadmap Timeline
  const roadmapSteps = [
    {
      title: 'Apply',
      description: 'Submit your online application. Tell us about your goals, selected program, and background. No technical experience required.'
    },
    {
      title: 'Get Accepted',
      description: 'Receive your official acceptance, join our collaborative community Slack workspace, set up your workstation, and meet your cohort.'
    },
    {
      title: 'Learn',
      description: 'Engage in immersive, practical modules. Follow structured lessons guided by active industry engineers and designers.'
    },
    {
      title: 'Build Projects',
      description: 'Translate code and designs into real digital products. Collaborate on team sprints and compile structured, client-ready work.'
    },
    {
      title: 'Internship',
      description: 'Gain elite real-world experience. Spend 2 months working alongside senior professionals on actual customer projects.'
    },
    {
      title: 'Graduate',
      description: 'Receive your verifiable certificate of completion, letter of recommendation, polished portfolio, and transition to your dream career.'
    }
  ];

  // 5. Student Projects Showcase
  const studentProjects = [
    {
      title: 'Business Dashboard',
      skills: 'React, Tailwind, Lenis Scroll',
      preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop',
      studentPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop'
    },
    {
      title: 'Mobile Banking App',
      skills: 'React Native, Expo, Async Storage',
      preview: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop',
      studentPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
    },
    {
      title: 'Restaurant Website',
      skills: 'HTML, CSS, React, Framer Motion',
      preview: '/assets/images/nexora-empire-student-restaurant-website.png',
      studentPhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop'
    },
    {
      title: 'UI/UX Case Study',
      skills: 'Figma, Wireframes, Prototyping',
      preview: '/assets/images/nexora-empire-student-uiux-figma.jpg',
      studentPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop'
    },
    {
      title: 'Brand Identity Showcase',
      skills: 'Adobe Illustrator, Logo Design',
      preview: '/assets/images/nexora-empire-student-graphic-design.png',
      studentPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
    },
    {
      title: 'Coding Masterclass Promo',
      skills: 'HTML, CSS, JS, React, Node, Git, AI-assisted Coding',
      preview: '/assets/images/nexora-empire-student-ai-video.mp4',
      studentPhoto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop'
    }
  ];

  // 6. Internship highlights
  const internshipHighlights = [
    { title: 'Real Client Projects', desc: 'Work directly on real-world active project deliveries with tangible target milestones.' },
    { title: 'Team Collaboration', desc: 'Succeed together. Learn modern corporate developer workflows inside cross-functional agile squads.' },
    { title: 'Weekly Code Reviews', desc: 'Gain precise code feedback. Understand quality criteria and best practices from senior lead developers.' },
    { title: 'Design Reviews', desc: 'Refine visual layouts. Defend your visual choices and receive constructive expert aesthetic critiques.' },
    { title: 'Mentorship Sessions', desc: 'Access 1-on-1 support. Resolve roadblocks and learn standard strategies for professional success.' },
    { title: 'Career Guidance', desc: 'Build your launchpad. Refine your CV, polish your LinkedIn presence, and learn to crack corporate tech interviews.' }
  ];

  // 7. What You'll Gain
  const benefits = [
    {
      title: 'Professional Portfolio',
      desc: 'Build high-converting web apps, native code files, and custom graphics stored in clean GitHub repos and Figma design boards.'
    },
    {
      title: 'Internship Certificate',
      desc: 'Receive a prestigious official certificate validating your hands-on role in Nexora Empire’s software and marketing teams.'
    },
    {
      title: 'Practical Experience',
      desc: 'Graduate with solid operational confidence, knowing how to approach real tech architecture and resolve commercial issues.'
    },
    {
      title: 'Team Collaboration',
      desc: 'Master the corporate art of agile communication, code repository sync, design system handoff, and cross-discipline sprints.'
    },
    {
      title: 'Career Mentorship',
      desc: 'Form high-value relationships with senior professionals, technical directors, and project managers to guide your career path.'
    },
    {
      title: 'Job-Ready Skills',
      desc: 'Acquire precise practical abilities designed from real job postings, skipping redundant theory to start contributing on day one.'
    }
  ];

  // 8. Testimonials
  const testimonials = [
    {
      name: 'Asaah Divine',
      country: 'Cameroon',
      program: 'Graphic Design Graduate',
      review: 'Nexora Academy completely reshaped my perspective of digital layouts. The project-based learning forced me to solve real problems instead of memorizing menus. Today I craft full corporate visual packages for local and foreign brands.',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop'
    },
    {
      name: 'Nji Rodrick',
      country: 'Nigeria',
      program: 'Full-Stack Development Graduate',
      review: 'The curriculum was intense but incredibly structured. Transitioning from basic syntax to modeling reactive database servers was a life-changing experience. The guaranteed internship at Nexora gave me the developer confidence I needed.',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
    },
    {
      name: 'Sandra Keming',
      country: 'Cameroon',
      program: 'AI Video Creation Graduate',
      review: 'Combining CapCut workflows with Generative AI tools allowed me to create high-impact, cinematic ads. The mentorship sessions were outstanding. I transitioned from zero knowledge to landing freelance contracts within 4 months.',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop'
    }
  ];

  // 10. FAQ
  const faqs = [
    {
      q: 'Do I need prior experience?',
      a: 'Not at all! Our training and internship programs are crafted to take you from absolute beginner to fully job-ready software engineers and designers. We start from ground-zero fundamentals and guide you incrementally.'
    },
    {
      q: 'Is the training online or physical?',
      a: 'We offer flexible formats. Our Online Training is fully interactive and live, designed for remote students worldwide. Our Physical Training includes on-site classroom sessions at our modern workspace with direct in-person mentorship.'
    },
    {
      q: 'Will I receive a certificate?',
      a: 'Yes! Upon clearing curriculum milestones and completing your projects, you will receive a verifiable Nexora Academy completion certificate along with a letter of recommendation detailing your achievements.'
    },
    {
      q: 'What is the Nexora Internship Program?',
      a: 'Our standout value is standard-setting practical experience. Upon completing the first 3-4 months of core lectures and passing review assessments, qualifying academy students are placed directly into 2-Month real-world internship slots at Nexora, working alongside senior staff on actual customer deliverables.'
    },
    {
      q: 'How long does each program last?',
      a: 'Our flagship Full-Stack Web Development program is 6 months long (including the core modules and internship). Other specialized programs like UI/UX, Mobile App Dev, AI Video, Graphic Design, and SEO last between 3 to 4 months.'
    },
    {
      q: 'Will I build real projects?',
      a: 'Absolutely. We reject standard academic quizzes. Every program module is structured around designing and coding functional, production-grade applications that become parts of your professional portfolio.'
    },
    {
      q: 'Can I join the internship directly?',
      a: 'Our dedicated Internship Program is designed for students who already possess basic digital skills and want hands-on industry experience. For beginners, we highly recommend enrolling in our comprehensive Online or Physical Training packages which include direct internship eligibility.'
    },
    {
      q: 'Do you offer job placement guarantees upon graduation?',
      a: 'While no credible academy can guarantee job offers, we boast a stellar 92% placement rate. We actively connect our graduates with our growing network of tech startups, corporate partners, and global agencies, alongside providing thorough CV polishing, portfolio code reviews, and mock interview training.'
    },
    {
      q: 'Can I pay my tuition program fees in separate installments?',
      a: 'Yes! To make elite technology training accessible, we offer flexible payment structures. You can settle your tuition in up to three split installments over the course of the curriculum, with a modest down payment to secure your seat.'
    }
  ];

  return (
    <div className="relative w-full bg-slate-950 text-slate-100 overflow-hidden min-h-screen font-sans" id="training-internship-root">
      
      {/* 1. HERO SECTION (Dark) */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 bg-[#030308] overflow-hidden border-b border-indigo-950/40" id="academy-hero">
        {/* Immersive Cosmic Background matching the reference section */}
        <div id="cosmic-bg-overlay" className="absolute inset-0 pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1.2px,transparent_1.2px),linear-gradient(to_bottom,#f1f5f9_1.2px,transparent_1.2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.03] z-0" />
          
          {/* Starfields / Subtle dot particles */}
          <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:24px_24px] z-10" />
          
          {/* Ambient Nebula Flows (Floating glows) */}
          <div className="absolute top-[10%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-brand-violet/10 blur-[150px] pointer-events-none z-10" />
          <div className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-brand-electric/10 blur-[130px] pointer-events-none z-10" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side text contents */}
            <div className="lg:col-span-8 space-y-8 text-left">
              
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-electric/10 border border-brand-electric/20 select-none"
                id="academy-hero-badge"
              >
                <GraduationCap className="w-4 h-4 text-brand-electric" />
                <span className="font-mono text-[10px] tracking-[0.25em] font-bold text-brand-electric uppercase">
                  Nexora Academy
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight max-w-5xl"
                id="academy-hero-title"
              >
                Learn In-Demand Skills That Build <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Real Careers</span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-sans text-sm sm:text-base md:text-lg text-slate-400 max-w-3xl leading-relaxed"
                id="academy-hero-desc"
              >
                Join practical training and internship programs designed to help students, professionals, and aspiring creators gain real-world experience, build impressive portfolios, and launch successful careers in tech.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-start items-stretch sm:items-center pt-2"
                id="academy-hero-ctas"
              >
                <button
                  onClick={() => handleApplyClick()}
                  className="px-8 py-4.5 bg-gradient-to-r from-blue-600 to-brand-violet hover:brightness-110 text-white rounded-2xl font-sans font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-lg shadow-blue-600/20 cursor-pointer text-center"
                  id="hero-apply-btn"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('academy-programs');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4.5 bg-slate-900/60 border border-indigo-950/40 hover:border-violet-500/30 text-slate-300 hover:text-white rounded-2xl font-sans font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 cursor-pointer"
                  id="hero-explore-btn"
                >
                  Explore Programs
                </button>
              </motion.div>

              {/* Stats badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-indigo-950/20 max-w-2xl"
                id="academy-hero-metrics"
              >
                <div className="space-y-1 text-left" id="metric-placement">
                  <div className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                    <AnimatedCounter value="92%" />
                  </div>
                  <div className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">
                    Placement Rate
                  </div>
                </div>

                <div className="space-y-1 text-left" id="metric-internship">
                  <div className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                    <AnimatedCounter value="2 Months" />
                  </div>
                  <div className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">
                    Practical Internship
                  </div>
                </div>

                <div className="space-y-1 text-left" id="metric-graduates">
                  <div className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                    <AnimatedCounter value="500+" />
                  </div>
                  <div className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">
                    Alumni Graduates
                  </div>
                </div>

                <div className="space-y-1 text-left" id="metric-mentorship">
                  <div className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                    <AnimatedCounter value="1-on-1" />
                  </div>
                  <div className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">
                    Senior Mentorship
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right side layout balance */}
            <div className="lg:col-span-4" />
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE NEXORA ACADEMY (Light) */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 bg-white text-slate-900" id="why-academy">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-xs font-bold text-violet-600 tracking-wider uppercase font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
              WHY NEXORA ACADEMY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0e1629] leading-tight tracking-tight">
              More Than Training—A <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Career Launchpad</span>
            </h2>
            <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed">
              We don't just teach theory. We prepare you to work on real projects, build confidence, and become industry-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseFeatures.map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md hover:border-violet-100 transition-all duration-300 group text-left relative overflow-hidden"
                >
                  <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComp className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0e1629] mb-3 group-hover:text-violet-600 transition-colors">
                    {feature.title}
                  </h3>
                   <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {formatHighlights(feature.description, true)}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. LEARNING PATHS (Dark) */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 bg-[#060814]" id="academy-programs">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-violet-950/10 blur-[130px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300 tracking-wider uppercase font-sans">
              OUR PROGRAMS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              Choose Your <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Learning Journey</span>
            </h2>
            <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore our intensive career-focused programs designed to equip you with the practical, in-demand digital skills needed to excel in modern technology careers.
            </p>
          </div>

          {/* Controls Bar with Currency and Tabs */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between border-b border-indigo-950/40 pb-6 mb-10" id="academy-controls-bar">
            {/* Currency Switcher */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-slate-500 uppercase font-semibold">Tuition Fees Currency:</span>
              <div className="p-0.5 bg-slate-900/60 border border-indigo-950/40 rounded-full flex gap-1">
                <button
                  onClick={() => setCurrency('XAF')}
                  className={`px-3.5 py-1.5 rounded-full text-[10px] font-sans font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    currency === 'XAF' 
                      ? 'text-slate-950 bg-violet-500 font-black shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  XAF (FCFA)
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-3.5 py-1.5 rounded-full text-[10px] font-sans font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    currency === 'USD' 
                      ? 'text-slate-950 bg-violet-500 font-black shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  USD ($)
                </button>
              </div>
            </div>

            {/* Program Track tab list */}
            <div className="flex flex-wrap gap-2 justify-center" id="track-tab-selectors">
              {programs.map(track => {
                const isSelected = selectedProgramTab === track.id;
                const TrackIcon = track.icon;

                return (
                  <button
                    key={track.id}
                    onClick={() => setSelectedProgramTab(track.id)}
                    className={`px-4 py-2.5 rounded-xl border text-xs font-sans font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-violet-500/10 border-violet-500 text-white shadow-md shadow-violet-500/5'
                        : 'bg-[#04040a]/40 border-indigo-950/30 text-slate-400 hover:border-indigo-900/60 hover:text-slate-200'
                    }`}
                  >
                    <TrackIcon className="w-4 h-4 shrink-0" />
                    {track.title.split(' ')[0]} {track.title.split(' ')[1] === 'Tech' || track.title.split(' ')[1] === 'End' ? track.title.split(' ')[1] : track.title.split(' ')[1] === 'Stack' ? 'Stack' : track.title.split(' ')[1]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Track Detailed Sheet */}
          {(() => {
            const currentTrack = programs.find(t => t.id === selectedProgramTab) || programs[0];
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="active-track-sheet">
                {/* Left Overview */}
                <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 bg-slate-900/10 border border-indigo-950/20 rounded-2xl backdrop-blur-md text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-violet-500/5 blur-2xl pointer-events-none" />
                  
                  <div className="space-y-6">
                    {/* Meta Details Row */}
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded">
                        ⌛ {currentTrack.duration}
                      </span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded">
                        📚 {currentTrack.hours}
                      </span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
                        🎓 {currentTrack.level}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                        {currentTrack.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {formatHighlights(currentTrack.longDesc, false)}
                      </p>
                    </div>

                    <div className="h-px bg-indigo-950/20" />

                    {/* Core Technologies Row */}
                    <div className="space-y-3">
                      <span className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-widest block">
                        Core Technologies & Tools Mastered
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {currentTrack.technologies.map(tech => (
                          <span 
                            key={tech} 
                            className="text-[10px] sm:text-xs font-mono text-slate-400 bg-[#040409]/60 border border-indigo-950/30 px-3 py-1.5 rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-indigo-950/20" />

                    {/* Skills Gained List */}
                    <div className="space-y-3">
                      <span className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-widest block">
                        Key Practical Competencies Acquired
                      </span>
                      <ul className="space-y-2.5">
                        {currentTrack.skillsGained.map((skill, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-violet-400 stroke-[3]" />
                            </span>
                            <span className="font-sans text-xs sm:text-[13px] text-slate-300 leading-tight">
                              {skill}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tuition and Apply Row */}
                  <div className="pt-6 border-t border-indigo-950/20 mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div>
                      <span className="font-mono text-[8.5px] uppercase font-bold text-slate-500 tracking-wider block">
                        TUITION INVESTMENT
                      </span>
                      <div className="flex flex-wrap items-baseline gap-2">
                        {((currency === 'XAF' && currentTrack.crossedPriceXAF) || (currency === 'USD' && currentTrack.crossedPriceUSD)) && (
                          <span className="font-display text-sm sm:text-base text-slate-500 line-through decoration-rose-500 decoration-2">
                            {currency === 'XAF' ? currentTrack.crossedPriceXAF : currentTrack.crossedPriceUSD}
                          </span>
                        )}
                        <span className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                          {currency === 'XAF' ? currentTrack.priceXAF : currentTrack.priceUSD}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">/ full program</span>
                      </div>
                      {currentTrack.id !== 'aivideo' && (
                        <span className="text-[11px] font-mono text-violet-400 block mt-1.5 mb-1">
                          Monthly Rate: {currency === 'XAF' ? currentTrack.monthlyPriceXAF : currentTrack.monthlyPriceUSD} / month
                        </span>
                      )}
                      <span className="text-[10px] text-emerald-400 font-sans block leading-none mt-1">
                        Flexible installment options available
                      </span>
                    </div>

                    <button
                      onClick={() => handleApplyClick(currentTrack.title)}
                      className="w-full sm:w-auto px-6 py-3.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-sans font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer text-center animate-pulse-subtle"
                      id={`apply-track-btn-${currentTrack.id}`}
                    >
                      Apply For This Program
                    </button>
                  </div>
                </div>

                {/* Right Side Bento Panel */}
                <div className="lg:col-span-5 flex flex-col gap-6" id="track-right-panel">
                  {/* Placement Box */}
                  <div className="p-6 bg-[#040409]/60 border border-indigo-950/30 rounded-2xl text-left relative overflow-hidden flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="font-display text-base font-bold text-white">Guaranteed Internship</h4>
                        <p className="font-sans text-xs text-slate-400 leading-relaxed">
                          Every graduate clearing core program milestones secures a guaranteed 2-month professional placement. Code and design alongside senior staff on actual customer deliverables.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-slate-900/30 border border-indigo-950/20 rounded-xl mt-6">
                      <span className="font-mono text-[8px] text-slate-500 font-bold uppercase tracking-wider block mb-1">
                        EXPECTED CAREER ROLES
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentTrack.careerRoles.map(role => (
                          <span key={role} className="text-[10px] font-sans text-slate-300 bg-slate-900 border border-indigo-950/40 px-2 py-0.5 rounded">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Graduation Certification Box */}
                  <div className="p-6 bg-[#040409]/60 border border-indigo-950/30 rounded-2xl text-left relative overflow-hidden flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 animate-pulse-subtle">
                        <Award className="w-5 h-5" />
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="font-display text-base font-bold text-white">Elite Certification Handover</h4>
                        <p className="font-sans text-xs text-slate-400 leading-relaxed">
                          Graduates receive a globally verifiable digital completion credential paired with a professional letter of recommendation detailing specific team performance indices and code metrics.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-center justify-between border-t border-indigo-950/20 pt-4 mt-6">
                      <div>
                        <span className="text-[9px] font-mono text-slate-500 uppercase block leading-none">Refund Policy</span>
                        <span className="font-sans font-bold text-xs text-white block mt-0.5">14-Day Guarantee</span>
                      </div>
                      <span className="text-[10px] font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 rounded">
                        Certified ISO 9001
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* 4. YOUR LEARNING JOURNEY (Light) */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 bg-slate-50 text-slate-900" id="academy-journey">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_0.8px,transparent_0.8px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-20">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-xs font-bold text-violet-600 tracking-wider uppercase font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
              YOUR JOURNEY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0e1629] leading-tight tracking-tight">
              A Clear Path From Beginner to <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Professional</span>
            </h2>
            <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed">
              Every learner follows a structured roadmap designed to build confidence, practical experience, and job-ready skills.
            </p>
          </div>

          {/* Interactive Timeline layout */}
          <div className="relative" id="timeline-interactive-container">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-200 via-indigo-200 to-transparent -translate-x-1/2 pointer-events-none hidden md:block" />
            
            <div className="space-y-12 relative">
              {roadmapSteps.map((step, idx) => {
                const isEven = idx % 2 === 0;
                const isHovered = activeTimelineStep === idx;
                
                return (
                  <div 
                    key={idx}
                    className={`flex flex-col md:flex-row items-stretch ${isEven ? 'md:flex-row-reverse' : ''}`}
                    onMouseEnter={() => setActiveTimelineStep(idx)}
                    onMouseLeave={() => setActiveTimelineStep(null)}
                  >
                    {/* Content box */}
                    <div className="w-full md:w-1/2 px-0 md:px-12 text-left">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                          isHovered 
                            ? 'bg-white border-violet-300 shadow-xl shadow-violet-100/50 scale-[1.01]' 
                            : 'bg-white/80 border-slate-100 shadow-sm'
                        }`}
                      >
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-violet-600" />
                        <span className="font-mono text-3xl font-black text-violet-100 block mb-2">0{idx + 1}</span>
                        <h4 className="font-display text-lg sm:text-xl font-bold text-[#0e1629] mb-3">
                          {step.title}
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Badge circle */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border border-violet-600 bg-white flex items-center justify-center -translate-x-1/2 z-10 pointer-events-none mt-6 shadow-md transition-all duration-300">
                      <span className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${isHovered ? 'bg-violet-600 scale-110 animate-ping' : 'bg-slate-300'}`} />
                    </div>

                    {/* Spacer for structure */}
                    <div className="w-full md:w-1/2 hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 5. STUDENT PROJECTS SHOWCASE (Dark) */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 bg-[#060814]" id="student-projects">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff005_1px,transparent_1px),linear-gradient(to_bottom,#ffffff005_1px,transparent_1px)] bg-[size:30px_30px] opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300 tracking-wider uppercase font-sans">
              STUDENT PROJECTS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              See What Our Students <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Have Built</span>
            </h2>
            <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
              Real projects created during training that demonstrate practical skills and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentProjects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group rounded-2xl bg-slate-900/40 border border-indigo-950/40 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-950/10 transition-all duration-300 overflow-hidden text-left flex flex-col justify-between"
              >
                <div>
                  {/* Project Preview */}
                  <div className="relative aspect-video overflow-hidden">
                    {proj.preview.endsWith('.mp4') ? (
                      <video 
                        src={proj.preview} 
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onMouseEnter={(e) => { e.currentTarget.muted = false; }}
                        onMouseLeave={(e) => { e.currentTarget.muted = true; }}
                      />
                    ) : (
                      <img 
                        src={proj.preview} 
                        alt={proj.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060814] via-transparent to-transparent opacity-80" />
                    
                    {/* Student Avatar overlay */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-slate-950/80 border border-indigo-950/60 backdrop-blur-md px-3 py-1.5 rounded-xl">
                      <img 
                        src={proj.studentPhoto} 
                        alt="Student" 
                        className="w-6 h-6 rounded-full object-cover border border-violet-400"
                        referrerPolicy="no-referrer"
                      />
                      <span className="font-mono text-[9px] font-bold text-slate-300 tracking-wider uppercase">Nexora Student</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-violet-400 transition-colors">
                      {proj.title}
                    </h3>
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] text-slate-500 uppercase font-bold block">Skills Used</span>
                      <p className="font-sans text-xs text-slate-400">
                        {proj.skills}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-indigo-950/20 pt-4 flex justify-between items-center">
                  <button
                    onClick={() => handleApplyClick(proj.title)}
                    className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400 hover:text-white transition-colors cursor-pointer"
                  >
                    View Project Details
                  </button>
                  <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    Live Demo
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. INTERNSHIP EXPERIENCE (Light) */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 bg-white text-slate-900" id="internship-experience">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:45px_45px] opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-xs font-bold text-violet-600 tracking-wider uppercase font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
              INTERNSHIP EXPERIENCE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0e1629] leading-tight tracking-tight">
              Work on Real Projects With <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Real Teams</span>
            </h2>
            <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed">
              Our internship program provides practical industry experience through collaboration on live projects inside Nexora Empire.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual illustration of the workplace experience */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl border border-slate-100"
            >
              <img 
                src="/assets/images/nexora-empire-tech-team-collaboration.png" 
                alt="Students collaborating" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1629]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-left text-white space-y-2">
                <span className="inline-flex items-center gap-1 bg-violet-600 px-2.5 py-0.5 rounded-md font-mono text-[9px] uppercase font-bold">Live Workspace</span>
                <p className="font-display font-bold text-lg sm:text-xl">Inside the Nexora Tech Lab</p>
                <p className="font-sans text-xs text-slate-200 leading-relaxed">Collaborate daily with project leaders, tech architects, and creative directors to compile production-ready assets.</p>
              </div>
            </motion.div>

            {/* Structured highlight grids */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left" id="internship-benefits-grid">
              {internshipHighlights.map((hl, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-2 hover:border-violet-100 hover:bg-violet-50/10 transition-all duration-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-violet-600 shrink-0" />
                    <h4 className="font-display font-bold text-[#0e1629] text-sm sm:text-base">{hl.title}</h4>
                  </div>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">{hl.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 7. WHAT YOU'LL GAIN (Dark) */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 bg-[#060814]" id="academy-benefits">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
        <div className="absolute bottom-1/4 right-[-10%] w-[350px] h-[350px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300 tracking-wider uppercase font-sans">
              YOUR BENEFITS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              Everything You Need to Launch <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Your Career</span>
            </h2>
            <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
              Graduate with more than knowledge—leave with experience, confidence, and a portfolio that opens opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-8 rounded-2xl bg-slate-900/40 border border-indigo-950/30 text-left hover:border-violet-500/30 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-violet-500/5 to-transparent rounded-bl-full pointer-events-none" />
                <span className="font-mono text-3xl font-black text-indigo-950 block mb-4 group-hover:text-violet-500/20 transition-colors">0{idx + 1}</span>
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Curriculum Pathway Sprints Section (Roadmap) */}
      <section className="py-20 md:py-28 border-t border-indigo-950/20 bg-[#020205]/40 relative" id="training-roadmap-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.02)_0%,transparent_75%)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-electric/10 border border-brand-electric/20">
              <Layers className="w-3.5 h-3.5 text-brand-electric" />
              <span className="font-mono text-[9px] tracking-widest font-bold text-brand-electric uppercase">
                The Roadmap
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
              The Pragmatic <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Learning Pathway</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              How we take you from coding basics to building actual web and mobile infrastructure. Four phases designed specifically to guarantee engineering readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative items-stretch" id="training-curriculum-timeline">
            
            {/* Pathway Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-[#040409]/60 border border-indigo-950/30 rounded-2xl relative text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="font-mono text-4xl font-black text-slate-700/40 block">01</span>
                <h4 className="font-display text-base font-bold text-white">Foundations & Syntax</h4>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  Establish rock-solid logical patterns, write computational logic, manage version controls with Git repositories, and explore standard environment setup guidelines.
                </p>
              </div>
              <div className="mt-6">
                <span className="text-[10px] font-mono text-brand-violet uppercase">Weeks 1 - 4 • core syntax</span>
              </div>
            </motion.div>

            {/* Pathway Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-6 bg-[#040409]/60 border border-indigo-950/30 rounded-2xl relative text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="font-mono text-4xl font-black text-slate-700/40 block">02</span>
                <h4 className="font-display text-base font-bold text-white">Architectural Sprints</h4>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  Deep-dive into specialized framework libraries (React, Node, or Figma), building custom-state applications, server routes, database linkages, and mobile panels.
                </p>
              </div>
              <div className="mt-6">
                <span className="text-[10px] font-mono text-brand-violet uppercase">Weeks 5 - 12 • component frameworks</span>
              </div>
            </motion.div>

            {/* Pathway Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-[#040409]/60 border border-indigo-950/30 rounded-2xl relative text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="font-mono text-4xl font-black text-slate-700/40 block">03</span>
                <h4 className="font-display text-base font-bold text-white">The Capstone System</h4>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  Model, code, and deploy a complete proprietary full-stack system from scratch. Present your engineering schema and codebase to our technical panel for SLA grading.
                </p>
              </div>
              <div className="mt-6">
                <span className="text-[10px] font-mono text-brand-violet uppercase">Weeks 13 - 16 • real-world project</span>
              </div>
            </motion.div>

            {/* Pathway Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="p-6 bg-brand-violet/10 border border-brand-violet/30 rounded-2xl relative text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="font-mono text-4xl font-black text-brand-violet/40 block">04</span>
                <h4 className="font-display text-base font-bold text-white">Nexora Client Placement</h4>
                <p className="font-sans text-xs text-slate-300 leading-relaxed">
                  Guaranteed 2-Month placement. Join active developer sprints working on global customer portals, attending standup syncs, and shipping production-grade solutions.
                </p>
              </div>
              <div className="mt-6">
                <span className="text-[10px] font-mono text-brand-electric uppercase">Months 5 - 6 • professional placement</span>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 8. STUDENT TESTIMONIALS (Light) */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 bg-slate-50 text-slate-900" id="academy-testimonials">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-xs font-bold text-violet-600 tracking-wider uppercase font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
              SUCCESS STORIES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0e1629] leading-tight tracking-tight">
              Hear From <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Our Students</span>
            </h2>
            <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed">
              Discover how Nexora Academy has helped students gain valuable skills and begin their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testi, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between text-left relative overflow-hidden hover:shadow-lg hover:border-violet-100 transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-amber-400">
                    {'★★★★★'.split('').map((char, i) => (
                      <span key={i} className="text-base">{char}</span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed italic">
                    "{testi.review}"
                  </p>
                </div>

                {/* Profile card at bottom */}
                <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-6">
                  <img 
                    src={testi.photo} 
                    alt={testi.name} 
                    className="w-10 h-10 rounded-full object-cover border border-violet-100 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base leading-none">{testi.name}</h4>
                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block mt-1.5">{testi.program} • {testi.country}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. TRAINING PACKAGES (Light) */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 bg-white text-slate-900" id="academy-packages">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-xs font-bold text-violet-600 tracking-wider uppercase font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
              ENROLLMENT PLANS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0e1629] leading-tight tracking-tight">
              Choose the Learning Experience That <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Fits You</span>
            </h2>
            <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed">
              Flexible learning options designed to suit your goals and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* 1. Online Training Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-slate-200/60 p-8 sm:p-10 flex flex-col justify-between text-left transition-all duration-500 hover:scale-[1.02] hover:border-indigo-100 hover:shadow-[0_20px_45px_rgba(99,102,241,0.06)] group relative overflow-hidden"
            >
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 bg-violet-50 rounded-md font-mono text-[9px] text-violet-600 uppercase font-bold">Remote Option</span>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-black text-[#0e1629]">Online Training</h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">Perfect for remote learners seeking world-class training anywhere.</p>
                </div>
                
                <div className="h-px bg-slate-200/60" />
                
                <ul className="space-y-3.5">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                    <Check className="w-4.5 h-4.5 text-[#1f39c4] shrink-0" />
                    <span>Live Interactive Classes</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                    <Check className="w-4.5 h-4.5 text-[#1f39c4] shrink-0" />
                    <span>24/7 Community Slack Access</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                    <Check className="w-4.5 h-4.5 text-[#1f39c4] shrink-0" />
                    <span>Verifiable Completion Certificate</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                    <Check className="w-4.5 h-4.5 text-[#1f39c4] shrink-0" />
                    <span>Flexible Career Mentorship</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                    <Check className="w-4.5 h-4.5 text-[#1f39c4] shrink-0" />
                    <span>Duration: 3 - 6 Months</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-10">
                <button
                  onClick={() => handleApplyClick('', 'Online Training')}
                  className="group relative w-full py-3.5 rounded-2xl font-sans text-sm font-bold tracking-wide transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 border border-blue-600 text-blue-600 bg-white hover:bg-blue-50/50 cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>

            {/* 2. Physical Training Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1f39c4] to-[#8b1dca] text-white shadow-[0_20px_50px_rgba(31,57,196,0.25)] md:scale-105 z-10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between text-left transition-all duration-500 relative overflow-hidden"
            >
              {/* Most Popular Badge */}
              <div className="absolute top-6 right-6 bg-white text-[#1f39c4] text-xs font-sans font-bold py-1.5 px-3.5 rounded-full flex items-center gap-1 shadow-sm">
                <Star className="w-3.5 h-3.5 fill-current text-[#1f39c4]" />
                <span>Most Popular</span>
              </div>
              
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 bg-white/10 rounded-md font-mono text-[9px] text-white uppercase font-bold">On-Site Option</span>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-black text-white">Physical Training</h3>
                  <p className="font-sans text-xs sm:text-sm text-indigo-100/90 leading-relaxed">On-site learning at our modern workspace with direct face-to-face mentorship.</p>
                </div>
                
                <div className="h-px bg-white/15" />
                
                <ul className="space-y-3.5">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-white">
                    <Check className="w-4.5 h-4.5 text-white shrink-0" />
                    <span>Direct In-Person Classroom Sessions</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-white">
                    <Check className="w-4.5 h-4.5 text-white shrink-0" />
                    <span>Collaborative Team Sprints</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-white">
                    <Check className="w-4.5 h-4.5 text-white shrink-0" />
                    <span>Real Client Practical Projects</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-white">
                    <Check className="w-4.5 h-4.5 text-white shrink-0" />
                    <span>Verifiable Completion Certificate</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-white">
                    <Check className="w-4.5 h-4.5 text-white shrink-0" />
                    <span>Guaranteed 2-Month Internship Eligibility</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-10">
                <button
                  onClick={() => handleApplyClick('', 'Physical Training')}
                  className="group relative w-full py-3.5 rounded-2xl font-sans text-sm font-bold tracking-wide transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-slate-50 shadow-md cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>

            {/* 3. Internship Program Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-slate-200/60 p-8 sm:p-10 flex flex-col justify-between text-left transition-all duration-500 hover:scale-[1.02] hover:border-indigo-100 hover:shadow-[0_20px_45px_rgba(99,102,241,0.06)] group relative overflow-hidden"
            >
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 bg-violet-50 rounded-md font-mono text-[9px] text-violet-600 uppercase font-bold">Work Experience</span>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-black text-[#0e1629]">Internship Program</h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">Hands-on industry experience inside our active software engineering office.</p>
                </div>
                
                <div className="h-px bg-slate-200/60" />
                
                <ul className="space-y-3.5">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                    <Check className="w-4.5 h-4.5 text-[#1f39c4] shrink-0" />
                    <span>Real Customer Client Projects</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                    <Check className="w-4.5 h-4.5 text-[#1f39c4] shrink-0" />
                    <span>Cross-Functional Squad Workflows</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                    <Check className="w-4.5 h-4.5 text-[#1f39c4] shrink-0" />
                    <span>Weekly Code & Layout Reviews</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                    <Check className="w-4.5 h-4.5 text-[#1f39c4] shrink-0" />
                    <span>1-on-1 Mentorship from Core Staff</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                    <Check className="w-4.5 h-4.5 text-[#1f39c4] shrink-0" />
                    <span>Official Internship Recommendation Letters</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-10">
                <button
                  onClick={() => handleApplyClick('', 'Internship Program')}
                  className="group relative w-full py-3.5 rounded-2xl font-sans text-sm font-bold tracking-wide transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 border border-blue-600 text-blue-600 bg-white hover:bg-blue-50/50 cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS (Dark) */}
      <section 
        id="academy-faq"
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
                Academy & Internship <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">FAQ</span>
              </h2>

              {/* Delicate colored line divider */}
              <div className="w-14 h-[2px] bg-gradient-to-r from-blue-500 to-brand-violet rounded-full mt-4" />
            </motion.div>
          </div>

          {/* Accordion List */}
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              const indexStr = (idx + 1).toString().padStart(2, '0');
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
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
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
                  const msg = encodeURIComponent("Hi, I have some questions about the Tech Academy/Internship programs.");
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

      {/* High-Performance Final Academy CTA (Replaced from Academy page) */}
      <section className="py-24 border-t border-indigo-950/20 bg-[#020205] relative overflow-hidden" id="academy-final-cta">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3 mb-8"
          >
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-brand-violet bg-brand-violet/10 px-4 py-1.5 rounded-full border border-brand-violet/20">
              Enrollment Is Active
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-r from-brand-violet to-brand-electric rounded-full" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Initiate Your Engineering Roadmap With <br className="hidden sm:inline" />
            Nexora <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-violet bg-clip-text text-transparent">Tech Academy</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-sans text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            Don't leave your engineering education to static videos and theoretical slides. Join an ecosystem that empowers you with senior mentors, weekly coding reviews, and placement on live client platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-pulse-subtle"
          >
            <button
              onClick={() => handleApplyClick()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4.5 bg-brand-violet hover:bg-brand-violet/90 text-white rounded-xl font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-brand-violet/20 cursor-pointer hover:scale-[1.01]"
              id="academy-final-enroll-btn"
            >
              Submit Academy Application
              <ArrowUpRight className="w-4.5 h-4.5 stroke-[2.5]" />
            </button>
            <button
              onClick={() => {
                const text = `Hi Nexora Empire, I'd love to learn more about the Tech Academy's upcoming session, curriculum details, and available tuition plans!`;
                window.open(`https://wa.me/237677079559?text=${encodeURIComponent(text)}`, '_blank');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4.5 bg-[#04040a] border border-indigo-950/40 hover:border-brand-violet/40 text-slate-300 hover:text-white rounded-xl font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer"
              id="academy-final-wa-btn"
            >
              Consult On WhatsApp
            </button>
          </motion.div>

        </div>
      </section>

      {/* 13. MODALS AND SHEET DIALOGS */}
      <AnimatePresence>
        {/* Application Modal */}
        {showApplyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowApplyModal(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-[#0c0e1a] border border-indigo-950/80 text-white p-6 sm:p-8 rounded-3xl shadow-2xl overflow-hidden z-10"
              id="application-modal-content"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="text-left space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-violet-400 font-black">Academy Registration</span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">Apply for Nexora Academy</h3>
                </div>
                <button 
                  onClick={() => setShowApplyModal(false)}
                  className="p-1 rounded bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-white">Application Received!</h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-400 max-w-xs mx-auto">
                    Thank you for applying to Nexora Academy. Our enrollment advisor will review your profile and reach out to you via email within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="modal-name" className="font-mono text-[9px] text-slate-500 uppercase font-bold block">Your Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input 
                        type="text" 
                        id="modal-name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        aria-label="Your Name"
                        autoComplete="name"
                        placeholder="e.g. Sandra Keming"
                        className="w-full bg-slate-950 border border-indigo-950/60 focus:border-violet-500 rounded-xl px-10 py-3 font-sans text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Contact Group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1">
                      <label htmlFor="modal-email" className="font-mono text-[9px] text-slate-500 uppercase font-bold block">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input 
                          type="email" 
                          id="modal-email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          aria-label="Email Address"
                          autoComplete="email"
                          placeholder="sandra@example.com"
                          className="w-full bg-slate-950 border border-indigo-950/60 focus:border-violet-500 rounded-xl px-10 py-3 font-sans text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label htmlFor="modal-phone" className="font-mono text-[9px] text-slate-500 uppercase font-bold block">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input 
                          type="tel" 
                          id="modal-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          aria-label="Phone Number"
                          autoComplete="tel"
                          placeholder="+237 6XX XXX XXX"
                          className="w-full bg-slate-950 border border-indigo-950/60 focus:border-violet-500 rounded-xl px-10 py-3 font-sans text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Country */}
                  <div className="space-y-1">
                    <label htmlFor="modal-country" className="font-mono text-[9px] text-slate-500 uppercase font-bold block">Country of Residence *</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input 
                        type="text" 
                        id="modal-country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        aria-label="Country of Residence"
                        autoComplete="country-name"
                        placeholder="e.g. Cameroon, USA, Canada"
                        className="w-full bg-slate-950 border border-indigo-950/60 focus:border-violet-500 rounded-xl px-10 py-3 font-sans text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Selection Group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Program */}
                    <div className="space-y-1">
                      <label htmlFor="modal-program" className="font-mono text-[9px] text-slate-500 uppercase font-bold block">Desired Program *</label>
                      <select 
                        id="modal-program"
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        aria-label="Desired Program"
                        className="w-full bg-slate-950 border border-indigo-950/60 focus:border-violet-500 rounded-xl px-4 py-3 font-sans text-xs sm:text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors"
                      >
                        {programs.map((p, i) => (
                          <option key={i} value={p.title}>{p.title}</option>
                        ))}
                      </select>
                    </div>

                    {/* Package Plan */}
                    <div className="space-y-1">
                      <label htmlFor="modal-plan" className="font-mono text-[9px] text-slate-500 uppercase font-bold block">Enrollment Plan *</label>
                      <select 
                        id="modal-plan"
                        name="plan"
                        value={formData.plan}
                        onChange={handleInputChange}
                        aria-label="Enrollment Plan"
                        className="w-full bg-slate-950 border border-indigo-950/60 focus:border-violet-500 rounded-xl px-4 py-3 font-sans text-xs sm:text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors"
                      >
                        <option value="Online Training">Online Training</option>
                        <option value="Physical Training">Physical Training</option>
                        <option value="Internship Program">Internship Program</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label htmlFor="modal-message" className="font-mono text-[9px] text-slate-500 uppercase font-bold block">Cover Note or Message (Optional)</label>
                    <textarea 
                      id="modal-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      aria-label="Cover Note or Message"
                      placeholder="Briefly tell us about your motivations..."
                      className="w-full bg-slate-950 border border-indigo-950/60 focus:border-violet-500 rounded-xl px-4 py-3 font-sans text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 disabled:opacity-50 text-white rounded-xl font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-violet-600/10 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                          <span>Processing Application...</span>
                        </>
                      ) : (
                        <span>Submit Enrollment Application</span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}

        {/* Learn More / Program Details Sheet Modal */}
        {activeProgramModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProgramModal(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#0c0e1a] border border-indigo-950/80 text-white p-6 sm:p-8 rounded-3xl shadow-2xl overflow-hidden z-10"
              id="program-detail-modal"
            >
              {/* Top ambient blur */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-violet-600/10 blur-3xl pointer-events-none" />

              {/* Close btn */}
              <button 
                onClick={() => setActiveProgramModal(null)}
                className="absolute top-6 right-6 p-1 rounded bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-left space-y-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                    {activeProgramModal.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded">
                      ⌛ {activeProgramModal.duration}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded">
                      📚 {activeProgramModal.level}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="font-mono text-[9px] text-slate-500 uppercase font-bold block">Program Overview</span>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeProgramModal.longDesc}
                  </p>
                </div>

                <div className="h-px bg-indigo-950/20" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-indigo-950/40">
                    <span className="font-mono text-[8px] text-slate-500 font-bold uppercase tracking-wider block mb-2">Key Competency</span>
                    <p className="font-sans text-xs text-slate-300 leading-relaxed">Master industrial-grade layouts, collaborate on real workflows, write performant code, and build standard-compliant portfolios.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-indigo-950/40">
                    <span className="font-mono text-[8px] text-slate-500 font-bold uppercase tracking-wider block mb-2">Graduation Criteria</span>
                    <p className="font-sans text-xs text-slate-300 leading-relaxed">Students must successfully design and build all custom milestones, pass layout checks, and secure a letter of recommendation.</p>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setActiveProgramModal(null);
                      handleApplyClick(activeProgramModal.title);
                    }}
                    className="flex-1 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-xl font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 text-center cursor-pointer"
                  >
                    Enroll in This Program
                  </button>
                  <button
                    onClick={() => setActiveProgramModal(null)}
                    className="px-6 py-3.5 bg-slate-900 border border-indigo-950/60 hover:border-violet-500/40 text-slate-300 hover:text-white rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
