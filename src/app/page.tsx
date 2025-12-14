"use client";
import { roomsBySlug, type RoomSlug } from '@/entities/room';
import { Header } from '@/widgets/header';
import { HallCard } from '@/shared/ui';
import { useSlideshow } from '@/features/room-slideshow';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { type SVGProps, useState, type FormEvent, useEffect } from 'react';
import { SLIDESHOW_CONFIG, SLIDESHOW_INTERVAL_MS } from '@/shared/config/ui';
import type { CSSProperties } from 'react';

// --- Local Icon Components ---
const LocalPhoneIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg>
);
const LocalLocationIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-10c-4.2 0-8 3.22-8 8.2c0 3.32 2.67 7.25 8 11.8c5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2"/></svg>
);
const LocalPaperPlaneIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" {...props}>
        <path d="M1.72366 1.05281C1.63996 1.01095 1.54619 0.993419 1.45302 1.00221C1.35985 1.01101 1.27102 1.04577 1.19663 1.10255C1.12224 1.15934 1.06528 1.23586 1.03222 1.32341C0.99917 1.41096 0.991353 1.50604 1.00966 1.59781L2.41266 6.44781C2.43882 6.5382 2.48995 6.61936 2.56018 6.68198C2.63041 6.74461 2.71688 6.78614 2.80966 6.80181L8.49966 7.75481C8.76766 7.80781 8.76766 8.19181 8.49966 8.24481L2.80966 9.19781C2.71688 9.21349 2.63041 9.25502 2.56018 9.31764C2.48995 9.38026 2.43882 9.46143 2.41266 9.55181L1.00966 14.4018C0.991353 14.4936 0.99917 14.5887 1.03222 14.6762C1.06528 14.7638 1.12224 14.8403 1.19663 14.8971C1.27102 14.9539 1.35985 14.9886 1.45302 14.9974C1.54619 15.0062 1.63996 14.9887 1.72366 14.9468L14.7237 8.44681C14.8066 8.40524 14.8763 8.34142 14.9251 8.26248C14.9738 8.18353 14.9996 8.09259 14.9996 7.99981C14.9996 7.90704 14.9738 7.81609 14.9251 7.73715C14.8763 7.65821 14.8066 7.59438 14.7237 7.55281L1.72366 1.05281Z" fill="currentColor"/>
    </svg>
);
const LocalCloseIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
);

