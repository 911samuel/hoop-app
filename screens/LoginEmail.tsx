import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Client, Account } from "appwrite";

import AppButton from "../components/AppButton";
import InputBox from "../components/InputBox";
import SingUpText from "../components/SingUpText";
import { LoginContext } from "../components/LoginContext";

const { width, height } = Dimensions.get("window");

const LoginEmail = () => {
  const navigation = useNavigation();
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("66259128762986b20dac");

  const account = new Account(client);

  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    if (email.length < 1 || password.length < 1) {
      setError("All fields are required");
    } else {
      try {
        const response = await account.createEmailPasswordSession(
          email,
          password
        );
        console.log(response);
        setIsLoggedIn(true);
      } catch (error) {
        console.log(error);
        setError("Incorrect email or password");
      }
    }
  };

  const forgot = () => {
    navigation.navigate("ForgotPassword" as never);
  };

  const handleSignUpPress = () => {
    navigation.navigate("SignUp" as never);
  };

  return (
    <ScrollView
      style={styles.view}
      contentContainerStyle={{ flex: 1, alignContent: "center" }}
    >
      <Image source={require("./assets/lines.png")} style={styles.img} />
      <Text style={styles.title}>Glad to see you!!</Text>
      <View style={styles.main}>
        <View style={styles.form}>
          <InputBox
            inputMode="email"
            placeHolder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <InputBox
            placeHolder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.forgot}>
            <Text>Forgot password? {"    "}</Text>
            <TouchableOpacity onPress={forgot}>
              <Text style={{ color: "red", fontSize: 15 }}>Retrieve</Text>
            </TouchableOpacity>
          </View>
          {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
        <View>
          <AppButton
            title="Login"
            backgroundColor="#130F26"
            onPress={handleLogin}
            width={311}
          />
        </View>
        <SingUpText onPress={handleSignUpPress} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    width: "100%",
    alignItems: "center",
    minHeight: 400,
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
    paddingTop: 50,
    backgroundColor: "#130F26",
    position: "relative",
    height: height,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default LoginEmail;
