import type { Metadata } from 'next';
import './globals.css';
import { ScrollProvider } from './ScrollProvider';
import { AppShell } from './AppShell';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nexoraempire.com'),
  title: 'Software Development Company Cameroon | Nexora Empire',
  description: 'Nexora Empire is a software development company in Cameroon. We build custom software solutions, enterprise platforms, and digital applications from Buea.',
  keywords: 'software development company Cameroon, custom software development Cameroon, software solutions Cameroon, technology company Cameroon',
  alternates: {
    canonical: 'https://www.nexoraempire.com',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
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
    url: 'https://www.nexoraempire.com',
    title: 'Software Development Company Cameroon | Nexora Empire',
    description: 'Nexora Empire is a software development company in Cameroon. We build custom software solutions, enterprise platforms, and digital applications from Buea.',
    siteName: 'Nexora Empire',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Nexora Empire Cameroon Software Development Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Company Cameroon | Nexora Empire',
    description: 'Nexora Empire is a software development company in Cameroon. We build custom software solutions, enterprise platforms, and digital applications from Buea.',
    images: ['https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp'],
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
