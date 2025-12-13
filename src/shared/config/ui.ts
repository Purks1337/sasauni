/**
 * UI configuration shared across the app.
 */

// How long each image is fully visible before the next one starts fading in.
// 6000ms = 6 seconds
export const SLIDESHOW_INTERVAL_MS = 6000;

// Fine-tune slideshow animation globally from here.
export const SLIDESHOW_CONFIG = {
  // Duration of the crossfade transition between images.
  // 3000ms for a very smooth, slow fade overlap.
  crossfadeMs: 3000,
  // Starting scale for the zoom animation.
  zoomFrom: 1.15,
  // Ending scale for the zoom animation.
  zoomTo: 1.0,
  // CSS timing function for the zoom animation.
  zoomEase: 'linear', 
  // CSS timing function for the crossfade.
  fadeEase: 'ease-in-out',
} as const;