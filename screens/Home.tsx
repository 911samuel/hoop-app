import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Dimensions, Text } from "react-native";
import AppHeading from "../components/AppHeading";
import SearchButton from "../components/SearchButton";
import Colors from "../config/Colors";
import NotificationIcon from "../components/NotificationIcon";
import CategoriesCard from "../components/CategoriesCard";
import ItemListComponent from "../components/ItemListComponent";
import { useNavigation } from "@react-navigation/native";
import { Client, Databases } from "appwrite";
import { TouchableHighlight } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

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

const Home = () => {
  const navigation = useNavigation();
  const [data, setData] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  const categoryCards = [
    { title: "Car", photo: require("../assets/carOg.png") },
    { title: "Bike", photo: require("../assets/bike.png") },
    { title: "Bus", photo: require("../assets/bus.png") },
    { title: "Van", photo: require("../assets/van.png") },
  ];

  useEffect(() => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("66259128762986b20dac");

    const databases = new Databases(client);

    databases
      .listDocuments("662b8556d501bccf3b18", "662b85804a71e6c8bac8")
      .then((response) => {
        setData(response.documents);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleNotification = () => {
    navigation.navigate("Notification" as never);
  };

  const handleItem = () => {
    navigation.navigate("Detail" as never);
  };

  const handleCategory = () => {
    navigation.navigate("DetailsCategory" as never);
  };

  const handleProfile = () => {
    navigation.navigate("Profile" as never);
  };

  const handleSearch = () => {
    navigation.navigate("Explore" as never);
  };

  const itemData: Item[] = data.map((doc: Document) => ({
    id: doc.$id,
    title: doc.title || "Default Title",
    subtitle: doc.subtitle || "Default Subtitle",
	image: doc.image || require("../assets/Rectangle 59.png"),
	min: doc.min,
	price: doc.price,
  }));

  return (
    <View style={styles.container}>
      <Image source={require("./assets/lines.png")} style={styles.img} />
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
            <TouchableHighlight
              underlayColor={Colors.thirdText}
              onPress={handleProfile}
            >
              <AppHeading
                title="Hola, Diane👋🏻"
                fontSize={28}
                color={Colors.primary}
                textAlign="left"
                paddingBottom={6}
                onPress={handleProfile}
              />
            </TouchableHighlight>
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
        <SearchButton onPress={handleSearch} />
      </View>
      <View style={styles.categories}>
        <AppHeading
          title="Categories"
          textAlign="left"
          fontSize={20}
          paddingBottom={17}
        />
        <CategoriesCard data={categoryCards} onPress={handleCategory} />
        <AppHeading
          title="Nearest Parking Spaces"
          textAlign="left"
          fontSize={20}
          paddingBottom={17}
        />
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <ItemListComponent data={itemData} onPress={handleItem} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: Colors.secondaryBackground,
    paddingTop: 60,
    height: height,
  },
  img: {
    position: "absolute",
    width: width,
    height: undefined,
    aspectRatio: 375 / 283,
    top: 0,
    left: 0,
  },
  headingContainer: {
    marginBottom: 30,
    paddingRight: 38,
    paddingLeft: 38,
  },
  categories: {
    flex: 1,
    width: width,
    backgroundColor: Colors.thirdBackground,
    borderTopEndRadius: 38,
    borderTopStartRadius: 38,
    padding: 38,
    paddingTop: 30,
    paddingBottom: 0,
  },
});

export default Home;
