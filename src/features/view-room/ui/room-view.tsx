"use client";
import Image from 'next/image';
import { FeaturePill } from '@/shared/ui/feature-pill';
import { AnimatePresence, motion, PanInfo } from 'framer-motion';
import type { RoomInfo } from '@/entities/room';
import { featuresById } from '@/entities/feature';
import { useState, useRef, useEffect, useCallback } from 'react';
import type { SVGProps } from 'react';

// --- Local Icon Components (as per Closed Context rule) ---
const SteamTypeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M3.462 15.75C3.1165 15.75 2.82825 15.6345 2.59725 15.4035C2.36625 15.1725 2.2505 14.8843 2.25 14.5388V3.46125C2.25 3.11625 2.36575 2.82825 2.59725 2.59725C2.82875 2.36625 3.11675 2.2505 3.46125 2.25H14.5388C14.8838 2.25 15.1718 2.36575 15.4028 2.59725C15.6338 2.82875 15.7495 3.117 15.75 3.462V14.5388C15.75 14.8838 15.6343 15.172 15.4028 15.4035C15.1713 15.635 14.8833 15.7505 14.5388 15.75H3.462ZM3 11.625V14.5388C3 14.6733 3.04325 14.7837 3.12975 14.8702C3.21625 14.9567 3.327 15 3.462 15H4.875V13.1827H4.21125V11.625H3ZM3 10.875H4.212V10.5577C4.212 10.4127 4.262 10.2898 4.362 10.1888C4.4625 10.0888 4.5855 10.0388 4.731 10.0388V8.25C4.731 8.005 4.8185 7.79475 4.9935 7.61925C5.1695 7.44375 5.38 7.356 5.625 7.356H7.125C7.37 7.356 7.58025 7.4435 7.75575 7.6185C7.93125 7.794 8.019 8.0045 8.019 8.25V10.038C8.164 10.038 8.287 10.0883 8.388 10.1888C8.488 10.2893 8.538 10.4122 8.538 10.5577V10.875H15V3.462C15 3.327 14.9567 3.21625 14.8702 3.12975C14.7837 3.04325 14.6733 3 14.5388 3H3.46125C3.32675 3 3.21625 3.04325 3.12975 3.12975C3.04325 3.21625 3 3.327 3 3.462V10.875ZM6.375 6.606C6.13 6.606 5.91975 6.51825 5.74425 6.34275C5.56875 6.16725 5.481 5.95675 5.481 5.71125C5.481 5.46575 5.5685 5.2555 5.7435 5.0805C5.9185 4.9055 6.129 4.81775 6.375 4.81725C6.621 4.81675 6.83125 4.9045 7.00575 5.0805C7.18025 5.2565 7.268 5.46675 7.269 5.71125C7.27 5.95575 7.1825 6.16625 7.0065 6.34275C6.8305 6.51925 6.62 6.6075 6.375 6.606ZM6.02925 15H6.7215V13.1827H6.02925V15ZM7.875 15H14.5388C14.6733 15 14.7837 14.9567 14.8702 14.8702C14.9567 14.7837 15 14.6733 15 14.5388V11.625H8.53875V13.1827H7.875V15ZM9.447 7.269C9.453 7.2315 9.459 7.177 9.465 7.1055C9.471 7.034 9.47425 6.95925 9.47475 6.88125C9.47475 6.71475 9.43925 6.55725 9.36825 6.40875C9.29775 6.25925 9.17025 6.06875 8.98575 5.83725C8.81725 5.61875 8.691 5.40275 8.607 5.18925C8.523 4.97575 8.481 4.7585 8.481 4.5375C8.481 4.457 8.4825 4.378 8.4855 4.3005C8.488 4.223 8.50175 4.1165 8.52675 3.981H9.17625C9.16075 4.0705 9.1515 4.15775 9.1485 4.24275C9.1455 4.32775 9.144 4.426 9.144 4.5375C9.144 4.704 9.1795 4.86475 9.2505 5.01975C9.321 5.17475 9.42975 5.33725 9.57675 5.50725C9.78275 5.75325 9.93075 5.98825 10.0208 6.21225C10.1113 6.43725 10.1565 6.66025 10.1565 6.88125C10.1565 6.96125 10.155 7.0305 10.152 7.089C10.1495 7.1475 10.1405 7.2075 10.125 7.269H9.447ZM11.322 7.269C11.328 7.2315 11.334 7.177 11.34 7.1055C11.346 7.034 11.3493 6.95925 11.3498 6.88125C11.3498 6.71475 11.3143 6.55725 11.2433 6.40875C11.1728 6.25925 11.0452 6.06875 10.8607 5.83725C10.6922 5.61875 10.566 5.40275 10.482 5.18925C10.398 4.97575 10.356 4.7585 10.356 4.5375C10.356 4.457 10.3572 4.378 10.3597 4.3005C10.3627 4.223 10.3768 4.1165 10.4018 3.981H11.0505C11.0355 4.0705 11.0265 4.15775 11.0235 4.24275C11.0205 4.32775 11.019 4.426 11.019 4.5375C11.019 4.704 11.0545 4.86475 11.1255 5.01975C11.196 5.17475 11.3048 5.33725 11.4518 5.50725C11.6578 5.75325 11.8058 5.98825 11.8958 6.21225C11.9863 6.43725 12.0315 6.66025 12.0315 6.88125C12.0315 6.96125 12.03 7.0305 12.027 7.089C12.0245 7.1475 12.0155 7.2075 12 7.269H11.322ZM13.2345 7.269C13.2405 7.222 13.2465 7.165 13.2525 7.098C13.259 7.0315 13.2623 6.95925 13.2623 6.88125C13.2623 6.71475 13.2268 6.55725 13.1558 6.40875C13.0853 6.25925 12.9578 6.06875 12.7733 5.83725C12.6048 5.61875 12.4785 5.40275 12.3945 5.18925C12.3105 4.97575 12.2685 4.7585 12.2685 4.5375C12.2685 4.457 12.2698 4.378 12.2723 4.3005C12.2753 4.223 12.2893 4.1165 12.3143 3.981H12.963C12.948 4.0705 12.939 4.15775 12.936 4.24275C12.933 4.32775 12.9315 4.426 12.9315 4.5375C12.9315 4.704 12.967 4.86475 13.038 5.01975C13.1085 5.17475 13.2173 5.33725 13.3643 5.50725C13.5703 5.75325 13.7185 5.98825 13.809 6.21225C13.899 6.43725 13.944 6.66025 13.944 6.88125C13.944 6.96125 13.9427 7.0305 13.9402 7.089C13.9372 7.1475 13.928 7.2075 13.9125 7.269H13.2345Z" fill="currentColor"/>
    </svg>
);
const WorkHoursIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M6 3H12V1.5H13.5V3H14.25C14.6478 3 15.0294 3.15804 15.3107 3.43934C15.592 3.72064 15.75 4.10218 15.75 4.5V15C15.75 15.3978 15.592 15.7794 15.3107 16.0607C15.0294 16.342 14.6478 16.5 14.25 16.5H3.75C3.35218 16.5 2.97064 16.342 2.68934 16.0607C2.40804 15.7794 2.25 15.3978 2.25 15V4.5C2.25 4.10218 2.40804 3.72064 2.68934 3.43934C2.97064 3.15804 3.35218 3 3.75 3H4.5V1.5H6V3ZM3.75 6V15H14.25V6H3.75ZM5.25 8.25H6.75V9.75H5.25V8.25ZM8.25 8.25H9.75V9.75H8.25V8.25ZM11.25 8.25H12.75V9.75H11.25V8.25ZM11.25 11.25H12.75V12.75H11.25V11.25ZM8.25 11.25H9.75V12.75H8.25V11.25ZM5.25 11.25H6.75V12.75H5.25V11.25Z" fill="currentColor"/>
    </svg>
);
const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-10c-4.2 0-8 3.22-8 8.2c0 3.32 2.67 7.25 8 11.8c5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2"/>
  </svg>
);
const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/>
  </svg>
);
const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
    </svg>
);

