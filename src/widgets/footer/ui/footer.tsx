import Link from 'next/link';
import { Logo } from '@/shared/ui/logo';
import { WhatsappIcon, TelegramIcon, PhoneIcon } from '@/shared/ui/icons';

/**
 * Footer
 * Main footer component with logo, navigation links, contacts and social media
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/rooms/fin', label: 'Финский зал' },
    { href: '/rooms/fin-small', label: 'Зал «Оазис»' },
    { href: '/rooms/turkey', label: 'Турецкий зал' },
    { href: '/rooms/apps', label: 'Апартаменты' },
    { href: '/rooms/new-hall', label: 'Новый зал' },
  ];

  return (
    <footer className="bg-[#F8F3D7] text-[#323b12] border-t border-[#E2D2A9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-12 lg:col-span-4 text-center lg:text-left">
            <div className="inline-block">
              <Logo href="/" className="h-auto w-48" />
            </div>
            <p className="mt-4 text-sm max-w-xs mx-auto lg:mx-0">
              Оздоровительный центр в Екатеринбурге. Отдых для души и тела в атмосфере восточной сказки.
            </p>
          </div>

          {/* Site links */}
          <div className="md:col-span-4 lg:col-span-2 text-center md:text-left">
            <h6 className="text-[#1A1E08] font-medium mb-4">Наши залы</h6>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-[color:var(--accent)] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="md:col-span-4 lg:col-span-3 text-center md:text-left">
            <h6 className="text-[#1A1E08] font-medium mb-4">Контакты</h6>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+79089086755" className="flex items-center justify-center md:justify-start gap-2 hover:text-[color:var(--accent)] transition-colors duration-200">
                  <PhoneIcon className="w-4 h-4" />
                  <span>+7 908 908 67 55</span>
                </a>
              </li>
              <li>
                <a
                  href="https://yandex.ru/maps/-/CLvp7Dn-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-[color:var(--accent)] transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-10c-4.2 0-8 3.22-8 8.2c0 3.32 2.67 7.25 8 11.8c5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2"/></svg>
                  <span>Екатеринбург, ул. Готвальда, 12а</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div className="md:col-span-4 lg:col-span-3 text-center md:text-left">
             <h6 className="text-[#1A1E08] font-medium mb-4">Мы в соцсетях</h6>
             <div className="flex items-center justify-center md:justify-start gap-3">
              <a href="https://wa.me/79089086755" aria-label="WhatsApp" className="inline-flex p-2 rounded-lg bg-[#E2D2A9] hover:bg-[#e1b45d] transition-colors">
                <WhatsappIcon className="w-5 h-5 text-[#1A1E08]" />
              </a>
              <a href="https://t.me/79089086755" aria-label="Telegram" className="inline-flex p-2 rounded-lg bg-[#E2D2A9] hover:bg-[#e1b45d] transition-colors">
                <TelegramIcon className="w-5 h-5 text-[#1A1E08]" />
              </a>
            </div>
          </div>

        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-[#E2D2A9] py-6 text-center text-xs text-[#323b12]">
          <p>&copy; {currentYear} 1001 ночь. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

