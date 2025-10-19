"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const backgroundImages = [
  '/images/fin-sauna/DSC03884.JPG',
  '/images/fin-sauna/DSC03943.JPG',
  '/images/fin-sauna/DSC03972.JPG',
];

export function AnimatedBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Switch every 5 seconds for slower transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="relative w-full h-full">
        {backgroundImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              index === currentImageIndex 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt="Sauna background"
              fill
              className={`object-cover transition-transform duration-[5000ms] ease-out ${
                index === currentImageIndex 
                  ? 'animate-zoom-out' 
                  : 'scale-110'
              }`}
              priority={index === 0}
            />
          </div>
        ))}
        {/* Base dark overlay 40% opacity */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Mobile: vertical gradient from bottom */}
        <div className="absolute inset-0 sm:hidden bg-gradient-to-t from-black to-transparent" />
        {/* Desktop: horizontal gradient from right */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/90 via-black/0 to-transparent" />
      </div>
    </div>
  );
}
