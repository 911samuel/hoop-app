import React, { useContext, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import OTPInput from "react-native-otp-forminput";

import Colors from "../config/Colors";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const RequestCode = () => {
	const [code, setCode] = useState("");
  const navigation = useNavigation();

  const handleCodeChange = (code: string) => {
    setCode(code);
    if (code.length === 4) {
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ paddingTop: 60 }}
    >
      <View style={{alignItems: "center"}}>
        <Image source={require("./assets/requestCode.png")} />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={style.heading}>Enter your Passcode</Text>
        <Text style={style.text}>
          For the security of your account, please enter the security code
        </Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <OTPInput type="outline" onChange={handleCodeChange} />
        <Image
          style={{ margin: 80 }}
          source={require("./assets/Fingerprint.png")}
        />
      </View>
      <View style={style.footer}>
        <Text style={style.footerText}>
          <Text style={{ color: "red", fontSize: 16 }}>Scan</Text>
          {"  "}to verify for easy security
        </Text>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  heading: {
    fontSize: 30,
    textAlign: "center",
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    paddingHorizontal: 30,
    padding: 10,
    marginBottom: 10,
  },
  footer: {
    marginTop: 0,
  },
  footerText: {
    fontSize: 18,
    textAlign: "center",
    color: Colors.neutral,
  },
});

export default RequestCode;
