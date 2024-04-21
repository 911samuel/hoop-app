import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../config/Colors";

const PaymentSummary = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Sub total</Text>
        <Text style={styles.value}>$30,00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Insurance</Text>
        <Text style={styles.value}>$5,00</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.row}>
        <Text style={[styles.label, styles.total]}>Total</Text>
        <Text style={[styles.value, styles.total]}>$35,00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 20,
    marginTop: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontFamily: "Avenir-Book",
    fontSize: 16,
    color: "#2D2D2D",
  },
  value: {
    fontFamily: "Avenir-Book",
    fontSize: 16,
    color: "#2D2D2D",
  },
  line: {
    borderBottomWidth: 1,
    borderColor: Colors.thirdText,
    marginBottom: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PaymentSummary;
