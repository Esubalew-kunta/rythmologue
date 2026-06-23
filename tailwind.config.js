/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand tokens — see DESIGN_PLAN.md §B
        ink: {
          DEFAULT: '#0E1B2A', // Encre / Ink Navy — text + authority surfaces
          soft: '#1B2C3E',
          mute: '#33485C',
        },
        paper: {
          DEFAULT: '#F7F5F0', // Papier / Clinical Paper — primary background
          warm: '#EFEBE2',
          pure: '#FFFFFF',
        },
        signal: {
          DEFAULT: '#0FB5A6', // Signal / Electric Teal — the brand spark
          deep: '#0A8C82',
          glow: '#3FD9CC',
        },
        gold: {
          DEFAULT: '#C8A24B', // Or / Diploma Gold — prestige accents
          soft: '#DCC089',
        },
        slate: {
          DEFAULT: '#5B6B7A', // Brume / Mist Slate — secondary text/UI
          light: '#8A98A4',
        },
        alert: {
          DEFAULT: '#E0744F', // Alerte / Soft Coral — risk callouts + errors ONLY
          soft: '#F1C4B2',
        },
      },
      fontFamily: {
        // Display: Fraunces · Body: Hanken Grotesk · Utility: IBM Plex Mono
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // mobile-first scale (rem)
        '2xs': ['0.75rem', { lineHeight: '1.4' }],
        xs: ['0.8125rem', { lineHeight: '1.5' }],
        sm: ['0.9375rem', { lineHeight: '1.6' }],
        base: ['1.0625rem', { lineHeight: '1.7' }],
        lg: ['1.1875rem', { lineHeight: '1.6' }],
        xl: ['1.375rem', { lineHeight: '1.45' }],
        '2xl': ['1.75rem', { lineHeight: '1.25' }],
        '3xl': ['2.25rem', { lineHeight: '1.15' }],
        '4xl': ['3rem', { lineHeight: '1.05' }],
        '5xl': ['3.75rem', { lineHeight: '1.0' }],
        '6xl': ['4.75rem', { lineHeight: '0.98' }],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      borderRadius: {
        // soft-clinical: never fully pill on cards; precise corners
        card: '14px',
        xl2: '22px',
      },
      maxWidth: {
        prose: '46ch',
        reading: '68ch',
      },
      boxShadow: {
        card: '0 1px 2px rgba(14,27,42,0.04), 0 12px 32px -16px rgba(14,27,42,0.14)',
        lift: '0 20px 60px -24px rgba(14,27,42,0.30)',
        signal: '0 8px 30px -8px rgba(15,181,166,0.45)',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        sweep: {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
}
