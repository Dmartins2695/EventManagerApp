import React, { useEffect } from 'react'
import { router } from 'expo-router'
import { Text } from '@/components/ui/text'
import { View } from 'react-native'

const Index = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // @ts-ignore
      //router.push('auth/splash-screen')
    }, 0)

    return () => clearTimeout(timeout) // Cleanup timeout
  }, [])

  return (
    <View className="flex-1 justify-center items-center bg-red-500 debug-screens">
      <Text className="text-white text-xl">NativeWind Test</Text>
    </View>
  )
}

export default Index
