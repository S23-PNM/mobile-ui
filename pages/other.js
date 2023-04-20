import { Button } from 'react-native';

export default function Other({ navigation, route }) {
  return (
      <Button onPress={() => navigation.navigate("Home")} title="Go to Home"></Button>
  );
}
