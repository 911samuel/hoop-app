import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppHeading from "../components/AppHeading";

import SearchButton from "../components/SearchButton";
import Colors from "../config/Colors";
import NotificationIcon from "../components/NotificationIcon";
import CategoriesCard from "../components/CategoriesCard";
import ItemListComponent from "../components/ItemListComponent";
import { useNavigation } from "@react-navigation/native";

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
];

const Home = () => {
  const navigation = useNavigation();

  const handleNotification = () => {
    navigation.navigate("Notification" as never);
  };
  const handleItem = () => {
    navigation.navigate("DetailsCategory" as never);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 60,
            marginBottom: 37,
          }}
        >
          <View>
            <AppHeading
              title="Hola, Diane👋🏻"
              fontSize={28}
              color={Colors.primary}
              textAlign="left"
              paddingBottom={6}
            />
            <AppHeading
              title="Find an easy parking spot"
              fontSize={16}
              color={Colors.neutral}
              textAlign="left"
              paddingTop={0}
            />
          </View>
          <NotificationIcon
            materialIconName="notifications-none"
            color={Colors.searchIcon}
            onPress={handleNotification}
          />
        </View>
        <SearchButton />
      </View>
      <View style={styles.categories}>
        <AppHeading
          title="Categories"
          textAlign="left"
          fontSize={20}
          paddingBottom={17}
        />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingBottom: 50,
          }}
        >
          <CategoriesCard photo={require("../assets/carOg.png")} />
          <CategoriesCard photo={require("../assets/bike.png")} />
          <CategoriesCard photo={require("../assets/bus.png")} />
          <CategoriesCard photo={require("../assets/van.png")} />
        </View>
        <AppHeading
          title="Nearst Parking Spaces"
          textAlign="left"
          fontSize={20}
          paddingBottom={17}
        />
        <View>
          <ItemListComponent data={data} onPress={handleItem} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.secondaryBackground,
  },
  headingContainer: {
    marginBottom: 30,
    paddingRight: 38,
    paddingLeft: 38,
  },
  categories: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.thirdBackground,
    borderTopEndRadius: 38,
    borderTopStartRadius: 38,
    padding: 38,
    paddingTop: 30,
    paddingBottom: 0,
  },
});

export default Home;
