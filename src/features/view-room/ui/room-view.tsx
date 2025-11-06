"use client";
import Image from 'next/image';
import { FeaturePill } from '@/shared/ui/feature-pill';
import { AnimatePresence, motion, PanInfo } from 'framer-motion';
import type { RoomInfo } from '@/entities/room';
import { featuresById } from '@/entities/feature';
import { useState, useRef } from 'react';

interface RoomViewProps {
  room: RoomInfo;
  slug: string;
}

const swipeConfidenceThreshold = 5000; // Adjusted for a good balance
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

/**
 * RoomView
 * Component for displaying room information (title, description, features, etc.)
 */
export function RoomView({ room, slug }: RoomViewProps) {
  const { imagePaths: images } = room;
  const [[page, direction], setPage] = useState([0, 0]);
  const lastWheelTime = useRef(0);

  const imageIndex = (page % images.length + images.length) % images.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    // Primarily for horizontal scroll on trackpads
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 1) {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime.current < 400) return; // Throttle wheel events

      if (e.deltaX > 1) {
        paginate(1);
      } else if (e.deltaX < -1) {
        paginate(-1);
      }
      lastWheelTime.current = now;
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div className="max-w-7xl mx-auto w-full flex items-start mt-auto">
      <div className="w-full max-w-2xl">
        {/* Main Content Block with per-slug enter animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${slug}`}
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } } }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Location, Capacity, and Phone */}
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row items-start sm:items-center flex-wrap gap-y-3 gap-x-6">
              <div className="flex items-center gap-1">
                <Image src="/images/location-icon.svg" alt="Location" width={18} height={18} />
                <a
                  href="https://yandex.ru/maps/-/CLrLJE2Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D9D5A6] text-sm sm:text-base ml-1 hover:text-[color:var(--accent)] transition-colors"
                >
                  {room.address}
                </a>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/images/user-icon.svg" alt="Users" width={18} height={18} />
                <span className="text-[#D9D5A6] text-sm sm:text-base ml-1">Вместимость: {room.capacity} человек</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/images/phone-icon.svg" alt="Телефон" width={18} height={18} />
                <a href={room.phone} className="text-[#D9D5A6] text-sm sm:text-base ml-1">
                  +7 908 908 67 55
                </a>
              </div>
            </motion.div>

            {/* Title and Description */}
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#EBE9C6] leading-[1.2]">
                {room.title}
              </h2>
              <p className="text-lg sm:text-xl text-[#C2C0A4] leading-[1.5] tracking-[0.006em]">
                {room.description}
              </p>
            </motion.div>

            {/* Gallery */}
            {images && images.length > 0 && (
              <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
                <div 
                  className="relative aspect-video w-full overflow-hidden rounded-xl flex items-center justify-center"
                  onWheel={handleWheel}
                >
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={page}
                      className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={handleDragEnd}
                      style={{ touchAction: 'pan-y' }}
                    >
                      <Image
                        src={images[imageIndex]}
                        alt={`Фото зала ${room.title} #${imageIndex + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 672px"
                        quality={80}
                        className="object-cover pointer-events-none"
                        draggable="false"
                      />
                    </motion.div>
                  </AnimatePresence>
                  
                  {images.length > 1 && (
                    <>
                      {/* THIS IS THE FIX: pointer-events-none on container, pointer-events-auto on buttons */}
                      <div className="absolute inset-0 z-10 flex items-center justify-between p-2 pointer-events-none">
                        <button
                          onClick={() => paginate(-1)}
                          className="size-10 sm:size-12 rounded-full bg-black/40 text-white/80 hover:bg-black/60 hover:text-white transition-all backdrop-blur-sm flex items-center justify-center active:scale-95 pointer-events-auto"
                          aria-label="Предыдущее фото"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="size-5 sm:size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => paginate(1)}
                          className="size-10 sm:size-12 rounded-full bg-black/40 text-white/80 hover:bg-black/60 hover:text-white transition-all backdrop-blur-sm flex items-center justify-center active:scale-95 pointer-events-auto"
                          aria-label="Следующее фото"
                        >
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
              </motion.div>
            )}

            {/* Features */}
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="space-y-3">
              <p className="text-[#D9D5A6] text-xl">Особенности:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {room.featureIds.map((fid) => {
                  const spec = featuresById[fid];
                  if (!spec) return null;
                  return (
                    <FeaturePill key={fid} icon={spec.icon} label={spec.label} />
                  );
                })}
              </div>
            </motion.div>

            {/* Contact and Book Button */}
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a href={room.phone} className="bg-[#EBE9C6] hover:bg-[color:var(--accent)] text-[#131207] rounded-xl px-6 py-3 text-lg sm:text-xl font-normal transition-colors">
                Забронировать Зал
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}