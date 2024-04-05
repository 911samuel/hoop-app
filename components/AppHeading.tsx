import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../config/Colors";

interface AppHeadingProps {
  title: string;
  fontSize?: number; 
  color?: string; 
  fontFamily?: string,
}

function AppHeading({ title, color, fontSize, fontFamily }: AppHeadingProps) {
  const dynamicStyles = {
    fontSize: fontSize || 24,
    color: color || colors.neutral,
    fontFamily: fontFamily || "SpaceGrotesk-Medium",
  };

  return <Text style={[styles.heroText, dynamicStyles]}>{title}</Text>;
}

const styles = StyleSheet.create({
  heroText: {
    textAlign: "center",
    paddingTop: 43,
  },
});

export default AppHeading;
