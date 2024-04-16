import React from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import AppButton from '../components/AppButton';
import InputBox from '../components/InputBox';
import Colors from '../config/Colors';
import { MaterialCommunityIcons } from "@expo/vector-icons"; 

const { width, height } = Dimensions.get("window");

const ForgotPassword = () => {
	 const navigation = useNavigation();

   const handleBack = () => {
     navigation.goBack();
   };
	const handleEmailCheck = () => {
    navigation.navigate("EmailCheck" as never);
  };
    return (
      <ScrollView style={style.view}>
        <View style={[style.division, style.header]}>
          <TouchableOpacity onPress={handleBack} style={style.button}>
            {true && (
              <MaterialCommunityIcons
                name="chevron-left"
                size={40}
                style={style.icon}
              />
            )}
          </TouchableOpacity>
          <Text style={style.heading}>Forgot Password</Text>
          <Text></Text>
        </View>
        <View style={style.division}>
          <Text style={style.heading2}>Reset Password</Text>
          <Text style={style.text}>
            {"\n"}
            Enter the email associated with your account and we’ll send an email
            with instructions to reset your password.
          </Text>
          <Text>{"\n"}Email Address</Text>
          <InputBox placeHolder="Email" />
        </View>
        <View style={[style.division, style.footer]}>
          <AppButton
            backgroundColor={Colors.navy}
            title="Send"
            onPress={handleEmailCheck}
          />
        </View>
      </ScrollView>
    );
}

const style = StyleSheet.create({
  icon: {
    // backgroundColor: '#ccc',
    color: "#888",
  },
  division: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 26,
  },
  heading2: {
    fontSize: 28,
  },
  button: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ccc",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: "#2D2D2D",
  },
  view: {
    paddingTop: 60,
    backgroundColor: "#F4F4FA",
  },
  footer: {
    alignItems: "center",
    marginTop: 300,
  },
});

export default ForgotPassword;