import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoarding from "../screens/OnBoarding";
import LoginEmail from "../screens/LoginEmail";
import LoginPhone from "../screens/LoginPhone";
import SignUp from "../screens/SignUp";
import ForgotPassword from "../screens/ForgotPassword";
import EmailCheck from "../screens/EmailCheck";
import OTP from "../screens/OTP";
import RequestCode from "../screens/RequestCode";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="LoginPhone" component={LoginPhone} />
      <Stack.Screen name="LoginEmail" component={LoginEmail} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="EmailCheck" component={EmailCheck} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="RequestCode" component={RequestCode} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
