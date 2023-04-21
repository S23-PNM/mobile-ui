
import { StyleSheet,View,Text } from 'react-native';
import { Button } from 'native-base';
import Store from '../components/Store';

export default function Home({ navigation }) {
  return (

    <View style={styles.container}>
        <Text style={styles.title}>PlatePal</Text>
        <View>
            <Button variant="outline" width={279} style={{ marginTop: 170 }} onPress={() => navigation.navigate("Other")} title="Go to other">
                <Text color="#f00">Open App</Text>
            </Button>
        </View>
    </View>


  );

}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 64,
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 269.5,
    },
    center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  });
