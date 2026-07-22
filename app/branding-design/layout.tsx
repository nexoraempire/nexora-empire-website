import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brand Identity & Graphic Design Agency Cameroon',
  description: 'Brand identity and graphic design services in Cameroon. Nexora Empire designs corporate logos, visual styles, and marketing assets in Buea.',
  keywords: 'brand identity Cameroon, graphic design Cameroon, logo design Buea, visual branding Cameroon, graphic designer Buea',
  alternates: {
    canonical: 'https://www.nexoraempire.com/branding-design',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/branding-design',
    title: 'Brand Identity & Graphic Design Agency Cameroon',
    description: 'Brand identity and graphic design services in Cameroon. Nexora Empire designs corporate logos, visual styles, and marketing assets in Buea.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'Branding and Design Services Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Identity & Graphic Design Agency Cameroon',
    description: 'Brand identity and graphic design services in Cameroon. Nexora Empire designs corporate logos, visual styles, and marketing assets in Buea.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function BrandingDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
