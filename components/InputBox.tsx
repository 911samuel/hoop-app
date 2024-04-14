import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'


interface InputBoxProps{
    placeHolder: string;
}

const InputBox = ({placeHolder="",...rest}:InputBoxProps)=>{
    return(
        <TextInput style={style.input} {...rest} placeholder={placeHolder} />
    )
}

const style = StyleSheet.create({
    input:{
        backgroundColor: '#fff',
        width: '80%',
        fontSize: 20,
        padding: 20,
        borderRadius: 10,
        marginBottom: 20
    }
})

export default InputBox;