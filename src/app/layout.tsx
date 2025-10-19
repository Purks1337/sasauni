import type { Metadata } from 'next';
import { Alegreya_Sans } from 'next/font/google';
import '../styles/globals.css';

const alegreyaSans = Alegreya_Sans({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-alegreya-sans'
});

export const metadata: Metadata = {
  title: '1000 и 1 ночь - Банный комплекс',
  description: 'Идеальный выбор для ценителей финской парной. Большой Финский зал с бассейном, бильярдом и караоке.',
  keywords: ['сауна', 'баня', 'финская парная', 'бассейн', 'Екатеринбург', 'отдых'],
  authors: [{ name: '1000 и 1 ночь' }],
  viewport: 'width=device-width, initial-scale=1',
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
