import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";

import WelcomeScreen from "./screens/WelcomeScreen";
import Colors from "./config/Colors";

export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <WelcomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    backgroundColor: Colors.background,
  },
});
