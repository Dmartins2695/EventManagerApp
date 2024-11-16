import { VStack } from '@/components/ui/vstack'
import { Button, ButtonText } from '@/components/ui/button'
import { useColorScheme } from 'nativewind'
import React from 'react'
import { useRouter } from '@unitools/router'
import { Image } from '@/components/ui/image'
import AuthLayout from '@/screens/auth/layout/_layout'

const SplashScreenWithLeftBackground = () => {
  const router = useRouter()
  const { colorScheme } = useColorScheme()
  const imageSource = require('@/assets/images/ejasLogo-Photoroom.png')
  return (
    <VStack
      className="w-full max-w-[440px] items-center h-full justify-around"
      space="lg"
    >
      {/* Use Image component instead of Icon for custom PNG */}
      <Image
        source={imageSource}
        className={`w-[150px] h-[150px] rounded-full border-0 p-0 overflow-hidden ${colorScheme === 'dark' ? 'tint-white' : 'tint-black'} `}
      />
      <VStack className="w-full" space="lg">
        <Button
          className="w-full"
          onPress={() => {
            router.push('/auth/signin')
          }}
        >
          <ButtonText className="font-medium">Log in</ButtonText>
        </Button>
        <Button
          onPress={() => {
            router.push('/auth/signup')
          }}
        >
          <ButtonText className="font-medium">Sign Up</ButtonText>
        </Button>
      </VStack>
    </VStack>
  )
}

export const SplashScreen = () => {
  return (
    <AuthLayout>
      <SplashScreenWithLeftBackground />
    </AuthLayout>
  )
}
