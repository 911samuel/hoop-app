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
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const PaymentDetails = () => {
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
        <Text style={styles.heading}>Payment Details</Text>
        <Text></Text>
      </View>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.textDetail}>Mobile Banking</Text>
        <MaterialIcons name="navigate-next" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.content}>
        <TouchableOpacity style={[styles.item, styles.itemColor]}>
          <Text>Credit Card</Text>
          <FontAwesome name="angle-up" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <View style={styles.oneItem}>
            <Image source={require("../assets/Sprint 3.png")} />
            <Text style={styles.textDetail}>ABC Bank **** 6189</Text>
          </View>
          <Ionicons name="radio-button-on" size={24} color="#F43939" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <View style={styles.oneItem}>
            <Image source={require("../assets/Visa.png")} />
            <Text style={styles.textDetail}>ABC Bank **** 6189</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.item, styles.itemColor]}>
          <View style={styles.oneItem}>
            <Ionicons name="add-circle" size={24} color="#F43939" />
            <Text style={styles.textDetail}>Add new card</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.item, styles.itemColor]}>
        <Text style={styles.textDetail}>Google Play</Text>
        <MaterialIcons name="navigate-next" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.item, styles.itemColor]}>
        <Text style={styles.textDetail}>Debit Card</Text>
        <MaterialIcons name="navigate-next" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.switch}>
        <Text>Send receipt to your email</Text>
        <Ionicons name="toggle-sharp" size={33} color="#F43939" />
      </View>
      <View style={styles.division}>
        <AppButton backgroundColor={Colors.navy} title="Pay Now" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.thirdBackground,
    padding: 38,
    paddingBottom: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 50,
    marginTop: 50,
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
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    marginBottom: 16,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 54,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 16,
    backgroundColor: Colors.thirdBackground,
    },
    itemColor: {
      backgroundColor: Colors.primary,
  },
  oneItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    },
    switch: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
  },
  textDetail: {
    fontSize: 16,
    color: Colors.black,
  },
  division: {
    marginTop: 25,
  },
});

export default PaymentDetails;
