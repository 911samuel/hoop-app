import React from "react";
import { View, StyleSheet } from "react-native";

import AppImage from "../components/AppImage";
import AppHeading from "../components/AppHeading";
import SkipText from "../components/SkipText";
import AppButton from "../components/AppButton";
import colors from "../config/Colors";
import SingUpText from "../components/SingUpText";

function HollaScreen() {
  return (
    <View style={styles.container}>
      <SkipText />
      <AppImage image={require("../assets/car.png")} />
      <AppHeading title="Holla" />
      <AppHeading
        title="Find the best possible parking space nearby your desired destination"
        fontSize={16}
        fontFamily="SpaceGrotesk-Regular"
      />
      <AppImage
        image={require("../assets/GroupIcons.png")}
        width={50}
        height={10}
        marginTop={54}
      />
      <AppButton title="Login with Email" marginTop={50}></AppButton>
      <AppButton
        title="Login with Phone"
        backgroundColor={colors.primary}
        color={colors.black}
        marginTop={20}
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

export default HollaScreen;
