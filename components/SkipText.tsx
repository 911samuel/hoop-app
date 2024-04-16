import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/Colors";

interface Props {
  onPress: () => void;
}

const SkipText: React.FC<Props> = ({ onPress }) => {
  return (
    <Text style={styles.skipText} onPress={onPress}>
      Skip
    </Text>
  );
};

const styles = StyleSheet.create({
  skipText: {
    fontFamily: "Avenir-Regular",
    color: colors.neutral,
    marginTop: 60,
    marginLeft: 300,
  },
});

export default SkipText;
