import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import AppButton from "../components/AppButton";
import Colors from "../config/Colors";
import AppHeading from "../components/AppHeading";

const { width, height } = Dimensions.get("screen");

const PaymentSuccess = () => {
  const navigation = useNavigation();
  const handleHome = () => {
    navigation.navigate("Home" as never);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View>
          <Image
            source={require("../assets/Ellipse.png")}
            style={styles.backgroundImage}
          />

          <Image
            source={require("../assets/payment.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.heading}>Payment Success</Text>
          <Text style={styles.description}>
            Congrats on your reserved parking space
          </Text>
        </View>
      </View>
      <Text style={styles.reciept}>Reciept</Text>
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color={Colors.tomato}
          />
        </View>
        <View style={styles.icon}>
          <AntDesign name="message1" size={24} color={Colors.tomato} />
        </View>
      </View>
      <View style={styles.bottom}>
        <AppButton
          title="Back to Home"
          marginTop={50}
          onPress={handleHome}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bottom: {
    width: "80%",
    alignItems: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
      alignItems: "center",
    marginTop: 60,
  },
  container: {
    flex: 0.5,
    paddingTop: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
  },
  wrapper: {
    height: 300,
  },
  image: {
    position: "relative",
    width: 254,
    height: 222,
    marginBottom: 60,
  },
  backgroundImage: {
    position: "absolute",
    width: 292,
    height: 292,
    top: -60,
    left: 0,
      right: 0,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 48,
    height: 48,
    backgroundColor: "#fff",
    marginRight: 30,
    alignItems: "center",
    justifyContent: "center",
    },
    reciept: {
        fontFamily: "Avenir-Book",
        fontWeight: "900",
        marginBottom: 21,
  }
});

export default PaymentSuccess;