// --- Modal Component ---
interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedHall, setSelectedHall] = useState<string>('fin');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Logic to send data would go here
    alert('Ваша заявка принята! Мы свяжемся с вами в ближайшее время.');
    onClose();
  };

  const halls = [
    { id: 'fin', label: 'Финский зал' },
    { id: 'fin-small', label: 'Зал «Оазис»' },
    { id: 'turkey', label: 'Турецкий зал' },
    { id: 'apps', label: 'Апартаменты' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1A1E08]/70 backdrop-blur-sm z-[2147483648]"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[2147483649] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#F9F3D4] w-full max-w-lg rounded-xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="bg-[#323B12] px-6 py-4 flex items-center justify-between flex-shrink-0">
                <h3 className="text-[#F9F3D4] text-xl sm:text-2xl font-medium">Оставить заявку</h3>
                <button 
                  onClick={onClose}
                  className="text-[#F9F3D4] hover:text-[#E1B45D] transition-colors p-1"
                >
                  <LocalCloseIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Form Content (Scrollable) */}
              <div className="p-6 overflow-y-auto custom-scrollbar">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-sm text-[#59584D] font-medium">Ваше имя</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Иван"
                        className="w-full px-4 py-2 rounded-lg bg-white border border-[#E2D2A9] text-[#323B12] focus:outline-none focus:border-[#E1B45D] focus:ring-1 focus:ring-[#E1B45D] transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-sm text-[#59584D] font-medium">Телефон</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+7 (999) 000-00-00"
                        className="w-full px-4 py-2 rounded-lg bg-white border border-[#E2D2A9] text-[#323B12] focus:outline-none focus:border-[#E1B45D] focus:ring-1 focus:ring-[#E1B45D] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-sm text-[#59584D] font-medium">Дата</label>
                      <input 
                        type="date" 
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white border border-[#E2D2A9] text-[#323B12] focus:outline-none focus:border-[#E1B45D] focus:ring-1 focus:ring-[#E1B45D] transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-sm text-[#59584D] font-medium">Время</label>
                      <input 
                        type="time" 
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white border border-[#E2D2A9] text-[#323B12] focus:outline-none focus:border-[#E1B45D] focus:ring-1 focus:ring-[#E1B45D] transition-all"
                      />
                    </div>
                  </div>

                  {/* Hall Selection */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-[#59584D] font-medium">Выберите зал</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {halls.map((hall) => (
                        <label 
                          key={hall.id} 
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                            selectedHall === hall.id 
                              ? 'bg-[#323B12] border-[#323B12] text-[#F9F3D4]' 
                              : 'bg-white border-[#E2D2A9] text-[#323B12] hover:border-[#323B12]'
                          }`}
                        >
                          <input 
                            type="radio" 
                            name="hall" 
                            value={hall.id}
                            checked={selectedHall === hall.id}
                            onChange={(e) => setSelectedHall(e.target.value)}
                            className="hidden"
                          />
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                            selectedHall === hall.id ? 'border-[#F9F3D4]' : 'border-[#323B12]'
                          }`}>
                            {selectedHall === hall.id && <div className="w-2 h-2 rounded-full bg-[#E1B45D]" />}
                          </div>
                          <span className="text-sm font-medium">{hall.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Comment */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-[#59584D] font-medium">Комментарий</label>
                    <textarea 
                      rows={3}
                      placeholder="Пожелания..."
                      className="w-full px-4 py-2 rounded-lg bg-white border border-[#E2D2A9] text-[#323B12] focus:outline-none focus:border-[#E1B45D] focus:ring-1 focus:ring-[#E1B45D] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="mt-2 w-full bg-[#E1B45D] hover:bg-[#d4a04a] text-[#1a1e08] rounded-lg py-3 text-lg font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Отправить заявку
                  </button>
                </form>

                {/* Footer Phone */}
                <div className="mt-6 text-center border-t border-[#E2D2A9] pt-4">
                  <p className="text-sm text-[#59584D] mb-1">Или позвоните нам напрямую:</p>
                  <a href="tel:+79089086755" className="flex items-center justify-center gap-2 text-[#323B12] hover:text-[#E1B45D] transition-colors font-bold text-xl">
                    <LocalPhoneIcon className="w-5 h-5" />
                    <span>+7 908 908 67 55</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

// --- Main Page Component ---
export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroSlideshowImages = [
    '/images/main-bg-slideshow/main-bg-01.webp?v=new',
    '/images/main-bg-slideshow/main-bg-02.webp?v=new',
    '/images/main-bg-slideshow/main-bg-03.webp?v=new',
    '/images/main-bg-slideshow/main-bg-04.webp?v=new',
  ];

  const { currentIndex, prevIndex } = useSlideshow({ images: heroSlideshowImages, intervalMs: SLIDESHOW_INTERVAL_MS });

  return (
    <div className="bg-[#F9F3D4] relative">
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <main className='pb-24'>
        {/* Hero Section */}
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Slideshow (Full Width) */}
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
                      zIndex: isPrev ? 2 : (isActive ? 1 : 0),
                      opacity: isActive ? 1 : 0, 
                      transition: isPrev 
                        ? `opacity ${SLIDESHOW_CONFIG.crossfadeMs}ms ${SLIDESHOW_CONFIG.fadeEase}` 
                        : 'none',
                      willChange: 'opacity, z-index',
                    }}
                  >
                    <div
                      className={`absolute inset-0 ${shouldAnimate ? 'zoom-animate' : ''}`}
                      style={
                        {
                          '--zoom-from': SLIDESHOW_CONFIG.zoomFrom,
                          '--zoom-to': SLIDESHOW_CONFIG.zoomTo,
                          '--zoom-duration': '24000ms', 
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
                        quality={100}
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

            {/* Main Content - Hero Section (Constrained Width) */}
            <div className="w-full max-w-[1468px] mx-auto flex flex-col items-center justify-center text-center flex-grow px-2 sm:px-8 lg:px-8 xl:px-16 pt-20 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 gap-6 sm:gap-8">
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
                    opacity: 0.45,
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
                    <h1 className="text-2xl sm:text-3xl lg:text-[24px] font-light text-white leading-[1.2] tracking-[0.006em]">
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
                    className="text-xl sm:text-2xl lg:text-[24px] font-normal text-[#F9F3D4] leading-[150%] tracking-[0.006em] text-center px-2"
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
                {/* MOBILE ONLY: Phone Button */}
                <a 
                  href="tel:+79089086755" 
                  className="w-full sm:w-auto inline-flex lg:hidden items-center justify-center gap-2 bg-[#F9F3D4] text-[#323B12] rounded-lg px-6 py-4 sm:px-6 sm:py-3 text-lg sm:text-xl font-bold leading-[1.2] transition-all duration-300 ease-out hover:shadow-lg hover:scale-102 active:scale-100 relative z-10 hover:bg-[#f8e99e]"
                >
                  <LocalPhoneIcon className="w-6 h-6 flex-shrink-0" style={{ fill: '#323B12' }} />
                  <span>+7 908 908 67 55</span>
                </a>

                {/* DESKTOP ONLY: Leave Request Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto hidden lg:inline-flex items-center justify-center gap-2 bg-[#F9F3D4] text-[#323B12] rounded-lg px-6 py-4 sm:px-6 sm:py-3 text-lg sm:text-xl lg:text-[24px] font-bold leading-[1.2] transition-all duration-300 ease-out hover:shadow-lg hover:scale-102 active:scale-100 relative z-10 hover:bg-[#f8e99e] cursor-pointer"
                >
                  <LocalPaperPlaneIcon className="w-6 h-6 flex-shrink-0" style={{ fill: '#323B12' }} />
                  <span>Оставить заявку</span>
                </button>

                <a 
                  href="https://yandex.ru/maps/-/CLvp7Dn-"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F9F3D4] text-[#323B12] rounded-lg px-6 py-4 sm:px-6 sm:py-3 text-lg sm:text-xl lg:text-[24px] font-bold leading-[1.2] transition-all duration-300 ease-out hover:shadow-lg hover:scale-102 active:scale-100 cursor-pointer relative z-10 hover:bg-[#f8e99e]"
                >
                  <LocalLocationIcon className="w-6 h-6 flex-shrink-0" style={{ fill: '#323B12' }} />
                  <span className="text-center">Екатеринбург, ул. Готвальда, 12а</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Halls Container Section - 2 Columns Grid */}
        <section id="rooms" className="relative bg-[#F8F3D7] w-full z-[1]">
          <div className="w-full max-w-[1468px] mx-auto flex flex-col rounded-xl px-2 sm:px-8 lg:px-8 xl:px-16 py-8 sm:py-12 gap-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-2">
              <div className="min-h-[200px] sm:min-h-[250px] lg:min-h-[273px]">
                <HallCard slug="fin" room={roomsBySlug['fin']} />
              </div>
              <div className="min-h-[200px] sm:min-h-[250px] lg:min-h-[273px]">
                <HallCard slug="fin-small" room={roomsBySlug['fin-small']} />
              </div>
              <div className="min-h-[200px] sm:min-h-[250px] lg:min-h-[273px]">
                <HallCard slug="turkey" room={roomsBySlug['turkey']} />
              </div>
              <div className="min-h-[200px] sm:min-h-[250px] lg:min-h-[273px]">
                <HallCard slug="apps" room={roomsBySlug['apps']} />
              </div>
              {/* Last item spans full width on large screens to maintain symmetry */}
              <div className="min-h-[200px] sm:min-h-[250px] lg:min-h-[273px] lg:col-span-2">
                <HallCard slug="new-hall" room={roomsBySlug['new-hall']} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}