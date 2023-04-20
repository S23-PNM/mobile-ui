
import { Button,StyleSheet,View,Text } from 'react-native';

export default function Home({ navigation }) {
  return (

    <View style={styles.container}>
        <Text style={styles.title}>PlatePal</Text>
        <View style={styles.button}>
            <Button onPress={() => navigation.navigate("Other")} title="Go to other">Go to other</Button>
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
    button: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 10,
        backgroundColor: '#FAFAFA',
        borderColor: '#E4E4E7',
        borderWidth: 2,
        borderRadius: 8,
        flex: 0,
        order: 1,
        alignSelf: 'stretch',
        flexGrow: 0,
    }
  });

  /*
   display: flex,
        flexdirection: column,
        justifyContent: center,
        alignItems: center,
        padding: 0,
        gap: 16,
        width: 279,
        height: 616,*/
