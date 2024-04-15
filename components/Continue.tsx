import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface ContinueProps {
  image: any;
  title: string;
}

const Continue = ({ image, title }: ContinueProps) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image source={image} style={styles.image} />
        <Text style={styles.text}>{title}</Text>
      </View>
      <MaterialIcons name="navigate-next" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 16,
  },
  text: {
    fontFamily: "Avenir-Book",
    fontSize: 18,
  },
});

export default Continue;
