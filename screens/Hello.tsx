import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";
const colors = {
  red: "#ff6666",
  green: "ccffcc",
  blue: "#c6e2ff",
};
const words = [
  "neg",
  "s",
  "word",
  "lows",
  "sadas",
  "sasasdasas",
  "sadsdasds",
  "sadaasasaddds",
  "sadas",
  "sadas",
  "sadas",
];
export const Hello = () => {
  const [word, setWord] = useState();
  return (
    <View style={{ ...styles.container, ...styles.correctContainer }}>
      <Text style={{ ...styles.text }}>hello</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C6E2FF",
  },
  correctContainer: {
    backgroundColor: "#ccffcc",
  },
  text: {
    fontSize: 40,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
