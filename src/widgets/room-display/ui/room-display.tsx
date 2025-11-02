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
    <div className="min-h-screen relative bg-black">
      {/* Animated background per room */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`bg-${slug}`} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          transition={{ duration: 0.3 }} 
          className="absolute inset-0 z-0"
        >
          <RoomSlideshow images={room.imagePaths} intervalMs={SLIDESHOW_INTERVAL_MS} />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Section */}
      <section className="relative z-10 w-screen min-h-screen flex flex-col justify-between px-2 py-3 sm:p-6">
        {/* Header + Navigation */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-6">
            <Header bookingPhone={room.phone} />
          </div>
        </div>

        {/* Room Content */}
        <RoomView room={room} slug={slug} />
      </section>
    </div>
  );
}

