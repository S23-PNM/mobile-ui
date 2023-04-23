import { Button,VStack,View,Text,StyleSheet } from 'react-native';
import Storeinformation from '../components/storeInformation';


export default function Storepage({ navigation,route }) {
  return (

        <View>
            <Storeinformation storeName="The Commons" topAddress="390 S 8th St" populationStatus="Moderate"/>
        </View>
             
  );
}



