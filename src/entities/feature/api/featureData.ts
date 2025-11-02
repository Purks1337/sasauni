import type { FeatureId, FeatureSpec } from '../model/types';

export const featuresById: Record<FeatureId, FeatureSpec> = {
  finnishSauna: { label: 'Сухой жаркий пар – финская парная', iconPath: '/images/water-icon.svg' },
  pool: { label: 'Бассейн с системой тройной очистки воды', iconPath: '/images/pool-icon.svg' },
  turkeySauna: { label: 'Хаммам', iconPath: '/images/turkey-sauna-icon.svg' },
  billiard: { label: 'Бильярд', iconPath: '/images/billiard-icon.svg' },
  tv: { label: 'Смарт TV и bluetooth аудиосистема', iconPath: '/images/tv-icon.svg' },
  wifi: { label: 'Wi‑Fi', iconPath: '/images/wifi-icon.svg' },
  hydroMassage: { label: 'Гидромассаж', iconPath: '/images/hydro-massage-icon.svg' },
  karaoke: { label: 'Профессиональное оборудование для караоке', iconPath: '/images/microphone-icon.svg' },
  waterfall: { label: 'Водопад', iconPath: '/images/waterfall-icon.svg' },
  uziSpa: { label: 'Джакузи-SPA', iconPath: '/images/uziSpa-icon.svg' },
  wave: { label: 'Искуственная волна', iconPath: '/images/wave-icon.svg' },
  massage: { label: 'Все виды ручного массажа', iconPath: '/images/massage-icon.svg' },
  massageApparatus: { label: 'Аппаратный массаж', iconPath: '/images/massage-apparatus-icon.svg' },
  bucket: { label: 'Обливное ведро', iconPath: '/images/bucket-icon.svg' },
  relaxZone: { label: 'Зона отдыха', iconPath: '/images/relax-zone-icon.svg' },
};

