"use client";
import Image from 'next/image';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { useHeader } from '../model/useHeader';

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
        className="min-[1140px]:hidden rounded-lg w-10 h-10 bg-[#EBE9C6] flex flex-col items-center justify-center active:scale-[0.98] transition-transform"
      >
        <span className="block w-6 h-[2px] bg-black" />
        <span className="block w-6 h-[2px] bg-black mt-1.5" />
        <span className="block w-6 h-[2px] bg-black mt-1.5" />
      </button>

      {mounted && isMenuOpen && createPortal(
        <>
          <button
            aria-label="Закрыть меню"
            onClick={closeMenu}
            className="min-[1140px]:hidden fixed inset-0 z-[100] bg-black/60"
          />
          <div className="min-[1140px]:hidden fixed right-0 top-0 z-[110] h-full w-80 max-w-[80%] bg-[#11100A] border-l border-[#2E2D1F] p-5 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="text-[#F8F8EC] text-lg">Меню</span>
              <button
                type="button"
                aria-label="Закрыть меню"
                onClick={closeMenu}
                className="rounded-lg p-2 text-[#EBE9C6] hover:bg-[#EBE9C6]/10"
              >
                <span className="block w-5 h-[2px] bg-[#EBE9C6] rotate-45 translate-y-[2px]" />
                <span className="block w-5 h-[2px] bg-[#EBE9C6] -rotate-45 -translate-y-[2px]" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-[#D9D5A6] text-sm">Залы</p>
              <div className="flex flex-col gap-3">
                <Link href="/rooms/fin" className="text-left text-[#EBE9C6] text-base hover:text-[color:var(--accent)]" onClick={closeMenu}>Финский зал</Link>
                <Link href="/rooms/fin-small" className="text-left text-[#EBE9C6] text-base hover:text-[color:var(--accent)]" onClick={closeMenu}>Зал «Оазис»</Link>
                <Link href="/rooms/turkey" className="text-left text-[#EBE9C6] text-base hover:text-[color:var(--accent)]" onClick={closeMenu}>Турецкий зал</Link>
                <Link href="/rooms/apps" className="text-left text-[#EBE9C6] text-base hover:text-[color:var(--accent)]" onClick={closeMenu}>Аппартаменты</Link>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[#D9D5A6] text-sm">Контакты</p>
              <div className="flex items-center gap-3">
                <a href="tel:+79089086755" className="flex items-center gap-2 text-[#D9D5A6] text-base hover:text-[color:var(--accent)]" onClick={closeMenu}>
                  <Image src="/images/phone-icon.svg" alt="Phone" width={18} height={18} />
                  <span>+7 908 908 67 55</span>
                </a>
              </div>
              <div className="flex items-center gap-3">
                {/* <a href="https://wa.me/79089086755" className="inline-flex p-2 rounded-lg hover:bg-[#EBE9C6]/10" onClick={closeMenu} aria-label="WhatsApp">
                  <Image src="/images/header-icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
                </a> */}
                <a href="https://t.me/79089086755" className="inline-flex p-2 rounded-lg hover:bg-[#EBE9C6]/10" onClick={closeMenu} aria-label="Telegram">
                  <Image src="/images/header-icons/telegram.svg" alt="Telegram" width={20} height={20} />
                </a>
              </div>
            </div>

            <div className="mt-auto">
              <a href="tel:+79089086755" className="w-full inline-flex items-center justify-center bg-[#EBE9C6] hover:bg-[color:var(--accent)] text-[#131207] rounded-xl px-6 py-3 text-lg font-normal transition-colors">
                Забронировать
              </a>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
}