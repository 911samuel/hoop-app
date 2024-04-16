import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import Colors from "../config/Colors";

type AntDesignIconName = "filter" | "logout";
type MaterialIconName = "notifications-none" | "arrow-back-ios";

interface NotificationIconProps {
  backgroundColor?: string;
  antDesignIconName?: AntDesignIconName;
  materialIconName?: MaterialIconName;
  color?: string;
  width?: number;
  height?: number;
  onPress: () => void;
}

const NotificationIcon = ({
  backgroundColor = "#2A344E",
  antDesignIconName,
  materialIconName,
  color,
  width = 44,
  height = 44,
  onPress,
}: NotificationIconProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor, width, height }]}
      onPress={onPress}
    >
      {antDesignIconName && (
        <AntDesign
          name={antDesignIconName}
          style={[styles.notification, { color }]}
          size={24}
        />
      )}
      {materialIconName && (
        <MaterialIcons
          name={materialIconName}
          style={[styles.notification, { color }]}
          size={24}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  notification: {},
});

export default NotificationIcon;
