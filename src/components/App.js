import React, { Component, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import AppStack from "../routes/app";

export default App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
