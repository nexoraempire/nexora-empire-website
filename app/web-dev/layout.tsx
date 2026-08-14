import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design & Development Services | Nexora Empire',
  description: 'Nexora Empire offers professional web design and development services. We build responsive business website development, e-commerce stores, and custom web applications.',
  keywords: 'Web Design and Development Services, Website Development Services, Custom Website Development, Web Development Services, Web Design Services, Business Website Development, Web Application Development, Web Design Services for Small Business',
  alternates: {
    canonical: 'https://www.nexoraempire.com/web-dev',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/web-dev',
    title: 'Web Design & Development Services | Nexora Empire',
    description: 'Nexora Empire offers professional web design and development services. We build responsive business website development, e-commerce stores, and custom web applications.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'Web Design & Development Services - Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & Development Services | Nexora Empire',
    description: 'Nexora Empire offers professional web design and development services. We build responsive business website development, e-commerce stores, and custom web applications.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function WebDevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
