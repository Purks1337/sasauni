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
    <>
      {/* Header Bar */}
      <div className="bg-black/30 backdrop-blur-md border border-[#2E2D1F] rounded-full px-[24px] py-3 flex items-center justify-between gap-4 relative z-20">
        {/* Left side: Social/phone icons on desktop, logo on mobile */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3">
            {/* <a href="https://wa.me/79089086755" aria-label="WhatsApp" className="inline-flex p-2 rounded-lg hover:bg-[#EBE9C6]/10 transition-colors">
              <WhatsappIcon className="w-5 h-5 text-[#EBE9C6]" />
            </a> */}
            <a href="https://t.me/79089086755" aria-label="Telegram" className="inline-flex p-2 rounded-lg hover:bg-[#EBE9C6]/10 transition-colors">
              <TelegramIcon className="w-5 h-5 text-[#EBE9C6]" />
            </a>
            <a href="tel:+79089086755" aria-label="Телефон" className="inline-flex p-2 rounded-lg hover:bg-[#EBE9C6]/10 transition-colors">
              <PhoneIcon className="w-5 h-5 text-[#EBE9C6]" />
            </a>
          </div>
          <div className="sm:hidden">
            <Logo className="w-40 h-auto" />
          </div>
        </div>

        {/* Center: Desktop logo */}
        <div className="hidden sm:flex flex-col items-center">
          <Logo className="w-48 h-auto" />
        </div>

        {/* Right side: Book button on desktop, burger on mobile */}
        <div className="flex items-center gap-3">
          <a href={bookingPhone} className="border border-[#EBE9C6]/50 rounded-xl px-6 py-3 text-[#EBE9C6] text-sm font-system hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors hidden sm:block">
            Забронировать
          </a>
          <MobileMenu />
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="hidden sm:flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-24">
        <Link href="/rooms/fin" className="text-[#EBE9C6] text-xl font-normal hover:text-[color:var(--accent)] transition-colors" style={{textShadow: '2px 2px 2px rgba(0,0,0,0.6)'}}>
          Финский зал
        </Link>
        <Link href="/rooms/fin-small" className="text-[#EBE9C6] text-xl font-normal hover:text-[color:var(--accent)] transition-colors" style={{textShadow: '2px 2px 2px rgba(0,0,0,0.6)'}}>
          Малый финский зал
        </Link>
        <Link href="/rooms/turkey" className="text-[#EBE9C6] text-xl font-normal hover:text-[color:var(--accent)] transition-colors" style={{textShadow: '2px 2px 2px rgba(0,0,0,0.6)'}}>
          Турецкий зал
        </Link>
        <Link href="/rooms/apps" className="text-[#EBE9C6] text-xl font-normal hover:text-[color:var(--accent)] transition-colors" style={{textShadow: '2px 2px 2px rgba(0,0,0,0.6)'}}>
          Аппартаменты
        </Link>
      </div>
    </>
  );
}

