"use client";
import { RoomView } from '@/features/view-room';
import { Header } from '@/widgets/header';
import type { RoomInfo } from '@/entities/room';

interface RoomDisplayProps {
  room: RoomInfo;
  slug: string;
}

/**
 * RoomDisplay
 * Widget that combines header, slideshow and room view into a complete room page
 */
export function RoomDisplay({ room, slug }: RoomDisplayProps) {
  return (
    <div className="relative bg-[#F8F3D7]">
      {/* Foreground Content Layer */}
      <div className="relative z-10 flex flex-col">
        <Header bookingPhone={room.phone} />
        
        <main className="w-full flex-grow flex flex-col pb-8 sm:pb-12 lg:pb-16 pt-20 sm:pt-24 lg:pt-32 px-4 sm:px-8 lg:px-16">
          <RoomView room={room} slug={slug} />
        </main>
      </div>
    </div>
  );
}