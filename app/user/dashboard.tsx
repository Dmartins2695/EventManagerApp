import { View } from 'react-native'
import { Text } from '@/components/ui/text'
import firebase from 'firebase/compat'
import auth = firebase.auth

export const Dashboard = () => {
  const user = auth().currentUser
  return (
    <View>
      <Text>Welcome to dashboard {user?.email}</Text>
    </View>
  );
}
