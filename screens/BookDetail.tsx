import React from "react";
import {
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
import AppHeading from "../components/AppHeading";

const { width, height } = Dimensions.get("window");

const BookDetail = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  const handleItem = () => {
    navigation.navigate("DetailHistory" as never);
  };
  return (
    <View style={style.view}>
      <View style={style.header}>
        <TouchableOpacity onPress={handleBack} style={style.button}>
          {true && (
            <MaterialCommunityIcons
              name="chevron-left"
              size={40}
              style={style.icon2}
            />
          )}
        </TouchableOpacity>
        <Text style={style.heading}>Book Details</Text>
        <Text></Text>
      </View>
      <View style={style.image}>
        <Image source={require("../assets/Rectangle 64.png")} />
        <View style={style.textHeading}>
          <View>
            <Text style={style.heading}>Graha Mall</Text>
            <Text>123 Dhaka Street</Text>
          </View>
          <View style={style.textButton}>
            <Text style={style.text}>$10/h</Text>
          </View>
        </View>
      </View>
      <View style={style.details}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 21,
          }}
        >
          <View style={style.detailContainer}>
            <View style={style.detail}>
              <MaterialCommunityIcons
                name="map-marker"
                size={14}
                style={style.icon}
              />
            </View>
            <Text style={style.textDetail}>A-6</Text>
            <Text style={style.textDetail2}>Parking Place</Text>
          </View>
          <View style={style.detailContainer}>
            <View style={style.detail}>
              <MaterialCommunityIcons
                name="clock-outline"
                size={14}
                style={style.icon}
              />
            </View>
            <Text style={style.textDetail}>4 h</Text>
            <Text style={style.textDetail2}>Time</Text>
          </View>
        </View>
        <View style={style.insuranceContainer}>
          <View style={style.iconContainer}>
            <Image
              style={style.iconInsurance}
              source={require("../assets/Activity.png")}
            />
          </View>
          <Text style={style.textDetail}>Include Insurance</Text>
          <Text>$5/h</Text>
        </View>
        <View style={style.division}>
          <Text style={style.pay}>$35,00</Text>
          <AppButton
            backgroundColor={Colors.navy}
            title="Pay"
            width={197}
            onPress={handleItem}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    display: "flex",
    justifyContent: "space-around",
  },
  detailContainer: {
    width: 145,
    height: 126,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
  },
  detail: {
    backgroundColor: "#fff3f3",
    borderRadius: 10,
    width: 38,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  textDetail: {
    fontFamily: "Avenir-Book",
    fontSize: 18,
  },
  textDetail2: {
    fontFamily: "Avenir-Book",
    fontSize: 14,
    color: Colors.thirdText,
  },
  insuranceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 61,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
  },
  iconContainer: {
    width: 41,
    height: 41,
    borderRadius: 10,
    backgroundColor: "#FFF3F3",
    alignItems: "center",
    justifyContent: "center",
  },
  iconInsurance: {
    justifyContent: "center",
    alignItems: "center",
    width: 21,
    height: 21,
  },
  icon: {
    color: Colors.tomato,
  },
  icon2: {
    color: Colors.neutral,
  },
  division: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  image: {
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
    alignItems: "center",
    marginBottom: 50,
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
  textHeading: {
    width: 311,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },
  textButton: {
    width: 72,
    height: 38,
    backgroundColor: Colors.button,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Avenir-Book",
    fontSize: 16,
    color: Colors.tomato,
  },
  view: {
    flex: 1,
    paddingRight: 38,
    paddingLeft: 38,
    backgroundColor: "#F4F4Fc",
  },
  pay: {
    fontFamily: "Avenir-Book",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default BookDetail;
