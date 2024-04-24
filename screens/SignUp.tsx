import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppwriteContext } from "../appwrite/AppwriteContext";
import InputBox from "../components/InputBox";
import AppButton from "../components/AppButton";

const { width, height } = Dimensions.get("window");

const SignUp = () => {
  const navigation = useNavigation();
  const { appwrite } = useContext(AppwriteContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {
      const result = await appwrite.createAccount({
        email,
        password,
        repeatPassword,
        phoneNumber,
      });

      if ("error" in result) {
        setError(result.error);
      } else {
        navigation.navigate("OnBoarding" as never);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  const navigateToLogin = () => {
    navigation.navigate("Login" as never);
  };

	return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.view}
        contentContainerStyle={{ flex: 1, alignContent: "center" }}
      >
        <Image source={require("./assets/lines.png")} style={styles.img} />
        <Text style={styles.title}>Let's Start!!</Text>
        <View style={styles.main}>
          <View style={styles.form}>
            <InputBox
              placeHolder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <InputBox
              placeHolder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <InputBox
              placeHolder="Password Authentication"
              secureTextEntry
              value={repeatPassword}
              onChangeText={setRepeatPassword}
            />
            <InputBox
              placeHolder="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <View>
            <AppButton
              title="Register"
              backgroundColor="#130F26"
              width={311}
              onPress={handleSignUp}
            />
          </View>
          <View style={[styles.forgot, styles.forgot2]}>
            <Text>Have an account? </Text>
            <TouchableOpacity onPress={navigateToLogin}>
              <Text style={{ color: "red", fontSize: 15 }}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  form: {
    width: "100%",
    alignItems: "center",
    minHeight: 450,
  },
  forgot: {
    alignItems: "center",
    width: width - 80,
    justifyContent: "flex-end",
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 10,
  },
  forgot2: {
    justifyContent: "center",
  },
  main: {
    backgroundColor: "#F4F4FA",
    height: height,
    borderRadius: 40,
    marginTop: 80,
    paddingTop: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "#ffffff",
    textAlign: "center",
    marginTop: 100,
  },
  img: {
    position: "absolute",
    width: width,
    height: undefined,
    aspectRatio: 375 / 283,
    top: 0,
    left: 0,
  },
  view: {
    backgroundColor: "#130F26",
    position: "relative",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default SignUp;
