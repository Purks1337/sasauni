"use client";
import Link from 'next/link';
import Image from 'next/image';
import type { RoomInfo, RoomSlug } from '@/entities/room';

interface HallCardProps {
  room: RoomInfo;
  slug: RoomSlug;
}

/**
 * HallCard
 * Reusable hall card component with proper layer structure according to Figma
 * 
 * Layer structure (bottom to top):
 * 1. hall-cover-{name} - cover image (always 100% for X and Y)
 * 2. hall-filter-{name}-gradient - gradient overlay (absolute, 100%)
 * 3. hall-filter-{name}-color - color overlay (absolute, 100%)
 * 4. hall-heading-wrapper - title and price (z-index above)
 */
export function HallCard({ room, slug }: HallCardProps) {
  const hasCoverImage = room.coverImage && room.status !== 'coming-soon';
  
  return (
    <Link 
      href={`/rooms/${slug}`} 
      className="group relative block overflow-hidden rounded-lg text-[#F7F3C4] no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#F8F3D7] focus:ring-[color:var(--accent)] h-full w-full"
    >
      <div 
        className="relative w-full h-full flex flex-col justify-end p-6 min-h-[200px] sm:min-h-[250px] lg:min-h-[273px]"
        style={{ gap: '24px' }}
      >
        {hasCoverImage ? (
          <>
            {/* Layer 1: hall-cover-{name} - Cover image (always 100% for X and Y) */}
            <div className="absolute inset-0" style={{ zIndex: 1 }}>
              <Image
                src={room.coverImage!}
                alt={`Обложка зала ${room.title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                priority={false}
              />
            </div>
            
            {/* Layer 2: hall-filter-{name}-gradient - Gradient overlay (always 100% for X and Y) */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 25%, rgba(0, 0, 0, 0) 50%)',
                zIndex: 2,
              }}
            />
            
            {/* Layer 3: hall-filter-{name}-color - Color overlay (always 100% for X and Y) */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundColor: 'rgba(245, 240, 153, 0.5)',
                zIndex: 3,
              }}
            />
          </>
        ) : (
          /* For coming-soon halls without cover image - only solid color #807D52 */
          <div 
            className="absolute inset-0"
            style={{
              backgroundColor: '#807D52',
              zIndex: 1,
            }}
          />
        )}
        
        {/* Layer 4: hall-heading-wrapper - Title and price (z-index above filters, below header) */}
        <div className="relative flex flex-col self-stretch" style={{ zIndex: 10, position: 'relative' }}>
          <h3 className="text-[36px] font-medium text-[#F7F3C4] leading-[1.2] tracking-[0.006em]">
            {room.title}
          </h3>
          <p className="text-[24px] font-normal text-[#F7F3C4] leading-[1.2] tracking-[0.006em] mt-0">
            {room.price}
          </p>
        </div>
      </div>
    </Link>
  );
}

