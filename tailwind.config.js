import { tailwindColors } from './theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './global.css',
    './node_modules/react-native-paper/**/*.{ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: generateTailwindColors(tailwindColors.light),
      fontFamily: {
        heading: ['Roboto', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

function generateTailwindColors(baseColors) {
  const scales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

  // Function to generate CSS variables with alpha values
  const createScale = (key, color) => {
    return scales.reduce((acc, scale) => {
      acc[scale] = `rgb(var(--color-${key}-${scale}) / <alpha-value>)`
      return acc
    }, {})
  }

  const result = {}
  for (const [key, value] of Object.entries(baseColors)) {
    if (typeof value === 'string' && value.startsWith('rgb')) {
      result[key] = {
        DEFAULT: `rgb(var(--color-${key}-500) / <alpha-value>)`,
        ...createScale(key, value),
      }
    } else {
      result[key] = value // Include non-color properties as is
    }
  }
  return result
}
