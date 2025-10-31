import { RoomTemplate } from '@/components/sections/RoomTemplate';
import { roomsBySlug } from '@/data/room-info';

export default function SaunaPage() {
  return <RoomTemplate slug="fin" room={roomsBySlug['fin']} />;
}
