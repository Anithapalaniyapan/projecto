import type { Metadata } from 'next';
import ClientProviders from '@/components/ClientProviders';

export const metadata: Metadata = {
  title: 'latrix insider',
  description: 'From corporate gatherings to grand celebrations, we bring your vision to life with flawless planning, stunning designs, and smooth execution.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Clash Display from Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}

