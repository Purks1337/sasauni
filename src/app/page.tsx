import { RoomDisplay } from '@/widgets/room-display';
import { roomsBySlug } from '@/entities/room';

export default function HomePage() {
  const slug = 'fin'; // Define slug for key
  return <RoomDisplay key={slug} slug={slug} room={roomsBySlug[slug]} />;
}