import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Services & Local SEO Agency Cameroon',
  description: 'SEO services for businesses in Cameroon. Nexora Empire provides technical audits, semantic keyword mapping, and local SEO in Buea.',
  keywords: 'SEO services Cameroon, local SEO Buea, technical SEO agency Cameroon, search engine optimization Buea, organic growth Cameroon',
  alternates: {
    canonical: 'https://www.nexoraempire.com/seo-growth',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/seo-growth',
    title: 'SEO Services & Local SEO Agency Cameroon',
    description: 'SEO services for businesses in Cameroon. Nexora Empire provides technical audits, semantic keyword mapping, and local SEO in Buea.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'SEO Services Cameroon Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services & Local SEO Agency Cameroon',
    description: 'SEO services for businesses in Cameroon. Nexora Empire provides technical audits, semantic keyword mapping, and local SEO in Buea.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function SEOGrowthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
