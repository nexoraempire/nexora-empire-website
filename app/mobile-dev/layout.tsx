import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development Cameroon | Nexora Empire',
  description: 'Nexora Empire offers custom mobile app development in Cameroon. Our developers build high-performance iOS, Android, and cross-platform mobile applications in Buea.',
  keywords: 'Mobile App Development Cameroon, Android App Development Cameroon, iOS App Development Cameroon, Cross Platform App Development Cameroon',
  alternates: {
    canonical: 'https://www.nexoraempire.com/mobile-dev',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/mobile-dev',
    title: 'Mobile App Development Cameroon | Nexora Empire',
    description: 'Nexora Empire offers custom mobile app development in Cameroon. Our developers build high-performance iOS, Android, and cross-platform mobile applications in Buea.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'Mobile App Development Cameroon - Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Cameroon | Nexora Empire',
    description: 'Nexora Empire offers custom mobile app development in Cameroon. Our developers build high-performance iOS, Android, and cross-platform mobile applications in Buea.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function MobileDevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
