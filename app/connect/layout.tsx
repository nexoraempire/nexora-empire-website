import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nexora Empire | Connect',
  description: 'Connect with Nexora Empire. Explore our software solutions, AI services, creative brands, portfolio, GitHub, WhatsApp community, and official social media.',
  keywords: 'Nexora Empire links, Linktree alternative, DevLili portfolio, Nexora Studio, Nexora Motion, WhatsApp community, social links',
  alternates: {
    canonical: 'https://www.nexoraempire.com/connect',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/connect',
    title: 'Nexora Empire | Connect',
    description: 'Connect with Nexora Empire. Explore our software solutions, AI services, creative brands, portfolio, GitHub, WhatsApp community, and official social media.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Nexora Empire Connect Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexora Empire | Connect',
    description: 'Connect with Nexora Empire. Explore our software solutions, AI services, creative brands, portfolio, GitHub, WhatsApp community, and official social media.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function ConnectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
