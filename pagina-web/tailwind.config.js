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
    }
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
        'ping-fast': 'ping 0.7s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
