import type { FeatureId, FeatureSpec } from '../model/types';

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

