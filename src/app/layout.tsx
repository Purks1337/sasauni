import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sasauni Next.js Template',
  description: 'A modern Next.js template with React 19, TypeScript, and Tailwind CSS v4',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Template'],
  authors: [{ name: 'Sasauni Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full antialiased`}>
        <div className="min-h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
