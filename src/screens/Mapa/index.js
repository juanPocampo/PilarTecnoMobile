import React, { Component, useCallback } from "react";
import { SafeAreaView, View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";

export default Mapa = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.mainContent}
        source={require("../../assets/images/bgGreenYellow.png")}
      >
        <Text>Mapa</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};
