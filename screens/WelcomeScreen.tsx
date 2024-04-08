import React from "react";
import { View, StyleSheet } from "react-native";

import AppImage from "../components/AppImage";
import AppHeading from "../components/AppHeading";
import SkipText from "../components/SkipText";
import AppButton from "../components/AppButton";
import colors from "../config/Colors";
import SingUpText from "../components/SingUpText";
import CirclesRow from "../components/CirclesRow";

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <SkipText />
      <AppImage image={require("../assets/car.png")} />
      <AppHeading title="Welcome" />
      <AppHeading
        title="Find a best possible way to park"
        fontSize={16}
        color={colors.neutral}
        paddingTop={0}
        paddingBottom={54}
      />
      <CirclesRow />
      <AppButton
        title="Login with Email"
        marginTop={50}
        iconName="email"
      ></AppButton>
      <AppButton
        title="Login with Phone"
        backgroundColor={colors.primary}
        color={colors.black}
        marginTop={20}
        iconName="phone"
      ></AppButton>
      <SingUpText />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default WelcomeScreen;
