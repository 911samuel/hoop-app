import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

import Colors from "../config/Colors";

type MaterialIconName = "keyboard-arrow-down";

interface InputTextProps extends TextInputProps {
  placeholder?: string;
  color?: string;
  placeholderTextColor?: string;
  icon?: MaterialIconName;
}

const InputText = ({
  placeholder,
  style,
  color,
  placeholderTextColor,
  icon,
  ...rest
}: InputTextProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style, { color: color || Colors.black }]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor || Colors.black}
        {...rest}
      />
      {icon && (
        <MaterialIcons
          name={icon}
          size={24}
          color={Colors.black}
          style={{ marginRight: 10 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.primary,
    height: 54,
    borderRadius: 10,
  },
  input: {
    fontSize: 18,
    paddingHorizontal: 20,
  },
});

export default InputText;
