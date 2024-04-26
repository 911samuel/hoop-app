import React, { useContext, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OTPInput from "react-native-otp-forminput";
import { useNavigation } from "@react-navigation/native";

import Colors from "../config/Colors";

const { width, height } = Dimensions.get("window");

const OTP = () => {
  const navigation = useNavigation();
  const [otpCode, setOtpCode] = useState("");
  const [seconds, setSeconds] = useState(0);


  const handleBack = () => {
    navigation.goBack();
  };

  const handleOtpChange = (code: string) => {
    setOtpCode(code);
    if (code.length === 4) {
    }
  };

  useState(() => {
    const intervalId = setInterval(() => {
      setSeconds((seconds) => (seconds + 1) % 60);
    }, 1000);

    return () => clearInterval(intervalId);
  },);

  return (
    <ScrollView style={styles.view}>
      <View style={[styles.division, styles.header]}>
        <TouchableOpacity onPress={handleBack}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>OTP Verification</Text>
      </View>
      <View style={styles.division}>
        <Text style={styles.text}>
          {"\n"}
          We have sent an OTP to your phone number.
        </Text>
      </View>
      <View style={[styles.division, styles.footer]}>
        <OTPInput type="outline" onChange={handleOtpChange} />
        <Text style={styles.counter}>
          <MaterialCommunityIcons name="clock" style={styles.icon} />
          {"  "}00:{seconds < 10 ? `0${seconds}` : seconds}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  counter: {
    color: Colors.tomato,
    fontSize: 20,
  },
  icon: {
    color: "#888",
  },
  division: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  heading: {
    fontSize: 26,
  },
  text: {
    fontSize: 20,
    color: "#2D2D2D",
    textAlign: "center",
  },
  view: {
    paddingTop: 60,
    backgroundColor: "#F4F4FA",
  },
  footer: {
    marginTop: 30,
    alignItems: "center",
  },
});

export default OTP;
