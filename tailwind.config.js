/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F5F1E9',
          50: '#FCFAF7',
          100: '#F5F1E9',
          200: '#EBE3D6',
          300: '#DDD1BD',
        },
        espresso: {
          DEFAULT: '#29221E',
          900: '#1B1613',
          800: '#29221E',
          700: '#3D342F',
        },
        walnut: {
          DEFAULT: '#604533',
          light: '#7A5B45',
          dark: '#483325',
          muted: '#8C6C54',
        },
        beige: {
          DEFAULT: '#D8C8B5',
          light: '#EBE2D5',
          dark: '#C2AE97',
        },
        charcoal: {
          DEFAULT: '#33302D',
          light: '#4B4743',
          dark: '#242220',
        },
        brass: {
          DEFAULT: '#C5A880',
          light: '#DBC5A6',
          dark: '#A6885F',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(41, 34, 30, 0.08), 0 0 1px 1px rgba(96, 69, 51, 0.05)',
        'luxury-hover': '0 30px 60px -20px rgba(41, 34, 30, 0.16), 0 0 1px 1px rgba(96, 69, 51, 0.1)',
        'card': '0 10px 30px -10px rgba(41, 34, 30, 0.06)',
      }
    },
  },
  plugins: [],
}
