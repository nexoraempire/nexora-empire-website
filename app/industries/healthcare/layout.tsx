import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Healthcare Software Development | Nexora Empire',
  description: 'Nexora Empire builds secure, HIPAA-compliant custom healthcare software solutions, telemedicine applications, and healthcare management software for clinical providers.',
  keywords: 'custom healthcare software development company, custom healthcare software development, healthcare software development company, healthcare software development services, healthcare software solutions, healthcare software solutions development, custom healthcare software development solutions, healthcare management software, healthcare digital solutions',
  alternates: {
    canonical: 'https://www.nexoraempire.com/industries/healthcare',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/industries/healthcare',
    title: 'Custom Healthcare Software Development | Nexora Empire',
    description: 'Nexora Empire builds secure, HIPAA-compliant custom healthcare software solutions, telemedicine applications, and healthcare management software for clinical providers.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'Custom Healthcare Software Development - Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Healthcare Software Development | Nexora Empire',
    description: 'Nexora Empire builds secure, HIPAA-compliant custom healthcare software solutions, telemedicine applications, and healthcare management software for clinical providers.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function HealthcareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
