import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Explore from "../screens/Explore";
import Profile from "../screens/Profile";
import BookDetail from "../screens/BookDetail";
import ChoosePlan from "../screens/ChoosePlan";
import Detail from "../screens/Detail";
import DetailHistory from "../screens/DetailHistory";
import DetailsCategory from "../screens/DetailsCategory";
import EditProfile from "../screens/EditProfile";
import Home from "../screens/Home";
import Notifications from "../screens/Notification";
import ParkingRoute from "../screens/ParkingRoute";
import Payment from "../screens/Payment";
import PaymentDetails from "../screens/PaymentDetails";
import PaymentSuccess from "../screens/PaymentSuccess";
import Upgrade from "../screens/Upgrade";
import History from "../screens/History";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Upgrade" component={Upgrade} />
      <Stack.Screen name="ChoosePlan" component={ChoosePlan} />
      <Stack.Screen name="DetailHistory" component={DetailHistory} />
      <Stack.Screen name="Notification" component={Notifications} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="DetailsCategory" component={DetailsCategory} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ParkingRoute" component={ParkingRoute} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="BookDetail" component={BookDetail} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
