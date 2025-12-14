"use client";
import Image from 'next/image';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { useHeader } from '../model/useHeader';
import { TwoGisIcon } from '@/shared/ui/icons';

/**
 * MobileMenu
 * Slide-in mobile navigation with room links and contact actions.
 */
export function MobileMenu() {
  const { isMenuOpen, mounted, openMenu, closeMenu } = useHeader();

  return (
    <>
      <button
        type="button"
        aria-label="Открыть меню"
        aria-expanded={isMenuOpen}
        onClick={openMenu}
        className="lg:hidden rounded-lg w-9 h-9 sm:w-10 sm:h-10 bg-[#e1b45d] flex flex-col items-center justify-center active:scale-[0.98] transition-transform"
      >
        <span className="block w-6 h-[2px] bg-[#1A1E08]" />
        <span className="block w-6 h-[2px] bg-[#1A1E08] mt-1.5" />
        <span className="block w-6 h-[2px] bg-[#1A1E08] mt-1.5" />
      </button>

      {mounted && isMenuOpen && createPortal(
        <div className="lg:hidden fixed inset-0 z-[110] bg-[rgba(50,59,18,0.7)] backdrop-blur-[10px] flex items-center justify-center p-4">
          <div className="flex flex-col items-center justify-center gap-14 sm:gap-10 w-full max-w-md">
            {/* Close button */}
            <button
              type="button"
              aria-label="Закрыть меню"
              onClick={closeMenu}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 rounded-lg p-2 text-[#F8F3D7] hover:bg-[rgba(248,243,215,0.2)] transition-colors"
            >
              <span className="block w-5 h-[2px] bg-[#F8F3D7] rotate-45 translate-y-[2px]" />
              <span className="block w-5 h-[2px] bg-[#F8F3D7] -rotate-45 -translate-y-[2px]" />
            </button>

            {/* Navigation */}
            <div className="flex flex-col items-center gap-8">
              <p className="text-[#F8F3D7] text-xl font-bold uppercase tracking-wider">Навигация</p>
              <div className="flex flex-col items-center gap-8">
                <Link href="/" className="text-[#F8F3D7] text-xl sm:text-xl hover:text-[color:var(--accent)] transition-colors" onClick={closeMenu}>Главная</Link>
                <Link href="/rooms/fin" className="text-[#F8F3D7] text-xl sm:text-xl hover:text-[color:var(--accent)] transition-colors" onClick={closeMenu}>Финский зал</Link>
                <Link href="/rooms/fin-small" className="text-[#F8F3D7] text-xl sm:text-xl hover:text-[color:var(--accent)] transition-colors" onClick={closeMenu}>Зал «Оазис»</Link>
                <Link href="/rooms/turkey" className="text-[#F8F3D7] text-xl sm:text-xl hover:text-[color:var(--accent)] transition-colors" onClick={closeMenu}>Турецкий зал</Link>
                <Link href="/rooms/apps" className="text-[#F8F3D7] text-xl sm:text-xl hover:text-[color:var(--accent)] transition-colors" onClick={closeMenu}>Аппартаменты</Link>
                <Link href="/rooms/new-hall" className="text-[#F8F3D7] text-xl sm:text-xl hover:text-[color:var(--accent)] transition-colors" onClick={closeMenu}>Новый зал</Link>
              </div>
            </div>

            {/* Contacts */}
            <div className="flex flex-col items-center gap-8">
              <p className="text-[#F8F3D7] text-xl font-bold uppercase tracking-wider">Контакты</p>
              <div className="flex flex-col items-center gap-8">
                <a href="tel:+79089086755" className="flex items-center gap-2 text-[#F8F3D7] text-lg sm:text-xl hover:text-[color:var(--accent)] transition-colors" onClick={closeMenu}>
                  <Image src="/images/phone-icon.svg" alt="Phone" width={20} height={20} className="filter brightness-0 invert" />
                  <span>+7 908 908 67 55</span>
                </a>
                <div className="flex items-center gap-4">
                  <a href="https://wa.me/79089086755" className="inline-flex p-3 rounded-lg bg-[rgba(248,243,215,0.2)] hover:bg-[rgba(248,243,215,0.3)] transition-colors" onClick={closeMenu} aria-label="WhatsApp">
                    <Image src="/images/header-icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
                  </a>
                  <a href="https://t.me/79089086755" className="inline-flex p-3 rounded-lg bg-[rgba(248,243,215,0.2)] hover:bg-[rgba(248,243,215,0.3)] transition-colors" onClick={closeMenu} aria-label="Telegram">
                    <Image src="/images/header-icons/telegram.svg" alt="Telegram" width={24} height={24} />
                  </a>
                  <a href="https://2gis.ru/ekaterinburg/search/Готвальда%2012а" className="inline-flex p-3 rounded-lg bg-[rgba(248,243,215,0.2)] hover:bg-[rgba(248,243,215,0.3)] transition-colors text-[#F8F3D7]" onClick={closeMenu} aria-label="2GIS">
                    <TwoGisIcon className="w-6 h-6 fill-current" />
                  </a>
                </div>
              </div>
            </div>

            {/* Book button */}
            <a 
              href="tel:+79089086755" 
              className="w-full max-w-xs inline-flex items-center justify-center bg-[#F8F3D7] hover:bg-[#e8e3c7] text-[#323B12] rounded-xl px-6 py-4 text-lg font-medium transition-colors" 
              onClick={closeMenu}
            >
              Забронировать
            </a>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}