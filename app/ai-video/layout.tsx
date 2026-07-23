import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Video Creation Cameroon | Nexora Empire',
  description: 'Nexora Empire provides professional AI video creation in Cameroon. We generate high-quality marketing, commercial, and social media videos from Buea.',
  keywords: 'AI Video Creation Cameroon, AI Marketing Videos, AI Commercial Videos, AI Content Creation',
  alternates: {
    canonical: 'https://www.nexoraempire.com/ai-video',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/ai-video',
    title: 'AI Video Creation Cameroon | Nexora Empire',
    description: 'Nexora Empire provides professional AI video creation in Cameroon. We generate high-quality marketing, commercial, and social media videos from Buea.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'AI Video Creation Cameroon - Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Video Creation Cameroon | Nexora Empire',
    description: 'Nexora Empire provides professional AI video creation in Cameroon. We generate high-quality marketing, commercial, and social media videos from Buea.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function AIVideoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
