import React from "react";
import { ImageBackground, StyleSheet, StatusBar } from "react-native"; // Import StatusBar
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("./assets/splash.png")}
    >
      <StatusBar barStyle="light-content" />
      <WelcomeScreen />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    paddingTop: StatusBar.currentHeight || 0,
  },
});
