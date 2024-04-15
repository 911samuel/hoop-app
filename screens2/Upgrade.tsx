import React from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import AppButton from '../components/AppButton';
import InputBox from '../components/InputBox';
import Colors from '../config/Colors';
import { MaterialCommunityIcons } from "@expo/vector-icons"; 
import CardSlider from './CardSlider';

const { width, height } = Dimensions.get("window");

function onPress(){

}

const Upgrade = () => {
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
				<Text style={style.heading}>Upgrade</Text>
				<Text></Text>
			</View>
			<View style={style.division}>
				<Text style={style.heading2}>
					Get all the facilities by upgrading your account
				</Text>
                <CardSlider />
			</View>
			<View style={[style.division, style.footer]}>
				<AppButton backgroundColor={Colors.navy} title="Choose a plan" />
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
		fontSize: 26,
	},
	heading2: {
		fontSize: 39,
        textAlign: 'center',
        marginTop: 30,
        paddingHorizontal: 40,
        marginBottom: 40
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
		marginTop: 30,
		alignItems: "center",
	},
});

export default Upgrade;