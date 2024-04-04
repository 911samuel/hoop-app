import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import * as Font from "expo-font";

import colors from "../config/Colors";

interface AppHeadingProps {
  title: string;
  fontSize?: number;
  marginBottom?: number;
  width?: number;
}

function AppHeading({
  title,
  fontSize = 24,
  width = 200,
  marginBottom = 50,
}: AppHeadingProps) {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  React.useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "Avenir-Regular": require("../assets/Avenir/Avenir Regular/Avenir Regular.ttf"),
      });
      setFontLoaded(true);
    }

    loadFont();
  }, []);

    if (!fontLoaded) {
      console.log("font not loaded");
    return null; 
  }

  const headingStyles = {
    fontSize,
    width,
    marginBottom,
    ...styles.heroText,
  };

  return <Text style={headingStyles}>{title}</Text>;
}

const styles = StyleSheet.create({
  heroText: {
    fontFamily: "Avenir-Regular",
    fontWeight: "bold",
    color: colors.neutral,
    textAlign: "center",
  },
});

export default AppHeading;
