import React from 'react'
import { View, SafeAreaView } from 'react-native'

type AuthLayoutProps = {
  children: React.ReactNode
}

const AuthLayout = (props: AuthLayoutProps) => {
  // @ts-ignore
  return (
    <SafeAreaView className="w-full h-full bg-background">
        <View className=" flex-col flex-1 w-full h-full p-9 m-auto">
          {props.children}
        </View>
    </SafeAreaView>
  )
}

export default AuthLayout
