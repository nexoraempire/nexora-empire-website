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
            "name": "What custom software development services do you offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nexora Empire provides custom software development, mobile application development (iOS & Android), web development (React & Next.js), SEO services, visual branding design, and AI automation tools in Buea, Cameroon."
            }
          },
          {
            "@type": "Question",
            "name": "How does Nexora Empire optimize websites for local SEO in Cameroon?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We optimize technical search properties, structure semantic content layouts, implement JSON-LD microdata schema, establish NAP consistency with Google Business Profile, and build fast, mobile-friendly platforms."
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
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
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
