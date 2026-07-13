import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Graphic Design & Logo Branding Agency Cameroon',
  description: 'Establish your brand authority. Professional corporate visual identity, custom logo design systems, brochures, and brand styling guidelines in Cameroon.',
  keywords: 'branding agency, graphic design agency, visual identity, corporate brand design, logo creator, creative director, style guidelines, typography design, branding agency Buea, graphic design company Buea',
  alternates: {
    canonical: 'https://nexoraempire.com/branding-design',
  },
};

export default function BrandingDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
