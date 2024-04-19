import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import OnBoarding from "./screens/OnBoarding";
import LoginEmail from "./screens/LoginEmail";
import LoginPhone from "./screens/LoginPhone";
import SignUp from "./screens/SignUp";
import ForgotPassword from "./screens/ForgotPassword";
import EmailCheck from "./screens/EmailCheck";
import OTP from "./screens/OTP";
import RequestCode from "./screens/RequestCode";
import Upgrade from "./screens/Upgrade";
import ChoosePlan from "./screens/ChoosePlan";
import DetailHistory from "./screens/DetailHistory";
import Notifications from "./screens/Notification";
import DetailsCategory from "./screens/DetailsCategory";
import EditProfile from "./screens/EditProfile";
import Explore from "./screens/Explore";
import Home from "./screens/Home";
import ParkingRoute from "./screens/ParkingRoute";
import Profile from "./screens/Profile";
import History from "./screens/History";
import Detail from "./screens/Detail";

import ShowMaps from "./screens/ShowMaps";

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
				initialRouteName="ShowMaps"
				screenOptions={{ headerShown: false }}>
				<Stack.Screen name="OnBoarding" component={OnBoarding} />
				<Stack.Screen name="LoginPhone" component={LoginPhone} />
				<Stack.Screen name="LoginEmail" component={LoginEmail} />
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
				<Stack.Screen name="EmailCheck" component={EmailCheck} />
				<Stack.Screen name="OTP" component={OTP} />
				<Stack.Screen name="RequestCode" component={RequestCode} />
				<Stack.Screen name="Upgrade" component={Upgrade} />
				<Stack.Screen name="ChoosePlan" component={ChoosePlan} />
				<Stack.Screen name="DetailHistory" component={DetailHistory} />
				<Stack.Screen name="Notification" component={Notifications} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Explore" component={Explore} />
				<Stack.Screen name="History" component={History} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="DetailsCategory" component={DetailsCategory} />
				<Stack.Screen name="EditProfile" component={EditProfile} />
				<Stack.Screen name="ParkingRoute" component={ParkingRoute} />
				<Stack.Screen name="Detail" component={Detail} />
				<Stack.Screen name="ShowMaps" component={ShowMaps} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
