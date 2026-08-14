'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';
import { CursorSpotlight } from '../src/components/CursorSpotlight';
import { BackToTop } from '../src/components/BackToTop';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  // Get active view name from the pathname
  const getViewFromPath = (): any => {
    const path = pathname.replace(/^\//, '').replace(/\/$/, '');
    if (path === '' || path === 'home') {
      return 'home';
    }
    return path;
  };

  const currentView = getViewFromPath();

  const handleSetView = (view?: any) => {
    if (!view) return;
    if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  const isConnectPage = pathname === '/connect';

  const getJsonLdSchema = () => {
    const defaultOrg = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Nexora Empire",
      "url": "https://www.nexoraempire.com",
      "logo": "https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp",
      "sameAs": [
        "https://github.com/DevLili237",
        "https://wa.me/237677079559"
      ]
    };

    const defaultService = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Nexora Empire",
      "image": "https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp",
      "@id": "https://www.nexoraempire.com/#organization",
      "url": "https://www.nexoraempire.com",
      "telephone": "+237677079559",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Buea Town",
        "addressLocality": "Buea",
        "addressRegion": "South West Region",
        "postalCode": "00237",
        "addressCountry": "CM"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "4.156",
        "longitude": "9.243"
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Buea" },
        { "@type": "AdministrativeArea", "name": "Limbe" },
        { "@type": "AdministrativeArea", "name": "Douala" },
        { "@type": "AdministrativeArea", "name": "Yaoundé" },
        { "@type": "AdministrativeArea", "name": "Bamenda" },
        { "@type": "AdministrativeArea", "name": "Cameroon" }
      ]
    };

    const schemas: any[] = [defaultOrg, defaultService];

    // Page-specific additional schemas
    if (pathname === '/' || pathname === '/home') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Nexora Empire",
        "url": "https://www.nexoraempire.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.nexoraempire.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      });
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is custom software development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Custom software development is the process of designing, building, deploying, and maintaining software tailored specifically for a set of users, functions, or organizations. Unlike off-the-shelf software, custom software solutions are engineered to fit your exact workflows, integrate with existing business systems, and scale alongside your business."
            }
          },
          {
            "@type": "Question",
            "name": "How much does custom software development cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of custom software development varies based on scope, feature complexity, integrations, and project requirements. We provide clear, transparent proposals with milestone-based pricing after our discovery session."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build custom software?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Timelines depend directly on the scale and depth of the project. A standard business web application or website development project typically takes 3 to 6 weeks, while advanced custom enterprise software or native mobile applications can take 8 to 16 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with businesses outside Cameroon?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! While Nexora Empire is proudly based in Buea, Cameroon, we operate as a global development partner. We serve international clients across Europe, North America, and other regions, using remote collaboration tools and agile methodologies."
            }
          }
        ]
      });
    } else {
      // Build breadcrumbs for subpages
      const pageName = pathname.replace(/^\//, '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.nexoraempire.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": pageName,
            "item": `https://www.nexoraempire.com${pathname}`
          }
        ]
      });

      // Specific Service details
      if (pathname === '/web-dev') {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Website Development Company Cameroon",
          "provider": { "@id": "https://www.nexoraempire.com/#organization" },
          "areaServed": "Cameroon",
          "description": "Website development company in Cameroon building custom web design projects and corporate sites."
        });
      } else if (pathname === '/mobile-dev') {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Mobile App Development Cameroon",
          "provider": { "@id": "https://www.nexoraempire.com/#organization" },
          "areaServed": "Cameroon",
          "description": "Mobile app development services in Cameroon building custom native iOS, Android, and cross-platform apps."
        });
      } else if (pathname === '/seo-growth') {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "SEO Services Cameroon",
          "provider": { "@id": "https://www.nexoraempire.com/#organization" },
          "areaServed": "Cameroon",
          "description": "Professional SEO services in Cameroon offering local search optimization, technical SEO, and audits."
        });
      } else if (pathname === '/branding-design') {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Branding Agency Cameroon",
          "provider": { "@id": "https://www.nexoraempire.com/#organization" },
          "areaServed": "Cameroon",
          "description": "Professional branding agency in Cameroon specialized in custom logos, brand identity, and graphics."
        });
      } else if (pathname === '/ai-video') {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "AI Video Creation Cameroon",
          "provider": { "@id": "https://www.nexoraempire.com/#organization" },
          "areaServed": "Cameroon",
          "description": "AI video creation and automated commercial video design services for companies in Cameroon."
        });
      } else if (pathname === '/social-media-management') {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Social Media Management Cameroon",
          "provider": { "@id": "https://www.nexoraempire.com/#organization" },
          "areaServed": "Cameroon",
          "description": "Social media management and strategy services for businesses in Cameroon to grow online channels."
        });
      } else if (pathname === '/industries/healthcare') {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Custom Healthcare Software Development Company",
          "provider": { "@id": "https://www.nexoraempire.com/#organization" },
          "description": "HIPAA-compliant custom healthcare software development services building EHR/EMR platforms and virtual care systems."
        });
      } else if (pathname === '/industries/fintech') {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Fintech Software Development Company",
          "provider": { "@id": "https://www.nexoraempire.com/#organization" },
          "description": "PCI-compliant fintech software development solutions including digital wallets, payment integrations, and microfinance systems."
        });
      } else if (pathname === '/industries/education') {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Education Software Solutions Development",
          "provider": { "@id": "https://www.nexoraempire.com/#organization" },
          "description": "Learning Management System (LMS) development, student databases, and customized educational portal engineering."
        });
      } else if (pathname === '/industries/ecommerce') {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Ecommerce Software Solution Development",
          "provider": { "@id": "https://www.nexoraempire.com/#organization" },
          "description": "High-performance e-commerce software platforms, B2B ordering portals, and multi-vendor marketplaces."
        });
      } else if (pathname === '/industries/enterprise') {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Enterprise Software Development Services",
          "provider": { "@id": "https://www.nexoraempire.com/#organization" },
          "description": "Custom enterprise software development, ERP platforms, workflow automation, and secure API integrations."
        });
      }
    }

    return schemas;
  };

  const schemas = getJsonLdSchema();

  return (
    <div className="relative min-h-screen bg-brand-dark text-white select-none">
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <CursorSpotlight />
      {!isConnectPage && <Header view={currentView} setView={handleSetView} />}
      <main className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      {!isConnectPage && <Footer view={currentView} setView={handleSetView} />}
      <BackToTop />
    </div>
  );
};
