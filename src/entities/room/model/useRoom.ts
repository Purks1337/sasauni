import { useMemo } from 'react';
import { roomsBySlug } from '../api/roomData';
import type { RoomInfo, RoomSlug } from './types';

/**
 * Hook to get room information by slug
 */
export function useRoom(slug: RoomSlug): RoomInfo | undefined {
  return useMemo(() => roomsBySlug[slug], [slug]);
}

/**
 * Get room information by slug (synchronous version)
 */
export function getRoomBySlug(slug: RoomSlug): RoomInfo | undefined {
  return roomsBySlug[slug];
}

