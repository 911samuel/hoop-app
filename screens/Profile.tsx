import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Colors from "../config/Colors";
import AppHeading from "../components/AppHeading";
import NotificationIcon from "../components/NotificationIcon";
import Continue from "../components/Continue";
import AppButton from "../components/AppButton";

const Profile = () => {
  return (
    <View style={styles.container}>
      <AppHeading
        title="Profile"
        fontSize={28}
        color={Colors.primary}
        paddingBottom={47}
      />
      <View style={styles.profile}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={require("../assets/diane.png")} />
          <View style={{ marginLeft: 24 }}>
            <AppHeading
              title="Welcome"
              color={Colors.welcomeText}
              fontSize={14}
              textAlign="left"
            />
            <AppHeading
              title="Diane"
              color={Colors.primary}
              fontSize={20}
              textAlign="left"
            />
          </View>
        </View>
        <NotificationIcon
          antDesignIconName={"logout"}
          color={Colors.searchIcon}
        />
      </View>
      <View style={styles.categories}>
        <Continue title="Profile" image={require("../assets/Profile.png")} />
        <Continue title="Go Pro" image={require("../assets/Discount.png")} />
        <Continue
          title="Terms & Conditions"
          image={require("../assets/Document.png")}
        />
        <Continue title="FAQ" image={require("../assets/question.png")} />
        <Continue title="Settings" image={require("../assets/Setting.png")} />
        <AppButton
          title="How can we help you?"
          iconName="headset"
          marginTop={80}
          marginBottom={30}
              />
              <AppHeading title="Parking v.1" fontSize={12} color={Colors.thirdText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 60,
    paddingBottom: 0,
    backgroundColor: Colors.secondaryBackground,
  },
  categories: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.thirdBackground,
    borderTopEndRadius: 38,
    borderTopStartRadius: 38,
    padding: 38,
    paddingBottom: 0,
    paddingTop: 50,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 38,
  },
});

export default Profile;
