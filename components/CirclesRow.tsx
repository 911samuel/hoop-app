import React from "react";
import { View, StyleSheet } from "react-native";

const CirclesRow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.space} />
      <View style={styles.circle} />
      <View style={styles.space} />
      <View style={styles.circle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 28,
    height: 6,
  },
  circle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "black",
  },
  space: {
    width: 4, 
  },
});

export default CirclesRow;
