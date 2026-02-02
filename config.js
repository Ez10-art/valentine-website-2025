// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================
/**
 * Valentine Confession Experience - Professional Edition
 * @author   Senior Frontend Dev + Graphic Designer mindset
 * @version  2026-valentine-special
 * @desc     Interactive, emotionally engaging "Will you be my Valentine?" page
 *           with floating assets, quiz, love meter, photo gallery & celebration
 */

const VALENTINE_CONFIG = Object.freeze({

  // ────────────────────────────────────────────────
  //  Metadata & Personalization
  // ────────────────────────────────────────────────
  meta: {
    valentineName: "Tonpangmenla oversmart sleeping without me na ❤️",
    pageTitle:      "Will You Be My Valentine? 💗✨",
    faviconEmoji:   "💝",
  },

  // ────────────────────────────────────────────────
  //  Visual Theme & Colors (Cohesive romantic palette)
  // ────────────────────────────────────────────────
  theme: {
    background: {
      type: 'gradient',
      gradient: {
        start: '#ffccd5',     // soft rose
        middle: '#f8c8dc',    // blush
        end:   '#f9e4e8',     // very light peach
      },
      fallbackImage: 'https://images.unsplash.com/photo-1519741497674-2814507c4d8d?w=1600&q=80', // soft petals (or your photo)
      overlayOpacity: 0.65,
    },
    colors: {
      primary:   '#ff6b81',     // vibrant coral pink
      primaryHover: '#ff878f',
      accent:    '#ffe066',     // warm golden yellow for highlights
      text:      '#2d1a26',     // deep plum for readability
      textLight: '#4a2c3f',
      success:   '#a29bfe',     // soft purple for yes/celebration
      danger:    '#ff7675',
    },
    typography: {
      headingFont: "'Playfair Display', serif",
      bodyFont:    "'Poppins', sans-serif",
      baseSize:    'clamp(1.1rem, 2.5vw, 1.25rem)',
    },
  },

  // ────────────────────────────────────────────────
  //  Floating Background Elements (optimized performance)
  // ────────────────────────────────────────────────
  floatingAssets: {
    durationMin: '18s',
    durationMax: '35s',
    driftRange:  '60px',
    elements: [
      // Animated GIFs / PNGs with transparency (better than emoji for polish)
      { type: 'image', src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHZ2bG9oZ3V0bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9wN2Z0b3F2bG9w

