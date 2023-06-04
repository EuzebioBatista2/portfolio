/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './public/icons/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    {
      pattern: /^bg-(blue|gray)-(400|500|700)/,
    },
    {
      pattern: /^from-(blue|gray)-(400|500|700)/
    },
    {
      pattern: /^to-(blue|gray)-(400|500|700)/
    },
    '-translate-x-100',
    '-translate-x-200',
    '-translate-x-300',
    'bg-opacity-50',
    'bg-opacity-100',
    'dark:bg-opacity-50',
    'dark:bg-opacity-100',
    'hover:bg-blue-900',
    'hover:bg-gray-900'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10%)' },
        },
      },
      animation: {
        'ping-fast': 'ping 0.7s ease-in-out infinite',
        'bounce-slow': 'bounce 1.5s infinite',
        'bounce-verySlow': 'bounce 2s infinite'
      },
      translate: {
        '100': '100%',
        '200': '200%',
        '300': '300%',
      },
      screens: {
        'mini': { 'raw': '(min-height: 500px) and (max-width: 750px)'},
        'small': { 'raw': '(max-width: 430px)'},
        'tall': { 'raw': '(min-height: 660px) and (max-width: 750px)'},
        'big': { 'raw': '(min-height: 840px) and (max-width: 750px)'},
        'extraBig': { 'raw': '(min-height: 1000px)'},
      }
    },
  },
  plugins: [],
}
