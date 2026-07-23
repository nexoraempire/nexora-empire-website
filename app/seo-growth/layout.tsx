import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Services Cameroon | Nexora Empire',
  description: 'Nexora Empire provides professional SEO services in Cameroon. We specialize in search engine optimization, technical audits, and local SEO from Buea.',
  keywords: 'SEO Services Cameroon, Local SEO Cameroon, Google Ranking Cameroon, SEO Agency Cameroon',
  alternates: {
    canonical: 'https://www.nexoraempire.com/seo-growth',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/seo-growth',
    title: 'SEO Services Cameroon | Nexora Empire',
    description: 'Nexora Empire provides professional SEO services in Cameroon. We specialize in search engine optimization, technical audits, and local SEO from Buea.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'SEO Services Cameroon - Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services Cameroon | Nexora Empire',
    description: 'Nexora Empire provides professional SEO services in Cameroon. We specialize in search engine optimization, technical audits, and local SEO from Buea.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function SEOGrowthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
