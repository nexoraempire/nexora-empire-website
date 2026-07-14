import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nexora Empire | Best Software Development & SEO Company in Cameroon',
  description: 'Hire the best website developers, SEO experts, and custom software company in Cameroon. Reach out to our Buea Town office or schedule a call.',
  keywords: 'contact Nexora Empire, hire software developers, software company office hours, Buea Town Cameroon software, schedule consultation, phone number Nexora, best software company in Buea, SEO company Buea, digital marketing agency Buea',
  alternates: {
    canonical: 'https://www.nexoraempire.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
