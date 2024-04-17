import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Colors from "../config/Colors";

interface CategoriesCardProps {
  photo: any;
  title: string;
  onPress?: () => void;
}

const CategoriesCard = ({ photo, title, onPress }: CategoriesCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={photo} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
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
