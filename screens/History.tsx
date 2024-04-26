import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";

import AppHeading from "../components/AppHeading";
import Colors from "../config/Colors";
import SearchButton from "../components/SearchButton";
import ItemListComponent from "../components/ItemListComponent";
import NotificationIcon from "../components/NotificationIcon";
import { useNavigation } from "@react-navigation/native";
import { Client, Databases } from "appwrite";

interface Document {
  $id: string;
  title?: string;
  subtitle?: string;
  image?: string;
  price?: number;
  time?: string;
  date?: string;
  location?: string;
  min?: string;
}

interface Item {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  price?: number;
  time?: string;
  date?: string;
  location?: string;
  min?: string;
}

const History = () => {
  const [data, setData] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [recentlyData, setRecentlyData] = useState<Item[]>([]);
  const [thisWeekData, setThisWeekData] = useState<Item[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("66259128762986b20dac");

    const databases = new Databases(client);

    databases
      .listDocuments("662b8556d501bccf3b18", "662b85804a71e6c8bac8")
      .then((response) => {
        const sortedData = [...response.documents].sort(
          (a, b) => parseInt(b.$id) - parseInt(a.$id)
        );
        setRecentlyData(
          sortedData.slice(0, 2).map((doc) => ({
            id: doc.$id,
            title: doc.title || "Default Title",
            subtitle: doc.subtitle || "Default Subtitle",
            image: doc.image || require("../assets/Rectangle 59.png"),
            min: doc.min,
            price: doc.price,
          }))
        );
        setThisWeekData(
          sortedData.slice(0, 1).map((doc) => ({
            id: doc.$id,
            title: doc.title || "Default Title",
            subtitle: doc.subtitle || "Default Subtitle",
            image: doc.image || require("../assets/Rectangle 59.png"),
            min: doc.min,
            price: doc.price,
          }))
        );
        setData(response.documents);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleItem = () => {
    navigation.navigate("Detail" as never);
  };
  const handleFilter = () => {
    navigation.navigate("Expolore" as never);
  };

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
          onPress={handleFilter}
        />
      </View>
      <AppHeading
        title="Recently"
        paddingBottom={21}
        paddingTop={50}
        textAlign="left"
        fontSize={20}
      />
      <ItemListComponent data={recentlyData} onPress={handleItem} />
      <AppHeading
        title="This Week"
        paddingBottom={21}
        textAlign="left"
        fontSize={20}
        paddingTop={10}
      />
      <ItemListComponent data={thisWeekData} onPress={handleItem} />
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
