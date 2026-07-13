import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Management & Digital Marketing Company Cameroon',
  description: 'Sustain organic customer growth. We handle professional social media management, brand campaigns, content calendars, and digital marketing.',
  keywords: 'social media management, social media agency, brand growth online, content calendar creation, organic reach campaigns, community management, digital marketing agency Buea, digital marketing agency Cameroon',
  alternates: {
    canonical: 'https://nexoraempire.com/social-media-management',
  },
};

export default function SocialMediaManagementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
