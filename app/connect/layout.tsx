import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nexora Empire Links | Software & Tech Company Buea',
  description: 'Connect with Nexora Empire in Buea, Cameroon. Access our software solutions, social profiles, WhatsApp community, and developer team links.',
  keywords: 'Nexora Empire links, custom software developer Buea, WhatsApp community tech Cameroon, social links Nexora',
  alternates: {
    canonical: 'https://www.nexoraempire.com/connect',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/connect',
    title: 'Nexora Empire Links | Software & Tech Company Buea',
    description: 'Connect with Nexora Empire in Buea, Cameroon. Access our software solutions, social profiles, WhatsApp community, and developer team links.',
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
    title: 'Nexora Empire Links | Software & Tech Company Buea',
    description: 'Connect with Nexora Empire in Buea, Cameroon. Access our software solutions, social profiles, WhatsApp community, and developer team links.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function ConnectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
