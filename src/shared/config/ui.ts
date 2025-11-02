/**
 * UI configuration shared across the app.
 */

// How long each image is fully visible before the next one starts fading in.
export const SLIDESHOW_INTERVAL_MS = 5000;

// Fine-tune slideshow animation globally from here.
export const SLIDESHOW_CONFIG = {
  // Duration of the crossfade transition between images.
  crossfadeMs: 1600,
  // Starting scale for the zoom animation.
  zoomFrom: 1.1,
  // Ending scale for the zoom animation.
  zoomTo: 1.0,
  // CSS timing function for the zoom animation.
  zoomEase: 'linear', // Use linear for a steady, slow zoom.
  // CSS timing function for the crossfade.
  fadeEase: 'ease-in-out',
} as const;

