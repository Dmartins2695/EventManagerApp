module.exports = {
  plugins: [
    [
      '@expo/config-plugins/react-native-firebase',
      {
        modules: ['auth', 'firestore'],
      },
    ],
  ],
}
