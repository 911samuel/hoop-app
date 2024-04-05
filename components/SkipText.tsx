import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/Colors";

function SkipText() {
  return <Text style={styles.skipText}>Skip</Text>;
}

const styles = StyleSheet.create({
  skipText: {
    fontFamily: "SpaceGrotesk-Regular",
    fontWeight: "bold",
    color: colors.neutral,
    marginTop: 60,
    marginLeft: 300,
  },
});

export default SkipText;
