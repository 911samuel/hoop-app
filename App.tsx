import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import FindParkingScreen from "./screens/FindParkingScreen";
import OnBoarding from "./screens2/OnBoarding";
import LoginEmail from "./screens2/LoginEmail";
import LoginPhone from "./screens2/LoginPhone";
import SignUp from "./screens2/SignUp";
import ForgotPassword from "./screens2/ForgotPassword";
import EmailCheck from "./screens2/EmailCheck";

const Stack = createStackNavigator();

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        "Avenir-Black": require("./assets/Avenir/Avenir Black.ttf"),
        "Avenir-Book": require("./assets/Avenir/Avenir Book.ttf"),
        "Avenir-Light": require("./assets/Avenir/Avenir Light.ttf"),
        "Avenir-Regular": require("./assets/Avenir/Avenir Regular.ttf"),
      });
    } catch (error) {
      console.log("Error loading fonts:", error);
    }
  };

  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadFonts();
        await SplashScreen.hideAsync();
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setIsReady(true);
      }
    };

    prepare();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
		<NavigationContainer>
			<StatusBar style="light" backgroundColor="#000" />
			<Stack.Navigator
				initialRouteName="EmailCheck"
				screenOptions={{ headerShown: false }}>
				<Stack.Screen name="OnBoarding" component={OnBoarding} />
				<Stack.Screen name="LoginPhone" component={LoginPhone} />
				<Stack.Screen name="LoginEmail" component={LoginEmail} />
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
				<Stack.Screen name="EmailCheck" component={EmailCheck} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
