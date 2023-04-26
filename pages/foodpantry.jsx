import { StyleSheet, View, Text } from "react-native";
import Storeinformation from "../components/storeInformation";

export default function Foodpantry({ navigation, route }) {
  return (
    <View>
      <Storeinformation
        storeName="The Pantry"
        topAddress="211 S 9th St"
        populationStatus="Closed"
      />
    </View>
  );
}
