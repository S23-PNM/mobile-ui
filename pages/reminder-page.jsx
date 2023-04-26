import { Text, StyleSheet } from "react-native";
import { Box } from "native-base";

const styles = StyleSheet.create({
  boxTopText: {
    width: 247,
    height: 24,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.05,
    color: "#3F3F46",
    flex: 0,
    alignSelf: "stretch",
    flexGrow: 0,
  },
});

export default function Reminderpage() {
  return (
    <Box style={styles.boxTopText}>
      <Text>This is the Reminderpage</Text>
    </Box>
  );
}
