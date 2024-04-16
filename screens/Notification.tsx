import React from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import AppButton from '../components/AppButton';
import Colors from '../config/Colors';
import { MaterialCommunityIcons } from "@expo/vector-icons"; 

const { width, height } = Dimensions.get("window");

function onPress(){

}

interface NotificationProps{
    active: boolean
}

function Notification({active=false}:NotificationProps){
    return (
        <View style={notif.notif}>
            <View style={[notif.inner, active ? notif.active : notif.inner]}>
                <View style={notif.header}>
                    <Text style={[notif.heading, !active? notif.light : notif.heading]}>Order Successful</Text>
                    <Text style={notif.time}>12:34</Text>
                </View>
                <View>
                    <Text style={notif.content}>Congrats on your reserved parking space...</Text>
                </View>
            </View>
        </View>
		);
}

const notif = StyleSheet.create({
    notif:{
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 10
    },
    inner:{
        borderLeftWidth: 5,
        paddingHorizontal: 10,
        display: 'flex',
        justifyContent: 'center',
        borderColor: Colors.neutral,
        borderRadius: 5
    },
    active:{
        borderColor: Colors.tomato
    },
    header:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5
    },
    heading:{
        fontSize: 25,
    },
    light:{
        color: Colors.neutral
    },
    time:{
        color: Colors.neutral
    },
    content:{
        color: Colors.neutral,
        fontSize: 20,
    }
})

const Notifications = () => {
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
				<Text style={style.heading}>Notification</Text>
				<Text></Text>
			</View>
			<View style={style.division}>
				<Text style={[style.heading]}>Today</Text>

				<Notification active={true} />
				<Notification active={true} />
				<Notification active={false} />

				<Text style={[style.heading]}>June 12, 2021</Text>

				<Notification active={false} />
				<Notification active={true} />
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
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	heading: {
		fontSize: 26,
        margin: 10
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
	view: {
		paddingTop: 60,
		backgroundColor: "#F4F4FA",
	},
	footer: {
		marginTop: 30,
		alignItems: "center",
	},
});

export default Notifications;