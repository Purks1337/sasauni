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
      className="group relative block overflow-hidden rounded-lg text-[#F7F3C4] no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#F8F3D7] focus:ring-[color:var(--accent)] h-full w-full transition-transform duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
    >
      <div className="relative w-full h-full flex flex-col justify-end p-6 min-h-[200px] sm:min-h-[250px] lg:min-h-[273px] gap-6">
        {hasCoverImage ? (
          <>
            {/* Layer 1: hall-cover-{name} - Cover image (always 100% for X and Y) */}
            <div className="absolute inset-0 z-[1] overflow-hidden">
              <Image
                src={room.coverImage!}
                alt={`Обложка зала ${room.title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                priority={false}
              />
            </div>
            
            {/* Layer 2: hall-filter-{name}-gradient - Gradient overlay (always 100% for X and Y) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-[2] transition-opacity duration-500 ease-out group-hover:opacity-75" />
            
            {/* Layer 3: hall-filter-{name}-color - Color overlay (always 100% for X and Y) */}
            <div className="absolute inset-0 bg-[rgba(245,240,153,0.5)] z-[3] transition-opacity duration-500 ease-out group-hover:opacity-70" />
          </>
        ) : (
          /* For coming-soon halls without cover image - only solid color #807D52 */
          <div className="absolute inset-0 bg-[#807D52] z-[1] transition-opacity duration-300 ease-out group-hover:opacity-90" />
        )}
        
        {/* Layer 4: hall-heading-wrapper - Title and price (z-index above filters, below header) */}
        <div className="relative flex flex-col self-stretch z-10">
          <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-medium text-[#F7F3C4] leading-[1.2] tracking-[0.006em]">
            {room.title}
          </h3>
          <p className="text-lg sm:text-xl lg:text-[24px] font-normal text-[#F7F3C4] leading-[1.2] tracking-[0.006em] mt-0">
            {room.price}
          </p>
        </div>
      </div>
    </Link>
  );
}

