import { useEffect, useState } from 'react';

interface UseSlideshowOptions {
  images: string[];
  intervalMs: number;
}

/**
 * Hook for managing slideshow state and logic
 */
export function useSlideshow({ images, intervalMs }: UseSlideshowOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload images to avoid decode jank during crossfade
  useEffect(() => {
    setCurrentIndex(0);
    images?.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.decode?.().catch(() => {});
    });
  }, [images]);

  // Set up an interval to cycle through images.
  useEffect(() => {
    if (!images || images.length < 2) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [images, intervalMs]);

  return {
    currentIndex,
    totalImages: images?.length || 0,
  };
}

