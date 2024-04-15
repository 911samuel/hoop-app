import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppHeading from "../components/AppHeading";
import Colors from "../config/Colors";
import SearchButton from "../components/SearchButton";
import ItemListComponent from "../components/ItemListComponent";
import NotificationIcon from "../components/NotificationIcon";

const data = [
  {
    id: 1,
    title: "Graha Mall",
    subtitle: "123 Dhaka Street",
    price: 7,
    image: require("../assets/Rectangle 59.png"),
    time: "4 hours",
    location: "A-6",
    date: "12 Aug",
  },
  {
    id: 2,
    title: "Graha Mall",
    subtitle: "123 Dhaka Street",
    price: 7,
    image: require("../assets/Rectangle 62.png"),
    time: "4 hours",
    date: "12 Aug",
    location: "A-6",
  },
  {
    id: 3,
    title: "Graha Mall",
    subtitle: "123 Dhaka Street",
    price: 7,
    image: require("../assets/Rectangle 62.png"),
    time: "4 hours",
    location: "A-6",
    date: "12 Aug",
  },
];

const History = () => {
  const sortedData = [...data].sort((a, b) => b.id - a.id);
  const recentlyData = sortedData.slice(0, 2);
  const thisWeekData = sortedData.slice(0, 1);

  return (
    <View style={styles.container}>
      <AppHeading
        title="History"
        fontSize={28}
        color={Colors.black}
        paddingBottom={47}
      />
      <View style={styles.heading}>
        <SearchButton
          backgroundColor={Colors.thirdButton}
          color={Colors.thirdText}
          width={270}
        />
        <NotificationIcon
          antDesignIconName="filter"
          backgroundColor={Colors.thirdButton}
          color={Colors.thirdText}
          width={55}
          height={55}
        />
      </View>
      <AppHeading
        title="Recently"
        paddingBottom={21}
        paddingTop={50}
        textAlign="left"
        fontSize={20}
      />
      <ItemListComponent data={recentlyData} />
      <AppHeading
        title="This Week"
        paddingBottom={21}
        textAlign="left"
        fontSize={20}
        paddingTop={10}
      />
      <ItemListComponent data={thisWeekData} />
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
    justifyContent: "space-between",
  },
  image: {
    width: 73,
    height: 56,
    marginRight: 20,
  },
});

export default History;
