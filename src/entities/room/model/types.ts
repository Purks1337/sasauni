import type { FeatureId } from '@/entities/feature';

export type RoomSlug = 'fin' | 'fin-small' | 'turkey' | 'apps';

export interface RoomInfo {
  title: string;
  description: string;
  address: string;
  capacity: number;
  phone: string; // tel:+...
  featureIds: FeatureId[];
  imagePaths: string[]; // paths under /public/images/<slug-dir>
}

