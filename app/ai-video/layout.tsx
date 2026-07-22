import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Video Creation Services Cameroon | Nexora Empire',
  description: 'Enhance your digital presence with AI video creation services in Cameroon. We produce video marketing assets from our base in Buea.',
  keywords: 'AI video creation Cameroon, synthetic media Buea, AI video production Cameroon, generative video agency Buea',
  alternates: {
    canonical: 'https://www.nexoraempire.com/ai-video',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/ai-video',
    title: 'AI Video Creation Services Cameroon | Nexora Empire',
    description: 'Enhance your digital presence with AI video creation services in Cameroon. We produce video marketing assets from our base in Buea.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'AI Video Services Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Video Creation Services Cameroon | Nexora Empire',
    description: 'Enhance your digital presence with AI video creation services in Cameroon. We produce video marketing assets from our base in Buea.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function AIVideoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
