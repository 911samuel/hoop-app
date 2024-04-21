import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import AppButton from "../components/AppButton";
import Colors from "../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PaymentSummary from "../components/PaymentSummary";

const { width, height } = Dimensions.get("window");

const Payment = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <TouchableOpacity onPress={handleBack} style={style.button}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            style={style.icon2}
          />
        </TouchableOpacity>
        <Text style={style.heading}>Payment</Text>
        <Text></Text>
      </View>
      <View style={style.content}>
        <View style={style.imageContainer}>
          <Image source={require("../assets/Rectangle 104.png")} />
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
      </View>
      <View style={style.insuranceContainer}>
        <Text style={style.textDetail}>Input voucher code</Text>
        <Text style={[style.textDetail, style.textDetail2]}>Use</Text>
      </View>
      <PaymentSummary />
      <View style={style.division}>
        <AppButton backgroundColor={Colors.navy} title="Pay Now" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#F4F4Fc",
    paddingRight: 38,
    paddingLeft: 38,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  content: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    marginBottom: 16,
  },
  imageContainer: {
    alignItems: "center",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    marginTop: 18,
    width: "80%",
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
  insuranceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 61,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
  },
  iconInsurance: {
    justifyContent: "center",
    alignItems: "center",
    width: 21,
    height: 21,
  },
  textDetail: {
    fontFamily: "Avenir-Book",
    fontSize: 16,
    color: Colors.thirdText,
  },
  textDetail2: {
    color: Colors.tomato,
  },
    division: {
      marginTop: 25,
  },
});

export default Payment;
