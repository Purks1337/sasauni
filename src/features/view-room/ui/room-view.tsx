"use client";
import Image from 'next/image';
import { FeaturePill } from '@/shared/ui/feature-pill';
import { AnimatePresence, motion, PanInfo } from 'framer-motion';
import type { RoomInfo } from '@/entities/room';
import { featuresById } from '@/entities/feature';
import { useState, useRef } from 'react';
import type { SVGProps } from 'react';

// --- Local Icon Components (as per Closed Context rule) ---
const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-10c-4.2 0-8 3.22-8 8.2c0 3.32 2.67 7.25 8 11.8c5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2"/>
  </svg>
);
const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/>
  </svg>
);
const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
    </svg>
);

// --- Yandex Map Component ---
const YandexMap = () => (
  <div className="aspect-video w-full rounded-xl overflow-hidden relative bg-[#1A1A1A]">
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A7c0a68c951fefc429aad64e044daf8463ba15f4dd89626c2768301938452440b&amp;source=constructor"
      className="w-full h-full border-0"
      loading="lazy"
      title="Яндекс Карта с расположением сауны"
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
  const lastWheelTime = useRef(0);

  const imageIndex = (page % images.length + images.length) % images.length;
  const prevIndex = ((page - 1) % images.length + images.length) % images.length;
  const nextIndex = ((page + 1) % images.length + images.length) % images.length;

  const paginate = (newDirection: number) => setPage([page + newDirection, newDirection]);
  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) paginate(1);
    else if (swipe > swipeConfidenceThreshold) paginate(-1);
  };
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 1) {
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

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`content-${slug}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
        exit={{ opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }}
        className="px-6"
      >
        <div className="flex w-full flex-col lg:flex-row lg:gap-x-12 xl:gap-x-16">
          {/* Left Column */}
          <div className="lg:w-[40%] xl:w-[426px] flex-shrink-0 space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-medium text-[#EBE9C6] leading-none">
                {room.title}
              </h1>
              <div className="space-y-1">
                <p className="text-xl font-medium text-[#F7F3C4]">О зале:</p>
                <p className="text-2xl sm:text-3xl lg:text-4xl text-[#CECCB4]">{room.price}</p>
              </div>
            </div>
            
            <div className="space-y-4 text-base text-[#CECCB4]">
              <div className="flex items-start gap-2">
                <LocationIcon className="mt-1 flex-shrink-0 text-white" />
                <span>Тип парной: {room.steamType}</span>
              </div>
              <div className="flex items-start gap-2">
                <LocationIcon className="mt-1 flex-shrink-0 text-white" />
                <span>График работы: {room.workHours}</span>
              </div>
              <div className="flex items-start gap-2">
                <LocationIcon className="mt-1 flex-shrink-0 text-white" />
                <span>{room.fullAddress}</span>
              </div>
              <div className="flex items-start gap-2">
                <UserIcon className="mt-1 flex-shrink-0 text-white" />
                <span>Вместимость: {room.capacityText}</span>
              </div>
              <div className="flex items-start gap-2">
                <PhoneIcon className="mt-1 flex-shrink-0 text-white" />
                <a href={room.phone} className="hover:text-[color:var(--accent)] transition-colors">{room.phone.replace('tel:', '')}</a>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xl font-medium text-[#D9D5A6]">Особенности:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {room.featureIds.map((fid) => {
                  const spec = featuresById[fid];
                  if (!spec) return null;
                  return <FeaturePill key={fid} icon={spec.icon} label={spec.label} />;
                })}
              </div>
            </div>
            
            <div className="space-y-2">
              <a href={room.phone} className="w-full inline-flex items-center justify-center bg-[#EBE9C6] hover:bg-[color:var(--accent)] text-[#131207] rounded-lg px-6 py-3 text-xl font-medium transition-colors">
                Забронировать Зал
              </a>
              <a href={room.mapLink} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center border border-[#EBE9C6]/60 hover:border-[color:var(--accent)] text-[#D9D5A6] hover:text-[color:var(--accent)] rounded-lg px-6 py-3 text-xl font-normal transition-colors">
                Проложить маршрут
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="mt-8 lg:mt-0 lg:flex-1 space-y-8">
            <div className="space-y-3">
              <p className="text-xl font-medium text-[#F7F3C4]">Фотографии зала</p>
              {images && images.length > 0 && (
                <div className="sticky top-28">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl flex items-center justify-center" onWheel={handleWheel}>
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.div
                        key={page}
                        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
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
                        style={{ touchAction: 'pan-y' }}
                      >
                        <Image priority={true} src={images[imageIndex]} alt={`Фото зала ${room.title} #${imageIndex + 1}`} fill sizes="(max-width: 1024px) 100vw, 50vw" quality={80} className="object-cover pointer-events-none" draggable="false" />
                      </motion.div>
                    </AnimatePresence>
                    {images.length > 1 && (
                      <>
                        <div className="absolute inset-0 z-10 flex items-center justify-between p-2 pointer-events-none">
                          <button onClick={() => paginate(-1)} className="size-10 sm:size-12 rounded-full bg-black/40 text-white/80 hover:bg-black/60 hover:text-white transition-all backdrop-blur-sm flex items-center justify-center active:scale-95 pointer-events-auto" aria-label="Предыдущее фото">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 sm:size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button onClick={() => paginate(1)} className="size-10 sm:size-12 rounded-full bg-black/40 text-white/80 hover:bg-black/60 hover:text-white transition-all backdrop-blur-sm flex items-center justify-center active:scale-95 pointer-events-auto" aria-label="Следующее фото">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 sm:size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                        <div className="absolute z-10 bottom-2 right-2 rounded-full bg-black/50 px-3 py-1 text-xs text-white/90 backdrop-blur-sm">
                          {imageIndex + 1} / {images.length}
                        </div>
                      </>
                    )}
                  </div>
                  {images.length > 2 && (
                     <div style={{ position: 'absolute', width: 1, height: 1, top: -9999, left: -9999, pointerEvents: 'none', opacity: 0, visibility: 'hidden' }}>
                        <Image src={images[nextIndex]} alt="" width={1} height={1} priority={false} />
                        <Image src={images[prevIndex]} alt="" width={1} height={1} priority={false} />
                     </div>
                  )}
                </div>
              )}
            </div>
            
            <div className="space-y-3">
              <p className="text-xl font-medium text-[#F7F3C4]">Описание:</p>
              <p className="text-lg text-[#CECCB4] leading-relaxed">
                {room.description}
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xl font-medium text-[#F7F3C4]">Как добраться:</p>
              <YandexMap />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}