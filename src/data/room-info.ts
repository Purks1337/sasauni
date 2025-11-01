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

// Room-specific image sets
const finImages: string[] = [
  '/images/fin/DSC03663.webp',
  '/images/fin/DSC03715.webp',
  '/images/fin/DSC03729.webp',
  '/images/fin/DSC03731.webp',
  '/images/fin/DSC03739.webp',
  '/images/fin/DSC03748.webp',
  '/images/fin/DSC03751.webp',
  '/images/fin/DSC03757.webp',
  '/images/fin/DSC03760.webp',
  '/images/fin/DSC03763.webp',
];

const finSmallImages: string[] = [
  '/images/fin-small/DSC03884.webp',
  '/images/fin-small/DSC03943.webp',
  '/images/fin-small/DSC03972.webp',
];

const turkeyImages: string[] = [
  '/images/turkey/DSC03328.webp',
  '/images/turkey/DSC03352.webp',
  '/images/turkey/DSC03366.webp',
  '/images/turkey/DSC03373.webp',
];

const appsImages: string[] = [
  '/images/apps/DSC03490.webp',
  '/images/apps/DSC03510.webp',
  '/images/apps/DSC03522.webp',
  '/images/apps/DSC03537.webp',
  '/images/apps/DSC03552.webp',
];

export const roomsBySlug: Record<RoomSlug, RoomInfo> = {
  'fin': {
    title: 'Большой Финский зал',
    description:
      'Большой финский зал — это идеальное пространство для отдыха с друзьями, где жаркая парная сочетается с азартной игрой в бильярд. Окунитесь в прохладный бассейн с водопадом и подсветкой или соберитесь у настоящего дровяного камина для душевных разговоров. Возможность принести свою еду и напитки делает этот зал превосходным выбором для организации любого праздника.',
    address: 'Екатеринбург, Готвальда 12а',
    capacity: 10,
    phone: 'tel:+79089086755',
    featureIds: ['finnishSauna', 'pool', 'billiard', 'karaoke', 'tv', 'wifi', 'fireplace'],
    imagePaths: finImages,
  },
  'fin-small': {
    title: 'Зеленый Финский зал',
    description:
      'Просторный Зеленый зал с классической финской парной идеально подойдет для компании до 10 человек. К вашим услугам теплый бассейн с тройной системой очистки воды, массажное кресло и уютный электрокамин для максимального комфорта. Дополните свой отдых пением в караоке, настольными играми или ароматным кальяном для полного расслабления.',
    address: 'Екатеринбург, Готвальда 12а',
    capacity: 6,
    phone: 'tel:+79089086755',
    featureIds: ['finnishSauna', 'tv', 'wifi'],
    imagePaths: finSmallImages,
  },
  'turkey': {
    title: 'Турецкий зал',
    description:
      'Погрузитесь в атмосферу восточной неги в нашем Турецком зале, созданном для мягкого семейного отдыха и полного релакса. Вместо традиционной парной вас ждет влажный и комфортный хаммам, а после него — расслабляющее джакузи с гидромассажем на четверых. Разнообразить досуг помогут партия в бильярд, настольные игры или кальян, превращая ваш визит в незабываемое событие.',
    address: 'Екатеринбург, Готвальда 12а',
    capacity: 8,
    phone: 'tel:+79089086755',
    featureIds: ['water', 'tv', 'wifi'],
    imagePaths: turkeyImages,
  },
  'apps': {
    title: 'Апартаменты',
    description:
      'Уютные Апартаменты — это идеальный выбор для романтического отдыха вдвоем, где вас никто не побеспокоит. Для вас оборудована небольшая финская парная с вениками, душевая кабина и комфортная кровать для полноценного уединения. Проведите время за просмотром TV, включите любимую музыку или устройте вечер караоке, создав свою неповторимую атмосферу.',
    address: 'Екатеринбург, Готвальда 12а',
    capacity: 4,
    phone: 'tel:+79089086755',
    featureIds: ['tv', 'wifi'],
    imagePaths: appsImages,
  },
};

export const roomSlugs = Object.keys(roomsBySlug) as RoomSlug[];


