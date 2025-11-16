import type { FeatureId } from '@/entities/feature';

export type RoomSlug = 'fin' | 'fin-small' | 'turkey' | 'apps' | 'new-hall';

export interface RoomInfo {
  title: string;
  description: string;
  address: string; // Short address for header
  capacity: number;
  phone: string; // tel:+...
  featureIds: FeatureId[];
  imagePaths: string[]; // paths under /public/images/<slug-dir>
  
  // New fields based on Figma layout
  price: string;
  steamType: string;
  workHours: string;
  fullAddress: string; // Detailed address for main content
  capacityText: string; // Detailed capacity info
  mapLink: string; // URL for Yandex Maps
  coverImage?: string; // Cover image from hall-covers/ folder for main page cards
  width?: 'normal' | 'wide'; // Card width on main page (for apparts)
  status?: 'active' | 'coming-soon'; // For "Новый зал"
}