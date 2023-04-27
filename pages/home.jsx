import { View, Text, StyleSheet } from "react-native";
import { Button } from "native-base";

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 64,
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }} />
      <Text style={styles.title}>PlatePal</Text>
      <View style={{ flex: 1 }}>
        <Button
          variant="outline"
          style={{ marginTop: 170, width: 200 }}
          onPress={() => navigation.navigate("Stores")}
        >
          <Text color="#f00">Open App</Text>
        </Button>
      </View>
    </View>
  );
}
