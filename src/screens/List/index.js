import React, { Component, useCallback } from "react";
import { SafeAreaView, View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";

export default List = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.mainContent}
        source={require("../../assets/images/bgGreenYellow.png")}
      >
        <Text>List</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};