// --- Yandex Map Component ---
const YandexMap = () => (
  <div className="aspect-video w-full rounded-xl overflow-hidden relative bg-[#E2D2A9]">
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A7c0a68c951fefc429aad64e044daf8463ba15f4dd89626c2768301938452440b&source=constructor"
      className="w-full h-full border-0"
      loading="lazy"
      title="Яндекс Карта с расположением оздоровительного центра"
    />
  </div>
);

// --- Main Component ---
interface RoomViewProps {
  room: RoomInfo;
  slug: string;
}

const swipeConfidenceThreshold = 5000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

export function RoomView({ room, slug }: RoomViewProps) {
  const { imagePaths: images } = room;
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const lastWheelTime = useRef(0);

  const imageIndex = (page % images.length + images.length) % images.length;
  const prevIndex = ((page - 1) % images.length + images.length) % images.length;
  const nextIndex = ((page + 1) % images.length + images.length) % images.length;

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  // Autoplay Effect
  useEffect(() => {
    if (isAutoPlayPaused || !images || images.length < 2) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoPlayPaused, images, paginate]);

  const handleInteraction = () => {
    setIsAutoPlayPaused(true);
  };

  const goToPage = (newPageIndex: number) => {
    handleInteraction();
    const currentImageIndex = (page % images.length + images.length) % images.length;
    if (newPageIndex === currentImageIndex) return;
    const pageDiff = newPageIndex - currentImageIndex;
    const potentialPage1 = page + pageDiff;
    const potentialPage2 = pageDiff > 0 ? potentialPage1 - images.length : potentialPage1 + images.length;
    const newPage = Math.abs(page - potentialPage1) < Math.abs(page - potentialPage2) ? potentialPage1 : potentialPage2;
    setPage([newPage, newPage > page ? 1 : -1]);
  };
  
  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    handleInteraction();
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) paginate(1);
    else if (swipe > swipeConfidenceThreshold) paginate(-1);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 1) {
      handleInteraction();
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime.current < 400) return;
      if (e.deltaX > 1) paginate(1);
      else if (e.deltaX < -1) paginate(-1);
      lastWheelTime.current = now;
    }
  };

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? '100%' : '-100%', opacity: 0 }),
  };

  const formattedPhone = room.phone.replace('tel:+7', '+7 ').replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`content-${slug}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
        exit={{ opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }}
      >
        <div className="flex w-full flex-col min-[1140px]:flex-row min-[1140px]:gap-x-12 xl:gap-x-16">
          {/* Left Column */}
          <div className="min-[1140px]:w-[48%] xl:w-[600px] flex-shrink-0 space-y-6 sm:space-y-8 flex flex-col order-1 min-[1140px]:order-none">
            <div className="space-y-3 order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-medium text-[#1A1E08] leading-tight">
                {room.title}
              </h1>
            </div>
            
            {/* Gallery on mobile - between title and "О зале" */}
            <div className="min-[1140px]:hidden order-2 space-y-3">
              <p className="text-2xl sm:text-3xl font-medium text-[#1A1E08]">Фотографии зала</p>
              {images && images.length > 0 ? (
                <div>
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl flex items-center justify-center bg-[#E2D2A9]">
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.div
                        key={page}
                        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-pan-y"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={handleDragEnd}
                      >
                        <Image 
                          priority={true} 
                          src={images[imageIndex]} 
                          alt={`Фото зала ${room.title} #${imageIndex + 1}`} 
                          fill 
                          sizes="100vw" 
                          quality={80} 
                          className="object-cover pointer-events-none" 
                          draggable="false"
                        />
                      </motion.div>
                    </AnimatePresence>
                    {images.length > 1 && (
                      <>
                        <div className="absolute inset-0 z-10 flex items-center justify-between p-2 pointer-events-none">
                          <button onClick={() => { handleInteraction(); paginate(-1); }} className="size-10 sm:size-12 rounded-full bg-[#1A1E08]/40 text-[#F8F3D7]/80 hover:bg-[#1A1E08]/60 hover:text-[#F8F3D7] transition-all backdrop-blur-sm flex items-center justify-center active:scale-95 pointer-events-auto" aria-label="Предыдущее фото">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 sm:size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button onClick={() => { handleInteraction(); paginate(1); }} className="size-10 sm:size-12 rounded-full bg-[#1A1E08]/40 text-[#F8F3D7]/80 hover:bg-[#1A1E08]/60 hover:text-[#F8F3D7] transition-all backdrop-blur-sm flex items-center justify-center active:scale-95 pointer-events-auto" aria-label="Следующее фото">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 sm:size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {images.length > 1 && (
                    <div className="mt-4 flex gap-2 overflow-x-auto hide-scrollbar px-2 sm:px-0">
                      {images.map((imgSrc, index) => (
                        <button
                          key={imgSrc}
                          onClick={() => goToPage(index)}
                          aria-label={`Переключить на фото ${index + 1}`}
                          className={`relative aspect-square w-16 h-16 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none flex-shrink-0 bg-[#E2D2A9] ${
                            imageIndex === index
                              ? 'opacity-100 ring-2 ring-[color:var(--accent)]'
                              : 'opacity-60 hover:opacity-100'
                          }`}
                        >
                          <Image
                            src={imgSrc}
                            alt={`Миниатюра фото ${index + 1}`}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {images.length > 2 && (
                    <div className="absolute w-px h-px -top-[9999px] -left-[9999px] pointer-events-none opacity-0 invisible">
                      <Image src={images[nextIndex]} alt="" width={1} height={1} priority={false} />
                      <Image src={images[prevIndex]} alt="" width={1} height={1} priority={false} />
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative aspect-video w-full overflow-hidden rounded-xl flex items-center justify-center bg-[#E2D2A9] border-2 border-dashed border-[#e1b45d]">
                  <div className="text-center px-6">
                    <p className="text-2xl font-medium text-[#1A1E08] mb-2">Дорогие гости, этот зал скоро откроется абсолютно новым после капитального ремонта.</p>
                    <p className="text-xl text-[#323b12]">Забронировать и занять своё время на новогодние праздники вы можете уже сейчас, позвонив нам</p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-1 order-3">
              <p className="text-2xl sm:text-3xl font-medium text-[#1A1E08]">О зале:</p>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#323b12]">{room.price}</p>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-xl sm:text-xl text-[#323b12] order-4">
              <div className="flex items-start gap-2">
                <SteamTypeIcon className="mt-0.5 sm:mt-1 flex-shrink-0 text-[#1A1E08] w-6 h-6" fill="#1A1E08" />
                <span>Тип парной: {room.steamType}</span>
              </div>
              <div className="flex items-start gap-2">
                <WorkHoursIcon className="mt-0.5 sm:mt-1 flex-shrink-0 text-[#1A1E08] w-6 h-6" fill="#1A1E08" />
                <span>График работы: {room.workHours}</span>
              </div>
              <div className="flex items-start gap-2">
                <LocationIcon className="mt-0.5 sm:mt-1 flex-shrink-0 text-[#1A1E08] w-6 h-6" />
                <span>{room.fullAddress}</span>
              </div>
              <div className="flex items-start gap-2">
                <UserIcon className="mt-0.5 sm:mt-1 flex-shrink-0 text-[#1A1E08] w-6 h-6" />
                <span>Вместимость: {room.capacityText}</span>
              </div>
              <div className="flex items-start gap-2">
                <PhoneIcon className="mt-0.5 sm:mt-1 flex-shrink-0 text-[#1A1E08] w-6 h-6" />
                <a href={room.phone} className="hover:text-[color:var(--accent)] transition-colors break-all">{formattedPhone}</a>
              </div>
            </div>

            <div className="space-y-3 order-5">
              <p className="text-2xl sm:text-3xl font-medium text-[#1A1E08]">Особенности:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {room.featureIds.map((fid) => {
                  const spec = featuresById[fid];
                  if (!spec) return null;
                  return <FeaturePill key={fid} icon={spec.icon} label={spec.label} />;
                })}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 order-6">
              <a href={room.phone} className="flex-1 whitespace-nowrap inline-flex items-center justify-center bg-[#e1b45d] hover:bg-[#d4a04a] text-[#1a1e08] rounded-lg px-4 sm:px-6 py-2.5 sm:py-3 text-lg sm:text-xl font-medium transition-colors">
                Забронировать Зал
              </a>
              <a href={room.mapLink} target="_blank" rel="noopener noreferrer" className="flex-1 whitespace-nowrap inline-flex items-center justify-center border border-[#E2D2A9] hover:border-[color:var(--accent)] text-[#1A1E08] hover:text-[color:var(--accent)] rounded-lg px-4 sm:px-6 py-2.5 sm:py-3 text-lg sm:text-xl font-normal transition-colors">
                Проложить маршрут
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="mt-6 sm:mt-8 min-[1140px]:mt-0 min-[1140px]:flex-1 space-y-6 sm:space-y-8 min-w-0 hidden min-[1140px]:block">
            <div className="space-y-3">
              <p className="text-2xl sm:text-3xl font-medium text-[#1A1E08]">Фотографии зала</p>
              {images && images.length > 0 ? (
                    <div className="sticky top-20 sm:top-24 lg:top-28" onWheel={handleWheel}>
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl flex items-center justify-center bg-[#E2D2A9]">
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.div
                        key={page}
                        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-pan-y"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={handleDragEnd}
                      >
                        <Image 
                          priority={true} 
                          src={images[imageIndex]} 
                          alt={`Фото зала ${room.title} #${imageIndex + 1}`} 
                          fill 
                          sizes="(max-width: 1024px) 100vw, 50vw" 
                          quality={80} 
                          className="object-cover pointer-events-none" 
                          draggable="false"
                        />
                      </motion.div>
                    </AnimatePresence>
                    {images.length > 1 && (
                      <>
                        <div className="absolute inset-0 z-10 flex items-center justify-between p-2 pointer-events-none">
                          <button onClick={() => { handleInteraction(); paginate(-1); }} className="size-10 sm:size-12 rounded-full bg-[#1A1E08]/40 text-[#F8F3D7]/80 hover:bg-[#1A1E08]/60 hover:text-[#F8F3D7] transition-all backdrop-blur-sm flex items-center justify-center active:scale-95 pointer-events-auto" aria-label="Предыдущее фото">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 sm:size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button onClick={() => { handleInteraction(); paginate(1); }} className="size-10 sm:size-12 rounded-full bg-[#1A1E08]/40 text-[#F8F3D7]/80 hover:bg-[#1A1E08]/60 hover:text-[#F8F3D7] transition-all backdrop-blur-sm flex items-center justify-center active:scale-95 pointer-events-auto" aria-label="Следующее фото">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 sm:size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {images.length > 1 && (
                    <div className="mt-4 flex gap-2 overflow-x-auto hide-scrollbar px-2 sm:px-0">
                      {images.map((imgSrc, index) => (
                        <button
                          key={imgSrc}
                          onClick={() => goToPage(index)}
                          aria-label={`Переключить на фото ${index + 1}`}
                          className={`relative aspect-square w-16 h-16 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none flex-shrink-0 bg-[#E2D2A9] ${
                            imageIndex === index
                              ? 'opacity-100 ring-2 ring-[color:var(--accent)]'
                              : 'opacity-60 hover:opacity-100'
                          }`}
                        >
                          <Image
                            src={imgSrc}
                            alt={`Миниатюра фото ${index + 1}`}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {images.length > 2 && (
                     <div className="absolute w-px h-px -top-[9999px] -left-[9999px] pointer-events-none opacity-0 invisible">
                        <Image src={images[nextIndex]} alt="" width={1} height={1} priority={false} />
                        <Image src={images[prevIndex]} alt="" width={1} height={1} priority={false} />
                     </div>
                  )}
                </div>
              ) : (
                <div className="sticky top-28">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl flex items-center justify-center bg-[#E2D2A9] border-2 border-dashed border-[#e1b45d]">
                    <div className="text-center px-6">
                      <p className="text-2xl font-medium text-[#1A1E08] mb-2">Дорогие гости, этот зал скоро откроется абсолютно новым после капитального ремонта.</p>
                      <p className="text-xl text-[#323b12]">Забронировать и занять своё время на новогодние праздники вы можете уже сейчас, позвонив нам</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-3">
              <p className="text-2xl sm:text-3xl font-medium text-[#1A1E08]">Описание:</p>
              <p className="text-xl sm:text-xl text-[#323b12] leading-relaxed">
                {room.description}
              </p>
            </div>

            <div id="map" className="space-y-3">
              <p className="text-2xl sm:text-3xl font-medium text-[#1A1E08]">Как добраться:</p>
              <YandexMap />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}