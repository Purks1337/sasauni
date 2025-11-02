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

