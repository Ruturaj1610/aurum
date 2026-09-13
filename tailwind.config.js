/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FAF6EE',
          100: '#F5EDDC',
          200: '#EBD9BA',
          300: '#E0C38A',
          400: '#D4AF37',
          500: '#C59B27',
          600: '#A47D1C',
          700: '#7E5F15',
          800: '#58420E',
          900: '#322508',
        },
        champagne: {
          DEFAULT: '#F5E6CA',
          light: '#FBF5EB',
          dark: '#E2CB9F',
        },
        // Light mode: warm ivory/cream backgrounds
        linen: {
          50: '#FDFBF7',
          100: '#FAF7F2',
          200: '#F2ECE2',
          300: '#E8E0D0',
          400: '#D4C8B2',
          500: '#B8A890',
        },
        // Light mode: deep charcoal typography
        charcoal: {
          900: '#1C1A17',
          800: '#2D2B26',
          700: '#3F3C38',
          600: '#524F4A',
          500: '#6B6860',
          400: '#88847C',
          300: '#A8A49E',
        },
        // Dark mode backgrounds (existing)
        ivory: {
          50: '#FCFBF9',
          100: '#F8F5EE',
          200: '#EFE9DE',
          300: '#DFD5C2',
          400: '#BDB19B',
          500: '#8E826C',
        },
        dark: {
          950: '#07080A',
          900: '#0C0D11',
          850: '#12141A',
          800: '#171922',
          750: '#1E212D',
          700: '#272B3A',
          600: '#3D4358',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(197, 155, 75, 0.2)',
        'gold-glow-lg': '0 0 45px rgba(197, 155, 75, 0.3)',
        'light-card': '0 4px 24px -4px rgba(28, 26, 23, 0.08)',
        'light-card-hover': '0 12px 40px -8px rgba(28, 26, 23, 0.16)',
        'dark-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FBF5EB 0%, #D4AF37 50%, #A47D1C 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent)',
        'radial-gold': 'radial-gradient(circle at center, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
