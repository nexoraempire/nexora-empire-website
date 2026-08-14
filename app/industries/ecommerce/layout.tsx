import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom E-commerce Software Development | Nexora Empire',
  description: 'Nexora Empire engineers fast, customized storefronts, multi-vendor marketplaces, and advanced checkout automation platforms.',
  keywords: 'ecommerce software solution development, ecommerce software development, custom ecommerce software, ecommerce platform development, ecommerce solutions, online marketplace development, ecommerce web development, custom online store development, ecommerce management systems',
  alternates: {
    canonical: 'https://www.nexoraempire.com/industries/ecommerce',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexoraempire.com/industries/ecommerce',
    title: 'Custom E-commerce Software Development | Nexora Empire',
    description: 'Nexora Empire engineers fast, customized storefronts, multi-vendor marketplaces, and advanced checkout automation platforms.',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        alt: 'Custom E-commerce Software Development - Nexora Empire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom E-commerce Software Development | Nexora Empire',
    description: 'Nexora Empire engineers fast, customized storefronts, multi-vendor marketplaces, and advanced checkout automation platforms.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
  },
};

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
