/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
const AboutUsPage = React.lazy(() => import('./components/AboutUsPage.tsx').then(m => ({ default: m.AboutUsPage })));
const PortfolioPage = React.lazy(() => import('./components/PortfolioPage.tsx').then(m => ({ default: m.PortfolioPage })));
const PricingPage = React.lazy(() => import('./components/PricingPage.tsx').then(m => ({ default: m.PricingPage })));
const TrainingInternshipPage = React.lazy(() => import('./components/TrainingInternshipPage.tsx').then(m => ({ default: m.TrainingInternshipPage })));
const ContactPage = React.lazy(() => import('./components/ContactPage.tsx').then(m => ({ default: m.ContactPage })));
const WebDevPage = React.lazy(() => import('./components/WebDevPage.tsx').then(m => ({ default: m.WebDevPage })));
const MobileDevPage = React.lazy(() => import('./components/MobileDevPage.tsx').then(m => ({ default: m.MobileDevPage })));
const BrandingDesignPage = React.lazy(() => import('./components/BrandingDesignPage.tsx').then(m => ({ default: m.BrandingDesignPage })));
const SEOGrowthPage = React.lazy(() => import('./components/SEOGrowthPage.tsx').then(m => ({ default: m.SEOGrowthPage })));
const AIVideoPage = React.lazy(() => import('./components/AIVideoPage.tsx').then(m => ({ default: m.AIVideoPage })));
const SocialMediaManagementPage = React.lazy(() => import('./components/SocialMediaManagementPage.tsx').then(m => ({ default: m.SocialMediaManagementPage })));
import { WhyNexora } from './components/WhyNexora.tsx';
import { Services } from './components/Services.tsx';
import { FeaturedProjects } from './components/FeaturedProjects.tsx';
import { Pricing } from './components/Pricing.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { TechStack } from './components/TechStack.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { FAQ } from './components/FAQ.tsx';
import { ReadyToBuild } from './components/ReadyToBuild.tsx';
import { Footer } from './components/Footer.tsx';
import { BackToTop } from './components/BackToTop.tsx';
import { CursorSpotlight } from './components/CursorSpotlight.tsx';
import Lenis from 'lenis';

