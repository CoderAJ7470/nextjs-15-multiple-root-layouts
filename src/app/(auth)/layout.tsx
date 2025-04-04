import type { Metadata } from 'next';
import '../../app/globals.css';

export const metadata: Metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        {children}
        <footer
          style={{
            backgroundColor: 'ghostwhite',
            padding: '1rem',
          }}
        >
          Footer
        </footer>
      </body>
    </html>
  );
}
