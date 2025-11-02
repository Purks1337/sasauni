"use client";
import Image from 'next/image';
import { CSSProperties } from 'react';
import { useSlideshow } from '../model/useSlideshow';
import { SLIDESHOW_CONFIG } from '@/shared/config/ui';

interface RoomSlideshowProps {
  images: string[];
  intervalMs?: number;
}

/**
 * RoomSlideshow
 * Cross-fading background slideshow for room pages.
 * Uses CSS Transitions for crossfade and CSS Animations for zoom for optimal performance.
 */
export function RoomSlideshow({ images, intervalMs = 5000 }: RoomSlideshowProps) {
  const { currentIndex, totalImages } = useSlideshow({ images, intervalMs });

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-x-0 top-0 h-[480px] sm:h-full overflow-hidden sm:fixed sm:inset-0 z-0">
      <div className="relative w-full h-full">
        {images.map((src, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={src}
              className="absolute inset-0 transition-opacity"
              style={{
                // Crossfade between slides based on active index only
                opacity: isActive ? 1 : 0,
                transitionDuration: `${SLIDESHOW_CONFIG.crossfadeMs}ms`,
                transitionTimingFunction: SLIDESHOW_CONFIG.fadeEase,
                willChange: 'opacity',
              }}
            >
              <div
                // The zoom animation is only applied to the active slide.
                className={`absolute inset-0 ${isActive ? 'zoom-animate' : ''}`}
                style={
                  {
                    '--zoom-from': SLIDESHOW_CONFIG.zoomFrom,
                    '--zoom-to': SLIDESHOW_CONFIG.zoomTo,
                    '--zoom-duration': `${intervalMs}ms`, // Zoom lasts the full interval
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
                  quality={70}
                  className="object-cover object-center"
                />
              </div>
            </div>
          );
        })}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute inset-0 sm:hidden bg-gradient-to-t from-black to-transparent pointer-events-none" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/90 via-black/0 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}