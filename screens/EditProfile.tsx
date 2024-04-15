import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppHeading from "../components/AppHeading";
import NotificationIcon from "../components/NotificationIcon";
import Colors from "../config/Colors";
import InputText from "../components/InputText";
import AppButton from "../components/AppButton";

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
      <View style={styles.detailsContainer}>
        <AppHeading
          title="Name"
          fontSize={16}
          color={Colors.thirdText}
          textAlign="left"
          paddingBottom={13}
        />
        <InputText placeholder="Echa" />
      </View>
      <View style={styles.type}>
        <View>
          <AppHeading
            title="Type"
            fontSize={16}
            color={Colors.thirdText}
            textAlign="left"
            paddingBottom={13}
          />
          <InputText placeholder="Car Sport" icon="keyboard-arrow-down" />
        </View>
        <View>
          <AppHeading
            title="ID"
            fontSize={16}
            color={Colors.thirdText}
            textAlign="left"
            paddingBottom={13}
          />
          <InputText placeholder="C68721" />
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <AppHeading
          title="Address"
          fontSize={16}
          color={Colors.thirdText}
          textAlign="left"
          paddingBottom={13}
        />
        <InputText placeholder="Address" />
      </View>
      <View style={styles.buttons}>
        <AppButton
          title="Cancel"
          backgroundColor={Colors.thirdButton}
          color={Colors.thirdText}
          width="40%"
        />
        <AppButton title="Save" width="40%" />
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
    marginBottom: 40,
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
  detailsContainer: {
    marginTop: 24,
  },
  type: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 127,
  },
});

export default EditProfile;
