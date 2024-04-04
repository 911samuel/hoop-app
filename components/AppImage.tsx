import React from "react";
import { Image, StyleSheet } from "react-native";

interface AppImageProps {
  image: any;
}

const AppImage: React.FC<AppImageProps> = ({ image }) => {
  return <Image style={styles.image} source={image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginBottom: 70,
    marginTop: 105,
  },
});

export default AppImage;
