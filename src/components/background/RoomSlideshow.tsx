"use client";
import Image from 'next/image';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import { SLIDESHOW_CONFIG } from '@/config/ui';

/**
 * RoomSlideshow
 * Cross-fading background slideshow for room pages.
 *
 * Props:
 * - images: string[] absolute public paths to images under /public
 * - intervalMs: number duration each image stays visible before crossfade starts
 */
export function RoomSlideshow({ images, intervalMs = 5000 }: { images: string[]; intervalMs?: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [firstLoaded, setFirstLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const startRef = useRef<number>(performance.now());

  // Reset state when images list changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setFirstLoaded(false);
    startRef.current = performance.now();
  }, [images]);

  useEffect(() => {
    if (!firstLoaded || images.length === 0) return;
    const id = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [firstLoaded, images, intervalMs]);

  // Shared zoom value driven by RAF so both layers have identical scale at any moment (continuous loop)
  useEffect(() => {
    let raf = 0;
    const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t); // easeInOutQuad
    const tick = () => {
      const elapsed = performance.now() - startRef.current;
      const loop = SLIDESHOW_CONFIG.zoomMs;
      const progress = ((elapsed % loop) / loop);
      const eased = easeInOut(progress);
      const scale = SLIDESHOW_CONFIG.zoomFrom + (SLIDESHOW_CONFIG.zoomTo - SLIDESHOW_CONFIG.zoomFrom) * eased;
      if (containerRef.current) {
        containerRef.current.style.setProperty('--zoom-current', String(scale));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
      <div className="relative w-full h-full">
        {images.map((src, index) => {
          const layerStyle: CSSProperties = {
            transitionProperty: 'opacity',
            transitionDuration: `${SLIDESHOW_CONFIG.crossfadeMs}ms`,
            transitionTimingFunction: SLIDESHOW_CONFIG.fadeEase,
          };
          const isActive = index === currentImageIndex;
          return (
            <div
              key={src}
              className={`absolute inset-0 will-change-[opacity] ${isActive ? 'opacity-100' : 'opacity-0'}`}
              style={layerStyle}
            >
              <div style={{ transform: 'scale(var(--zoom-current, 1))', willChange: 'transform' }} className="absolute inset-0">
                <Image
                  src={src}
                  alt="Room background"
                  fill
                  sizes="100vw"
                  priority={index === 0}
                  loading="eager"
                  onLoad={() => { if (index === 0) setFirstLoaded(true); }}
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


