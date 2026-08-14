import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fintech Software Development Company | Nexora Empire',
  description: 'Nexora Empire engineers secure, PCI-compliant digital banking applications, payment software integrations, and financial technology platforms.',
  keywords: 'fintech software development company, fintech software development, fintech software development services, fintech software solutions, financial software development, custom fintech software, fintech application development, financial technology solutions, fintech platforms, payment software development',
  alternates: {
    canonical: 'https://www.nexoraempire.com/industries/fintech',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/industries/fintech',
    title: 'Fintech Software Development Company | Nexora Empire',
    description: 'Nexora Empire engineers secure, PCI-compliant digital banking applications, payment software integrations, and financial technology platforms.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'Fintech Software Development Company - Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fintech Software Development Company | Nexora Empire',
    description: 'Nexora Empire engineers secure, PCI-compliant digital banking applications, payment software integrations, and financial technology platforms.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function FintechLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
