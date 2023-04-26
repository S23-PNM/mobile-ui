import React from "react";
import { StyleSheet, Text } from "react-native";
import { Box } from "native-base";

const cardStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: 16,
  marginVertical: 8,
  borderWidth: 2,
  borderRadius: 8,
  flex: 0,
  flexGrow: 0,
  order: 1,
};

const styles = StyleSheet.create({
  Empty: {
    ...cardStyles,
    backgroundColor: "#EFF6FF",
    borderColor: "#BFDBFE",
    color: "#1D4ED8",
  },
  Closed: {
    ...cardStyles,
    backgroundColor: "#FEF2F2",
    borderColor: "#FECACA",
  },
  Moderate: {
    ...cardStyles,
    backgroundColor: "#FFF7ED",
    borderColor: "#FED7AA",
    color: "#C2410C",
  },
  Crowded: {
    ...cardStyles,
    backgroundColor: "#FAF5FF",
    borderColor: "#E9D5FF",
    color: "#7E22CE",
  },
  topText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.05,
    flex: 0,
    order: 0,
    flexGrow: 0,
  },
  bottomText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: -0.05,
    flex: 0,
    flexGrow: 0,
    order: 1,
  },
});

export default function Topbox({ populationStyling }) {
  return (
    <Box style={styles[populationStyling]}>
      <Text color="#B91C1C" style={[styles.topText]}>
        Status
      </Text>
      <Text style={styles.bottomText}>{populationStyling}</Text>
    </Box>
  );
}
