import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import "react-native-gesture-handler";


import { AppNavigator, AuthNavigator } from "./AppNavigator";
import { LoginContext } from "./components/LoginContext";



const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <NavigationContainer>
        {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </LoginContext.Provider>

  );
}

export default App;
