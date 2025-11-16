"use client";
import { roomsBySlug, type RoomSlug } from '@/entities/room';
import { Header } from '@/widgets/header';
import { HallCard } from '@/shared/ui';
import { useSlideshow } from '@/features/room-slideshow';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { SVGProps } from 'react';
import { SLIDESHOW_CONFIG } from '@/shared/config/ui';
import type { CSSProperties } from 'react';

// --- Local Icon Components (as per Closed Context rule) ---
const LocalPhoneIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg>
);
const LocalLocationIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-10c-4.2 0-8 3.22-8 8.2c0 3.32 2.67 7.25 8 11.8c5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2"/></svg>
);

export default function HomePage() {
  const handleScrollToMap = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mapSection = document.getElementById('map');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroSlideshowImages = [
    '/images/main-bg.jpg',
    '/images/hall-covers/hall-cover-apparts.jpg',
    '/images/hall-covers/hall-cover-fin.jpg',
    '/images/hall-covers/hall-cover-oasis.jpg',
    '/images/hall-covers/hall-cover-turkey.jpg',
  ];

  const { currentIndex } = useSlideshow({ images: heroSlideshowImages, intervalMs: 5000 });

  return (
    <div className="bg-[#F9F3D4] relative">
      <main className='pb-24'>
        {/* Hero Section */}
        <div className="relative min-h-screen">
          {/* Background Slideshow - always 100% X and Y, always behind Hero */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            <div className="relative w-full h-full">
              {heroSlideshowImages.map((src, index) => {
                const isActive = index === currentIndex;
                return (
                  <div
                    key={src}
                    className="absolute inset-0 transition-opacity"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transitionDuration: `${SLIDESHOW_CONFIG.crossfadeMs}ms`,
                      transitionTimingFunction: SLIDESHOW_CONFIG.fadeEase,
                      willChange: 'opacity',
                    }}
                  >
                    <div
                      className={`absolute inset-0 ${isActive ? 'zoom-animate' : ''}`}
                      style={
                        {
                          '--zoom-from': SLIDESHOW_CONFIG.zoomFrom,
                          '--zoom-to': SLIDESHOW_CONFIG.zoomTo,
                          '--zoom-duration': '5000ms',
                          '--zoom-ease': SLIDESHOW_CONFIG.zoomEase,
                          willChange: 'transform',
                        } as CSSProperties
                      }
                    >
                      <Image
                        src={src}
                        alt="Hero background"
                        fill
                        sizes="100vw"
                        priority={index === 0}
                        quality={70}
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Overlay filters */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: 'rgba(249, 243, 212, 0.8)',
              zIndex: 1,
            }}
          />
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(180deg, rgba(249, 243, 212, 0) 0%, #F9F3D4 100%)',
              zIndex: 2,
            }}
          />
          
          {/* Foreground Content Layer */}
          <div className="relative flex flex-col min-h-screen" style={{ zIndex: 10 }}>
            <Header />

            {/* Main Content - Hero Section */}
            <div className="flex flex-col items-center justify-center text-center flex-grow px-4 sm:px-8 lg:px-16" style={{ paddingTop: '120px', paddingBottom: '80px', gap: '32px' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center w-full"
                style={{ gap: '10px' }}
              >
                {/* Heading Container */}
                <div className="flex flex-col items-center w-full" style={{ gap: '16px' }}>
                  <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-light text-[#626155] leading-[1.2] tracking-[0.006em]">
                    Оздоровительный центр
                  </h1>
                  <div className="relative w-full lg:w-[500px] aspect-[500/46]">
                    <Image
                      src="/images/1001.svg"
                      alt="1000 и 1 ночь"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <p className="w-full max-w-[408px] text-base sm:text-lg lg:text-[20px] font-normal text-[#59584D] leading-[1.5] tracking-[0.006em] px-4">
                    Погрузитесь в атмосферу спокойствия и роскоши в банном комплексе «1000 и 1 ночь».
                  </p>
                </div>
              </motion.div>

              {/* Buttons Wrapper */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center w-full gap-2 sm:gap-[10px] px-4"
              >
                <a 
                  href="tel:+79089086755" 
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#323B12] text-[#D9D5A6] rounded-lg px-4 sm:px-6 py-3 sm:py-[18px] text-base sm:text-lg lg:text-[20px] font-medium leading-[1.2] transition-colors" 
                  style={{ gap: '8px' }}
                >
                  <LocalPhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" style={{ fill: '#FFFFFF' }} />
                  <span>+7 908 908 67 55</span>
                </a>
                <a 
                  href="#map"
                  onClick={handleScrollToMap}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#E1B45D] text-[#323B12] rounded-lg px-4 sm:px-6 py-3 sm:py-[18px] text-base sm:text-lg lg:text-[20px] font-medium leading-[1.2] transition-colors cursor-pointer"
                  style={{ gap: '8px' }}
                >
                  <LocalLocationIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" style={{ fill: '#FFFFFF' }} />
                  <span className="text-center">Екатеринбург, ул. Готвальда, 12а</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Halls Container Section */}
        <section id="rooms" className="relative bg-[#F8F3D7] w-full" style={{ zIndex: 1 }}>
          <div 
            className="flex flex-col rounded-xl w-full px-4 sm:px-8 lg:px-16 py-8 sm:py-12"
            style={{ 
              gap: '8px', 
              minHeight: 'auto'
            }}
          >
            {/* First row: fin, oasis, turkey (3 cards equal width) */}
            <div className="flex flex-col sm:flex-row flex-1 w-full" style={{ gap: '8px', minHeight: '273px' }}>
              {(['fin', 'fin-small', 'turkey'] as RoomSlug[]).map((slug) => (
                <div key={slug} className="flex-1 min-w-0">
                  <HallCard slug={slug} room={roomsBySlug[slug]} />
                </div>
              ))}
            </div>
            {/* Second row: apparts and new (50/50 width) */}
            <div className="flex flex-col sm:flex-row flex-1 w-full" style={{ gap: '8px', minHeight: '273px' }}>
              <div className="flex-1 min-w-0">
                <HallCard slug="apps" room={roomsBySlug['apps']} />
              </div>
              <div className="flex-1 min-w-0">
                <HallCard slug="new-hall" room={roomsBySlug['new-hall']} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}