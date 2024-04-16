import React from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
    Image,
} from "react-native";
import AppButton from "../components/AppButton";
import InputBox from "../components/InputBox";
import Colors from "../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

function forgotPassword() {}

const EmailCheck = ()=>{
    return (
			<ScrollView
				contentContainerStyle={{ alignItems: "center", paddingTop: 100 }}>
				<View>
					<Image source={require("./assets/checkEmail.png")} />
				</View>
				<View style={{ alignItems: "center" }}>
					<Text style={style.heading}>Check your Email</Text>
					<Text style={style.text}>
						We have sent a password recover instructions to your email.
					</Text>
					<AppButton title="Open email app" backgroundColor={Colors.navy} />
					<Text style={{ marginVertical: 20, fontSize: 16 }}>
						Skip, I'll confirm later
					</Text>
				</View>
				<View style={style.footer}>
					<Text style={style.footerText}>
						Didn't receive the email? Check your spam{"\n"}
						filter, or{"\n"}
						<TouchableOpacity onPress={forgotPassword}>
							<Text style={{ color: "red", fontSize: 16 }}>
								try another email address
							</Text>
						</TouchableOpacity>
					</Text>
				</View>
			</ScrollView>
		);
}

const style = StyleSheet.create({
    heading:{
        fontSize: 30,
        textAlign: 'center',
        padding: 10
    },
    text:{
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        paddingHorizontal: 30,
        padding: 10,
        marginBottom: 60
    },
    footer:{
        marginTop: 50
    },
    footerText:{
        fontSize: 18,
        textAlign: 'center',
        color: Colors.neutral
    }
})

export default EmailCheck;