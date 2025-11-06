import type { RoomInfo, RoomSlug } from '../model/types';
import type { FeatureId } from '@/entities/feature';

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
  '/images/fin-small/1.webp',
  '/images/fin-small/7.webp',
  '/images/fin-small/8.webp',
  '/images/fin-small/10.webp',
  '/images/fin-small/14.webp',
  '/images/fin-small/16.webp',
  '/images/fin-small/17.webp',
  '/images/fin-small/18.webp',
  '/images/fin-small/20.webp',
  '/images/fin-small/22.webp',
  '/images/fin-small/25.webp',
  '/images/fin-small/30.webp',
  '/images/fin-small/32.webp',
  '/images/fin-small/33.webp',
  '/images/fin-small/35.webp',
  '/images/fin-small/37.webp',
  '/images/fin-small/39.webp',
  '/images/fin-small/40.webp',
  '/images/fin-small/47.webp',
  '/images/fin-small/49.webp',
  '/images/fin-small/55.webp',
  '/images/fin-small/56.webp',
  '/images/fin-small/57.webp',
  '/images/fin-small/68.webp',
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
    title: 'Финский зал',
    description:
      'Финский зал — это идеальное пространство для отдыха с друзьями, где жаркая парная сочетается с азартной игрой в бильярд. Окунитесь в прохладный бассейн с водопадом и подсветкой. Возможность принести свою еду и напитки делает этот зал превосходным выбором для организации любого праздника.',
    address: 'Екатеринбург, Готвальда 12а',
    capacity: 8, // max capacity from info.md
    phone: 'tel:+79089086755',
    featureIds: ['finnishSauna', 'pool', 'waterfall', 'bucket', 'relaxZone', 'billiard', 'karaoke', 'tv', 'wifi'],
    imagePaths: finImages,
  },
  'fin-small': {
    title: 'Зал «Оазис»',
    description:
      'Просторный зал с классической финской парной идеально подойдет для компании до 10 человек. К вашим услугам теплый бассейн с тройной системой очистки воды, массажное кресло. Дополните свой отдых пением в караоке, настольными играми или ароматным кальяном для полного расслабления.',
    address: 'Екатеринбург, Готвальда 12а',
    capacity: 10, // max capacity from info.md
    phone: 'tel:+79089086755',
    featureIds: ['finnishSauna', 'pool', 'bucket', 'relaxZone', 'tv', 'wifi', 'karaoke', 'massageApparatus', 'massage'],
    imagePaths: finSmallImages,
  },
  'turkey': {
    title: 'Турецкий зал',
    description:
      'Погрузитесь в атмосферу восточной ночи в нашем Турецком зале, созданном для глубокого отдыха и полного релакса. Вместе с традиционной финской парной вас ждет влажный и комфортный хаммам, а после него — расслабляющее джакузи с гидромассажем. Разнообразить досуг помогут партия в бильярд, караоке и сеанс массажа, превращая ваш визит в незабываемое событие.',
    address: 'Екатеринбург, Готвальда 12а',
    capacity: 8, // max capacity from info.md
    phone: 'tel:+79089086755',
    featureIds: ['turkeySauna', 'finnishSauna', 'uziSpa', 'hydroMassage', 'bucket', 'relaxZone', 'billiard', 'tv', 'wifi', 'karaoke', 'massageApparatus', 'massage'],
    imagePaths: turkeyImages,
  },
  'apps': {
    title: 'Апартаменты',
    description:
      'Уютные Апартаменты — это идеальный выбор для романтического отдыха вдвоем, где вас никто не побеспокоит. Для вас оборудована небольшая финская парная с вениками, душевая кабина и комфортная кровать для полноценного уединения. Проведите время за просмотром TV, включите любимую музыку или устройте вечер караоке, создав свою неповторимую атмосферу.',
    address: 'Екатеринбург, Готвальда 12а',
    capacity: 2, // max capacity from info.md
    phone: 'tel:+79089086755',
    featureIds: ['finnishSauna', 'tv', 'karaoke'],
    imagePaths: appsImages,
  },
};

export const roomSlugs = Object.keys(roomsBySlug) as RoomSlug[];