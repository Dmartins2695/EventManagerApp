import { Stack } from 'expo-router'
import '../global.css'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import { StyleSheet } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <SafeAreaProvider style={styles.container}>
        <SafeAreaView>
          <Stack>
            <Stack.Screen name={'index'} options={{ title: 'Home' }} />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </GluestackUIProvider>
  )
}
