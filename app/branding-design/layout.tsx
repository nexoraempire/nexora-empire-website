import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Branding Agency Cameroon | Nexora Empire',
  description: 'Nexora Empire is a branding agency in Cameroon. We offer graphic design, logo design, visual systems, and corporate identity services from Buea.',
  keywords: 'Branding Agency Cameroon, Brand Identity Cameroon, Graphic Design Cameroon, Logo Design Cameroon',
  alternates: {
    canonical: 'https://www.nexoraempire.com/branding-design',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/branding-design',
    title: 'Branding Agency Cameroon | Nexora Empire',
    description: 'Nexora Empire is a branding agency in Cameroon. We offer graphic design, logo design, visual systems, and corporate identity services from Buea.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'Branding Agency Cameroon - Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Branding Agency Cameroon | Nexora Empire',
    description: 'Nexora Empire is a branding agency in Cameroon. We offer graphic design, logo design, visual systems, and corporate identity services from Buea.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function BrandingDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
