import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../config/Colors";

function SignUpText() {
  const navigation = useNavigation();

  const handleSignUpPress = () => {
    navigation.navigate("FindParking" as never); 
  };

  return (
    <Text style={styles.signUpText}>
      Don’t have an account?{"   "}
      <TouchableOpacity onPress={handleSignUpPress}>
        <Text style={{ color: colors.tomato }}>Sign Up</Text>
      </TouchableOpacity>
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

export default SignUpText;
