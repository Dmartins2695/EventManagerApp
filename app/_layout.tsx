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
      <View className={'bg-amber-500'}>
        <TextField className={'text-center'}>something cool</TextField>
      </View>
    </PaperProvider>
  )
}
