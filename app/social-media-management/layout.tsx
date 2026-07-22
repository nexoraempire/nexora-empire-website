import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Management Cameroon | Nexora Empire',
  description: 'Social media management services for businesses in Cameroon. Build engagement and grow your digital audience with Nexora Empire in Buea.',
  keywords: 'social media management Cameroon, social media agency Buea, digital marketing Cameroon, content creation Buea',
  alternates: {
    canonical: 'https://www.nexoraempire.com/social-media-management',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/social-media-management',
    title: 'Social Media Management Cameroon | Nexora Empire',
    description: 'Social media management services for businesses in Cameroon. Build engagement and grow your digital audience with Nexora Empire in Buea.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'Social Media Services Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Management Cameroon | Nexora Empire',
    description: 'Social media management services for businesses in Cameroon. Build engagement and grow your digital audience with Nexora Empire in Buea.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function SocialMediaManagementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
