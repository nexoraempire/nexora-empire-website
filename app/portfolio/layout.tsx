import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Development & SEO Portfolio Cameroon | Nexora Empire',
  description: 'Explore our enterprise software engineering, responsive website development, custom mobile apps, and successful SEO campaigns across Cameroon and globally.',
  keywords: 'portfolio, case studies, software development portfolio, website showcase, mobile app design, brand identities, custom solutions, React developers, web portfolio',
  alternates: {
    canonical: 'https://www.nexoraempire.com/portfolio',
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
