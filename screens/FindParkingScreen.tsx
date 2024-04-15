import React from "react";
import { View, StyleSheet } from "react-native";

import AppImage from "../components/AppImage";
import AppHeading from "../components/AppHeading";
import SkipText from "../components/SkipText";
import AppButton from "../components/AppButton";
import colors from "../config/Colors";
import SingUpText from "../components/SingUpText";
import CirclesRow from "../components/CirclesRow";

function FindParkingScreen() {
  return (
    <View style={styles.container}>
      <SkipText />
      <AppImage image={require("../assets/car.png")} />
      <AppHeading title="Find Parking" />
      <AppHeading
        title="Find your perfect parking space wherever and whenever you need"
        fontSize={16}
        fontFamily="Avenir-Regular"
      />
      <CirclesRow />
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

export default FindParkingScreen;
