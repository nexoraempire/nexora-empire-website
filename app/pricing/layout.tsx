import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development & SEO Pricing Cameroon | Nexora Empire',
  description: 'Affordable pricing plans for custom website development, mobile application engineering, professional SEO packages, and visual brand identity designs in Cameroon.',
  keywords: 'pricing, software development cost, web development plans, mobile app pricing, branding budget, SEO services cost, app cost Cameroon',
  alternates: {
    canonical: 'https://nexoraempire.com/pricing',
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
