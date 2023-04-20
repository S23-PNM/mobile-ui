import { Button,VStack,View,Text,StyleSheet } from 'react-native';
import { Box } from 'native-base';
import Store from '../components/Store';


export default function Other({ navigation, route }) {
  return (

        <View style={styles.center}>
          <Text style={styles.text}>PlatePal</Text>
          <Store/>
          <Store/>
          <Button onPress={() => navigation.navigate("Home")} title="Go to Home"></Button>
        </View>
             
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 24,
    letterSpacing: -0.05,
    color: '#000000',
    paddingBottom: 20,
  },
});



