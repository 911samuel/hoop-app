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

const Plan = ({
    active=true,period='Yearly',description='Pay for a full year',price='$210/y'
}:PlanProps)=>{
    return (
			<View style={[style.plan, active ? style.active : style.plan]}>
				<MaterialCommunityIcons
					name={
						!active ? "checkbox-blank-circle-outline" : "record-circle-outline"
					}
					size={25}
					style={style.icon}
				/>
				<View style={style.period}>
					<Text style={{ fontSize: 30, margin: 2 }}>{period}</Text>
					<Text style={{ fontSize: 20, margin: 2, color: Colors.neutral }}>{description}</Text>
				</View>
				<View>
					<Text style={active ? style.aprice : style.price}>{price}</Text>
				</View>
			</View>
		);
}

const ChoosePlan = () => {
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
				<Text style={style.heading}>Upgrade</Text>
				<Text></Text>
			</View>
			<View style={style.image}>
				<Image source={require("./assets/choosePlan.png")} />
			</View>
			<View>
				<Plan />
				<Plan
					active={false}
					period={"Monthly"}
					description={"Pay monthly, cancel anytime"}
					price={"$20/m"}
				/>
			</View>
			<View style={[style.division, style.footer]}>
				<AppButton backgroundColor={Colors.navy} title="Make payment" />
			</View>
		</ScrollView>
	);
};

const style = StyleSheet.create({
    plan:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#ccc',
        margin: 10,
        borderRadius: 20,
        marginHorizontal: 30
    },
    active:{
        backgroundColor: '#fff',
        borderColor: Colors.tomato,
        borderWidth: 1
    },
    price:{
        fontSize: 25
    },
    aprice:{
        fontSize: 25,
        color: Colors.tomato
    },
    period: {
        display: 'flex',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        flex: 1
    },
	icon: {
		// backgroundColor: '#ccc',
		color: Colors.tomato,
	},
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

export default ChoosePlan;