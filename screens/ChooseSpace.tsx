import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Dimensions,
	Image,
	ScrollView,
} from "react-native";
import AppButton from "../components/AppButton";
import Colors from "../config/Colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

interface FloorProps {
	name: string;
	active: boolean;
}
const Floor = ({ name, active }: FloorProps) => {
	return <Text style={[style.floor, active && style.active]}>{name}</Text>;
};

const style = StyleSheet.create({
	floor: {
		padding: 10,
		paddingHorizontal: 20,
		marginHorizontal: 10,
		backgroundColor: "#ccc",
		borderRadius: 20,
	},
	active: {
		backgroundColor: Colors.tomato,
		color: "#fff",
	},
});

const ChooseSpace = () => {
	const navigation = useNavigation();

	const handleBack = () => {
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={handleBack} style={styles.button}>
					<MaterialCommunityIcons name="chevron-left" size={40} />
				</TouchableOpacity>
				<Text style={styles.heading}>Choose Space</Text>
				<Text></Text>
			</View>
			<ScrollView
				horizontal={true}
				style={styles.floors}
				contentContainerStyle={{
					height: 60,
					justifyContent: "center",
					alignContent: "center",
					alignItems: "center",
					padding: 5,
					// backgroundColor: "#f00",
					margin: 0,
				}}>
				<Floor name="1st Floor" active={true} />
				<Floor name="2nd Floor" active={false} />
				<Floor name="3rd Floor" active={false} />
				<Floor name="4th Floor" active={false} />
				<Floor name="5th Floor" active={false} />
			</ScrollView>
			<View
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<Image
					source={require("../assets/chooseSpace.png")}
					style={{ width: width, aspectRatio: 374 / 476 }}
				/>
			</View>
			<View style={styles.division}>
				<AppButton backgroundColor={Colors.navy} title="Book Space" />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	floors: {
		height: 10,
		display: "flex",
		flexDirection: "row",
	},
	container: {
		flex: 1,
		// height: height,
		backgroundColor: Colors.thirdBackground,
		paddingVertical: 30,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 50,
		marginTop: 50,
		padding: 20,
	},
	heading: {
		fontSize: 26,
	},
	button: {
		width: 44,
		height: 44,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ccc",
		borderRadius: 10,
	},
	division: {
		padding: 30,
	},
});

export default ChooseSpace;
