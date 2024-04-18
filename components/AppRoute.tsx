import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../config/Colors";
import AppHeading from "./AppHeading";

const AppRoute = () => {
  return (
    <View style={styles.container}>
      <View>
        <AppHeading
          title="Route"
          fontSize={26}
          color={Colors.black}
          textAlign="left"
        />
        <AppHeading
          title="Turn left to parking spot"
          fontSize={18}
          color={Colors.neutral}
          textAlign="left"
        />
      </View>
      <View style={styles.verticalLine} />
      <View style={{alignItems: "center"}}>
        <Ionicons name="return-up-back" size={24} color="black" />
        <AppHeading title="100 m" fontSize={18} color={Colors.black} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 121,
    backgroundColor: Colors.primary,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    paddingHorizontal: 32,
    paddingVertical: 31,
  },
  verticalLine: {
    height: 53,
    width: 1,
    backgroundColor: Colors.neutral,
  },
});

export default AppRoute;
