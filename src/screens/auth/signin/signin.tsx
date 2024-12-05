import React from 'react'
import { Image, View } from 'react-native'
import AuthLayout from '@/screens/auth/layout/_layout'
import { Heading } from '@/components/Heading'

export const Login = () => {
  const imageSource = require('/assets/images/ejasLogo-Photoroom.png')

  return (
    <View className={'flex-col max-w-fit'}>
      <Image
        source={imageSource}
        className="h-64 w-64 self-center rounded-full border-0 p-0 overflow-hidden"
        alt={'logo'}
      />
      <View className={'items-center'}>
        <Heading variant={'displayMedium'}>Login</Heading>
      </View>
    </View>
  )
}

export const SignIn = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  )
}
