import { View, Text, StyleSheet } from "react-native";
import StoreCard from "../components/store-card";

const styles = StyleSheet.create({
  center: {
    padding: 48,
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontWeight: "700",
    fontSize: 24,
    letterSpacing: -0.5,
    color: "#000000",
    paddingBottom: 8,
  },
});

export default function Stores({ data }) {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>PlatePal</Text>
      <StoreCard
        title="Food Pantry"
        status={data.pantry.level}
        nextLocation="FoodPantry"
      />
      <StoreCard
        title="The Commons"
        status={data.commons.level}
        nextLocation="TheCommons"
      />
    </View>
  );
}
