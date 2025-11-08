import type { RoomInfo, RoomSlug } from '../model/types';

// Room-specific image sets
const finImages: string[] = [
  '/images/fin/DSC03739.webp',
  '/images/fin/1.webp',
  '/images/fin/7.webp',
  '/images/fin/8.webp',
  '/images/fin/10.webp',
  '/images/fin/14.webp',
  '/images/fin/16.webp',
  '/images/fin/17.webp',
  '/images/fin/18.webp',
  '/images/fin/20.webp',
  '/images/fin/DSC03663.webp',
  '/images/fin/DSC03715.webp',
  '/images/fin/DSC03729.webp',
  '/images/fin/DSC03731.webp',
  '/images/fin/DSC03748.webp',
  '/images/fin/DSC03751.webp',
  '/images/fin/DSC03757.webp',
  '/images/fin/DSC03760.webp',
  '/images/fin/DSC03763.webp',

];

const finSmallImages: string[] = [

  '/images/fin-small/35.webp',
  '/images/fin-small/22.webp',
  '/images/fin-small/25.webp',
  '/images/fin-small/30.webp',
  '/images/fin-small/32.webp',
  '/images/fin-small/33.webp',
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
  '/images/turkey/DSC03366.webp',
  '/images/turkey/DSC03328.webp',
  '/images/turkey/DSC03352.webp',
  '/images/turkey/DSC03373.webp',
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
  '/images/apps/DSC03537.webp',
  '/images/apps/DSC03490.webp',
  '/images/apps/DSC03510.webp',
  '/images/apps/DSC03522.webp',
  '/images/apps/DSC03552.webp',
  '/images/apps/apps-1.webp',
  '/images/apps/apps-2.webp',
  '/images/apps/apps-3.webp',
  '/images/apps/apps-4.webp',
];

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
      'Финский зал — это идеальное пространство для отдыха с друзьями, где жаркая парная сочетается с азартной игрой в бильярд. Окунитесь в прохладный бассейн с водопадом и подсветкой или соберитесь у настоящего дровяного камина для душевных разговоров. Возможность принести свою еду и напитки делает этот зал превосходным выбором для организации любого праздника.',
    capacity: 8,
    price: '1800-2500₽/час',
    steamType: 'Финская',
    capacityText: '10 человек (макс. 20 человек, доплата 600₽/час за человека свыше 6)',
    featureIds: ['finnishSauna', 'pool', 'karaoke', 'tv', 'waterfall', 'bucket', 'relaxZone', 'billiard'],
    imagePaths: finImages,
  },
  'fin-small': {
    ...commonData,
    title: 'Зал «Оазис»',
    description:
      'Просторный Зеленый зал с классической финской парной идеально подойдет для компании до 10 человек. К вашим услугам теплый бассейн с тройной системой очистки воды, массажное кресло и уютный электрокамин для максимального комфорта. Дополните свой отдых пением в караоке, настольными играми или ароматным кальяном для полного расслабления.',
    capacity: 10,
    price: '2500₽/час',
    steamType: 'Финская',
    capacityText: '6 человек (макс. 10 человек, доплата 300₽/час за человека свыше 6)',
    featureIds: ['finnishSauna', 'pool', 'tv', 'karaoke', 'massage', 'bucket', 'relaxZone', 'massageApparatus'],
    imagePaths: finSmallImages,
  },
  'turkey': {
    ...commonData,
    title: 'Турецкий зал',
    description:
      'Погрузитесь в атмосферу восточной неги в нашем Турецком зале, созданном для мягкого семейного отдыха и полного релакса. Вместо традиционной парной вас ждет влажный и комфортный хаммам, а после него — расслабляющее джакузи с гидромассажем на четверых. Разнообразить досуг помогут партия в бильярд, настольные игры или кальян, превращая ваш визит в незабываемое событие.',
    capacity: 8,
    price: '1800-2000₽/час',
    steamType: 'Турецкая (Хаммам), Финская',
    capacityText: '10 человек (макс. 20 человек, доплата 300₽/час за человека свыше 6)',
    featureIds: ['finnishSauna', 'tv', 'karaoke', 'massage', 'massageApparatus', 'wifi', 'turkeySauna', 'uziSpa', 'hydroMassage', 'bucket', 'relaxZone', 'billiard'],
    imagePaths: turkeyImages,
  },
  'apps': {
    ...commonData,
    title: 'Апартаменты',
    description:
      'Уютные Апартаменты — это идеальный выбор для романтического отдыха вдвоем, где вас никто не побеспокоит. Для вас оборудована небольшая финская парная с вениками, душевая кабина и комфортная кровать для полноценного уединения. Проведите время за просмотром TV, включите любимую музыку или устройте вечер караоке, создав свою неповторимую атмосферу.',
    capacity: 2,
    price: '800-1000₽/час',
    steamType: 'Финская',
    capacityText: '2 человека',
    featureIds: ['finnishSauna', 'tv', 'karaoke', `privateSetting` ],
    imagePaths: appsImages,
  },
};

export const roomSlugs = Object.keys(roomsBySlug) as RoomSlug[];