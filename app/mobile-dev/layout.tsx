import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Mobile App Development Company in Cameroon',
  description: 'Top-rated mobile app development company in Cameroon. We engineer cross-platform React Native & Expo iOS and Android mobile apps for startups and enterprises.',
  keywords: 'mobile app development company, iOS developers, Android app development, cross-platform app, React Native development, mobile application agency, Expo app developers, best mobile app developer in Buea, mobile app development agency',
  alternates: {
    canonical: 'https://www.nexoraempire.com/mobile-dev',
  },
};

export default function MobileDevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
