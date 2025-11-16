import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Footer } from '@/widgets/footer';
import '../styles/globals.css';

const alegreyaSans = localFont({
  src: [
    {
      path: '../../public/fonts/AlegreyaSans-Regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-alegreya-sans',
  display: 'swap',
});

// Literature Decor font - using CSS @font-face due to font file compatibility issues
const literatureDecor = {
  variable: '--font-literature-decor',
  style: { fontFamily: 'var(--font-literature-decor)' },
};

export const metadata: Metadata = {
  title: '1001 ночь - Оздоровительный центр',
  description: 'Оздоровительный центр в Екатеринбурге. Уникальные залы для отдыха и релаксации.',
  keywords: ['оздоровительный центр', 'сауна', 'баня', 'финская парная', 'бассейн', 'Екатеринбург', 'отдых'],
  authors: [{ name: '1001 ночь' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${alegreyaSans.variable} ${literatureDecor.variable} antialiased font-sans flex flex-col min-h-screen`}>
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}