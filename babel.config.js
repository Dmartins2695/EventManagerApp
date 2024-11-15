/*module.exports = {
  presets: [
    'babel-preset-expo', // For Expo compatibility
    ['@babel/preset-env', { targets: { node: 'current' } }], // Specify the environment target
    ['@babel/preset-react', { runtime: 'automatic' }], // React preset with automatic runtime
  ],
  plugins: [
    '@babel/plugin-syntax-jsx', // Enables parsing of JSX
  ],
}*/

const imageBabel = require('@unitools/babel-plugin-universal-image')
const path = require('path')

module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@unitools/image': '@unitools/image-expo',
            '@unitools/router': '@unitools/router-expo',
            '@unitools/link': '@unitools/link-expo',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
