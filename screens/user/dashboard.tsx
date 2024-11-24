import { Text } from '@/components/ui/text'
import { View } from '@/components/ui/view'
import { auth } from '@/firebaseConfig'

export const Dashboard = () => {
  const user = auth.currentUser
  return (
    <View>
      <Text>Welcome to dashboard {user?.email}</Text>
    </View>
  )
}
