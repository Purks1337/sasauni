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

      {/* Header + Navigation */}
      <Header bookingPhone={room.phone} />

      {/* Main Content Section */}
      <section className="relative z-10 w-full px-2 sm:px-6">
        {/* Room Content */}
        <RoomView room={room} slug={slug} />
      </section>
    </div>
  );
}