"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export function MobileHeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (isMenuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isMenuOpen, mounted]);

  return (
    <>
      <button
        type="button"
        aria-label="Открыть меню"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(true)}
        className="sm:hidden rounded-lg w-10 h-10 bg-[#EBE9C6] flex flex-col items-center justify-center active:scale-[0.98] transition-transform"
      >
        <span className="block w-6 h-[2px] bg-black" />
        <span className="block w-6 h-[2px] bg-black mt-1.5" />
        <span className="block w-6 h-[2px] bg-black mt-1.5" />
      </button>

      {mounted && isMenuOpen && createPortal(
        <>
          <button
            aria-label="Закрыть меню"
            onClick={() => setIsMenuOpen(false)}
            className="sm:hidden fixed inset-0 z-[100] bg-black/60"
          />
          <div className="sm:hidden fixed right-0 top-0 z-[110] h-full w-80 max-w-[80%] bg-[#11100A] border-l border-[#2E2D1F] p-5 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="text-[#F8F8EC] text-lg">Меню</span>
              <button
                type="button"
                aria-label="Закрыть меню"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg p-2 text-[#EBE9C6] hover:bg-[#EBE9C6]/10"
              >
                <span className="block w-5 h-[2px] bg-[#EBE9C6] rotate-45 translate-y-[2px]" />
                <span className="block w-5 h-[2px] bg-[#EBE9C6] -rotate-45 -translate-y-[2px]" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-[#D9D5A6] text-sm">Залы</p>
              <div className="flex flex-col gap-3">
                <button className="text-left text-[#EBE9C6] text-base hover:text-[#F8F8EC]">Финский зал</button>
                <button className="text-left text-[#EBE9C6] text-base hover:text-[#F8F8EC]">Малый финский зал</button>
                <button className="text-left text-[#EBE9C6] text-base hover:text-[#F8F8EC]">Турецкий зал</button>
                <button className="text-left text-[#EBE9C6] text-base hover:text-[#F8F8EC]">Аппартаменты</button>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[#D9D5A6] text-sm">Контакты</p>
              <div className="flex items-center gap-3">
                <Image src="/images/phone-icon.svg" alt="Phone" width={18} height={18} />
                <span className="text-[#D9D5A6] text-base">+7 909 009 69 14</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/images/location-icon.svg" alt="Location" width={18} height={18} />
                <span className="text-[#D9D5A6] text-base">Екатеринбург, Готвальда 12а</span>
              </div>
            </div>

            <div className="mt-auto">
              <button className="w-full bg-[#EBE9C6] text-[#131207] rounded-xl px-6 py-3 text-lg font-normal hover:bg-[#EBE9C6]/90 transition-colors">
                Забронировать
              </button>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
}


