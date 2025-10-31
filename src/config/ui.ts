/**
 * UI configuration shared across the app.
 */
export const SLIDESHOW_INTERVAL_MS = 3200; // How long each image is shown before crossfade

// Fine-tune slideshow animation globally from here
export const SLIDESHOW_CONFIG = {
  crossfadeMs: 1600,         // Crossfade duration between images
  zoomMs: 5000,              // Duration of the zoom animation per image
  zoomFrom: 1.1,             // Starting scale
  zoomTo: 1.0,               // Ending scale
  zoomEase: 'ease-in-out',   // CSS timing function for zoom animation
  fadeEase: 'ease-in-out',   // CSS timing function for crossfade
} as const;


