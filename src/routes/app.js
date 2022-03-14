import React, { Component, useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/index";
import Mapa from "../screens/Mapa/index";
import List from "../screens/List/index";
import Profile from "../screens/Profile/index";
const Stack = createStackNavigator();
export default AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ header: () => null }}
      />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Mapa" component={Mapa} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
