"use client";
import Link from 'next/link';
import { Logo } from '@/shared/ui/logo';
import { WhatsappIcon, TelegramIcon } from '@/shared/ui/icons';
import { MobileMenu } from './mobile-menu';

interface HeaderProps {
  bookingPhone?: string;
}

/**
 * Header
 * Updated adaptation logic:
 * - Mobile/Tablet (<1024px): Hamburger menu.
 * - Laptop (1024px - 1280px): Compact desktop view (smaller fonts/gaps).
 * - Large Desktop (>1280px): Strict Figma layout (original sizes).
 */
export function Header({ bookingPhone = 'tel:+79089086755' }: HeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-[2147483647] w-full flex justify-center pointer-events-none">
      {/* Container: Full width up to 1468px */}
      <div className="w-full max-w-[1468px] px-2 sm:px-8 lg:px-8 xl:px-16 pt-4 sm:pt-6 pointer-events-auto">
        
        {/* Glass Bar */}
        {/* Adaptive padding and height */}
        <div className="w-full bg-[rgba(249,243,212,0.7)] backdrop-blur-[5px] rounded-xl px-4 lg:px-6 py-2 lg:py-3 flex items-center justify-between gap-2 lg:gap-4 xl:gap-[42px]">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* Adaptive logo size */}
            <div className="w-[60px] h-[35px] lg:w-[75px] lg:h-[44px]">
               <Logo href="/" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Navigation (Desktop) */}
          {/* Hidden on mobile, Compact on LG, Full on XL */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            <Link href="/rooms/fin" className="text-black text-[15px] xl:text-[20px] font-medium leading-[1.2] hover:opacity-70 transition-opacity whitespace-nowrap">
              Финский зал
            </Link>
            <Link href="/rooms/fin-small" className="text-black text-[15px] xl:text-[20px] font-medium leading-[1.2] hover:opacity-70 transition-opacity whitespace-nowrap">
              Зал «Оазис»
            </Link>
            <Link href="/rooms/turkey" className="text-black text-[15px] xl:text-[20px] font-medium leading-[1.2] hover:opacity-70 transition-opacity whitespace-nowrap">
              Турецкий зал
            </Link>
            <Link href="/rooms/apps" className="text-black text-[15px] xl:text-[20px] font-medium leading-[1.2] hover:opacity-70 transition-opacity whitespace-nowrap">
              Аппартаменты
            </Link>
            <Link href="/rooms/new-hall" className="text-black text-[15px] xl:text-[20px] font-medium leading-[1.2] hover:opacity-70 transition-opacity whitespace-nowrap">
              Новый зал
            </Link>
          </nav>

          {/* Right Side (Socials + Button) */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-[48px] flex-shrink-0">
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 xl:gap-8">
              <a 
                href="https://t.me/79089086755" 
                aria-label="Telegram" 
                className="block hover:opacity-70 transition-opacity"
              >
                <TelegramIcon className="w-[24px] h-[24px] xl:w-[28px] xl:h-[28px] text-black" />
              </a>
              <a 
                href="https://wa.me/79089086755" 
                aria-label="WhatsApp" 
                className="block hover:opacity-70 transition-opacity"
              >
                <WhatsappIcon className="w-[24px] h-[24px] xl:w-[28px] xl:h-[28px] text-black" />
              </a>
            </div>

            {/* Booking Button */}
            {/* Compact padding/text on LG, Full on XL */}
            <a 
              href={bookingPhone} 
              className="flex justify-center items-center bg-[#F8F3D7] text-[#323B12] rounded-md px-4 py-2 xl:px-6 xl:py-3 hover:opacity-90 transition-all hover:bg-[#f8e99e] hover:scale-102"
            >
              <span className="text-[14px] xl:text-[20px] font-medium leading-[1.2] uppercase whitespace-nowrap">
                Забронировать
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle (< 1024px) */}
          <div className="lg:hidden flex-shrink-0">
            <MobileMenu />
          </div>

        </div>
      </div>
    </div>
  );
}