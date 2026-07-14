import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ScrollProvider } from './ScrollProvider';
import { AppShell } from './AppShell';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nexora Empire | Enterprise Software Development & Digital Solutions Agency',
  description: 'Nexora Empire is a premier software development company and digital agency crafting enterprise websites, high-performance mobile apps, custom AI automation, and premium brand designs.',
  keywords: 'software development company, digital agency, custom software development, mobile app development, enterprise web application, branding agency, AI automation, software company, tech consulting',
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Nexora Empire' }],
  creator: 'Nexora Empire',
  publisher: 'Nexora Empire',
  openGraph: {
    type: 'website',
    url: 'https://nexoraempire.com',
    title: 'Nexora Empire | Enterprise Software Development & Digital Solutions Agency',
    description: 'Nexora Empire is a premier software development company and digital agency crafting enterprise websites, high-performance mobile apps, custom AI automation, and premium brand designs.',
    siteName: 'Nexora Empire',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Nexora Empire Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexora Empire | Enterprise Software Development & Digital Solutions Agency',
    description: 'Nexora Empire is a premier software development company and digital agency crafting enterprise websites, high-performance mobile apps, custom AI automation, and premium brand designs.',
    images: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <ScrollProvider>
          <AppShell>
            {children}
          </AppShell>
        </ScrollProvider>
      </body>
    </html>
  );
}
