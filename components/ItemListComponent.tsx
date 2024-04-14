import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

import Colors from "../config/Colors";

interface Item {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  image: any;
  time: number;
}

interface ItemListComponentProps {
  data: Item[];
  visibleItems?: number;
}

const ItemListComponent = ({
  data,
  visibleItems = Infinity,
}: ItemListComponentProps) => {
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price}/</Text>
          <Text style={styles.priceHour}>hour</Text>
        </View>
      </View>
      <View style={styles.time}>
        <Text style={styles.timeText}>{item.time} min</Text>
      </View>
    </View>
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
  timeText: {
    fontFamily: "Avenir-Book",
    fontSize: 12,
    color: Colors.tomato,
  },
});

export default ItemListComponent;
