import { Button, VStack, View, Text, StyleSheet } from "react-native";
import Store from "../components/Store";

export default function Other({ navigation, route }) {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>PlatePal</Text>
      <Store
        populationStatus="Empty"
        title="Food Pantry"
        status="Closed Until 10PM"
        backgroundColor="#FEF2F2"
        borderColor="#B91C1C"
        textColor="#B91C1C"
        nextLocation="Foodpantry"
        textColor="#B91C1C"
      />
      <Store
        populationStatus="Closed"
        title="The Commons"
        status="Open Until 10AM"
        backgroundColor="#EFF6FF"
        borderColor="#BFDBFE"
        textColor="#1D4ED8"
        nextLocation="Storepage"
        textColor="#1D4ED8"
      />
      <Button onPress={() => navigation.navigate("Home")} title="Go to Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: 24,
    letterSpacing: -0.05,
    color: "#000000",
    paddingBottom: 20,
  },
});
