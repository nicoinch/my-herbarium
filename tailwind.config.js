const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        dark: '#151515',
        light: '#ffffff',
        'pink-dark': '#640227',
        'pink-dark-10': '#640227',
        'pink-medium': '#833552',
        'pink-light': '#f8d9e8',
        'pink-highlight': '#ff62ae',
        'blue-dark': '#1f2c2e',
        'blue-dark-10': '#1f2c2e',
        'blue-medium': '#354143',
        'blue-light': '#9cb5ba',
        'blue-highlight': '#9beeff',
        'green-dark': '#394107',
        'green-dark-10': '#394107',
        'green-medium': '#4d5420',
        'green-light': '#d4e99c',
        'green-highlight': '#97c910',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'title-1': ['40px', '64px'],
        'title-2': ['18px', 'auto'],
        text: ['1.25rem', 'auto'],
      },
    },
  },
  plugins: [],
};
