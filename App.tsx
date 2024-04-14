import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import "react-native-gesture-handler";

import Home from "./screens/Home";
import Explore from "./screens/Explore";

import History from "./screens/History";
import Profile from "./screens/Profile";
import DetailsCategory from "./screens/DetailsCategory";

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
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="DetailsCategory" component={DetailsCategory} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
