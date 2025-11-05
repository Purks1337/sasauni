"use client";
import Image from 'next/image';
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
    <div className="max-w-7xl mx-auto w-full flex items-start mt-auto">
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
            {/* Location, Capacity, and Phone */}
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row items-start sm:items-center flex-wrap gap-y-3 gap-x-6">
              <div className="flex items-center gap-1">
                <Image src="/images/location-icon.svg" alt="Location" width={18} height={18} />
                <a
                  href="https://yandex.ru/maps/-/CLrLJE2Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D9D5A6] text-sm sm:text-base ml-1 hover:text-[color:var(--accent)] transition-colors"
                >
                  {room.address}
                </a>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/images/user-icon.svg" alt="Users" width={18} height={18} />
                <span className="text-[#D9D5A6] text-sm sm:text-base ml-1">Вместимость: {room.capacity} человек</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/images/phone-icon.svg" alt="Телефон" width={18} height={18} />
                <a href={room.phone} className="text-[#D9D5A6] text-sm sm:text-base ml-1">
                  +7 908 908 67 55
                </a>
              </div>
            </motion.div>

            {/* Title and Description */}
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#EBE9C6] leading-[1.2]">
                {room.title}
              </h2>
              <p className="text-lg sm:text-xl text-[#C2C0A4] leading-[1.5] tracking-[0.006em]">
                {room.description}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="space-y-3">
              <p className="text-[#D9D5A6] text-xl">Особенности:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {room.featureIds.map((fid) => {
                  const spec = featuresById[fid];
                  if (!spec) return null;
                  return (
                    <FeaturePill key={fid} icon={spec.icon} label={spec.label} />
                  );
                })}
              </div>
            </motion.div>

            {/* Contact and Book Button */}
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a href={room.phone} className="bg-[#EBE9C6] hover:bg-[color:var(--accent)] text-[#131207] rounded-xl px-6 py-3 text-lg sm:text-xl font-normal transition-colors">
                Забронировать Зал
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}