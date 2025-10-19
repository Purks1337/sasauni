import Image from 'next/image';

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/0 to-transparent" />
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/30 backdrop-blur-md border border-[#2E2D1F] rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
              <Image
                src="/images/logo.svg"
                alt="Sauna Logo"
                width={156}
                height={24}
                className="h-6"
              />
              <div className="text-center">
                <p className="text-xs text-[#9B9A89] uppercase tracking-[0.22em] font-system">
                  банный комплекс
                </p>
                <h1 className="text-2xl sm:text-[32px] text-[#F8F8EC] font-decorative leading-[1.2] tracking-[0.02em]">
                  1000 и 1 ночь
                </h1>
              </div>
            </div>
            <button className="border border-[#EBE9C6]/50 rounded-xl px-6 py-3 text-[#EBE9C6] text-sm font-system hover:bg-[#EBE9C6]/10 transition-colors">
              Забронировать
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-8 lg:px-16 pt-8 sm:pt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Main Content Block */}
            <div className="bg-black/30 backdrop-blur-md border border-[#2E2D1F] rounded-xl p-6 sm:p-8 lg:p-12">
              <div className="space-y-8 sm:space-y-12">
                {/* Title and Description */}
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#EBE9C6] leading-[1.2]">
                    Большой Финский зал
                  </h2>
                  <p className="text-lg sm:text-xl text-[#D9D5A6] leading-[1.5] tracking-[0.006em]">
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

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center gap-1">
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
                  <div className="flex items-center gap-1">
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
                  <div className="flex items-center gap-1">
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
                  <div className="flex items-center gap-1">
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
                  <div className="flex items-center gap-1">
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
                  <div className="flex items-center gap-1">
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
                  <div className="flex items-center gap-1">
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

                {/* Contact */}
                <div className="flex items-center gap-1">
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

                {/* Book Button */}
                <button className="w-full bg-[#EBE9C6] text-[#131207] rounded-xl px-6 py-3 text-lg sm:text-xl font-normal hover:bg-[#EBE9C6]/90 transition-colors">
                  Забронировать Зал
                </button>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="flex flex-col sm:flex-row lg:flex-col justify-end space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-0 lg:space-y-4">
              <button className="bg-black/30 backdrop-blur-md border border-[#2E2D1F] rounded-xl px-4 py-2 text-[#EBE9C6] text-lg sm:text-xl font-normal hover:bg-[#EBE9C6]/10 transition-colors text-left">
                Финский зал
              </button>
              <button className="bg-black/30 backdrop-blur-md border border-[#2E2D1F] rounded-xl px-4 py-2 text-[#EBE9C6] text-lg sm:text-xl font-normal hover:bg-[#EBE9C6]/10 transition-colors text-left">
                Малый финский зал
              </button>
              <button className="bg-black/30 backdrop-blur-md border border-[#2E2D1F] rounded-xl px-4 py-2 text-[#EBE9C6] text-lg sm:text-xl font-normal hover:bg-[#EBE9C6]/10 transition-colors text-left">
                Турецкий зал
              </button>
              <button className="bg-black/30 backdrop-blur-md border border-[#2E2D1F] rounded-xl px-4 py-2 text-[#EBE9C6] text-lg sm:text-xl font-normal hover:bg-[#EBE9C6]/10 transition-colors text-left">
                аппартаменты
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
