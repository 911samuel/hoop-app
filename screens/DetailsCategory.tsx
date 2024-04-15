import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppHeading from "../components/AppHeading";
import Colors from "../config/Colors";
import ItemListComponent from "../components/ItemListComponent";
import NotificationIcon from "../components/NotificationIcon";

const data = [
  {
    id: 1,
    title: "Graha Mall",
    subtitle: "123 Dhaka Street",
    price: 7,
    image: require("../assets/Rectangle 59.png"),
    time: "7 min",
  },
  {
    id: 2,
    title: "Graha Mall",
    subtitle: "123 Dhaka Street",
    price: 7,
    image: require("../assets/Rectangle 62.png"),
    time: "7 min",
  },
  {
    id: 3,
    title: "Graha Mall",
    subtitle: "123 Dhaka Street",
    price: 7,
    image: require("../assets/Rectangle 62.png"),
    time: "7 min",
  },
  {
    id: 4,
    title: "Graha Mall",
    subtitle: "123 Dhaka Street",
    price: 7,
    image: require("../assets/Rectangle 62.png"),
    time: "7 min",
  },
  {
    id: 5,
    title: "Graha Mall",
    subtitle: "123 Dhaka Street",
    price: 7,
    image: require("../assets/Rectangle 62.png"),
    time: "7 min",
  },
];

const DetailsCategory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <NotificationIcon
          materialIconName="arrow-back-ios"
          backgroundColor={Colors.thirdButton}
          color={Colors.thirdText}
          width={55}
          height={55}
        />
        <AppHeading
          title="Detail Category"
          fontSize={20}
          color={Colors.black}
        />
        <NotificationIcon
          antDesignIconName="filter"
          backgroundColor={Colors.thirdButton}
          color={Colors.thirdText}
          width={55}
          height={55}
        />
      </View>
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
      <Image
        source={require("../assets/location.png")}
        style={styles.location}
      />
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
  heading: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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

export default DetailsCategory;
