"use client";
import Link from 'next/link';
import { Logo } from '@/shared/ui/logo';
import { WhatsappIcon, TelegramIcon, PhoneIcon } from '@/shared/ui/icons';
import { MobileMenu } from './mobile-menu';

interface HeaderProps {
  bookingPhone?: string;
}

/**
 * Header
 * Main header component with logo, social icons, booking button and mobile menu
 */
export function Header({ bookingPhone = 'tel:+79089086755' }: HeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0" style={{ padding: '24px 64px', zIndex: 2147483647 }}>
      <div className="w-full">
        {/* Header Bar */}
        <div className="bg-[rgba(50,59,18,0.7)] backdrop-blur-[10px] rounded-xl px-6 py-3 flex items-center justify-between relative" style={{ gap: '42px' }}>
          {/* Logo - always on the left */}
          <div className="flex items-center flex-shrink-0">
            <Logo href="/" className="w-40 min-[1140px]:w-48 h-auto" />
          </div>

          {/* Navigation - rooms links */}
          <div className="hidden min-[1140px]:flex items-center flex-shrink-0" style={{ gap: '48px' }}>
            <Link href="/rooms/fin" className="text-[#F8F3D7] text-[14px] font-normal leading-[1.2] hover:text-[color:var(--accent)] transition-colors">
              Финский зал
            </Link>
            <Link href="/rooms/fin-small" className="text-[#F8F3D7] text-[14px] font-normal leading-[1.2] hover:text-[color:var(--accent)] transition-colors">
              Зал «Оазис»
            </Link>
            <Link href="/rooms/turkey" className="text-[#F8F3D7] text-[14px] font-normal leading-[1.2] hover:text-[color:var(--accent)] transition-colors">
              Турецкий зал
            </Link>
            <Link href="/rooms/apps" className="text-[#F8F3D7] text-[14px] font-normal leading-[1.2] hover:text-[color:var(--accent)] transition-colors">
              Аппартаменты
            </Link>
            <Link href="/rooms/new-hall" className="text-[#F8F3D7] text-[14px] font-normal leading-[1.2] hover:text-[color:var(--accent)] transition-colors">
              Новый зал
            </Link>
          </div>

          {/* Right side: Social icons and Book button */}
          <div className="hidden min-[1140px]:flex items-center flex-shrink-0" style={{ gap: '48px' }}>
            <div className="flex items-center" style={{ gap: '24px' }}>
              <a href="https://wa.me/79089086755" aria-label="WhatsApp" className="inline-flex p-2 rounded-lg hover:bg-[rgba(248,243,215,0.2)] transition-colors">
                <WhatsappIcon className="w-5 h-5 text-[#F8F3D7]" />
              </a>
              <a href="https://t.me/79089086755" aria-label="Telegram" className="inline-flex p-2 rounded-lg hover:bg-[rgba(248,243,215,0.2)] transition-colors">
                <TelegramIcon className="w-5 h-5 text-[#F8F3D7]" />
              </a>
            </div>
            <a href={bookingPhone} className="bg-[#F8F3D7] text-[#323B12] rounded-xl px-6 py-3 text-[14px] font-medium uppercase tracking-[0.02em] w-[156px] text-center hover:opacity-90 transition-opacity">
              Забронировать
            </a>
          </div>

          {/* Mobile menu */}
          <div className="min-[1140px]:hidden flex-shrink-0 ml-auto">
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
}