/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'var(--font-montserrat)' ],
        mono: [ 'var(--font-roboto-mono)' ],
        serif: [ 'var(--font-lora)' ]
      },
      colors: {
        'vfr': '#FF6602',
      },
    }
  },
  plugins: [
    require( 'flowbite/plugin' )
  ],
}
