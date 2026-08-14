import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education Software Development Solutions | Nexora Empire',
  description: 'Nexora Empire builds interactive learning management systems (LMS), student management databases, and custom e-learning platforms.',
  keywords: 'education software solutions development, education software development, education software solutions, education management software, educational software development, e-learning platform development, learning management systems, education technology solutions, custom education software',
  alternates: {
    canonical: 'https://www.nexoraempire.com/industries/education',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/industries/education',
    title: 'Education Software Development Solutions | Nexora Empire',
    description: 'Nexora Empire builds interactive learning management systems (LMS), student management databases, and custom e-learning platforms.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'Education Software Development Solutions - Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Education Software Development Solutions | Nexora Empire',
    description: 'Nexora Empire builds interactive learning management systems (LMS), student management databases, and custom e-learning platforms.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
