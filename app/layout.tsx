import type { Metadata } from 'next';
import './globals.css';
import { ScrollProvider } from './ScrollProvider';
import { AppShell } from './AppShell';

export const metadata: Metadata = {
  title: 'Nexora Empire | Best Software & SEO Company in Cameroon',
  description: 'Nexora Empire is one of the best software and SEO companies in Cameroon, helping businesses attract customers, increase sales, dominate search rankings, and strengthen their online presence with enterprise websites, high-performance mobile apps, AI solutions, branding, and digital marketing.',
  keywords: 'software development company, digital agency, custom software development, mobile app development, enterprise web application, branding agency, AI automation, software company, tech consulting',
  icons: {
    icon: '/assets/images/nexora-empire-logo.webp',
    shortcut: '/assets/images/nexora-empire-logo.webp',
    apple: '/assets/images/nexora-empire-logo.webp',
  },
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
    title: 'Nexora Empire | Best Software & SEO Company in Cameroon',
    description: 'Nexora Empire is one of the best software and SEO companies in Cameroon, helping businesses attract customers, increase sales, dominate search rankings, and strengthen their online presence with enterprise websites, high-performance mobile apps, AI solutions, branding, and digital marketing.',
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
    title: 'Nexora Empire | Best Software & SEO Company in Cameroon',
    description: 'Nexora Empire is one of the best software and SEO companies in Cameroon, helping businesses attract customers, increase sales, dominate search rankings, and strengthen their online presence with enterprise websites, high-performance mobile apps, AI solutions, branding, and digital marketing.',
    images: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap';
                document.head.appendChild(link);
              })();
            `
          }}
        />
        <noscript>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        </noscript>
      </head>
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
