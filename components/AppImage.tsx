import React from "react";
import { Image, StyleSheet } from "react-native";

interface AppImageProps {
  image: any;
  width?: number; 
  height?: number; 
  marginTop?: number; 
}

const AppImage: React.FC<AppImageProps> = ({
  image,
  width = 308,
  height = 176,
  marginTop = 105,
}) => {
  return (
    <Image
      style={[styles.image, { width, height, marginTop }]}
      source={image}
    />
  );
};

const styles = StyleSheet.create({
  image: {},
});

export default AppImage;
