import Image from 'next/image';
import { MobileHeaderMenu } from '@/components/mobile-header-menu';

export default function SaunaPage() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background-image.png"
          alt="Sauna background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/0 to-transparent" />
      </div>

      {/* Single Full-Viewport Section */}
      <section className="relative z-10 w-screen min-h-screen flex flex-col justify-between p-4 sm:p-6">
        {/* Top Section: Header + Navigation */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-6">
            {/* Header (Hero) */}
            <div className="bg-black/30 backdrop-blur-md border border-[#2E2D1F] rounded-full px-[24px] py-3 flex items-center justify-between gap-4">
                {/* Text logo only on mobile; SVG logo only on desktop */}
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/logo.svg"
                    alt="Sauna Logo"
                    width={156}
                    height={24}
                    className="h-6 hidden sm:block"
                  />
                  <div className="sm:hidden">
                    <p className="text-xs text-[#9B9A89] uppercase tracking-[0.22em] font-system">
                      банный комплекс
                    </p>
                    <h1 className="text-2xl text-[#F8F8EC] font-decorative leading-[1.2] tracking-[0.02em]">
                      1000 и 1 ночь
                    </h1>
                  </div>
                </div>

              {/* Desktop book button */}
              <button className="border border-[#EBE9C6]/50 rounded-xl px-6 py-3 text-[#EBE9C6] text-sm font-system hover:bg-[#EBE9C6]/10 transition-colors hidden sm:block">
                Забронировать
              </button>
              {/* Mobile burger button */}
              <MobileHeaderMenu />
            </div>

            {/* Navigation Menu */}
            <div className="hidden sm:flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-24">
              <button className="text-[#EBE9C6] text-xl font-normal hover:text-[#F8F8EC] transition-colors" style={{textShadow: '2px 2px 2px rgba(0,0,0,0.6)'}}>
                Финский зал
              </button>
              <button className="text-[#EBE9C6] text-xl font-normal hover:text-[#F8F8EC] transition-colors" style={{textShadow: '2px 2px 2px rgba(0,0,0,0.6)'}}>
                Малый финский зал
              </button>
              <button className="text-[#EBE9C6] text-xl font-normal hover:text-[#F8F8EC] transition-colors" style={{textShadow: '2px 2px 2px rgba(0,0,0,0.6)'}}>
                Турецкий зал
              </button>
              <button className="text-[#EBE9C6] text-xl font-normal hover:text-[#F8F8EC] transition-colors" style={{textShadow: '2px 2px 2px rgba(0,0,0,0.6)'}}>
                аппартаменты
              </button>
            </div>
          </div>
        </div>

        {/* Content Area fills remaining height */}
        <div className="max-w-7xl mx-auto w-full flex items-start pt-0">
          <div className="w-full max-w-2xl">
            {/* Main Content Block - NO background, NO border, NO blur */}
            <div className="space-y-6 sm:space-y-8">
              {/* Title and Description */}
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#EBE9C6] leading-[1.2]">
                  Большой Финский зал
                </h2>
                <p className="text-lg sm:text-xl text-[#C2C0A4] leading-[1.5] tracking-[0.006em]">
                  Идеальный выбор для ценителей финской парной. Этот зал создан для тех, кто любит хороший жар и полное восстановление сил. После жаркой финской парилки, где можно попариться вениками, вас ждёт большой бассейн с кристально чистой водой (23°C), который подарит заряд энергии и свежести.
                </p>
              </div>

              {/* Location and Capacity */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-1">
                  <Image
                    src="/images/location-icon.svg"
                    alt="Location"
                    width={18}
                    height={18}
                    className="text-white"
                  />
                  <span className="text-[#D9D5A6] text-sm sm:text-base ml-1">
                    Екатеринбург, Готвальда 12а
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Image
                    src="/images/user-icon.svg"
                    alt="Users"
                    width={18}
                    height={18}
                    className="text-white"
                  />
                  <span className="text-[#D9D5A6] text-sm sm:text-base ml-1">
                    Вместимость: 10 человек
                  </span>
                </div>
              </div>

              {/* Features Heading */}
              <div className="space-y-3">
                <p className="text-[#D9D5A6] text-xl">Особенности:</p>

                {/* Services Grid (Pills) */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center gap-1 border border-[#EBE9C6] rounded-[30px] px-6 py-1.5">
                    <Image
                      src="/images/water-icon.svg"
                      alt="Sauna"
                      width={18}
                      height={18}
                      className="text-white"
                    />
                    <span className="text-[#D9D5A6] text-sm sm:text-base ml-1">
                      Финская парная
                    </span>
                  </div>
                  <div className="flex items-center gap-1 border border-[#EBE9C6] rounded-[30px] px-6 py-1.5">
                    <Image
                      src="/images/pool-icon.svg"
                      alt="Pool"
                      width={18}
                      height={18}
                      className="text-white"
                    />
                    <span className="text-[#D9D5A6] text-sm sm:text-base ml-1">
                      Бассейн
                    </span>
                  </div>
                  <div className="flex items-center gap-1 border border-[#EBE9C6] rounded-[30px] px-6 py-1.5">
                    <Image
                      src="/images/billiard-icon.svg"
                      alt="Billiard"
                      width={18}
                      height={18}
                      className="text-white"
                    />
                    <span className="text-[#D9D5A6] text-sm sm:text-base ml-1">
                      Бильярд
                    </span>
                  </div>
                  <div className="flex items-center gap-1 border border-[#EBE9C6] rounded-[30px] px-6 py-1.5">
                    <Image
                      src="/images/microphone-icon.svg"
                      alt="Karaoke"
                      width={18}
                      height={18}
                      className="text-white"
                    />
                    <span className="text-[#D9D5A6] text-sm sm:text-base ml-1">
                      Караоке
                    </span>
                  </div>
                  <div className="flex items-center gap-1 border border-[#EBE9C6] rounded-[30px] px-6 py-1.5">
                    <Image
                      src="/images/tv-icon.svg"
                      alt="TV"
                      width={18}
                      height={18}
                      className="text-white"
                    />
                    <span className="text-[#D9D5A6] text-sm sm:text-base ml-1">
                      Телевизор
                    </span>
                  </div>
                  <div className="flex items-center gap-1 border border-[#EBE9C6] rounded-[30px] px-6 py-1.5">
                    <Image
                      src="/images/wifi-icon.svg"
                      alt="WiFi"
                      width={18}
                      height={18}
                      className="text-white"
                    />
                    <span className="text-[#D9D5A6] text-sm sm:text-base ml-1">
                      Wi-Fi
                    </span>
                  </div>
                  <div className="flex items-center gap-1 border border-[#EBE9C6] rounded-[30px] px-6 py-1.5">
                    <Image
                      src="/images/fireplace-icon.svg"
                      alt="Fireplace"
                      width={18}
                      height={18}
                      className="text-white"
                    />
                    <span className="text-[#D9D5A6] text-sm sm:text-base ml-1">
                      Камин на дровах
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact and Book Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button className="bg-[#EBE9C6] text-[#131207] rounded-xl px-6 py-3 text-lg sm:text-xl font-normal hover:bg-[#EBE9C6]/90 transition-colors order-1 sm:order-2">
                  Забронировать Зал
                </button>
                <div className="flex items-center gap-1 order-2 sm:order-1">
                  <Image
                    src="/images/phone-icon.svg"
                    alt="Phone"
                    width={18}
                    height={18}
                    className="text-white"
                  />
                  <span className="text-[#D9D5A6] text-sm sm:text-base ml-1">
                    +7 909 009 69 14
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile slide-in menu moved into MobileHeaderMenu */}
    </div>
  );
}
