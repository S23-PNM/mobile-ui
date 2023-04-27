import React from "react";
import { Text, Pressable, StyleSheet, Alert } from "react-native";
import { VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  card: {
    height: 124,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 16,
    width: "100%",
    marginVertical: 8,
    borderWidth: 2,
    borderRadius: 8,
  },
  Empty: {
    backgroundColor: "#EFF6FF",
    borderColor: "#BFDBFE",
    color: "#1D4ED8",
  },
  Closed: {
    backgroundColor: "#FEF2F2",
    borderColor: "#FECACA",
    color: "#B91C1C",
  },
  Moderate: {
    backgroundColor: "#FFF7ED",
    borderColor: "#FED7AA",
    color: "#C2410C",
  },
  Crowded: {
    backgroundColor: "#FAF5FF",
    borderColor: "#E9D5FF",
    color: "#7E22CE",
  },
  statusText: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.5,
  },
  topText: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.5,
  },
  bottomText: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.5,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.5,
  },
});

export default function StoreCard({
  title,
  status,
  nextLocation,
}) {
  const { navigate } = useNavigation();

  status = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <Pressable
      style={[styles.card, styles[status]]}
      onPressIn={() => navigate(nextLocation)}
    >
      <VStack space={3} justifyContent="left">
        <Text
          style={{
            ...styles.topText,
            color: styles[status].color,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            ...styles.bottomText,
            color: styles[status].color,
          }}
        >
          {status}
        </Text>
        <Text
          style={{
            ...styles.buttonText,
            color: styles[status].color,
          }}
        >
          View More →
        </Text>
      </VStack>
    </Pressable>
  );
}
