import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best SEO Agency in Cameroon | Professional SEO Services Buea',
  description: 'Rank #1 on Google. Nexora Empire is the best SEO agency in Cameroon. We offer expert technical audits, semantic keyword mapping, and local SEO services.',
  keywords: 'SEO agency, technical SEO company, organic growth marketing, search engine optimization, local SEO, rank on Google, schema structured data, Google search specialist, SEO company Buea, best SEO company Cameroon',
  alternates: {
    canonical: 'https://nexoraempire.com/seo-growth',
  },
};

export default function SEOGrowthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
