import React from "react";
import {
	Dimensions,
	ImageBackground,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../config/Colors";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const map = require("./assets/maps.png");

interface PinProps {
	x: number;
	y: number;
}

const PricePin = ({ x = 10, y = 10 }: PinProps) => {
	return (
		<Image
			source={require("./assets/pricePin.png")}
			style={{ position: "absolute", bottom: y, left: x }}
		/>
	);
};

const ShowMaps = () => {
	const navigation = useNavigation();
	const handleBack = () => {
		navigation.goBack();
	};
	return (
		<ScrollView style={styles.container}>
			<View style={styles.map}>
				<Image style={styles.image} source={map} />
				<Image
					source={require("./assets/myCar.png")}
					style={{ position: "absolute", bottom: 600, left: width / 2 - 100 }}
				/>
				<PricePin x={200} y={500} />
				<PricePin x={300} y={350} />
				<PricePin x={100} y={400} />
				<View style={[styles.inner]}>
					<View style={styles.navigation}>
						<TouchableOpacity onPress={handleBack} style={styles.button}>
							{true && (
								<MaterialCommunityIcons
									name="chevron-left"
									size={40}
									style={styles.icon2}
								/>
							)}
						</TouchableOpacity>
						<Image source={require("./assets/location.png")} />
					</View>
					<View style={styles.info}>
						<View style={styles.title}>
							<Text style={styles.heading}>Parking Spots</Text>
							<Text style={styles.price}>$6</Text>
						</View>
						<Text style={{ color: Colors.neutral, marginVertical: 6 }}>
							123 Dhaka Street
						</Text>
						<ScrollView horizontal={true}>
							<View
								style={{
									display: "flex",
									flexDirection: "row",
									flexWrap: "nowrap",
								}}>
								<Image
									style={styles.slideImage}
									source={require("./assets/maps-1.png")}
								/>
								<Image
									style={styles.slideImage}
									source={require("./assets/maps-2.png")}
								/>
								<Image
									style={styles.slideImage}
									source={require("./assets/maps-3.png")}
								/>
							</View>
						</ScrollView>
					</View>
				</View>
			</View>
			<View style={styles.footer}>
				<MaterialCommunityIcons name="magnify" size={40} style={styles.icon2} />
				<TextInput style={styles.input} placeholder="Parking address..." />
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	footer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		marginTop: 40,
		padding: 30,
	},
	input: {
		fontSize: 30,
		marginHorizontal: 20,
	},
	info: {
		backgroundColor: "#fff",
		borderRadius: 20,
		padding: 30,
	},
	price: {
		backgroundColor: "#FFD3F3",
		padding: 10,
		paddingHorizontal: 20,
		color: "#FF0000",
		borderRadius: 30,
	},
	title: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	navigation: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 10,
	},
	inner: {
		position: "absolute",
		bottom: 20,
		left: 20,
		right: 20,
	},
	slideImage: {
		width: 200,
		aspectRatio: 120 / 92,
		margin: 10,
		// width: undefined
	},
	button: {
		width: 44,
		height: 44,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ccc",
		borderRadius: 10,
	},
	icon2: {
		color: Colors.neutral,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	heading: {
		fontSize: 26,
	},
	map: {
		// flex: 1,
		position: "relative",
	},
	container: {
		flex: 1,
		position: "relative",
	},
	image: {
		// flex: 1,
		justifyContent: "center",
		width: width,
		height: height - 100,
		borderBottomLeftRadius: 20,
	},
	text: {
		color: "white",
		fontSize: 42,
		lineHeight: 84,
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "#000000c0",
	},
});

export default ShowMaps;
