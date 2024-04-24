import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'


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
  return (
    <TextInput
      style={style.input}
      placeholder={placeHolder}
      keyboardType={inputMode === "email" ? "email-address" : "default"}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const style = StyleSheet.create({
    input:{
        backgroundColor: '#fff',
        width: '90%',
        fontSize: 20,
        padding: 20,
        borderRadius: 10,
        margin: 10,
        marginBottom: 20
    }
})

export default InputBox;