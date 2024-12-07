import 'nativewind' // Required for NativeWind
import '../global.css'
import { PaperProvider } from 'react-native-paper'
import { Stack } from 'expo-router'
import { lightTheme } from '../theme'
import React from 'react'
import { SnackbarProvider } from '@/components/SnackbarProvider'

export default function RootLayoutNav() {
  return (
    <PaperProvider theme={lightTheme}>
      <SnackbarProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="auth/signin" />
          <Stack.Screen name="auth/signup" />
          <Stack.Screen name="user/dashboard" />
          {/*<Stack.Screen name="forgot-password" />
          <Stack.Screen name="create-password" />
          */}
        </Stack>
      </SnackbarProvider>
    </PaperProvider>
  )
}
