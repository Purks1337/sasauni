import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
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
  display: 'swap', // Рекомендуется для локальных шрифтов
});


export const metadata: Metadata = {
  title: '1000 и 1 ночь - Банный комплекс',
  description: 'Идеальный выбор для ценителей финской парной. Большой Финский зал с бассейном, бильярдом и караоке.',
  keywords: ['сауна', 'баня', 'финская парная', 'бассейн', 'Екатеринбург', 'отдых'],
  authors: [{ name: '1000 и 1 ночь' }],
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
    <html lang="ru" className="h-full">
      <body className={`${alegreyaSans.variable} h-full antialiased font-sans`}>
        <div className="min-h-full">
          {children}
        </div>
      </body>
    </html>
  );
}