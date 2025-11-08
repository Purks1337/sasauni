"use client";
import { RoomSlideshow } from '@/features/room-slideshow';
import { RoomView } from '@/features/view-room';
import { Header } from '@/widgets/header';
import { AnimatePresence, motion } from 'framer-motion';
import type { RoomInfo } from '@/entities/room';
import { SLIDESHOW_INTERVAL_MS } from '@/shared/config/ui';

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
    <div className="relative min-h-screen bg-black">
      {/* Background Slideshow Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div 
            key={`bg-${slug}`} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.3 }} 
            className="absolute inset-0"
          >
            <RoomSlideshow images={room.imagePaths} intervalMs={SLIDESHOW_INTERVAL_MS} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Foreground Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header bookingPhone={room.phone} />
        
        <main className="w-full flex-grow flex flex-col px-2 sm:px-6 lg:px-8 pb-16 pt-8 sm:pt-16">
          <RoomView room={room} slug={slug} />
        </main>
      </div>
    </div>
  );
}