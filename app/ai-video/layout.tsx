import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Video Production & Custom AI Automation Agency Cameroon',
  description: 'Transform your business with cutting-edge AI video production, realistic custom digital avatars, synthetic marketing campaigns, and AI integration.',
  keywords: 'AI video production, generative AI video, synthetic media company, interactive video ads, AI voice generation, digital marketing, AI automation company, AI video production Buea, AI video production Cameroon',
  alternates: {
    canonical: 'https://nexoraempire.com/ai-video',
  },
};

export default function AIVideoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
