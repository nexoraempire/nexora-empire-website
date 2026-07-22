import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Development Portfolio | Nexora Empire',
  description: 'Explore custom web apps, mobile systems, and brand design projects completed by our software developers in Buea, Cameroon.',
  keywords: 'software development portfolio, custom web applications Cameroon, mobile app projects Buea, branding portfolio Cameroon',
  alternates: {
    canonical: 'https://www.nexoraempire.com/portfolio',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/portfolio',
    title: 'Software Development Portfolio | Nexora Empire',
    description: 'Explore custom web apps, mobile systems, and brand design projects completed by our software developers in Buea, Cameroon.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'Software Portfolio Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Portfolio | Nexora Empire',
    description: 'Explore custom web apps, mobile systems, and brand design projects completed by our software developers in Buea, Cameroon.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
