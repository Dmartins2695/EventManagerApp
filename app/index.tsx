import { VStack } from '@/components/ui/vstack'
import { Image, StyleSheet } from 'react-native'
import React from 'react'
import { Text } from '@/components/ui/text'
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button'

const styles = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
  },
})

export default function Index() {
  return (
    <>
      <VStack>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('@/assets/images/ejasLogo.png')}
        />
        <Button className="bg-blue-500 p-4 rounded-lg">
          <ButtonText className="text-white">Click Me</ButtonText>
        </Button>
      </VStack>
    </>
  )
}
