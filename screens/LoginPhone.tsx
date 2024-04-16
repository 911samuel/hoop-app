import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	Dimensions,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import AppButton from "../components/AppButton";
import InputBox from "../components/InputBox";
import SingUpText from "../components/SingUpText";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const LoginPhone = () => {
	const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("OTP" as never);
  };

  const forgot = () => {
    navigation.navigate("OTP" as never);
  };
  const handleSignUpPress = () => {
    navigation.navigate("SignUp" as never);
  };
	return (
    <ScrollView
      style={style.view}
      contentContainerStyle={{ flex: 1, alignContent: "center" }}
    >
      <Image source={require("./assets/lines.png")} style={style.img} />
      <Text style={style.title}>Glad to see you!!</Text>
      <View style={style.main}>
        <View style={style.form}>
          <InputBox inputMode="tel" placeHolder="+62 |" />
          <InputBox placeHolder="Password" secureTextEntry={true} />
          <View style={style.forgot}>
            <Text>Forgot password? {"    "}</Text>
            <TouchableOpacity onPress={forgot}>
              <Text style={{ color: "red", fontSize: 15 }}>Retrieve</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <AppButton
            title="Login"
            backgroundColor="#130F26"
            width={311}
            onPress={handleLogin}
          />
        </View>
        <SingUpText onPress={handleSignUpPress} />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
	form: {
		width: "100%",
		alignItems: "center",
        minHeight: 450
	},
	forgot: {
		alignItems: "center",
		width: width - 80,
		justifyContent: "flex-end",
		flexDirection: "row",
		flexWrap: "nowrap",
		padding: 10,
	},
	forgot2: {
		justifyContent: "center",
	},
	main: {
		backgroundColor: "#F4F4FA",
		height: height,
		borderRadius: 40,
		marginTop: 50,
		paddingTop: 30,
		alignItems: "center",
	},
	title: {
		fontSize: 40,
		color: "#ffffff",
		textAlign: "center",
		marginTop: 100,
	},
	img: {
		position: "absolute",
		width: width,
		height: undefined,
		aspectRatio: 375 / 283,
		top: 0,
		left: 0,
	},
	view: {
		backgroundColor: "#130F26",
		position: "relative",
		height: height,
	},
});

export default LoginPhone;
