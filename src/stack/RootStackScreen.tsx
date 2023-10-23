/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from "react";
import "react-native-gesture-handler";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  CreateBarangScreen,
  DataBarangScreen,
  DetailBarangScreen,
  UpdateBarangScreen,
} from "../screens";

export type RootStackParams = {
  Barangs: undefined;
  UpdateBarang: { data: any };
  CreateBarang: undefined;
  DetailBarang: { data: any };
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Barangs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="Barangs" component={DataBarangScreen} />
      <RootStack.Screen name="UpdateBarang" component={UpdateBarangScreen} />
      <RootStack.Screen name="CreateBarang" component={CreateBarangScreen} />
      <RootStack.Screen name="DetailBarang" component={DetailBarangScreen} />

      {/* new */}
      {/* <RootStack.Screen name="Dashboard" component={DashboardScreen} /> */}
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
