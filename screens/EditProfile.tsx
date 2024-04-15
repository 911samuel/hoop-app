import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppHeading from "../components/AppHeading";
import NotificationIcon from "../components/NotificationIcon";
import Colors from "../config/Colors";

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <NotificationIcon
          materialIconName="arrow-back-ios"
          backgroundColor={Colors.thirdButton}
          color={Colors.thirdText}
          width={55}
          height={55}
        />
        <AppHeading title="Edit Profile" fontSize={20} color={Colors.black} />
        <NotificationIcon backgroundColor={Colors.thirdBackground} />
      </View>
      <View style={styles.profileContainer}>
        <Image source={require("../assets/diane.png")} style={styles.profile} />
        <Image source={require("../assets/edit.png")} style={styles.editIcon} />
      </View>
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
    alignItems: "center",
    marginBottom: 47,
  },
  profileContainer: {
    alignItems: "center",
    position: "relative",
  },
  profile: {
    width: 86,
    height: 86,
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: "40%",
  },
});

export default EditProfile;
