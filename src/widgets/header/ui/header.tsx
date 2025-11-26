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
    <div className="fixed top-0 left-0 right-0 px-4 sm:px-8 lg:px-16 pt-4 sm:pt-6 z-[2147483647]">
      <div className="w-full">
        {/* Header Bar */}
        <div className="bg-[rgba(249,243,212,0.7)] backdrop-blur-[10px] rounded-xl px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between relative gap-2 sm:gap-4 lg:gap-[42px]">
          {/* Logo - always on the left */}
          <div className="flex items-center flex-shrink-0">
            <Logo href="/" className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto" />
          </div>

          {/* Navigation - rooms links */}
          <div className="hidden lg:flex items-center flex-shrink-0" style={{ gap: '48px' }}>
            <Link href="/rooms/fin" className="text-black text-[20px] font-normal leading-[1.2] hover:opacity-70 transition-opacity">
              Финский зал
            </Link>
            <Link href="/rooms/fin-small" className="text-black text-[20px] font-normal leading-[1.2] hover:opacity-70 transition-opacity">
              Зал «Оазис»
            </Link>
            <Link href="/rooms/turkey" className="text-black text-[20px] font-normal leading-[1.2] hover:opacity-70 transition-opacity">
              Турецкий зал
            </Link>
            <Link href="/rooms/apps" className="text-black text-[20px] font-normal leading-[1.2] hover:opacity-70 transition-opacity">
              Аппартаменты
            </Link>
            <Link href="/rooms/new-hall" className="text-black text-[20px] font-normal leading-[1.2] hover:opacity-70 transition-opacity">
              Новый зал
            </Link>
          </div>

          {/* Right side: Social icons and Book button */}
          <div className="hidden lg:flex items-center flex-shrink-0" style={{ gap: '48px' }}>
            <div className="flex items-center" style={{ gap: '24px' }}>
              <a href="https://wa.me/79089086755" aria-label="WhatsApp" className="inline-flex p-2 rounded-lg hover:bg-[rgba(0,0,0,0.1)] transition-colors">
                <WhatsappIcon className="w-5 h-5 text-black" />
              </a>
              <a href="https://t.me/79089086755" aria-label="Telegram" className="inline-flex p-2 rounded-lg hover:bg-[rgba(0,0,0,0.1)] transition-colors">
                <TelegramIcon className="w-5 h-5 text-black" />
              </a>
            </div>
            <a href={bookingPhone} className="bg-[#F8F3D7] text-black rounded-xl px-4 sm:px-6 py-2 sm:py-3 text-[20px] font-medium uppercase tracking-[0.02em] w-auto sm:w-[156px] text-center hover:opacity-90 transition-opacity whitespace-nowrap">
              Забронировать
            </a>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden flex-shrink-0 ml-auto">
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
}