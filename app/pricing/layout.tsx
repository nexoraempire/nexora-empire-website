import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Development Pricing Cameroon | Nexora Empire',
  description: 'Find custom software, website, and mobile app development pricing options. Nexora Empire provides clear pricing for businesses in Cameroon.',
  keywords: 'software development cost Cameroon, website development price Buea, SEO services cost Cameroon, mobile app pricing Cameroon',
  alternates: {
    canonical: 'https://www.nexoraempire.com/pricing',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/pricing',
    title: 'Software Development Pricing Cameroon | Nexora Empire',
    description: 'Find custom software, website, and mobile app development pricing options. Nexora Empire provides clear pricing for businesses in Cameroon.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'Software and SEO Pricing Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Pricing Cameroon | Nexora Empire',
    description: 'Find custom software, website, and mobile app development pricing options. Nexora Empire provides clear pricing for businesses in Cameroon.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
