import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Web Development Company in Cameroon | Website Developer Buea',
  description: 'Looking for the best web development company in Cameroon? We build high-performance React & Next.js web applications, e-commerce stores, and custom SaaS systems.',
  keywords: 'web development company, website development services, custom web applications, full-stack development, SaaS development, enterprise web development, Next.js agency, React developers, best website developer in Buea, web development agency',
  alternates: {
    canonical: 'https://nexoraempire.com/web-dev',
  },
};

export default function WebDevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
