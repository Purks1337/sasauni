"use client";
import Image from 'next/image';
import { CSSProperties } from 'react';
import { useSlideshow } from '../model/useSlideshow';
import { SLIDESHOW_CONFIG, SLIDESHOW_INTERVAL_MS } from '@/shared/config/ui';

interface RoomSlideshowProps {
  images: string[];
  intervalMs?: number;
}

/**
 * RoomSlideshow
 * Cross-fading background slideshow for room pages.
 * Updated to use global interval constant and quality 100.
 */
export function RoomSlideshow({ images, intervalMs = SLIDESHOW_INTERVAL_MS }: RoomSlideshowProps) {
  const { currentIndex, prevIndex } = useSlideshow({ images, intervalMs });

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative w-full h-full">
        {images.map((src, index) => {
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
                  alt="Room background"
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
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}