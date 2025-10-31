import Image from 'next/image';
import Link from 'next/link';
import { FeaturePill } from '@/components/FeaturePill';
import { AnimatedBackground } from '@/components/mobile-background';
import { MobileHeaderMenu } from '@/components/mobile-header-menu';
import { featuresById, type RoomInfo } from '@/data/room-info';

interface RoomTemplateProps {
  room: RoomInfo;
}

export function RoomTemplate({ room }: RoomTemplateProps) {
  return (
    <div className="min-h-screen relative bg-black">
      {/* Animated background slideshow for all devices */}
      <AnimatedBackground />

      {/* Single Full-Viewport Section */}
      <section className="relative z-10 w-screen min-h-screen flex flex-col justify-between px-2 py-3 sm:p-6">
        {/* Top Section: Header + Navigation */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-6">
            {/* Header (Hero) */}
            <div className="bg-black/30 backdrop-blur-md border border-[#2E2D1F] rounded-full px-[24px] py-3 flex items-center justify-between gap-4 relative z-20">
                {/* Left side: Social/phone icons on desktop, text on mobile */}
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-3">
                    <a href="https://wa.me/79089086755" aria-label="WhatsApp" className="inline-flex p-2 rounded-lg hover:bg-[#EBE9C6]/10 transition-colors">
                      <Image src="/images/header-icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
                    </a>
                    <a href="https://t.me/79089086755" aria-label="Telegram" className="inline-flex p-2 rounded-lg hover:bg-[#EBE9C6]/10 transition-colors">
                      <Image src="/images/header-icons/telegram.svg" alt="Telegram" width={20} height={20} />
                    </a>
                    <a href="tel:+79089086755" aria-label="Телефон" className="inline-flex p-2 rounded-lg hover:bg-[#EBE9C6]/10 transition-colors">
                      <Image src="/images/header-icons/phone.svg" alt="Телефон" width={20} height={20} />
                    </a>
                  </div>
                  <div className="sm:hidden">
                    <p className="text-xs text-[#9B9A89] uppercase tracking-[0.22em] font-system">
                      банный комплекс
                    </p>
                    <h1 className="text-2xl text-[#F8F8EC] font-decorative leading-[1.2] tracking-[0.02em]">
                      1000 и 1 ночь
                    </h1>
                  </div>
                </div>

                {/* Center: Desktop logo and title */}
                <div className="hidden sm:flex flex-col items-center">
                  <p className="text-xs text-[#9B9A89] uppercase tracking-[0.22em] font-system">
                    банный комплекс
                  </p>
                  <h1 className="text-2xl text-[#F8F8EC] font-decorative leading-[1.2] tracking-[0.02em]">
                    1000 и 1 ночь
                  </h1>
                </div>

                {/* Right side: Book button on desktop, burger on mobile */}
                <div className="flex items-center gap-3">
                  {/* Phone with icon on the right side of header */}
                  <div className="hidden sm:flex items-center gap-2">
                    <Image src="/images/phone-icon.svg" alt="Phone" width={18} height={18} className="text-white" />
                    <a href={room.phone} className="text-[#EBE9C6] text-sm hover:text-[color:var(--accent)] transition-colors">
                      +7 908 908 67 55
                    </a>
                  </div>
                  <a href={room.phone} className="border border-[#EBE9C6]/50 rounded-xl px-6 py-3 text-[#EBE9C6] text-sm font-system hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors hidden sm:block">
                    Забронировать
                  </a>
                  <MobileHeaderMenu />
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
          </div>
        </div>

        {/* Content Area fills remaining height (mobile top gap 240px below header) */}
        <div className="max-w-7xl mx-auto w-full flex items-start pt-0 mt-[240px] sm:mt-0">
          <div className="w-full max-w-2xl">
            {/* Main Content Block */}
            <div className="space-y-6 sm:space-y-8">
              {/* Title and Description */}
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#EBE9C6] leading-[1.2]">
                  {room.title}
                </h2>
                <p className="text-lg sm:text-xl text-[#C2C0A4] leading-[1.5] tracking-[0.006em]">
                  {room.description}
                </p>
              </div>

              {/* Location and Capacity */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-1">
                  <Image src="/images/location-icon.svg" alt="Location" width={18} height={18} className="text-white" />
                  <span className="text-[#D9D5A6] text-sm sm:text-base ml-1">{room.address}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image src="/images/user-icon.svg" alt="Users" width={18} height={18} className="text-white" />
                  <span className="text-[#D9D5A6] text-sm sm:text-base ml-1">Вместимость: {room.capacity} человек</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <p className="text-[#D9D5A6] text-xl">Особенности:</p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {room.featureIds.map((fid) => {
                    const spec = featuresById[fid];
                    return (
                      <FeaturePill key={fid} iconPath={spec.iconPath} label={spec.label} />
                    );
                  })}
                </div>
              </div>

              {/* Contact and Book Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a href={room.phone} className="bg-[#EBE9C6] hover:bg-[color:var(--accent)] text-[#131207] rounded-xl px-6 py-3 text-lg sm:text-xl font-normal transition-colors">
                  Забронировать Зал
                </a>
                <div className="flex items-center gap-1">
                  <Image src="/images/phone-icon.svg" alt="Phone" width={18} height={18} className="text-white" />
                  <a href={room.phone} className="text-[#D9D5A6] text-sm sm:text-base ml-1">
                    +7 908 908 67 55
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


