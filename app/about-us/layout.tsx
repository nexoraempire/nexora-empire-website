import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Nexora Empire | Technology Company Cameroon',
  description: 'Discover Nexora Empire, a software company in Buea, Cameroon. Meet our developers delivering digital transformation and technology services.',
  keywords: 'software company Cameroon, technology company Buea, software engineering Cameroon, technology consulting Buea, IT services Cameroon',
  alternates: {
    canonical: 'https://www.nexoraempire.com/about-us',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/about-us',
    title: 'About Nexora Empire | Technology Company Cameroon',
    description: 'Discover Nexora Empire, a software company in Buea, Cameroon. Meet our developers delivering digital transformation and technology services.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'About Nexora Empire Cameroon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Nexora Empire | Technology Company Cameroon',
    description: 'Discover Nexora Empire, a software company in Buea, Cameroon. Meet our developers delivering digital transformation and technology services.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
