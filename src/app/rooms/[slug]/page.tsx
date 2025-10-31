import type { Metadata } from 'next';
import { roomSlugs, roomsBySlug, type RoomSlug } from '@/data/room-info';
import { RoomTemplate } from '@/components/sections/RoomTemplate';

type PageParams = { params: Promise<{ slug: RoomSlug }> };

export function generateStaticParams() {
  return roomSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const room = roomsBySlug[slug];
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

export default async function RoomPage({ params }: PageParams) {
  const { slug } = await params;
  const room = roomsBySlug[slug];
  return <RoomTemplate slug={slug} room={room} />;
}


