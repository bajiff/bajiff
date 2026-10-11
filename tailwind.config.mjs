/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Neobrutalism design tokens
        'neon-blue': '#0055FF',
        'neon-green': '#00FF66',
        'neon-red': '#FF3333',
        'neon-purple': '#B026FF',
        'neon-cyan': '#39FF14',
        'electric-yellow': '#FFF000',
      },
      boxShadow: {
        'hard-sm': '3px 3px 0px #000',
        'hard-md': '5px 5px 0px #000',
        'hard-lg': '8px 8px 0px #000',
        'hard-inverse': '-3px -3px 0px #000',
      },
      fontFamily: {
        'space-mono': ['"Space Mono"', 'monospace'],
        'courier': ['Courier', 'monospace'],
      },
      borderWidth: {
        'hard': '3px',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}