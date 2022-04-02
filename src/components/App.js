import React, { Component, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "../routes/app";
import { Provider } from "react-redux";
import {store} from "../store"

export default App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};
