import React from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";
import AppRoute from "../components/AppRoute";

const ParkingRoute = () => {
  return (
    <ImageBackground
      source={require("../assets/image 18.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <AppRoute />
        <Image
          source={require("../assets/Group 247.png")}
          style={styles.image}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
    paddingTop: 31,
  },
  image: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: 313,
    height: 349,
  },
});

export default ParkingRoute;
