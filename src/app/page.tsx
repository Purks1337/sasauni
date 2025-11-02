import { RoomDisplay } from '@/widgets/room-display';
import { roomsBySlug } from '@/entities/room';

export default function HomePage() {
  return <RoomDisplay slug="fin" room={roomsBySlug['fin']} />;
}
