import { HStack } from '@/components/ui/hstack'
import { VStack } from '@/components/ui/vstack'
import { SafeAreaView } from '@/components/ui/safe-area-view'
import { ScrollView } from '@/components/ui/scroll-view'
import { Image } from '@/components/ui/image'
import React from 'react'

type AuthLayoutProps = {
  children: React.ReactNode
}

const AuthLayout = (props: AuthLayoutProps) => {
  // @ts-ignore
  return (
    <SafeAreaView className="w-full h-full bg-background">
      <ScrollView
        className="w-full h-full"
        contentContainerStyle={{ flexGrow: 1 }}>
        <VStack className="flex-1 w-full h-full p-9 m-auto">
          {props.children}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AuthLayout
