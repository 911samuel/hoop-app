import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import "react-native-gesture-handler";

import FindParkingScreen from "./screens/FindParkingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import HollaScreen from "./screens/HollaScreen";

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
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="FindParking" component={FindParkingScreen} />
        <Stack.Screen name="Holla" component={HollaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
