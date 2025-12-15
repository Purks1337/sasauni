/**
 * UI configuration shared across the app.
 */

// How long each image is fully visible before the next one starts fading in.
// SET TO EXACTLY 8 SECONDS as requested.
export const SLIDESHOW_INTERVAL_MS = 8000;

// Fine-tune slideshow animation globally from here.
export const SLIDESHOW_CONFIG = {
  // Duration of the crossfade transition (fade out).
  // 2000ms gives a smooth transition without stealing too much time from the 8s visibility.
  crossfadeMs: 2000,
  // Starting scale for the zoom animation.
  zoomFrom: 1.0,
  // Ending scale for the zoom animation.
  zoomTo: 1.2,
  // CSS timing function for the zoom animation.
  zoomEase: 'linear', 
  // CSS timing function for the crossfade.
  fadeEase: 'ease-in-out',
} as const;