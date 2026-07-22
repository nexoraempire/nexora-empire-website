import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Website Development Company in Cameroon',
  description: 'Build high-performance React and Next.js web applications. Nexora Empire develops custom enterprise websites and ecommerce solutions in Buea.',
  keywords: 'custom website development Cameroon, web design company Cameroon, React development company Cameroon, Next.js development Cameroon, ecommerce website development Cameroon',
  alternates: {
    canonical: 'https://www.nexoraempire.com/web-dev',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/web-dev',
    title: 'Custom Website Development Company in Cameroon',
    description: 'Build high-performance React and Next.js web applications. Nexora Empire develops custom enterprise websites and ecommerce solutions in Buea.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'Web Development Services Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Website Development Company in Cameroon',
    description: 'Build high-performance React and Next.js web applications. Nexora Empire develops custom enterprise websites and ecommerce solutions in Buea.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function WebDevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
