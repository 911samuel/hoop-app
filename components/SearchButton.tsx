import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import colors from "../config/Colors";

interface SearchButtonProp {
  onPress?: () => void;
  backgroundColor?: string;
  color?: string;
  width?: any
}

const SearchButton = ({
  onPress,
  backgroundColor,
  color,
  width
}: SearchButtonProp) => {
  const container = {
    backgroundColor: backgroundColor || colors.secondaryButton,
    width: width || "100%",
    ...styles.buttonContainer,
  };
  const text = {
    color: color || colors.searchIcon,
    ...styles.icon,
  };
  const iconText = {
    color: color || colors.searchIcon,
    ...styles.buttonText,
  };

  return (
    <TouchableOpacity onPress={onPress} style={container}>
      <AntDesign name="search1" size={24} style={text} />
      <Text style={iconText}>Search</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 55,
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 15,
  },
  buttonText: {
    fontFamily: "Avenir-Regular",
    fontSize: 18,
    textAlign: "center",
  },
  icon: {
    marginRight: 18,
  },
});

export default SearchButton;
