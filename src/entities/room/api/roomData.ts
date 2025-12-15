import type { RoomInfo, RoomSlug } from '../model/types';

// Room-specific image sets
const finImages: string[] = [
  '/images/fin/1.webp?v=update-1',
  '/images/fin/7.webp?v=update-1',
  '/images/fin/8.webp?v=update-1',
  '/images/fin/10.webp?v=update-1',
  '/images/fin/14.webp?v=update-1',
  '/images/fin/16.webp?v=update-1',
  '/images/fin/17.webp?v=update-1',
  '/images/fin/18.webp?v=update-1',
  '/images/fin/20.webp?v=update-1',
];

const finSmallImages: string[] = [
  '/images/fin-small/30.webp?v=update-1',
  '/images/fin-small/25.webp?v=update-1',
  '/images/fin-small/32.webp?v=update-1',
  '/images/fin-small/33.webp?v=update-1',
  '/images/fin-small/35.webp?v=update-1',
  '/images/fin-small/37.webp?v=update-1',
  '/images/fin-small/39.webp?v=update-1',
  '/images/fin-small/40.webp?v=update-1',
  '/images/fin-small/47.webp?v=update-1',
  '/images/fin-small/49.webp?v=update-1',
  '/images/fin-small/55.webp?v=update-1',
  '/images/fin-small/56.webp?v=update-1',
  '/images/fin-small/57.webp?v=update-1',
  '/images/fin-small/58.webp?v=update-1',
  '/images/fin-small/DSC03884.webp?v=update-1',
  '/images/fin-small/DSC03943.webp?v=update-1',
  '/images/fin-small/DSC03972.webp?v=update-1',
];

const turkeyImages: string[] = [
  '/images/turkey/turk-1.webp?v=update-1',
  '/images/turkey/turk-3.webp?v=update-1',
  '/images/turkey/turk-4.webp?v=update-1',
  '/images/turkey/turk-5.webp?v=update-1',
  '/images/turkey/turk-6.webp?v=update-1',
  '/images/turkey/turk-7.webp?v=update-1',
  '/images/turkey/turk-9.webp?v=update-1',
  '/images/turkey/turk-10.webp?v=update-1',
  '/images/turkey/turk-11.webp?v=update-1',
];

const appsImages: string[] = [
  '/images/apps/apps-4.webp?v=update-1',
  '/images/apps/apps-1.webp?v=update-1',
  '/images/apps/apps-2.webp?v=update-1',
  '/images/apps/apps-3.webp?v=update-1',
];

const newHallImages: string[] = [];

const commonData = {
  address: 'Екатеринбург, Готвальда 12а',
  fullAddress: 'Екатеринбург, ул. Готвальда, 12а, Верх-Исетский район, Заречный',
  phone: 'tel:+79089086755',
  workHours: 'круглосуточно',
  mapLink: 'https://yandex.ru/maps/-/CLrLJE2Y',
};

export const roomsBySlug: Record<RoomSlug, RoomInfo> = {
  'fin': {
    ...commonData,
    title: 'Финский зал',
    description:
      '"Финский зал" — это уникальное пространство для компании до 10 человек, где жар финской парной сменяется азартом бильярдной партии и прохладой бассейна с водопадом. Центральным элементом для душевных бесед станет большая релакс зона со всеми видами массажа, где можно собраться после водных процедур. А возможность принести с собой еду и напитки делает этот зал идеальной площадкой для организации любого праздника или дружеской встречи, где все будет устроено именно по вашему вкусу.',
    capacity: 8,
    price: 'от 2500₽ / час',
    steamType: 'Финская',
    capacityText: '10 человек (макс. 20 человек, доплата 300₽/час за человека свыше 6)',
    featureIds: ['finnishSauna', 'pool', 'karaoke', 'tv', 'waterfall', 'bucket', 'relaxZone', 'billiard'],
    imagePaths: finImages,
    coverImage: '/images/hall-covers/hall-cover-fin.webp',
  },
  'fin-small': {
    ...commonData,
    title: 'Зал «Оазис»',
    description:
      'Зал "Оазис" приглашает компанию до 10 человек в мир, где классический финский пар сочетается с полным набором современных развлечений. После жаркой парилки вас ждет погружение в теплый бассейн с тройной системой очистки воды, а для глубокого расслабления — сеанс в массажном кресле у уютного электрокамина. Дополните свой досуг азартным исполнением любимых песен в караоке, партией в настольные игры или неспешным отдыхом с ароматным кальяном, создавая идеальную атмосферу для незабываемой встречи.',
    capacity: 10,
    price: 'от 2500₽ / час',
    steamType: 'Финская',
    capacityText: '6 человек (макс. 10 человек, доплата 300₽/час за человека свыше 6)',
    featureIds: ['finnishSauna', 'pool', 'tv', 'karaoke', 'massage', 'bucket', 'relaxZone', 'massageApparatus'],
    imagePaths: finSmallImages,
    coverImage: '/images/hall-covers/hall-cover-oasis.webp',
  },
  'turkey': {
    ...commonData,
    title: 'Турецкий зал',
    description:
      'Погрузитесь в атмосферу восточной ночи в нашем Турецком зале, созданном для глубокого отдыха и полного релакса. Вместе с традиционной финской парной вас ждет влажный и комфортный хаммам, а после него — расслабляющее джакузи с гидромассажем. Разнообразить досуг помогут партия в бильярд, караоке и сеанс массажа, превращая ваш визит в незабываемое событие.',
    capacity: 8,
    price: 'от 2500₽ / час',
    steamType: 'Турецкая (Хаммам), Финская',
    capacityText: '10 человек (макс. 20 человек, доплата 300₽/час за человека свыше 6)',
    featureIds: ['finnishSauna', 'tv', 'karaoke', 'massage', 'massageApparatus', 'wifi', 'turkeySauna', 'uziSpa', 'hydroMassage', 'bucket', 'relaxZone', 'billiard'],
    imagePaths: turkeyImages,
    coverImage: '/images/hall-covers/hall-cover-turkey.webp',
  },
  'apps': {
    ...commonData,
    title: 'Аппартаменты',
    description:
      'Наши "Апартаменты" представляют собой идеальное приватное пространство для романтического уединения вдвоем, где каждая деталь создана для вашего комфорта. К вашим услугам небольшая, но жаркая финская парная с возможностью использования веников, освежающая душевая кабина и уютная кровать для полноценного отдыха. Создайте собственную атмосферу, включив любимую музыку, устроив вечер караоке или просмотр фильма — это ваш личный мир, скрытый от посторонних глаз, для незабываемого свидания.',
    capacity: 2,
    price: '800₽ — 1000₽ / час',
    steamType: 'Финская',
    capacityText: '2 человека',
    featureIds: ['finnishSauna', 'tv', 'karaoke', `privateSetting` ],
    imagePaths: appsImages,
    coverImage: '/images/hall-covers/hall-cover-apparts.webp',
    width: 'wide',
  },
  'new-hall': {
    ...commonData,
    title: 'Новый зал',
    description:
      'Дорогие гости, этот зал находится в разработке и скоро откроется. Забронировать и занять своё время вы можете уже сейчас, позвонив нам',
    capacity: 8,
    price: 'скоро открытие',
    steamType: 'Уточняется',
    capacityText: 'Уточняется',
    featureIds: [],
    imagePaths: newHallImages,
    status: 'coming-soon',
  },
};

export const roomSlugs = Object.keys(roomsBySlug) as RoomSlug[];