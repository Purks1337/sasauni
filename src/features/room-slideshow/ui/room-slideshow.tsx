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
  const { currentIndex } = useSlideshow({ images, intervalMs });

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative w-full h-full">
        {images.map((src, index) => {
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
                    '--zoom-duration': `${intervalMs}ms`,
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
        {/* Overlays as per Figma specs */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}