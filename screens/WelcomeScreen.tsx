import React from "react";

import AppImage from "../components/AppImage";
import AppHeading from "../components/AppHeading";
import { View } from "react-native";

function WelcomeScreen() {
  return (
    <View>
      <AppImage image={require("../assets/car.png")} />
      <AppHeading title="WELCOME TO ON_CREATION" fontSize={28} width={228} />
    </View>
  );
}

export default WelcomeScreen;
