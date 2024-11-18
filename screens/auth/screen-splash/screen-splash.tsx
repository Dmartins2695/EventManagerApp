import React, { useEffect, useState } from 'react'
import { VStack } from '@/components/ui/vstack'
import { Button, ButtonText } from '@/components/ui/button'
import { Image } from '@/components/ui/image'
import AuthLayout from '@/screens/auth/layout/_layout'
import { auth } from '@/firebaseConfig'
import { User } from '@firebase/auth-types'
import { useRouter } from 'expo-router'

const SplashScreenWithLeftBackground = () => {
  const router = useRouter()
  const imageSource = require('@/assets/images/ejasLogo-Photoroom.png')

  return (
    <VStack
      className="w-full max-w-[440px] items-center h-full justify-center gap-4"
      space="lg">
      <Image
        source={imageSource}
        className={`max-w-[50px] max-h-[50px] w-[10%] h-[10%] rounded-full border-0 p-0 overflow-hidden `}
        alt={'logo'}
      />
      <VStack className="w-full h-2 gap-4" space="sm">
        <Button
          className="w-full my-5"
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
