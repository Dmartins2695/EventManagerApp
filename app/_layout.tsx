import 'nativewind' // Required for NativeWind
import '../global.css'
import { PaperProvider } from 'react-native-paper'
import { Stack } from 'expo-router'
import { lightTheme } from '../theme'
import { View } from 'react-native'
import React from 'react'
import { verifyInstallation } from 'nativewind'
import { TextField } from '@/components/WrappedComponents'

export default function RootLayoutNav() {
  verifyInstallation()

  return (
    <PaperProvider theme={lightTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth/signin" />
        <Stack.Screen name="auth/signup" />
        <Stack.Screen name="user/dashboard" />
        {/*<Stack.Screen name="forgot-password" />
          <Stack.Screen name="create-password" />
          */}
      </Stack>
    </PaperProvider>
  )
}
