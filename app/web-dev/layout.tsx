import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Development Company Cameroon | Nexora Empire',
  description: 'Nexora Empire is a website development company in Cameroon. We build custom websites, e-commerce stores, and high-performance React and Next.js applications in Buea.',
  keywords: 'Website Development Company Cameroon, Web Design Cameroon, Business Website Development Cameroon, Custom Website Development Cameroon',
  alternates: {
    canonical: 'https://www.nexoraempire.com/web-dev',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/web-dev',
    title: 'Website Development Company Cameroon | Nexora Empire',
    description: 'Nexora Empire is a website development company in Cameroon. We build custom websites, e-commerce stores, and high-performance React and Next.js applications in Buea.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'Website Development Company Cameroon - Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company Cameroon | Nexora Empire',
    description: 'Nexora Empire is a website development company in Cameroon. We build custom websites, e-commerce stores, and high-performance React and Next.js applications in Buea.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function WebDevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
