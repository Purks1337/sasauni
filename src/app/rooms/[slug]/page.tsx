import type { Metadata } from 'next';
import { roomSlugs, roomsBySlug, type RoomSlug } from '@/data/room-info';
import { RoomTemplate } from '@/components/sections/RoomTemplate';

type PageParams = { params: { slug: RoomSlug } };

export function generateStaticParams() {
  return roomSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageParams): Metadata {
  const room = roomsBySlug[params.slug];
  const title = `${room.title} — 1000 и 1 ночь`;
  const description = room.description;
  const images = room.imagePaths.length > 0 ? [{ url: room.imagePaths[0] }] : [];
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
    },
  };
}

export default function RoomPage({ params }: PageParams) {
  const room = roomsBySlug[params.slug];
  return <RoomTemplate room={room} />;
}


