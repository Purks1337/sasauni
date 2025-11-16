import type { RoomInfo, RoomSlug } from '../model/types';

// Room-specific image sets
const finImages: string[] = [
  '/images/fin/1.webp',
  '/images/fin/7.webp',
  '/images/fin/8.webp',
  '/images/fin/10.webp',
  '/images/fin/14.webp',
  '/images/fin/16.webp',
  '/images/fin/17.webp',
  '/images/fin/18.webp',
  '/images/fin/20.webp',
];

const finSmallImages: string[] = [
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
  '/images/fin-small/58.webp',
  '/images/fin-small/DSC03884.webp',
  '/images/fin-small/DSC03943.webp',
  '/images/fin-small/DSC03972.webp',
];

const turkeyImages: string[] = [
  '/images/turkey/turk-1.webp',
  '/images/turkey/turk-2.webp',
  '/images/turkey/turk-3.webp',
  '/images/turkey/turk-4.webp',
  '/images/turkey/turk-5.webp',
  '/images/turkey/turk-6.webp',
  '/images/turkey/turk-7.webp',
  '/images/turkey/turk-8.webp',
  '/images/turkey/turk-9.webp',
  '/images/turkey/turk-10.webp',
  '/images/turkey/turk-11.webp',
];

const appsImages: string[] = [
  '/images/apps/apps-1.webp',
  '/images/apps/apps-2.webp',
  '/images/apps/apps-3.webp',
  '/images/apps/apps-4.webp',
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
      '"Финский зал" — это уникальное пространство для компании до 8 человек, где жар финской парной сменяется азартом бильярдной партии и прохладой бассейна с водопадом. Центральным элементом для душевных бесед станет настоящий дровяной камин, у которого можно собраться после водных процедур. А возможность принести с собой еду и напитки делает этот зал идеальной площадкой для организации любого праздника или дружеской встречи, где все будет устроено именно по вашему вкусу.',
    capacity: 8,
    price: '2500₽ / час',
    steamType: 'Финская',
    capacityText: '10 человек (макс. 20 человек, доплата 600₽/час за человека свыше 6)',
    featureIds: ['finnishSauna', 'pool', 'karaoke', 'tv', 'waterfall', 'bucket', 'relaxZone', 'billiard'],
    imagePaths: finImages,
    coverImage: '/images/hall-covers/hall-cover-fin.jpg',
  },
  'fin-small': {
    ...commonData,
    title: 'Зал «Оазис»',
    description:
      'Зал "Оазис" приглашает компанию до 10 человек в мир, где классический финский пар сочетается с полным набором современных развлечений. После жаркой парилки вас ждет погружение в теплый бассейн с тройной системой очистки воды, а для глубокого расслабления — сеанс в массажном кресле у уютного электрокамина. Дополните свой досуг азартным исполнением любимых песен в караоке, партией в настольные игры или неспешным отдыхом с ароматным кальяном, создавая идеальную атмосферу для незабываемой встречи.',
    capacity: 10,
    price: '2500₽ / час',
    steamType: 'Финская',
    capacityText: '6 человек (макс. 10 человек, доплата 300₽/час за человека свыше 6)',
    featureIds: ['finnishSauna', 'pool', 'tv', 'karaoke', 'massage', 'bucket', 'relaxZone', 'massageApparatus'],
    imagePaths: finSmallImages,
    coverImage: '/images/hall-covers/hall-cover-oasis.jpg',
  },
  'turkey': {
    ...commonData,
    title: 'Турецкий зал',
    description:
      'Погрузитесь в атмосферу восточной неги в "Турецком зале", созданном для мягкого семейного отдыха и полного релакса. Здесь вместо сухого жара вас окутает влажный и комфортный пар хаммама, а после него — тысячи пузырьков в большом джакузи с гидромассажем. Для ценителей размеренного досуга мы предлагаем сыграть партию в бильярд, расслабиться в массажном кресле или насладиться кальяном, превращая ваш визит в настоящее SPA-приключение для компании до 8 человек.',
    capacity: 8,
    price: '2500₽ / час',
    steamType: 'Турецкая (Хаммам), Финская',
    capacityText: '10 человек (макс. 20 человек, доплата 300₽/час за человека свыше 6)',
    featureIds: ['finnishSauna', 'tv', 'karaoke', 'massage', 'massageApparatus', 'wifi', 'turkeySauna', 'uziSpa', 'hydroMassage', 'bucket', 'relaxZone', 'billiard'],
    imagePaths: turkeyImages,
    coverImage: '/images/hall-covers/hall-cover-turkey.jpg',
  },
  'apps': {
    ...commonData,
    title: 'Аппартаменты',
    description:
      'Наши "Апартаменты" представляют собой идеальное приватное пространство для романтического уединения вдвоем, где каждая деталь создана для вашего комфорта. К вашим услугам небольшая, но жаркая финская парная с возможностью использования веников, освежающая душевая кабина и уютная кровать для полноценного отдыха. Создайте собственную атмосферу, включив любимую музыку, устроив вечер караоке или просмотр фильма — это ваш личный мир, скрытый от посторонних глаз, для незабываемого свидания.',
    capacity: 2,
    price: '2500₽ / час',
    steamType: 'Финская',
    capacityText: '2 человека',
    featureIds: ['finnishSauna', 'tv', 'karaoke', `privateSetting` ],
    imagePaths: appsImages,
    coverImage: '/images/hall-covers/hall-cover-apparts.jpg',
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