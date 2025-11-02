// Public API for room entity
export type { RoomInfo, RoomSlug } from './model/types';
export { roomsBySlug, roomSlugs } from './api/roomData';
export { useRoom, getRoomBySlug } from './model/useRoom';

