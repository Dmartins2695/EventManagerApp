import React, { useEffect } from 'react'
import { SafeAreaView } from '@/components/ui/safe-area-view'
import { ActivityIndicator } from 'react-native'
import { router } from 'expo-router'

const Index = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // @ts-ignore
      router.push('auth/signin')
    }, 0)

    return () => clearTimeout(timeout) // Cleanup timeout
  }, [])

  return <></>
}

export default Index
