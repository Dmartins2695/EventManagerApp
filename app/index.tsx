import React, { useEffect } from 'react'
import { SafeAreaView } from '@/components/ui/safe-area-view'
import { ActivityIndicator } from 'react-native'

const Index = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // @ts-ignore
      router.push('auth/splash-screen')
    }, 0)

    return () => clearTimeout(timeout) // Cleanup timeout
  }, [])

  return (
    <SafeAreaView className="flex items-center justify-center h-full">
      <ActivityIndicator size="large" color="#0000ff" />
    </SafeAreaView>
  );
}

export default Index
