"use client";
import Image from 'next/image';
import { PhoneIcon } from '@/shared/ui/icons';
import { FeaturePill } from '@/shared/ui/feature-pill';
import { AnimatePresence, motion } from 'framer-motion';
import type { RoomInfo } from '@/entities/room';
import { featuresById } from '@/entities/feature';

interface RoomViewProps {
  room: RoomInfo;
  slug: string;
}

/**
 * RoomView
 * Component for displaying room information (title, description, features, etc.)
 */
export function RoomView({ room, slug }: RoomViewProps) {
  return (
    <div className="max-w-7xl mx-auto w-full flex items-start pt-0 mt-[240px] sm:mt-0">
      <div className="w-full max-w-2xl">
        {/* Main Content Block with per-slug enter animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${slug}`}
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } } }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Title and Description */}
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#EBE9C6] leading-[1.2]">
                {room.title}
              </h2>
              <p className="text-lg sm:text-xl text-[#C2C0A4] leading-[1.5] tracking-[0.006em]">
                {room.description}
              </p>
            </motion.div>

            {/* Location and Capacity */}
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-1">
                <Image src="/images/location-icon.svg" alt="Location" width={18} height={18} className="text-white" />
                <span className="text-[#D9D5A6] text-sm sm:text-base ml-1">{room.address}</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/images/user-icon.svg" alt="Users" width={18} height={18} className="text-white" />
                <span className="text-[#D9D5A6] text-sm sm:text-base ml-1">Вместимость: {room.capacity} человек</span>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="space-y-3">
              <p className="text-[#D9D5A6] text-xl">Особенности:</p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {room.featureIds.map((fid) => {
                  const spec = featuresById[fid];
                  if (!spec) return null;
                  return (
                    <FeaturePill key={fid} iconPath={spec.iconPath} label={spec.label} />
                  );
                })}
              </div>
            </motion.div>

            {/* Contact and Book Button */}
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a href={room.phone} className="bg-[#EBE9C6] hover:bg-[color:var(--accent)] text-[#131207] rounded-xl px-6 py-3 text-lg sm:text-xl font-normal transition-colors">
                Забронировать Зал
              </a>
              <div className="flex items-center gap-1">
                <PhoneIcon className="w-[18px] h-[18px] text-white" />
                <a href={room.phone} className="text-[#D9D5A6] text-sm sm:text-base ml-1">
                  +7 908 908 67 55
                </a>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