export default function App() {
  const [view, setView] = useState<'home' | 'about-us' | 'portfolio' | 'pricing' | 'training-internship' | 'contact' | 'web-dev' | 'mobile-dev' | 'branding-design' | 'seo-growth' | 'ai-video' | 'social-media-management'>('home');

  useEffect(() => {
    // Enable Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync scroll event listener if we need any custom scroll logic
    return () => {
      lenis.destroy();
      (window as any).lenis = undefined;
    };
  }, []);

  // Professional SEO, Accessibility and Scroll Synchronization effect
  useEffect(() => {
    // 1. Immediately reset scroll positions to top on route switch
    window.scrollTo(0, 0);
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }

    // 2. Dynamic Title Map for search engine indexers and bookmarking usability
    const titleMap: Record<string, string> = {
      'home': 'Nexora Empire | Best Software Development & SEO Company in Cameroon',
      'about-us': 'About Nexora Empire | Professional Software Company in Cameroon',
      'portfolio': 'Software Development & SEO Portfolio Cameroon | Nexora Empire',
      'pricing': 'Web Development & SEO Pricing Cameroon | Nexora Empire',
      'training-internship': 'Best Software Engineering Training & Certified Internships in Cameroon',
      'contact': 'Nexora Empire | Best Software Development & SEO Company in Cameroon',
      'web-dev': 'Best Web Development Company in Cameroon | Website Developer Buea',
      'mobile-dev': 'Professional Mobile App Development Company in Cameroon',
      'branding-design': 'Professional Graphic Design & Logo Branding Agency Cameroon',
      'seo-growth': 'Best SEO Agency in Cameroon | Professional SEO Services Buea',
      'ai-video': 'AI Video Production & Custom AI Automation Agency Cameroon',
      'social-media-management': 'Social Media Management & Digital Marketing Company Cameroon'
    };

    // 3. Dynamic Meta Description Map to prevent identical search snippets
    const descMap: Record<string, string> = {
      'home': 'Nexora Empire is the best software engineering company in Buea and the premier software development & SEO agency in Cameroon. We build premium enterprise web apps, mobile apps, and custom AI systems.',
      'about-us': 'Learn about Nexora Empire, a professional software company in Cameroon and the best software engineering company in Buea. Meet our expert developers and SEO growth specialists.',
      'portfolio': 'Explore our enterprise software engineering, responsive website development, custom mobile apps, and successful SEO campaigns across Cameroon and globally.',
      'pricing': 'Affordable pricing plans for custom website development, mobile application engineering, professional SEO packages, and visual brand identity designs in Cameroon.',
      'training-internship': 'Kickstart your tech career at Nexora Academy. Join practical software engineering training courses in Cameroon with guaranteed certified internship options.',
      'contact': 'Hire the best website developers, SEO experts, and custom software company in Cameroon. Reach out to our Buea Town office or schedule a call.',
      'web-dev': 'Looking for the best web development company in Cameroon? We build high-performance React & Next.js web applications, e-commerce stores, and custom SaaS systems.',
      'mobile-dev': 'Top-rated mobile app development company in Cameroon. We engineer cross-platform React Native & Expo iOS and Android mobile apps for startups and enterprises.',
      'branding-design': 'Establish your brand authority. Professional corporate visual identity, custom logo design systems, brochures, and brand styling guidelines in Cameroon.',
      'seo-growth': 'Rank #1 on Google. Nexora Empire is the best SEO agency in Cameroon. We offer expert technical audits, semantic keyword mapping, and local SEO services.',
      'ai-video': 'Transform your business with cutting-edge AI video production, realistic custom digital avatars, synthetic marketing campaigns, and AI integration.',
      'social-media-management': 'Sustain organic customer growth. We handle professional social media management, brand campaigns, content calendars, and digital marketing.'
    };

    // 4. Dynamic Meta Keywords Map
    const keywordsMap: Record<string, string> = {
      'home': 'best software engineering company in Buea, software development company Cameroon, software company Buea, website developers Buea, SEO company Cameroon, digital agency Buea',
      'about-us': 'software company, technology partner, software engineers, digital innovation, Nexora crew, technology consulting, digital transformation, software engineering company Buea',
      'portfolio': 'portfolio, case studies, software development portfolio, website showcase, mobile app design, brand identities, custom solutions',
      'pricing': 'pricing, software development cost, web development plans, mobile app pricing, branding budget, SEO services cost',
      'training-internship': 'software training, coding academy, tech internship, learn web development, mobile app course, Cameroon software training, Nexora Academy',
      'contact': 'contact Nexora Empire, hire software developers, software company office hours, Buea Town Cameroon software, schedule consultation',
      'web-dev': 'web development company, website development services, custom web applications, full-stack development, SaaS development, enterprise web development, headless CMS',
      'mobile-dev': 'mobile app development company, iOS developers, Android app development, cross-platform app, React Native development, mobile application agency, native speed',
      'branding-design': 'branding agency, graphic design agency, visual identity, corporate brand design, logo creator, creative director, style guidelines',
      'seo-growth': 'SEO agency, technical SEO company, organic growth marketing, search engine optimization, local SEO, rank on Google, AI search engine optimization, schema structured data',
      'ai-video': 'AI video production, generative AI video, synthetic media company, interactive video ads, AI voice generation, digital marketing',
      'social-media-management': 'social media management, social media agency, brand growth online, content calendar creation, organic reach campaigns, community management'
    };

    const activeTitle = titleMap[view] || 'Nexora Empire | Enterprise Software Development & Digital Agency';
    const activeDesc = descMap[view] || 'A future-forward software development company and digital agency showcasing state-of-the-art technological craft, websites, and high-performance digital experiences.';
    const activeKeywords = keywordsMap[view] || 'Nexora Empire, software development, web development, mobile apps, branding, SEO growth, AI video production';

    // Synchronize document elements
    document.title = activeTitle;

    // description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', activeDesc);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', activeDesc);
      document.head.appendChild(metaDesc);
    }

    // keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', activeKeywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', activeKeywords);
      document.head.appendChild(metaKeywords);
    }

    // Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', activeTitle);
    } else {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', activeTitle);
      document.head.appendChild(ogTitle);
    }

    // Open Graph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', activeDesc);
    } else {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      ogDesc.setAttribute('content', activeDesc);
      document.head.appendChild(ogDesc);
    }

    // Open Graph URL
    const activeUrl = `https://nexoraempire.com/${view === 'home' ? '' : view}`;
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', activeUrl);
    } else {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      ogUrl.setAttribute('content', activeUrl);
      document.head.appendChild(ogUrl);
    }

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', activeUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', activeUrl);
      document.head.appendChild(canonicalLink);
    }

    // Dynamic Schema Injection to boost Google Crawl schema rankings
    let schemaTag = document.getElementById('dynamic-schema');
    if (schemaTag) {
      schemaTag.remove();
    }
    schemaTag = document.createElement('script');
    schemaTag.id = 'dynamic-schema';
    schemaTag.setAttribute('type', 'application/ld+json');

    // Rich structured schemas matching the page intent (E-E-A-T)
    const schemaMap: Record<string, any> = {
      'home': {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://nexoraempire.com/#organization",
            "name": "Nexora Empire",
            "url": "https://nexoraempire.com",
            "logo": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500",
            "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
            "description": "Nexora Empire is an elite software development company and full-service digital products agency building enterprise software, high-performance web platforms, mobile apps, custom AI automation, and premium corporate branding designs.",
            "telephone": "+237 677 079 559",
            "email": "contact@nexoraempire.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Before slaughterhouse, Buea Town",
              "addressLocality": "Buea",
              "addressRegion": "South West",
              "postalCode": "00237",
              "addressCountry": "CM"
            },
            "sameAs": [
              "https://www.linkedin.com/company/nexora-empire",
              "https://github.com/nexora-empire",
              "https://wa.me/237677079559"
            ]
          },
          {
            "@type": "ProfessionalService",
            "@id": "https://nexoraempire.com/#service",
            "name": "Nexora Empire Solutions",
            "description": "Nexora Empire is a top-tier software company offering web engineering, native iOS and Android apps, custom AI integration, technical search engine optimization (SEO), and premium brand design worldwide.",
            "telephone": "+237 677 079 559",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Before slaughterhouse, Buea Town",
              "addressLocality": "Buea",
              "addressCountry": "CM"
            }
          },
          {
            "@type": "WebSite",
            "@id": "https://nexoraempire.com/#website",
            "url": "https://nexoraempire.com",
            "name": "Nexora Empire",
            "publisher": { "@id": "https://nexoraempire.com/#organization" },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://nexoraempire.com/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        ]
      },
      'about-us': {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": "https://nexoraempire.com/about-us/#webpage",
        "url": "https://nexoraempire.com/about-us",
        "name": activeTitle,
        "description": activeDesc,
        "mainEntity": {
          "@type": "Organization",
          "name": "Nexora Empire",
          "description": "An elite team of software engineers, visual designers, and technical marketers building digital systems for next-generation enterprises.",
          "foundingDate": "2024",
          "knowsAbout": [
            "Software Engineering",
            "Cloud Computing",
            "User Experience Design",
            "Artificial Intelligence Solutions",
            "Advanced Technical SEO"
          ]
        }
      },
      'web-dev': {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Custom Enterprise Web Development",
        "provider": {
          "@type": "Organization",
          "name": "Nexora Empire",
          "url": "https://nexoraempire.com"
        },
        "areaServed": "Worldwide",
        "description": "High-performance web development utilizing headless APIs, responsive grid engines, state-of-the-art interactive modules, and pristine visual architecture.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "Custom"
        }
      },
      'mobile-dev': {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "iOS & Android Mobile App Development",
        "provider": {
          "@type": "Organization",
          "name": "Nexora Empire",
          "url": "https://nexoraempire.com"
        },
        "areaServed": "Worldwide",
        "description": "Tailor-made, high-performance native iOS & Android systems running with elegant micro-interactions, cross-platform React Native architectures, and fully optimized UX.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "Custom"
        }
      },
      'branding-design': {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Premium Branding & Visual Identity",
        "provider": {
          "@type": "Organization",
          "name": "Nexora Empire",
          "url": "https://nexoraempire.com"
        },
        "areaServed": "Worldwide",
        "description": "Cohesive brand architectures, digital style systems, corporate logos, professional typography pairings, and elite corporate design guidelines.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "Custom"
        }
      },
      'seo-growth': {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Advanced Technical SEO & Organic Marketing",
        "provider": {
          "@type": "Organization",
          "name": "Nexora Empire",
          "url": "https://nexoraempire.com"
        },
        "areaServed": "Worldwide",
        "description": "Dominate organic keyword placements, optimize schema metadata, establish topical E-E-A-T signals, and triple organic conversion funnels with expert solutions.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "Custom"
        }
      },
      'ai-video': {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "State-of-the-Art AI Video Creation & Production",
        "provider": {
          "@type": "Organization",
          "name": "Nexora Empire",
          "url": "https://nexoraempire.com"
        },
        "areaServed": "Worldwide",
        "description": "Generative synthetic media creation, interactive corporate video advertisements, dynamic vocal models, and state-of-the-art visual assets.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "Custom"
        }
      },
      'social-media-management': {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Strategic Social Media Management & Organic Growth",
        "provider": {
          "@type": "Organization",
          "name": "Nexora Empire",
          "url": "https://nexoraempire.com"
        },
        "areaServed": "Worldwide",
        "description": "Corporate platform audits, dynamic content calendars, cohesive media templates, automated posting, and hyper-targeted organic brand exposure.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "Custom"
        }
      },
      'portfolio': {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://nexoraempire.com/portfolio/#webpage",
        "url": "https://nexoraempire.com/portfolio",
        "name": activeTitle,
        "description": activeDesc,
        "publisher": {
          "@type": "Organization",
          "name": "Nexora Empire",
          "url": "https://nexoraempire.com"
        }
      },
      'pricing': {
        "@context": "https://schema.org",
        "@type": "PriceSpecification",
        "name": "Nexora Empire Project Investment Structure",
        "description": "Transparent pricing tiers for advanced web design, native mobile apps, custom backend architectures, and digital marketing programs.",
        "priceCurrency": "USD"
      },
      'training-internship': {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "EducationalOrganization",
            "@id": "https://nexoraempire.com/training-internship/#academy",
            "name": "Nexora Academy",
            "description": "A world-class software engineering training academy offering verified courses and enterprise project internships for aspiring tech leaders.",
            "url": "https://nexoraempire.com/training-internship",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Before slaughterhouse, Buea Town",
              "addressLocality": "Buea",
              "addressCountry": "CM"
            }
          },
          {
            "@type": "Course",
            "name": "Nexora Full-Stack Software Engineering Training & Certified Internship Program",
            "description": "Learn modern frontend and backend development with live React workshops, certified mentoring, and verified client-facing internships.",
            "provider": { "@id": "https://nexoraempire.com/training-internship/#academy" }
          }
        ]
      },
      'contact': {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": "https://nexoraempire.com/contact/#webpage",
        "url": "https://nexoraempire.com/contact",
        "name": activeTitle,
        "description": activeDesc,
        "mainEntity": {
          "@type": "ProfessionalService",
          "name": "Nexora Empire Headquarters",
          "telephone": "+237 677 079 559",
          "email": "contact@nexoraempire.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Before slaughterhouse, Buea Town",
            "addressLocality": "Buea",
            "addressRegion": "South West",
            "postalCode": "00237",
            "addressCountry": "CM"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "08:00",
            "closes": "17:00"
          }
        }
      }
    };

    const activeSchema = schemaMap[view] || {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": activeTitle,
      "description": activeDesc,
      "publisher": {
        "@type": "Organization",
        "name": "Nexora Empire",
        "url": "https://nexoraempire.com"
      }
    };

    schemaTag.textContent = JSON.stringify(activeSchema);
    document.head.appendChild(schemaTag);

  }, [view]);

  return (
    <div className="relative min-h-screen bg-brand-dark text-white select-none">
      {/* Global premium cursor tracking spotlight */}
      <CursorSpotlight />

      {/* Header element containing the top navigation */}
      <Header view={view} setView={setView} />

      {/* Main content blocks */}
      <main className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="w-full"
          >
            <React.Suspense fallback={
              <div className="min-h-screen bg-brand-dark flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-brand-violet border-t-transparent animate-spin"></div>
              </div>
            }>
              {view === 'home' ? (
                <>
                  <Hero />
                  <About setView={setView} />
                  <Services setView={setView} />
                  <FeaturedProjects setView={setView} />
                  <TechStack />
                  <WhyNexora />
                  <Pricing />
                  <Testimonials />
                  <FAQ />
                  <FinalCTA />
                  <ReadyToBuild />
                </>
              ) : view === 'about-us' ? (
                <AboutUsPage setView={setView} />
              ) : view === 'web-dev' ? (
                <WebDevPage setView={setView} />
              ) : view === 'mobile-dev' ? (
                <MobileDevPage setView={setView} />
              ) : view === 'branding-design' ? (
                <BrandingDesignPage setView={setView} />
              ) : view === 'seo-growth' ? (
                <SEOGrowthPage setView={setView} />
              ) : view === 'ai-video' ? (
                <AIVideoPage setView={setView} />
              ) : view === 'social-media-management' ? (
                <SocialMediaManagementPage setView={setView} />
              ) : view === 'portfolio' ? (
                <PortfolioPage setView={setView} />
              ) : view === 'pricing' ? (
                <PricingPage setView={setView} />
              ) : view === 'training-internship' ? (
                <TrainingInternshipPage setView={setView} />
              ) : (
                <>
                  <ContactPage setView={setView} />
                  <ReadyToBuild />
                </>
              )}
            </React.Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer block at the bottom */}
      <Footer view={view} setView={setView} />

      {/* Floating Back to Top control */}
      <BackToTop />
    </div>
  );
}

