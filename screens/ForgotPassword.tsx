import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";
import InputBox from "../components/InputBox";
import Colors from "../config/Colors";
import { Client, Account } from "appwrite";

const { width, height } = Dimensions.get("window");

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("66259128762986b20dac");

  const account = new Account(client);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleEmailCheck = async () => {
    try {
      const url = "http://localhost:8081//#/EmailCheck";
      const response = await account.createRecovery(
        email,
        url
      );
      console.log(response);
      setSuccess("A recovery email has been sent to your email address.");
      navigation.navigate("EmailCheck" as never);
    } catch (error) {
      console.log(error);
      setError("An error occurred while sending the recovery email.");
    }
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
        <InputBox placeHolder="Email" inputMode="email" onChangeText={setEmail}/>
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
};

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
    fontSize: 20,
  },
  heading2: {
    fontSize: 20,
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
    fontSize: 16,
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
