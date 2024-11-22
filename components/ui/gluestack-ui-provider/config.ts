'use client'
import { vars } from 'nativewind'

export const config = {
  light: vars({
    /* Primary Brand Colors */
    '--color-primary-0': '255 239 219',
    '--color-primary-50': '255 213 184',
    '--color-primary-100': '255 195 146',
    '--color-primary-200': '255 155 84',
    '--color-primary-300': '227 100 20',
    '--color-primary-400': '186 76 15',
    '--color-primary-500': '144 58 11',
    '--color-primary-600': '100 42 7',
    '--color-primary-700': '58 21 3',
    '--color-primary-800': '30 11 2',

    /* Secondary Colors */
    '--color-secondary-0': '237 246 243',
    '--color-secondary-50': '214 236 229',
    '--color-secondary-100': '183 223 209',
    '--color-secondary-200': '147 209 188',
    '--color-secondary-300': '112 196 168',
    '--color-secondary-400': '70 180 148',
    '--color-secondary-500': '143 192 169',
    '--color-secondary-600': '104 154 132',
    '--color-secondary-700': '75 115 99',
    '--color-secondary-800': '46 77 66',
    '--color-secondary-900': '24 39 35',

    /* Backgrounds */
    '--color-background-light': '255 248 237',
    '--color-background-muted': '248 242 230',
    '--color-background-accent': '255 234 208',
    '--color-background-error': '253 236 234',
    '--color-background-warning': '255 250 230',
    '--color-background-success': '234 242 239',
    '--color-background-info': '245 246 242',

    /* Typography */
    '--color-typography-primary': '85 85 85',
    '--color-typography-secondary': '157 140 131',
    '--color-typography-disabled': '73 41 27',
    '--color-typography-light': '255 255 255',

    /* Borders and Outlines */
    '--color-border-light': '200 200 200',
    '--color-border-muted': '245 245 245',
    '--color-border-active': '90 150 230',

    /* Indicators */
    '--color-indicator-focus': '227 100 20',
    '--color-indicator-success': '50 200 100',
    '--color-indicator-error': '209 67 52',
    '--color-indicator-warning': '230 177 46',

    /* Error Shades */
    '--color-error-50': '253 236 234',
    '--color-error-100': '249 196 187',
    '--color-error-200': '240 154 139',
    '--color-error-300': '226 112 94',
    '--color-error-400': '209 67 52',
    '--color-error-500': '169 53 41',
    '--color-error-600': '128 40 31',
    '--color-error-700': '85 27 20',
    '--color-error-800': '50 15 11',
    '--color-error-900': '30 8 6',

    /* Warning Shades */
    '--color-warning-50': '255 250 230',
    '--color-warning-100': '254 236 190',
    '--color-warning-200': '252 219 140',
    '--color-warning-300': '246 200 90',
    '--color-warning-400': '230 177 46',
    '--color-warning-500': '186 143 37',
    '--color-warning-600': '143 110 28',
    '--color-warning-700': '99 76 19',
    '--color-warning-800': '60 46 11',
    '--color-warning-900': '35 27 7',

    /* Info Shades */
    '--color-info-50': '245 246 242',
    '--color-info-100': '221 229 220',
    '--color-info-200': '188 204 192',
    '--color-info-300': '152 175 159',
    '--color-info-400': '120 146 129',
    '--color-info-500': '92 111 97',
    '--color-info-600': '73 89 78',
    '--color-info-700': '54 66 58',
    '--color-info-800': '36 44 39',
    '--color-info-900': '20 24 22',

    /* Success Shades */
    '--color-success-50': '234 242 239',
    '--color-success-100': '209 230 223',
    '--color-success-200': '173 214 198',
    '--color-success-300': '139 195 173',
    '--color-success-400': '112 196 168',
    '--color-success-500': '91 154 132',
    '--color-success-600': '68 115 98',
    '--color-success-700': '46 77 66',
    '--color-success-800': '27 44 38',
    '--color-success-900': '15 24 20',
  }),
  dark: vars({
    /* Error Shades */
    '--color-error-50': '60 30 30',
    '--color-error-100': '90 45 45',
    '--color-error-200': '120 60 60',
    '--color-error-300': '150 75 75',
    '--color-error-400': '180 90 90',
    '--color-error-500': '210 105 105',
    '--color-error-600': '240 120 120',
    '--color-error-700': '255 140 140',
    '--color-error-800': '255 160 160',
    '--color-error-900': '255 180 180',

    /* Warning Shades */
    '--color-warning-50': '60 50 30',
    '--color-warning-100': '90 75 45',
    '--color-warning-200': '120 100 60',
    '--color-warning-300': '150 125 75',
    '--color-warning-400': '180 150 90',
    '--color-warning-500': '210 175 105',
    '--color-warning-600': '240 200 120',
    '--color-warning-700': '255 220 140',
    '--color-warning-800': '255 240 160',
    '--color-warning-900': '255 250 180',

    /* Info Shades */
    '--color-info-50': '30 40 60',
    '--color-info-100': '45 60 90',
    '--color-info-200': '60 80 120',
    '--color-info-300': '75 100 150',
    '--color-info-400': '90 120 180',
    '--color-info-500': '105 140 210',
    '--color-info-600': '120 160 240',
    '--color-info-700': '140 180 255',
    '--color-info-800': '160 200 255',
    '--color-info-900': '180 220 255',

    /* Success Shades */
    '--color-success-50': '30 60 40',
    '--color-success-100': '45 90 60',
    '--color-success-200': '60 120 80',
    '--color-success-300': '75 150 100',
    '--color-success-400': '90 180 120',
    '--color-success-500': '105 210 140',
    '--color-success-600': '120 240 160',
    '--color-success-700': '140 255 180',
    '--color-success-800': '160 255 200',
    '--color-success-900': '180 255 220',
  }),
}
