import React from 'react';
import { View, Text, StyleSheet } from "react-native";

import colors from '../config/Colors';

function SingUpText() {
    return (
      <Text style={styles.signUpText}>
        Don’t have an account?{"   "}
        <Text style={{ color: colors.tomato }}>Sign Up</Text>
      </Text>
    );
}

const styles = StyleSheet.create({
  signUpText: {
    fontSize: 14,
    color: colors.black,
    marginTop: 20,
  },
});

export default SingUpText;