import type { Metadata } from 'next';
import './globals.css';
import { ScrollProvider } from './ScrollProvider';
import { AppShell } from './AppShell';

export const metadata: Metadata = {
  title: 'Nexora Empire | Enterprise Software Development & Digital Solutions Agency',
  description: 'Nexora Empire is a premier software development and SEO company in Cameroon, building enterprise websites, high-performance mobile apps, AI-powered solutions, branding, and digital products that help businesses attract customers, increase sales, dominate search rankings, and grow worldwide.',
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
    title: 'Nexora Empire | Enterprise Software Development & Digital Solutions Agency',
    description: 'Nexora Empire is a premier software development and SEO company in Cameroon, building enterprise websites, high-performance mobile apps, AI-powered solutions, branding, and digital products that help businesses attract customers, increase sales, dominate search rankings, and grow worldwide.',
    siteName: 'Nexora Empire',
    images: [
      {
        url: 'https://nexoraempire.com/assets/images/nexora-empire-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Nexora Empire Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexora Empire | Enterprise Software Development & Digital Solutions Agency',
    description: 'Nexora Empire is a premier software development and SEO company in Cameroon, building enterprise websites, high-performance mobile apps, AI-powered solutions, branding, and digital products that help businesses attract customers, increase sales, dominate search rankings, and grow worldwide.',
    images: ['https://nexoraempire.com/assets/images/nexora-empire-logo.webp'],
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
