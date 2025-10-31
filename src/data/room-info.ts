// Typed content source for rooms and features

export type RoomSlug = 'fin' | 'fin-small' | 'turkey' | 'apps';

export type FeatureId =
  | 'finnishSauna'
  | 'pool'
  | 'billiard'
  | 'tv'
  | 'wifi'
  | 'fireplace'
  | 'water'
  | 'karaoke';

export interface FeatureSpec {
  label: string;
  iconPath: string; // path under /public/images
}

export interface RoomInfo {
  title: string;
  description: string;
  address: string;
  capacity: number;
  phone: string; // tel:+...
  featureIds: FeatureId[];
  imagePaths: string[]; // paths under /public/images/<slug-dir>
}

export const featuresById: Record<FeatureId, FeatureSpec> = {
  finnishSauna: { label: 'Финская парная', iconPath: '/images/water-icon.svg' },
  pool: { label: 'Бассейн', iconPath: '/images/pool-icon.svg' },
  billiard: { label: 'Бильярд', iconPath: '/images/billiard-icon.svg' },
  tv: { label: 'Телевизор', iconPath: '/images/tv-icon.svg' },
  wifi: { label: 'Wi‑Fi', iconPath: '/images/wifi-icon.svg' },
  fireplace: { label: 'Камин на дровах', iconPath: '/images/fireplace-icon.svg' },
  water: { label: 'Вода/Душ', iconPath: '/images/water-icon.svg' },
  karaoke: { label: 'Караоке', iconPath: '/images/microphone-icon.svg' },
};

// Helper: resolve existing demo images for fin sauna
const finSaunaImages = [
  '/images/fin-sauna/DSC03884.JPG',
  '/images/fin-sauna/DSC03943.JPG',
  '/images/fin-sauna/DSC03972.JPG',
];

export const roomsBySlug: Record<RoomSlug, RoomInfo> = {
  'fin': {
    title: 'Большой Финский зал',
    description:
      'Идеальный выбор для ценителей финской парной. После жаркой парилки вас ждет большой бассейн с кристально чистой водой и зоны отдыха.',
    address: 'Екатеринбург, Готвальда 12а',
    capacity: 10,
    phone: 'tel:+79089086755',
    featureIds: ['finnishSauna', 'pool', 'billiard', 'karaoke', 'tv', 'wifi', 'fireplace'],
    imagePaths: finSaunaImages,
  },
  'fin-small': {
    title: 'Малый Финский зал',
    description:
      'Уютный финский зал для компактной компании. Парная с правильным жаром, комфортная комната отдыха.',
    address: 'Екатеринбург, Готвальда 12а',
    capacity: 6,
    phone: 'tel:+79089086755',
    featureIds: ['finnishSauna', 'tv', 'wifi'],
    imagePaths: finSaunaImages, // временно используем те же изображения
  },
  'turkey': {
    title: 'Турецкий зал',
    description:
      'Просторный хаммам с мягким паром и продуманной зоной релакса. Отличный вариант для неторопливого отдыха.',
    address: 'Екатеринбург, Готвальда 12а',
    capacity: 8,
    phone: 'tel:+79089086755',
    featureIds: ['water', 'tv', 'wifi'],
    imagePaths: finSaunaImages, // заменить на реальные фото турецкого зала
  },
  'apps': {
    title: 'Апартаменты',
    description:
      'Просторные апартаменты для длительного отдыха: приватность, комфорт и полный набор удобств.',
    address: 'Екатеринбург, Готвальда 12а',
    capacity: 4,
    phone: 'tel:+79089086755',
    featureIds: ['tv', 'wifi'],
    imagePaths: finSaunaImages, // заменить на реальные фото апартаментов
  },
};

export const roomSlugs = Object.keys(roomsBySlug) as RoomSlug[];


