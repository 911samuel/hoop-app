import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import colors from "../config/Colors";

interface Props {
  onPress: () => void;
}

function SignUpText({ onPress }: Props) {
  return (
    <Text style={styles.signUpText}>
      Don’t have an account?{"   "}
      <TouchableOpacity onPress={onPress}>
        <Text style={{ color: colors.tomato }}>Sign Up</Text>
      </TouchableOpacity>
    </Text>
  );
}

const styles = StyleSheet.create({
  signUpText: {
    fontSize: 16,
    color: colors.black,
    marginTop: 20,
  },
});

export default SignUpText;
