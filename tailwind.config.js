/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#C8102E',
          blue: '#1E3A8A',
          black: '#0B0B0B',
          dark: '#1F1F1F',
          light: '#F5F5F5',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
        'pulse-subtle': 'pulseSubtle 6s infinite',
        'tilt': 'tilt 0.3s ease-out',
        'shine': 'shine 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        tilt: {
          '0%': { transform: 'rotateX(0deg) translateY(0px)' },
          '100%': { transform: 'rotateX(6deg) translateY(-8px)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
