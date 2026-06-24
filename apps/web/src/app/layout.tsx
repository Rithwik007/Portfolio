import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Rithwik Racharla — Full Stack Developer',
  description: 'Portfolio of Rithwik Racharla — Full Stack Developer, Java Engineer, Agentic AI Enthusiast. CS Student at VNR VJIET, Hyderabad.',
  keywords: ['Rithwik Racharla', 'Full Stack Developer', 'Java', 'React', 'Node.js', 'Portfolio', 'AI'],
  authors: [{ name: 'Rithwik Racharla' }],
  creator: 'Rithwik Racharla',
  publisher: 'Rithwik Racharla',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rithwikracharla.dev',
    title: 'Rithwik Racharla — Full Stack Developer',
    description: 'Portfolio of Rithwik Racharla — Full Stack Developer, Java Engineer, Agentic AI Enthusiast.',
    siteName: 'Rithwik Racharla Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rithwik Racharla — Full Stack Developer',
    description: 'Portfolio of Rithwik Racharla — Full Stack Developer, Java Engineer, Agentic AI Enthusiast.',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: '#030305',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}