import { HStack } from '@/components/ui/hstack'
import { VStack } from '@/components/ui/vstack'
import { SafeAreaView } from '@/components/ui/safe-area-view'
import { ScrollView } from '@/components/ui/scroll-view'
import { Image } from '@/components/ui/image'
import { StyleSheet } from 'react-native'
import React from 'react'

type AuthLayoutProps = {
  children: React.ReactNode
}
const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
})

const AuthLayout = (props: AuthLayoutProps) => {
  // @ts-ignore
  return (
    <SafeAreaView className="w-full h-full">
      <ScrollView
        className="w-full h-full"
        contentContainerStyle={{ flexGrow: 1 }}>
        <HStack className="w-full h-full bg-background-0 flex-grow justify-center">
          <VStack
            className="relative hidden h-full w-full flex-1  items-center  justify-center"
            space="md">
            <Image
              style={styles.image}
              source={require('@/assets/images/ejasLogo-Photoroom.png')}
              className="object-cover h-full w-full"
              alt="Radial Gradient"
            />
          </VStack>
          <VStack className="items-center justify-center flex-1 w-full  p-9 gap-16 m-auto h-full">
            {props.children}
          </VStack>
        </HStack>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AuthLayout
