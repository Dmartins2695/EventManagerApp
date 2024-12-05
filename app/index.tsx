import React, { useEffect } from 'react'
import { router } from 'expo-router'

const Index = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('auth/signin')
    }, 0)

    return () => clearTimeout(timeout) // Cleanup timeout
  }, [])

  return <></>
}

export default Index
