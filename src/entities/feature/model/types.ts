export type FeatureId =
  | 'finnishSauna'
  | 'pool'
  | 'billiard'
  | 'tv'
  | 'wifi'
  | 'karaoke'
  | 'waterfall'
  | 'uziSpa'
  | 'wave'
  | 'massage'
  | 'massageApparatus'
  | 'bucket'
  | 'relaxZone'
  | 'hydroMassage'
  | 'turkeySauna';

export interface FeatureSpec {
  label: string;
  iconPath: string; // path under /public/images
}

