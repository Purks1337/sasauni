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
    '/images/main-bg-slideshow/main-bg-01.webp?v=new',
    '/images/main-bg-slideshow/main-bg-02.webp?v=new',
    '/images/main-bg-slideshow/main-bg-03.webp?v=new',
    '/images/main-bg-slideshow/main-bg-04.webp?v=new',
  ];

  // 6000ms interval
  const { currentIndex, prevIndex } = useSlideshow({ images: heroSlideshowImages, intervalMs: 6000 });

  return (
    <div className="bg-[#F9F3D4] relative">
      <main className='pb-24'>
        {/* Hero Section */}
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Slideshow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="relative w-full h-full">
              {heroSlideshowImages.map((src, index) => {
                const isActive = index === currentIndex;
                const isPrev = index === prevIndex;
                const shouldAnimate = isActive || isPrev;

                return (
                  <div
                    key={src}
                    className="absolute inset-0"
                    style={{
                      // LOGIC:
                      // If Prev: Z-Index 2 (Top), Opacity goes to 0 (Fade Out).
                      // If Active: Z-Index 1 (Bottom), Opacity is 1 (Instant Show).
                      // This ensures the Active image is visible BEHIND the Prev image while Prev fades out.
                      zIndex: isPrev ? 2 : (isActive ? 1 : 0),
                      opacity: isActive ? 1 : 0, 
                      transition: isPrev 
                        ? `opacity ${SLIDESHOW_CONFIG.crossfadeMs}ms ${SLIDESHOW_CONFIG.fadeEase}` 
                        : 'none', // IMPORTANT: No transition for appearing, only for disappearing
                      willChange: 'opacity, z-index',
                    }}
                  >
                    <div
                      className={`absolute inset-0 ${shouldAnimate ? 'zoom-animate' : ''}`}
                      style={
                        {
                          '--zoom-from': '1.15',
                          '--zoom-to': '1.0',
                          '--zoom-duration': '20000ms', 
                          '--zoom-ease': 'linear',
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
                        quality={80}
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Foreground Content Layer */}
          <div className="relative flex flex-col min-h-screen z-10">
            <Header variant="home" />

            {/* Main Content - Hero Section */}
            <div className="flex flex-col items-center justify-center text-center flex-grow px-0 lg:px-16 pt-20 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center w-full gap-[10px] relative px-2"
              >
                {/* Blurred Ellipse Background */}
                <svg
                  className="absolute pointer-events-none z-0 block"
                  style={{
                    width: '1582px',
                    height: '1022px',
                    left: 'calc(50% - 1582px / 2)',
                    top: 'calc(50% - 1022px / 2 + 0.5px)',
                    opacity: 0.85,
                  }}
                  viewBox="0 0 1582 1022"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_235_1098)">
                    <ellipse cx="791" cy="511" rx="461" ry="181" fill="#120D08"/>
                  </g>
                  <defs>
                    <filter id="filter0_f_235_1098" x="0" y="0" width="1582" height="1022" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="165" result="effect1_foregroundBlur_235_1098"/>
                    </filter>
                  </defs>
                </svg>
                
                {/* Heading Container */}
                <div className="flex flex-col items-center w-full gap-4 relative z-10">
                  <div className="flex flex-col items-center gap-1 w-full">
                    <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-light text-white leading-[1.2] tracking-[0.006em]">
                      Оздоровительный центр
                    </h1>
                    <div className="relative w-full px-2 sm:px-0 sm:w-[750px] aspect-[750/115]">
                      <Image
                        src="/images/1001.svg"
                        alt="1000 и 1 ночь"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                  <p 
                    className="text-xl sm:text-2xl lg:text-[32px] font-normal text-[#F9F3D4] leading-[150%] tracking-[0.006em] text-center px-2"
                    style={{ zIndex: 2 }}
                  >
                    Погрузитесь в атмосферу спокойствия и роскоши<br className="hidden sm:block" />
                    в банном комплексе «1000 и 1 ночь».
                  </p>
                </div>
              </motion.div>

              {/* Buttons Wrapper */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center w-full gap-3 sm:gap-2.5 px-4"
              >
                <a 
                  href="tel:+79089086755" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F9F3D4] text-[#323B12] rounded-lg px-6 py-4 sm:px-6 sm:py-3 text-lg sm:text-xl lg:text-[32px] font-bold leading-[1.2] transition-all duration-300 ease-out hover:shadow-lg hover:scale-102 active:scale-100 relative z-10 hover:bg-[#f8e99e]"
                >
                  <LocalPhoneIcon className="w-6 h-6 flex-shrink-0" style={{ fill: '#323B12' }} />
                  <span>+7 908 908 67 55</span>
                </a>
                <a 
                  href="#map"
                  onClick={handleScrollToMap}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F9F3D4] text-[#323B12] rounded-lg px-6 py-4 sm:px-6 sm:py-3 text-lg sm:text-xl lg:text-[32px] font-bold leading-[1.2] transition-all duration-300 ease-out hover:shadow-lg hover:scale-102 active:scale-100 cursor-pointer relative z-10 hover:bg-[#f8e99e]"
                >
                  <LocalLocationIcon className="w-6 h-6 flex-shrink-0" style={{ fill: '#323B12' }} />
                  <span className="text-center">Екатеринбург, ул. Готвальда, 12а</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Halls Container Section */}
        <section id="rooms" className="relative bg-[#F8F3D7] w-full z-[1]">
          <div className="flex flex-col rounded-xl w-full px-2 lg:px-16 py-8 sm:py-12 gap-2">
            <div className="flex flex-col lg:flex-row flex-1 w-full gap-2 min-h-[200px] sm:min-h-[250px] lg:min-h-[273px]">
              {(['fin', 'fin-small', 'turkey'] as RoomSlug[]).map((slug) => (
                <div key={slug} className="flex-1 min-w-0">
                  <HallCard slug={slug} room={roomsBySlug[slug]} />
                </div>
              ))}
            </div>
            <div className="flex flex-col lg:flex-row flex-1 w-full gap-2 min-h-[200px] sm:min-h-[250px] lg:min-h-[273px]">
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