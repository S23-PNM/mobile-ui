import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Box, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function Store(props) {
  const navigation = useNavigation();

  if (props.populationStatus == "Closed") {
    return (
      <Box style={styles.closed}>
        <VStack space={3} flex={0.85} justifyContent="left">
          <Text style={styles.toptextClosed}>{props.title}</Text>
          <Text style={styles.bottomtextClosed}>{props.status}</Text>
          <Button
            variant="outline"
            width={279}
            style={{ marginTop: 170 }}
            onPress={() => navigation.navigate(props.nextLocation)}
            title="Go to other"
          />
        </VStack>
      </Box>
    );
  }
  if (props.populationStatus == "Moderate") {
    return (
      <Box style={styles.moderate}>
        <VStack space={3} flex={0.85} justifyContent="left">
          <Text style={styles.toptextModerate}>{props.title}</Text>
          <Text style={styles.bottomtextModerate}>{props.status}</Text>
          <Button
            variant="outline"
            width={279}
            style={{ marginTop: 170 }}
            onPress={() => navigation.navigate(props.nextLocation)}
            title="Go to other"
          />
        </VStack>
      </Box>
    );
  }
  if (props.populationStatus == "Crowded") {
    return (
      <Box style={styles.crowded}>
        <VStack space={3} flex={0.85} justifyContent="left">
          <Text style={styles.toptextCrowded}>{props.title}</Text>
          <Text style={styles.bottomtextCrowded}>{props.status}</Text>
          <Button
            variant="outline"
            width={279}
            style={{ marginTop: 170 }}
            onPress={() => navigation.navigate(props.nextLocation)}
            title="Go to other"
          />
        </VStack>
      </Box>
    );
  }
  if (props.populationStatus == "Empty") {
    return (
      <Box style={styles.empty}>
        <VStack space={3} flex={0.85} justifyContent="left">
          <Text style={styles.toptextEmpty}>{props.title}</Text>
          <Text style={styles.bottomtextEmpty}>{props.status}</Text>
          <Button
            variant="outline"
            width={279}
            style={{ marginTop: 170 }}
            onPress={() => navigation.navigate(props.nextLocation)}
            title="Go to other"
          />
        </VStack>
      </Box>
    );
  }

  return (
    <Box
      bg={props.backgroundColor}
      borderColor={props.borderColor}
      style={styles.box}
    >
      <VStack space={3} flex={0.85} justifyContent="left">
        <Text style={styles.upperText}>{props.title}</Text>
        <Text style={styles.middleText}>{props.status}</Text>
        <Button
          variant="outline"
          width={279}
          style={{ marginTop: 170 }}
          onPress={() => navigation.navigate(props.nextLocation)}
          title="Go to other"
        />
      </VStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  empty: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginVertical: 8,
    width: 279,
    height: 118,
    backgroundColor: "#EFF6FF",
    borderWidth: 2,
    borderColor: "#BFDBFE",
    borderRadius: 8,
    flex: 0,
    order: 1,
    flexGrow: 0,
  },
  closed: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginVertical: 8,
    width: 279,
    height: 118,
    backgroundColor: "#EFF6FF",
    borderWidth: 2,
    borderColor: "#BFDBFE",
    borderRadius: 8,
    flex: 0,
    order: 1,
    flexGrow: 0,
  },
  moderate: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginVertical: 8,
    width: 279,
    height: 118,
    backgroundColor: "#FFF7ED",
    borderWidth: 2,
    borderColor: "#FED7AA",
    borderRadius: 8,
    flex: 0,
    order: 1,
    flexGrow: 0,
  },
  crowded: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 16,
    marginVertical: 8,
    width: 279,
    height: 118,
    backgroundColor: "#FAF5FF",
    borderWidth: 2,
    borderColor: "#E9D5FF",
    borderRadius: 8,
    flex: 0,
    order: 1,
    flexGrow: 0,
  },
  closed: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 16,
    marginVertical: 8,
    width: 279,
    height: 118,
    backgroundColor: "#FEF2F2",
    borderWidth: 2,
    borderColor: "#FECACA",
    borderRadius: 8,
    flex: 0,
    order: 1,
    flexGrow: 0,
  },
  statusText: {
    width: 247,
    height: 24,
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
  toptextEmpty: {
    width: 247,
    height: 24,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.05,
    color: "#1D4ED8",
    flex: 0,
    flexGrow: 0,
    order: 0,
  },
  bottomtextEmpty: {
    width: 142,
    height: 19,
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.05,
    color: "#1D4ED8",
    flex: 0,
    flexGrow: 0,
    alignSelf: "flex-start",
  },
  toptextModerate: {
    width: 247,
    height: 24,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.05,
    color: "#C2410C",
  },
  bottomtextModerate: {
    width: 142,
    height: 19,
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.05,
    color: "#C2410C",
  },
  toptextCrowded: {
    width: 247,
    height: 24,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.05,
    color: "#7E22CE",
  },
  bottomtextCrowded: {
    width: 142,
    height: 19,
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.05,
    color: "#7E22CE",
  },
  toptextClosed: {
    width: 247,
    height: 24,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.05,
    color: "#B91C1C",
  },
  bottomtextClosed: {
    width: 142,
    height: 19,
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.05,
    color: "#B91C1C",
  },
});
