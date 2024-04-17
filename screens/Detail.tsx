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

const DetailHistory = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  const handleItem = () => {
    navigation.navigate("DetailHistory" as never);
  };
  return (
    <ScrollView style={style.view}>
      <View style={[style.division, style.header]}>
        <TouchableOpacity onPress={handleBack} style={style.button}>
          {true && (
            <MaterialCommunityIcons
              name="chevron-left"
              size={40}
              style={style.icon2}
            />
          )}
        </TouchableOpacity>
        <Text style={style.heading}>Detail</Text>
        <Text></Text>
      </View>
      <View style={style.image}>
        <Image source={require("./assets/detailHistory.png")} />
        <Text style={[style.heading, { margin: 20 }]}>Graha Mall</Text>
        <Text>123 Dhaka Street</Text>
      </View>
      <View style={style.details}>
        <Text style={style.detail}>
          <MaterialCommunityIcons
            name="map-marker"
            size={16}
            style={style.icon}
          />
          {"  "} A-6
        </Text>
        <Text style={style.detail}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={16}
            style={style.icon}
          />
          {"  "} 4 hours
        </Text>
      </View>
      <View style={{ padding: 20, paddingHorizontal: 30 }}>
        <Text style={[style.heading, { fontSize: 30 }]}>Information</Text>
        <Text style={{ fontSize: 16, color: Colors.neutral }}>
          24/7 parking facility with cctv camera, professional security guard,
          chair disble, floor parking list facilities. You will get hassle
          parking facilities with 35% discount on first parking...
        </Text>
      </View>
      <View style={[style.division, style.footer]}>
        <AppButton
          backgroundColor={Colors.navy}
          title="Book Now"
          width={197}
          onPress={handleItem}
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  detail: {
    color: Colors.tomato,
    fontSize: 17,
    backgroundColor: "#fff3f3",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  icon: {
    margin: 10,
  },
  icon2: {
    color: Colors.neutral,
  },
  division: {
    padding: 20,
  },
  image: {
    alignItems: "center",
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
    fontSize: 20,
    textAlign: "center",
    marginTop: 0,
    paddingHorizontal: 40,
    marginBottom: 10,
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
    fontSize: 14,
    color: "#2D2D2D",
  },
  view: {
    paddingTop: 60,
    backgroundColor: "#F4F4Fc",
  },
  footer: {
    marginTop: 0,
    alignItems: "center",
  },
});

export default DetailHistory;
