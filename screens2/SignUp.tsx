import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	Dimensions,
	ScrollView,
	TouchableOpacity,
    Button,
} from "react-native";
import AppButton from "../components/AppButton";
import InputBox from "../components/InputBox";


const { width, height } = Dimensions.get("window");

const Login = () => {
	//
};


const SignUp = () => {

	return (
		<ScrollView
			style={style.view}
			contentContainerStyle={{ flex: 1, alignContent: "center" }}>
			<Image source={require("./assets/lines.png")} style={style.img} />
			<Text style={style.title}>Let's Start!!</Text>
			<View style={style.main}>
				<View style={style.form}>
					<InputBox inputMode="email" placeHolder="Email" />
					<InputBox placeHolder="Password" secureTextEntry={true} />
					<InputBox
						placeHolder="Password Authentication"
						secureTextEntry={true}
					/>
					<InputBox inputMode="tel" placeHolder="Phone Number" />
				</View>
				<View>
					<AppButton title="Register" backgroundColor="#130F26" />
				</View>
				<View style={[style.forgot, style.forgot2]}>
					<Text>Have an account? {"    "}</Text>
					<TouchableOpacity onPress={Login}>
						<Text style={{ color: "red", fontSize: 15 }}>Sign In</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

const style = StyleSheet.create({
	form: {
		width: "100%",
		alignItems: "center",
        minHeight: 500
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
		marginTop: 80,
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
		paddingTop: 50,
		backgroundColor: "#130F26",
		position: "relative",
		height: height,
	},
});

export default SignUp;
