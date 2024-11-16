import React, { useEffect, useState } from 'react'
import { VStack } from '@/components/ui/vstack'
import { Button, ButtonText } from '@/components/ui/button'
import { useColorScheme } from 'nativewind'
import { Image } from '@/components/ui/image'
import AuthLayout from '@/screens/auth/layout/_layout'
import { auth } from '@/firebaseConfig'
import { useRouter } from '@unitools/router'
import { User } from '@firebase/auth-types'

const SplashScreenWithLeftBackground = () => {
  const router = useRouter()
  const { colorScheme } = useColorScheme()
  const imageSource = require('@/assets/images/ejasLogo-Photoroom.png')

  return (
    <VStack
      className="w-full max-w-[440px] items-center h-full justify-around"
      space="lg">
      <Image
        source={imageSource}
        className={`w-[150px] h-[150px] rounded-full border-0 p-0 overflow-hidden ${
          colorScheme === 'dark' ? 'tint-white' : 'tint-black'
        }`}
      />
      <VStack className="w-full" space="lg">
        <Button
          className="w-full"
          onPress={() => {
            router.push('/auth/signin')
          }}>
          <ButtonText className="font-medium">Log in</ButtonText>
        </Button>
        <Button
          onPress={() => {
            router.push('/auth/signup')
          }}>
          <ButtonText className="font-medium">Sign Up</ButtonText>
        </Button>
      </VStack>
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
      setUser(currentUser)
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
