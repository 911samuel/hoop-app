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
import Colors from "../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const TrackParking = () => {
	const navigation = useNavigation();

	const handleBack = () => {
		navigation.goBack();
	};
	return (
		<View style={style.container}>
			<TouchableOpacity onPress={handleBack} style={style.button}>
				{true && (
					<MaterialCommunityIcons
						name="chevron-left"
						size={40}
						style={style.icon2}
					/>
				)}
			</TouchableOpacity>
			<Image
				source={require("../assets/trackingPark.png")}
				style={{ width: width, height: height + 200 }}
			/>
			<View style={style.footer}>
				<View style={style.inner}>
					<View style={style.item}>
						<View>
							<Text style={style.indicator}>Your Destination Address</Text>
							<View style={style.location}>
								<MaterialCommunityIcons
									name="map-marker"
									size={25}
									style={style.icon}
								/>
								<Text style={style.address}>123 Dhaka Street</Text>
							</View>
						</View>
						<View style={style.time}>
							<MaterialCommunityIcons
								name="clock-outline"
								size={20}
								style={[style.icon, { margin: 5, marginHorizontal: 5 }]}
							/>
							<Text>7 minutes</Text>
						</View>
					</View>
					<View style={style.lines}></View>
					<View style={style.item}>
						<View>
							<Text style={style.indicator}>Your Address</Text>
							<View style={style.location}>
								<MaterialCommunityIcons
									name="map-marker"
									size={25}
									style={style.icon}
								/>
								<Text style={style.address}>123 Dhaka Street</Text>
							</View>
						</View>
					</View>
					<View style={style.buttons}>
						<TouchableOpacity style={style.footerButton}>
							<MaterialCommunityIcons name="alert-circle" size={40} />
						</TouchableOpacity>
						<TouchableOpacity style={[style.footerButton, style.start]}>
							<Text style={style.startText}>Start Now</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	startText: {
		color: "#fff",
		fontSize: 20,
	},
	start: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#130f26",
		flex: 1,
		marginHorizontal: 20,
	},
	footerButton: {
		padding: 10,
		backgroundColor: Colors.primary,
		borderRadius: 20,
	},
	time: {
		backgroundColor: "#ffe2f3",
		padding: 10,
		paddingHorizontal: 20,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 20,
	},
	address: {
		fontSize: 20,
		fontWeight: "bold",
	},
	icon: {
		color: Colors.tomato,
		marginHorizontal: 10,
	},
	location: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	indicator: {
		fontSize: 20,
		color: Colors.neutral,
		paddingVertical: 10,
	},
	lines: {
		height: 50,
		borderLeftWidth: 2,
		borderStyle: "dashed",
		borderColor: Colors.neutral,
		marginLeft: 42,
	},
	buttons: {
		display: "flex",
		flexDirection: "row",
		padding: 20,
		backgroundColor: "#f5f4fa",
		borderRadius: 50,
		marginTop: 20,
	},
	footer: {
		position: "absolute",
		left: 0,
		right: 0,
		top: height - 350,
		bottom: 170,
		borderColor: "#000",
		// borderWidth: 2,
		padding: 20,
	},
	item: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		paddingHorizontal: 20,
	},
	inner: {
		backgroundColor: "#fff",
		paddingVertical: 30,
		borderRadius: 50,
		paddingBottom: 0,
	},
	container: {
		position: "relative",
	},
	button: {
		width: 44,
		height: 44,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ccc",
		borderRadius: 10,
		position: "absolute",
		top: 100,
		left: 25,
		zIndex: 20,
	},
	icon2: {
		color: Colors.neutral,
	},
});

export default TrackParking;
