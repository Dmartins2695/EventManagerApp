import React, { useEffect, useState } from 'react'
import { VStack } from '@/components/ui/vstack'
import { Image } from '@/components/ui/image'
import AuthLayout from '@/screens/auth/layout/_layout'
import { auth } from '@/firebaseConfig'
import { User } from '@firebase/auth-types'
import { useRouter } from 'expo-router'
import { Spinner } from '@/components/ui/spinner'
import colors from 'tailwindcss/colors'

const SplashScreenWithLeftBackground = () => {
  const router = useRouter()
  const imageSource = require('@/assets/images/ejasLogo-Photoroom.png')

  useEffect(() => {
    const timeout = setTimeout(() => {
      // @ts-ignore
      router.push('auth/signin')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <VStack
      className="w-full max-w-[440px] items-center h-full justify-start gap-24"
      space="lg">
      <Image
        source={imageSource}
        className={`w-full h-[320px] rounded-full border-0 p-0 overflow-hidden `}
        alt={'logo'}
      />
      <Spinner size="large" color={colors.gray[500]} />
    </VStack>
  )
}

const RedirectToHomeScreen = () => {
  const router = useRouter()
  router.push('/user/dashboard')
  return <></>
}

export const SplashScreen = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser as User | null)
    })

    return () => unsubscribe() // Cleanup the listener on unmount
  }, [])
  console.log(user)
  return (
    <AuthLayout>
      {user ? <RedirectToHomeScreen /> : <SplashScreenWithLeftBackground />}
    </AuthLayout>
  )
}
