import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Enterprise Software Development | Nexora Empire',
  description: 'Nexora Empire delivers high-performance custom enterprise software development services. We engineer customized ERPs, CRM modules, and task automation systems.',
  keywords: 'enterprise software development services, custom enterprise software development services, enterprise software development, custom enterprise software, enterprise software solutions, enterprise application development, business software solutions, custom business software, enterprise platforms, business automation software',
  alternates: {
    canonical: 'https://www.nexoraempire.com/industries/enterprise',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/industries/enterprise',
    title: 'Custom Enterprise Software Development | Nexora Empire',
    description: 'Nexora Empire delivers high-performance custom enterprise software development services. We engineer customized ERPs, CRM modules, and task automation systems.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'Custom Enterprise Software Development - Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Enterprise Software Development | Nexora Empire',
    description: 'Nexora Empire delivers high-performance custom enterprise software development services. We engineer customized ERPs, CRM modules, and task automation systems.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
