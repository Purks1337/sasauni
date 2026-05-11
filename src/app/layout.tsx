import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Footer } from '@/widgets/footer';
import { YandexMetrika } from '@/shared/ui/yandex-metrika';
import { Suspense } from 'react'; // <--- 1. ДОБАВИТЬ ЭТОТ ИМПОРТ
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

// Literature Decor font
const literatureDecor = {
  variable: '--font-literature-decor',
  style: { fontFamily: 'var(--font-literature-decor)' },
};

export const metadata: Metadata = {
  // Базовый URL (техническое имя)
  metadataBase: new URL('https://xn--1001-35dg7dxb.site'),

  // 1. Каноническая ссылка (КРИТИЧНО ВАЖНО)
  // Это говорит Яндексу: "Именно этот домен - главный, игнорируй старые верселы и гитхабы"
  alternates: {
    canonical: '/',
  },

  title: '1001 ночь - Оздоровительный центр',
  description: 'Оздоровительный центр в Екатеринбурге. Уникальные залы для отдыха и релаксации: Финский, Турецкий, Оазис.',
  keywords: ['оздоровительный центр', 'сауна', 'баня', 'финская парная', 'бассейн', 'Екатеринбург', 'отдых', '1001 ночь'],
  authors: [{ name: '1001 ночь' }],

  // 2. Настройки для соцсетей (чтобы ссылка в WhatsApp/Telegram была красивой)
  openGraph: {
    title: '1001 ночь - Оздоровительный центр',
    description: 'Отдых для души и тела в атмосфере восточной сказки. Екатеринбург, ул. Готвальда 12а.',
    url: 'https://xn--1001-35dg7dxb.site',
    siteName: '1001 ночь',
    locale: 'ru_RU',
    type: 'website',
  },

  // 3. Явное разрешение роботам
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // 4. Сюда вставите коды подтверждения (когда получите их в вебмастерах)
  verification: {
    yandex: 'dc5bc3699d87ca85', 
    google: '9UzmdGIozcm_d9YwmfkmernRRX6Tc78NhCLlc8x1sec',
  },
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
        
        {/* 2. ОБЕРНУТЬ МЕТРИКУ В SUSPENSE ВОТ ТАК: */}
        <Suspense fallback={null}>
          <YandexMetrika />
        </Suspense>

        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}