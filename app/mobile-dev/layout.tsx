import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development Company Cameroon | Nexora Empire',
  description: 'Create custom iOS and Android mobile applications. Nexora Empire builds native and cross-platform mobile solutions from Buea, Cameroon.',
  keywords: 'mobile app development company Cameroon, custom app developers Buea, React Native Cameroon, iOS Android app development Cameroon',
  alternates: {
    canonical: 'https://www.nexoraempire.com/mobile-dev',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/mobile-dev',
    title: 'Mobile App Development Company Cameroon | Nexora Empire',
    description: 'Create custom iOS and Android mobile applications. Nexora Empire builds native and cross-platform mobile solutions from Buea, Cameroon.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'Mobile App Development Services Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Company Cameroon | Nexora Empire',
    description: 'Create custom iOS and Android mobile applications. Nexora Empire builds native and cross-platform mobile solutions from Buea, Cameroon.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function MobileDevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
