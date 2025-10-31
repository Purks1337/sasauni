"use client";
import Image from 'next/image';
import { CSSProperties, useEffect, useState } from 'react';
import { SLIDESHOW_CONFIG } from '@/config/ui';

/**
 * RoomSlideshow
 * Cross-fading background slideshow for room pages.
 * Uses CSS Transitions for crossfade and CSS Animations for zoom for optimal performance.
 *
 * Props:
 * - images: string[] absolute public paths to images under /public
 * - intervalMs: number duration each image stays visible before crossfade starts
 */
export function RoomSlideshow({ images, intervalMs = 5000 }: { images: string[]; intervalMs?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedMap, setLoadedMap] = useState<Record<string, boolean>>({});

  // Preload images to avoid decode jank during crossfade
  useEffect(() => {
    setCurrentIndex(0);
    setLoadedMap({});
    images?.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      // decode() is supported in modern browsers; ignore errors
      img.decode?.().catch(() => {});
    });
  }, [images]);

  // Set up an interval to cycle through images.
  // This just updates the state, CSS handles the actual animation.
  useEffect(() => {
    if (!images || images.length < 2) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [images, intervalMs]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="relative w-full h-full">
        {images.map((src, index) => {
          const isActive = index === currentIndex;
          const isLoaded = !!loadedMap[src];
          return (
            <div
              key={src}
              className="absolute inset-0 transition-opacity"
              style={{
                // Prevent initial pop-in: do not show the active slide until its image has loaded
                opacity: isActive && isLoaded ? 1 : 0,
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
                  onLoadingComplete={() => {
                    setLoadedMap((prev) => ({ ...prev, [src]: true }));
                  }}
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