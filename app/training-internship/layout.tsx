import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Development Training Cameroon | Nexora Empire',
  description: 'Join our software development training and internship program in Buea, Cameroon. Learn React, Next.js, and modern tech skills.',
  keywords: 'software development training Cameroon, coding internship Buea, learn react Buea, web development classes Cameroon',
  alternates: {
    canonical: 'https://www.nexoraempire.com/training-internship',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/training-internship',
    title: 'Software Development Training Cameroon | Nexora Empire',
    description: 'Join our software development training and internship program in Buea, Cameroon. Learn React, Next.js, and modern tech skills.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'Software Training Cameroon Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Training Cameroon | Nexora Empire',
    description: 'Join our software development training and internship program in Buea, Cameroon. Learn React, Next.js, and modern tech skills.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function TrainingInternshipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
