import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SimpleLineIcons, MaterialIcons } from "@expo/vector-icons";

import Colors from "../config/Colors";

interface Item {
  id: string;
  title: string;
  subtitle: string;
  price?: number;
  image: any;
  time?: string;
  date?: string;
  location?: string;
  min?: string
}

interface ItemListComponentProps {
  data: Item[];
  visibleItems?: number;
  onPress: () => void;
}

const ItemListComponent = ({
  data,
  visibleItems = Infinity,
  onPress
}: ItemListComponentProps) => {
  const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
        {item.date && item.time && (
          <View style={styles.Container}>
            <View style={styles.locationContainer}>
              <SimpleLineIcons
                name="location-pin"
                size={14}
                color={Colors.tomato}
              />
              <Text style={styles.location}>{item.location}</Text>
            </View>
            <View style={styles.timeContainer}>
              <MaterialIcons
                name="access-time"
                size={14}
                color={Colors.tomato}
              />
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
          </View>
        )}
        {!item.date && (
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${item.price}/</Text>
            <Text style={styles.priceHour}>hour</Text>
          </View>
        )}
      </View>
      <View>
        {item.date && (
          <View style={styles.timeItem}>
            <Text style={styles.dateItem}>{item.date}</Text>
          </View>
        )}
        {!item.date && (
          <View style={styles.time}>
            <Text style={styles.date}>{item.min}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data.slice(0, visibleItems)}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 11,
    backgroundColor: Colors.primary,
    borderRadius: 15,
    marginBottom: 20,
  },
  image: {
    width: 98,
    height: 104,
    marginRight: 16,
    borderRadius: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Avenir-Book",
    fontWeight: "500",
    fontSize: 18,
  },
  subtitle: {
    fontFamily: "Avenir-Light",
    fontSize: 14,
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  price: {
    fontFamily: "Avenir-Book",
    fontSize: 18,
    color: Colors.tomato,
  },
  priceHour: {
    fontFamily: "Avenir-Light",
    fontSize: 14,
    marginLeft: 2,
    color: Colors.tomato,
  },
  time: {
    width: 59,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF3F3",
    borderRadius: 15,
  },
  timeItem: {
    width: 59,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  timeText: {
    fontFamily: "Avenir-Book",
    fontSize: 12,
    marginLeft: 5,
    color: Colors.tomato,
  },
  Container: {
    flexDirection: "row",
  },
  date: {
    fontFamily: "Avenir-Book",
    fontSize: 12,
    color: Colors.tomato,
  },
  dateItem: {
    fontFamily: "Avenir-Book",
    fontSize: 12,
  },
  location: {
    color: "tomato",
    fontSize: 12,
    marginLeft: 5,
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    width: 71,
    height: 26,
    borderRadius: 7,
    backgroundColor: "#FFF3F3",
  },
  timeContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 71,
    height: 26,
    borderRadius: 7,
    backgroundColor: "#FFF3F3",
  },
});

export default ItemListComponent;
