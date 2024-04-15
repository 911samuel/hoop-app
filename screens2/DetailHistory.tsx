import React from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import AppButton from '../components/AppButton';
import Colors from '../config/Colors';
import { MaterialCommunityIcons } from "@expo/vector-icons"; 

const { width, height } = Dimensions.get("window");

function onPress(){

}

interface PlanProps{
    active: boolean;
    period: string;
    description: string;
    price: string;
}

const DetailHistory = () => {
	return (
		<ScrollView style={style.view}>
			<View style={[style.division, style.header]}>
				<TouchableOpacity onPress={onPress} style={style.button}>
					{true && (
						<MaterialCommunityIcons
							name="chevron-left"
							size={40}
							style={style.icon2}
						/>
					)}
				</TouchableOpacity>
				<Text style={style.heading}>Detail History</Text>
				<Text></Text>
			</View>
			<View style={style.image}>
				<Image source={require("./assets/detailHistory.png")} />
				<Text style={[style.heading, { margin: 20 }]}>Graha Mall</Text>
				<Text>123 Dhaka Street</Text>
			</View>
			<View style={{ padding: 20, paddingHorizontal: 30 }}>
				<Text style={[style.heading, { fontSize: 30 }]}>Information</Text>
				<Text style={{fontSize: 20, color: Colors.neutral}}>
					24/7 parking facility with cctv camera, professional security guard,
					chair disble, floor parking list facilities. You will get hassle
					parking facilities with 35% discount on first parking...
				</Text>
			</View>
			<View style={[style.division, style.footer]}>
				<AppButton backgroundColor={Colors.navy} title="Repeat Booking" />
			</View>
		</ScrollView>
	);
};

const style = StyleSheet.create({
    icon2:{
        color: Colors.neutral
    },
	division: {
		padding: 20,
	},
    image:{
        alignItems: 'center',
        paddingVertical: 30
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

export default DetailHistory;