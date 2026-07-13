import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Nexora Empire | Professional Software Company in Cameroon',
  description: 'Learn about Nexora Empire, a professional software company in Cameroon and the best software engineering company in Buea. Meet our expert developers and SEO growth specialists.',
  keywords: 'software company, technology partner, software engineers, digital innovation, Nexora crew, technology consulting, digital transformation, software engineering company Buea, tech company Buea, IT company Buea',
  alternates: {
    canonical: 'https://nexoraempire.com/about-us',
  },
};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
