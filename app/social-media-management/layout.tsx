import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Management Cameroon | Nexora Empire',
  description: 'Nexora Empire provides professional social media management in Cameroon. We build custom campaigns, plan organic content, and manage ads from Buea.',
  keywords: 'Social Media Management Cameroon, Social Media Marketing Cameroon, Content Strategy Cameroon, Business Social Media Management',
  alternates: {
    canonical: 'https://www.nexoraempire.com/social-media-management',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/social-media-management',
    title: 'Social Media Management Cameroon | Nexora Empire',
    description: 'Nexora Empire provides professional social media management in Cameroon. We build custom campaigns, plan organic content, and manage ads from Buea.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'Social Media Management Cameroon - Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Management Cameroon | Nexora Empire',
    description: 'Nexora Empire provides professional social media management in Cameroon. We build custom campaigns, plan organic content, and manage ads from Buea.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function SocialMediaManagementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
