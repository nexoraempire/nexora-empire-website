import type { Metadata } from 'next';
import './globals.css';
import { ScrollProvider } from './ScrollProvider';
import { AppShell } from './AppShell';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nexoraempire.com'),
  title: 'Custom Software Development Services | Nexora Empire',
  description: 'Nexora Empire provides custom software development services and business software solutions. Based in Buea, Cameroon, we build enterprise platforms, web applications, and mobile apps for local and global clients.',
  keywords: 'custom software development services, software development company, software development agency, custom software solutions, enterprise software development, business software solutions, Nexora Empire, Cameroon, Buea',
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
    title: 'Custom Software Development Services | Nexora Empire',
    description: 'Nexora Empire provides custom software development services and business software solutions. Based in Buea, Cameroon, we build enterprise platforms, web applications, and mobile apps for local and global clients.',
    siteName: 'Nexora Empire',
    images: [
      {
        url: 'https://www.nexoraempire.com/assets/images/nexora-empire-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Nexora Empire Custom Software Development Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development Services | Nexora Empire',
    description: 'Nexora Empire provides custom software development services and business software solutions. Based in Buea, Cameroon, we build enterprise platforms, web applications, and mobile apps for local and global clients.',
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
