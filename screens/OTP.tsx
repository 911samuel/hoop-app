import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../config/Colors';
import { MaterialCommunityIcons } from "@expo/vector-icons"; 
import OTPInput from "react-native-otp-forminput";

const { width, height } = Dimensions.get("window");

function onPress(){

}

const OTP = ()=>{
	const [x,setX] = useState(0);
	setInterval(
		(() => {
			setX((x+1)%60)
		}),
		1000
	);
    return (
			<ScrollView style={style.view}>
				<View style={[style.division, style.header]}>
					<TouchableOpacity onPress={onPress} style={style.button}>
						{true && (
							<MaterialCommunityIcons
								name="chevron-left"
								size={40}
								style={style.icon}
							/>
						)}
					</TouchableOpacity>
					<Text style={style.heading}>OTP Verification</Text>
					<Text></Text>
				</View>
				<View style={style.division}>
					<Text style={style.text}>
						{"\n"}
						We have send an OTP on given number +62 8123456789
					</Text>
				</View>
				<View style={[style.division, style.footer]}>
					<OTPInput type="outline" />
					<Text style={style.counter}>
						<MaterialCommunityIcons name="clock" style={style.icon} />
						{"  "}00:{x}
					</Text>
				</View>
			</ScrollView>
		);
}

const style = StyleSheet.create({
	counter:{
		color: Colors.tomato,
		fontSize: 20
	},
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
	text: {
		fontSize: 20,
		color: "#2D2D2D",
		textAlign: 'center'
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