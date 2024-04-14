import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppHeading from "../components/AppHeading";
import Colors from "../config/Colors";
import SearchButton from "../components/SearchButton";
import ItemListComponent from "../components/ItemListComponent";

const data = [
  {
    id: 1,
    title: "Graha Mall",
    subtitle: "123 Dhaka Street",
    price: 7,
    image: require("../assets/Rectangle 59.png"),
    time: 7,
  },
  {
    id: 2,
    title: "Graha Mall",
    subtitle: "123 Dhaka Street",
    price: 7,
    image: require("../assets/Rectangle 62.png"),
    time: 7,
  },
  {
    id: 3,
    title: "Graha Mall",
    subtitle: "123 Dhaka Street",
    price: 7,
    image: require("../assets/Rectangle 62.png"),
    time: 7,
  },
];

const Explore = () => {
  return (
    <View style={styles.container}>
      <AppHeading
        title="Explore"
        fontSize={28}
        color={Colors.black}
        paddingBottom={47}
      />
      <SearchButton
        backgroundColor={Colors.thirdButton}
        color={Colors.thirdText}
      />
      <View style={styles.nearest}>
        <Image source={require("../assets/nearest.png")} style={styles.image} />
        <AppHeading
          title="Most Popular Most Wanted"
          fontSize={16}
          textAlign="left"
          color={Colors.thirdText}
        />
      </View>
      <View style={styles.categories}>
        <ItemListComponent data={data} />
      </View>
      <Image source={require("../assets/location.png")} style={styles.location} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.thirdBackground,
    padding: 38,
    paddingTop: 60,
    paddingBottom: 0,
  },
  nearest: {
    flexDirection: "row",
    marginTop: 50,
    width: "100%",
    alignItems: "center",
    marginBottom: 50,
  },
  image: {
    width: 73,
    height: 56,
    marginRight: 20,
  },
  categories: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.thirdBackground,
    borderTopEndRadius: 38,
    borderTopStartRadius: 38,
  },
  location: {
    width: 55,
    height: 55,
    position: "absolute",
    bottom: 100,
    right: 50,
  },
});

export default Explore;
