import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../config/Colors";

interface AppHeadingProps {
  title: string;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  paddingTop?: number;
  paddingBottom?: number;
}

function AppHeading({
  title,
  color = colors.black,
  fontSize = 24,
  fontFamily = "Avenir-Book",
  paddingBottom = 9,
  paddingTop = 43,
}: AppHeadingProps) {
  const dynamicStyles = {
    fontSize,
    color,
    fontFamily,
    paddingBottom,
    paddingTop,
  };

  return <Text style={[styles.heroText, dynamicStyles]}>{title}</Text>;
}

const styles = StyleSheet.create({
  heroText: {
    width: 289,
    textAlign: "center",
  },
});

export default AppHeading;
