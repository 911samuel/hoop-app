import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Explore from "./screens/Explore";
import Profile from "./screens/Profile";
import BookDetail from "./screens/BookDetail";
import ChoosePlan from "./screens/ChoosePlan";
import Detail from "./screens/Detail";
import DetailHistory from "./screens/DetailHistory";
import DetailsCategory from "./screens/DetailsCategory";
import EditProfile from "./screens/EditProfile";
import Home from "./screens/Home";
import Notifications from "./screens/Notification";
import ParkingRoute from "./screens/ParkingRoute";
import Payment from "./screens/Payment";
import PaymentDetails from "./screens/PaymentDetails";
import PaymentSuccess from "./screens/PaymentSuccess";
import Upgrade from "./screens/Upgrade";
import History from "./screens/History";

import OnBoarding from "./screens/OnBoarding";
import LoginEmail from "./screens/LoginEmail";
import LoginPhone from "./screens/LoginPhone";
import SignUp from "./screens/SignUp";
import ForgotPassword from "./screens/ForgotPassword";
import EmailCheck from "./screens/EmailCheck";
import OTP from "./screens/OTP";
import RequestCode from "./screens/RequestCode";

const AppStack = createStackNavigator();
const AuthStack = createStackNavigator();
const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => {
  const [isReady, setIsReady] = useState(false);
  return (
    <AppStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <AppStack.Screen name="Explore" component={Explore} />
      <AppStack.Screen name="Profile" component={Profile} />
      <AppStack.Screen name="Upgrade" component={Upgrade} />
      <AppStack.Screen name="ChoosePlan" component={ChoosePlan} />
      <AppStack.Screen name="DetailHistory" component={DetailHistory} />
      <AppStack.Screen name="Notifications" component={Notifications} />
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="History" component={History} />
      <AppStack.Screen name="DetailsCategory" component={DetailsCategory} />
      <AppStack.Screen name="EditProfile" component={EditProfile} />
      <AppStack.Screen name="ParkingRoute" component={ParkingRoute} />
      <AppStack.Screen name="Detail" component={Detail} />
      <AppStack.Screen name="BookDetail" component={BookDetail} />
      <AppStack.Screen name="PaymentSuccess" component={PaymentSuccess} />
      <AppStack.Screen name="Payment" component={Payment} />
      <AppStack.Screen name="PaymentDetails" component={PaymentDetails} />
    </AppStack.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthStack.Screen name="LoginPhone" component={LoginPhone} />
      <AuthStack.Screen name="LoginEmail" component={LoginEmail} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="EmailCheck" component={EmailCheck} />
      <AuthStack.Screen name="OTP" component={OTP} />
      <AuthStack.Screen name="RequestCode" component={RequestCode} />
    </AuthStack.Navigator>
  );
};

export { AuthNavigator, AppNavigator };
