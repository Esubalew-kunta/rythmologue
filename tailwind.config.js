/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ── Marine + Signal palette ─────────────────────────────────────────
        // RULE: structural → marine. action → signal (red). nothing else.
        marine: { DEFAULT: '#0D2240', deep: '#0A1A33', soft: '#1B3A5C' }, // nav, headings, structure
        signal: { DEFAULT: '#C0392B', deep: '#A33124', soft: '#E0A39B' }, // ALL CTAs / actions / active
        encre: { DEFAULT: '#0A1729', nuit: '#050E1C' },                   // dark surfaces — pure navy-black
        or: { DEFAULT: '#CBB388', patine: '#A98C5F', soft: '#E2D2B0' },   // academic champagne gold
        ardoise: { DEFAULT: '#2A3140', soft: '#3C4456' },                 // slate-navy body text
        brume: { DEFAULT: '#6E7585', light: '#9AA0AD' },                  // muted captions
        craie: { DEFAULT: '#F6F2EA', soft: '#EFE9DD', pure: '#FCFAF5' },  // cream backgrounds
        petrole: { DEFAULT: '#1C5E63', glow: '#2E8A8F' },                 // ECG line stroke ONLY

        // ── Legacy aliases → remapped so existing pages re-skin automatically.
        // `prune` kept as a name but now points at signal red (action).
        prune: { DEFAULT: '#C0392B', deep: '#A33124', soft: '#E0A39B' },
        ink: { DEFAULT: '#0D2240', soft: '#1B3A5C', mute: '#33485C' },    // → marine
        paper: { DEFAULT: '#F6F2EA', warm: '#EFE9DD', pure: '#FCFAF5' },  // → craie
        gold: { DEFAULT: '#CBB388', soft: '#E2D2B0' },                    // → or
        slate: { DEFAULT: '#6E7585', light: '#9AA0AD' },                  // → brume
        alert: { DEFAULT: '#C0392B', soft: '#E7B8B2' },                   // risk callouts (red)
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.75rem', { lineHeight: '1.4' }],
        xs: ['0.8125rem', { lineHeight: '1.5' }],
        sm: ['0.9375rem', { lineHeight: '1.6' }],
        base: ['1rem', { lineHeight: '1.65' }],
        lg: ['1.1875rem', { lineHeight: '1.55' }],
        xl: ['1.375rem', { lineHeight: '1.4' }],
        '2xl': ['1.75rem', { lineHeight: '1.2' }],
        '3xl': ['2.25rem', { lineHeight: '1.12' }],
        '4xl': ['2.75rem', { lineHeight: '1.08' }],
        '5xl': ['3.5rem', { lineHeight: '1.04' }],
        '6xl': ['4.5rem', { lineHeight: '1.0' }],
        '7xl': ['5.5rem', { lineHeight: '0.98' }],
      },
      letterSpacing: { eyebrow: '0.22em', tightish: '-0.02em' },
      borderRadius: { card: '8px', xl2: '20px' },
      maxWidth: { prose: '46ch', reading: '68ch', def: '720px' },
      boxShadow: {
        card: '0 1px 2px rgba(13,34,64,0.04), 0 14px 34px -18px rgba(13,34,64,0.16)',
        lift: '0 22px 60px -26px rgba(13,34,64,0.32)',
        nav: '0 1px 12px rgba(0,0,0,0.08)',
        accent: '0 10px 30px -10px rgba(192,57,43,0.40)',
      },
      transitionTimingFunction: { calm: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: { 'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both' },
    },
  },
  plugins: [],
}
