import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; 

import colors from "../config/Colors";

type MaterialCommunityIconName =
  | "email"
  | "phone"
  | undefined;

interface AppButtonProps {
  title: string;
  onPress?: () => void;
  marginTop?: number;
  marginBottom?: number;
  backgroundColor?: string;
  color?: string;
  iconName?: MaterialCommunityIconName;
}

function AppButton({
  title,
  onPress,
  marginTop = 0,
  marginBottom = 0,
  backgroundColor,
  color,
  iconName, 
}: AppButtonProps) {
  const buttonContainerStyle = {
    marginBottom,
    marginTop,
    backgroundColor: backgroundColor || colors.primaryButton,
    ...styles.buttonContainer,
  };

  const textStyle = {
    color: color || colors.primary,
    ...styles.buttonText,
  };

  return (
    <TouchableOpacity onPress={onPress} style={buttonContainerStyle}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={24}
          color={textStyle.color}
          style={styles.icon}
        />
      )}
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    width: 311,
    height: 60,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Avenir-Regular",
    fontSize: 18,
    textAlign: "center",
  },
  icon: {
    marginRight: 12,
  },
});

export default AppButton;
