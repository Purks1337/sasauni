"use client";
import { roomsBySlug, roomSlugs, type RoomInfo, type RoomSlug } from '@/entities/room';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/widgets/header';
import { RoomSlideshow } from '@/features/room-slideshow';
import { SLIDESHOW_INTERVAL_MS } from '@/shared/config/ui';
import { motion } from 'framer-motion';
import type { SVGProps } from 'react';
import { cn } from '@/shared/lib/utils';

// --- Local Icon Components (as per Closed Context rule) ---
const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12.0004 3L14.3504 8.76L20.5604 9.22L15.8004 13.24L17.2904 19.28L12.0004 16L6.71043 19.28L8.20043 13.24L3.44043 9.22L9.65043 8.76L12.0004 3Z" fill="currentColor"/>
    <path d="M12.0004 3L9.65043 8.76L3.44043 9.22L8.20043 13.24L6.71043 19.28L12.0004 16M12.0004 3L14.3504 8.76L20.5604 9.22L15.8004 13.24L17.2904 19.28L12.0004 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const RoomsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18 3H6C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6V18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21H18C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18V6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3ZM9.375 15.75C9.1525 15.75 8.93499 15.684 8.74998 15.5604C8.56498 15.4368 8.42078 15.2611 8.33564 15.0555C8.25049 14.85 8.22821 14.6238 8.27162 14.4055C8.31502 14.1873 8.42217 13.9868 8.5795 13.8295C8.73684 13.6722 8.93729 13.565 9.15552 13.5216C9.37375 13.4782 9.59995 13.5005 9.80552 13.5856C10.0111 13.6708 10.1868 13.815 10.3104 14C10.434 14.185 10.5 14.4025 10.5 14.625C10.5 14.9234 10.3815 15.2095 10.1705 15.4205C9.95952 15.6315 9.67337 15.75 9.375 15.75ZM9.375 10.5C9.1525 10.5 8.93499 10.434 8.74998 10.3104C8.56498 10.1868 8.42078 10.0111 8.33564 9.80552C8.25049 9.59995 8.22821 9.37375 8.27162 9.15552C8.31502 8.93729 8.42217 8.73684 8.5795 8.5795C8.73684 8.42217 8.93729 8.31502 9.15552 8.27162C9.37375 8.22821 9.59995 8.25049 9.80552 8.33564C10.0111 8.42078 10.1868 8.56498 10.3104 8.74998C10.434 8.93499 10.5 9.1525 10.5 9.375C10.5 9.67337 10.3815 9.95952 10.1705 10.1705C9.95952 10.3815 9.67337 10.5 9.375 10.5ZM14.625 15.75C14.4025 15.75 14.185 15.684 14 15.5604C13.815 15.4368 13.6708 15.2611 13.5856 15.0555C13.5005 14.85 13.4782 14.6238 13.5216 14.4055C13.565 14.1873 13.6722 13.9868 13.8295 13.8295C13.9868 13.6722 14.1873 13.565 14.4055 13.5216C14.6238 13.4782 14.85 13.5005 15.0555 13.5856C15.2611 13.6708 15.4368 13.815 15.5604 14C15.684 14.185 15.75 14.4025 15.75 14.625C15.75 14.9234 15.6315 15.2095 15.4205 15.4205C15.2095 15.6315 14.9234 15.75 14.625 15.75ZM14.625 10.5C14.4025 10.5 14.185 10.434 14 10.3104C13.815 10.1868 13.6708 10.0111 13.5856 9.80552C13.5005 9.59995 13.4782 9.37375 13.5216 9.15552C13.565 8.93729 13.6722 8.73684 13.8295 8.5795C13.9868 8.42217 14.1873 8.31502 14.4055 8.27162C14.6238 8.22821 14.85 8.25049 15.0555 8.33564C15.2611 8.42078 15.4368 8.56498 15.5604 8.74998C15.684 8.93499 15.75 9.1525 15.75 9.375C15.75 9.67337 15.6315 9.95952 15.4205 10.1705C15.2095 10.3815 14.9234 10.5 14.625 10.5Z" fill="currentColor"/>
  </svg>
);
const UsersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.25009 5.25C8.25009 4.25544 8.64518 3.30161 9.34844 2.59835C10.0517 1.89509 11.0055 1.5 12.0001 1.5C12.9946 1.5 13.9485 1.89509 14.6517 2.59835C15.355 3.30161 15.7501 4.25544 15.7501 5.25C15.7501 6.24456 15.355 7.19839 14.6517 7.90165C13.9485 8.60491 12.9946 9 12.0001 9C11.0055 9 10.0517 8.60491 9.34844 7.90165C8.64518 7.19839 8.25009 6.24456 8.25009 5.25ZM9.75009 10.5C9.15335 10.5 8.58105 10.7371 8.1591 11.159C7.73714 11.581 7.50009 12.1533 7.50009 12.75V16.5C7.50009 17.6935 7.97419 18.8381 8.81811 19.682C9.66202 20.5259 10.8066 21 12.0001 21C13.1936 21 14.3382 20.5259 15.1821 19.682C16.026 18.8381 16.5001 17.6935 16.5001 16.5V12.75C16.5001 12.1533 16.263 11.581 15.8411 11.159C15.4191 10.7371 14.8468 10.5 14.2501 10.5H9.75009ZM6.08409 11.955C6.02784 12.2162 5.99968 12.4828 6.00009 12.75V16.5C5.99994 17.3028 6.1609 18.0975 6.47343 18.8369C6.78597 19.5764 7.24373 20.2456 7.81959 20.805L7.66959 20.847C6.5171 21.1554 5.28934 20.9934 4.2562 20.3968C3.22306 19.8002 2.46911 18.8178 2.16009 17.6655L1.57659 15.4905C1.50015 15.2051 1.48068 14.9074 1.51929 14.6144C1.55791 14.3215 1.65384 14.039 1.80163 13.7831C1.94942 13.5272 2.14615 13.303 2.38061 13.1232C2.61507 12.9433 2.88266 12.8114 3.16809 12.735L6.08409 11.955ZM16.1791 20.805C16.7552 20.2458 17.2133 19.5766 17.5261 18.8371C17.8388 18.0976 18 17.3029 18.0001 16.5V12.75C17.9991 12.476 17.9711 12.211 17.9161 11.955L20.8306 12.735C21.1162 12.8114 21.3839 12.9434 21.6185 13.1233C21.8531 13.3032 22.0499 13.5276 22.1977 13.7837C22.3455 14.0397 22.4414 14.3224 22.4799 14.6155C22.5184 14.9086 22.4988 15.2065 22.4221 15.492L21.8401 17.6655C21.6838 18.2488 21.4116 18.7947 21.0399 19.2707C20.6682 19.7466 20.2044 20.1429 19.6763 20.4359C19.1482 20.7288 18.5666 20.9125 17.966 20.9759C17.3654 21.0393 16.7567 20.9812 16.1791 20.805ZM1.50009 7.5C1.50009 6.70435 1.81616 5.94129 2.37877 5.37868C2.94138 4.81607 3.70444 4.5 4.50009 4.5C5.29574 4.5 6.0588 4.81607 6.62141 5.37868C7.18402 5.94129 7.50009 6.70435 7.50009 7.5C7.50009 8.29565 7.18402 9.05871 6.62141 9.62132C6.0588 10.1839 5.29574 10.5 4.50009 10.5C3.70444 10.5 2.94138 10.1839 2.37877 9.62132C1.81616 9.05871 1.50009 8.29565 1.50009 7.5ZM16.5001 7.5C16.5001 6.70435 16.8162 5.94129 17.3788 5.37868C17.9414 4.81607 18.7044 4.5 19.5001 4.5C20.2957 4.5 21.0588 4.81607 21.6214 5.37868C22.184 5.94129 22.5001 6.70435 22.5001 7.5C22.5001 8.29565 22.184 9.05871 21.6214 9.62132C21.0588 10.1839 20.2957 10.5 19.5001 10.5C18.7044 10.5 17.9414 10.1839 17.3788 9.62132C16.8162 9.05871 16.5001 8.29565 16.5001 7.5Z" fill="currentColor"/>
  </svg>
);
const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"/></svg>
);
const LocalPhoneIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg>
);
const LocalLocationIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-10c-4.2 0-8 3.22-8 8.2c0 3.32 2.67 7.25 8 11.8c5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2"/></svg>
);


