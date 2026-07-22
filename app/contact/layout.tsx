import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Nexora Empire | Buea Cameroon',
  description: 'Get in touch with Nexora Empire in Buea, Cameroon. Let\'s discuss your custom web development, mobile apps, branding, or SEO requirements.',
  keywords: 'contact Nexora Empire, software development office Buea, contact web developers Cameroon, local SEO consultation Buea',
  alternates: {
    canonical: 'https://www.nexoraempire.com/contact',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/contact',
    title: 'Contact Nexora Empire | Buea Cameroon',
    description: 'Get in touch with Nexora Empire in Buea, Cameroon. Let\'s discuss your custom web development, mobile apps, branding, or SEO requirements.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'Contact Nexora Empire Cameroon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Nexora Empire | Buea Cameroon',
    description: 'Get in touch with Nexora Empire in Buea, Cameroon. Let\'s discuss your custom web development, mobile apps, branding, or SEO requirements.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
