import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Card from "./card";

const styles = StyleSheet.create({
  container: {
    padding: 48,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  titleText: {
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    height: 29,
    lineHeight: 29,
  },
  homeButton: {
    width: 279,
    height: 40,
    backgroundColor: "#FAFAFA",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#E4E4E7",
    borderRadius: 8,
    padding: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  homeButtonText: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.5,
    color: "#3F3F46",
  },
});

export default function Store({ storeName, people, status, address }) {
  const navigation = useNavigation();

  status = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <View style={styles.container}>
      <VStack space={4}>
        <Text style={styles.titleText}>{storeName}</Text>
        <Card
          status={status}
          title="Status"
          body={status}
        />
        <Card title="Current Occupancy" body={`${people} people`} />
        <Card title="Location" body={address} />
        <View style={{ flex: 1 }} />
        <Pressable
          style={styles.homeButton}
          onPressIn={() => navigation.navigate("Stores")}
        >
          <Text style={styles.homeButtonText}>Return Home</Text>
        </Pressable>
      </VStack>
    </View>
  );
}
