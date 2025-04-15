import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to My App</Text>
      <Button title="Go to Dashboard" onPress={() => router.push('/dashboard')} />
    </View>
  );
}
