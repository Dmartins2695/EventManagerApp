import FontAwesome from '@expo/vector-icons/FontAwesome'
import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect } from 'react'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import '@/global.css'
import config from '@/gluestack-ui.config.json'
import { Text } from '@/components/ui/text'
import { View } from 'react-native'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <GluestackUIProvider mode={'light'}>
      {/*<ThemeProvider value={DefaultTheme}>*/}
      <Stack screenOptions={{ headerShown: false }}>
        <View className="flex-1 justify-center items-center bg-red-500 debug-screens">
          <Text className="text-white text-xl">NativeWind Test</Text>
        </View>
        {/*<Stack.Screen name="signin" />
          <Stack.Screen name="signup" />
          <Stack.Screen name="forgot-password" />
          <Stack.Screen name="create-password" />
          <Stack.Screen name="user/dahboard" />*/}
      </Stack>
      {/*</ThemeProvider>*/}
    </GluestackUIProvider>
  );
}
