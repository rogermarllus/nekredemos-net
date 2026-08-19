import type { Metadata } from 'next';
import { SiteNavigation } from '@/components/site-navigation';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nekredemos.net',
  description: 'Plataforma web oficial do Nekredemos RPG.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <SiteNavigation />
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
