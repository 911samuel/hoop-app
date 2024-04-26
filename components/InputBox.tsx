import React from "react";
import { StyleSheet, TextInput, KeyboardTypeOptions } from "react-native";

interface InputBoxProps {
  placeHolder: string;
  inputMode?: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
}

const InputBox = ({
  inputMode,
  placeHolder,
  secureTextEntry,
  value,
  onChangeText,
}: InputBoxProps) => {
  let keyboardType: KeyboardTypeOptions | undefined;

  if (inputMode === "email") {
    keyboardType = "email-address";
  } else if (inputMode === "password") {
    keyboardType = "default"; 
  } else if (inputMode === "phone") {
    keyboardType = "phone-pad";
  }

  return (
    <TextInput
      style={styles.input}
      placeholder={placeHolder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    width: "90%",
    fontSize: 20,
    padding: 20,
    borderRadius: 10,
    margin: 10,
    marginBottom: 20,
  },
});

export default InputBox;
