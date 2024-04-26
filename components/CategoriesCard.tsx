import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Colors from "../config/Colors";

interface Item {
  photo: any;
  title: string;
}

interface CategoriesCardProps {
  data: Item[];
  onPress?: () => void;
}

const CategoriesCard = ({ data, onPress }: CategoriesCardProps) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <TouchableOpacity key={index} style={styles.card} onPress={onPress}>
          <Image source={item.photo} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50
  },
  card: {
    width: 67,
    height: 73,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 24,
    height: 24,
  },
  title: {
    paddingTop: 10,
    fontSize: 14,
  },
});

export default CategoriesCard;
