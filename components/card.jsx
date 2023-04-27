import React from "react";
import { StyleSheet, Text } from "react-native";
import { VStack } from "native-base";

const styles = StyleSheet.create({
  card: {
    display: "flex",
    height: 93,
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 16,
    borderWidth: 2,
    borderRadius: 8,
    flex: 0,
    flexGrow: 0,
    order: 1,
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
  Default: {
    backgroundColor: "#FAFAFA",
    borderColor: "#E4E4E7",
    color: "#3F3F46",
  },
  topText: {
    fontWeight: "700",
    fontSize: 20,
    height: 24,
    lineHeight: 24,
    letterSpacing: -0.5,
  },
  bottomText: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: -0.5,
  },
});

export default function Card({ status = "Default", title, body }) {
  return (
    <VStack style={[styles.card, styles[status]]} space={1}>
      <Text style={{ ...styles.topText, color: styles[status].color }}>
        {title}
      </Text>
      <Text style={{ ...styles.bottomText, color: styles[status].color }}>
        {body}
      </Text>
    </VStack>
  );
}
