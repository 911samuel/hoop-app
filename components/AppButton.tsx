import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/Colors";

interface AppButtonProps {
  title: string;
  onPress?: () => void;
  marginTop?: number;
  marginBottom?: number;
    backgroundColor?: string;
    color?: string,
}

function AppButton({
  title,
  onPress,
  marginTop = 0,
  marginBottom = 0,
    backgroundColor,
  color,
}: AppButtonProps) {
  const buttonContainerStyle = {
    marginBottom,
      marginTop,
    backgroundColor: backgroundColor || colors.primaryButton,
    ...styles.buttonContainer,
  };
    
    const text = {
        color: color || colors.primary,
        ...styles.buttonText,
    };

  return (
    <TouchableOpacity onPress={onPress} style={buttonContainerStyle}>
      <Text style={text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 311,
    height: 60,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "SpaceGrotesk_500Medium",
    fontSize: 18,
    textAlign: "center",
  },
});

export default AppButton;
