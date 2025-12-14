"use client";
import Link from 'next/link';
import { Logo } from '@/shared/ui/logo';
import { WhatsappIcon, TelegramIcon, TwoGisIcon, PhoneIcon } from '@/shared/ui/icons';
import { MobileMenu } from './mobile-menu';
import { useEffect, useState } from 'react';
import { cn } from '@/shared/lib/utils';

interface HeaderProps {
  bookingPhone?: string;
  variant?: 'home' | 'default';
}

/**
 * Header
 * Updated logic:
 * - variant="home": Starts transparent with #FFFFE8 text, becomes solid on scroll.
 * - variant="default": Always solid (for inner pages).
 */
export function Header({ 
  bookingPhone = 'tel:+79089086755', 
  variant = 'default' 
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle state based on scroll position (threshold 20px)
      setIsScrolled(window.scrollY > 20);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we should show the transparent styling
  const isTransparent = variant === 'home' && !isScrolled;

  // Dynamic classes based on state
  const containerClasses = isTransparent
    ? 'bg-transparent border-transparent'
    : 'bg-[rgba(249,243,212,0.7)] backdrop-blur-[5px] border-transparent';

  const textClasses = isTransparent 
    ? 'text-[#FFFFE8]' 
    : 'text-[#1A1E08]';

  const iconClasses = isTransparent
    ? 'text-[#FFFFE8]'
    : 'text-[#1A1E08]';

  return (
    <div className="fixed top-0 left-0 right-0 z-[2147483647] w-full flex justify-center pointer-events-none">
      {/* Container: Full width up to 1468px */}
      <div className="w-full max-w-[1468px] px-2 sm:px-8 lg:px-8 xl:px-16 pt-4 sm:pt-6 pointer-events-auto">
        
        {/* Glass Bar / Navigation Bar */}
        <div 
          className={cn(
            "w-full rounded-xl px-4 lg:px-6 py-2 lg:py-3 flex items-center justify-between gap-2 lg:gap-4 xl:gap-[42px] transition-all duration-300 ease-in-out",
            containerClasses
          )}
        >
          
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* Adaptive logo size */}
            <div className="w-[60px] h-[35px] lg:w-[75px] lg:h-[44px]">
               {/* Applied textClasses here to control Logo color via currentColor */}
               <Logo href="/" className={cn("w-full h-full transition-colors duration-300", textClasses)} />
            </div>
          </div>

          {/* Navigation (Desktop) */}
          <nav className={cn("hidden lg:flex items-center gap-4 xl:gap-8 transition-colors duration-300", textClasses)}>
            <Link href="/rooms/fin" className="text-[15px] xl:text-[20px] font-medium leading-[1.2] hover:opacity-70 transition-opacity whitespace-nowrap">
              Финский зал
            </Link>
            <Link href="/rooms/fin-small" className="text-[15px] xl:text-[20px] font-medium leading-[1.2] hover:opacity-70 transition-opacity whitespace-nowrap">
              Зал «Оазис»
            </Link>
            <Link href="/rooms/turkey" className="text-[15px] xl:text-[20px] font-medium leading-[1.2] hover:opacity-70 transition-opacity whitespace-nowrap">
              Турецкий зал
            </Link>
            <Link href="/rooms/apps" className="text-[15px] xl:text-[20px] font-medium leading-[1.2] hover:opacity-70 transition-opacity whitespace-nowrap">
              Аппартаменты
            </Link>
            <Link href="/rooms/new-hall" className="text-[15px] xl:text-[20px] font-medium leading-[1.2] hover:opacity-70 transition-opacity whitespace-nowrap">
              Новый зал
            </Link>
          </nav>

          {/* Right Side (Socials + Button) */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-[48px] flex-shrink-0">
            
            {/* Social Icons */}
            <div className={cn("flex items-center gap-3 xl:gap-8 transition-colors duration-300", iconClasses)}>
              <a 
                href="https://t.me/79089086755" 
                aria-label="Telegram" 
                className="block hover:opacity-70 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TelegramIcon className="w-[24px] h-[24px] xl:w-[28px] xl:h-[28px] fill-current" />
              </a>
              <a 
                href="https://wa.me/79089086755" 
                aria-label="WhatsApp" 
                className="block hover:opacity-70 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon className="w-[24px] h-[24px] xl:w-[28px] xl:h-[28px] fill-current" />
              </a>
              <a 
                href="https://2gis.ru/ekaterinburg/search/Готвальда%2012а" 
                aria-label="2GIS" 
                className="block hover:opacity-70 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwoGisIcon className="w-[24px] h-[24px] xl:w-[28px] xl:h-[28px] fill-current" />
              </a>
            </div>

            {/* Booking Button */}
            <a 
              href={bookingPhone} 
              className="flex justify-center items-center gap-2 bg-[#F8F3D7] text-[#323B12] rounded-md px-4 py-2 xl:px-6 xl:py-3 hover:opacity-90 transition-all hover:bg-[#f8e99e] hover:scale-102"
            >
              <PhoneIcon className="w-4 h-4 xl:w-5 xl:h-5 fill-current" />
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