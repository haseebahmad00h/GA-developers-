/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          black: '#000000',
          dark: '#070709',
          charcoal: '#0F0F14',
          surface: 'rgba(255, 255, 255, 0.05)',
          'surface-hover': 'rgba(255, 255, 255, 0.09)',
          border: 'rgba(255, 255, 255, 0.12)',
          'border-hover': 'rgba(255, 255, 255, 0.28)',
          silver: '#E5E5EA',
          light: '#F5F5F7',
          muted: '#8E8E93',
          gray: '#2C2C2E',
          subtle: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(255, 255, 255, 0.15)'
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Plus Jakarta Sans"',
          'Inter',
          'sans-serif'
        ]
      },
      boxShadow: {
        'liquid-glass': '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
        'liquid-hover': '0 30px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 255, 255, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.35)',
        'apple-btn': '0 8px 24px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
        'apple-pill': '0 12px 35px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.2)'
      },
      backdropBlur: {
        'liquid': '24px',
        'heavy': '36px'
      }
    },
  },
  plugins: [],
}
