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
  textAlign?: "center" | "auto" | "left" | "right" | "justify" | undefined;
  width?: string,
}

function AppHeading({
  title,
  color = colors.black,
  fontSize = 24,
  fontFamily = "Avenir-Book",
  paddingBottom = 0,
  paddingTop = 0,
  textAlign = "center",
}: AppHeadingProps) {
  const dynamicStyles = {
    fontSize,
    color,
    fontFamily,
    paddingBottom,
    paddingTop,
    textAlign,
    ...styles.text
  };

  return <Text style={dynamicStyles}>{title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    width: "auto"
  }
})

export default AppHeading;