// --- Local Component for Room Card ---
const RoomCard = ({ room, slug }: { room: RoomInfo; slug: RoomSlug }) => (
  <Link href={`/rooms/${slug}`} className="group relative block overflow-hidden rounded-xl text-white no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[color:var(--accent)]">
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className="relative aspect-[3/4] w-full"
    >
      <Image
        src={room.imagePaths[0]}
        alt={`Фотография зала ${room.title}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/90" />
    </motion.div>
    <div className="absolute inset-0 flex flex-col p-4 sm:p-6">
      <div className="mt-auto">
        <h3 className="text-2xl sm:text-3xl font-medium text-[#EBE9C6]">{room.title}</h3>
        <p className="mt-1 text-base text-[#CECCB4]">{room.price}</p>
      </div>
    </div>
  </Link>
);

export default function HomePage() {
  const heroImages = [
    '/images/main-bg/DSC03490.webp',
    '/images/main-bg/DSC03522.webp',
    '/images/main-bg/DSC03884.webp',
    '/images/main-bg/DSC03943.webp',
  ];
  const benefits = [
    { icon: RoomsIcon, title: "4 уникальных зала", text: "От финской парной до турецкого хаммама." },
    { icon: UsersIcon, title: "Для любой компании", text: "Залы вместимостью от 2 до 20 человек." },
    { icon: StarIcon, title: "Высокий сервис", text: "Все для комфортного отдыха уже включено." },
  ];
  
  const handleScrollToRooms = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const roomsSection = document.getElementById('rooms');
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buttonBaseClasses = "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium transition-colors duration-300 whitespace-nowrap";
  const filledButtonClasses = "bg-[#EBE9C6] text-[#131207] hover:bg-[color:var(--accent)]";
  const outlineButtonClasses = "border border-[#EBE9C6]/60 text-[#EBE9C6] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]";


  return (
    <div className="bg-black">
      <main>
        {/* Hero Section */}
        <div className="relative">
          {/* Background Slideshow Layer */}
          <div className="absolute top-0 left-0 right-0 h-[420px] lg:h-[800px] z-0">
            <RoomSlideshow images={heroImages} intervalMs={SLIDESHOW_INTERVAL_MS} />
          </div>

          {/* Foreground Content Layer */}
          <div className="relative z-10 flex flex-col min-h-[420px] lg:min-h-[920px]">
            <Header />

            {/* Main Content (takes up most space) */}
            <div className="flex-grow flex flex-col items-center justify-center text-center px-4 py-24">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-medium text-[#F8F8EC]"
              >
                Искусство настоящего отдыха
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-4 max-w-3xl text-lg sm:text-xl text-[#CECCB4]"
              >
                Погрузитесь в атмосферу спокойствия и роскоши в банном комплексе «1000 и 1 ночь».
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-y-3 gap-x-6 text-sm text-[#CECCB4]"
              >
                <div className="flex items-center gap-2">
                    <ClockIcon className="size-4 flex-shrink-0" />
                    <span>Работаем круглосуточно</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-[#CECCB4]/30"></div>
                <a href="tel:+79089086755" className="flex items-center gap-2 hover:text-[color:var(--accent)] transition-colors">
                    <LocalPhoneIcon className="size-4 flex-shrink-0" />
                    <span>+7 908 908 67 55</span>
                </a>
                <div className="hidden sm:block w-px h-4 bg-[#CECCB4]/30"></div>
                <a 
                  href="https://yandex.ru/maps/-/CLvp7Dn-" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-[color:var(--accent)] transition-colors"
                >
                    <LocalLocationIcon className="size-4 flex-shrink-0" />
                    <span>Екатеринбург, ул. Готвальда, 12а</span>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none"
              >
                <button onClick={handleScrollToRooms} className={cn(buttonBaseClasses, filledButtonClasses, "w-full sm:w-auto")}>
                  Выбрать зал
                </button>
                <a href="tel:+79089086755" className={cn(buttonBaseClasses, filledButtonClasses, "w-full sm:w-auto")}>
                  Позвонить
                </a>
                <a href="https://yandex.ru/maps/-/CLvp7Dn-" target="_blank" rel="noopener noreferrer" className={cn(buttonBaseClasses, outlineButtonClasses, "w-full sm:w-auto")}>
                  Проложить маршрут
                </a>
              </motion.div>
            </div>

            {/* Bottom Benefits Section (sits at the bottom) */}
            <div className="w-full py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                  {benefits.map(benefit => (
                    <div key={benefit.title} className="flex flex-col items-center">
                      <div className="flex items-center justify-center size-14 rounded-full bg-[#EBE9C6]/5 text-[#CECCB4]">
                        <benefit.icon className="size-7" />
                      </div>
                      <h3 className="mt-5 text-xl font-medium text-[#EBE9C6]">{benefit.title}</h3>
                      <p className="mt-2 text-base text-[#9B9A89] max-w-xs mx-auto">{benefit.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* "Our Rooms" Section */}
        <section id="rooms" className="bg-black py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-medium text-[#EBE9C6] tracking-tight">Наши залы</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-[#9B9A89]">
                Каждое пространство создано для вашего идеального отдыха.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {roomSlugs.map((slug) => (
                <RoomCard key={slug} slug={slug} room={roomsBySlug[slug]} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}