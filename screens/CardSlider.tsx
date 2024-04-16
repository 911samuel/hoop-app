import React, { useRef } from "react";
import {
	View,
	ScrollView,
	Animated,
	StyleSheet,
	Dimensions,
	Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; 
import Colors from "../config/Colors";

const { width } = Dimensions.get("window");

const CardSlider = () => {
	const scrollX = useRef(new Animated.Value(0)).current;

	const cardWidth = width * 0.8;
	const cardMargin = 30;

	// Dummy data for card headings and checklist items
	const cardsData = [
		{
			title: "Pro",
			checklist: [
				"All included",
				"Unlimited features",
				"Discounts every reservation",
				"No jokes with Andela",
				"We love React Native",
				"All included",
			],
		},
		{
			title: "Free",
			checklist: [
				"All included",
				"Unlimited features",
				"Discounts every reservation",
				"No jokes with Andela",
				"We love React Native",
				"All included",
			],
		},
		{
			title: "Premium",
			checklist: [
				"All included",
				"Unlimited features",
				"Discounts every reservation",
				"No jokes with Andela",
				"We love React Native",
				"All included",
			],
		},
	];

	return (
		<View style={styles.container}>
			<ScrollView
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.contentContainer}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{
						useNativeDriver: false,
					}
				)}
				scrollEventThrottle={16}>
				{cardsData.map((card, index) => (
					<View
						key={index}
						style={[
							styles.card,
							{ width: cardWidth, marginLeft: index === 0 ? cardMargin : 0 },
						]}>
						<Text style={styles.heading}>{card.title}</Text>
						<View style={styles.checklist}>
							{card.checklist.map((item, itemIndex) => (
								<Text key={itemIndex} style={styles.checklistItem}>
									<MaterialCommunityIcons
										name='checkbox-marked'
                                        size={19}
										style={styles.icon}
									/>
									{"    "}{item}
								</Text>
							))}
						</View>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
    icon:{
        color: Colors.tomato
    },
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	contentContainer: {
		alignItems: "center",
        padding: 10
	},
	card: {
		backgroundColor: "#fff",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		padding: 30,
        paddingVertical: 40,
		marginRight: 20,
	},
	heading: {
		fontSize: 30,
		fontWeight: "bold",
		marginBottom: 10,
        textAlign: 'center'
	},
	checklist: {
		marginLeft: 10,
	},
	checklistItem: {
		fontSize: 16,
		marginBottom: 20,
	},
});

export default CardSlider;
