import gluestackPlugin from "@gluestack-ui/nativewind-utils/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 'media' for automatic switching based on system preference
  content: [
    './App.{tsx,jsx,ts,js}',
    './app/**/*.{tsx,jsx,ts,js}',
    './components/**/*.{tsx,jsx,ts,js}',
    './screens/**/*.{tsx,jsx,ts,js}',
    './assets/**/*.{svg}',
  ],
  presets: [require('nativewind/preset')],
  safelist: [
    {
      pattern:
        /(bg|border|text|stroke|fill)-(primary|secondary|tertiary|error|success|warning|info|typography|outline|background)-(0|50|100|200|300|400|500|600|700|800|900|950|white|gray|black|error|warning|muted|success|info|light|dark)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        // Mapping colors to the theme structure
        primary: {
          DEFAULT: 'rgb(var(--color-primary-500) / <alpha-value>)',
          ...[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].reduce(
            (acc, val) => {
              acc[val] = `rgb(var(--color-primary-${val}) / <alpha-value>)`
              return acc
            },
            {},
          ),
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary-500) / <alpha-value>)',
          ...[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].reduce(
            (acc, val) => {
              acc[val] = `rgb(var(--color-secondary-${val}) / <alpha-value>)`
              return acc
            },
            {},
          ),
        },
        tertiary: {
          DEFAULT: 'rgb(var(--color-tertiary-500) / <alpha-value>)',
          ...[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].reduce(
            (acc, val) => {
              acc[val] = `rgb(var(--color-tertiary-${val}) / <alpha-value>)`
              return acc
            },
            {},
          ),
        },
        background: {
          DEFAULT: 'rgb(var(--color-background-light) / <alpha-value>)',
          light: 'rgb(var(--color-background-light) / <alpha-value>)',
          muted: 'rgb(var(--color-background-muted) / <alpha-value>)',
          ...[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].reduce(
            (acc, val) => {
              acc[val] = `rgb(var(--color-background-${val}) / <alpha-value>)`
              return acc
            },
            {},
          ),
        },
        typography: {
          DEFAULT: 'rgb(var(--color-typography-primary) / <alpha-value>)',
          contrast: 'rgb(var(--color-typography-contrast) / <alpha-value>)',
          secondary: 'rgb(var(--color-typography-secondary) / <alpha-value>)',
          dark: 'rgb(var(--color-typography-dark) / <alpha-value>)',
          muted: 'rgb(var(--color-typography-muted) / <alpha-value>)',
        },
        error: {
          DEFAULT: 'rgb(var(--color-error-500) / <alpha-value>)',
          ...[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].reduce(
            (acc, val) => {
              acc[val] = `rgb(var(--color-error-${val}) / <alpha-value>)`
              return acc
            },
            {},
          ),
        },
        warning: {
          DEFAULT: 'rgb(var(--color-warning-500) / <alpha-value>)',
          ...[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].reduce(
            (acc, val) => {
              acc[val] = `rgb(var(--color-warning-${val}) / <alpha-value>)`
              return acc
            },
            {},
          ),
        },
        success: {
          DEFAULT: 'rgb(var(--color-success-500) / <alpha-value>)',
          ...[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].reduce(
            (acc, val) => {
              acc[val] = `rgb(var(--color-success-${val}) / <alpha-value>)`
              return acc
            },
            {},
          ),
        },
        info: {
          DEFAULT: 'rgb(var(--color-info-500) / <alpha-value>)',
          ...[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].reduce(
            (acc, val) => {
              acc[val] = `rgb(var(--color-info-${val}) / <alpha-value>)`
              return acc
            },
            {},
          ),
        },
      },
      fontFamily: {
        heading: ['Roboto', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        extrablack: '950',
      },
      fontSize: {
        '2xs': '10px',
      },
      boxShadow: {
        'hard-1': '-2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
        'hard-2': '0px 3px 10px 0px rgba(38, 38, 38, 0.20)',
        'hard-3': '2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
        'hard-4': '0px -3px 10px 0px rgba(38, 38, 38, 0.20)',
        'hard-5': '0px 2px 10px 0px rgba(38, 38, 38, 0.10)',
        'soft-1': '0px 0px 10px rgba(38, 38, 38, 0.1)',
        'soft-2': '0px 0px 20px rgba(38, 38, 38, 0.2)',
        'soft-3': '0px 0px 30px rgba(38, 38, 38, 0.1)',
        'soft-4': '0px 0px 40px rgba(38, 38, 38, 0.1)',
      },
      indicator: {
        primary: 'rgb(var(--color-indicator-focus) / <alpha-value>)',
        success: 'rgb(var(--color-indicator-success) / <alpha-value>)',
        error: 'rgb(var(--color-indicator-error) / <alpha-value>)',
        warning: 'rgb(var(--color-indicator-warning) / <alpha-value>)',
      },
    },
  },
  plugins: [gluestackPlugin],
}
